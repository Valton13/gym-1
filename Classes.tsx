import { Dumbbell, ArrowRight } from 'lucide-react';

export default function Classes() {
  const exercises = [
    {
      name: "Squats",
      description: "A compound exercise targeting your legs, core, and lower body strength",
      instructions: [
        "Stand with feet shoulder-width apart",
        "Keep your back straight and core engaged",
        "Lower your body as if sitting back into a chair",
        "Keep knees aligned with toes",
        "Return to starting position"
      ],
      image: "https://images.unsplash.com/photo-1566241142559-40e1dab266c6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      difficulty: "Beginner to Advanced"
    },
    {
      name: "Bicep Curls",
      description: "An isolation exercise focusing on bicep strength and definition",
      instructions: [
        "Stand with feet shoulder-width apart",
        "Hold dumbbells at your sides",
        "Curl weights up toward shoulders",
        "Keep elbows close to body",
        "Lower weights with control"
      ],
      image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      difficulty: "Beginner"
    },
    {
      name: "Shoulder Press",
      description: "A compound movement for building shoulder strength and stability",
      instructions: [
        "Sit or stand with straight back",
        "Hold dumbbells at shoulder height",
        "Press weights overhead",
        "Fully extend arms",
        "Return to starting position"
      ],
      image: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      difficulty: "Intermediate"
    },
    {
      name: "Lateral Raises",
      description: "An isolation exercise targeting the lateral deltoids",
      instructions: [
        "Stand with feet shoulder-width apart",
        "Hold dumbbells at sides",
        "Raise arms out to sides",
        "Keep slight bend in elbows",
        "Lower with control"
      ],
      image: "https://images.unsplash.com/photo-1576678927484-cc907957088c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      difficulty: "Beginner to Intermediate"
    },
    {
      name: "Push-Ups",
      description: "A bodyweight exercise that builds chest, shoulder, and core strength",
      instructions: [
        "Start in plank position",
        "Keep body straight",
        "Lower chest to ground",
        "Keep elbows at 45° angle",
        "Push back up to start"
      ],
      image: "https://images.unsplash.com/photo-1598971639058-999901021c1a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      difficulty: "Beginner to Advanced"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Exercise Classes</h1>
          <p className="text-xl text-gray-600">Master these fundamental exercises for a stronger, healthier you</p>
        </div>

        <div className="grid gap-8">
          {exercises.map((exercise, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/3">
                  <img 
                    src={exercise.image} 
                    alt={exercise.name}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="p-8 md:w-2/3">
                  <div className="flex items-center mb-4">
                    <Dumbbell className="h-6 w-6 text-red-500 mr-2" />
                    <h2 className="text-2xl font-bold text-gray-900">{exercise.name}</h2>
                  </div>
                  <p className="text-gray-600 mb-4">{exercise.description}</p>
                  <div className="mb-4">
                    <span className="inline-block bg-red-100 text-red-800 text-sm font-semibold px-3 py-1 rounded-full">
                      {exercise.difficulty}
                    </span>
                  </div>
                  <div className="space-y-4">
                    <h3 className="font-semibold text-gray-900">Instructions:</h3>
                    <ul className="space-y-2">
                      {exercise.instructions.map((instruction, idx) => (
                        <li key={idx} className="flex items-start">
                          <ArrowRight className="h-5 w-5 text-red-500 mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-600">{instruction}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}