import React from "react";
import Searching from "../Form/index.js";


function Nav({ handleSearchChange }) {
  return (
    <nav className="navbar navbar-expand navbar-light bg-light">
      <div className="navbar-collapse row" id="navbarNav">
        <Searching handleSearchChange={handleSearchChange} />
      </div>
    </nav>
  );
}
export default Nav;
