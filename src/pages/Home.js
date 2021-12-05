import "../styles/Home.css";
import { HashRouter as Router, Link } from "react-router-dom";

function Home(props) {
  return (
    <Router>
      <div className="home-content">
        <h2 className="home-heading"> Foo Shop</h2>
        <div className="home-image-container">
          <img src={props.img} className="home-image photo-shadow" alt="home" />
        </div>
        <Link to="/shop" className="home-shop-link">
          Shop Now
        </Link>
      </div>
    </Router>
  );
}

export default Home;
