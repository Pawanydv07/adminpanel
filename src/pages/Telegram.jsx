import React, { useState } from "react";
import { QRCodeSVG } from "qrcode.react";

const Telegram = () => {
  const [telegramURL, setTelegramURL] = useState('');
  const [linked, setLinked] = useState(false);

  const handleLink = () => {
    if (telegramURL) {
      // Simulate linking process
      console.log('Telegram URL linked:', telegramURL);
      setLinked(true);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white p-10 rounded-lg shadow-lg text-center max-w-md w-full">
        <div className="text-yellow-600 bg-yellow-100 py-2 rounded mb-4">
          Telegram feature is disabled, any changes made won’t be reflected on learner interface
        </div>

        <h2 className="text-2xl font-bold mb-4">Telegram Community</h2>
        <p className="text-gray-600 mb-6">
          Create a Telegram account with Learnyst and monetize your community.
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
          Link your Telegram account with Learnyst and monetize your Telegram community.
        </p>

        {/* Input for Telegram URL */}
        <div className="mb-6">
          <input
            type="text"
            placeholder="Enter Telegram URL"
            value={telegramURL}
            onChange={(e) => setTelegramURL(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
        </div>

        {/* QR Code Generation */}
        {telegramURL && (
          <div className="mb-6">
            <QRCodeSVG value={telegramURL} size={128} />
            <p className="text-gray-500 mt-2">Scan this QR code to link your Telegram account.</p>
          </div>
        )}

        {/* Button to Link Account */}
        <button
          onClick={handleLink}
          className="bg-green-500 text-white py-2 px-4 rounded-full hover:bg-green-600 transition"
        >
          + Link Account
        </button>

        {linked && (
          <div className="mt-4 text-green-600 font-semibold">
            Telegram account successfully linked!
          </div>
        )}
      </div>
    </div>
  );
};

export default Telegram;
