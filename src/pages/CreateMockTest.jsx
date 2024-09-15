import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const CreateMockTest = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const [isFree, setIsFree] = useState(false);
  const [quizType, setQuizType] = useState("online");
  const [showModal, setShowModal] = useState(false); // Control the modal visibility

  const handleCreateMockTest = async (e) => {
    e.preventDefault();

    const mockTestData = {
      title,
      price: isFree ? 0 : price,
      isFree,
      quizType,
    };

    try {
      const response = await axios.post(
        "https://ad-2.onrender.com/api/mocktests/create",
        mockTestData
      );
      console.log("Mock test created:", response.data);

      // Show the modal after successful creation
      setShowModal(true);

      // Reset form fields
      setTitle("");
      setPrice(0);
      setIsFree(false);
      setQuizType("online");
    } catch (error) {
      console.error("Error creating mock test:", error);
      alert("Failed to create mock test. Please try again.");
    }
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-md p-8">
        {/* Breadcrumb */}
        <div className="text-sm text-gray-500 mb-6">
          <Link to="createtest">
            <span>CREATE MOCK TEST</span>
          </Link>
          /
        </div>

        {/* Header */}
        <h1 className="text-3xl font-semibold mb-4">Create Mock Test</h1>
        <p className="text-gray-600 mb-8">Start creating a new mock test</p>

        {/* Form */}
        <form onSubmit={handleCreateMockTest} className="space-y-6">
          {/* Title */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Title <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              placeholder="Enter mock test title"
              maxLength={60}
              required
            />
            <span className="text-sm text-gray-500 float-right">
              {title.length}/60
            </span>
          </div>

          {/* Price */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Price
            </label>
            <div className="relative mt-1">
              <input
                type="number"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="block w-full border border-gray-300 rounded-md p-2 pl-10"
                placeholder="₹ Price"
                disabled={isFree}
                required={!isFree}
              />
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                ₹
              </span>
            </div>
            <div className="mt-2 flex items-center">
              <input
                id="free-checkbox"
                type="checkbox"
                checked={isFree}
                onChange={(e) => setIsFree(e.target.checked)}
                className="h-4 w-4 text-blue-600 border-gray-300 rounded"
              />
              <label
                htmlFor="free-checkbox"
                className="ml-2 block text-sm text-gray-700"
              >
                Make this a free mock test
              </label>
            </div>
          </div>

          {/* Quiz Type */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Quiz Type
            </label>
            <div className="space-y-2">
              <div className="flex items-center">
                <input
                  id="online-quiz"
                  name="quiz-type"
                  type="radio"
                  value="online"
                  checked={quizType === "online"}
                  onChange={(e) => setQuizType(e.target.value)}
                  className="h-4 w-4 text-blue-600 border-gray-300"
                />
                <label
                  htmlFor="online-quiz"
                  className="ml-3 text-sm font-medium text-gray-700"
                >
                  Online Quiz
                </label>
                <p className="ml-3 text-sm text-gray-500">
                  Create online quiz by using competitive exam template
                </p>
              </div>
              <div className="flex items-center">
                <input
                  id="offline-quiz"
                  name="quiz-type"
                  type="radio"
                  value="offline"
                  checked={quizType === "offline"}
                  onChange={(e) => setQuizType(e.target.value)}
                  className="h-4 w-4 text-blue-600 border-gray-300"
                />
                <label
                  htmlFor="offline-quiz"
                  className="ml-3 text-sm font-medium text-gray-700"
                >
                  Offline Quiz
                </label>
                <p className="ml-3 text-sm text-gray-500">
                  Create offline quiz using essay type questions & digitally
                  evaluate the answers
                </p>
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex space-x-4 mt-6">
            <button
              type="submit"
              className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
            >
              CREATE
            </button>
            <button
              type="button"
              className="bg-gray-100 border border-gray-300 px-4 py-2 rounded-md hover:bg-gray-200"
            >
              CANCEL
            </button>
          </div>
        </form>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg p-6 max-w-lg mx-auto">
            <h2 className="text-2xl font-bold mb-4">
              Mock Test Created Successfully!
            </h2>
            <p className="text-gray-600 mb-6">
              Your mock test has been created successfully.
            </p>
            <button
              onClick={closeModal}
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
            >
              OK
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CreateMockTest;
