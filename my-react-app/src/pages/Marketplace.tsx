import React, { useState } from "react";
import { ShoppingCart, Search } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Organic Tomato Seeds",
    price: 1,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj0xTzz13oqWLvsguwyba7FmBWU9Ow3pVJ5g&s",
    category: "Seeds",
  },
  {
    id: 2,
    name: "Carrot",
    price: 25,
    image: "https://www.hhs1.com/hubfs/carrots%20on%20wood-1.jpg",
    category: "Fertilizers",
  },
  {
    id: 3,
    name: "Shovel",
    price: 500,
    image:
      "https://plus.unsplash.com/premium_photo-1680658496041-f7575066cec2?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2hvdmVsfGVufDB8fDB8fHww",
    category: "Tools",
  },
  {
    id: 4,
    name: "Pesticide Spray Bottle",
    price: 300,
    image:
      "https://www.vitalgardensupply.com/cdn/shop/files/defenderbottlecutout.jpg?v=1684450041",
    category: "Pesticides",
  },
];

const categories = ["All", "Seeds", "Fertilizers", "Tools", "Pesticides"];

const Marketplace = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = products.filter(
    (product) =>
      (selectedCategory === "All" || product.category === selectedCategory) &&
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto p-6">
      {/* Header */}
      <header className="flex items-center justify-between mb-8">
        <h1 className="text-4xl font-bold text-gray-900">
          {" "}
          AgriTech Marketplace
        </h1>
        <div className="flex space-x-4">
          <input
            type="text"
            placeholder="Search products"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border p-2 rounded-lg"
          />
          <button className="bg-gray-800 text-white p-2 rounded-lg">
            <Search className="w-5 h-5" />
          </button>
          <button className="bg-gray-800 text-white p-2 rounded-lg">
            <ShoppingCart className="w-5 h-5" />
          </button>
        </div>
      </header>

      {/* Categories */}
      <div className="flex space-x-4 mb-6">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`p-2 rounded-lg ${
              selectedCategory === category
                ? "bg-green-600 text-white"
                : "bg-gray-200 text-gray-800"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <div key={product.id} className="bg-white p-4 rounded-lg shadow-md">
            <img
              src={product.image}
              alt={product.name}
              className="h-32 w-full object-fill mb-4 rounded-lg"
            />
            <h2 className="text-lg font-semibold text-gray-900">
              {product.name}
            </h2>
            <p className="text-gray-700">Price: ${product.price}</p>
            <button className="mt-4 w-full bg-green-600 text-white p-2 rounded-lg">
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      {/* Footer */}
      <footer className="mt-16 text-center text-gray-600">
        <p>&copy; 2024 AgriTech Marketplace. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Marketplace;
