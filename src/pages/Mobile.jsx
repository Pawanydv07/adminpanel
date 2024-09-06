import React from "react";

const Mobile = () => {
  return (
    <div className="bg-green-50 min-h-screen flex flex-col items-center">
      {/* Header Section */}
      <div className="max-w-4xl w-full bg-white shadow-lg rounded-lg mt-10 p-10">
        <div className="flex flex-col items-center text-center">
          <img
            src="https://via.placeholder.com/150"
            alt="Mobile Illustration"
            className="mb-5"
          />
          <h1 className="text-3xl font-bold">Mobile Apps <span className="text-yellow-600">FREE</span></h1>
          <p className="text-gray-600 mb-5">
            Get fully branded Android & iOS apps for your school.
          </p>
          <button className="bg-green-500 text-white py-2 px-6 rounded-full hover:bg-green-600">
            SUBSCRIBE
          </button>
        </div>
      </div>

      {/* Pricing Section */}
      <div className="max-w-4xl w-full bg-white shadow-lg rounded-lg mt-10 p-10">
        <h2 className="text-2xl font-bold mb-8 text-center">Pricing</h2>

        <div className="space-y-4">
          {/* Preview App (Free) */}
          <div className="flex items-center justify-between bg-gray-50 p-4 rounded-lg shadow-md">
            <div className="flex items-center">
              <img
                src="https://via.placeholder.com/50x50?text=👁️"
                alt="Preview App"
                className="mr-4"
              />
              <h3 className="text-lg font-semibold">Preview App (Free)</h3>
            </div>
            <span className="text-green-600 font-bold">FREE</span>
          </div>

          {/* Android */}
          <div className="flex items-center justify-between bg-gray-50 p-4 rounded-lg shadow-md">
            <div className="flex items-center">
              <img
                src="https://via.placeholder.com/50x50?text=🤖"
                alt="Android"
                className="mr-4"
              />
              <h3 className="text-lg font-semibold">Android</h3>
            </div>
            <span className="text-gray-900 font-bold">₹ 8,999</span>
          </div>

          {/* iOS */}
          <div className="flex items-center justify-between bg-gray-50 p-4 rounded-lg shadow-md">
            <div className="flex items-center">
              <img
                src="https://via.placeholder.com/50x50?text=🍏"
                alt="iOS"
                className="mr-4"
              />
              <h3 className="text-lg font-semibold">iOS</h3>
            </div>
            <span className="text-gray-900 font-bold">₹ 14,999</span>
          </div>

          {/* Android and iOS */}
          <div className="flex items-center justify-between bg-gray-50 p-4 rounded-lg shadow-md">
            <div className="flex items-center">
              <img
                src="https://via.placeholder.com/50x50?text=🤖🍏"
                alt="Android and iOS"
                className="mr-4"
              />
              <h3 className="text-lg font-semibold">Android and iOS</h3>
            </div>
            <span className="text-gray-900 font-bold">₹ 23,998</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mobile;
