import React, { useEffect, useState } from "react";
import {
  FolderTree,
  Sun,
  Droplet,
  Users,
  TrendingUp,
  ChevronRight,
} from "lucide-react";
import { FaLine, FaFacebook, FaDiscord } from "react-icons/fa";

import Argiculture from "../assets/Agiculture.avif";
import { Link } from "react-router-dom";

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
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const latestNews = [
    {
      id: 1,
      title: "Cultivating agricultural sustainability in Thailand",
      date: "2022-06-15",
      content:
        "The global agricultural sector is facing significant challenges, including climate change, food insecurity, and overexploitation of natural resources. As a leading provider of sustainable farming solutions, we have been committed to promoting agricultural sustainability in Thailand.",
    },
    {
      id: 2,
      title: "Thailand's first sustainable farming initiative",
      date: "2022-05-30",
      content:
        "In response to the declining of agriculture due to excessive use of agro-chemicals and economic pressure, a group of farmers and local non-government organizations (NGOs) came together to establish the Alternative Agriculture Network (AAN) around the early 1980s.",
    },
    {
      id: 3,
      title: "Thailand's agricultural sector is growing",
      date: "2022-05-15",
      content:
        "Thailand has high tariffs on agricultural imports with the bound tariff rate averaging 42 percent ad valorem.  This presents a significant impediment for U.S. agricultural exports, particularly consumer-oriented products, including dairy products, meats, fresh fruit, snack foods, processed vegetables, pet food, and alcoholic beverages. ",
    },
  ];
  const truncateContent = (content: string, wordLimit: number) => {
    const words = content.split(" ");
    if (words.length > wordLimit) {
      return words.slice(0, wordLimit).join(" ") + "...";
    }
    return content;
  };
  const community = [
    {
      id: 1,
      name: "Line OpenChat",
      icon: FaLine,
      link: "https://line.me/ti/g2/XXXXXXXXXX",
    },
    {
      id: 2,
      name: "Facebook group",
      icon: FaFacebook,
      link: "https://www.facebook.com/groups/XXXXXXXXXX",
    },
    {
      id: 3,
      name: "Discord group",
      icon: FaDiscord,
      link: "https://discord.com/channels/xxxxxxxx",
    },
  ];
  const images = [
    "https://img.freepik.com/free-photo/detail-rice-plant-sunset-valencia-with-plantation-out-focus-rice-grains-plant-seed_181624-25838.jpg?w=2000&t=st=1727548943~exp=1727549543~hmac=76bff714263b675256cffa92c01e24bebf1004f5483d65db556a0c9df3abf0b9",
    "https://img.freepik.com/free-photo/beautiful-strawberry-garden-sunrise-doi-ang-khang-chiang-mai-thailand_335224-761.jpg?w=2000&t=st=1727548966~exp=1727549566~hmac=5bcabd8d331314cb1465044360abc8aad78e17b606499cce06f4cbbcf3f3402b",
    "https://img.freepik.com/free-photo/so-many-vegetables-this-field_181624-18619.jpg?w=2000&t=st=1727548993~exp=1727549593~hmac=c2f1e522b998970606d41b440fe1ed0ffb6512aba03bd9b1b243572da3aebe97",
    "https://img.freepik.com/free-photo/strawberry-field_1203-7581.jpg?w=2000&t=st=1727549014~exp=1727549614~hmac=a4f7882332547a8a75a41a19f3194c77bfd93dfc5c3105035c1a45738ba0774d",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex: number) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);
  return (
    <>
      {/* Hero Section */}
      <div className="relative h-screen overflow-hidden">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
              index === currentImageIndex ? "opacity-100" : "opacity-0"
            }`}
            style={{ backgroundImage: `url(${image})` }}
          />
        ))}
        <div className="absolute inset-0 bg-black bg-opacity-50" />{" "}
        {/* Overlay for better text readability */}
        <Link
          to={"/"}
          className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white"
        >
          <h1 className="text-5xl font-bold mb-4">
            Cultivating a Sustainable Future
          </h1>
          <p className="text-xl mb-8">
            Empowering farmers with innovative solutions and expert knowledge
          </p>
          <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-full text-lg transition duration-300">
            Explore Our Services
          </button>
        </Link>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
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
            <h2 className="text-3xl font-semibold pb-10 border-b-4 ">
              Our Insight Platform
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center border-r-4">
              <Users size={40} className="mx-auto mb-4 " />
              <div className="text-4xl font-bold mb-2">10,000+</div>
              <div className="text-xl">Farmers Supported</div>
            </div>
            <div className="text-center border-r-4">
              <FolderTree size={40} className="mx-auto mb-4" />
              <div className="text-4xl font-bold mb-2">50,000</div>
              <div className="text-xl">Acres Cultivated</div>
            </div>
            <div className="text-center ">
              <TrendingUp size={40} className="mx-auto mb-4" />
              <div className="text-4xl font-bold mb-2">30%</div>
              <div className="text-xl">Yield Increase</div>
            </div>
          </div>
        </div>

        {/* Latest News Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-semibold text-center mb-12 text-green-900">
            Latest Agricultural News
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {latestNews.map((item) => (
              <div
                key={item.id}
                className="border border-gray-200 rounded-lg overflow-hidden shadow-md "
              >
                <img
                  src={Argiculture}
                  alt="News thumbnail"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="font-semibold text-xl mb-2">{item.title}</h3>
                  <p className="text-gray-600 mb-4 space-y-10">
                    {truncateContent(item.content, 39)}
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
      </div>
      {/* Call to Action */}
      <div className="text-center py-16 bg-green-50 rounded-lg">
        <h2 className="text-3xl font-bold mb-4 text-green-900">
          Ready to Grow with Us?
        </h2>
        <p className="text-xl text-gray-600 mb-8">
          Join our community of forward-thinking farmers and agricultural
          experts.
        </p>
        <div className="gap-8 max-w-4xl mx-auto px-4 justify-center flex flex-row">
          {community.map((item) => (
            <div
              key={item.id}
              className="flex flex-col items-center justify-center"
            >
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mb-4"
              >
                <item.icon
                  size={48}
                  className="text-green-500 hover:text-green-600 transition-colors duration-300"
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default HomePage;
