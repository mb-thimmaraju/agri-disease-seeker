
import React, { useCallback, useState } from 'react';
import { Upload, Camera, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

interface ImageUploadProps {
  onImageSelect: (file: File) => void;
  isAnalyzing: boolean;
}

const ImageUpload: React.FC<ImageUploadProps> = ({ onImageSelect, isAnalyzing }) => {
  const [dragActive, setDragActive] = useState(false);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const handleDrag = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  }, []);

  const handleFile = (file: File) => {
    if (file && file.type.startsWith('image/')) {
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
      onImageSelect(file);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      handleFile(e.target.files[0]);
    }
  };

  return (
    <Card className="p-8 border-2 border-dashed border-green-300 bg-green-50/50 hover:bg-green-50 transition-colors">
      <div
        className={`text-center ${dragActive ? 'bg-green-100' : ''} p-6 rounded-lg transition-colors`}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
      >
        {previewUrl ? (
          <div className="space-y-4">
            <img 
              src={previewUrl} 
              alt="Preview" 
              className="max-w-full max-h-64 mx-auto rounded-lg shadow-md"
            />
            {isAnalyzing && (
              <div className="flex items-center justify-center space-x-2 text-green-600">
                <Loader2 className="h-5 w-5 animate-spin" />
                <span>Analyzing plant image...</span>
              </div>
            )}
          </div>
        ) : (
          <div className="space-y-4">
            <div className="flex justify-center">
              <div className="p-4 bg-green-100 rounded-full">
                <Camera className="h-12 w-12 text-green-600" />
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-700 mb-2">
                Upload Plant Image
              </h3>
              <p className="text-gray-500 mb-4">
                Drop your plant image here or click to browse
              </p>
              <input
                type="file"
                accept="image/*"
                onChange={handleInputChange}
                className="hidden"
                id="file-upload"
              />
              <Button asChild className="bg-green-600 hover:bg-green-700">
                <label htmlFor="file-upload" className="cursor-pointer">
                  <Upload className="h-4 w-4 mr-2" />
                  Choose Image
                </label>
              </Button>
            </div>
          </div>
        )}
      </div>
    </Card>
  );
};

export default ImageUpload;
