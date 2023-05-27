import css from "./Sidebar.module.css";

export const Sidebar = ({ onClick, activeBtn }) => {
  return (
    <ul className={css.sidebar}>
      <li to="/" className={css.sidebar_item}>
        <button
          className={`${css.sidebar_btn} ${
            activeBtn === "vegan" ? css.active : ""
          }`}
          data-store="vegan"
          onClick={onClick}
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
          onClick={onClick}
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
          onClick={onClick}
        >
          Sushi San
        </button>{" "}
      </li>
    </ul>
  );
};
