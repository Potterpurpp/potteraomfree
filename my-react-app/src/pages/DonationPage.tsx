import React from 'react';
import qrCodeImage from "../assets/qr-code-image.png"; 
import { FaCrown, FaClock } from 'react-icons/fa';

const Donate = () => {
  return (
    <div className="max-w-4xl mx-auto p-8 bg-gray-100 rounded-lg shadow-lg">
      <h1 className="text-5xl font-bold text-center text-green-600 mb-8">Support AgriTech</h1>
      <p className="text-gray-800 mb-6 text-center text-lg">
        Your donation helps us bring innovation to agriculture. Scan the QR code below to contribute and support our initiatives!
      </p>

      <div className="flex justify-center mb-8">
        <div className="bg-white p-4 rounded-lg shadow-lg">
          {/* QR Code Image */}
          <img 
            src={qrCodeImage} 
            alt="QR Code for Donation" 
            className="w-64 h-64 object-cover" 
          />
        </div>
      </div>

      {/* Countdown Timer */}
      <div className="text-center mb-10">
        <div className="flex justify-center items-center space-x-4">
          <FaClock className="text-3xl text-red-500" />
          <div>
            <h2 className="text-2xl font-semibold">Time Left to Donate:</h2>
            <p className="text-4xl font-bold text-red-500">03:00</p>
          </div>
        </div>
      </div>

      {/* Top Donors Section */}
      <div className="bg-white p-8 rounded-lg shadow-md mb-10">
        <h3 className="text-3xl font-bold text-green-600 mb-6 flex items-center">
          <FaCrown className="mr-3 text-yellow-500" /> Top Donors
        </h3>
        <ol className="list-decimal pl-6 text-lg">
          <li className="text-gray-800 mb-2"><strong>Potter</strong> - <span className="text-green-600">$1,000,000</span></li>
          <li className="text-gray-800 mb-2"><strong>Aom</strong> - <span className="text-green-600">$75,000</span></li>
          <li className="text-gray-800 mb-2"><strong>Aui</strong> - <span className="text-green-600">$50</span></li>
          <li className="text-gray-800 mb-2"><strong>Luga</strong> - <span className="text-green-600">$25</span></li>
          <li className="text-gray-800"><strong>Tang</strong> - <span className="text-green-600">$10</span></li>
        </ol>
      </div>

      <p className="text-gray-700 text-center text-lg">
        Thank you for your generosity in supporting AgriTech initiatives!
      </p>
    </div>
  );
};

export default Donate;
