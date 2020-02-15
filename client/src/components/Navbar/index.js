import React from "react";
import { Link, BrowserRouter as Router} from "react-router-dom"; //BrowserRouter as Routerfor Version 4!!!!!!
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">
          Employee Directory
        </Link>

        <button className="btn btn-primary">Add Employee</button>
      </nav>
    </Router>
  );
}

export default Navbar;
