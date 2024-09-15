import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"; // Import Axios for API requests

const MockTestDashboard = () => {
  const navigate = useNavigate();
  const [mockTests, setMockTests] = useState([]); // State to store fetched mock tests

  // Function to navigate to the create mock test page
  const handleCreateClick = () => {
    navigate("/mocktest");
  };

  // Function to handle card click and open the URL
  const handleCardClick = (id) => {
    window.open(`https://freelance-roan.vercel.app/quiz/${id}`, "_blank"); // Open the quiz link with a dynamic ID
  };

  // Fetch the mock tests from the backend
  useEffect(() => {
    const fetchMockTests = async () => {
      try {
        const response = await axios.get("https://ad-2.onrender.com/api/mocktests"); // Your backend API
        setMockTests(response.data); // Update state with the fetched data
      } catch (error) {
        console.error("Error fetching mock tests:", error);
      }
    };

    fetchMockTests();
  }, []);

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Mock Tests</h1>
        <div className="space-x-2">
          <button
            className="bg-green-500 text-white px-4 py-2 rounded-md"
            onClick={handleCreateClick}
          >
            + Create
          </button>
          <button className="bg-gray-100 border border-gray-300 px-4 py-2 rounded-md">
            Reorder
          </button>
        </div>
      </div>

      <p className="mb-6 text-gray-600">Welcome to your mock test dashboard</p>

      {/* Search and Filter */}
      <div className="flex items-center mb-6 space-x-4">
        <input
          type="text"
          placeholder="Search by Title (alt+k or cmd+k)"
          className="border border-gray-300 rounded-md p-2 w-80"
        />
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
          Search
        </button>
        <button className="border border-blue-500 text-blue-500 px-4 py-2 rounded-md">
          Add Filter
        </button>
      </div>

      {/* Filter by Date Button */}
      <button className="border border-gray-300 px-4 py-2 rounded-md mb-4">
        Filter by Published Date
      </button>

      {/* Mock Test Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {mockTests.length > 0 ? (
          mockTests.map((test) => (
            <div
              key={test._id}
              className="bg-white rounded-lg shadow-lg p-4 cursor-pointer"
              onClick={() => handleCardClick(test._id)} // Handle click to open test details
            >
              <div className="bg-gray-800 h-40 rounded-md flex items-center justify-center text-white text-xl font-semibold">
                {test.title || "Demo"} {/* Render test title */}
              </div>
              <div className="mt-4">
                <h2 className="text-lg font-semibold">{test.title}</h2>
                <p className="text-gray-500">{test.isFree ? "Free" : `₹${test.price}`}</p>
                <p className="text-gray-500">{test.duration || "Duration not set"}</p>
              </div>
              <div className="mt-4 flex justify-between items-center">
                <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-md text-sm">
                  {test.isPublished ? "Published" : "Unpublished"}
                </span>
                <span className="text-gray-400 text-lg cursor-pointer">ℹ️</span>
              </div>
            </div>
          ))
        ) : (
          <p>No mock tests available. Create one!</p>
        )}
      </div>
    </div>
  );
};

export default MockTestDashboard;
