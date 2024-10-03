import React, { useState } from "react";

const ReferEarn = () => {
  const [referralEnabled, setReferralEnabled] = useState(false);
  const [referrerCredits, setReferrerCredits] = useState("");
  const [refereeCredits, setRefereeCredits] = useState("");

  const handleSave = () => {
    // Handle save logic here
    console.log("Settings Saved", { referralEnabled, referrerCredits, refereeCredits });
  };

  const handleCancel = () => {
    // Handle cancel logic here
    setReferralEnabled(false);
    setReferrerCredits("");
    setRefereeCredits("");
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Refer & Earn</h2>
      <p className="text-gray-500 mb-6">
        Manage referral settings to allow learners to invite others and earn credits
      </p>

      <div className="mb-6">
        <h3 className="text-lg font-semibold">Referral Codes</h3>
        <p className="text-gray-500 mb-4">
          Enable referral codes to allow learner to refer to their friends using codes and earn credits
        </p>
        <label className="flex items-center">
          <input
            type="checkbox"
            className="toggle-checkbox h-5 w-10 rounded-full bg-gray-200 checked:bg-blue-600"
            checked={referralEnabled}
            onChange={() => setReferralEnabled(!referralEnabled)}
          />
          <span className="ml-2 text-gray-700">Enable Referral Codes</span>
        </label>
      </div>

      <div className="mb-6">
        <h3 className="text-lg font-semibold">Signup Credits</h3>
        <p className="text-gray-500 mb-2">Credits to be awarded when signup is done using referral code</p>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Referrer Credits
            <input
              type="text"
              placeholder="Enter referrer credits"
              value={referrerCredits}
              onChange={(e) => setReferrerCredits(e.target.value)}
              className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            />
          </label>
          <p className="text-gray-500 text-sm mt-1">
            Credit for learner who is inviting a friend by sharing referral code
          </p>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Referee Credits
            <input
              type="text"
              placeholder="Enter referee credits"
              value={refereeCredits}
              onChange={(e) => setRefereeCredits(e.target.value)}
              className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            />
          </label>
          <p className="text-gray-500 text-sm mt-1">
            Credit for the new learner who is invited with a referral code
          </p>
        </div>
      </div>

      <div className="flex space-x-4">
        <button
          onClick={handleSave}
          className="px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-500"
        >
          Save
        </button>
        <button
          onClick={handleCancel}
          className="px-6 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default ReferEarn;
