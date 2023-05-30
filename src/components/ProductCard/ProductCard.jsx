import css from "./ProductCard.module.css";
import {
  addToStorage,
  getCart,
  deleteFromStorage,
} from "../../services/localStorage";
import { useState, useEffect } from "react";
import Notiflix from "notiflix";

export const ProductCard = ({ product }) => {
  const [inCart, setInCart] = useState(false);

  useEffect(() => {
    const getProducts = async () => {
      const data = await getCart();
      const found = await data.find((item) => item._id === product._id);
      if (found && found.length > 0) {
        setInCart(true);
      } else setInCart(false);
    };
    getProducts();
  }, []);

  const onClick = () => {
    addToStorage(product);
    setInCart(!inCart);
    Notiflix.Notify.success("Products was added to your shopping cart");
  };

  const onRemoveClick = () => {
    deleteFromStorage(product._id);
    setInCart(!inCart);
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
      {!inCart && (
        <button className={css.product_btn} type="button" onClick={onClick}>
          add to Cart
        </button>
      )}
      {inCart && (
        <button
          className={`${css.product_btn} ${css.product_btn_rmv}`}
          type="button"
          onClick={onRemoveClick}
        >
          remove from Cart
        </button>
      )}
    </li>
  );
};
