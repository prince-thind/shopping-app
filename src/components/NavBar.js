import { Link } from "react-router-dom";
import React from "react";
import { useLocation } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar({ count }) {
  const activePage = useLocation().pathname;

  return (
    <nav className="nav-bar">
      <Page activePage={activePage} currentPage="/">
        <Link to="/">Home</Link>
      </Page>
      <ul className="nav-bar-list">
        <li>
          <Page activePage={activePage} currentPage="/about">
            <Link to="/about">About</Link>
          </Page>
        </li>
        <li>
          <Page activePage={activePage} currentPage="/shop">
            <Link to="/shop">Shop</Link>
          </Page>
        </li>
        <li>
          <Page activePage={activePage} currentPage="/cart">
            <Link to="/cart">
              Cart(
              {count})
            </Link>
          </Page>
        </li>
      </ul>
    </nav>
  );
}

function Page({ activePage, currentPage, children }) {
  console.log(currentPage,activePage)
  const pageStatus = activePage === currentPage ? "active-page" : "";
  return <div className={pageStatus}>{children}</div>;
}

export default Navbar;
