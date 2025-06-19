
import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { AlertTriangle, CheckCircle, Info, Leaf } from 'lucide-react';

interface DiagnosisResult {
  label: string;
  score: number;
}

interface DiagnosisResultsProps {
  results: DiagnosisResult[];
  isLoading: boolean;
}

const DiagnosisResults: React.FC<DiagnosisResultsProps> = ({ results, isLoading }) => {
  if (isLoading) {
    return (
      <Card className="p-6 animate-pulse">
        <div className="space-y-4">
          <div className="h-4 bg-gray-200 rounded w-3/4"></div>
          <div className="h-4 bg-gray-200 rounded w-1/2"></div>
          <div className="h-4 bg-gray-200 rounded w-2/3"></div>
        </div>
      </Card>
    );
  }

  if (!results.length) return null;

  const getIconForResult = (label: string, score: number) => {
    if (label.toLowerCase().includes('healthy') || label.toLowerCase().includes('normal')) {
      return <CheckCircle className="h-5 w-5 text-green-600" />;
    } else if (score > 0.7) {
      return <AlertTriangle className="h-5 w-5 text-red-600" />;
    } else {
      return <Info className="h-5 w-5 text-yellow-600" />;
    }
  };

  const getColorForScore = (score: number) => {
    if (score > 0.7) return 'bg-red-100 text-red-800 border-red-200';
    if (score > 0.4) return 'bg-yellow-100 text-yellow-800 border-yellow-200';
    return 'bg-green-100 text-green-800 border-green-200';
  };

  return (
    <Card className="p-6 bg-white shadow-lg">
      <div className="flex items-center space-x-2 mb-4">
        <Leaf className="h-6 w-6 text-green-600" />
        <h3 className="text-xl font-bold text-gray-800">Diagnosis Results</h3>
      </div>
      
      <div className="space-y-3">
        {results.slice(0, 5).map((result, index) => (
          <div 
            key={index}
            className="flex items-center justify-between p-4 rounded-lg border bg-gray-50 hover:bg-gray-100 transition-colors"
          >
            <div className="flex items-center space-x-3">
              {getIconForResult(result.label, result.score)}
              <div>
                <p className="font-medium text-gray-800">{result.label}</p>
                <p className="text-sm text-gray-600">
                  Confidence: {(result.score * 100).toFixed(1)}%
                </p>
              </div>
            </div>
            <Badge className={`${getColorForScore(result.score)} border`}>
              {(result.score * 100).toFixed(1)}%
            </Badge>
          </div>
        ))}
      </div>

      <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
        <div className="flex items-start space-x-2">
          <Info className="h-5 w-5 text-blue-600 mt-0.5" />
          <div>
            <h4 className="font-semibold text-blue-800 mb-1">Recommendation</h4>
            <p className="text-sm text-blue-700">
              Based on the analysis, please consult with a plant pathologist or agricultural expert 
              for detailed treatment recommendations. Early detection and proper care are key to plant health.
            </p>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default DiagnosisResults;
