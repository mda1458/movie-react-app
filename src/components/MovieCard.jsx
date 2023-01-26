import React from 'react'

export const MovieCard = ({movie}) => {
  const moviecardstyle={
    height: "500px"
  };
  return (
    <div className="container my-3" style={moviecardstyle}>
      <div className="card">
        <img src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/400"} className="card-img-top" alt="" width="33%" height="250px" />
        <div className="card-body">
          <h6 className='card-subtitle mb-2 text-muted'>{movie.Type}</h6>
          <h5 className="card-title">{movie.Title}</h5>
          <p className="card-text">Released: {movie.Year}</p>
          <a href={"https://www.imdb.com/title/"+movie.imdbID} target="_blank" rel='noreferrer' className="btn btn-warning">Go to IMDB</a>
        </div>
      </div>
    </div>
  )
}

