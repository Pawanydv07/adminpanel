import React from "react";
import { useNavigate } from "react-router-dom";

const EBook = () => {
  const navigate = useNavigate();

  // Correct way to define the navigation function
  const handleNavigation = () => {
    navigate("/createBook");
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Test Series</h1>
            <p className="text-gray-500">
              Welcome to your test series dashboard
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex space-x-4">
            <button
              className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
              onClick={handleNavigation} // Remove the parentheses to prevent immediate execution
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
              placeholder="Search by Title (alt+k or cmd+k)"
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
        <div className="bg-gray-100 py-20 rounded-md text-center text-gray-500">
          No results found
        </div>
      </div>
    </div>
  );
};

export default EBook;
