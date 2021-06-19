import React from "react";
import { Link, useHistory } from "react-router-dom";
import { FormGroup } from "reactstrap";
import { Button } from "@material-ui/core";
import { TextField } from "@material-ui/core";
import { jobListValidationSchema } from "../../../Validation/ValidationSchema";
import { useFormik } from "formik";
import { useStyles } from "../../styling";

export const AddJob = () => {
  const classes = useStyles();
  const history = useHistory();

  const formik = useFormik({
    initialValues: {
      jobId: "",
      job: "",
    },
    validationSchema: jobListValidationSchema,
    onSubmit: (values) => {
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          job_id: values.jobId,
          job: values.job,
        }),
      };
      fetch("http://127.0.0.1:8000/api/job/add", requestOptions)
        .then((response) => response.json())
        .then(history.push("/job"));
    },
  });

  const returnClick = () => {
    history.push("/job");
  };

  return (
    <main class="main">
      <h1 class="title">Add Job</h1>
      <div className="addContainer">
        <form className="centralContainer" onSubmit={formik.handleSubmit}>
          <FormGroup>
            <TextField
              id="outlined-basic"
              variant="outlined"
              className={classes.field}
              type="text"
              value={formik.values.jobId}
              onChange={formik.handleChange}
              error={formik.touched.jobId && Boolean(formik.errors.jobId)}
              name="jobId"
              placeholder="Enter Job ID"
              helperText={formik.touched.jobId && formik.errors.jobId}
              required
            ></TextField>
            <TextField
              id="outlined-basic"
              variant="outlined"
              className={classes.field}
              type="text"
              value={formik.values.job}
              onChange={formik.handleChange}
              error={formik.touched.job && Boolean(formik.errors.job)}
              name="job"
              placeholder="Enter job Name"
              helperText={formik.touched.job && formik.errors.job}
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
              onClick={returnClick}
            >
              <Link to="/job" onClick={returnClick} className="btnLink">
                Cancel
              </Link>
            </Button>
          </div>
        </form>
      </div>
    </main>
  );
};
