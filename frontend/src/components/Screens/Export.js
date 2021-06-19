import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Customers } from "../ExcelComponents/Table";
import { CSVLink } from "react-csv";
import { getCategoryList } from "../services/APIFunctions";


const Export = () => {
  const [people, setPeople] = useState({});

  const requestOptions = {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
    body: people,
  };

  useEffect(() => {
    getCategoryList("employee", setPeople);
  }, []);

  return (
      <div class="main">
        <h1 class="title">Export</h1>
        <div className="centralContainer">
          
        </div>
      </div>
    );
  };
  

export default Export;
