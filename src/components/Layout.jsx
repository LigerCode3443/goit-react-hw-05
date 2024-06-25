import { Outlet } from "react-router-dom";
import { Navigation } from "./Navigation/Navigation";
import { Suspense } from "react";

export const Layout = () => {
  return (
    <div>
      <Navigation />
      <div>
        <Suspense fallback="Loading..">
          <Outlet />
        </Suspense>
      </div>
    </div>
  );
};
