import { Switch, Route, Redirect } from "react-router-dom";

import Home from "../pages/Home.js";
import About from "../pages/About.js";
import Shop from "../pages/Shop.js";
import Cart from "../pages/Cart.js";

function Main() {
  return (
    <main className="main">
      <Switch>
        <Route path="/" exact>
          <Home/>
        </Route>
        <Route path="/about" exact>
          <About />
        </Route>
        <Route path="/shop" exact>
          <Shop/>
        </Route>
        <Route path="/cart" exact>
          <Cart />
        </Route>
        <Route>
          <Redirect to="/" />
        </Route>
      </Switch>
    </main>
  );
}

export default Main;
