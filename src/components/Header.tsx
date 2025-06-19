
import React from 'react';
import { Microscope, Leaf } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-gradient-to-r from-green-600 to-green-700 text-white py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-center space-x-3 mb-4">
          <div className="p-2 bg-white/20 rounded-full">
            <Microscope className="h-8 w-8" />
          </div>
          <h1 className="text-4xl font-bold">PlantDoc AI</h1>
          <div className="p-2 bg-white/20 rounded-full">
            <Leaf className="h-8 w-8" />
          </div>
        </div>
        <p className="text-xl text-center text-green-100 max-w-2xl mx-auto">
          Advanced Plant & Crop Disease Diagnosis using Deep Learning
        </p>
        <p className="text-center text-green-200 mt-2">
          Upload an image of your plant for instant AI-powered health analysis
        </p>
      </div>
    </header>
  );
};

export default Header;
