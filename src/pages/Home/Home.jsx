import { useState, useEffect } from "react";
import { ProductList } from "../../components/ProductsList/ProductList";
import { getProductsByStore } from "../../services/fetchApi";

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

  return (
    <>
      <ProductList products={products} />
    </>
  );
};
export default Home;
