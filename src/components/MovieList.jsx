import Wrapper from "../assets/wrappers/MovieList";
import MovieCard from "./MovieCard";

const MovieList = ({ movies, onSelectMovie }) => {
  return (
    <Wrapper>
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          movie={movie}
          onClick={() => onSelectMovie(movie)}
        />
      ))}
    </Wrapper>
  );
};

export default MovieList;
