import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";

export default class HomePage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router>
          <Route exact path="/">
            <p>New and improved frontend with more frontend.</p>
          </Route>
      </Router>
    );
  }
}