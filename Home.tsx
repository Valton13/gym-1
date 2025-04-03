import { ArrowRight, Users, Clock, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div 
        className="h-screen bg-cover bg-center relative"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80')"
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60">
          <div className="max-w-7xl mx-auto h-full flex items-center px-4 sm:px-6 lg:px-8">
            <div className="text-white">
              <h1 className="text-5xl md:text-6xl font-bold mb-4">Transform Your Body,<br />Transform Your Life</h1>
              <p className="text-xl mb-8">Join PowerFit and start your fitness journey today</p>
              <Link to="/classes" className="inline-flex items-center bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-8 rounded-lg">
                Get Started
                <ArrowRight className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-8 rounded-lg text-center">
              <Users className="h-12 w-12 text-red-500 mx-auto mb-4" />
              <h3 className="text-white text-xl font-bold mb-2">Expert Trainers</h3>
              <p className="text-gray-400">Our certified trainers will guide you through your fitness journey</p>
            </div>
            <div className="bg-gray-800 p-8 rounded-lg text-center">
              <Clock className="h-12 w-12 text-red-500 mx-auto mb-4" />
              <h3 className="text-white text-xl font-bold mb-2">24/7 Access</h3>
              <p className="text-gray-400">Train anytime with our flexible schedule and 24/7 gym access</p>
            </div>
            <div className="bg-gray-800 p-8 rounded-lg text-center">
              <Award className="h-12 w-12 text-red-500 mx-auto mb-4" />
              <h3 className="text-white text-xl font-bold mb-2">Premium Equipment</h3>
              <p className="text-gray-400">State-of-the-art equipment for the best workout experience</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}