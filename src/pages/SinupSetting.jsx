import React, { useState } from 'react';

const SignUpSettings = () => {
  // State to manage the selected option
  const [signupType, setSignupType] = useState('email');
  const [emailChecked, setEmailChecked] = useState(true);
  const [googleChecked, setGoogleChecked] = useState(false);
  const [facebookChecked, setFacebookChecked] = useState(false);
  const [appleChecked, setAppleChecked] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 p-10">
      {/* Header Section */}
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">Sign up settings</h1>
        <p className="text-gray-500 mb-6">
          Configure your learner sign up flow.
        </p>

        {/* Signup Options */}
        <div className="flex justify-between items-start mb-8">
          {/* Email & Social Signups */}
          <div>
            <label className="flex items-center space-x-2 mb-2">
              <input
                type="radio"
                name="signupType"
                checked={signupType === 'email'}
                onChange={() => setSignupType('email')}
                className="form-radio h-4 w-4 text-blue-600"
              />
              <span className="font-semibold text-lg">Email & Social Sign Ups</span>
            </label>
            <p className="text-gray-500">
              You can allow your learners to sign up using their email id, Google, Facebook, and Apple accounts.
            </p>
            <div className="mt-4 space-y-4">
              {/* Email */}
              <div className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  checked={emailChecked}
                  onChange={() => setEmailChecked(!emailChecked)}
                  className="form-checkbox h-4 w-4 text-blue-600"
                />
                <span className="font-medium">Email</span>
              </div>

              {/* Google */}
              <div className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  checked={googleChecked}
                  onChange={() => setGoogleChecked(!googleChecked)}
                  className="form-checkbox h-4 w-4 text-blue-600"
                />
                <span className="font-medium">Google</span>
                <button
                  className="bg-gray-200 text-gray-500 px-4 py-1 rounded"
                  disabled={!googleChecked}
                >
                  Configure
                </button>
              </div>

              {/* Facebook */}
              <div className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  checked={facebookChecked}
                  onChange={() => setFacebookChecked(!facebookChecked)}
                  className="form-checkbox h-4 w-4 text-blue-600"
                />
                <span className="font-medium">Facebook</span>
                <button
                  className="bg-gray-200 text-gray-500 px-4 py-1 rounded"
                  disabled={!facebookChecked}
                >
                  Configure
                </button>
              </div>

              {/* Apple */}
              <div className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  checked={appleChecked}
                  onChange={() => setAppleChecked(!appleChecked)}
                  className="form-checkbox h-4 w-4 text-blue-600"
                />
                <span className="font-medium">Apple</span>
                <button
                  className="bg-gray-200 text-gray-500 px-4 py-1 rounded"
                  disabled={!appleChecked}
                >
                  Configure
                </button>
              </div>
            </div>
            <p className="text-gray-400 mt-2 text-sm">
              Note: Social sign-ups can be configured solo or can be added with Email type only.
            </p>
          </div>

          {/* Username Signups */}
          <div>
            <label className="flex items-center space-x-2 mb-2">
              <input
                type="radio"
                name="signupType"
                checked={signupType === 'username'}
                onChange={() => setSignupType('username')}
                className="form-radio h-4 w-4 text-blue-600"
              />
              <span className="font-semibold text-lg">User Name</span>
            </label>
            <p className="text-gray-500">
              You can allow your learners to sign up using a username.
            </p>
          </div>
        </div>

        {/* Save Button */}
        <div className="flex justify-between">
          <button className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600">
            Save
          </button>
          <button className="border border-gray-300 text-gray-500 px-4 py-2 rounded-lg hover:bg-gray-100">
            Verification
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUpSettings;
