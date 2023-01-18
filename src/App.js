import { useState } from "react";
import "./App.css";
import logo from "./assets/logo.png";
import searchI from "./assets/search.svg";
import Pagination from "./components/Pagination";

function App() {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [numPages, setNumPages] = useState(1);
  const [search, setSearch] = useState("");
  const [totalResults, setTotalResults] = useState(0);

  
  const searchMovie = async (title,page) => {
    const API_URL = "https://www.omdbapi.com/?apikey=d8cb3a1d";
    let response = await fetch(`${API_URL}&s=${title}&page=${page}`);
    let data = await response.json();
    setNumPages(Math.ceil(data.totalResults / 10));
    setTotalResults(data.totalResults || 0);
    setMovies(data.Search);
  };

  const searchStyle = {
    width: "40%",
    height: "50px",
  };

  return (
    <>
      {/* Logo */}
      <nav>
        <div className="d-flex align-items-start justify-content-center sticky-top">
          <img src={logo} alt="" width="369" height="250" />
        </div>
      </nav>
      {/* End Logo */}
      {/* Search Box */}
      <div className="container d-flex align-items-center justify-content-center">
        <div className="input-group m-3" style={searchStyle}>
          <input
            type="text"
            className="form-control"
            placeholder="Search for Movies/Series/Episodes"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            aria-label="Search"
            aria-describedby="button-addon2"
          />
          <button
            className="btn btn-outline-warning"
            type="button"
            onClick={() => {
              setPage(1);
              searchMovie(search,page);
            }}
          >
            <img src={searchI} alt="" />
          </button>
        </div>
      </div>
      <br />
      {/* End Search Box */}
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h3 className="text-center">Movies searched for: {search}</h3>
            <h3 className="text-center">Search results: {totalResults}</h3>
          </div>
        </div>
      </div>
      <br />
      {/* Pagination */}
      <Pagination 
      movies={movies}
      title={search}
      page={page}
      searchMovie={searchMovie}
      numPages={numPages}
      setPage={setPage}
      />
      {/* End Pagination */}
    </>
  );
}

export default App;
