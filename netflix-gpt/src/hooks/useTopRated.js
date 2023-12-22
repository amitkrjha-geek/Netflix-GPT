import { useDispatch, useSelector } from "react-redux"
import { addTopRated } from "../utils/moviesSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";



export const useTopRatedMovie = () => {
    const dispatch = useDispatch();
    const topRatedMovie = useSelector((store) => store.movies.topRated);

    const getTopRatedMovies = async () => {
        const data = await fetch(
            "https://api.themoviedb.org/3/movie/top_rated?page=1",
            API_OPTIONS
        );

        const json = await data.json();

        dispatch(addTopRated(json.results));
    };

    useEffect(() => {
        !topRatedMovie && getTopRatedMovies();
    },[])
}