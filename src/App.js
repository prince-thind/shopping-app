import './App.css';
import { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './components/Home.js';
import About from './components/About.js';
import Shop from './components/Shop.js';
import Cart from './components/Cart.js';

function App() {
  const [items, setItems] = useState(0);

  function itemSub(signal) {
    if (signal === 'decrement') {
      setItems(items - 1);
    } else if (signal === 'increment') {
      setItems(items + 1);
    } else if (signal === 'reset') {
      setItems(0);
    }
  }

  return (
    <Router>
      <div className="App">
        <nav className="nav-bar">
        <Link to="/">Home</Link>
          <ul className="nav-bar-list">
            <Link to="/about">About</Link>
            <Link to="/shop">Shop</Link>
            <Link to="/cart">Cart ({items})</Link>
          </ul>
        </nav>
      </div>


      <Switch>
      <Route path="/" exact>
         <Home/>
        </Route>
        <Route path="/about" exact>
         <About/>
        </Route>
        <Route path="/shop" exact>
         <Shop itemSub={itemSub}/>
        </Route>
        <Route path="/cart" exact>
         <Cart itemSub={itemSub}/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
