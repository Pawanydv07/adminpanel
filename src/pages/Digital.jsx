import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Digital = () => {
  const [digitals, setDigitals] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch digital products data from API
    const fetchDigitals = async () => {
      try {
        const response = await axios.get('https://ad-2.onrender.com/api/digitals');
        setDigitals(response.data);
      } catch (error) {
        console.error('Error fetching digitals:', error);
      }
    };

    fetchDigitals();
  }, []);

  const handleNavigation = () => {
    navigate("/createdigital");
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Digital Products</h1>
            <p className="text-gray-500">Manage your digital products here</p>
          </div>

          {/* Action Buttons */}
          <div className="flex space-x-4">
            <button
              className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
              onClick={handleNavigation}
            >
              + CREATE
            </button>
            <button className="bg-gray-100 border border-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-200">
              REORDER
            </button>
          </div>
        </div>

        {/* Search and Filter Section */}
        <div className="flex items-center space-x-4 mb-6">
          {/* Search Input */}
          <div className="flex w-full max-w-lg">
            <input
              type="text"
              className="border border-gray-300 rounded-l-md px-4 py-2 w-full placeholder-gray-500"
              placeholder="Search by Title"
            />
            <button className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600">
              Search
            </button>
          </div>

          {/* Filter Buttons */}
          <button className="border border-blue-500 text-blue-500 px-4 py-2 rounded-md hover:bg-blue-50">
            <span className="inline-block mr-1">🔽</span> Add Filter
          </button>
          <button className="bg-gray-100 border border-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-200">
            FILTER BY PUBLISHED DATE
          </button>
        </div>

        {/* Results Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {digitals.length > 0 ? (
            digitals.map((digital) => (
              <div key={digital._id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h2 className="text-xl font-bold mb-2">{digital.title}</h2>
                <p className="text-gray-700 mb-4">Price: ₹{digital.price}</p>
                <p className="text-gray-500 mb-4">Free: {digital.isFree ? 'Yes' : 'No'}</p>
                <p className="text-gray-500 mb-4">Encrypted: {digital.isEncrypted ? 'Yes' : 'No'}</p>
                <p className="text-gray-500 mb-4">Published Date: {new Date(digital.publishedDate).toLocaleDateString()}</p>
                <p className="text-gray-500 mb-4">Description: {digital.description}</p>
              </div>
            ))
          ) : (
            <div className="bg-gray-100 py-20 rounded-md text-center text-gray-500">
              No results found
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Digital;
