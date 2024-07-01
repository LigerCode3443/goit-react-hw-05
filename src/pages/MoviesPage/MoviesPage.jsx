import { MoviesSearch } from "components";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getSearchMovies } from "../../services/moviesApi";
import { Loader, MovieList } from "../../components";
import toast from "react-hot-toast";

export const MoviesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const query = searchParams.get("query");

    const getSearch = async () => {
      if (query === null) return;
      setIsLoading(true);
      try {
        const data = await getSearchMovies(query);
        if (data.length === 0) {
          toast.error("Nothing found");
          return;
        }
        setMovies(data);
      } catch (error) {
        setError(error.massage);
      } finally {
        setIsLoading(false);
      }
    };
    getSearch();
  }, [searchParams]);

  const onSearchMovie = (movie) => {
    setSearchParams(movie);
  };

  return (
    <>
      <MoviesSearch onSearchMovie={onSearchMovie} />
      {isLoading && <Loader />}
      {movies.length > 0 && <MovieList movies={movies} />}
      {error && (
        <p className="text-center text-3xl py-3 font-bold shadow-lg">
          {error.massage}
        </p>
      )}
    </>
  );
};
