import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";

// export default class HomePage extends Component {
//   constructor(props) {
//     super(props);
//   }

const numbers = [1, 2, 3, 4, 5];

const useStyles = makeStyles((theme) => ({
  button: {
    display: "block",
    marginTop: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    width: "100%",
  },
}));

export default function TestPage() {
  const classes = useStyles();
  const [jobID, setjobID] = React.useState("");
  const [open, setOpen] = React.useState(false);

  const handleChange = (event) => {
    setjobID(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  var data = {
    1: "John",
    2: "Tim",
    3: "Matt",
  };

  var newdata = Object.values(data);
  console.log(newdata);

  const final = []

  const newDataLength = newdata.length;
  console.log(newDataLength);

  function sayHello() {
    console.log(jobID);
  }

  function individual() {
    for (let job of newdata){
        jobs.push(<li key={newdata}>{newdata}</li>)
    }
    return(
        <div className="App">
        <ul>{final}</ul>
        </div>
    )
  }

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel id="jobSelect-label">Job Name</InputLabel>
        <Select
          labelId="jobSelect-label"
          id="jobSelect"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={jobID}
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {newdata.map((newdata) => (
            <MenuItem value={90}>{newdata}</MenuItem>
          ))}
        </Select>
      </FormControl>
      <div>{final}</div>
      <Button type="submit" color="primary" className={classes.btn} onClick={sayHello}>
      Submit
    </Button>
    </div>
  );
}
