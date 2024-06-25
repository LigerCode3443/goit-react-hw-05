import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMoviesCredits } from "../../services/moviesApi";
const imgUrl = "https://image.tmdb.org/t/p/w500/";
const Cast = () => {
  const { movieId } = useParams();
  const [movieCast, setMovieCast] = useState([]);
  useEffect(() => {
    const getReviews = async () => {
      const data = await getMoviesCredits(movieId);

      setMovieCast(data);
    };
    getReviews();
  }, [movieId]);
  console.log(movieCast);
  return (
    <ul>
      {movieCast.map((item) => (
        <li key={item.id}>
          <img src={imgUrl + item.profile_path} alt={item.original_name} />
          <h2>{item.original_name}</h2>
          <p>Character: {item.character}</p>
        </li>
      ))}
    </ul>
  );
};
export default Cast;
