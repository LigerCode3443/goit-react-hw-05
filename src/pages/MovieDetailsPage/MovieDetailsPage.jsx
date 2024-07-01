import { Suspense, useEffect, useRef, useState } from "react";
import clsx from "clsx";
import { getMoviesDetails } from "../../services/moviesApi";
import { Oval } from "react-loader-spinner";
import { FaArrowLeft } from "react-icons/fa";
import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useParams,
} from "react-router-dom";
import { Container, Loader } from "../../components";
import s from "./MovieDetailsPage.module.css";

const imgUrl = "https://image.tmdb.org/t/p/w500/";

const buildLinkClass = ({ isActive }) => {
  return clsx(s.link, isActive && s.active);
};

export const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const getDataDetails = async () => {
      setIsLoading(true);
      try {
        const data = await getMoviesDetails(movieId);
        setMovie(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    getDataDetails();
  }, [movieId]);
  const goBack = useRef(location.state || "/");
  return (
    <Container>
      <div className="relative">
        <Link
          to={goBack.current}
          className="absolute top-0 left-0 p-2 border-spacing-2 bg-slate-500 font-bold hover:bg-red-300 flex items-center justify-center gap-2"
        >
          <FaArrowLeft />
          <span> go back</span>
        </Link>

        {movie ? (
          <div className="flex gap-5">
            <img
              src={imgUrl + movie.poster_path}
              alt={movie.original_title}
              className="w-1/3"
            />
            <div className="flex flex-col gap-4 pt-5">
              <h2 className="font-extrabold text-2xl">
                {movie.original_title}({movie.release_date?.slice(0, 4)})
              </h2>
              <h3 className="font-bold">Popularity</h3>
              <p>{movie.popularity}</p>

              <h3 className="font-bold">Overview</h3>
              <p className="italic text-gray-400">{movie.overview}</p>
              <h3 className="font-bold">Genres</h3>
              <ul className="flex gap-3">
                {movie.genres?.map((item) => (
                  <li
                    key={item.id}
                    className="shadow-md p-2 rounded-md hover:bg-slate-300 cursor-pointer"
                  >
                    {item.name}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ) : (
          <p className="text-center text-red-600 font-bold text-lg">
            Has not information
          </p>
        )}
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
        <Suspense
          fallback={
            <Oval
              visible={true}
              height="40"
              width="40"
              color="#4fa94d"
              ariaLabel="oval-loading"
              wrapperStyle={{}}
              wrapperClass=""
            />
          }
        >
          <Outlet />
        </Suspense>
      </div>
      {isLoading && <Loader />}
      {error && (
        <p className="text-center text-red-600 font-bold text-lg">
          {error.message}
        </p>
      )}
    </Container>
  );
};
