import { GenreProps } from "@/lib/utils/typeProps";

const getAllGenres = async () => {
  try {
    const data = await fetch("http://localhost:3000/api/getAllGenres", {
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

const Genres = async () => {
  const { data: genres } = await getAllGenres();
  return (
    <div>
      {genres.map((genre: GenreProps) => (
        <button key={genre.id} className="flex flex-col w-full">
          <span className="my-2 px-2 py-2 bg-[#ededed] rounded-lg hover:bg-purple-700 w-full hover:text-white">
            {genre.name}
          </span>
        </button>
      ))}
    </div>
  );
};

export default Genres;
