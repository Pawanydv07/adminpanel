import React from "react";
import { Link } from "react-router-dom";

const Messenger = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-500 mb-4">
          <Link to="/dashboard" className="hover:underline">Dashboard</Link> /
          <span> Messenger</span>
        </nav>

        {/* Title Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-semibold">Messenger</h1>
          <p className="text-gray-600">
            Compose, schedule, and send communication messages to groups of targeted learners.
          </p>
        </div>

        {/* Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Push Message */}
          <div className="border border-gray-200 p-6 rounded-lg shadow-sm bg-white">
            <div className="flex items-center mb-4">
              {/* Icon placeholder */}
              <div className="w-10 h-10 bg-gray-200 rounded-full mr-4"></div>
              <h2 className="text-xl font-semibold">Push Message</h2>
              <span className="ml-2 bg-yellow-200 text-yellow-800 text-sm font-medium px-2 py-1 rounded-full">Beta</span>
            </div>
            <p className="text-gray-500 mb-4">Send push messages to groups of targeted learners.</p>
            <Link to="#" className="text-blue-500 hover:underline">View</Link>
          </div>

          {/* Marketing Email */}
          <div className="border border-gray-200 p-6 rounded-lg shadow-sm bg-white">
            <div className="flex items-center mb-4">
              {/* Icon placeholder */}
              <div className="w-10 h-10 bg-gray-200 rounded-full mr-4"></div>
              <h2 className="text-xl font-semibold">Marketing Email</h2>
            </div>
            <p className="text-gray-500 mb-4">Send marketing emails to groups of targeted learners.</p>
            <Link to="#" className="text-blue-500 hover:underline">View</Link>
          </div>

          {/* System Email */}
          <div className="border border-gray-200 p-6 rounded-lg shadow-sm bg-white">
            <div className="flex items-center mb-4">
              {/* Icon placeholder */}
              <div className="w-10 h-10 bg-gray-200 rounded-full mr-4"></div>
              <h2 className="text-xl font-semibold">System Email</h2>
            </div>
            <p className="text-gray-500 mb-4">
              System emails are automated mails sent to learners based on user actions.
            </p>
            <Link to="#" className="text-blue-500 hover:underline">View</Link>
          </div>

          {/* Announcements */}
          <div className="border border-gray-200 p-6 rounded-lg shadow-sm bg-white">
            <div className="flex items-center mb-4">
              {/* Icon placeholder */}
              <div className="w-10 h-10 bg-gray-200 rounded-full mr-4"></div>
              <h2 className="text-xl font-semibold">Announcements</h2>
            </div>
            <p className="text-gray-500 mb-4">Send notifications to all users.</p>
            <Link to="#" className="text-blue-500 hover:underline">View</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Messenger;
