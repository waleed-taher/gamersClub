"use client";
import GameCard from "@/component/Games/GameCard";
import GenrePanel from "@/component/Genres/GenrePanel";
import { handler, handler2 } from "@/lib/utils/services";
import { GameProps, GenreProps } from "@/lib/utils/typeProps";
import { useEffect, useState } from "react";

const Home = () => {
  const [genre, setSelectedGenre] = useState("");
  const [games, setGames] = useState([]);
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    async function dataFetching() {
      const genres = await handler("genres");
      setGenres(genres);
      console.log(genre);
      if (genre !== "") {
        const game = await handler2(genre);
        setGames(game);
      } else {
        const game = await handler("games");
        setGames(game);
      }
    }
    dataFetching();
  }, [genre]);
  return (
    <main className="flex justify-between mx-10 gap-20">
      <div className="w-1/4">
        <h1 className="text-4xl">Genres</h1>
        {genres.map((res: GenreProps) => (
          <GenrePanel
            key={res.id}
            label={res.name}
            onClick={(label) => {
              if (typeof label === "string") {
                setSelectedGenre(label.toLowerCase());
              }
            }}
          />
        ))}
      </div>
      <div className="w-3/4">
        <h1 className="text-4xl font-bold">{genre.toLocaleUpperCase()}</h1>
        <div className="flex-1 flex flex-wrap gap-10 ">
          {games.map((game: GameProps) => (
            <GameCard key={game.id} {...game} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Home;
