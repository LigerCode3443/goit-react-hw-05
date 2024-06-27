import { Suspense, useEffect, useRef, useState } from "react";
import clsx from "clsx";
import { getMoviesDetails } from "../../services/moviesApi";
import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useParams,
} from "react-router-dom";
import { Container } from "../../components";
import s from "./MovieDetailsPage.module.css";

const imgUrl = "https://image.tmdb.org/t/p/w500/";

const buildLinkClass = ({ isActive }) => {
  return clsx(s.link, isActive && s.active);
};

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});
  const location = useLocation();

  useEffect(() => {
    const getDataDetails = async () => {
      try {
        const data = await getMoviesDetails(movieId);
        setMovie(data);
      } catch (error) {
        console.log(error);
      }
    };
    getDataDetails();
  }, [movieId]);
  const goBack = useRef(location.state || "/");
  return (
    <Container>
      <Link to={goBack.current}>go back</Link>
      <div className="flex gap-5">
        <img
          src={imgUrl + movie.poster_path}
          alt={movie.original_title}
          className="w-1/3"
        />
        <div>
          <h2>
            {movie.original_title}({movie.release_date?.slice(0, 4)})
          </h2>
          <h3>Popularity</h3>
          <p>{movie.popularity}</p>

          <h3>Overview</h3>
          <p>{movie.overview}</p>
          <h3>Genres</h3>
          <ul>
            {movie.genres?.map((item) => (
              <li key={item.id}>{item.name}</li>
            ))}
          </ul>
        </div>
      </div>
      <nav>
        <ul className="flex gap-5 justify-center p-8">
          <li>
            <NavLink to="cast" className={buildLinkClass}>
              Cast
            </NavLink>
          </li>
          <li>
            <NavLink to="reviews" className={buildLinkClass}>
              Reviews
            </NavLink>
          </li>
        </ul>
      </nav>
      <Suspense fallback="Loading...">
        <Outlet />
      </Suspense>
    </Container>
  );
};
export default MovieDetailsPage;
