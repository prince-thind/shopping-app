import Item from '../components/Item';
import '../styles/Shop.css'

function Shop(props) {
  return (
    <div className="shop-content">
      <h2 className='shop-heading'> Items</h2>
      <Items />
    </div>
  );

  function Items() {
    return <div className='items'>{props.items.map((item) => {
      return <Item key={item.key} item={item} images={props.images} cartSub={props.cartSub} />;
    })}</div>
  }
}

export default Shop;
