import Item from "../features/items/Item";
import "../styles/Shop.css";

function Shop({items}) {
  return (
    <div className="shop-content">
      <h2 className="shop-heading material-box"> Items</h2>
      <Items />
    </div>
  );

  function Items() {
    return (
      <div className="items">
        {items.map((item) => {
          return <Item key={item.key} item={item}  />;
        })}
      </div>
    );
  }
}

export default Shop;
