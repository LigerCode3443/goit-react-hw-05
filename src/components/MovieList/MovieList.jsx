import { MoviesItems } from "../MoviesItems/MoviesItems";

export const MovieList = ({ movies }) => {
  return (
    <ul>
      <MoviesItems movies={movies} />
    </ul>
  );
};
