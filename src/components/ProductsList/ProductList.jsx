import { ProductCard } from "../ProductCard/ProductCard";
import css from "./ProductList.module.css";

export const ProductList = ({ products }) => {
  return (
    <ul className={css.product_list}>
      {products.map((product) => {
        return <ProductCard key={product._id} product={product} />;
      })}
    </ul>
  );
};
