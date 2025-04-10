"use client";

import React, { useState, useCallback } from 'react';
import { motion } from 'framer-motion';

interface FileUploadProps {
  accept?: string;
  multiple?: boolean;
  maxSize?: number; // in MB
  onFilesSelected: (files: File[]) => void;
  label?: string;
  helpText?: string;
}

const FileUpload: React.FC<FileUploadProps> = ({
  accept = '.stl,.pdf,.jpg,.jpeg,.png',
  multiple = true,
  maxSize = 50, // 50MB default max size
  onFilesSelected,
  label = 'Upload Files',
  helpText = 'Drag and drop files here, or click to select files',
}) => {
  const [isDragging, setIsDragging] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);

  const handleDragEnter = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  }, []);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (!isDragging) {
      setIsDragging(true);
    }
  }, [isDragging]);

  const validateFiles = useCallback((files: File[]): File[] => {
    setError(null);
    
    // Filter files by accepted types
    const acceptedTypes = accept.split(',');
    const validFiles = files.filter(file => {
      const fileExtension = '.' + file.name.split('.').pop()?.toLowerCase();
      return acceptedTypes.some(type => 
        type === fileExtension || 
        type === file.type || 
        (type.includes('/*') && file.type.startsWith(type.replace('/*', '/')))
      );
    });

    if (validFiles.length < files.length) {
      setError(`Some files were rejected. Accepted formats: ${accept}`);
    }

    // Check file size
    const validSizedFiles = validFiles.filter(file => file.size <= maxSize * 1024 * 1024);
    if (validSizedFiles.length < validFiles.length) {
      setError(`Some files exceed the maximum size of ${maxSize}MB`);
    }

    return validSizedFiles;
  }, [accept, maxSize]);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const droppedFiles = Array.from(e.dataTransfer.files);
      const validFiles = validateFiles(droppedFiles);
      
      if (validFiles.length > 0) {
        if (!multiple && validFiles.length > 1) {
          setError('Only one file can be uploaded');
          setSelectedFiles([validFiles[0]]);
          onFilesSelected([validFiles[0]]);
        } else {
          setSelectedFiles(prevFiles => [...prevFiles, ...validFiles]);
          onFilesSelected(validFiles);
        }
      }
    }
  }, [multiple, onFilesSelected, validateFiles]);

  const handleFileInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const selectedFiles = Array.from(e.target.files);
      const validFiles = validateFiles(selectedFiles);
      
      if (validFiles.length > 0) {
        if (!multiple && validFiles.length > 1) {
          setError('Only one file can be uploaded');
          setSelectedFiles([validFiles[0]]);
          onFilesSelected([validFiles[0]]);
        } else {
          setSelectedFiles(prevFiles => [...prevFiles, ...validFiles]);
          onFilesSelected(validFiles);
        }
      }
    }
  }, [multiple, onFilesSelected, validateFiles]);

  const removeFile = useCallback((index: number) => {
    setSelectedFiles(prevFiles => {
      const newFiles = [...prevFiles];
      newFiles.splice(index, 1);
      return newFiles;
    });
  }, []);

  const formatFileSize = (bytes: number): string => {
    if (bytes < 1024) return bytes + ' B';
    else if (bytes < 1048576) return (bytes / 1024).toFixed(1) + ' KB';
    else return (bytes / 1048576).toFixed(1) + ' MB';
  };

  return (
    <div className="w-full">
      <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
      <div
        className={`border-2 border-dashed rounded-lg p-6 transition-colors ${
          isDragging ? 'border-blue-500 bg-blue-50' : 'border-gray-300 hover:border-blue-400'
        }`}
        onDragEnter={handleDragEnter}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <div className="text-center">
          <svg
            className="mx-auto h-12 w-12 text-gray-400"
            stroke="currentColor"
            fill="none"
            viewBox="0 0 48 48"
            aria-hidden="true"
          >
            <path
              d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <p className="mt-2 text-sm text-gray-600">{helpText}</p>
          <p className="mt-1 text-xs text-gray-500">
            {multiple ? 'You can upload multiple files' : 'You can upload only one file'}
          </p>
          <p className="mt-1 text-xs text-gray-500">
            Accepted formats: {accept} (Max: {maxSize}MB)
          </p>
          <button
            type="button"
            className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            onClick={() => document.getElementById('file-upload')?.click()}
          >
            Select Files
          </button>
          <input
            id="file-upload"
            name="file-upload"
            type="file"
            className="sr-only"
            accept={accept}
            multiple={multiple}
            onChange={handleFileInputChange}
          />
        </div>
      </div>

      {error && (
        <p className="mt-2 text-sm text-red-600">{error}</p>
      )}

      {selectedFiles.length > 0 && (
        <div className="mt-4">
          <h4 className="text-sm font-medium text-gray-700 mb-2">Selected Files:</h4>
          <ul className="divide-y divide-gray-200 border border-gray-200 rounded-md">
            {selectedFiles.map((file, index) => (
              <motion.li
                key={`${file.name}-${index}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
                className="flex items-center justify-between py-3 px-4 text-sm"
              >
                <div className="flex items-center overflow-hidden">
                  <svg className="h-5 w-5 flex-shrink-0 text-gray-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
                  </svg>
                  <span className="truncate mr-2 flex-grow">{file.name}</span>
                  <span className="flex-shrink-0 text-gray-500">{formatFileSize(file.size)}</span>
                </div>
                <button
                  type="button"
                  onClick={() => removeFile(index)}
                  className="ml-4 text-red-600 hover:text-red-900 focus:outline-none"
                >
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </motion.li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default FileUpload;
