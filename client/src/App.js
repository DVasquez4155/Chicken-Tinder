import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Index from "./pages/Index.js"
import app from "./pages/App.js"
class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path='/app/user/:user?' Route={Route} component={app} />
          <Route component={Index} Route={Route}/>
        </Switch>
      </Router>
    );
  }
}

export default App;