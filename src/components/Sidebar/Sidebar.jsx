import css from "./Sidebar.module.css";
import { checkStore } from "../../services/localStorage";
import Notiflix from "notiflix";

export const Sidebar = ({ onClick, activeBtn }) => {
  const onMenuClick = (e) => {
    const currentStore = e.target.dataset.store;
    const enabled = checkStore(currentStore);
    if (!enabled) {
      return Notiflix.Notify.warning(
        "Please complete your purchase from current store first"
      );
    }
    onClick(e);
  };
  return (
    <ul className={css.sidebar}>
      <li to="/" className={css.sidebar_item}>
        <button
          className={`${css.sidebar_btn} ${
            activeBtn === "vegan" ? css.active : ""
          }`}
          data-store="vegan"
          onClick={onMenuClick}
        >
          mr.Vegan
        </button>
      </li>
      <li to="/cart" className={css.sidebar_item}>
        <button
          className={`${css.sidebar_btn} ${
            activeBtn === "burrito" ? css.active : ""
          }`}
          data-store="burrito"
          onClick={onMenuClick}
        >
          Burritos
        </button>
      </li>
      <li to="/orders" className={css.sidebar_item}>
        <button
          className={`${css.sidebar_btn} ${
            activeBtn === "sushi" ? css.active : ""
          }`}
          data-store="sushi"
          onClick={onMenuClick}
        >
          Sushi San
        </button>{" "}
      </li>
    </ul>
  );
};
