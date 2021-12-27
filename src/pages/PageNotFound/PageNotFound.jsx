import React from "react";
import "./PageNotFound.scss";
import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <div className="pnf">
      <div className="container">
        <p>
          {" "}
          Page doesn't exist <Link to="/">Go Home</Link>
        </p>
      </div>
    </div>
  );
}

export default PageNotFound;
