import { useEffect, useState } from "react";
import Wrapper from "../assets/TopRatedMovies";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

function App() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch");
        }
        return res.json();
      })
      .then((json) => {
        setData(json);
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  const { results } = data;

  return (
    <Wrapper>
      <h1 className="title">Top Rated Movies</h1>
      {results.map((movie) => (
        <span>{movie.title}</span>
      ))}
    </Wrapper>
  );
}

export default App;
