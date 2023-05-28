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

export const addNewOrder = async (order) => {
  try {
    const data = await axios.post(`/orders`, order);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const findOrder = async ({ email, phone }) => {
  try {
    const data = await axios.get(
      `/orders/user?email=${email}&phone=${phone.replace("+", "")}`
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};
