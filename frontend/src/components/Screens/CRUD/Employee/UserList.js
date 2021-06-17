import React, { useContext, useState, useEffect } from "react";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import { Route, useHistory } from "react-router";
import { Link } from "react-router-dom";

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
  btnEdit: {
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    background: "#f6e486",
    height: "100%",
    width: "25%",
    fontSize: "2rem",
    margin: "5%",
    paddingLeft: "15%",
    paddingRight: "15%",
  },
});

export const EmployeeList = () => {
  const classes = useStyles();
  const [users, setUsers] = useState({});

  const requestOptions = {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
    body: users,
  };

 

  useEffect(() => {
    let loadCounter = 0;
    if (loadCounter === 0){
      fetch("http://127.0.0.1:8000/api/employee/list")
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        setUsers(data);
        console.log('egg')
      })
    }
    loadCounter += 1;
    console.log(loadCounter)
    
  }, []);

  const history = useHistory();
  const addClick = () => history.push("/employee/add");

  const deleteUser = (id) => {
    fetch(`http://127.0.0.1:8000/api/employee/delete/${id}`, requestOptions);
    lazyFetch();
  };

  function lazyFetch() {
    fetch("http://127.0.0.1:8000/api/employee/list")
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        setUsers(data);
      });
  }

  return (
    <div className="centralContainer">
      {users.length > 0 ? (
        <div className="backgroundCard">
          {users.map((user) => (
            <div className="card" key={user.id}>
              <strong>{user.employee}</strong>
              <div className="ml-auto">
                <Button
                  className={classes.btnEdit}
                  onClick={lazyFetch()}
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
        <h4 className="text-center">No Users</h4>
      )}
    </div>
  );
};
