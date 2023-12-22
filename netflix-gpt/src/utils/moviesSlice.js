import {
    createSlice
} from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: "movies",
    initialState: {
        nowPlayingMovies: null,
        trailerMovies: null,
        popularMovies: null,
        topRated: null,
        upcoming:null
    },
    reducers: {
        addNowPlayingMovies: (state, action) => {
            state.nowPlayingMovies = action.payload;
        },
        addtrailerMovies: (state, action) => {
            state.trailerMovies = action.payload;
        },
        addPopularMovies: (state, action) => {
            state.popularMovies = action.payload;
        },
        addTopRated: (state, action) => {
            state.topRated = action.payload;
        },
        addupcoming: (state, action) => {
            state.upcoming = action.payload;
        },
    }
})

export const { addNowPlayingMovies, addPopularMovies, addTopRated, addtrailerMovies, addupcoming } = moviesSlice.actions;
export default moviesSlice.reducer;