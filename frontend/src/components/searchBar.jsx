import React from "react";
import { useState, useEffect } from "react";
import  MagnifyingGlassIcon  from "/searchIcon.png"; // Assuming you're using Heroicons

export default function SearchBar(){
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);

  const results = [
    "React",
    "React Native",
    "Tailwind CSS",
    "JavaScript",
    "Node.js",
    "Express",
    "MongoDB",
    "GraphQL",
  ];

  const handleSearch = () => {
    if (searchQuery.trim() !== "") {
      const matchedResults = results.filter((result) =>
        result.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredResults(matchedResults);
      setShowDropdown(true);
    } else {
      setFilteredResults([]);
      setShowDropdown(false);
    }
  };

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
    if (e.target.value.trim() === "") {
      setFilteredResults([]);
      setShowDropdown(false);
    } else {
      handleSearch();
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const handleResultClick = (result) => {
    setSearchQuery(result);
    setShowDropdown(false);
  };

  return (
    <div className="relative max-w-xl mx-auto z-50">
      <div className="flex items-center w-full border border-neutral-700 rounded-md shadow-lg bg-neutral-800">
        <input
          type="text"
          value={searchQuery}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          placeholder="Search..."
          className="w-full px-4 py-2 text-sm text-white bg-neutral-800 placeholder-neutral-500 focus:outline-none"
        />
        <button
          onClick={handleSearch}
          className="p-2 rounded-r-md hover:bg-neutral-700 focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5 text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-4.35-4.35m0 0a7.5 7.5 0 1 0-10.606-10.606 7.5 7.5 0 0 0 10.606 10.606z"
            />
          </svg>
        </button>
      </div>

      {showDropdown && filteredResults.length > 0 && (
        <div className="absolute w-full mt-2 bg-neutral-800 border border-neutral-700 rounded-lg shadow-lg">
          {filteredResults.map((result, index) => (
            <div
              key={index}
              onClick={() => handleResultClick(result)}
              className="px-4 py-2 text-sm text-white cursor-pointer hover:bg-neutral-700"
            >
              {result}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
