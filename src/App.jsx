import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Navigation } from "components";
import { HomePage, MoviesPage } from "./pages";

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />}>
          <Route></Route>
          <Route />
        </Route>
      </Routes>
    </>
  );
}

export default App;
