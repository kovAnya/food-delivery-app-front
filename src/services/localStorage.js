export const addToStorage = (product) => {
  product.quantity = 1;
  const productsInCart = JSON.parse(localStorage.getItem("cart")) || [];
  productsInCart.push(product);
  localStorage.setItem("cart", JSON.stringify(productsInCart));
};

export const updateCount = (count, id) => {
  const productsInCart = JSON.parse(localStorage.getItem("cart"));
  const updatedProducts = productsInCart.map((product) => {
    if (product._id === id) {
      product.quantity = count;
    }
    return product;
  });
  localStorage.setItem("cart", JSON.stringify(updatedProducts));
};

export const deleteFromStorage = (id) => {
  const productsInCart = JSON.parse(localStorage.getItem("cart"));

  const filteredProducts = productsInCart.filter(
    (product) => product._id !== id
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
