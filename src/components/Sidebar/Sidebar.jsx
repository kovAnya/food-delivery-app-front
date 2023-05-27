import css from "./Sidebar.module.css";

export const Sidebar = ({ onClick }) => {
  return (
    <ul className={css.sidebar}>
      <li to="/" className={css.sidebar_item}>
        <button
          className={css.sidebar_btn}
          data-store="vegan"
          onClick={onClick}
        >
          mr.Vegan
        </button>
      </li>
      <li to="/cart" className={css.sidebar_item}>
        <button
          className={css.sidebar_btn}
          data-store="burrito"
          onClick={onClick}
        >
          Burritos
        </button>
      </li>
      <li to="/orders" className={css.sidebar_item}>
        <button
          className={css.sidebar_btn}
          data-store="sushi"
          onClick={onClick}
        >
          Sushi San
        </button>{" "}
      </li>
    </ul>
  );
};
