"use client";
import { OptimizeImage } from "@/lib/utils/OptimizeImage";
import { GameProps } from "@/lib/utils/typeProps";
import { useSearch } from "@/provider/SearchContext";
import { useEffect, useState } from "react";

const getAllGames = async () => {
  try {
    const data = await fetch("http://localhost:3000/api/getAllGames", {
      cache: "force-cache",
      headers: {
        "Content-Type": "application/json",
      },
    });

    return data.json();
  } catch (error) {
    console.log(error);
  }
};

const getSearchData = async (search?: string, genre?: string) => {
  try {
    const data = await fetch("http://localhost:3000/api/search", {
      headers: {
        "Content-Type": "application/json",
        genres: genre ?? "",
        search: search ?? "",
      },
    });

    return data.json();
  } catch (error) {
    console.log(error);
  }
};

const GameCard2 = () => {
  const { search } = useSearch();
  const { genres } = useSearch();
  const [games, setGames] = useState<GameProps[]>([]);
  useEffect(() => {
    const getGamesData = async () => {
      try {
        if (!search && !genres) {
          const data = await getAllGames();
          setGames(data.data);
        } else {
          const data = await getSearchData(search, genres);
          setGames(data.data);
        }
      } catch (error) {
        console.log(error);
      }
    };

    getGamesData();
  }, [search, genres]);
  return (
    <div>
      {genres && (
        <h1 className="text-4xl font-bold">{genres.toUpperCase()} GAMES</h1>
      )}
      <div className="shadow-xl bg-base-100 grid grid-cols-3 gap-x-4 gap-y-4 w-full flex-wrap">
        {Array.isArray(games) && games.length > 0 ? (
          games.map((game: GameProps) => (
            <div key={game.id} className="bg-base-100 flex-auto">
              <div className="bg-contain object-cover">
                <img
                  src={OptimizeImage(game.background_image)}
                  alt={game.slug}
                  className="bg-contain object-cover"
                />
              </div>
              <div>
                <h1>{game.name}</h1>
                <div className="card-actions justify-start">
                  {game.platforms.map((platform) => (
                    <div
                      className="badge badge-info"
                      key={platform.platform.id}
                    >
                      {platform.platform.name}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No games found</p>
        )}
      </div>
    </div>
  );
};

export default GameCard2;
