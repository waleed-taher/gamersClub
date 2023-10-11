import Button from "@/component/FilterButton/Button";
import OrderButton from "@/component/FilterButton/OrderButton";
import GameCard from "@/component/Games/GameCard";
import GameCard2 from "@/component/Games/GameCard2";
import Genres from "@/component/Genres";
import GenrePanel from "@/component/Genres/GenrePanel";
import {
  OrderByDifferentGenre,
  OrderByDifferentGenre2,
  OrderByDifferentGenre3,
  handler,
  handler2,
  orderingGames,
  platformSortedGames,
} from "@/lib/utils/services";
import { GameProps, GenreProps } from "@/lib/utils/typeProps";
import { useEffect, useState } from "react";

const Home = () => {
  // const [genre, setSelectedGenre] = useState("");
  // const [games, setGames] = useState([]);
  // const [genres, setGenres] = useState([]);
  // const [platforms, setGamingPlatforms] = useState(0);
  // const [ordering, setOrdering] = useState("");

  // useEffect(() => {
  //   async function dataFetching() {
  //     const genres = await handler("genres");
  //     setGenres(genres);

  //     try {
  //       let game;
  //       if (platforms !== 0 && genre !== "" && ordering !== "") {
  //         game = await OrderByDifferentGenre3(platforms, genre, ordering);
  //         console.log("1");
  //       } else if (platforms !== 0 && ordering !== "") {
  //         game = await OrderByDifferentGenre(platforms, ordering);
  //         console.log("2");
  //       } else if (platforms !== 0 && genre !== "") {
  //         game = await OrderByDifferentGenre2(platforms, genre);
  //         console.log("3");
  //       } else if (genre !== "") {
  //         game = await handler2(genre);
  //         console.log("4");
  //       } else if (platforms !== 0) {
  //         game = await platformSortedGames(platforms);
  //         console.log("5");
  //       } else if (ordering !== "") {
  //         game = await orderingGames(ordering);
  //         console.log("6");
  //       } else {
  //         game = await handler("games");
  //       }

  //       setGames(game);
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   }

  //   dataFetching();
  // }, [genre, platforms, ordering]); // Include platforms as a dependency

  return (
    <main className="flex justify-between mx-10 gap-20">
      <div className="w-1/4">
        <h1 className="text-4xl">Genres</h1>
        <Genres />
      </div>
      <div className="w-3/4 flex">
        <GameCard2 />
      </div>
      {/* {genres.map((res: GenreProps) => (
          <GenrePanel
            key={res.id}
            label={res.name}
            onClick={(label) => {
              if (typeof label === "string") {
                if (
                  label === "Massively Multiplayer" ||
                  label === "Board Games"
                ) {
                  const newLabel = label.replace(" ", "-");
                  setSelectedGenre(newLabel.toLowerCase());
                } else {
                  setSelectedGenre(label.toLowerCase());
                }
              }
            }}
          />
        ))}
      </div>
      <div className="w-3/4">
        <Button
          title="platform"
          onClick={(selectedPlatform) => {
            if (typeof selectedPlatform === "number") {
              setGamingPlatforms(selectedPlatform);
            }
          }}
        />
        <OrderButton
          onClick={(selectedOrder) => {
            if (typeof selectedOrder === "string") {
              setOrdering(selectedOrder);
            }
          }}
        />
        <h1 className="text-4xl font-bold">{genre.toLocaleUpperCase()}</h1>
        <div className="flex-1 flex flex-wrap gap-10 ">
          {games.map((game: GameProps) => (
            <GameCard key={game.id} {...game} />
          ))}
        </div>
      </div> */}
    </main>
  );
};

export default Home;
