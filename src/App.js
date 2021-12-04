import { useEffect, useState } from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home.js";
import About from "./pages/About.js";
import Shop from "./pages/Shop.js";
import Cart from "./pages/Cart.js";
import Navbar from './components/NavBar';
import getItems from "./lib/getItems.js";
import homeImage from "./images/home.jpg";

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchFromAPI();

    async function fetchFromAPI() {
      const response = await getItems();
      setItems(response);
    }
  }, []);

  function cartSub(signal, objKey) {
    const tempArr = items.map((obj) => ({ ...obj }));
    const tempObj = tempArr.find((obj) => {
      return obj.key === objKey;
    });

    if (signal === "increment") {
      tempObj.count++;
    }
    if (signal === "decrement") {
      tempObj.count--;
    }
    setItems(tempArr);
  }

  function getItemCount(){
    return items.reduce((acc,item)=>acc+item.count,0);
  }

  return (
    <Router>
      <div className="App">
        <Navbar count={getItemCount()}/>
        <main className="main">
          <Switch>
            <Route path="/" exact>
              <Home img={homeImage} />
            </Route>
            <Route path="/about" exact>
              <About />
            </Route>
            <Route path="/shop" exact>
              <Shop items={items} cartSub={cartSub} />
            </Route>
            <Route path="/cart" exact>
              <Cart items={items} cartSub={cartSub} />
            </Route>
          </Switch>
        </main>
        <footer className="footer">CopyRight &copy; Prince Thind</footer>
      </div>
    </Router>
  );
}

export default App;
