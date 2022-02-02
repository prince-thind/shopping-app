import { HashRouter as Router } from "react-router-dom";
import { useSelector } from "react-redux";

import Navbar from "./components/NavBar";
import Main from "./components/Main.js";
import { itemsSelector } from "./features/items/itemsSlice";

function App() {
  const items = useSelector(itemsSelector);

  return (
    <Router>
      <div className="App">
        <Navbar count={getItemCount(items)} />
        <Main items={items} />
        <footer className="footer">CopyRight &copy; Prince Thind</footer>
      </div>
    </Router>
  );
}

function getItemCount(items) {
  return items.reduce((acc, item) => acc + item.count, 0);
}

export default App;
