export const addToStorage = (product) => {
  const productsInCart = JSON.parse(localStorage.getItem("cart")) || [];
  productsInCart.push(product);
  localStorage.setItem("cart", JSON.stringify(productsInCart));
};

export const deleteFromStorage = (id) => {
  const productsInCart = JSON.parse(localStorage.getItem("cart"));

  const filteredProducts = productsInCart.filter(
    (product) => product.id !== id
  );
  localStorage.setItem("cart", JSON.stringify(filteredProducts));
};

export const clearStorage = () => {
  localStorage.clear();
};

export const getCart = () => {
  const productsInCart = JSON.parse(localStorage.getItem("cart")) || [];
  return productsInCart;
};
