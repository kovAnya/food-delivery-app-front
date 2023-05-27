import { useState, useEffect } from "react";
import { ProductList } from "../../components/ProductsList/ProductList";
import { Sidebar } from "../../components/Sidebar/Sidebar";
import { getProductsByStore } from "../../services/fetchApi";
import css from "./Home.module.css";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [store, setStore] = useState("sushi");

  useEffect(() => {
    const getProducts = async () => {
      const { data } = await getProductsByStore(store);
      setProducts(data);
    };
    getProducts();
  }, [store]);

  const onSidebarClick = (e) => {
    const currentStore = e.target.dataset.store;
    setStore(currentStore);
  };

  return (
    <div className={css.container}>
      <Sidebar onClick={onSidebarClick} activeBtn={store} />
      <ProductList products={products} />
    </div>
  );
};
export default Home;
