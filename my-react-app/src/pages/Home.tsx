import React from "react";
import {
  FolderTree,
  Sun,
  Droplet,
  Users,
  TrendingUp,
  ChevronRight,
} from "lucide-react";

import Argiculture from "../assets/Agiculture.avif";

const FeatureCard: React.FC<{
  icon: React.ReactNode;
  title: string;
  description: string;
}> = ({ icon, title, description }) => (
  <div className="bg-green-50 p-6 rounded-lg shadow-md">
    <div className="text-green-600 mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const HomePage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="text-center py-20 bg-green-100 rounded-lg mb-12 ">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Cultivating a Sustainable Future
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Empowering farmers with innovative solutions and expert knowledge
        </p>
        <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-full text-lg transition duration-300">
          Explore Our Services
        </button>
      </div>

      {/* Features Section */}
      <div className="mb-20">
        <h2 className="text-3xl font-semibold text-center mb-12">
          Our Expertise
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            icon={<FolderTree size={40} />}
            title="Sustainable Farming"
            description="Learn about eco-friendly practices to maximize yield while preserving the environment."
          />
          <FeatureCard
            icon={<Sun size={40} />}
            title="Crop Management"
            description="Get insights on optimal crop selection and rotation strategies for your region."
          />
          <FeatureCard
            icon={<Droplet size={40} />}
            title="Water Conservation"
            description="Discover efficient irrigation techniques to save water and improve crop health."
          />
        </div>
      </div>

      {/* Statistics Section */}
      <div className="bg-green-600 text-white py-16 rounded-lg mb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold">Our Impact</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <Users size={40} className="mx-auto mb-4" />
            <div className="text-4xl font-bold mb-2">10,000+</div>
            <div className="text-xl">Farmers Supported</div>
          </div>
          <div className="text-center">
            <FolderTree size={40} className="mx-auto mb-4" />
            <div className="text-4xl font-bold mb-2">50,000</div>
            <div className="text-xl">Acres Cultivated</div>
          </div>
          <div className="text-center">
            <TrendingUp size={40} className="mx-auto mb-4" />
            <div className="text-4xl font-bold mb-2">30%</div>
            <div className="text-xl">Yield Increase</div>
          </div>
        </div>
      </div>

      {/* Latest News Section */}
      <div className="mb-20">
        <h2 className="text-3xl font-semibold text-center mb-12">
          Latest Agricultural News
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="border border-gray-200 rounded-lg overflow-hidden shadow-md"
            >
              <img
                src={Argiculture}
                alt="News thumbnail"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="font-semibold text-xl mb-2">
                  New Drought-Resistant Crop Varieties
                </h3>
                <p className="text-gray-600 mb-4">
                  Researchers have developed new crop varieties that can thrive
                  in low-water conditions...
                </p>
                <a
                  href="#"
                  className="text-green-600 font-semibold flex items-center"
                >
                  Read More <ChevronRight size={20} className="ml-1" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center py-16 bg-green-50 rounded-lg mb-12">
        <h2 className="text-3xl font-semibold mb-4">Ready to Grow with Us?</h2>
        <p className="text-xl text-gray-600 mb-8">
          Join our community of forward-thinking farmers and agricultural
          experts.
        </p>
        <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-full text-lg transition duration-300">
          Get Started Today
        </button>
      </div>
    </div>
  );
};

export default HomePage;
