import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Index from "./pages/Index";
import Test from "./pages/Test";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import MobileNav from "./components/Nav/mobile";
import { Row } from "react-bootstrap";

import API from "./utils/API";

class App extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {date: new Date()};
      this.state = {
        businesses: API.getBusinesses(),
        favorites: API.getBusinesses(),
        matched: API.getBusinesses(),
        count: 0
      }
  }
  render() {
    
    var functions = {
      incrementCount: () => {
        let count = this.state.count + 1;
        if (count >= this.state.businesses.length) {
          count = 0;
        }
        this.setState({
          count: count
        });
      },
      decreaseCount: () => {
        let count = this.state.count - 1;
        if (count < 0) {
          count = this.state.businesses.length - 1
        }
        this.setState({
          count: count
        });
      }
    }
    return (
      <Router>
        <div className='container page'>
          <Row>
            <MobileNav />
          </Row>
          <Row>
            <div className='sidebar col-lg-3 col-md-4 col-xs-12 navigation d-none d-md-block'>
              <Nav {...this.state} />
            </div>
              <div className='col-lg-9 col-md-8 col-xs-12'>
                <Switch>
                  <Route exact path={["/"]}>
                    <Index {...functions} {...this.state} />
                  </Route>
                  <Route component={NoMatch} />
                </Switch>
            </div>
          </Row>
        </div>
      </Router>
    );
  }
}

export default App;
