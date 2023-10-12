import React from "react";
import GenreItem from "./GenreItem";
import { GenreProps } from "@/lib/utils/typeProps";

interface GenresListProps {
  genres: GenreProps[];
  onGenreSelect: (genre: GenreProps) => void;
}

const GenresList: React.FC<GenresListProps> = ({ genres, onGenreSelect }) => (
  <div>
    {genres.map((genre) => (
      <GenreItem key={genre.id} genre={genre} onClick={onGenreSelect} />
    ))}
  </div>
);

export default GenresList;
