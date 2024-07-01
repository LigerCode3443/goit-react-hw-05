import { Link } from "react-router-dom";
import { Container } from "../../components";

export const NotFoundPage = () => {
  return (
    <Container className="flex justify-center items-center">
      <img
        src="https://www.artzstudio.com/content/images/wordpress/2020/05/404-error-not-found-page-lost.png"
        alt="not found"
      />
      <Link to="/" className="text-2xl  ">
        Home
      </Link>
    </Container>
  );
};
