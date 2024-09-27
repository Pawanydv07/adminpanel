import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Webinar = () => {
  const [webinars, setWebinars] = useState([]);
  const [filteredWebinars, setFilteredWebinars] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterDate, setFilterDate] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch webinars data from API
    const fetchWebinars = async () => {
      try {
        const response = await axios.get('https://ad-2.onrender.com/api/webinars');
        setWebinars(response.data);
        setFilteredWebinars(response.data);
      } catch (error) {
        console.error('Error fetching webinars:', error);
      }
    };

    fetchWebinars();
  }, []);

  useEffect(() => {
    // Apply filters
    let results = webinars;

    if (searchQuery) {
      results = results.filter(webinar =>
        webinar.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (filterDate) {
      results = results.filter(webinar => 
        new Date(webinar.publishedDate) >= new Date(filterDate)
      );
    }

    setFilteredWebinars(results);
  }, [searchQuery, filterDate, webinars]);

  const handleNavigation = () => {
    navigate("/createwebinar");
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Webinars</h1>
            <p className="text-gray-500">Welcome to your webinars dashboard</p>
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
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600">
              Search
            </button>
          </div>

          {/* Filter by Date */}
          <div className="flex items-center space-x-4">
            <input
              type="date"
              className="border border-gray-300 rounded-md px-4 py-2"
              value={filterDate}
              onChange={(e) => setFilterDate(e.target.value)}
            />
            <button className="bg-gray-100 border border-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-200">
              FILTER BY PUBLISHED DATE
            </button>
          </div>
        </div>

        {/* Results Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredWebinars.length > 0 ? (
            filteredWebinars.map((webinar) => (
              <div key={webinar._id} className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-bold mb-2">{webinar.title}</h2>
                <p className="text-gray-700 mb-4">Price: {webinar.price}</p>
                <p className="text-gray-500 mb-4">Free: {webinar.isFree ? 'Yes' : 'No'}</p>
                <p className="text-gray-500 mb-4">Encrypted: {webinar.isEncrypted ? 'Yes' : 'No'}</p>
                <p className="text-gray-500 mb-4">Published Date: {new Date(webinar.publishedDate).toLocaleDateString()}</p>
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

export default Webinar;
