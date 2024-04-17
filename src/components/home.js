import React from "react";
import movieImage from "../assets/Image/movie_black2.jpg"; // Import the image

const Home = () => {
  return (
    <div className="d-flex justify-content-center align-items-center flex-column">
      <h1 className="text-center">Home</h1>
      <img src={movieImage} alt="Movie" />
    </div>
  );
};

export default Home;
