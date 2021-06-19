import { makeStyles } from '@material-ui/core';


const useStyles = makeStyles({
    btn: {
      background: "#1F85DE",
      border: 0,
      borderRadius: 3,
      boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
      color: "white",
      height: 120,
      width: "100%",
      marginTop: "5%",
      padding: "0 25%",
      fontSize: "4rem",
    },
    field: {
      width: "100%",
      height: "25%",
      fontSize: "4rem",
      paddingBottom: 10,
    },
  });

export { useStyles }
  