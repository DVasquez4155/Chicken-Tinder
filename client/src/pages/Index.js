import React from "react";

import { Route, Switch } from "react-router-dom";
import { Col } from "react-bootstrap";
//Pages
import Landing from "./Index/Landing";
import Login from "./Index/Login";
import Users from "./Index/Users";
import RegisterNewUser from "./Index/RegisterNewUser";
import Register from "./Index/Register";
import NoMatch from "./Index/NoMatch";

// import API from "../utils/API";
import NotSignedInNav from "../components/Nav/NotSignedIn";
require("./Index/index.css");
const Index = ({ match }) => (
  <main>
    <NotSignedInNav />

    <div className="container page landing-page pt-4 jumbotron-codelines">
      <div className="main-landing-page p-responsive position-relative container-lg">
        <div className="d-md-flex flex-items-center gutter-md-spacious">
          <Col>
            <div className="container">
              <h1 class="h000-mktg text-white lh-condensed-ultra mb-3">
                Let us help determine your PLATE!!
              </h1>

              {/* <a href="https://github.com/DVasquez4155/">
                <img
                  src="https://avatars0.githubusercontent.com/u/22107830?v=4"
                  alt="Daniel Vasquez Talavera"
                  width="50"
                />
                <span> Daniel Vasquez Talavera</span>
              </a>

              <br />
              <br />
              <a href="https://github.com/ConradRodgers">
                <img
                  src="https://avatars0.githubusercontent.com/u/58347782?v=4"
                  alt="Conrad"
                  width="50"
                />
                <span> Conrad Rodgers</span>
              </a>
              <br />
              <br />
              <a href="https://github.com/David-Pendley">
                <img
                  src="https://avatars0.githubusercontent.com/u/57915196?v=4"
                  alt="David Pendley"
                  width="50"
                />
                <span> David Pendley</span>
              </a>
              <br />
              <br />
              <div className="d-flex justify-content-between align-items-center btn-group">
                <a
                  className="col btn btn-sm btn-outline-secondary"
                  href="https://github.com/DVasquez4155/Group-Project-3"
                >
                  View on GitHub&nbsp;<i className="fa fa-github"></i>&nbsp;
                </a>
                <a className="col btn btn-sm btn-outline-secondary" href="/app">
                  View&nbsp;<i className="fa fa-github"></i>&nbsp;
                </a> */}
            </div>
          </Col>

          <Col>
            <Switch>
              <Route exact={true} path={["/"]} component={Landing} />
              <Route exact={true} path={["/login"]} component={Login} />
              <Route exact={true} path={["/group/:group?"]} component={Users} />
              <Route exact={true} path={["/register"]} component={Register} />
              <Route component={NoMatch} />
            </Switch>
          </Col>
        </div>
      </div>
    </div>
  </main>
);

export default Index;
