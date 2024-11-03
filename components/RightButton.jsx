import React from "react";
import { Link } from "react-router-dom";

function RightButton() {
  return (
    <div className="right-button">
      <Link to="/weather">
        <button>Weather Dashboard</button>
      </Link>
    </div>
  );
}

export default RightButton;
