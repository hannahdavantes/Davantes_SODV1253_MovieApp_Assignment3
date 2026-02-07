import Wrapper from "../assets/wrappers/MovieList";
import MovieCard from "./MovieCard";

const MovieList = ({ movies, onSelectMovie }) => {
  return (
    <Wrapper>
      {movies && movies.length > 0 ? (
        movies.map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
            onClick={() => onSelectMovie(movie)}
          />
        ))
      ) : (
        <p className="empty">No movies found.</p>
      )}
    </Wrapper>
  );
};

export default MovieList;
