import { OptimizeImage } from "@/lib/utils/OptimizeImage";
import { GameProps } from "@/lib/utils/typeProps";

const GameCard = ({
  id,
  slug,
  name,
  background_image,
  platforms,
  metacritic,
}: GameProps) => {
  return (
    <div className="card w-96 shadow-xl bg-base-100">
      <div className="w-96 h-96">
        <img
          src={OptimizeImage(background_image)}
          alt={slug}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="card-body">
        <h2 className="card-title">
          {name}
          <div className="badge badge-warning">{metacritic}</div>
        </h2>
        <div className="card-actions justify-start">
          {platforms.map((plat) => (
            <div className="badge badge-info" key={plat.platform.id}>
              {plat.platform.name}
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-start gap-4 pl-8 pb-8">
        <button className="bg-purple-500 w-28 flex items-center justify-center text-white rounded-lg px-4 py-2 ">
          Buy Now
        </button>
        <button className="border border-purple-500 w-32 flex items-center justify-center text-purple-500 rounded-lg px-4 py-2 ">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default GameCard;
