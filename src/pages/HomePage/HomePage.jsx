import { useEffect, useState } from "react";
import { getMovies } from "../../services/moviesApi";
import { MovieList } from "components";

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      try {
        const data = await getMovies();
        setMovies(data);
      } catch (error) {
        setError(error.massage);
      } finally {
        setIsLoading(false);
      }
    };
    getData();
  }, []);
  return (
    <div>
      <h1>Trending Day</h1>
      <MovieList movies={movies} />
    </div>
  );
};

export default HomePage;
