import React, { useState } from "react";
import SearchBar from "../components/SearchBar";

const FundraisingPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">
        Fundraising Center
      </h1>
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
    </div>
  );
};

export default FundraisingPage;
