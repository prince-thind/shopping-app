import '../styles/Item.css';

function Item({ item, images, cartSub }) {
  return (
    <div className="item">
      <img src={images[item.name]} alt="item" className="item-img" />
      <div className="item-description">
        <span className="item-name">{item.name}</span>
        <span className="item-price">
          {' '}
          {item.currency}
          {item.price}
        </span>
        <ItemsInCart count={item.count} />
      </div>
      <div className="shop-buttons">
        <button className="cart-add-button button" onClick={increaseCount}>
          Add to Cart
        </button>
        <RemoveButton count={item.count} />
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
  function ItemsInCart({ count }) {
    if (count === 0) {
      return null;
    }
    return <span className="items-in-cart"> ({count} in cart)</span>;
  }
}

export default Item;
