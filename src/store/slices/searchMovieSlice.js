import { createSlice } from "@reduxjs/toolkit";

//Slices is middleware that makes it possible for a page to use the last entity of a node
//searchMovie and searchedMovies both needs to have access to the searchTerm, therefor the searchTerm i sliced
//to be imported.

const searchMovieSlice = createSlice({
  name: "searchMovie",
  initialState: {
    searchTerm: "",
  },
  reducers: {
    changeSearchTerm(state, action) {
      state.searchTerm = action.payload;
    },
  },
});

export const { changeSearchTerm } = searchMovieSlice.actions;
export const searchMovieReducer = searchMovieSlice.reducer; //combined reducers
