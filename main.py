from fastapi import FastAPI, HTTPException, Depends
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List, Optional
from datetime import datetime
import sqlite3
import json

app = FastAPI()

# Enable CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Database initialization
def init_db():
    conn = sqlite3.connect('powerfit.db')
    c = conn.cursor()
    c.execute('''CREATE TABLE IF NOT EXISTS users
                 (id INTEGER PRIMARY KEY AUTOINCREMENT,
                  username TEXT UNIQUE NOT NULL,
                  password TEXT NOT NULL)''')
    c.execute('''CREATE TABLE IF NOT EXISTS schedules
                 (id INTEGER PRIMARY KEY AUTOINCREMENT,
                  user_id INTEGER,
                  schedule TEXT NOT NULL,
                  FOREIGN KEY (user_id) REFERENCES users (id))''')
    conn.commit()
    conn.close()

init_db()

# Models
class User(BaseModel):
    username: str
    password: str

class Schedule(BaseModel):
    user_id: int
    schedule: List[dict]

# Routes
@app.post("/api/register")
async def register(user: User):
    conn = sqlite3.connect('powerfit.db')
    c = conn.cursor()
    try:
        c.execute("INSERT INTO users (username, password) VALUES (?, ?)",
                 (user.username, user.password))
        conn.commit()
        return {"message": "User registered successfully"}
    except sqlite3.IntegrityError:
        raise HTTPException(status_code=400, detail="Username already exists")
    finally:
        conn.close()

@app.post("/api/login")
async def login(user: User):
    conn = sqlite3.connect('powerfit.db')
    c = conn.cursor()
    c.execute("SELECT id, password FROM users WHERE username = ?", (user.username,))
    result = c.fetchone()
    conn.close()
    
    if result and result[1] == user.password:
        return {"user_id": result[0], "message": "Login successful"}
    raise HTTPException(status_code=401, detail="Invalid credentials")

@app.post("/api/schedule")
async def save_schedule(schedule: Schedule):
    conn = sqlite3.connect('powerfit.db')
    c = conn.cursor()
    try:
        c.execute("INSERT INTO schedules (user_id, schedule) VALUES (?, ?)",
                 (schedule.user_id, json.dumps(schedule.schedule)))
        conn.commit()
        return {"message": "Schedule saved successfully"}
    finally:
        conn.close()

@app.get("/api/schedule/{user_id}")
async def get_schedule(user_id: int):
    conn = sqlite3.connect('powerfit.db')
    c = conn.cursor()
    c.execute("SELECT schedule FROM schedules WHERE user_id = ? ORDER BY id DESC LIMIT 1", (user_id,))
    result = c.fetchone()
    conn.close()
    
    if result:
        return {"schedule": json.loads(result[0])}
    return {"schedule": []}