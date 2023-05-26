import { NavLink } from "react-router-dom";
import css from "./Header.module.css";

export const Header = () => {
  return (
    <header className={css.header}>
      <nav className={css.navigation}>
        <NavLink to="/" className={css.link}>
          Home
        </NavLink>
        <NavLink to="/cart" className={css.link}>
          Cart
        </NavLink>
        <NavLink to="/orders" className={css.link}>
          Orders
        </NavLink>
      </nav>
    </header>
  );
};
