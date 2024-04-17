import { useFetchUpcomingMovieQuery } from "../store/apis/moviesApi";
import MovieCard from "./movieCard";

export default function UpcomingMoviesList() {
  const { data, error, isFetching } = useFetchUpcomingMovieQuery();

  let content;
  if (isFetching) {
    content = <div>Loading;</div>;
  } else if (error) {
    content = <div>Error loading movies.</div>;
  } else {
    content = data.results.map((movie) => {
      return <MovieCard key={movie.id} movie={movie}></MovieCard>;
    });
  }
  return <div className="row row-cols-3 row-cols-md-2 m-4">{content}</div>;
}
