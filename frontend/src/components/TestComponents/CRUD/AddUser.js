import React, { useState, useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import { v4 as uuid } from "uuid";
import { Link, useHistory } from "react-router-dom";
import { Form, FormGroup, Label, Input } from "reactstrap";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import { TextField } from "@material-ui/core";

const useStyles = makeStyles({
  btn: {
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    height: "100%",
    width: "25%",
    fontSize: "2rem",
    margin: "5%",
    paddingLeft: "15%",
    paddingRight: "15%",
  },
  field: {
    width: "100%",
    height: "25%",
    fontSize: "4rem",
    paddingBottom: 10,
  },
});

export const AddUser = () => {
  const classes = useStyles();
  const [name, setName] = useState("");
  const { addUser } = useContext(GlobalContext);
  const history = useHistory();

  const onSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      id: uuid(),
      name,
    };
    addUser(newUser);
    history.push("/crud");
  };

  const onChange = (e) => {
    setName(e.target.value);
  };

  return (
    <body>
      <div class="grid-container">
        <header class="header">
          <a href="/">
            <img
              class="logo"
              src="https://forms.aarsleff.co.uk/images/Logo.png?v=gNMJrA7Q8A"
              width="92px"
              height="51px"
            />
          </a>
        </header>

        <main class="main">
          <h1 class="title">Employee Timesheets</h1>
          <div className="addContainer">
            <Form onSubmit={onSubmit} className="centralContainer">
              <FormGroup >
                <TextField
                  id="outlined-basic"
                  variant="outlined"
                  className={classes.field}
                  type="text"
                  value={name}
                  onChange={onChange}
                  name="name"
                  placeholder="Enter user"
                  required
                ></TextField>
              </FormGroup>
              <div className="ml-auto">
              <Button type="submit" className={classes.btn} variant="contained"  color="primary">Submit</Button>
              <Button className={classes.btn} variant="contained"  color="secondary">
                <Link to="/crud" className="btnLink">
                  Cancel
                </Link>
              </Button>
              </div>
            </Form>
          </div>
        </main>
        <footer class="footer">All right reserved.</footer>
      </div>
    </body>
  );
};
