import React from 'react';
import { useNavigate } from 'react-router-dom';

const Coupon= () => {
  const navigate = useNavigate();

  const handleUpgrade = () => {
    navigate('/pricing');
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <div className="bg-white shadow-lg p-8 rounded-lg text-center max-w-6xl w-full">
        <img 
          src="https://learnyst-apps.s3.ap-south-1.amazonaws.com/dev/admin-v3/static/media/upgrade-plan.svg" 
          alt="Upgrade Illustration" 
          className="mx-auto mb-6"
        />
        <p className="text-lg mb-4">
          You need to upgrade your pricing plan to get this feature. Let’s Upgrade!
        </p>
        <button
          className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-full w-full"
          onClick={handleUpgrade}
        >
          UPGRADE PLAN NOW
        </button>
      </div>
    </div>
  );
};

export default Coupon;
