import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieSuggestions = () => {
  const { gptMovies, searchGpt } = useSelector((store) => store.gpt);
  
  if (!gptMovies||!searchGpt) return null;

  return (
    <div className="p-4 m-4 bg-black text-white bg-opacity-90">
      <div>
        {gptMovies.map((movieName, index) => (
          <MovieList
            key={movieName}
            title={movieName}
            movies={searchGpt[index]}
          />
        ))}
      </div>
    </div>
  );
};
export default GptMovieSuggestions;
