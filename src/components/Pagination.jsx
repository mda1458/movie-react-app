import React from 'react'
import { MovieCard } from './MovieCard';
import Spinner from "./Spinner";

function RenderCards({movies}) {
    return(
        <div className="container">
            <div className="row">
            {movies === undefined ? (
                <h3 className="text-center">No movies found</h3>
            ) : (
                movies.map((movie) => {
                return (
                    <div className="col-md-3">
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
        {props.isLoading ? <Spinner /> : 
        <RenderCards movies={props.movies} />}
        <nav>
            <ul className="pagination justify-content-center">
                {pages.map(page => (
                    <li key={page} className={page === props.page ? "page-item active" : "page-item"}>
                        <a className="page-link btn" onClick={() => {
                            setPage(page);
                            props.searchMovie(props.title,page);
                            window.scrollTo(0,0);
                        }}>{page}</a>
                    </li>
                ))}
            </ul>
        </nav>
        
        </>
    );
}

export default Pagination;
