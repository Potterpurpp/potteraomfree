import React from 'react';
import qrCodeImage from "../assets/qr-code-image.png"; 

const Donate = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50">
      <h1 className="text-4xl font-bold text-center mb-6">Support AgriTech</h1>
      <p className="text-gray-700 mb-4 text-center">
        Scan the QR code below to make a donation and support agricultural initiatives!
      </p>

      <div className="flex justify-center mb-6">
        {/* Use the imported QR code image */}
        <img 
          src={qrCodeImage} 
          alt="QR Code for Donation" 
          className="w-64 h-64 object-cover" 
        />
      </div>

      <div className="text-center mb-6">
        <h2 className="text-2xl font-semibold">Time Left to Donate:</h2>
        <p className="text-3xl font-bold text-red-500">03:00</p>
      </div>

      <div className="bg-white p-6 rounded shadow-md mb-6">
        <h3 className="text-xl font-bold mb-4">Top Donors</h3>
        <ol className="list-decimal pl-6">
          <li className="text-gray-700">Potter - $1000000</li>
          <li className="text-gray-700">Aom - $75000</li>
          <li className="text-gray-700">Aui - $50</li>
          <li className="text-gray-700">Luga - $25</li>
          <li className="text-gray-700">Tang - $10</li>
        </ol>
      </div>

      <p className="text-gray-600 text-center mt-4">
        Thank you for your generosity!
      </p>
    </div>
  );
};

export default Donate;
