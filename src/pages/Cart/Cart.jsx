import { OrderForm } from "../../components/OrderForm/OrderForm";
import { useState, useEffect } from "react";
import css from "./Cart.module.css";
import {
  getCart,
  updateCount,
  deleteFromStorage,
} from "../../services/localStorage";

const Cart = () => {
  const [products, setProducts] = useState([]);
  const [totalCost, setTotalCost] = useState(0);

  useEffect(() => {
    const getProducts = async () => {
      const data = await getCart();
      setProducts(data);
    };
    getProducts();
  }, []);

  useEffect(() => {
    const cost = products.reduce((acc, product) => {
      return acc + product.price * product.count;
    }, 0);
    setTotalCost(cost);
  }, [products]);

  const onCountChange = async (e) => {
    const { value, id } = e.target;
    updateCount(value, id);
    const data = await getCart();
    setProducts(data);
  };

  const onRemoveBtnClick = async (e) => {
    const { id } = e.target;
    deleteFromStorage(id);
    const data = await getCart();
    setProducts(data);
  };

  return (
    <div className={css.cart_container}>
      <OrderForm
        products={products}
        totalCost={totalCost}
        onCountChange={onCountChange}
        onRemoveBtnClick={onRemoveBtnClick}
      />
    </div>
  );
};
export default Cart;
