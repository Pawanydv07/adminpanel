import React, { useState } from "react";
import { useLocation } from "react-router-dom"; // For getting the selected plan

const PaymentPage = () => {
  const location = useLocation();
  const { plan } = location.state || {}; // Safely access state

  const [selectedMethod, setSelectedMethod] = useState("Card");
  const [cardDetails, setCardDetails] = useState({
    cardNumber: "",
    cardHolder: "",
    expiryDate: "",
    cvv: "",
  });
  const [paypalEmail, setPaypalEmail] = useState("");
  const [upiId, setUpiId] = useState("");

  // Check if plan is undefined
  if (!plan) {
    return (
      <div className="bg-red-100 text-red-700 p-4 rounded-lg text-center">
        <h2 className="font-semibold">Error: Invalid Payment Information</h2>
        <p>Please go back and select a plan before proceeding.</p>
      </div>
    );
  }

  const handlePayment = () => {
    // Implement the payment processing logic here
    alert(`Proceeding with ${selectedMethod} payment for the ${plan.name} plan.`);
  };

  return (
    <div className="bg-gray-50 min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-6xl">
        <h2 className="text-2xl font-bold mb-4">Payment for {plan.name} Plan</h2>

        {/* Plan Details Section */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold">Plan Details:</h3>
          <p className="text-gray-500">
            You have selected the <span className="font-bold">{plan.name}</span> plan.
          </p>
          <p className="text-gray-500">Price: ₹{plan.price}/month</p>
          <p className="text-gray-500">Duration: {plan.duration} {plan.duration > 1 ? "months" : "month"}</p>
        </div>

        {/* Payment Method Selection */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-4">Select Payment Method:</h3>
          <div className="space-y-4">
            {/* Card Payment Option */}
            <label className="flex items-center bg-gray-100 p-3 rounded-lg cursor-pointer">
              <input
                type="radio"
                name="paymentMethod"
                value="Card"
                checked={selectedMethod === "Card"}
                onChange={(e) => setSelectedMethod(e.target.value)}
                className="form-radio text-green-500"
              />
              <span className="ml-2 text-gray-700">Pay with Card</span>
            </label>

            {/* PayPal Payment Option */}
            <label className="flex items-center bg-gray-100 p-3 rounded-lg cursor-pointer">
              <input
                type="radio"
                name="paymentMethod"
                value="PayPal"
                checked={selectedMethod === "PayPal"}
                onChange={(e) => setSelectedMethod(e.target.value)}
                className="form-radio text-blue-500"
              />
              <span className="ml-2 text-gray-700">Pay with PayPal</span>
            </label>

            {/* PhonePe/UPI Payment Option */}
            <label className="flex items-center bg-gray-100 p-3 rounded-lg cursor-pointer">
              <input
                type="radio"
                name="paymentMethod"
                value="PhonePe"
                checked={selectedMethod === "PhonePe"}
                onChange={(e) => setSelectedMethod(e.target.value)}
                className="form-radio text-purple-500"
              />
              <span className="ml-2 text-gray-700">Pay with PhonePe / UPI</span>
            </label>
          </div>
        </div>

        {/* Payment Details Section */}
        <div className="mt-4">
          {selectedMethod === "Card" && (
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">Card Details:</h3>
              <input
                type="text"
                placeholder="Card Number"
                value={cardDetails.cardNumber}
                onChange={(e) => setCardDetails({ ...cardDetails, cardNumber: e.target.value })}
                className="w-full p-2 border rounded mb-4"
                required
              />
              <input
                type="text"
                placeholder="Card Holder Name"
                value={cardDetails.cardHolder}
                onChange={(e) => setCardDetails({ ...cardDetails, cardHolder: e.target.value })}
                className="w-full p-2 border rounded mb-4"
                required
              />
              <div className="flex space-x-2">
                <input
                  type="text"
                  placeholder="Expiry Date (MM/YY)"
                  value={cardDetails.expiryDate}
                  onChange={(e) => setCardDetails({ ...cardDetails, expiryDate: e.target.value })}
                  className="w-1/2 p-2 border rounded mb-4"
                  required
                />
                <input
                  type="text"
                  placeholder="CVV"
                  value={cardDetails.cvv}
                  onChange={(e) => setCardDetails({ ...cardDetails, cvv: e.target.value })}
                  className="w-1/2 p-2 border rounded mb-4"
                  required
                />
              </div>
            </div>
          )}

          {selectedMethod === "PayPal" && (
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">PayPal Email:</h3>
              <input
                type="email"
                placeholder="Enter your PayPal email"
                value={paypalEmail}
                onChange={(e) => setPaypalEmail(e.target.value)}
                className="w-full p-2 border rounded mb-4"
                required
              />
            </div>
          )}

          {selectedMethod === "PhonePe" && (
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">PhonePe / UPI ID:</h3>
              <input
                type="text"
                placeholder="Enter your UPI ID"
                value={upiId}
                onChange={(e) => setUpiId(e.target.value)}
                className="w-full p-2 border rounded mb-4"
                required
              />
              <p className="text-gray-500 text-sm">Scan the QR code using PhonePe for quick payment.</p>
              {/* Placeholder for QR Code */}
              <div className="flex justify-center mt-4">
                <img
                  src="https://via.placeholder.com/150" // Replace with your QR code image source
                  alt="QR Code"
                  className="rounded-lg"
                />
              </div>
            </div>
          )}
        </div>

        {/* Purchase Button */}
        <div className="mt-6 text-center">
          <button
            onClick={handlePayment}
            className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 rounded-lg"
          >
            Proceed to Purchase
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
