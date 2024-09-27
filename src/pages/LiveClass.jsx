import React, { useState } from 'react';

function LiveClass() {
  const [selectedColumns, setSelectedColumns] = useState([]);
  const [dropdownVisible, setDropdownVisible] = useState(false); // Toggle dropdown visibility

  const handleColumnSelect = (column) => {
    if (selectedColumns.includes(column)) {
      // If already selected, remove it from the list
      setSelectedColumns(selectedColumns.filter((col) => col !== column));
    } else {
      // Otherwise, add it to the list
      setSelectedColumns([...selectedColumns, column]);
    }
  };

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible); // Toggle dropdown visibility
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center">Live Class</h1>
      <p className="text-lg text-gray-500 text-center mb-4">View and manage your live classes</p>

      <div className="flex justify-end mb-4">
        <div className="relative">
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
            onClick={toggleDropdown} // Toggle dropdown on button click
          >
            SELECT COLUMNS
          </button>

          {dropdownVisible && (
            <div className="absolute top-full left-0 w-full bg-white shadow-md rounded-md">
              <ul className="py-2">
                <li className="px-4 py-2">
                  <input
                    type="checkbox"
                    name="column"
                    value="Title"
                    checked={selectedColumns.includes('Title')}
                    onChange={() => handleColumnSelect('Title')}
                  />
                  <label className="ml-2">Title</label>
                </li>
                <li className="px-4 py-2">
                  <input
                    type="checkbox"
                    name="column"
                    value="Type"
                    checked={selectedColumns.includes('Type')}
                    onChange={() => handleColumnSelect('Type')}
                  />
                  <label className="ml-2">Type</label>
                </li>
                <li className="px-4 py-2">
                  <input
                    type="checkbox"
                    name="column"
                    value="Sales"
                    checked={selectedColumns.includes('Sales')}
                    onChange={() => handleColumnSelect('Sales')}
                  />
                  <label className="ml-2">Sales</label>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* Rest of the component */}
    </div>
  );
}

export default LiveClass;
