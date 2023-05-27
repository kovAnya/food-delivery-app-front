import axios from "axios";

axios.defaults.baseURL = "https://my-food-delivery.onrender.com";

export const getProductsByStore = async (store) => {
  try {
    const data = await axios.get(`/store?store=${store}`);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const addNewOrder = async () => {};

export const findOrder = async () => {};
