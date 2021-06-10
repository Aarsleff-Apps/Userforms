import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import FormPage from "./FormPage";

export default class HomePage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router>
          <Route exact path="/">
          </Route>
          <Route path='/form' component={FormPage} />
      </Router>
    );
  }
}