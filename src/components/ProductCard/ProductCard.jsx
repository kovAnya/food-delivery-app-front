import css from "./ProductCard.module.css";

export const ProductCard = ({ product, onClick }) => {
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
      <button className={css.product_btn} type="button" onClick={onClick}>
        add to Cart
      </button>
    </li>
  );
};
