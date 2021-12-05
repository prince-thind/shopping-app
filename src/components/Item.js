import "../styles/Item.css";

function Item({ item, cartSub }) {
  return (
    <div className="item">
      <div className="item-img-container">
        <img src={item.image} alt="item" className="item-img" />
      </div>
      <div className="item-description">
        <span className="item-name">{item.name}</span>
        <span className="item-price">
          {" "}
          {item.currency}
          {item.price}
        </span>
      </div>
      <div className="shop-buttons">
        <AddButton count={item.count} />

        <ItemsInCart count={item.count} />

        <RemoveButton count={item.count} />
      </div>
    </div>
  );

  function increaseCount() {
    cartSub("increment", item.key);
  }
  function decreaseCount() {
    cartSub("decrement", item.key);
  }

  function AddButton({ count }) {
    if (count === 0) {
      return (
        <button className="cart-add-button-full button" onClick={increaseCount}>
          Add To Cart
        </button>
      );
    }
    return (
      <button className="cart-button button" onClick={increaseCount}>
        +
      </button>
    );
  }

  function RemoveButton({ count }) {
    if (count === 0) {
      return null;
    }

    return (
      <button className="cart-button button" onClick={decreaseCount}>
        -
      </button>
    );
  }
  function ItemsInCart({ count }) {
    if (count === 0) {
      return null;
    }
    return <span className="items-in-cart"> {count}</span>;
  }
}

export default Item;
