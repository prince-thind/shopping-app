import { Link } from "react-router-dom";
import "../styles/Navbar.css"

function Navbar({count}) {
  return (
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
            {count}
            )
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
