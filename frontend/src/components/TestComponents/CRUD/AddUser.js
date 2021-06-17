import React, { useState, useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import { v4 as uuid } from "uuid";
import { Link, useHistory } from "react-router-dom";
import { Form, FormGroup, Label, Input } from "reactstrap";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import { TextField } from "@material-ui/core";
import { crud } from "../../Validation/ValidationSchema";
import { useFormik } from "formik";
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
  const validationSchema = crud;
  const classes = useStyles();
  const [name, setName] = useState("");
  const history = useHistory();

  const formik = useFormik({
    initialValues: {
      name: "",
      number: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values, { setSubmitting, resetForm }) => {
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: values.name,
          number: values.number,
        }),
      };

      fetch("http://127.0.0.1:8000/api/crud/", requestOptions)
        .then((response) => response.json())
        .then(resetForm())
        .then(setSubmitting(false));
      console.log(values);
      console.log(`submitted!!`);
    },
  });


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
            <form  className="centralContainer" onSubmit={formik.handleSubmit}>
              <FormGroup>
                <TextField
                  id="outlined-basic"
                  variant="outlined"
                  className={classes.field}
                  type="text"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  error={formik.touched.name && Boolean(formik.errors.name)}
                  name="name"
                  placeholder="Enter user"
                  helperText={formik.touched.name && formik.errors.name}
                  required
                ></TextField>
                <TextField
                  id="outlined-basic"
                  variant="outlined"
                  className={classes.field}
                  type="text"
                  value={formik.values.number}
                  onChange={formik.handleChange}
                  error={formik.touched.number && Boolean(formik.errors.number)}
                  name="number"
                  placeholder="Enter number"
                  helperText={formik.touched.number && formik.errors.number}
                  required
                ></TextField>
              </FormGroup>
              <div className="ml-auto">
                <Button
                  type="submit"
                  className={classes.btn}
                  variant="contained"
                  color="primary"
                >
                  Submit
                </Button>
                <Button
                  className={classes.btn}
                  variant="contained"
                  color="secondary"
                >
                  <Link to="/crud" className="btnLink">
                    Cancel
                  </Link>
                </Button>
              </div>
            </form>
          </div>
        </main>
        <footer class="footer">All right reserved.</footer>
      </div>
    </body>
  );
};
