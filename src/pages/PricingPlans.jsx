import React, { useState } from "react";

const PricingPlans = () => {
  const [billingCycle, setBillingCycle] = useState("monthly");

  const plans = [
    {
      name: "Essential",
      priceMonthly: 3499,
      priceAnnual: 2799, // 20% off for annual
      features: [
        "Custom Domain",
        "Unlimited Landing Pages",
        "Payment Gateway Integration",
        "Encrypted Courses",
        "Live Lessons (With Zoom)",
      ],
      isCurrentPlan: true,
    },
    {
      name: "Professional",
      priceMonthly: 8999,
      priceAnnual: 7199,
      features: [
        "Content Dripping",
        "Advanced Quiz Features",
        "Categories",
        "Custom Fields",
        "Custom Language Editor",
      ],
      isRecommended: true,
    },
    {
      name: "Premium",
      priceMonthly: 14999,
      priceAnnual: 11999,
      features: [
        "Screen Recording Restriction",
        "Essay Evaluation",
        "Remove Powered by Learnyst",
        "Product Segmentation",
        "Single Sign-On",
      ],
    },
  ];

  return (
    <div className="bg-white py-10 ">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-6">Select Plan</h2>
        <p className="text-center text-gray-500 mb-4">
          0% Transaction fees, Keep 100% of your revenue
        </p>
        <div className="flex justify-center gap-4 mb-8">
          <button
            className={`px-4 py-2 rounded-full ${
              billingCycle === "monthly"
                ? "bg-green-500 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
            onClick={() => setBillingCycle("monthly")}
          >
            Monthly
          </button>
          <button
            className={`px-4 py-2 rounded-full ${
              billingCycle === "annual"
                ? "bg-green-500 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
            onClick={() => setBillingCycle("annual")}
          >
            Annual <span className="text-sm text-yellow-500">20% off</span>
          </button>
        </div>

        {/* Pricing Plans */}
        <div className="flex justify-center gap-8 mb-16">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`w-80 border rounded-lg p-6 ${
                plan.isRecommended ? "border-yellow-400" : "border-gray-300"
              }`}
            >
              {plan.isRecommended && (
                <div className="bg-yellow-400 text-white text-sm font-bold py-1 px-2 inline-block rounded-full mb-4">
                  Recommended
                </div>
              )}
              <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
              <p className="text-3xl font-bold">
                ₹{billingCycle === "monthly" ? plan.priceMonthly : plan.priceAnnual}/
                <span className="text-sm">month*</span>
              </p>
              <p className="text-gray-500 text-sm mb-6">
                (Billed {billingCycle})
              </p>

              <ul className="mb-6">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <span className="text-green-500 mr-2">+</span>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              {plan.isCurrentPlan ? (
                <button className="w-full bg-gray-200 text-gray-600 py-2 rounded-lg">
                  Current Plan
                </button>
              ) : (
                <button className="w-full bg-green-500 text-white py-2 rounded-lg">
                  Buy {plan.name}
                </button>
              )}
            </div>
          ))}
        </div>

        {/* Enterprise Plan Section */}
        <div className="bg-gray-100 py-10">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold">Enterprise Plan</h2>
            <p className="text-gray-500">
              Looking for something beyond our pricing plans? Book a call with our customer success team to discuss your requirements.
            </p>
          </div>

          <div className="flex justify-center gap-8">
            <div className="text-center">
              <img
                src="https://res-cdn.learnyst.com/pro/admin-v3/media/enterprise1.png" // Replace with your icon source
                alt="Custom Developed Apps"
                className="mx-auto mb-4"
              />
              <h3 className="font-semibold">Custom Developed Apps</h3>
              <p className="text-gray-500">
                Get your own custom designed app for your institute based on your requirements.
              </p>
            </div>

            <div className="text-center">
              <img
                src="https://res-cdn.learnyst.com/pro/admin-v3/media/enterprise2.png" // Replace with your icon source
                alt="Enterprise API Access"
                className="mx-auto mb-4"
              />
              <h3 className="font-semibold">Enterprise API Access</h3>
              <p className="text-gray-500">
                Get enterprise API access with Enterprise plan subscription.
              </p>
            </div>

            <div className="text-center">
              <img
                src="https://res-cdn.learnyst.com/pro/admin-v3/media/enterprise3.png" // Replace with your icon source
                alt="Dedicated Customer Success Team"
                className="mx-auto mb-4"
              />
              <h3 className="font-semibold">Dedicated Customer Success Team</h3>
              <p className="text-gray-500">
                Get a dedicated success team for your institute, available to help and support.
              </p>
            </div>
          </div>

          <div className="text-center mt-8">
            <button className="bg-green-500 text-white px-6 py-3 rounded-lg">
              Talk to Us
            </button>
          </div>
        </div>

        {/* Mobile Apps Section */}
        <div className="mt-16 bg-gray-100 py-10">
          <h2 className="text-2xl font-bold text-center">Mobile Apps</h2>
          <p className="text-center mt-4">
            Get your school in every learner's hand. Subscribe for white-labeled mobile apps from Rs. 4999/month.
          </p>

          <div className="flex justify-center mt-6">
            <div className="flex items-center space-x-2 bg-gray-200 p-4 rounded">
              <i className="fab fa-android text-green-500 text-4xl"></i>
              <i className="fab fa-apple text-black text-4xl"></i>
            </div>
          </div>

          {/* Get App Button */}
          <div className="text-center mt-6">
            <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded">
              Get App
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPlans;
