import './App.css';
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './components/Home.js';
import About from './components/About.js';
import Shop from './components/Shop.js';
import Cart from './components/Cart.js';
import images from './images/images.js';
import uniqid from 'uniqid';
import _ from 'loadsh';

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const temp = getItems(); // this may just be a fetch call
    setItems(temp); // will be temp.then() in case of async
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
          <Link to="/">Home</Link>
          <ul className="nav-bar-list">
            <Link to="/about">About</Link>
            <Link to="/shop">Shop</Link>
            <Link to="/cart">Cart({items.reduce((a,b)=>{return a+b.count},0)})</Link>
          </ul>
        </nav>
      </div>

      <main className="main">
        <Switch>
          <Route path="/" exact>
            <Home img={images['home']} />
          </Route>
          <Route path="/about" exact>
            <About />
          </Route>
          <Route path="/shop" exact>
            <Shop images={images} items={items} cartSub={cartSub} />
          </Route>
          <Route path="/cart" exact>
            <Cart cartSub={cartSub} />
          </Route>
        </Switch>
      </main>
    </Router>
  );
}

export default App;

function getItems() {
  return [
    {
      name: 'cup',
      key: uniqid(),
      price: '$5',
      count: 0,
    },
    {
      name: 'feather',
      price: '$10',
      key: uniqid(),
      count: 0,
    },
    {
      name: 'griffin',
      key: uniqid(),
      price: '$50',
      count: 0,
    },
    {
      name: 'jar',
      key: uniqid(),
      price: '$5',
      count: 0,
    },
    {
      name: 'rings',
      key: uniqid(),
      price: '$75',
      count: 0,
    },
    {
      name: 'watch',
      key: uniqid(),
      price: '$100',
      count: 0,
    },
  ];
}
