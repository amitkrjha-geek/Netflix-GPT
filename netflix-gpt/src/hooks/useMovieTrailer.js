import { useDispatch, useSelector } from "react-redux"
import { addtrailerMovies } from "../utils/moviesSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";


 export const useMovieTrailer = (movieId) => {
    const dispatch = useDispatch();
    const trailerVideo = useSelector((store) => store.movies.trailerMovies);

    const getMoviesTrailer = async () => {
        const data = await fetch(
          "https://api.themoviedb.org/3/movie/" +
            movieId +
            "/videos?language=en-US",
          API_OPTIONS
        );
        const json = await data.json();

        const filterData = json.results.filter((video) => video.type === "Trailer");
        const trailer = filterData.length ? filterData[0] : json.results[0];
        dispatch(addtrailerMovies(trailer));

    }
    useEffect(() => {
        !trailerVideo && getMoviesTrailer();   
    },[])
}