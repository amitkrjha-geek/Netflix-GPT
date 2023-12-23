import { createSlice } from "@reduxjs/toolkit";

const gptSLice = createSlice({
    name: "gpt",
    initialState: {
        showGpt: false,
        gptMovies: null,
        searchGpt:null,
    },
    reducers: {
        addShowgpt: (state, action) => {
            state.showGpt=!state.showGpt
        },
        addMoviesResults: (state, action) => {
            const { gptMoviesResults, searchMoviesResults } = action.payload;
            state.gptMovies = gptMoviesResults;
            state.searchGpt = searchMoviesResults;
                
        }
    }
    
})

export const { addMoviesResults, addShowgpt } = gptSLice.actions;
export default gptSLice.reducer;