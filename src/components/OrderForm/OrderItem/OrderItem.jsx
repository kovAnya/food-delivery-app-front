import { useState, useEffect } from "react";
import css from "./OrderItem.module.css";

export const OrderItem = ({ product, onCountChange, onRemoveBtnClick }) => {
  const [itemCount, setItemCount] = useState(product.quantity);
  const onChange = (e) => {
    setItemCount(e.target.value);
    onCountChange(e);
  };
  return (
    <li className={css.product_item}>
      <img
        className={css.product_img}
        src={product.imgUrl}
        alt={product.title}
        width="120"
      />
      <div>
        <h2 className={css.product_name}>{product.title}</h2>
        <p>
          Price: <span>{product.price}$</span>
        </p>
        <input
          id={product._id}
          type="number"
          name="count"
          value={itemCount}
          min="1"
          onChange={onChange}
        />
      </div>
      <button
        id={product._id}
        className={css.remove_btn}
        onClick={onRemoveBtnClick}
      >
        X
      </button>
    </li>
  );
};
