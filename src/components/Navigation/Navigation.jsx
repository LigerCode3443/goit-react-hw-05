import clsx from "clsx";
import { NavLink } from "react-router-dom";
import { Container } from "../Container/Container";
import s from "./Navigation.module.css";

const buildLinkClass = ({ isActive }) => {
  return clsx(isActive && s.active);
};

export const Navigation = () => {
  return (
    <Container>
      <header className="flex justify-between p-5 bg-red-400">
        <p className="text-xl font-bold">MOVIES</p>
        <nav className="flex gap-4 text-xl font-bold">
          <NavLink to="/" className={buildLinkClass}>
            Home
          </NavLink>
          <NavLink to="/movies" className={buildLinkClass}>
            Movies
          </NavLink>
        </nav>
      </header>
    </Container>
  );
};
