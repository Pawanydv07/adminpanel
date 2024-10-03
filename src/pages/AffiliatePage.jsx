import React from "react";

const AffiliatePage = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white rounded-lg shadow-md p-8 text-center max-w-6xl">
        <img
          src="https://via.placeholder.com/200" // Replace with actual image link
          alt="Upgrade Illustration"
          className="mx-auto mb-6"
        />
        <p className="text-gray-600 mb-4">
          You need to upgrade your pricing plan to get this feature. Let's Upgrade!
        </p>
        <button className="bg-green-500 text-white font-bold py-2 px-6 rounded-full hover:bg-green-600">
          UPGRADE PLAN NOW
        </button>
      </div>
    </div>
  );
};

export default AffiliatePage;
