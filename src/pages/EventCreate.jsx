import React, { useState } from "react";

const EventCreate = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dateTime, setDateTime] = useState("");

  return (
    <div className="min-h-screen bg-white">
      {/* Back and Breadcrumb */}
      <div className="flex items-center px-6 py-4">
        <button className="text-gray-500 hover:text-gray-700">
          &lt; Back
        </button>
        <div className="ml-4 text-sm text-gray-500">
          <span className="hover:text-blue-500 cursor-pointer">EVENTS</span> / CREATE EVENT
        </div>
      </div>

      {/* Create Event Form */}
      <div className="px-8 py-6">
        <h1 className="text-3xl font-semibold">Create Event</h1>
        <p className="text-gray-500 mt-2">
          Create an event by adding a title and description
        </p>

        {/* Event Title Input */}
        <div className="mt-6">
          <label className="block text-sm font-medium text-gray-700">
            Event Title*
          </label>
          <div className="relative mt-1">
            <input
              type="text"
              className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="Enter event title"
              maxLength={60}
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <span className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400">
              {title.length}/60
            </span>
          </div>
        </div>

        {/* Description Input */}
        <div className="mt-4">
          <label className="block text-sm font-medium text-gray-700">
            Description
          </label>
          <div className="relative mt-1">
            <textarea
              className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="Enter short description"
              maxLength={255}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <span className="absolute right-2 bottom-2 text-gray-400">
              {description.length}/255
            </span>
          </div>
        </div>

        {/* Event Date and Time Input */}
        <div className="mt-4">
          <label className="block text-sm font-medium text-gray-700">
            Event's Date and Time*
          </label>
          <input
            type="datetime-local"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            value={dateTime}
            onChange={(e) => setDateTime(e.target.value)}
          />
        </div>

        {/* Buttons */}
        <div className="mt-8 flex justify-start space-x-4">
          <button className="bg-green-500 text-white px-6 py-2 rounded-md shadow-sm hover:bg-green-600">
            CREATE
          </button>
          <button className="bg-gray-300 text-gray-700 px-6 py-2 rounded-md shadow-sm hover:bg-gray-400">
            CANCEL
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventCreate;
