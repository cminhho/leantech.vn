import React from 'react';
import { useParams, Link } from 'react-router-dom';

const ServicePage = () => {
  const { slug } = useParams();

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center py-12">
          <i className="fas fa-tools text-4xl text-gray-300 mb-4"></i>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Service Page Coming Soon</h1>
          <p className="text-gray-600 mb-6">
            Service page for "{slug}" will be available in Phase 4 of the implementation.
          </p>
          <Link 
            to="/"
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
          >
            <i className="fas fa-arrow-left"></i>
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServicePage; 