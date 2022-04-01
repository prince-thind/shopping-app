import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import React from "react";

import "../styles/Cart.css";
import { itemsSelector } from "../features/items/itemsSlice";
import CartItem from "../features/items/CartItem.js";
import Payment from "../components/Payment.js";
import Attribution from "../components/Attribution";

function Cart() {
  const items = useSelector(itemsSelector);
  const totalValue = findTotal(items);

  return (
    <div className="cart-content">
      <CartCapacityLogic totalValue={totalValue} />
    </div>
  );

  function CartCapacityLogic({ totalValue }) {
    if (totalValue === 0) {
      return (
        <div className="empty-cart">
          Cart is empty, Consider adding items from <Link to="/shop">shop</Link>
          .
        </div>
      );
    }
    return (
      <React.Fragment>
        <h2 className="material-box">Cart Items </h2>
        <Items />
        <div className="cart-total material-box">
          {" "}
          Cart Total: {items[1].currency}
          {totalValue}
        </div>
        <Payment />
      </React.Fragment>
    );
  }
  function Items() {
    return (
      <div className="cart-items">
        {items
          .filter((item) => item.count > 0)
          .map((item) => {
            return <CartItem key={item.key} item={item} />;
          })}
        <Attribution />
      </div>
    );
  }
}

export default Cart;

//helper functions
function findTotal(items) {
  return items.reduce((acc, item) => {
    return acc + item.price * item.count;
  }, 0);
}
