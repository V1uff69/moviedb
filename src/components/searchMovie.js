import { useSelector, useDispatch } from "react-redux";
import { changeSearchTerm } from "../store/slices/searchMovieSlice";
import { useNavigate } from "react-router-dom";

export default function SearchMovie() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const searchTerm = useSelector((state) => {
    return state.searchMovie.searchTerm;
  });

  const handleSearchTermChange = (event) => {
    dispatch(changeSearchTerm(event.target.value));
  };

  const handleSubmit = (event) => {
    //dette for at undgå at Browseren automatisk prøver et udføre et submit
    //dispatch(changeSearchTerm(searchTerm));
    event.preventDefault();
    navigate("/searchedMovie");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label></label>
      <input
        className="input ml-2"
        placeholder="Search"
        value={searchTerm}
        onChange={handleSearchTermChange}
        style={{ textAlign: "center" }}
      />
    </form>
  );
}
