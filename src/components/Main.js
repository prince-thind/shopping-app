import { Switch, Route, Redirect } from "react-router-dom";

import Home from "../pages/Home.js";
import About from "../pages/About.js";
import Shop from "../pages/Shop.js";
import Cart from "../pages/Cart.js";
import homeImage from "../images/home.jpg";

function Main({ items }) {
  return (
    <main className="main">
      <Switch>
        <Route path="/" exact>
          <Home img={homeImage} />
        </Route>
        <Route path="/about" exact>
          <About />
        </Route>
        <Route path="/shop" exact>
          <Shop items={items} />
        </Route>
        <Route path="/cart" exact>
          <Cart items={items} />
        </Route>
        <Route>
          <Redirect to="/" />
        </Route>
      </Switch>
    </main>
  );
}

export default Main;
