import { itemsSelector, statusSelector } from "../features/items/itemsSlice";
import { useSelector } from "react-redux";

import Item from "../features/items/Item";
import "../styles/Shop.css";

function Shop() {
  const items = useSelector(itemsSelector);
  const status = useSelector(statusSelector);

 
  return (
    <div className="shop-content">
      <h2 className="shop-heading material-box"> Items</h2>
      <div className="items">
        <Items items={items} status={status}/>
      </div>
    </div>
  );

  function Items({items, status}) {
    if (status === "pending") {
      return <div className="material-box">Loading....</div>;
    }
  
    if (status === "rejected") {
      return <div className="material-box">Error Loading</div>;
    }
  
    return items.map((item) => {
      return <Item key={item.key} item={item} />;
    });
  }
}

export default Shop;
