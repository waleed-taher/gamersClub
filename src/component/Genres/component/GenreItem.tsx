import { GenreProps } from "@/lib/utils/typeProps";
import React from "react";

interface GenreItemProps {
  genre: GenreProps;
  onClick: (genre: GenreProps) => void;
}

const GenreItem: React.FC<GenreItemProps> = ({ genre, onClick }) => (
  <button className="flex flex-col w-full">
    <span
      className="my-2 px-2 py-2 bg-[#ededed] rounded-lg hover:bg-purple-700 w-full hover:text-white"
      onClick={() => onClick(genre)}
    >
      {genre.name}
    </span>
  </button>
);

export default GenreItem;
