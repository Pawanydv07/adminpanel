// FormCreate.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const FormCreate = () => {
  const navigate = useNavigate();
  const [formTitle, setFormTitle] = useState('');
  const [description, setDescription] = useState('');
  const [isSignupForm, setIsSignupForm] = useState(false);

  const handleCreate = () => {
    // Handle form creation logic here (e.g., submitting form data to an API)
    console.log({ formTitle, description, isSignupForm });
    navigate('/form'); // Navigate back to form list or another page after creation
  };

  const handleCancel = () => {
    navigate('/form');
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Create Form</h1>
      <p className="text-lg mb-6">Create a form by adding a title and description</p>
      <div className="mb-6">
        <label className="block font-medium mb-2">Form Title*</label>
        <input
          type="text"
          value={formTitle}
          onChange={(e) => setFormTitle(e.target.value)}
          className="border border-gray-300 rounded-md p-2 w-full"
          placeholder="Enter form title"
          maxLength={60}
        />
        <span className="text-gray-500 text-sm">{formTitle.length}/60</span>
      </div>
      <div className="mb-6">
        <label className="block font-medium mb-2">Description*</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="border border-gray-300 rounded-md p-2 w-full"
          placeholder="Enter short description"
          maxLength={255}
        />
        <span className="text-gray-500 text-sm">{description.length}/255</span>
        <p className="text-gray-500 text-xs mt-1">Write a brief idea about the form</p>
      </div>
      <div className="flex items-center mb-6">
        <input
          type="checkbox"
          checked={isSignupForm}
          onChange={(e) => setIsSignupForm(e.target.checked)}
          className="mr-2"
        />
        <label>Make this a signup form</label>
      </div>
      <div className="flex space-x-4">
        <button
          onClick={handleCreate}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          Create
        </button>
        <button
          onClick={handleCancel}
          className="bg-gray-300 text-black px-4 py-2 rounded hover:bg-gray-400"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default FormCreate;
