import React, { useState } from 'react';
import axios from 'axios';

const CreateTestSeries = () => {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [isFree, setIsFree] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleFreeChange = () => {
    setIsFree(!isFree);
    if (!isFree) {
      setPrice(''); // Clear price if the test series is free
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/api/test-series/create', {
        title,
        price: isFree ? 0 : price,
        isFree
      });

      setSuccess('Test series created successfully!');
      setError(null);
      // Optionally, clear the form here
      setTitle('');
      setPrice('');
      setIsFree(false);
    } catch (err) {
      setError(err.response?.data?.message || 'An error occurred');
      setSuccess(null);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex justify-center items-center">
      <div className="max-w-lg w-full bg-white p-8 rounded-lg shadow-md">
        <button className="text-blue-600 mb-6" onClick={() => window.history.back()}>
          &lt; Back
        </button>
        <nav className="mb-6 text-sm text-gray-600">
          <span>TEST SERIES</span> / <span className="text-gray-900 font-semibold">CREATE TEST SERIES</span>
        </nav>

        <h2 className="text-3xl font-bold mb-4">Create Test Series</h2>
        <p className="text-gray-500 mb-6">Start creating a new test series</p>

        {success && <div className="text-green-600 mb-4">{success}</div>}
        {error && <div className="text-red-600 mb-4">{error}</div>}

        <form onSubmit={handleSubmit}>
          {/* Title Input */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="title">
              Title*
            </label>
            <input
              type="text"
              id="title"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-indigo-200"
              placeholder="Enter test series title"
              maxLength={60}
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <span className="text-gray-400 text-xs float-right">{title.length}/60</span>
          </div>

          {/* Price Input */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="price">
              Price
            </label>
            <input
              type="text"
              id="price"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-indigo-200"
              placeholder="₹ Price"
              value={isFree ? '' : price}
              onChange={(e) => setPrice(e.target.value)}
              disabled={isFree}
            />
          </div>

          {/* Free Test Series Checkbox */}
          <div className="mb-6 flex items-center">
            <input
              type="checkbox"
              id="isFree"
              className="h-4 w-4 text-indigo-600 border-gray-300 rounded"
              checked={isFree}
              onChange={handleFreeChange}
            />
            <label className="ml-2 text-sm text-gray-700" htmlFor="isFree">
              Make it a free test series
            </label>
          </div>

          {/* Action Buttons */}
          <div className="flex space-x-4">
            <button type="submit" className="w-full bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition">
              CREATE
            </button>
            <button
              type="button"
              className="w-full bg-gray-300 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-400 transition"
              onClick={() => {
                setTitle('');
                setPrice('');
                setIsFree(false);
                setError(null);
                setSuccess(null);
              }}
            >
              CANCEL
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateTestSeries;
