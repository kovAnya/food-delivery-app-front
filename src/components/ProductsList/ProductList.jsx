import { ProductCard } from "../ProductCard/ProductCard";
import css from "./ProductList.module.css";

export const ProductList = ({ products }) => {
  console.log(products);
  return (
    <ul className={css.product_list}>
      {products.map((product) => {
        return <ProductCard key={product.id} product={product} />;
      })}
    </ul>
  );
};
