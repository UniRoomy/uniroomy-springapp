import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import type { webState } from "../../src/reducers";
import {
  Grid,
  Button,
  TextField,
  Typography,
  FormControlLabel,
  Checkbox,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@material-ui/core";
import {
  DesktopDatePicker,
  DesktopTimePicker,
  LocalizationProvider,
} from "@material-ui/lab";
import AdapterDateFns from "@material-ui/lab/AdapterDateFns";
import { Theme } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/styles";
import { addBooking } from "../../src/actions";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100%",
  },
  btn: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    height: 48,
    padding: "0 30px",
  },
}));

interface Props {}

export default function bookingPage({}: Props) {
  const currentUser = useSelector((state: webState) => state.currentUser);
  const dispatch = useDispatch();

  const [data, setData] = useState({
    dateOfBooking: new Date(),
    preferredTime: [new Date(), new Date()], // [timeFrom, timeTo]
    timeRequired: "",
    repeatBooking: false,
    repeatInterval: "None Chosen",
    endOfTenancy: new Date(),
    toBeCleaned: "None",
    completed: false,
  });
  const classes = useStyles();

  const repeatOptions = [
    "None Chosen",
    "Weekly Interval",
    "Bi-Weekly",
    "Tri-Weekly",
    "Once a Month",
    "Once every 3 Months",
    "Once every 6 Months",
    "Once a Year",
  ];
  const cleaningOptions = ["None", "Room", "Window", "Kitchen", "others..."];

  const handleRequiredTimeChange = (
    newTime: string | Date,
    changeTimeFrom: boolean
  ) => {
    if (changeTimeFrom) {
      setData({
        ...data,
        preferredTime: [newTime as Date, data.preferredTime[1]],
      });
    } else {
      setData({
        ...data,
        preferredTime: [data.preferredTime[0], newTime as Date],
      });
    }
  };

  const handleBooking = () => {
    console.log(data);
    if (!data.repeatBooking) {
      setData({ ...data, repeatInterval: repeatOptions[0] });
    }
    dispatch(addBooking({ ...data, clientId: currentUser.email }));
  };

  return (
    // <Grid container spacing={1} className={classes.root} align="center">
    <Grid container spacing={1} className={classes.root}>
      <Grid item xs={12}>
        <Typography variant="h6" component="h6">
          Booking Page - Book a clean here!
        </Typography>
      </Grid>
      <br />
      <br />
      <br />
      {/* Date */}
      <Grid item xs={12}>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DesktopDatePicker
            label="Date of booking"
            value={data.dateOfBooking}
            onChange={(newDate) => setData({ ...data, dateOfBooking: newDate })}
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>
      </Grid>
      {/* Preferred time: from & to */}
      <Grid item xs={12}>
        <Typography variant="h6" component="h6">
          Preferred time from:
        </Typography>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DesktopTimePicker
            label="Time from"
            value={data.preferredTime[0]}
            onChange={(newTime) => handleRequiredTimeChange(newTime, true)}
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h6" component="h6">
          Preferred time to:
        </Typography>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DesktopTimePicker
            label="Time to"
            value={data.preferredTime[1]}
            onChange={(newTime) => handleRequiredTimeChange(newTime, false)}
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>
      </Grid>
      {/* Time Required (mins) */}
      <Grid item xs={12}>
        <TextField
          required
          variant="outlined"
          type="number"
          label="Time required (mins)"
          onChange={(e) =>
            setData({ ...data, timeRequired: e.target.value.toString() })
          }
        />
      </Grid>
      {/* Repeat: yes/no */}
      <Grid item xs={12}>
        <FormControlLabel
          control={
            <Checkbox
              color="primary"
              checked={data.repeatBooking}
              onChange={(e) =>
                setData({ ...data, repeatBooking: e.target.checked })
              }
            />
          }
          label="Repeat Booking?"
          labelPlacement="start"
        />
      </Grid>

      {data.repeatBooking ? (
        <>
          {/* Repeat Interval: weekly, bi-weekly */}
          <Grid item xs={12}>
            <FormControl required variant="outlined" margin="normal">
              <InputLabel>Repeat Interval</InputLabel>
              <Select
                value={data.repeatInterval}
                onChange={(e) =>
                  setData({ ...data, repeatInterval: e.target.value })
                }
                label="Choose A Repeat Interval"
              >
                {repeatOptions.map((option, idx) => (
                  <MenuItem value={option} key={idx}>
                    {option}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          {/* End of tenancy: date (know when to stop the repeat cleans) */}
          <Grid item xs={12}>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DesktopDatePicker
                label="End of Tendency"
                value={data.endOfTenancy}
                onChange={(newDate) =>
                  setData({ ...data, endOfTenancy: newDate })
                }
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
          </Grid>
        </>
      ) : null}
      {/* What is it that needs cleaning */}
      <Grid item xs={12}>
        <FormControl required variant="outlined" margin="normal">
          <InputLabel>Options</InputLabel>
          <Select
            value={data.toBeCleaned}
            onChange={(e) => setData({ ...data, toBeCleaned: e.target.value })}
          >
            {cleaningOptions.map((option, idx) => (
              <MenuItem value={option} key={idx}>
                {option}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={12}>
        {/* style={{color: "white"}} */}
        <Button className={classes.btn} color="primary" onClick={handleBooking}>
          Book Clean
        </Button>
      </Grid>
    </Grid>
  );
}
