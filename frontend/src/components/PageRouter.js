import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import FormPage from "./Screens/FormPage";
import Homescreen from "./Screens/HomeScreen";
import SalaryPage from "./Screens/SalaryPage";

export default class PageRouter extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router>
        <Route exact path="/form" component={FormPage} />
        <Route exact path="/salary" component={SalaryPage} />
        <Route exact path="/" component={Homescreen} />
      </Router>
    );
  }
}
