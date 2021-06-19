import React from "react";
import { EmployeeHeading } from "./Heading";
import { EmployeeList } from "./UserList";

const EmployeeManagement = () => {
  return (
    <main class="main">
      <h1 class="title">Employee Management</h1>
      <div className="centralContainer">
        <EmployeeHeading />
        <EmployeeList />
      </div>
    </main>
  );
};

export default EmployeeManagement;
