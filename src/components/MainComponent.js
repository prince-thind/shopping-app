import { Switch, Route } from "react-router-dom";

import Home from "../pages/Home.js";
import About from "../pages/About.js";
import Shop from "../pages/Shop.js";
import Cart from "../pages/Cart.js";
import homeImage from "../images/home.jpg";

function MainComponent({ cartSub, items }) {
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
          <Shop items={items} cartSub={cartSub} />
        </Route>
        <Route path="/cart" exact>
          <Cart items={items} cartSub={cartSub} />
        </Route>
      </Switch>
    </main>
  );
}

export default MainComponent;
