import React from "react";
import { JobHeading } from "./JobHeading";
import { JobList } from "./JobList";

const JobManagement = () => {
  return (
    <main class="main">
      <h1 class="title">Job Management</h1>
      <div className="centralContainer">
        <JobHeading />
        <JobList />
      </div>
    </main>
  );
};

export default JobManagement;
