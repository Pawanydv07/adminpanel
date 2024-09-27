import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Mobile = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate(); // UseNavigate hook for navigation

  // Screenshots data
  const screenshots = [
    {
      id: 1,
      src: "https://learnyst-apps.s3.ap-south-1.amazonaws.com/pro/admin-v3/add-ons-images/screenshots/mobile_apps/5.png",
      alt: "Screenshot 1",
    },
    {
      id: 2,
      src: "https://learnyst-apps.s3.ap-south-1.amazonaws.com/pro/admin-v3/add-ons-images/screenshots/mobile_apps/6.png",
      alt: "Screenshot 2",
    },
    {
      id: 3,
      src: "https://learnyst-apps.s3.ap-south-1.amazonaws.com/pro/admin-v3/add-ons-images/screenshots/mobile_apps/1.png",
      alt: "Screenshot 3",
    },
  ];

  // Handle Previous and Next for screenshots in About section
  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? screenshots.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === screenshots.length - 1 ? 0 : prevIndex + 1
    );
  };
  const handleSubscribe=()=>{
    navigate("/subscribeMobile")
  }

  return (
    <div className="bg-green-50 min-h-screen flex flex-col items-center">
      {/* Header Section */}
      <div className="max-w-7xl w-full bg-white shadow-lg rounded-lg mt-10 p-10">
        <div className="flex flex-col items-center text-center">
          <img
            src="https://learnyst-apps.s3.ap-south-1.amazonaws.com/pro/admin-v3/add-ons-images/mobileapps.svg"
            alt="Mobile Illustration"
            className="mb-5 h-20"
          />
          <h1 className="text-3xl font-bold">
            Mobile Apps <span className="text-yellow-600">FREE</span>
          </h1>
          <p className="text-gray-600 mb-5">
            Get fully branded Android & iOS apps for your school.
          </p>
          <button className="bg-green-500 text-white py-2 px-6 rounded-full hover:bg-green-600" onClick={handleSubscribe}>
            SUBSCRIBE
          </button>
        </div>
      </div>

      {/* Back Button */}
      <div className="mt-6">
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600"
          onClick={() => navigate(-1)} // Go back to the previous page
        >
          Back
        </button>
      </div>

      {/* Pricing Section */}
      <div className="max-w-7xl w-full bg-white shadow-lg rounded-lg mt-10 p-10">
        <h2 className="text-4xl font-bold mb-8 text-center">Pricing</h2>
        <div className="space-y-4">
          {/* Preview App (Free) */}
          <div className="flex items-center justify-between bg-gray-50 p-4 rounded-lg shadow-md">
            <div className="flex items-center">
              <img
                src="https://res-cdn.learnyst.com/pro/admin-v3/media/preview-app-icon.png"
                alt="Preview App"
                className="mr-4 h-10 w-14"
              />
              <h3 className="text-lg font-semibold">Preview App (Free)</h3>
            </div>
            <span className="text-green-600 font-bold">FREE</span>
          </div>

          {/* Android */}
          <div className="flex items-center justify-between bg-gray-50 p-4 rounded-lg shadow-md">
            <div className="flex items-center">
              <img
                src="https://res-cdn.learnyst.com/pro/admin-v3/media/branding/android.png"
                alt="Android"
                className="mr-4 h-10 w-14"
              />
              <h3 className="text-lg font-semibold">Android</h3>
            </div>
            <span className="text-gray-900 font-bold">₹ 8,999</span>
          </div>

          {/* iOS */}
          <div className="flex items-center justify-between bg-gray-50 p-4 rounded-lg shadow-md">
            <div className="flex items-center">
              <img
                src="https://res-cdn.learnyst.com/pro/admin-v3/media/apple.svg"
                alt="iOS"
                className="mr-4 h-10 w-14"
              />
              <h3 className="text-lg font-semibold">iOS</h3>
            </div>
            <span className="text-gray-900 font-bold">₹ 14,999</span>
          </div>

          {/* Android and iOS */}
          <div className="flex items-center justify-between bg-gray-50 p-4 rounded-lg shadow-md">
            <div className="flex items-center">
              <img
                src="https://res-cdn.learnyst.com/pro/admin-v3/media/mobile-apps.png"
                alt="Android and iOS"
                className="mr-4 h-10 w-14"
              />
              <h3 className="text-lg font-semibold">Android and iOS</h3>
            </div>
            <span className="text-gray-900 font-bold">₹ 23,998</span>
          </div>
        </div>
      </div>

      {/* Screenshots Carousel */}
      <div className="max-w-7xl w-full bg-white shadow-lg rounded-lg mt-10 p-10">
        <h2 className="text-4xl font-bold mb-8 text-center">Screenshots</h2>
        <div className="relative flex items-center justify-center">
          {/* Left arrow */}
          <button
            className="absolute left-0 bg-gray-200 p-2 rounded-full"
            onClick={handlePrev}
          >
            ←
          </button>
          {/* Screenshot Image */}
          <img
            src={screenshots[currentIndex].src}
            alt={screenshots[currentIndex].alt}
            className="w-64  rounded-lg"
          />
          {/* Right arrow */}
          <button
            className="absolute right-0 bg-gray-200 p-2 rounded-full"
            onClick={handleNext}
          >
            →
          </button>
        </div>
      </div>

      {/* About Section */}
      <div className="max-w-7xl w-full bg-white shadow-lg rounded-lg mt-10 p-10 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Text content */}
        <div>
          <h2 className="text-4xl font-bold mb-8 text-center">About</h2>
          <p className="text-gray-600 text-lg">
            We offer fully branded mobile apps that allow schools to communicate
            directly with students and parents. Our apps are customizable to fit
            your school’s colors, logo, and branding. With features like content
            downloads, notifications, and DRM protection, you can offer a secure
            and engaging experience for learners. Our mobile apps support Android
            and iOS platforms, making it easier for schools to extend their
            services beyond the classroom.
          </p>
        </div>

        {/* Overlapping Screenshots in About Section */}
        <div className="relative flex items-center justify-center">
          {/* Left arrow */}
          <button
            className="absolute left-0 bg-gray-200 p-2 rounded-full z-10"
            onClick={handlePrev}
          >
            ←
          </button>
          {/* Screenshot Image */}
          <img
            src={screenshots[currentIndex].src}
            alt={screenshots[currentIndex].alt}
            className="w-full h-auto rounded-lg"
          />
          {/* Right arrow */}
          <button
            className="absolute right-0 bg-gray-200 p-2 rounded-full z-10"
            onClick={handleNext}
          >
            →
          </button>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="max-w-7xl w-full bg-white shadow-lg rounded-lg mt-10 p-10">
        <h2 className="text-4xl font-bold mb-8 text-center">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {/* FAQ 1 */}
          <div className="p-4 bg-gray-50 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold">
              How can I build my apps?
            </h3>
            <p className="text-gray-600">
              Once you subscribe to any mobile app plan, you will get access to the app builder.
              Using the app builder, you can build & download the apps. Later, you can upload
              the app to the Play store/App store.
            </p>
          </div>

          {/* FAQ 2 */}
          <div className="p-4 bg-gray-50 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold">What is Preview app?</h3>
            <p className="text-gray-600">
              With the Preview app, you can preview how your mobile apps will look once it's built.
            </p>
          </div>

          {/* FAQ 3 */}
          <div className="p-4 bg-gray-50 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold">
              Can the apps be customized according to my school branding?
            </h3>
            <p className="text-gray-600">
              Yes, you can go to the branding section & customize your mobile apps according
              to your brand colors, graphics, and styles.
            </p>
          </div>

          {/* FAQ 4 */}
          <div className="p-4 bg-gray-50 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold">
              Can learners download contents on the mobile app? Is it secure?
            </h3>
            <p className="text-gray-600">
              Yes, learners can download contents on their mobile app, which can only be played
              within the app. Also, it is DRM encrypted, hence it cannot be shared.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mobile;
