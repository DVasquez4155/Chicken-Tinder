import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Index from "./pages/Index";
import NoMatch from "./pages/NoMatch";
// import Nav from "./components/Nav";

function App() {
  return (
    <Router>
      <div>
        {/* <Nav /> */}
        <Switch>
          <Route exact path={["/", "/test"]}>
            <Index />
          </Route>
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
