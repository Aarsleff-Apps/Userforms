import React from "react";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router";
import { useStyles } from "../services/styling";

const Homescreen = () => {
    const classes = useStyles() 

        const history = useHistory();
        const formClick = () => history.push('/form');
        const salaryClick = () => history.push('/salary');
        const crudClick = () => history.push('/employee');
        const jobClick = () => history.push('/job');

  return (
   
        <main class="main">
            <ul class="products">
              <Button type="submit" color="primary" className={classes.btn} onClick={formClick}>Timesheet</Button>
              <Button type="submit" color="primary" className={classes.btn} onClick={salaryClick}>Cost Form</Button>
              <Button type="submit" color="primary" className={classes.btn} onClick={crudClick}>Employee Management</Button>
              <Button type="submit" color="primary" className={classes.btn} onClick={jobClick}>Job Management</Button>
            </ul>
        </main>
  );
};

export default Homescreen;
