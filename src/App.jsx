import { Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { lazy } from "react";
import "./App.css";
import { Layout } from "components/Layout";
import { HomePage, MovieDetailsPage, MoviesPage, NotFoundPage } from "./pages";

const Cast = lazy(() => import("./components/Cast/Cast"));
const Reviews = lazy(() => import("./components/Reviews/Reviews"));

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="movies" element={<MoviesPage />} />

          <Route path="movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Toaster position="top-center" />
    </>
  );
}

export default App;
