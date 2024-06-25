import { Suspense, useEffect, useRef, useState } from "react";
import { getMoviesDetails } from "../../services/moviesApi";
import { Link, Outlet, useLocation, useParams } from "react-router-dom";

const imgUrl = "https://image.tmdb.org/t/p/w500/";

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
    <>
      <Link to={goBack.current}>go back</Link>
      <div>
        <img src={imgUrl + movie.poster_path} alt={movie.original_title} />
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
        <ul>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
      </nav>
      <Suspense fallback="Loading...">
        <Outlet />
      </Suspense>
    </>
  );
};
export default MovieDetailsPage;
