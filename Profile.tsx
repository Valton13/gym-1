import { useState, useEffect } from 'react';
import { Calendar, Clock, Save, Plus, Minus, Trash2 } from 'lucide-react';
import { api } from '../services/api';

interface WorkoutSchedule {
  day: string;
  exercises: {
    name: string;
    sets: number;
    reps: number;
  }[];
}

export default function Profile() {
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  const availableExercises = ['Squats', 'Bicep Curls', 'Shoulder Press', 'Lateral Raises', 'Push-Ups'];
  
  const [schedule, setSchedule] = useState<WorkoutSchedule[]>(
    days.map(day => ({ day, exercises: [] }))
  );
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // In a real app, you would get this from your auth context/state
  const userId = localStorage.getItem('userId');

  useEffect(() => {
    if (userId) {
      loadSchedule();
    }
  }, [userId]);

  const loadSchedule = async () => {
    try {
      setLoading(true);
      const response = await api.getSchedule(Number(userId));
      if (response.schedule.length > 0) {
        setSchedule(response.schedule);
      }
    } catch (err) {
      setError('Failed to load schedule');
    } finally {
      setLoading(false);
    }
  };

  const addExercise = (dayIndex: number) => {
    const newSchedule = [...schedule];
    newSchedule[dayIndex].exercises.push({
      name: availableExercises[0],
      sets: 3,
      reps: 12
    });
    setSchedule(newSchedule);
  };

  const removeExercise = (dayIndex: number, exerciseIndex: number) => {
    const newSchedule = [...schedule];
    newSchedule[dayIndex].exercises.splice(exerciseIndex, 1);
    setSchedule(newSchedule);
  };

  const updateExercise = (dayIndex: number, exerciseIndex: number, field: string, value: string | number) => {
    const newSchedule = [...schedule];
    const exercise = newSchedule[dayIndex].exercises[exerciseIndex];
    if (field === 'name') {
      exercise.name = value as string;
    } else if (field === 'sets') {
      exercise.sets = Math.max(1, Number(value));
    } else if (field === 'reps') {
      exercise.reps = Math.max(1, Number(value));
    }
    setSchedule(newSchedule);
  };

  const saveSchedule = async () => {
    if (!userId) {
      setError('Please login to save your schedule');
      return;
    }

    try {
      setLoading(true);
      await api.saveSchedule({
        user_id: Number(userId),
        schedule
      });
      setError(null);
      alert('Schedule saved successfully!');
    } catch (err) {
      setError('Failed to save schedule');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div className="min-h-screen bg-gray-100 flex items-center justify-center">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center">
              <Calendar className="h-8 w-8 text-red-500 mr-3" />
              <h1 className="text-3xl font-bold text-gray-900">Weekly Workout Schedule</h1>
            </div>
            <button
              onClick={saveSchedule}
              disabled={loading}
              className="flex items-center bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg disabled:opacity-50"
            >
              <Save className="h-5 w-5 mr-2" />
              {loading ? 'Saving...' : 'Save Schedule'}
            </button>
          </div>

          {error && (
            <div className="mb-4 p-4 bg-red-100 text-red-700 rounded-lg">
              {error}
            </div>
          )}

          <div className="space-y-6">
            {schedule.map((day, dayIndex) => (
              <div key={day.day} className="border rounded-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <Clock className="h-6 w-6 text-red-500 mr-2" />
                    <h2 className="text-xl font-semibold text-gray-900">{day.day}</h2>
                  </div>
                  <button
                    onClick={() => addExercise(dayIndex)}
                    className="flex items-center bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-2 rounded-lg"
                  >
                    <Plus className="h-5 w-5 mr-1" />
                    Add Exercise
                  </button>
                </div>

                {day.exercises.length === 0 ? (
                  <p className="text-gray-500 italic">No exercises scheduled</p>
                ) : (
                  <div className="space-y-4">
                    {day.exercises.map((exercise, exerciseIndex) => (
                      <div key={exerciseIndex} className="flex items-center gap-4 bg-gray-50 p-4 rounded-lg">
                        <select
                          value={exercise.name}
                          onChange={(e) => updateExercise(dayIndex, exerciseIndex, 'name', e.target.value)}
                          className="flex-grow bg-white border rounded-lg px-3 py-2"
                        >
                          {availableExercises.map(name => (
                            <option key={name} value={name}>{name}</option>
                          ))}
                        </select>

                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => updateExercise(dayIndex, exerciseIndex, 'sets', exercise.sets - 1)}
                            className="p-1 hover:bg-gray-200 rounded"
                          >
                            <Minus className="h-4 w-4" />
                          </button>
                          <input
                            type="number"
                            value={exercise.sets}
                            onChange={(e) => updateExercise(dayIndex, exerciseIndex, 'sets', e.target.value)}
                            className="w-16 text-center border rounded-lg px-2 py-1"
                          />
                          <button
                            onClick={() => updateExercise(dayIndex, exerciseIndex, 'sets', exercise.sets + 1)}
                            className="p-1 hover:bg-gray-200 rounded"
                          >
                            <Plus className="h-4 w-4" />
                          </button>
                          <span className="text-gray-600">sets</span>
                        </div>

                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => updateExercise(dayIndex, exerciseIndex, 'reps', exercise.reps - 1)}
                            className="p-1 hover:bg-gray-200 rounded"
                          >
                            <Minus className="h-4 w-4" />
                          </button>
                          <input
                            type="number"
                            value={exercise.reps}
                            onChange={(e) => updateExercise(dayIndex, exerciseIndex, 'reps', e.target.value)}
                            className="w-16 text-center border rounded-lg px-2 py-1"
                          />
                          <button
                            onClick={() => updateExercise(dayIndex, exerciseIndex, 'reps', exercise.reps + 1)}
                            className="p-1 hover:bg-gray-200 rounded"
                          >
                            <Plus className="h-4 w-4" />
                          </button>
                          <span className="text-gray-600">reps</span>
                        </div>

                        <button
                          onClick={() => removeExercise(dayIndex, exerciseIndex)}
                          className="p-2 text-red-500 hover:bg-red-50 rounded-lg"
                        >
                          <Trash2 className="h-5 w-5" />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}