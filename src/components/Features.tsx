
import React from 'react';
import { Card } from '@/components/ui/card';
import { Brain, Zap, Shield, Users } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: <Brain className="h-8 w-8 text-green-600" />,
      title: "AI-Powered Analysis",
      description: "Advanced deep learning models trained on thousands of plant disease images"
    },
    {
      icon: <Zap className="h-8 w-8 text-blue-600" />,
      title: "Instant Results",
      description: "Get diagnosis results in seconds with confidence scores and recommendations"
    },
    {
      icon: <Shield className="h-8 w-8 text-purple-600" />,
      title: "High Accuracy",
      description: "State-of-the-art computer vision technology for reliable plant health assessment"
    },
    {
      icon: <Users className="h-8 w-8 text-orange-600" />,
      title: "Expert Backed",
      description: "Models developed in collaboration with agricultural experts and plant pathologists"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Why Choose PlantDoc AI?
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="flex justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
