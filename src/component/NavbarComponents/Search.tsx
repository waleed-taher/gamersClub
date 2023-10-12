"use client";
import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";
import GameCard2 from "@/component/Games/GameCard2"; // Import the GameCard2 component
import { useSearch } from "@/provider/SearchContext";

const Search = () => {
  const [searchItem, setSearchItem] = useState("");
  const { setSearchTerm } = useSearch(); // Use the context to access search and setSearchTerm

  const handleKeyPress = (event: any) => {
    if (event.key === "Enter") {
      setSearchTerm(searchItem);
    }
  };

  return (
    <div className="flex items-center relative w-full justify-center">
      <input
        type="text"
        onChange={(e) => setSearchItem(e.target.value)}
        onKeyPress={handleKeyPress}
        placeholder="Search Games ..."
        className="bg-[#ededed] rounded-full w-full py-2 px-4 border border-purple-500 outline-none focus:border focus:border-blue-500"
      />
      <BiSearch size={24} className="absolute right-5 max-sm:right-2" />
    </div>
  );
};

export default Search;
