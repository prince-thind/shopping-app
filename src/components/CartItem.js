import '../styles/CartItem.css';

function CartItem({ item, cartSub }) {
  return (
    <div className="cart-item">
      <div className="cart-item-name">Name: {item.name}</div>
      <div className="cart-item-count">
        Count: {item.count} ({item.currency}
        {+item.price * +item.count})
      </div>
      <div className="cart-item-buttons">
        <button className="cart-add-button button" onClick={increaseCount}>
          Add More
        </button>
        <RemoveButton />
      </div>
    </div>
  );

  function increaseCount() {
    cartSub('increment', item.key);
  }
  function decreaseCount() {
    cartSub('decrement', item.key);
  }

  function RemoveButton({ count }) {
    if (count === 0) {
      return null;
    }

    return (
      <button className="cart-remove-button button" onClick={decreaseCount}>
        remove
      </button>
    );
  }
}

export default CartItem;
