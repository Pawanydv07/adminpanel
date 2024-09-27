import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; // Install axios if you haven't already

function CreateWebinar() {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [isFree, setIsFree] = useState(false);
  const [isEncrypted, setIsEncrypted] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://ad-2.onrender.com/api/webinar', {
        title,
        price,
        isFree,
        isEncrypted
      });
      setShowModal(true);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="max-w-2xl mx-auto mt-8 p-6 bg-white shadow-md rounded-lg">
      {/* Breadcrumb navigation */}
      <div className="mb-4">
        <button
          onClick={handleBack}
          className="text-blue-500 text-sm font-medium bg-transparent border-none cursor-pointer"
        >
          &lt; BACK
        </button>
      </div>

      {/* Title Section */}
      <h2 className="text-blue-600 text-xs font-bold">WEBINARS / CREATE WEBINAR</h2>
      <h1 className="text-2xl font-bold mb-4">Create Webinar</h1>
      <p className="text-gray-500 mb-6">Start creating a new webinar</p>

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
            placeholder="Enter webinar title"
            required
          />
          <span className="text-gray-500 text-xs float-right">{title.length}/60</span>
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

        {/* Free Webinar Checkbox */}
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
            Make this a free webinar
          </label>
        </div>

        {/* Content Security Section */}
        <h3 className="text-sm font-semibold text-gray-700 mb-4">Content Security</h3>
        <div className="mb-6">
          {/* Encryption Option */}
          <div className="flex items-center mb-2">
            <input
              type="radio"
              id="encryption"
              name="contentSecurity"
              checked={isEncrypted}
              onChange={() => setIsEncrypted(true)}
              className="mr-2"
            />
            <label htmlFor="encryption" className="text-sm text-gray-700 font-semibold">
              Encryption
            </label>
            <span className="ml-2 text-xs text-yellow-600 bg-yellow-100 px-2 py-0.5 rounded-md">
              Recommended
            </span>
          </div>
          <p className="text-xs text-gray-500 ml-6">
            Secure content will be encrypted using DRM system and will be protected against piracy.
          </p>

          {/* No Encryption Option */}
          <div className="flex items-center mt-4">
            <input
              type="radio"
              id="noEncryption"
              name="contentSecurity"
              checked={!isEncrypted}
              onChange={() => setIsEncrypted(false)}
              className="mr-2"
            />
            <label htmlFor="noEncryption" className="text-sm text-gray-700 font-semibold">
              No Encryption
            </label>
          </div>
          <p className="text-xs text-gray-500 ml-6">
            Content will not be encrypted. Unsecure content can be easily downloaded.
          </p>
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

      {/* Success Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold mb-4">Success</h2>
            <p className="text-gray-700 mb-4">Your webinar has been created successfully!</p>
            <button
              onClick={() => setShowModal(false)}
              className="bg-green-500 text-white font-bold py-2 px-4 rounded hover:bg-green-600"
            >
              OK
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default CreateWebinar;
