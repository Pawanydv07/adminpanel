import React, { useState } from 'react';

const SignUpSettings = () => {
  // State to manage the selected option
  const [signupType, setSignupType] = useState('email');
  const [emailChecked, setEmailChecked] = useState(true);
  const [googleChecked, setGoogleChecked] = useState(false);
  const [facebookChecked, setFacebookChecked] = useState(false);
  const [appleChecked, setAppleChecked] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-10">
      {/* Main Container */}
      <div className="max-w-5xl w-full bg-white shadow-md rounded-lg p-10">
        {/* Header Section */}
        <h1 className="text-4xl font-extrabold mb-6 text-gray-800">Sign up settings</h1>
        <p className="text-lg text-gray-600 mb-8">
          Configure your learner sign-up flow.
        </p>

        {/* Signup Options */}
        <div className="flex justify-between items-start mb-8">
          {/* Email & Social Signups */}
          <div className="w-2/3">
            <label className="flex items-center space-x-3 mb-4">
              <input
                type="radio"
                name="signupType"
                checked={signupType === 'email'}
                onChange={() => setSignupType('email')}
                className="form-radio h-5 w-5 text-blue-600"
              />
              <span className="font-bold text-2xl">Email & Social Sign Ups</span>
            </label>
            <p className="text-lg text-gray-600 mb-6">
              You can allow your learners to sign up using their email, Google, Facebook, and Apple accounts.
            </p>
            <div className="space-y-5">
              {/* Email */}
              <div className="flex items-center space-x-4">
                <input
                  type="checkbox"
                  checked={emailChecked}
                  onChange={() => setEmailChecked(!emailChecked)}
                  className="form-checkbox h-5 w-5 text-blue-600"
                />
                <span className="text-xl font-medium">Email</span>
              </div>

              {/* Google */}
              <div className="flex items-center space-x-4">
                <input
                  type="checkbox"
                  checked={googleChecked}
                  onChange={() => setGoogleChecked(!googleChecked)}
                  className="form-checkbox h-5 w-5 text-blue-600"
                />
                <span className="text-xl font-medium">Google</span>
                <button
                  className="bg-gray-200 text-gray-500 px-5 py-2 rounded-lg"
                  disabled={!googleChecked}
                >
                  Configure
                </button>
              </div>

              {/* Facebook */}
              <div className="flex items-center space-x-4">
                <input
                  type="checkbox"
                  checked={facebookChecked}
                  onChange={() => setFacebookChecked(!facebookChecked)}
                  className="form-checkbox h-5 w-5 text-blue-600"
                />
                <span className="text-xl font-medium">Facebook</span>
                <button
                  className="bg-gray-200 text-gray-500 px-5 py-2 rounded-lg"
                  disabled={!facebookChecked}
                >
                  Configure
                </button>
              </div>

              {/* Apple */}
              <div className="flex items-center space-x-4">
                <input
                  type="checkbox"
                  checked={appleChecked}
                  onChange={() => setAppleChecked(!appleChecked)}
                  className="form-checkbox h-5 w-5 text-blue-600"
                />
                <span className="text-xl font-medium">Apple</span>
                <button
                  className="bg-gray-200 text-gray-500 px-5 py-2 rounded-lg"
                  disabled={!appleChecked}
                >
                  Configure
                </button>
              </div>
            </div>
            <p className="text-gray-400 mt-4 text-sm">
              Note: Social sign-ups can be configured solo or can be added with Email type only.
            </p>
          </div>

          {/* Username Signups */}
          <div className="w-1/3">
            <label className="flex items-center space-x-3 mb-4">
              <input
                type="radio"
                name="signupType"
                checked={signupType === 'username'}
                onChange={() => setSignupType('username')}
                className="form-radio h-5 w-5 text-blue-600"
              />
              <span className="font-bold text-2xl">User Name</span>
            </label>
            <p className="text-lg text-gray-600">
              You can allow your learners to sign up using a username.
            </p>
          </div>
        </div>

        {/* Save and Verification Buttons */}
        <div className="flex justify-between mt-8">
          <button className="bg-green-600 text-white font-bold px-8 py-3 rounded-lg text-lg hover:bg-green-700">
            Save
          </button>
          <button className="border border-gray-300 text-gray-600 px-6 py-3 rounded-lg text-lg hover:bg-gray-100">
            Verification
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUpSettings;
