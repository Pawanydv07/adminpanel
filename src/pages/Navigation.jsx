import React, { useState } from "react";

// Modal component
const CreateMenuModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-xl shadow-2xl w-[32rem] p-8 relative">
        {/* Modal Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">Create Navigation Menu</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-red-500 text-3xl">
            &times;
          </button>
        </div>

        {/* Title Input */}
        <div className="mb-6">
          <label className="block font-medium text-gray-700 mb-2">Title*</label>
          <input
            type="text"
            placeholder="Enter Menu title"
            maxLength={60}
            className="border border-gray-300 rounded-lg w-full px-4 py-2 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
          />
          <span className="text-gray-400 text-sm mt-1 block">0/60</span>
        </div>

        {/* Upgrade Notification */}
        <div className="mb-6 p-4 bg-gradient-to-r from-yellow-100 to-yellow-200 border border-yellow-400 rounded-lg text-yellow-900">
          Please upgrade your plan to access premium features.
          <button className="ml-2 bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600 transition duration-200">
            UPGRADE
          </button>
        </div>

        {/* Menu Type Selection */}
        <div className="mb-6">
          <label className="block font-medium text-gray-700 mb-2">Menu Type*</label>
          <div>
            <label className="flex items-center mb-3">
              <input type="radio" name="menu-type" className="mr-2" />
              Simple 
              <span className="text-gray-500 ml-2">Simple Menu consists of Products, Pages, and External Links.</span>
            </label>
            <label className="flex items-center">
              <input type="radio" name="menu-type" className="mr-2" />
              Group 
              <span className="text-gray-500 ml-2">Group Menu consists of Simple Menus.</span>
            </label>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-end space-x-3">
          <button onClick={onClose} className="bg-gray-300 px-4 py-2 rounded-lg hover:bg-gray-400 transition duration-200 shadow-md">
            Cancel
          </button>
          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-200 shadow-md">
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default function NavigationMenuPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to handle modal visibility
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Back Button */}
      <div className="mb-4">
        <button
          onClick={() => window.history.back()}
          className="text-blue-600 hover:text-blue-800"
        >
          &larr; Back
        </button>
      </div>

      {/* Title and Actions */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold">Navigation Menus</h1>
          <p className="text-gray-600">Add/Modify menus here.</p>
        </div>
        <button
          onClick={openModal}
          className="bg-green-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-green-600 transition duration-200"
        >
          + Create Navigation Menu
        </button>
      </div>

      {/* Search and Filter */}
      <div className="flex items-center space-x-4 mb-4">
        <input
          type="text"
          placeholder="Search by Title (alt+k or cmd+k)"
          className="border px-4 py-2 rounded-lg w-1/2"
        />
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600 transition duration-200">
          Search
        </button>
        <button className="bg-gray-200 px-4 py-2 rounded-lg shadow-md hover:bg-gray-300 transition duration-200">
          Add Filter
        </button>
      </div>

      {/* Table */}
      <table className="w-full bg-white shadow-lg rounded-lg overflow-hidden">
        <thead>
          <tr className="border-b">
            <th className="text-left px-4 py-2">Menu Title</th>
            <th className="text-left px-4 py-2">Type</th>
            <th className="text-left px-4 py-2">Menu Items</th>
            <th className="text-left px-4 py-2">Updated On</th>
            <th className="text-left px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b">
            <td className="px-4 py-2">Social Menu</td>
            <td className="px-4 py-2">default</td>
            <td className="px-4 py-2">-</td>
            <td className="px-4 py-2">14 Dec 2023</td>
            <td className="px-4 py-2">
              <button className="text-gray-600">•••</button>
            </td>
          </tr>
          <tr className="border-b">
            <td className="px-4 py-2">Learner Menu</td>
            <td className="px-4 py-2">default</td>
            <td className="px-4 py-2">-</td>
            <td className="px-4 py-2">14 Dec 2023</td>
            <td className="px-4 py-2">
              <button className="text-gray-600">•••</button>
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2">Main Menu</td>
            <td className="px-4 py-2">default</td>
            <td className="px-4 py-2">1</td>
            <td className="px-4 py-2">14 Dec 2023</td>
            <td className="px-4 py-2">
              <button className="text-gray-600">•••</button>
            </td>
          </tr>
        </tbody>
      </table>

      {/* Pagination */}
      <div className="flex justify-between items-center mt-4">
        <span className="text-gray-600">Rows per page</span>
        <select className="border px-2 py-1 rounded-lg">
          <option value="10">10</option>
          <option value="20">20</option>
        </select>
      </div>

      {/* Modal */}
      <CreateMenuModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
}
