'use client'
import React, { createContext, useContext, useState } from "react";

const SearchContext = createContext();

export const useSearch = () => {
  return useContext(SearchContext);
};

export const SearchProvider = ({ children }) => {
  const [search, setSearch] = useState("");
  const [genres, setGenre] = useState("")

  const setSearchTerm = (term) => {
    setSearch(term);
  };
  const setGenreTerm = (term) => {
    setGenre(term);
  };

  return (
    <SearchContext.Provider value={{ search, setSearchTerm, genres, setGenreTerm }}>
      {children}
    </SearchContext.Provider>
  );
};