import { itemsSelector } from "../features/items/itemsSlice";
import { useSelector } from "react-redux";

import Item from "../features/items/Item";
import "../styles/Shop.css";

function Shop() {
  const items = useSelector(itemsSelector);

  return (
    <div className="shop-content">
      <h2 className="shop-heading material-box"> Items</h2>
      <div className="items">
        {items.map((item) => {
          return <Item key={item.key} item={item} />;
        })}
      </div>
    </div>
  );
}

export default Shop;
