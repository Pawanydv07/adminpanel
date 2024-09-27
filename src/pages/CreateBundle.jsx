import React, { useState } from "react";

function CreateBundle() {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [isFree, setIsFree] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Title:", title);
    console.log("Price:", price);
    console.log("Is Free:", isFree);
  };

  return (
    <div className="w-5xl bg-red-500 px-4 py-8 h-full">
      <h1 className="text-3xl font-bold text-center">Create Bundle</h1>
      <p className="text-lg text-gray-500 text-center mb-4">
        Start creating a new bundle
      </p>

      <form onSubmit={handleSubmit} className="max-w-7xl mx-auto">
        <div className="mb-4">
          <label
            htmlFor="title"
            className="block text-sm font-medium text-gray-700"
          >
            Title*
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Enter bundle title"
            required
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="price"
            className="block text-sm font-medium text-gray-700"
          >
            Price
          </label>
          <div className="flex items-center">
            <span className="text-gray-500">₹</span>
            <input
              type="number"
              id="price"
              name="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Price"
            />
          </div>
        </div>

        <div className="mb-4">
          <input
            type="checkbox"
            id="is-free"
            name="is-free"
            checked={isFree}
            onChange={() => setIsFree(!isFree)}
            className="mr-2"
          />
          <label
            htmlFor="is-free"
            className="block text-sm font-medium text-gray-700"
          >
            Make this a free bundle
          </label>
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded "
          >
            CREATE
          </button>
          <button
            type="button"
            className="ml-4 bg-gray-300 hover:bg-gray-400 text-gray-700 font-bold py-2 px-4 rounded"
          >
            CANCEL
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateBundle;
