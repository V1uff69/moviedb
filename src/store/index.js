import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { searchMovieReducer } from "./slices/searchMovieSlice";
import { moviesApi } from "./apis/moviesApi";

export const store = configureStore({
  reducer: {
    [moviesApi.reducerPath]: moviesApi.reducer,
    searchMovie: searchMovieReducer,
  },
  middleware: (getDefaultMiddleware) => {
    //Thunk middelware er default når der benyttes Redux Toolkit configureStore.
    return getDefaultMiddleware().concat(moviesApi.middleware);
  },
});

setupListeners(store.dispatch);

export {
  useFetchPopularMoviesQuery,
  useFetchHighestRatedMoviesQuery,
  useFetchSearchMovieQuery,
  useFetchUpcomingMovieQuery,
  useFetchTrailerQuery,
} from "./apis/moviesApi";
