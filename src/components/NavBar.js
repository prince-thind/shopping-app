import { Link } from "react-router-dom";
import React, { useState } from "react";

import "../styles/Navbar.css";

function Navbar({ count }) {
  const [activePage, setActivePage] = useState("home");

  return (
    <nav className="nav-bar">
      <Page
        activePage={activePage}
        currentPage="home"
        setActivePage={setActivePage}
      >
        <Link to="/">Home</Link>
      </Page>
      <ul className="nav-bar-list">
        <li>
          <Page
            activePage={activePage}
            currentPage="about"
            setActivePage={setActivePage}
          >
            <Link to="/about">About</Link>
          </Page>
        </li>
        <li>
          <Page
            activePage={activePage}
            currentPage="shop"
            setActivePage={setActivePage}
          >
            <Link to="/shop">Shop</Link>
          </Page>
        </li>
        <li>
          <Page
            activePage={activePage}
            currentPage="cart"
            setActivePage={setActivePage}
          >
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

function Page({ activePage, currentPage, setActivePage, children }) {
  const pageStatus = activePage === currentPage ? "active-page" : "";
  return (
    <div onClick={handleClick} className={pageStatus}>
      {children}
    </div>
  );

  function handleClick() {
    setActivePage(currentPage);
  }
}

export default Navbar;
