import css from "./SearchResult.module.css";

export const SearchResult = ({ orders }) => {
  const formattedDate = (createdDate) => {
    const shortDate = new Date(createdDate);

    const month = shortDate.toLocaleString("en-US", { month: "short" });
    const day = shortDate.getDate();
    const year = shortDate.getFullYear();

    return `${month} ${day} ${year}`;
  };

  return (
    <ul className={css.order_list}>
      {orders.map((order) => {
        return (
          <li key={order._id} className={css.order}>
            <div>
              <p>
                Name: <span className={css.order_data}>{order.name}</span>
              </p>
              <p>
                Address: <span className={css.order_data}>{order.address}</span>
              </p>
              <p>
                TotalCost:{" "}
                <span className={css.order_data}>{order.totalCost}$</span>
              </p>
              <p>
                Date:{" "}
                <span className={css.order_data}>
                  {formattedDate(order.createdAt)}
                </span>
              </p>

              <ul className={css.order_products}>
                <span className={css.title}>Ordered products:</span>
                {order.items.map((item) => {
                  return (
                    <li className={css.order_item} key={item._id}>
                      <img src={item.imgUrl} alt={item.title} width={80}></img>
                      <div>
                        <p className={css.item_title}> {item.title}</p>
                        <p>quantity: {item.quantity}</p>
                        <p>price: {item.price}$</p>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </li>
        );
      })}
    </ul>
  );
};
