import React from "react";

const Drawer = ({ onClose }) => {
  return (
    <div className="fixed inset-0 flex z-50">
      {/* Overlay */}
      <div className="fixed inset-0 bg-black bg-opacity-50" onClick={onClose}></div>

      {/* Drawer */}
      <div className="ml-auto bg-white w-96 h-full p-8 shadow-xl">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold">Create Navigation Menu</h2>
          <button className="text-gray-500" onClick={onClose}>
            &times;
          </button>
        </div>

        {/* Form */}
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="menuTitle">
              Title*
            </label>
            <input
              id="menuTitle"
              type="text"
              placeholder="Enter Menu title"
              maxLength={60}
              className="border border-gray-300 p-2 w-full rounded"
            />
          </div>

          <div className="mb-4">
            <p className="text-sm bg-yellow-100 p-2 rounded text-yellow-700">
              Please upgrade your plan to access premium features.
            </p>
            <button className="mt-2 text-blue-500">UPGRADE</button>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">Menu Type*</label>
            <div>
              <label className="flex items-center mb-2">
                <input type="radio" name="menuType" className="mr-2" /> Simple
              </label>
              <label className="flex items-center">
                <input type="radio" name="menuType" className="mr-2" /> Group
              </label>
            </div>
          </div>

          {/* Save and Cancel Buttons */}
          <div className="flex justify-end gap-4">
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-200 text-gray-700 px-4 py-2 rounded"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Drawer;
