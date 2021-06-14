import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  button: {
    display: 'block',
    marginTop: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    width: '100%'
  },
}));

export default function ControlledOpenSelect() {
  const classes = useStyles();
  const [jobID, setjobID] = React.useState('');
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

  return (
    <div>

      <FormControl className={classes.formControl}>
        <InputLabel id="demo-controlled-open-select-label">Employee Name</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={jobID}
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Job 1</MenuItem>
          <MenuItem value={20}>Job 2</MenuItem>
          <MenuItem value={30}>Job 3</MenuItem>
          <MenuItem value={40}>Job 4</MenuItem>
          <MenuItem value={50}>Job 5</MenuItem>
          <MenuItem value={60}>Job 6</MenuItem>
          <MenuItem value={70}>Job 7</MenuItem>
          <MenuItem value={80}>Job 8</MenuItem>
          <MenuItem value={90}>Job 9</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}