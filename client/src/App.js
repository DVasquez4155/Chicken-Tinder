import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Index from "./pages/Index";
import Test from "./pages/Test";
import NoMatch from "./pages/NoMatch";
// import Nav from "./components/Nav";

function App() {
  return (
    <Router>
      <div>
        {/* <Nav /> */}
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
    </Router>
  );
}

export default App;
