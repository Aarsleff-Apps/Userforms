import React, { Component } from "react";
import { render } from "react-dom";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import { fontSize } from "@material-ui/system";
import { Route, useHistory } from "react-router";

const useStyles = makeStyles({
    btn: {
      background: "#1F85DE",
      border: 0,
      borderRadius: 3,
      boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
      color: "white",
      height: 120,
      width: "100%",
      margin: "5%",
      padding: "0 25%",
      fontSize: "4rem"
    },
    field: {
      width: "100%",
    },
    fieldContainer: {
      display: "flexbox",
      justifyContent: "center",
      padding: "2rem",
    },
    dateStyle: {
      width: "180px",
    },
  });


const Homescreen = () => {
    const classes = useStyles() 

        const history = useHistory();
        const formClick = () => history.push('/form');
        const salaryClick = () => history.push('/salary');
        const crudClick = () => history.push('/crud');


  return (
    <body>
      <div class="grid-container">
        <header class="header">
          <a href="https://www.aarsleff.co.uk/">
            <img
              class="logo"
              src="https://forms.aarsleff.co.uk/images/Logo.png?v=gNMJrA7Q8A"
              width="92px"
              height="51px"
            />
          </a>
        </header>

        <main class="main">
            <ul class="products">
              <Button type="submit" color="primary" className={classes.btn} onClick={formClick}>Timesheet App</Button>
              <Button type="submit" color="primary" className={classes.btn} onClick={salaryClick}>Salary App</Button>
              <Button type="submit" color="primary" className={classes.btn} onClick={crudClick}>Work in Progress...</Button>
            </ul>
        </main>
        <footer class="footer">All right reserved.</footer>
      </div>
    </body>
  );
};

export default Homescreen;
