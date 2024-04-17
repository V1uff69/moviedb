import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const apiKey = "0cbf3855e7417e29b693c354943fd01c";

const moviesApi = createApi({
  reducerPath: "movies",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://api.themoviedb.org/3/",
  }),
  endpoints(builder) {
    return {
      fetchPopularMovies: builder.query({
        query: () => ({
          url: "discover/movie",
          params: {
            sort_by: "popularity.desc",
            api_key: apiKey,
          },
          method: "GET",
        }),
      }),
      fetchHighestRatedMovies: builder.query({
        query: () => {
          return {
            url: "discover/movie",
            params: {
              sort_by: "vote_average.desc",
              api_key: apiKey,
            },
            method: "GET",
          };
        },
      }),
      fetchSearchMovie: builder.query({
        query: (searchTerm) => {
          return {
            url: "search/movie",
            params: {
              query: searchTerm,
              api_key: apiKey,
            },
            method: "GET",
          };
        },
      }),
      fetchUpcomingMovie: builder.query({
        query: () => {
          return {
            url: "discover/movie",
            params: {
              include_adult: "true",
              include_video: "true",
              language: "en-US",
              page: "1",
              primary_release_year: "2024",
              sort_by: "popularity.desc",
              api_key: apiKey,
            },
            method: "GET",
          };
        },
      }),
      fetchTrailer: builder.query({
        query: (movie_id) => {
          return {
            url: `movie/${movie_id}/videos`,
            params: {
              api_key: apiKey,
            },
            method: "GET",
          };
        },
      }),
    };
  },
});

export const {
  useFetchPopularMoviesQuery,
  useFetchHighestRatedMoviesQuery,
  useFetchSearchMovieQuery,
  useFetchUpcomingMovieQuery,
  useFetchTrailerQuery,
} = moviesApi;
export { moviesApi };
