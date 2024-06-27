import { Container } from "../Container/Container";
import { MoviesItems } from "../MoviesItems/MoviesItems";

export const MovieList = ({ movies }) => {
  return (
    <Container>
      <ul className="grid grid-cols-3 gap-4 mt-6">
        <MoviesItems movies={movies} />
      </ul>
    </Container>
  );
};
