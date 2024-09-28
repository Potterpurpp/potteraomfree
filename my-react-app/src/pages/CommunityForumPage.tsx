import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MessageSquare, Users, Clock } from "lucide-react";

const ForumTopicCard: React.FC<{
  title: string;
  author: string;
  replies: number;
  views: number;
  lastActivity: string;
  category: string;
}> = ({ title, author, replies, views, lastActivity }) => (
  <div className="bg-white shadow-md rounded-lg p-4 mb-4 hover:shadow-lg transition-shadow duration-300">
    <div className="flex items-center justify-between">
      <div className="flex-1">
        <h3 className="text-lg font-semibold text-green-600 hover:text-green-800 transition-colors duration-300">
          <a href="#">{title}</a>
        </h3>
        <p className="text-sm text-gray-500">Started by {author}</p>
      </div>
      <div className="flex items-center space-x-4 text-sm text-gray-600">
        <div className="flex items-center">
          <MessageSquare size={16} className="mr-1" />
          <span>{replies}</span>
        </div>
        <div className="flex items-center">
          <Users size={16} className="mr-1" />
          <span>{views}</span>
        </div>
        <div className="flex items-center">
          <Clock size={16} className="mr-1" />
          <span>{lastActivity}</span>
        </div>
      </div>
    </div>
  </div>
);

const CommunityForumPage = () => {
  const navigate = useNavigate();

  const forumTopics = [
    {
      title: "Best Practices To Enhancing Farming Quality",
      author: "Potter",
      replies: 23,
      views: 1024,
      lastActivity: "2h ago",
      category: "Agriculture",
    },
    {
      title: "Innovative irrigation techniques discussion",
      author: "WaterWise",
      replies: 45,
      views: 2048,
      lastActivity: "1d ago",
      category: "Agriculture",
    },
    {
      title: "Organic pest control methods - share your experiences",
      author: "BugBuster",
      replies: 67,
      views: 3072,
      lastActivity: "3d ago",
      category: "Agriculture",
    },
    {
      title: "Urban gardening tips for beginners",
      author: "GreenThumb",
      replies: 12,
      views: 512,
      lastActivity: "5d ago",
      category: "Urban Gardening",
    },
    // Add more topics as needed
  ];

  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filteredTopics = forumTopics.filter((topic) => {
    const matchesCategory =
      selectedCategory === "All" || topic.category === selectedCategory;
    const matchesSearchQuery = topic.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearchQuery;
  });

  const handleDivClick = () => {
    navigate("/knowledge");
  };

  return (
    <div className="bg-gray-100 min-h-screen py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">
          Community Forum
        </h1>

        <div className="mb-8 flex justify-between items-center">
          <input
            type="text"
            placeholder="Search forum topics..."
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="mb-8 flex space-x-4">
          <button
            className={`px-4 py-2 rounded-lg ${
              selectedCategory === "All"
                ? "bg-green-600 text-white"
                : "bg-gray-200 text-gray-800"
            }`}
            onClick={() => setSelectedCategory("All")}
          >
            All
          </button>
          <button
            className={`px-4 py-2 rounded-lg ${
              selectedCategory === "Agriculture"
                ? "bg-green-600 text-white"
                : "bg-gray-200 text-gray-800"
            }`}
            onClick={() => setSelectedCategory("Agriculture")}
          >
            Agriculture
          </button>
          <button
            className={`px-4 py-2 rounded-lg ${
              selectedCategory === "Urban Gardening"
                ? "bg-green-600 text-white"
                : "bg-gray-200 text-gray-800"
            }`}
            onClick={() => setSelectedCategory("Urban Gardening")}
          >
            Urban Gardening
          </button>
        </div>

        <div
          className="bg-white shadow-md rounded-lg p-6 mb-8 cursor-pointer"
          onClick={handleDivClick}
        >
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            {selectedCategory !== "All"
              ? `${selectedCategory} Topics`
              : "All Topics"}
          </h2>
          {filteredTopics.length > 0 ? (
            filteredTopics.map((topic, index) => (
              <ForumTopicCard key={index} {...topic} />
            ))
          ) : (
            <p className="text-gray-500">No topics found.</p>
          )}
        </div>

        <div className="text-center">
          <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full transition duration-300">
            Start a New Topic
          </button>
        </div>
      </div>
    </div>
  );
};

export default CommunityForumPage;
