import { ProductCard } from "../ProductCard/ProductCard";
import css from "./ProductList.module.css";

export const ProductList = ({ products, onClick }) => {
  return (
    <ul className={css.product_list}>
      {products.map((product) => {
        return (
          <ProductCard key={product.id} product={product} onClick={onClick} />
        );
      })}
    </ul>
  );
};
