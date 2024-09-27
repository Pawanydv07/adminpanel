import React, { useState } from "react";

const CreateSubscription = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [coverImage, setCoverImage] = useState(null);
  const [price, setPrice] = useState('');
  const [isFree, setIsFree] = useState(false);
  const [isPublished, setIsPublished] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here, e.g., send data to server
    console.log('Form submitted:', { title, description, coverImage, price, isFree, isPublished });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setCoverImage(URL.createObjectURL(file));
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white p-10 rounded-lg shadow-lg text-center max-w-md w-full">
        <div className="text-yellow-600 bg-yellow-100 py-2 rounded mb-4">
          Subscription feature is under development. Changes might not be reflected immediately.
        </div>

        <h2 className="text-2xl font-bold mb-4">Create Subscription</h2>
        <p className="text-gray-600 mb-6">
          Set up a new subscription with Learnyst to manage your content and subscribers.
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit}>
          {/* Title Field */}
          <div className="mb-4">
            <label htmlFor="title" className="block text-sm font-semibold text-gray-700 mb-1">
              Title*
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              maxLength={60}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              placeholder="Enter subscription title"
              required
            />
            <span className="text-gray-500 text-xs float-right">{title.length}/60</span>
          </div>

          {/* Description Field */}
          <div className="mb-4">
            <label htmlFor="description" className="block text-sm font-semibold text-gray-700 mb-1">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows="4"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              placeholder="Enter subscription description"
            />
          </div>

          {/* Cover Image Upload */}
          <div className="mb-6">
            <label htmlFor="coverImage" className="block text-sm font-semibold text-gray-700 mb-1">
              Cover Image
            </label>
            <input
              type="file"
              id="coverImage"
              name="coverImage"
              accept="image/*"
              onChange={handleImageChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg"
            />
            {coverImage && (
              <img src={coverImage} alt="Cover Preview" className="mt-4 max-w-xs mx-auto" />
            )}
          </div>

          {/* Price Field */}
          <div className="mb-4">
            <label htmlFor="price" className="block text-sm font-semibold text-gray-700 mb-1">
              Price
            </label>
            <input
              type="text"
              id="price"
              name="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              placeholder="₹ Price"
              disabled={isFree}
            />
          </div>

          {/* Free Subscription Checkbox */}
          <div className="mb-6">
            <input
              type="checkbox"
              id="isFree"
              name="isFree"
              checked={isFree}
              onChange={() => setIsFree(!isFree)}
              className="mr-2"
            />
            <label htmlFor="isFree" className="text-sm text-gray-700">
              Make this a free subscription
            </label>
          </div>

          {/* Published Checkbox */}
          <div className="mb-6">
            <input
              type="checkbox"
              id="isPublished"
              name="isPublished"
              checked={isPublished}
              onChange={() => setIsPublished(!isPublished)}
              className="mr-2"
            />
            <label htmlFor="isPublished" className="text-sm text-gray-700">
              Publish this subscription
            </label>
          </div>

          {/* Buttons */}
          <div className="flex justify-end mt-8">
            <button
              type="submit"
              className="bg-green-500 text-white font-bold py-2 px-4 rounded hover:bg-green-600"
            >
              CREATE
            </button>
            <button
              type="button"
              className="bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded ml-2 hover:bg-gray-400"
              onClick={() => console.log('Cancelled')}
            >
              CANCEL
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateSubscription;
