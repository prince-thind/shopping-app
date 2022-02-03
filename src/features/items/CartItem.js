import "../../styles/CartItem.css";
import { itemAdded, itemRemoved } from "./itemsSlice";
import { useDispatch } from "react-redux";

function CartItem({ item }) {
  const dispatch = useDispatch();
  return (
    <div className="cart-item">
      <div className="cart-item-image-container flex-center">
        <img
          src={item.image}
          alt="cart item"
          className="cart-item-image photo-shadow"
        />
      </div>
      <div className="cart-item-content">
        <div>{getNormalName(item.name)}</div>
        <div>
          {item.price}
          {item.currency}
        </div>
      </div>

      <div className="cart-capacity">
        <div className="cart-item-buttons flex-center">
          <button className="flex-center button" onClick={decreaseCount}>
            -
          </button>
          <div className="cart-item-count">{item.count}</div>
          <button className="flex-center button" onClick={increaseCount}>
            +
          </button>
        </div>
        <div className="cart-price">
          ({item.currency}
          {+item.price * +item.count})
        </div>
      </div>
    </div>
  );
  function increaseCount() {
    dispatch(itemAdded(item.key));
  }
  function decreaseCount() {
    dispatch(itemRemoved(item.key));
  }
  function getNormalName(str) {
    return str[0].toUpperCase() + str.slice(1);
  }
}

export default CartItem;