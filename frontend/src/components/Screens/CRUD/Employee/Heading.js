import React from "react";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router";
import { useStyles } from "../../styling";

export const EmployeeHeading = () => {
  const classes = useStyles();

  const history = useHistory();
  const addClick = () => history.push("/employee/add");

  {
    return (
      <div className="centralContainer">
        <Button
          type="submit"
          color="primary"
          className={classes.btn}
          onClick={addClick}
        >
          Add User
        </Button>
      </div>
    );
  }
};
