"use client";
import React, { useState, useEffect } from "react";
import GenresList from "./component/genreList";
import { useSearch } from "@/provider/SearchContext";
import { GenreProps } from "@/lib/utils/typeProps";

const Genres: React.FC = () => {
  const [genre, setGenre] = useState<GenreProps[]>([]);
  const { setGenreTerm } = useSearch();

  const handleGenreSelect = (selectedGenre: GenreProps) => {
    setGenreTerm(selectedGenre.name.replace(" ", "-").toLowerCase());
  };

  const onDataFetched = (data: GenreProps[]) => {
    setGenre(data);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/getAllGenres", {
          cache: "force-cache",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const data = await response.json();
        onDataFetched(data.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <GenresList genres={genre} onGenreSelect={handleGenreSelect} />
    </div>
  );
};

export default Genres;
