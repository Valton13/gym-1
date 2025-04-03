import { Menu, X, Dumbbell } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Dumbbell className="h-8 w-8 text-red-500" />
              <span className="text-xl font-bold">PowerFit</span>
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link to="/" className="hover:text-red-500 px-3 py-2 rounded-md text-sm font-medium">Home</Link>
              <Link to="/guide" className="hover:text-red-500 px-3 py-2 rounded-md text-sm font-medium">Training Guide</Link>
              <Link to="/pricing" className="hover:text-red-500 px-3 py-2 rounded-md text-sm font-medium">Pricing</Link>
              <Link to="/profile" className="hover:text-red-500 px-3 py-2 rounded-md text-sm font-medium">Profile</Link>
              <Link to="/login" className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-md text-sm font-medium">Login</Link>
            </div>
          </div>
          
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-red-500">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="hover:text-red-500 block px-3 py-2 rounded-md text-base font-medium">Home</Link>
            <Link to="/guide" className="hover:text-red-500 block px-3 py-2 rounded-md text-base font-medium">Training Guide</Link>
            <Link to="/pricing" className="hover:text-red-500 block px-3 py-2 rounded-md text-base font-medium">Pricing</Link>
            <Link to="/profile" className="hover:text-red-500 block px-3 py-2 rounded-md text-base font-medium">Profile</Link>
            <Link to="/login" className="bg-red-500 hover:bg-red-600 block px-3 py-2 rounded-md text-base font-medium">Login</Link>
          </div>
        </div>
      )}
    </nav>
  );
}