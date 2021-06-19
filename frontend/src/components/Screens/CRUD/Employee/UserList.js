import React, { useState, useEffect } from "react";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useStyles } from "../../../services/styling";
import { getCategoryList } from "../../../services/APIFunctions";

export const EmployeeList = () => {
  const classes = useStyles();
  const [people, setPeople] = useState({});

  const requestOptions = {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
    body: people,
  };

  useEffect(() => {
    getCategoryList("employee", setPeople);
  }, []);

  const deleteUser = (id) => {
    fetch(`http://127.0.0.1:8000/api/employee/delete/${id}`, requestOptions);
    getCategoryList("employee", setPeople);
  };

  return (
    <div className="centralContainer">
      {people.length > 0 ? (
        <div className="backgroundCard">
          {people.map((user) => (
            <div className="card" key={user.id}>
              <strong>{user.employee}</strong>
              <div className="ml-auto">
                <Button
                  className={classes.btnEdit}
                  onClick={getCategoryList("employee", setPeople)}
                  variant="contained"
                >
                  <Link className="btnLink" to={`employee/edit/${user.id}`}>
                    Edit
                  </Link>
                </Button>
                <Button
                  className={classes.btn}
                  variant="contained"
                  color="secondary"
                  onClick={() => deleteUser(user.id)}
                >
                  Delete
                </Button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <h4 className="text-center">No people</h4>
      )}
    </div>
  );
};
