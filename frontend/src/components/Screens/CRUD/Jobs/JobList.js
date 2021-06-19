import React, { useState, useEffect } from "react";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useStyles } from "../../styling";
import { getCategoryList } from "../../../services/APIFunctions";

export const JobList = () => {
  const classes = useStyles();
  const [jobs, setJobs] = useState({});

  const requestOptions = {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
    body: jobs,
  };

  useEffect(() => {
    getCategoryList("job", setJobs);
  }, []);

  const deleteJob = (id) => {
    fetch(`http://127.0.0.1:8000/api/employee/delete/${id}`, requestOptions);
    getCategoryList("job", setJobs);
  };

  return (
    <div className="centralContainer">
      {jobs.length > 0 ? (
        <div className="backgroundCard">
          {jobs.map((job) => (
            <div className="card" key={job.id}>
              <strong>{job.job}</strong>
              <div className="ml-auto">
                <Button
                  className={classes.btnEdit}
                  onClick={getCategoryList("job", setJobs)}
                  variant="contained"
                >
                  <Link className="btnLink" to={`job/edit/${job.id}`}>
                    Edit
                  </Link>
                </Button>
                <Button
                  className={classes.btn}
                  variant="contained"
                  color="secondary"
                  onClick={() => deleteJob(job.id)}
                >
                  Delete
                </Button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <h4 className="text-center">No jobs</h4>
      )}
    </div>
  );
};
