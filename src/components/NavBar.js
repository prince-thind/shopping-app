import "../styles/Navbar.css";
import React from "react";
import { useLocation,Link } from "react-router-dom";

function Navbar({ count }) {
  const activePage = useLocation().pathname;

  return (
    <nav className="nav-bar">
      <PageLink activePage={activePage} linkedPage="/">
        <Link to="/">Home</Link>
      </PageLink>
      <ul className="nav-bar-list">
        <li>
          <PageLink activePage={activePage} linkedPage="/about">
            <Link to="/about">About</Link>
          </PageLink>
        </li>
        <li>
          <PageLink activePage={activePage} linkedPage="/shop">
            <Link to="/shop">Shop</Link>
          </PageLink>
        </li>
        <li>
          <PageLink activePage={activePage} linkedPage="/cart">
            <Link to="/cart">
              Cart(
              {count})
            </Link>
          </PageLink>
        </li>
      </ul>
    </nav>
  );
}

function PageLink({ activePage, linkedPage, children }) {
  const linkClassName = activePage === linkedPage ? "active-page" : "";
  return <div className={linkClassName}>{children}</div>;
}

export default Navbar;
