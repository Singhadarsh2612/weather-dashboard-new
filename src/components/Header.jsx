import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <div className="home-button">
        <Link to="/">
          <button>Home</button>
        </Link>
      </div>
    </div>
  );
}

export default Header;
