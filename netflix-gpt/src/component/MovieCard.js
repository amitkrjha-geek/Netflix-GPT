import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ title,posterPath }) => {
  if (!posterPath) return null;
  const handleClick = () => {
      const search = "https://www.google.com/search?q"+title;
   }
  return (
    <div onClick={handleClick}
      className="w-36 md:w-48 pr-4">
      <img alt="Movie Card" src={IMG_CDN_URL + posterPath} />
    </div>
  );
};
export default MovieCard;
