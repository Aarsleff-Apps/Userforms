import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { Button } from "@material-ui/core";
import { TextField } from "@material-ui/core";
import { FormGroup } from "reactstrap";
import { useFormik } from "formik";
import { jobListValidationSchema } from "../../../Validation/ValidationSchema";
import { useStyles } from "../../../services/styling";

export const EditJob = (props) => {
  const classes = useStyles();
  const history = useHistory();
  const currentUserId = props.match.params.id;

  const formik = useFormik({
    initialValues: {
      jobId: "",
      job: "",
    },
    validationSchema: jobListValidationSchema,
    onSubmit: (values) => {
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
      ).then(history.push("/job"));
    },
  });

  return (
    <main class="main">
      <h1 class="title">Edit Job</h1>
      <div className="centralContainer">
        <form className="backgroundCard" onSubmit={formik.handleSubmit}>
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
              placeholder="Enter job ID"
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
  );
};
