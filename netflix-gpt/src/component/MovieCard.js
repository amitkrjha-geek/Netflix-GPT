import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ title,posterPath,voteCount,voteAvg,releaseDate }) => {
  if (!posterPath) return null;
  const handleGoogleIt = () => {
    window.location.href = "https://www.google.com/search?q="+title;
   };
  const handleTrailer = () => { 
    window.location.href = "https://www.youtube.com/results?search_query="+title+"trailer";
  };
 
  return (
    <div
      
      className=" flex flex-col shadow-md border border-gray-200 rounded-lg w-64 mx-1 dark:bg-gray-800 dark:border-gray-700"
    >
      <img
        className="rounded-t-lg w-full h-3/5"
        alt="Movie Card"
        src={IMG_CDN_URL + posterPath}
      />
      <h2 className="text-xl mx-2 pt-4 pb-2 text-white">
        {"Release Date : " + releaseDate}
      </h2>
      <div className=" mx-2 text-lg text-white flex flex-row justify-between">
        <h2>
          Vote Count
          <h2>{voteCount}</h2>
        </h2>
        <h2>
          Vote Average
          <h2>{voteAvg}</h2>
        </h2>
      </div>
      <div className=" pt-8 mx-2 text-lg text-white flex flex-row justify-between">
        <button onClick={handleTrailer}
          className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-1 dark:bg-red-900 dark:hover:bg-red-700 focus:outline-none dark:focus:ring-red-800">
          Watch Trailer
        </button>
        <button 
          onClick={handleGoogleIt}
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-1 dark:bg-red-900 dark:hover:bg-red-700 focus:outline-none dark:focus:ring-red-800"
        >
          Google it
        </button>
      </div>
    </div>
  );
};
export default MovieCard;
