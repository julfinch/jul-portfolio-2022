import { Link } from "gatsby";
import React, { forwardRef } from "react";
import "./style.scss";

function Navbar(props, ref) {
  return (
    <nav className="navbar" ref={ref}>
      <Link to="/">JUL</Link>
      <Link to="/projects">Projects</Link>
    </nav>
  );
}

export default forwardRef(Navbar);