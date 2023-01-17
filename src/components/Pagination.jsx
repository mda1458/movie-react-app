import React, { useState } from 'react'
import { MovieCard } from './MovieCard';

function RenderCards({movies}) {
    return(
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
    )
}

const Pagination = (props) => {
    const API_URL = "https://www.omdbapi.com/?apikey=d8cb3a1d"

    const [movies, setMovies] = useState([]);
    const searchMovie = async (title, page) => {
        let response = await fetch(`${API_URL}&s=${title}&page=${page}`);
        let data = await response.json();
        setMovies(data.Search);
      };
    
    const { numPages , page, setPage } = props;
    let sPage,ePage;
    if (page < numPages - 5) {
        ePage = page + 5;
    } else {
        ePage = numPages;
    }
    if (page > 5) {
        sPage = page - 5;
    } else {
        sPage = 1;
        ePage = 10;
    }
    if (numPages < 10) {
        sPage = 1;
        ePage = numPages;
    }
    const pages = [];
    for (let i = sPage; i <= ePage; i++) {
        pages.push(i);
    }
    return (
        <>
        <nav>
            <ul className="pagination justify-content-center">
                {pages.map(page => (
                    <li key={page} className={page === props.page ? "page-item active" : "page-item"}>
                        <a className="page-link btn" onClick={() => {
                            setPage(page);
                            searchMovie(props.title,page);
                        }}>{page}</a>
                    </li>
                ))}
            </ul>
        </nav>
        <RenderCards movies={movies} />
        </>
    );
}

export default Pagination;
