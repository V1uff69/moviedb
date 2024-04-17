import { Routes, Route, Link } from "react-router-dom";
import HighestRatedMovieList from "./components/highestRatedMoviesList";
import PopularMoviesList from "./components/popularMoviesList";
import Home from "./components/home";
import SearchMovie from "./components/searchMovie";
import SearchedMoviesList from "./components/searchedMoviesList";
import UpcommingMoviesList from "./components/upcommingMoviesList";
import Trailer from "./components/trailer";

export default function App() {
  return (
    <div>
      <div className="jumbotron pb-3 pt-3">
        <span className="d-flex justify-content-center p-0">
          This small App demonstrates React, Redux-Toolkit, RTK Query and
          React-Router
        </span>
        <div className="navbar navbar-expand-lg justify-content-center">
          <span className="h1">React Moviefinder</span>
          <nav className="nav navbar-nav">
            <Link to="/" className="nav-item nav-link">
              Home
            </Link>
            <Link to="/popular" className="nav-item nav-link">
              Popular
            </Link>
            <Link to="/highest-rated" className="nav-item nav-link">
              Highest Rated
            </Link>
            <Link to="/upcomming" className="nav-item nav-link">
              Upcoming
            </Link>
          </nav>
        </div>
        <br />
        <div className="d-flex justify-content-center">
          <SearchMovie />
        </div>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/popular" element={<PopularMoviesList />} />
        <Route path="/highest-rated" element={<HighestRatedMovieList />} />
        <Route path="/trailer/:id" element={<Trailer />} />
        <Route path="/searchedMovie" element={<SearchedMoviesList />} />
        <Route path="/upcomming" element={<UpcommingMoviesList />} />
      </Routes>
    </div>
  );
}
