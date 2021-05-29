import React from "react";
import { Button, Grid, TextField } from "@material-ui/core";
import Link from "next/link";
import styles from "../src/styles/web/general.module.css";

interface Props {}

export default function register({}: Props) {
  const registerBtnClicked = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent> | null
  ): void => {
    // e.preventDefault();
  };

  return (
    <div className={styles.grid}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            required
            label="First Name"
            variant="outlined"
            margin="normal"
            size="small"
            fullWidth={true}
            onChange={(e) => console.log(e.target.value)}
          />
          <br />
          <TextField
            required
            label="Surname"
            variant="outlined"
            margin="normal"
            size="small"
            fullWidth={true}
            onChange={(e) => console.log(e.target.value)}
          />
          <br />
          <TextField
            required
            label="Business Name"
            variant="outlined"
            margin="normal"
            size="small"
            fullWidth={true}
            onChange={(e) => console.log(e.target.value)}
          />
          <br />
          <TextField
            required
            label="Business Address"
            variant="outlined"
            margin="normal"
            size="small"
            fullWidth={true}
            onChange={(e) => console.log(e.target.value)}
          />
          <br />
          <TextField
            required
            label="Business Phone Number"
            variant="outlined"
            margin="normal"
            size="small"
            fullWidth={true}
            onChange={(e) => console.log(e.target.value)}
          />
          <br />
          <TextField
            required
            label="Email address"
            variant="outlined"
            margin="normal"
            size="small"
            fullWidth={true}
            onChange={(e) => console.log(e.target.value)}
          />
          <br />
          <TextField
            required
            type="password"
            label="Password"
            variant="outlined"
            size="small"
            margin="normal"
            fullWidth={true}
            onChange={(e) => console.log(e.target.value)}
            onKeyPress={(ev) => {
              if (ev.key === "Enter") {
                registerBtnClicked(null);
                ev.preventDefault();
              }
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <Button
            variant="contained"
            color="secondary"
            type="submit"
            size="medium"
            fullWidth={true}
            onClick={(e) => registerBtnClicked(e)}
          >
            Log in
          </Button>
        </Grid>
        <Grid item xs={12} style={{ marginTop: "2em" }}>
          <div className={styles.card}>
            <Link href="/register">
              <a>Already have an account, Login here!</a>
            </Link>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
