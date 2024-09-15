import React, { useState } from 'react';
import axios from 'axios';

const CreateCourse = () => {
  const [title, setTitle] = useState('');
  const [lessons, setLessons] = useState('');
  const [duration, setDuration] = useState('');
  const [price, setPrice] = useState('');
  const [days, setDays] = useState('');
  const [showModal, setShowModal] = useState(false); // For controlling modal visibility
  const [errorMessage, setErrorMessage] = useState(''); // Error handling

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newCourse = {
      title,
      lessons,
      duration,
      price,
      days,
    };

    try {
      const response = await axios.post('https://ad-2.onrender.com/api/courses', newCourse);
      console.log('New Course Data:', response.data);

      // Show success modal if course creation is successful
      setShowModal(true);

      // Reset form fields after successful creation
      setTitle('');
      setLessons('');
      setDuration('');
      setPrice('');
      setDays('');
    } catch (error) {
      console.error('Error creating course:', error);
      setErrorMessage('Failed to create course');
    }
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Create New Course</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-lg font-semibold mb-2">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter course title"
            className="border border-gray-300 rounded-md p-2 w-full"
            required
          />
        </div>

        <div>
          <label className="block text-lg font-semibold mb-2">Number of Lessons</label>
          <input
            type="number"
            value={lessons}
            onChange={(e) => setLessons(e.target.value)}
            placeholder="Enter number of lessons"
            className="border border-gray-300 rounded-md p-2 w-full"
            required
          />
        </div>

        <div>
          <label className="block text-lg font-semibold mb-2">Duration</label>
          <input
            type="text"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            placeholder="Enter course duration"
            className="border border-gray-300 rounded-md p-2 w-full"
            required
          />
        </div>

        <div>
          <label className="block text-lg font-semibold mb-2">Price</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder="Enter course price"
            className="border border-gray-300 rounded-md p-2 w-full"
            required
          />
        </div>

        <div>
          <label className="block text-lg font-semibold mb-2">Number of Days</label>
          <input
            type="number"
            value={days}
            onChange={(e) => setDays(e.target.value)}
            placeholder="Enter number of days"
            className="border border-gray-300 rounded-md p-2 w-full"
            required
          />
        </div>

        {errorMessage && <p className="text-red-500">{errorMessage}</p>}

        <button
          type="submit"
          className="bg-green-500 text-white px-4 py-2 rounded-md"
        >
          Create Course
        </button>
      </form>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-white p-6 rounded-md shadow-lg">
            <h2 className="text-xl font-bold mb-4">Success!</h2>
            <p>Course added successfully.</p>
            <button
              onClick={closeModal}
              className="bg-green-500 text-white px-4 py-2 rounded-md mt-4"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CreateCourse;
