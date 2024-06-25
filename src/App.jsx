import { Route, Routes } from "react-router-dom";
import "./App.css";

import { Layout } from "components/Layout";

import { Toaster } from "react-hot-toast";
import { Suspense, lazy } from "react";
import HomePage from "./pages/HomePage/HomePage";
import MovieDetailsPage from "./pages/MovieDetailsPage/MovieDetailsPage";
import MoviesPage from "./pages/MoviesPage/MoviesPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";

// const HomePage = lazy(() => import("./pages/HomePage"));
// const MovieDetailsPage = lazy(() => import("./pages/MovieDetailsPage"));
// const MoviesPage = lazy(() => import("./pages/MoviesPage"));
// const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));
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
