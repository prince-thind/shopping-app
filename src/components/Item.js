function Item({item,images,cartSub}) {

  return (
    <div>
      <img src={images[item.name]} alt="item" />
      <div>
        <span>{item.name}</span>
        <span>{item.price}</span>
        <ItemsInCart count={item.count} />
      </div>
      <button onClick={increaseCount}>Add to Cart</button>
      <RemoveButton count={item.count} />
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

    return <button onClick={decreaseCount}>remove</button>;
  }
  function ItemsInCart({ count }) {
    if (count === 0) {
      return null;
    }
    return <span>({count} in cart)</span>;
  }
}

export default Item;
