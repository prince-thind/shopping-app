import { useEffect, useState } from 'react';
import { HashRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './pages/Home.js';
import About from './pages/About.js';
import Shop from './pages/Shop.js';
import Cart from './pages/Cart.js';
import _ from 'loadsh';
import getItems from './lib/getItems.js';
import homeImage from './images/home.jpg'

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    getItems().then((res) => {
      setItems(res);
    });
  }, []);

  function cartSub(signal, objKey) {
    const tempArr = _.cloneDeep(items);
    const tempObj = tempArr.find((obj) => {
      return obj.key === objKey;
    });

    if (signal === 'increment') {
      tempObj.count++;
    }
    if (signal === 'decrement') {
      tempObj.count--;
    }
    setItems(tempArr);
  }

  return (
    <Router>
      <div className="App">
        <nav className="nav-bar">
          <Link to="/">
            <span>Home</span>
          </Link>
          <ul className="nav-bar-list">
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/shop">Shop</Link>
            </li>
            <li>
              <Link to="/cart">
                Cart(
                {items.reduce((a, b) => {
                  return a + b.count;
                }, 0)}
                )
              </Link>
            </li>
          </ul>
        </nav>
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

