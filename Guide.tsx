import { BookOpen, Target, Activity } from 'lucide-react';

export default function Guide() {
  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Training Guide</h1>
          <p className="text-xl text-gray-600">Your comprehensive guide to achieving your fitness goals</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Beginner's Guide */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <BookOpen className="h-12 w-12 text-red-500 mb-4" />
            <h2 className="text-2xl font-bold mb-4">Beginner's Guide</h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="h-6 w-6 rounded-full bg-red-100 text-red-500 flex items-center justify-center mr-3 mt-1">1</span>
                <div>
                  <h3 className="font-semibold">Warm-up Routine</h3>
                  <p className="text-gray-600">5-10 minutes of light cardio and dynamic stretching</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="h-6 w-6 rounded-full bg-red-100 text-red-500 flex items-center justify-center mr-3 mt-1">2</span>
                <div>
                  <h3 className="font-semibold">Basic Exercises</h3>
                  <p className="text-gray-600">Learn proper form for squats, push-ups, and planks</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="h-6 w-6 rounded-full bg-red-100 text-red-500 flex items-center justify-center mr-3 mt-1">3</span>
                <div>
                  <h3 className="font-semibold">Cool-down</h3>
                  <p className="text-gray-600">5 minutes of static stretching</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Advanced Training */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <Target className="h-12 w-12 text-red-500 mb-4" />
            <h2 className="text-2xl font-bold mb-4">Advanced Training</h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="h-6 w-6 rounded-full bg-red-100 text-red-500 flex items-center justify-center mr-3 mt-1">1</span>
                <div>
                  <h3 className="font-semibold">HIIT Workouts</h3>
                  <p className="text-gray-600">High-intensity interval training for maximum results</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="h-6 w-6 rounded-full bg-red-100 text-red-500 flex items-center justify-center mr-3 mt-1">2</span>
                <div>
                  <h3 className="font-semibold">Strength Training</h3>
                  <p className="text-gray-600">Progressive overload techniques and compound exercises</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="h-6 w-6 rounded-full bg-red-100 text-red-500 flex items-center justify-center mr-3 mt-1">3</span>
                <div>
                  <h3 className="font-semibold">Recovery</h3>
                  <p className="text-gray-600">Proper nutrition and rest strategies</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Workout Tracking */}
        <div className="mt-12 bg-white p-8 rounded-lg shadow-lg">
          <Activity className="h-12 w-12 text-red-500 mb-4" />
          <h2 className="text-2xl font-bold mb-4">Track Your Progress</h2>
          <p className="text-gray-600 mb-6">Monitor your fitness journey and celebrate your achievements</p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-4 bg-gray-50 rounded-lg">
              <h3 className="font-semibold mb-2">Weekly Goals</h3>
              <p className="text-gray-600">Set achievable targets for each week</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <h3 className="font-semibold mb-2">Workout Log</h3>
              <p className="text-gray-600">Record your exercises and progress</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <h3 className="font-semibold mb-2">Measurements</h3>
              <p className="text-gray-600">Track body measurements and weight</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}