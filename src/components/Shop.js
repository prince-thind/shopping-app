import Item from './Item.js'

function Shop(props) {
  return (
    <div className="shop-content">
      <h2> Items Available:</h2>
      {props.items.map((item) => {
        return <Item key={item.key} item={item} images={props.images} cartSub={props.cartSub} />;
      })}
    </div>
  );
}

export default Shop;
