import React, { Component, useState } from "react";
import 'bootstrap'
import { Heading } from "../TestComponents/CRUD/Heading";
import { UserList } from "../TestComponents/CRUD/UserList";

const CRUDtest = () => {


  return (
    <body>
      <div class="grid-container">
        <header class="header">
          <a href="https://www.aarsleff.co.uk/">
            <img
              class="logo"
              src="https://forms.aarsleff.co.uk/images/Logo.png?v=gNMJrA7Q8A"
              width="92px"
              height="51px"
            />
          </a>
        </header>
        <main class="main">
          <h1 class="title">CRUD Test</h1>
          <Heading />
          <UserList />
        </main>
        <footer class="footer">All right reserved.</footer>
      </div>
    </body>
  );
};

export default CRUDtest;