import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import { Header } from "../Header/Header";

export const SharedLayout = () => {
  return (
    <div>
      <Header />
      <Suspense fallback={<div>Loading in progress...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};
