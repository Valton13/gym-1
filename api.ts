const API_URL = 'http://localhost:8000/api';

export interface User {
  username: string;
  password: string;
}

export interface Schedule {
  user_id: number;
  schedule: Array<{
    day: string;
    exercises: Array<{
      name: string;
      sets: number;
      reps: number;
    }>;
  }>;
}

export const api = {
  async register(user: User) {
    const response = await fetch(`${API_URL}/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    });
    if (!response.ok) {
      throw new Error('Registration failed');
    }
    return response.json();
  },

  async login(user: User) {
    const response = await fetch(`${API_URL}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    });
    if (!response.ok) {
      throw new Error('Login failed');
    }
    return response.json();
  },

  async saveSchedule(schedule: Schedule) {
    const response = await fetch(`${API_URL}/schedule`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(schedule),
    });
    if (!response.ok) {
      throw new Error('Failed to save schedule');
    }
    return response.json();
  },

  async getSchedule(userId: number) {
    const response = await fetch(`${API_URL}/schedule/${userId}`);
    if (!response.ok) {
      throw new Error('Failed to fetch schedule');
    }
    return response.json();
  },
};