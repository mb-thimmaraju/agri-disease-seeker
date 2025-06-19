
import React from 'react';
import Header from '@/components/Header';
import ImageUpload from '@/components/ImageUpload';
import DiagnosisResults from '@/components/DiagnosisResults';
import Features from '@/components/Features';
import { usePlantDiagnosis } from '@/hooks/usePlantDiagnosis';

const Index = () => {
  const { analyzeImage, isAnalyzing, results } = usePlantDiagnosis();

  const handleImageSelect = (file: File) => {
    console.log('Image selected:', file.name);
    analyzeImage(file);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      <Header />
      
      <main className="max-w-4xl mx-auto px-4 py-12">
        <div className="space-y-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Upload Your Plant Image for Analysis
            </h2>
            <p className="text-gray-600">
              Our AI will analyze your plant image and provide detailed health insights
            </p>
          </div>
          
          <ImageUpload 
            onImageSelect={handleImageSelect}
            isAnalyzing={isAnalyzing}
          />
          
          {(results.length > 0 || isAnalyzing) && (
            <DiagnosisResults 
              results={results}
              isLoading={isAnalyzing}
            />
          )}
        </div>
      </main>

      <Features />
      
      <footer className="bg-gray-800 text-white py-8 mt-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-gray-400">
            PlantDoc AI - Advancing agriculture through artificial intelligence
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Always consult with agricultural experts for critical plant health decisions
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
