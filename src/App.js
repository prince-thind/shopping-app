import { HashRouter as Router } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

import Navbar from "./components/NavBar";
import Main from "./components/Main.js";
import { itemsSelector, fetchItems } from "./features/items/itemsSlice";

function App() {
  const items = useSelector(itemsSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchItems())
  }, [dispatch]);

  return (
    <Router>
      <div className="App">
        <Navbar count={getItemCount(items)} />
        <Main />
        <footer className="footer">CopyRight &copy; Prince Thind</footer>
      </div>
    </Router>
  );
}

function getItemCount(items) {
  return items.reduce((acc, item) => acc + item.count, 0);
}

export default App;
