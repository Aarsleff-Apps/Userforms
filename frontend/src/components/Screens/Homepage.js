import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import TestPage from "../TestComponents/DropDown";
import ControlledOpenSelect from "../TestComponents/JobIDList";
import FormPage from "./FormPage";
import SalaryPage from "./SalaryPage";

export default class HomePage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router>
          <Route exact path='/form' component={FormPage} />
          <Route exact path='/salary' component={SalaryPage} />
          <Route exact path='/test' component={TestPage} />
          <Route exact path='/dev' component={ControlledOpenSelect} />
      </Router>
    );
  }
}