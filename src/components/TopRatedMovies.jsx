import { useEffect, useState } from "react";
import Wrapper from "../assets/wrappers/TopRatedMovies";
import MovieList from "../components/MovieList";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

const TopRatedMovies = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch");
        return res.json();
      })
      .then((json) => {
        setMovies(json.results ?? []);
      })
      .catch((err) => setError(err.message))
      .finally(() => setIsLoading(false));
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <Wrapper>
      <h1 className="title">Top Rated Movies</h1>
      <MovieList
        movies={movies}
        onSelectMovie={(movie) => console.log("selected movie:", movie)}
      />
    </Wrapper>
  );
};

export default TopRatedMovies;
