import { OrderForm } from "../../components/OrderForm/OrderForm";
import css from "./Cart.module.css";

const Cart = () => {
  return (
    <div className={css.cart_container}>
      <OrderForm />
    </div>
  );
};
export default Cart;
