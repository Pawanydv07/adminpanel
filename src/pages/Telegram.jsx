import React from "react";

const Telegram = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white p-10 rounded-lg shadow-lg text-center max-w-md w-full">
        <div className="text-yellow-600 bg-yellow-100 py-2 rounded mb-4">
          Telegram feature is disabled, any changes made won’t be reflected on learner interface
        </div>

        <h2 className="text-2xl font-bold mb-4">Telegram Community</h2>
        <p className="text-gray-600 mb-6">
          Create telegram account with learnyst and monetise your community.
        </p>

        <div className="mb-6">
          <img
            src="https://cdn-icons-png.flaticon.com/512/2111/2111646.png"
            alt="Telegram Logo"
            className="w-32 h-32 mx-auto"
          />
        </div>

        <h3 className="text-lg font-semibold mb-2">Link Telegram Account</h3>
        <p className="text-gray-500 mb-4">
          Link your telegram account with learnyst and monetise your telegram community.
        </p>

        <button className="bg-green-500 text-white py-2 px-4 rounded-full hover:bg-green-600 transition">
          + Link Account
        </button>
      </div>
    </div>
  );
};

export default Telegram;
