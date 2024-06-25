import { Link, useLocation } from "react-router-dom";
export const MoviesItems = ({ movies }) => {
  const location = useLocation();
  return (
    <>
      {movies.map((mov) => (
        <li key={mov.id}>
          <Link to={`/movies/${mov.id}`} state={location}>
            {mov.title}
          </Link>
        </li>
      ))}
    </>
  );
};
