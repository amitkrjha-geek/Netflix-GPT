import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  
  return (
    <div className="px-6 ">
      <h1 className="text-lg md:text-3xl py-4 text-white">{title}</h1>
      <div className="flex flex-row overflow-x-auto mx-2">
        <div className="flex ">
          {movies?.map((movie) => (
            <MovieCard
              key={movie.id}
              title={movie.title}
              voteCount={movie.vote_count}
              voteAvg={movie.vote_average}
              posterPath={movie.poster_path}
              releaseDate={movie.release_date}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default MovieList;
