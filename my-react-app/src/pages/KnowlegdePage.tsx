import React, { useState } from "react";
import { Leaf, Droplet, Sun, Wind, Thermometer } from "lucide-react";

const FarmingTip: React.FC<{
  icon: React.ReactNode;
  title: string;
  description: string;
}> = ({ icon, title, description }) => (
  <div className="bg-green-50 p-4 rounded-lg shadow-md mb-4">
    <div className="flex items-center mb-2">
      {icon}
      <h3 className="text-lg font-semibold ml-2">{title}</h3>
    </div>
    <p className="text-gray-700">{description}</p>
  </div>
);

const KnowledgePage = () => {
  const [expandedTip, setExpandedTip] = useState<number>(0);

  const tips = [
    {
      icon: <Leaf className="text-green-600" />,
      title: "Crop Rotation",
      description:
        "Implement crop rotation to improve soil health, reduce pest problems, and optimize nutrient use.",
      details:
        "Rotate crops annually to break pest cycles and balance nutrient demands. For example, follow nitrogen-fixing legumes with heavy-feeding crops like corn.",
    },
    {
      icon: <Droplet className="text-blue-600" />,
      title: "Efficient Irrigation",
      description:
        "Use water-efficient irrigation systems to conserve water and improve crop yield.",
      details:
        "Consider drip irrigation or precision sprinklers. Water early in the morning to reduce evaporation. Monitor soil moisture to avoid over or under-watering.",
    },
    {
      icon: <Sun className="text-yellow-600" />,
      title: "Sustainable Pest Management",
      description:
        "Implement Integrated Pest Management (IPM) to control pests while minimizing environmental impact.",
      details:
        "Use biological controls, crop rotation, and resistant varieties. Apply pesticides judiciously and only when necessary. Encourage beneficial insects through habitat creation.",
    },
    {
      icon: <Wind className="text-gray-600" />,
      title: "Soil Conservation",
      description:
        "Practice soil conservation techniques to maintain and improve soil quality.",
      details:
        "Use cover crops, minimize tillage, and implement contour farming on slopes. Add organic matter to improve soil structure and water retention.",
    },
    {
      icon: <Thermometer className="text-red-600" />,
      title: "Climate-Smart Farming",
      description:
        "Adapt farming practices to climate change and reduce greenhouse gas emissions.",
      details:
        "Use drought-resistant crops in dry areas. Implement agroforestry to increase carbon sequestration. Use renewable energy sources for farm operations.",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">
        Enhancing Farming Quality
      </h1>
      <p className="text-gray-700 mb-8 text-center">
        Learn about best practices to improve your farm's productivity and
        sustainability.
      </p>

      {tips.map((tip, index) => (
        <div
          key={index}
          onClick={() => setExpandedTip(expandedTip === index ? -1 : index)}
          className="cursor-pointer"
        >
          <FarmingTip {...tip} />
          {expandedTip === index && (
            <div className="bg-green-100 p-4 rounded-lg mb-4 ml-8">
              <p className="text-gray-800">{tip.details}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default KnowledgePage;
