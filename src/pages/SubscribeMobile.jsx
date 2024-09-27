import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const SubscribeMobile = () => {
  const [selectedOption, setSelectedOption] = useState("Android");
  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal visibility
  const [isConfirmed, setIsConfirmed] = useState(false); // State for service confirmation
  const navigate = useNavigate();

  const handleSubscribe = () => {
    setIsModalOpen(true); // Show confirmation modal when clicking "Subscribe"
  };

  const handleConfirm = () => {
    setIsConfirmed(true); // Set confirmation state to true
    setTimeout(() => {
      navigate("/mobile"); // Navigate to the mobile page after 5 seconds
    }, 5000);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto bg-white p-6 rounded-lg shadow-md">
        {/* Back Button */}
        <button 
          onClick={() => navigate(-1)}
          className="text-gray-600 hover:text-black mb-4"
        >
          &larr; Back
        </button>

        {/* Breadcrumb */}
        <div className="text-sm text-gray-500 mb-4">
          <Link to="#" className="hover:underline">ADD-ONS</Link> / 
          <Link to="#" className="hover:underline">MOBILE APPS</Link> / 
          <span>SUBSCRIBE</span>
        </div>

        {/* Title Section */}
        <div className="mb-6">
          <h1 className="text-3xl font-semibold">Mobile apps</h1>
          <p className="text-gray-600">Subscribe to Mobile apps add-on</p>
        </div>

        {/* Pricing Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Pricing Options */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Pricing</h2>
            <p className="text-gray-500 mb-4">Preview App (Free)</p>
            <div className="space-y-4">
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="pricingOption"
                  value="Android"
                  checked={selectedOption === "Android"}
                  onChange={() => setSelectedOption("Android")}
                  className="text-green-500 focus:ring-green-500"
                />
                <span>Android</span>
                <span className="ml-auto">₹ 8,999*/month</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="pricingOption"
                  value="iOS"
                  checked={selectedOption === "iOS"}
                  onChange={() => setSelectedOption("iOS")}
                  className="text-green-500 focus:ring-green-500"
                />
                <span>iOS</span>
                <span className="ml-auto">₹ 14,999*/month</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="pricingOption"
                  value="Android and iOS"
                  checked={selectedOption === "Android and iOS"}
                  onChange={() => setSelectedOption("Android and iOS")}
                  className="text-green-500 focus:ring-green-500"
                />
                <span>Android and iOS</span>
                <span className="ml-auto">₹ 23,998*/month</span>
              </label>
            </div>
          </div>

          {/* Order Details */}
          <div className="bg-gray-100 p-4 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Order Details</h2>
            <div className="mb-4">
              <p className="text-gray-500">Usage Range</p>
              <p className="text-black font-semibold">{selectedOption}</p>
            </div>
            <div className="mb-6">
              <p className="text-gray-500">Amount*</p>
              <p className="text-black font-semibold">
                {selectedOption === "Android" && "₹ 8,999"}
                {selectedOption === "iOS" && "₹ 14,999"}
                {selectedOption === "Android and iOS" && "₹ 23,998"}
              </p>
              <p className="text-sm text-gray-500">*Plus GST</p>
            </div>
            <button
              className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600"
              onClick={handleSubscribe} // Trigger subscription
            >
              SUBSCRIBE
            </button>
          </div>
        </div>

        {/* Subscribe for Free */}
        <div className="mt-8 bg-green-50 p-4 rounded-lg">
          <h2 className="text-lg font-semibold mb-2">Subscribe For Free</h2>
          <p className="text-gray-500 mb-4">
            Subscribe to the add-on to avail the free features
          </p>
          <button className="w-full bg-green-100 text-green-600 py-2 rounded-lg hover:bg-green-200">
            SUBSCRIBE FOR FREE
          </button>
        </div>
      </div>

      {/* Confirmation Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            {!isConfirmed ? (
              <>
                <h2 className="text-xl font-semibold mb-4">Confirm Subscription</h2>
                <p className="text-gray-500 mb-6">Are you sure you want to subscribe to {selectedOption} for ₹{selectedOption === "Android" ? "8,999" : selectedOption === "iOS" ? "14,999" : "23,998"} per month?</p>
                <div className="flex justify-end space-x-4">
                  <button
                    className="bg-gray-300 text-gray-800 px-4 py-2 rounded-lg"
                    onClick={() => setIsModalOpen(false)} // Close modal
                  >
                    Cancel
                  </button>
                  <button
                    className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
                    onClick={handleConfirm} // Confirm and show follow-up modal
                  >
                    Confirm
                  </button>
                </div>
              </>
            ) : (
              <>
                <h2 className="text-xl font-semibold mb-4">Service Confirmed</h2>
                <p className="text-gray-500 mb-6">Your subscription for {selectedOption} has been confirmed!</p>
                <p className="text-sm text-gray-500 mb-4">Redirecting to the mobile page in 5 seconds...</p>
                <div className="flex justify-end">
                  <button
                    className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
                    onClick={() => navigate("/mobile")} // Manually go to mobile page
                  >
                    Go to Mobile Page
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default SubscribeMobile;
