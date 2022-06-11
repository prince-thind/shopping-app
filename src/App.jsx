import { HashRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import About from "./pages/about/About";
import Cart from "./pages/cart/Cart";
import Home from "./pages/home/Home";
import Item from "./pages/item/Item";
import Items from "./pages/items/Items";

import { useDispatch } from "react-redux";
import { fetchItems } from "./features/items/items";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchItems());
  }, [dispatch]);

  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="items">
              <Route index element={<Items />} />
              <Route path=":id" element={<Item />} />
            </Route>
            <Route path="cart" element={<Cart />} />
            <Route path="about" element={<About />} />
          </Route>
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
