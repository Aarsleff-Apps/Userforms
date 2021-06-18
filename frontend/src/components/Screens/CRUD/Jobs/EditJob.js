import React, { useState, useContext, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import { TextField } from "@material-ui/core";
import { Form, FormGroup, Label, Input } from "reactstrap";
import { useFormik } from "formik";
import { jobListValidationSchema } from "../../../Validation/ValidationSchema";

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

export const EditJob = (props) => {
  const validationSchema = jobListValidationSchema;
  const [users, setUsers] = useState({});
  const classes = useStyles();
  const history = useHistory();
  const currentUserId = props.match.params.id;

  const formik = useFormik({
    initialValues: {
      jobId: "",
      job: "",
    },
    validationSchema: jobListValidationSchema,
    onSubmit: (values, { setSubmitting, resetForm }) => {
      const requestOptions = {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          job_id: values.jobId,
          job: values.job,
        }),
      };

      fetch(
        `http://127.0.0.1:8000/api/job/put/${currentUserId}`,
        requestOptions
      )
        .then(history.push('/job'))
    },
  });

  const [selectedUser, setSelectedUser] = useState({
    jobId: "",
    job: "",
  });

  const onChange = (e) => {
    setSelectedUser({ ...selectedUser, [e.target.name]: e.target.value });
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
          <h1 class="title">Edit Job</h1>
          <div className="centralContainer">
            <form
              className="backgroundCard"
              onSubmit={formik.handleSubmit}
            >
              <FormGroup>
                <TextField
                  id="outlined-basic"
                  variant="outlined"
                  className={classes.field}
                  type="text"
                  value={formik.values.jobId}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.jobId &&
                    Boolean(formik.errors.jobId)
                  }
                  name="jobId"
                  placeholder="Enter job ID"
                  helperText={
                    formik.touched.jobId && formik.errors.jobId
                  }
                  required
                ></TextField>
                <TextField
                  id="outlined-basic"
                  variant="outlined"
                  className={classes.field}
                  type="text"
                  value={formik.values.job}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.job && Boolean(formik.errors.job)
                  }
                  name="job"
                  placeholder="Enter job Name"
                  helperText={formik.touched.job && formik.errors.job}
                  required
                ></TextField>
              </FormGroup>
              <div className="ml-auto">
                <Button
                  className={classes.btn}
                  type="submit"
                  variant="contained"
                  color="primary"
                >
                  Edit
                </Button>
                <Button
                  className={classes.btn}
                  variant="contained"
                  color="secondary"
                >
                  <Link className="btnLink" to="/job">
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
