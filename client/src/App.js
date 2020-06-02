import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Index from "./pages/Index";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import MobileNav from "./components/Nav/mobile";
import NotSignedInNav from "./components/Nav/NotSignedIn";
import { Row, Col } from "react-bootstrap";

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
    const NotSignedIn = ({match}) => (
      
      <main>
        <NotSignedInNav />
        <br />
        <div className='container page jumbotron-codelines'>
          <div className='main-page p-responsive position-relative container-lg'>
            <div className='d-md-flex flex-items-center gutter-md-spacious'>
              <Col>
              <div class="container">
                <h1 class="display-4">What's For Dinner</h1>
                <p class="lead">Description</p>
                <hr class="my-4"/>

                <a href="https://github.com/DVasquez4155/">
                  <img src="https://avatars0.githubusercontent.com/u/22107830?v=4" width="50"/>
                  <span> Daniel Vasquez Talavera</span>
                </a>
                <br/>
                <br/>
                <a href="https://github.com/krease23">
                  <img src="https://avatars0.githubusercontent.com/u/58020708?v=4" width="50"/>
                  <span> Kermit Bonner</span>
                </a>
                <br/>
                <br/>
                <a href="https://github.com/ConradRodgers">
                  <img src="https://avatars0.githubusercontent.com/u/58347782?v=4" width="50"/>
                  <span> Conrad</span>
                </a>
                <br/>
                <br/>
                <a href="https://github.com/David-Pendley">
                  <img src="https://avatars0.githubusercontent.com/u/57915196?v=4" width="50"/>
                  <span> David Pendley</span>
                </a>
                <br/>
                <br/>
                <div className='d-flex justify-content-between align-items-center btn-group'>
                  <a class="col btn btn-sm btn-outline-secondary" href="https://github.com/DVasquez4155/Group-Project-3">View on GitHub&nbsp;<i class="fa fa-github"></i>&nbsp;</a>
                  <a class="col btn btn-sm btn-outline-secondary" href="/app">View&nbsp;<i class="fa fa-github"></i>&nbsp;</a>
                </div>
              </div>
              </Col>
              <Col>
                <Switch>
                    <Route exact={true} path={["/"]} component={Landing} />
                    <Route exact={true} path={["/login"]} component={Login} />
                    <Route exact={true} path={["/register"]} component={Register} />
                    <Route component={NoMatch} />
                </Switch>
              </Col>
            </div>
          </div>
        </div>
      </main>
    )
    const App = ({match}) => (
      <div className='container page'>
      <Row>
        <MobileNav />
      </Row>
      <Row className='main-page'>
        <div className='sidebar col-lg-3 col-md-4 col-xs-12 navigation d-none d-md-block'>
          <Nav {...this.state} />
        </div>
        <div className='col-lg-9 col-md-8 col-xs-12'>
          
          <Switch>
            <Route exact path={`${match.url}`}>
              <Index {...functions} {...this.state} />
            </Route>
            {/* <Route exact={true} path={["/"]} {...functions} {...this.state} component={Index} /> */}
            {/* <Route path={`${match.url}/matches`} exact={true} component={About} /> */}
            {/* <Route path={`${match.url}/profile`} exact={true} component={Contact} /> */}
          </Switch>
          
        </div>
      </Row>
    </div>
    )
    return (
      <Router>
        <Switch>
          <Route exact path={["/landing"]}>
            <Landing />
          </Route>
          <Route exact={true} path='/app' component={App} />
          <Route component={NotSignedIn} />
        </Switch>
      </Router>
    );
  }
}

export default App;