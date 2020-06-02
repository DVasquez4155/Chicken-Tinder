import React from "react";
import RestaurantGroup from "../RestaurantGroup";

require('./index.css')

function Nav(props) {
    return (
        <main>
            <nav className="navbar navbar-dark navbar-expand-lg bg-dark ">
                <div className="container">
                    <a className="navbar-brand logo" href="/">What's For Dinner</a>
                    <button data-toggle="collapse" className="navbar-toggler" data-target="#navbarNav">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul id="links" className="nav navbar-nav ml-auto">
                            <li className="nav-item" role="presentation"><a className="nav-link" href="/login">Login</a></li>
                            <li className="nav-item" role="presentation"><a className="nav-link" href="/register">Register</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </main>
    );
}

export default Nav;
