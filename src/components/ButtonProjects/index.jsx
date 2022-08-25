import React from "react";
import { Link } from "gatsby";
import "./style.scss";

export default function ButtonProjects() {
  return (
        <div className="button-projects">
          <div className="content__item">
          <Link to="/projects">
            <button class="button-1 button--calypso">
              <span>VIEW ALL</span>
              <span>PROJECTS</span>
            </button>
          </Link>
          </div>
        </div>
  );
}

