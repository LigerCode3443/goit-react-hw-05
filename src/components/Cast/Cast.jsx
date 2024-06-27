import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMoviesCredits } from "../../services/moviesApi";
const imgUrl = "https://image.tmdb.org/t/p/w500/";
const profile =
  "https://static-00.iconduck.com/assets.00/profile-icon-2048x2048-yj5zf8da.png";
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
    <ul className="flex gap-3 flex-wrap justify-center items-center">
      {movieCast.map((item) => (
        <li
          key={item.id}
          className="w-40 h-60 shadow-md p-3 flex items-center flex-col rounded-lg"
        >
          <img
            src={item.profile_path ? imgUrl + item.profile_path : profile}
            alt={item.original_name}
            className="w-20 h-30 rounded-xl"
          />
          <h2>{item.original_name}</h2>
          <p>Character: {item.character}</p>
        </li>
      ))}
    </ul>
  );
};
export default Cast;
