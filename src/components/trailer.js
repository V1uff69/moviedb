import React from "react";
import { useParams } from "react-router-dom";
import { useFetchTrailerQuery } from "../store/apis/moviesApi"; // Update the path
import { useState, useEffect } from "react";

// Define the Trailer component
export default function Trailer() {
  // Get the movie ID from the URL using useParams
  const { id } = useParams();
  const [trailerUrl, setTrailerUrl] = useState("");

  // Fetch the trailer data using useFetchTrailerQuery
  const { data, error, isLoading } = useFetchTrailerQuery(id);

  //hook making promise(javascript "threading") based fetch on initial load, [data] specifies to make it reload whenever a datachange have happened.
  useEffect(() => {
    if (data && data.results.length > 0) {
      const firstVideo = data.results[0];
      const url = `https://www.youtube.com/embed/${firstVideo.key}`;
      setTrailerUrl(url);
    }
  }, [data]);

  // Handle loading and error states
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  // Render the trailer information if available
  return (
    <div>
      <div>
        <h2>{"Trailer"}</h2>
        <iframe
          title="Trailer"
          width="620"
          height="315"
          src={trailerUrl}
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}
