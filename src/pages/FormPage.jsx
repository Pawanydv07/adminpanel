import React from 'react';
import { useNavigate } from 'react-router-dom';

const FormPage = () => {

    const navigate=useNavigate();

    const handleNavigate=()=>{
        navigate("/marketing/form-create")
    }
  return (
    <div className="min-h-screen bg-white p-8">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Forms</h1>
        <p className="text-lg text-gray-500">Craft Interactive Student Forms</p>
      </div>

      {/* Tabs */}
      <div className="flex items-center mb-6">
        <div className="flex space-x-8">
          <button className="text-blue-600 border-b-2 border-blue-600 pb-2">
            ALL
          </button>
          <button className="text-gray-500 hover:text-gray-800">
            PUBLISHED
          </button>
          <button className="text-gray-500 hover:text-gray-800">
            UNPUBLISHED
          </button>
        </div>
      </div>

      {/* Illustration and Call-to-Action */}
      <div className="flex flex-col items-center justify-center text-center mt-20">
        {/* Replace src with the actual path to your image or illustration */}
        <img src="/path/to/illustration.png" alt="Illustration" className="w-64 mb-4" />
        <h2 className="text-xl font-semibold text-gray-800">Create Your First Form</h2>
        <p className="text-gray-500 mt-2">
          Design Interactive Forms for Insightful Student Data Collection.
        </p>
      </div>

      {/* Create Button */}
      <button className="fixed bottom-6 right-6 bg-green-500 text-white px-4 py-2 rounded-full flex items-center shadow-lg hover:bg-green-600"onClick={handleNavigate}>
        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4"></path>
        </svg>
        CREATE
      </button>
    </div>
  );
};

export default FormPage;
