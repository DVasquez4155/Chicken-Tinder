import React from "react";
// import RestaurantGroup from "../RestaurantGroup";
import { Button } from "react-bootstrap";

require("./index.css");

function Nav(props) {
  return (
    <main>
      <nav className="navbar navbar-dark navbar-expand-lg bg-dark ">
        <div className="container">
          <a className="navbar-brand logo" href="/">
            Chicken Tinder
          </a>
          <button
            data-toggle="collapse"
            className="navbar-toggler"
            data-target="#navbarNav"
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul id="links" className="nav navbar-nav ml-auto">
              <li className="nav-item" role="presentation">
                <Button variant="outline-*" className="nav-link" href="/login">
                  Join Session
                </Button>
              </li>
              <li className="mr-3 nav-item" role="presentation">
                <Button variant="success" className="nav-link" href="/register">
                  Create Session
                </Button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </main>
  );
}

export default Nav;
