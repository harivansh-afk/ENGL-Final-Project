import React from 'react';

export const LoadingSpinner: React.FC = () => (
  <div className="flex justify-center items-center min-h-[400px]">
    <div className="animate-spin rounded-full h-12 w-12 border-4 border-sage-500 border-t-transparent" />
  </div>
);
