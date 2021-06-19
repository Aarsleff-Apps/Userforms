import React from "react";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router";
import { useStyles } from "../../styling";

export const JobHeading = () => {
  const classes = useStyles();

  const history = useHistory();
  const addClick = () => history.push("/job/add");

  {
    return (
      <div className="centralContainer">
        <Button
          type="submit"
          color="primary"
          className={classes.btn}
          onClick={addClick}
        >
          Add Job
        </Button>
      </div>
    );
  }
};
