import css from "./ProductCard.module.css";
import { addToStorage } from "../../services/localStorage";

export const ProductCard = ({ product }) => {
  const onClick = () => {
    addToStorage(product);
  };
  return (
    <li className={css.product_card}>
      <img
        className={css.product_img}
        src={product.imgUrl}
        alt={product.title}
        width="120"
      />
      <h2 className={css.product_name}>{product.title}</h2>
      <p className={css.product_descr}>{product.description}</p>
      <p>
        Price: <span>{product.price}$</span>
      </p>
      <button className={css.product_btn} type="button" onClick={onClick}>
        add to Cart
      </button>
    </li>
  );
};
