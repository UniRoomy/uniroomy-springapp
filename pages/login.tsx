import React from "react";
import Link from "next/link";
import { Button, Grid, TextField } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import type { webState } from "../src/reducers";
import styles from "../src/styles/web/general.module.css";

interface Props {}

export default function login({}: Props) {
  const userData = useSelector((state: webState) => state.userData);

  let email = "";
  let password = "";

  const loginBtnClicked = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent> | null
  ): void => {
    if (e) {
      e.preventDefault();
    }

    if (userData.has(email)) {
      // successful login
    } else {
      // show error
      console.log("Invalid details");
      console.log(userData);
    }
  };

  return (
    <div className={styles.grid}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            required
            label="Email address"
            variant="outlined"
            margin="normal"
            size="small"
            fullWidth={true}
            onChange={(e) => (email = e.target.value)}
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
            onChange={(e) => (password = e.target.value)}
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                loginBtnClicked(null);
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
            onClick={(e) => loginBtnClicked(e)}
          >
            Log in
          </Button>
        </Grid>
        <Grid item xs={12} style={{ marginTop: "2em" }}>
          <div className={styles.card}>
            <Link href="/register">
              <a>Don't have an account yet, Register for one!</a>
            </Link>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
