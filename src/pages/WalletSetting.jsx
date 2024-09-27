import React, { useState } from 'react';

const Wallet = () => {
  const [isWalletEnabled, setIsWalletEnabled] = useState(false);
  const [creditValue, setCreditValue] = useState(1);
  const [maxCredit, setMaxCredit] = useState(0);
  const [maxCreditPerOrder, setMaxCreditPerOrder] = useState(1000);

  const handleSave = () => {
    // Save logic here
    console.log({
      isWalletEnabled,
      creditValue,
      maxCredit,
      maxCreditPerOrder,
    });
  };

  const handleCancel = () => {
    // Cancel logic here
    setIsWalletEnabled(false);
    setCreditValue(1);
    setMaxCredit(0);
    setMaxCreditPerOrder(1000);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-2xl">
        <h1 className="text-3xl font-bold mb-6">Wallet</h1>
        <p className="text-gray-600 mb-8">
          Manage wallet settings to allow learners to make purchases using wallet credits
        </p>

        {/* Toggle Wallet */}
        <div className="mb-6">
          <label className="flex items-center space-x-3">
            <input
              type="checkbox"
              className="toggle-checkbox h-6 w-6"
              checked={isWalletEnabled}
              onChange={(e) => setIsWalletEnabled(e.target.checked)}
            />
            <span className="text-gray-700">Enable wallet to allow learners to use earned wallet credits for making a purchase</span>
          </label>
        </div>

        {/* Credit Value */}
        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-2">1 Credit =</label>
          <input
            type="number"
            value={creditValue}
            onChange={(e) => setCreditValue(e.target.value)}
            className="border border-gray-300 rounded-lg w-full px-4 py-2 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
            min="0"
          />
        </div>

        {/* Maximum Credit */}
        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-2">Maximum Credit</label>
          <div className="flex items-center">
            <input
              type="number"
              value={maxCredit}
              onChange={(e) => setMaxCredit(e.target.value)}
              className="border border-gray-300 rounded-lg w-full px-4 py-2 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
              min="0"
            />
            <span className="ml-2 text-gray-500">credits</span>
          </div>
        </div>

        {/* Maximum Credit Per Order */}
        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-2">Maximum Credit Per Order</label>
          <div className="flex items-center">
            <input
              type="number"
              value={maxCreditPerOrder}
              onChange={(e) => setMaxCreditPerOrder(e.target.value)}
              className="border border-gray-300 rounded-lg w-full px-4 py-2 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
              min="0"
            />
            <span className="ml-2 text-gray-500">credits</span>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-end space-x-4">
          <button
            onClick={handleCancel}
            className="px-6 py-2 rounded-lg bg-gray-200 hover:bg-gray-300 text-gray-700 transition duration-200"
          >
            CANCEL
          </button>
          <button
            onClick={handleSave}
            className="px-6 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white transition duration-200"
          >
            SAVE
          </button>
        </div>
      </div>
    </div>
  );
};

export default Wallet;
