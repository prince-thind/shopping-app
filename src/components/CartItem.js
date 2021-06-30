function CartItem({ item, cartSub }) {
  return (
    <div>
      <div>
        Name: {item.name} 
      </div>
      <div>Count: {item.count} ({item.currency}{+item.price * +item.count})</div>
      <button onClick={increaseCount}>Add More</button>
      <RemoveButton />
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
}

export default CartItem;
