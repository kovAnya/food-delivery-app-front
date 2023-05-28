import { useState } from "react";
import { FindOrderForm } from "../../components/FindOrderForm/FindOrderForm";
import { SearchResult } from "../../components/SearchResult/SearchResult";
import css from "./Orders.module.css";

const Orders = () => {
  const [orders, setOrders] = useState([]);

  const onSubmit = (result) => {
    setOrders(result);
  };
  return (
    <div className={css.find_container}>
      <FindOrderForm onSubmit={onSubmit} />
      <SearchResult orders={orders} />
    </div>
  );
};
export default Orders;
