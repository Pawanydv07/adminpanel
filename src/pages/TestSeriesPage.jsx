import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const TestSeriesPage = () => {
  const [testSeries, setTestSeries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTestSeries = async () => {
      try {
        const response = await axios.get("https://ad-2.onrender.com/api/test-series/gettest");
        setTestSeries(response.data);
      } catch (err) {
        setError("Failed to fetch test series");
      } finally {
        setLoading(false);
      }
    };

    fetchTestSeries();
  }, []);

  const handleNavigate = () => {
    navigate("/createtest");
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Test Series</h1>
            <p className="text-gray-500">Welcome to your test series dashboard</p>
          </div>

          {/* Action Buttons */}
          <div className="flex space-x-4">
            <button
              className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
              onClick={handleNavigate}
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
        ) : error ? (
          <div className="bg-red-100 py-20 rounded-md text-center text-red-600">
            {error}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testSeries.length > 0 ? (
              testSeries.map((series) => (
                <div key={series._id} className="bg-white p-4 rounded-md shadow-md">
                  <h3 className="text-lg font-semibold text-gray-900">{series.title}</h3>
                  <p className="text-gray-700">Price: ₹{series.price}</p>
                  <p className={`text-sm ${series.isFree ? 'text-green-600' : 'text-gray-500'}`}>
                    {series.isFree ? 'Free' : 'Paid'}
                  </p>
                </div>
              ))
            ) : (
              <div className="bg-gray-100 py-20 rounded-md text-center text-gray-500">
                No results found
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default TestSeriesPage;
