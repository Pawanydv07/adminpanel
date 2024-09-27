import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"; // Optional if you're using axios for API requests

const Bundles = () => {
  const navigate = useNavigate();
  const [bundles, setBundles] = useState([]); // State to store fetched bundles
  const [loading, setLoading] = useState(true); // State to handle loading state

  // Function to navigate to the create bundle page
  const handleNavigation = () => {
    navigate("/createBundle");
  };

  // Fetch bundles data from the API
  useEffect(() => {
    const fetchBundles = async () => {
      try {
        const response = await axios.get("https://ad-2.onrender.com/api/bundles/getbundle");
        setBundles(response.data); // Assuming the data is an array of bundles
      } catch (error) {
        console.error("Error fetching bundles", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBundles();
  }, []);

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
        {loading ? (
          <div className="bg-gray-100 py-20 rounded-md text-center text-gray-500">
            Loading...
          </div>
        ) : bundles.length === 0 ? (
          <div className="bg-gray-100 py-20 rounded-md text-center text-gray-500">
            No results found
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {bundles.map((bundle) => (
              <div
                key={bundle.id}
                className="bg-white border border-gray-300 rounded-lg p-6 shadow-md"
              >
                <h2 className="text-xl font-semibold text-gray-900 mb-4">
                  {bundle.title}
                </h2>
                <p className="text-gray-700 mb-4">{bundle.description}</p>
                {/* Displaying all details */}
                <div className="text-sm text-gray-600 space-y-2">
                  <p><strong>Price:</strong> ${bundle.price}</p>
                  <p><strong>Duration:</strong> {bundle.duration} hours</p>
                  <p><strong>Number of Tests:</strong> {bundle.numberOfTests}</p>
                  <p><strong>Published Date:</strong> {new Date(bundle.publishedDate).toLocaleDateString()}</p>
                  <p><strong>Category:</strong> {bundle.category}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Bundles;
