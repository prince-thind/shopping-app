import "../styles/Item.css";
import getNormalName from "../lib/getNormaName";

function Item({ item, cartSub }) {
  return (
    <div className="item photo-shadow">
      <div className="item-img-container flex-center">
        <img src={item.image} alt="item" className="item-img" />
      </div>
      <div className="item-description">
        <span className="item-name">{getNormalName(item.name)}</span>
        <span className="item-price">
          {" "}
          {item.currency}
          {item.price}
        </span>
      </div>
      <div className="flex-center item-buttons">
        <RemoveButton count={item.count} />
        <ItemsInCart count={item.count} />
        <AddButton count={item.count} />
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
        <button className="item-button-full button" onClick={increaseCount}>
          Add To Cart
        </button>
      );
    }
    return (
      <button
        className="item-button flex-center button"
        onClick={increaseCount}
      >
        +
      </button>
    );
  }

  function RemoveButton({ count }) {
    if (count === 0) {
      return null;
    }

    return (
      <button
        className="item-button flex-center button"
        onClick={decreaseCount}
      >
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
