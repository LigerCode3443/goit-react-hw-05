import { useEffect, useState } from "react";
import { getMovies } from "../../services/moviesApi";
import { MovieList, Container, Loader } from "components";

export const HomePage = () => {
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
    <Container>
      <h1 className="text-center text-3xl py-3 font-bold shadow-lg">
        Trending Day
      </h1>
      {movies.length > 0 && <MovieList movies={movies} />}
      {isLoading && <Loader />}
      {error && (
        <p className="text-center text-3xl py-3 font-bold shadow-lg">
          {error.massage}
        </p>
      )}
    </Container>
  );
};
