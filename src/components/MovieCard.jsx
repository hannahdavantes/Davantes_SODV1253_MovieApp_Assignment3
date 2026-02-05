import { FaStar } from "react-icons/fa";

import Wrapper from "../assets/wrappers/MovieCard";

const MovieCard = ({ movie, onClick }) => {
  const year = movie.release_date ? movie.release_date.slice(0, 4) : "—";

  return (
    <Wrapper onClick={onClick} role="button" tabIndex={0}>
      <div className="poster">
        {movie.poster_path ? (
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={`${movie.title} poster`}
            loading="lazy"
          />
        ) : (
          <div className="no-poster">No Poster</div>
        )}
      </div>

      <div className="content">
        <h3 className="title" title={movie.title}>
          {movie.title}
        </h3>
        <p className="info">
          <span className="year">{year}</span>
          <span className="rating">
            <FaStar className="star" />
            <span className="score">
              {movie.vote_average?.toFixed(1) ?? "—"}
            </span>
          </span>
        </p>
      </div>
    </Wrapper>
  );
};

export default MovieCard;
