import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMoviesReviews } from "../../services/moviesApi";
import { cutText } from "../../helpers/cudText";

const Reviews = () => {
  const { movieId } = useParams();
  const [movieReviews, setMovieReviews] = useState([]);
  useEffect(() => {
    const getReviews = async () => {
      const data = await getMoviesReviews(movieId);

      setMovieReviews(data);
    };
    getReviews();
  }, [movieId]);

  return (
    <ul>
      {movieReviews.map((item) => (
        <li key={item.id}>
          <h3>{item.author}</h3>
          <p>{cutText(item.content)}</p>
        </li>
      ))}
    </ul>
  );
};
export default Reviews;
