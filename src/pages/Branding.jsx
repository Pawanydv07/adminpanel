import React from 'react';

const Branding = () => {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col items-center py-10">
      {/* Header Section */}
      <div className="max-w-4xl w-full mb-10">
        <h1 className="text-3xl font-bold mb-2">Branding</h1>
        <p className="text-gray-500">Manage brand settings for your school</p>
      </div>

      {/* Branding Cards */}
      <div className="max-w-4xl w-full space-y-6">
        {/* Web Branding */}
        <div className="flex justify-between items-center bg-white shadow-md p-5 rounded-lg">
          <div className="flex items-center">
            <img
              src="https://via.placeholder.com/50x50?text=🌐"
              alt="Web Branding"
              className="mr-4"
            />
            <div>
              <h3 className="text-lg font-semibold">Web Branding</h3>
              <p className="text-gray-500">Manage web brand settings for your school</p>
            </div>
          </div>
          <button className="bg-green-500 text-white px-4 py-2 rounded-lg flex items-center hover:bg-green-600">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5 mr-2">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 13h6m2 0h.01M12 17l4-4m-4 4l-4-4m4 4V5" />
            </svg>
            CUSTOMISE
          </button>
        </div>

        {/* App Branding */}
        <div className="flex justify-between items-center bg-white shadow-md p-5 rounded-lg">
          <div className="flex items-center">
            <img
              src="https://via.placeholder.com/50x50?text=🤖"
              alt="App Branding"
              className="mr-4"
            />
            <div>
              <h3 className="text-lg font-semibold">App Branding</h3>
              <p className="text-gray-500">Manage app brand settings for your school</p>
            </div>
          </div>
          <button className="bg-green-500 text-white px-4 py-2 rounded-lg flex items-center hover:bg-green-600">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5 mr-2">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 13h6m2 0h.01M12 17l4-4m-4 4l-4-4m4 4V5" />
            </svg>
            CUSTOMISE
          </button>
        </div>

        {/* About School */}
        <div className="flex justify-between items-center bg-white shadow-md p-5 rounded-lg">
          <div>
            <h3 className="text-lg font-semibold">About School</h3>
            <p className="text-gray-500">Add details about your school</p>
          </div>
          <button className="text-gray-500 hover:text-black">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Branding;
