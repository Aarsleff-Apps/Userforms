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

  var jobList ={
    job: 'John',
    job: 'Tim',
    job: 'Matt'
  };

  var data ={
    0: 'John',
    1: 'Tim',
    2: 'Matt'
  };
  
  var newdata = Object.values(data);
  console.log(newdata);

  const newDataLength = newdata.length
  console.log(newDataLength)



  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-controlled-open-select-label">
          Employee Name
        </InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={newdata}
          onChange={handleChange}
        >
        <MenuItem value="">
        <em>None</em>
      </MenuItem>
        <div>
        {newdata.map(newdata => (
          <MenuItem value={10}>
            {newdata}
          </MenuItem>
        ))}
      </div>
        </Select>
      </FormControl>

    </div>
  );
}
