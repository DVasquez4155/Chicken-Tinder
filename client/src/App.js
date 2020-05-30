import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Index from "./pages/Index";
import Test from "./pages/Test";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import MobileNav from "./components/Nav/mobile";
import { Row } from "react-bootstrap";

function App() {
  return (
    <Router>
      <div className='container page'>
        <Row>
          <MobileNav />
        </Row>
        <Row>
          <div className='sidebar col-lg-3 col-md-4 col-xs-12 navigation d-none d-md-block'>
            <Nav />
          </div>
            <div className='col-lg-9 col-md-8 col-xs-12'>
              <Switch>
                <Route exact path={["/"]}>
                  <Index />
                </Route>
                <Route exact path={[ "/test"]}>
                  <Test />
                </Route>
                <Route component={NoMatch} />
              </Switch>
          </div>
        </Row>
      </div>
    </Router>
  );
}

export default App;
