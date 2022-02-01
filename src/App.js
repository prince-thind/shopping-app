import { HashRouter as Router } from "react-router-dom";

import Navbar from "./components/NavBar";
import MainComponent from "./components/MainComponent.js";
import { useSelector } from "react-redux";
import {
  itemAdded,
  itemRemoved,
  itemsSelector,
} from "./features/items/itemsSlice";
import { useDispatch } from "react-redux";

function App() {
  // const [items, setItems] = useState([]);
  const items = useSelector(itemsSelector);
  const dispath = useDispatch();

  function cartSub(signal, objKey) {
    if (signal === "increment") {
      dispath(itemAdded(objKey));
    }
    if (signal === "decrement") {
      dispath(itemRemoved(objKey));
    }
  }

  function getItemCount() {
    return items.reduce((acc, item) => acc + item.count, 0);
  }

  return (
    <Router>
      <div className="App">
        <Navbar count={getItemCount()} />
        <MainComponent cartSub={cartSub} items={items} />
        <footer className="footer">CopyRight &copy; Prince Thind</footer>
      </div>
    </Router>
  );
}

export default App;
