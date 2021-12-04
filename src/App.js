import { useEffect, useState } from "react";
import { HashRouter as Router } from "react-router-dom";

import Navbar from './components/NavBar';
import getItems from "./lib/getItems.js";
import MainComponent from "./components/MainComponent.js";

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
       <MainComponent cartSub={cartSub} items={items}/>
        <footer className="footer">CopyRight &copy; Prince Thind</footer>
      </div>
    </Router>
  );
}

export default App;
