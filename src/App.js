import { HashRouter as Router } from "react-router-dom";

import Navbar from "./components/NavBar";
import MainComponent from "./components/MainComponent.js";
import { useSelector } from "react-redux";
import { itemsSelector } from "./features/items/itemsSlice";

function App() {
  // const [items, setItems] = useState([]);
  const items = useSelector(itemsSelector);

  function getItemCount() {
    return items.reduce((acc, item) => acc + item.count, 0);
  }

  return (
    <Router>
      <div className="App">
        <Navbar count={getItemCount()} />
        <MainComponent items={items} />
        <footer className="footer">CopyRight &copy; Prince Thind</footer>
      </div>
    </Router>
  );
}

export default App;
