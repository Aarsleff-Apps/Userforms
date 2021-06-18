import React, { Component, useState } from "react";
import { JobHeading } from "./JobHeading";
import { JobList } from "./JobList";
import "bootstrap";


const JobManagement = () => {
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
          <h1 class="title">Job Management</h1>
          <div className="centralContainer">
            <JobHeading />
            <JobList />
          </div>
        </main>
        <footer class="footer">All right reserved.</footer>
      </div>
    </body>
  );
};

export default JobManagement;
