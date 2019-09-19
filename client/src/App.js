import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NoMatch from "./pages/NoMatch";
import LogIn from "./pages/LogIn";
import Nav from "./components/Nav";
import SignUp from "./pages/SignUp";
import Main from "./pages/Main"

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/login" component={LogIn} />
          <Route exact path="/signup" component={SignUp} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;