import { OptimizeImage } from "@/lib/utils/OptimizeImage";
import { GameProps } from "@/lib/utils/typeProps";
import Image from "next/image";

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

const GameCard2 = async () => {
  const { data: games } = await getAllGames();
  return (
    <div className="shadow-xl bg-base-100 grid grid-cols-3 gap-x-4 gap-y-4 w-full flex-wrap">
      {games.map((game: GameProps) => (
        <div key={game.id} className="bg-base-100 flex-auto">
          <div className="bg-contain object-cover">
            <Image
              src={OptimizeImage(game.background_image)}
              alt={game.slug}
              width={400}
              height={50}
              className="bg-contain object-cover"
            />
          </div>
          <div>
            <h1>{game.name}</h1>
            <div className="card-actions justify-start">
              {game.platforms.map((platform) => (
                <div className="badge badge-info" key={platform.platform.id}>
                  {platform.platform.name}
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GameCard2;
