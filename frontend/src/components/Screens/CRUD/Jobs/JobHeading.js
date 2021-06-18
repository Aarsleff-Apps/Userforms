import React from 'react';
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import { Route, useHistory } from "react-router";
import 'bootstrap'
import {
  Navbar,
  Nav,
  NavItem,
  NavbarBrand,
  Container
} from "reactstrap";


const useStyles = makeStyles({
  btn: {
    background: "#1F85DE",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    height: 80,
    width: "100%",
    marginTop: "5%",
    padding: "0 25%",
    fontSize: "2rem",
    alignSelf: "center"
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



export const JobHeading = () => {
  const classes = useStyles() 

  const history = useHistory();
  const addClick = () => history.push('/job/add');


{
  return (
    <div className="centralContainer">
      
      <Button type="submit" color="primary" className={classes.btn} onClick={addClick}>Add User</Button>
    </div>

  )
}
}