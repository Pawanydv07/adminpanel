import React from "react";

const integrations = [
  {
    name: "Google Analytics",
    description:
      "Google Analytics is a web analytics service that tracks and reports website traffic. Integrate Google Analytics with your app to track engagement.",
    image:
      "https://res-cdn.learnyst.com/pro/admin-v3/media/google-analytics.svg",
  },
  {
    name: "Pabbly",
    description:
      "Easily connect and automate tasks between your app and other applications.",
    image: "https://res-cdn.learnyst.com/pro/admin-v3/media/pabbly.svg", // Replace with your image URL
  },
  {
    name: "Zapier",
    description:
      "Zapier is an easy way to connect and automate tasks between your app and many other applications.",
    image: "https://res-cdn.learnyst.com/pro/admin-v3/media/zapier-img.svg", // Replace with your image URL
  },
  {
    name: "Code Snippets",
    description:
      "Include additional JavaScript code snippets inside your landing page. You can add your supporting 3rd party app JavaScript code.",
    image: "https://res-cdn.learnyst.com/pro/admin-v3/media/code-snippet.svg", // Replace with your image URL
  },
  {
    name: "Webhooks",
    description:
      "Include any kind of custom webhook integrations which are specific to your needs.",
    image: "https://res-cdn.learnyst.com/pro/admin-v3/media/webhook.svg", // Replace with your image URL
  },
];

const AppIntegrations = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">App Integrations</h2>
      <p className="text-gray-500 mb-6">
        Integrate 3rd party business and marketing tools to keep your app
        working the way you like it.
      </p>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="py-3 px-6 text-left font-medium text-gray-700 border-b">
                Integration
              </th>
              <th className="py-3 px-6 text-left font-medium text-gray-700 border-b">
                Description
              </th>
            </tr>
          </thead>
          <tbody>
            {integrations.map((integration, index) => (
              <tr key={index}>
                <td className="py-4 px-6 border-b">
                  <div className="flex items-center">
                    <img
                      src={integration.image}
                      alt={integration.name}
                      className="w-10 h-10 mr-4"
                    />
                    <span className="font-semibold text-gray-700">
                      {integration.name}
                    </span>
                  </div>
                </td>
                <td className="py-4 px-6 border-b text-gray-600">
                  {integration.description}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AppIntegrations;
