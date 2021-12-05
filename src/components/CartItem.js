import "../styles/CartItem.css";
import getNormalName from "../lib/getNormaName";

function CartItem({ item, cartSub }) {
  return (
    <div className="cart-item">
      <div className="cart-item-image-container">
        <img src={item.image} alt="cart item" className="cart-item-image" />
      </div>
      <div className="cart-item-content">
        <div className="cart-item-name">{getNormalName(item.name)}</div>
        <div className="cart-item-price">
          {item.price}
          {item.currency}
        </div>
      </div>

      <div className="cart-capacity">
        <div className="cart-item-buttons">
          <button className="cart-remove-button button" onClick={decreaseCount}>
            -
          </button>
          <div className="cart-item-count">{item.count}</div>
          <button className="cart-add-button button" onClick={increaseCount}>
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
    cartSub("increment", item.key);
  }
  function decreaseCount() {
    cartSub("decrement", item.key);
  }
}

export default CartItem;
