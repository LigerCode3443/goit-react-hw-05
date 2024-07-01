import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMoviesReviews } from "../../services/moviesApi";
import { cutText } from "../../helpers/cudText";

const Reviews = () => {
  const { movieId } = useParams();
  const [movieReviews, setMovieReviews] = useState([]);
  const [error, setError] = useState(false);
  useEffect(() => {
    const getReviews = async () => {
      try {
        const data = await getMoviesReviews(movieId);
        setMovieReviews(data);
      } catch (error) {
        setError(error.message);
      }
    };
    getReviews();
  }, [movieId]);

  return (
    <ul className="flex justify-center flex-wrap gap-7">
      {movieReviews.length ? (
        movieReviews.map((item) => (
          <li
            key={item.id}
            className="shadow-[0px_0px_5px_1px] w-3/4 p-5 flex flex-col gap-5 rounded-2xl"
          >
            <h3 className="font-medium text-2xl">Author: {item.author}</h3>
            <p className="italic text-gray-500">{cutText(item.content)}</p>
          </li>
        ))
      ) : (
        <li className="text-center text-red-600 font-bold text-lg">
          <p>{`<<Has not reviews>>`}</p>
        </li>
      )}
    </ul>
  );
};
export default Reviews;
