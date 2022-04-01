import { Link } from "react-router-dom";

import "../styles/Home.css";
import homeImage from "../images/home.jpg";

function Home() {
  return (
    <div className="home-content">
      <h2 className="home-heading"> Foo Shop</h2>
      <div className="home-image-container">
        <img src={homeImage} className="home-image photo-shadow" alt="home" />
      </div>
      <Link to="/shop" className="home-shop-link">
        Shop Now
      </Link>
    </div>
  );
}

export default Home;
