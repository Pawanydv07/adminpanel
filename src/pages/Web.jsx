import React from 'react';

const Web = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Header */}
      <div className="bg-white p-4 shadow-lg rounded-lg mb-6">
        <h1 className="text-2xl font-bold">Website</h1>
        <p className="text-gray-600">Create, edit and manage your website with all elements and features.</p>
        <div className="bg-blue-100 p-3 mt-4 rounded-lg">
          <h2 className="text-xl font-semibold">
            The all new Learnyst website builder ⚡
          </h2>
          <p>Create and manage your websites with customized widgets.</p>
        </div>
      </div>

      {/* Custom Domain Section */}
      <div className="bg-white p-4 shadow-lg rounded-lg mb-6">
        <h2 className="text-xl font-bold mb-2">Custom Domain</h2>
        <p className="text-gray-600 mb-4">Configure your custom domain mapping.</p>
        <div className="p-4 bg-green-100 border border-green-500 rounded-lg">
          <p className="text-green-600 font-semibold">Custom Domain Mapped Successfully</p>
          <p className="text-gray-600">Congratulations! Your domain mapping configuration is done successfully.</p>
        </div>
        <div className="mt-4">
          <label htmlFor="customDomain" className="block text-gray-700 font-semibold mb-1">Custom Domain</label>
          <input 
            id="customDomain"
            className="w-full p-2 border border-gray-300 rounded-lg"
            value="courses.mysatguide.com"
            disabled
          />
          <div className="mt-2 flex items-center">
            <input type="checkbox" id="sslCheckbox" className="mr-2" />
            <label htmlFor="sslCheckbox" className="text-gray-600">Don’t generate an SSL certificate for this domain, I already have one.</label>
          </div>
        </div>
      </div>

      {/* Domain Mapping Info */}
      <div className="bg-white p-4 shadow-lg rounded-lg mb-6">
        <h2 className="text-xl font-bold mb-2">Important!</h2>
        <p className="text-gray-600 mb-4">
          Please map your <span className="font-bold">"courses.mysatguide.com"</span> to 
          <span className="font-semibold"> anuj-gupta-cdn-x.learnyst.com</span>.
        </p>
        <a href="#" className="text-blue-500 underline">Refer to the Support Document for more help.</a>
        <div className="mt-4 flex space-x-4">
          <button className="bg-gray-300 text-gray-600 px-4 py-2 rounded-lg" disabled>MAP DOMAIN</button>
          <button className="bg-red-500 text-white px-4 py-2 rounded-lg">UNMAP DOMAIN</button>
        </div>
      </div>

      {/* Policy Table */}
      <div className="bg-white p-4 shadow-lg rounded-lg">
        <h2 className="text-xl font-bold mb-4">Policy</h2>
        <p className="text-gray-600 mb-6">
          Policy helps you to clearly outline the terms and conditions regarding accountability issues or activities 
          that are of critical importance to the company.
        </p>
        <div className="overflow-auto">
          <table className="min-w-full bg-white border border-gray-300">
            <thead>
              <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                <th className="py-3 px-6 text-left">#</th>
                <th className="py-3 px-6 text-left">Page Name</th>
                <th className="py-3 px-6 text-left">Policy URL</th>
                <th className="py-3 px-6 text-left">Updated at</th>
                <th className="py-3 px-6 text-left">Action</th>
              </tr>
            </thead>
            <tbody className="text-gray-600 text-sm">
              <tr>
                <td className="py-3 px-6">1</td>
                <td className="py-3 px-6">pricing-policy</td>
                <td className="py-3 px-6">N/A</td>
                <td className="py-3 px-6">-</td>
                <td className="py-3 px-6">
                  <button className="text-red-500">Delete</button>
                </td>
              </tr>
              <tr>
                <td className="py-3 px-6">2</td>
                <td className="py-3 px-6">refund</td>
                <td className="py-3 px-6">
                  <a href="https://courses.mysatguide.com/refund.html" className="text-blue-500 underline">
                    https://courses.mysatguide.com/refund.html
                  </a>
                </td>
                <td className="py-3 px-6">7/30/2024</td>
                <td className="py-3 px-6">
                  <button className="text-red-500">Delete</button>
                </td>
              </tr>
              <tr>
                <td className="py-3 px-6">3</td>
                <td className="py-3 px-6">terms-of-service</td>
                <td className="py-3 px-6">
                  <a href="https://courses.mysatguide.com/terms-of-service.html" className="text-blue-500 underline">
                    https://courses.mysatguide.com/terms-of-service.html
                  </a>
                </td>
                <td className="py-3 px-6">7/30/2024</td>
                <td className="py-3 px-6">
                  <button className="text-red-500">Delete</button>
                </td>
              </tr>
              <tr>
                <td className="py-3 px-6">4</td>
                <td className="py-3 px-6">privacy-policy</td>
                <td className="py-3 px-6">
                  <a href="https://courses.mysatguide.com/privacy-policy.html" className="text-blue-500 underline">
                    https://courses.mysatguide.com/privacy-policy.html
                  </a>
                </td>
                <td className="py-3 px-6">7/30/2024</td>
                <td className="py-3 px-6">
                  <button className="text-red-500">Delete</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg">ADD POLICY</button>
      </div>
    </div>
  );
}

export default Web;
