import { useState } from "react";
import { MovieCard } from "./components/MovieCard";
import "./App.css";
import logo from "./assets/logo.png";
import searchI from "./assets/search.svg";

function App() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");

  const API_URL = "https://www.omdbapi.com/?apikey=d8cb3a1d";

  const searchMovie = async (title) => {
    let response = await fetch(`${API_URL}&s=${title}`);
    let data = await response.json();
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
            placeholder="Search for Movies"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            aria-label="Search"
            aria-describedby="button-addon2"
          />
          <button
            className="btn btn-outline-warning"
            type="button"
            onClick={() => searchMovie(search)}
          >
            <img src={searchI} alt="" />
          </button>
        </div>
      </div>
      <br />
      {/* End Search Box */}
      {/* Movies Cards */}
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h3 className="text-center">Movies searched for: {search}</h3>
          </div>
        </div>
      </div>
      <br />
      <div className="container">
        <div className="row">
          {movies === undefined ? (
            <h3 className="text-center">No movies found</h3>
          ) : (
            movies.map((movie) => {
              return (
                <div className="col-3">
                  <MovieCard movie={movie} />
                </div>
              );
            })
          )}
        </div>
      </div>

      {/* End Movies Cards */}
    </>
  );
}

export default App;
