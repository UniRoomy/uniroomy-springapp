import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Meta from "../src/components/Meta";
import { useSelector, useDispatch } from "react-redux";
import type { webState } from "../src/reducers";
import { updateUserStatus, addUser } from "../src/actions";
import { Button, Grid, TextField, Typography } from "@material-ui/core";
import styles from "../src/styles/web/general.module.css";

interface Props {}

export default function register({}: Props) {
  const [registerChosen, setRegisterChosen] = useState<string | null>(null);

  const userStatus = useSelector((state: webState) => state.userStatus);
  const userData = useSelector((state: webState) => state.userData);
  const dispatch = useDispatch();
  const router = useRouter();

  let firstName = "";
  let surname = "";
  let email = "";
  let password = "";
  let businessName = "";
  let businessAddress = "";
  let businessPhoneNumber = "";

  const registerBtnClicked = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent> | null
  ): void => {
    e.preventDefault();

    dispatch(
      updateUserStatus(
        "sign-in",
        registerChosen == "client" ? true : false,
        true,
        email
      )
    );

    dispatch(
      addUser(
        registerChosen == "client" ? "add-client" : "add-cleaner",
        firstName,
        surname,
        email,
        password,
        businessName,
        businessPhoneNumber,
        businessAddress
      )
    );

    console.log(userData);
    console.log(userStatus);
    
    // router.push(`/${email}`);
  };

  if (registerChosen == null) {
    return (
      <div className={styles.grid}>
        <Meta />
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Button
              variant="contained"
              color="secondary"
              type="submit"
              size="medium"
              fullWidth={true}
              onClick={() => {
                setRegisterChosen("client");
              }}
            >
              Client
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="contained"
              color="secondary"
              type="submit"
              size="medium"
              fullWidth={true}
              onClick={() => {
                setRegisterChosen("cleaner");
              }}
            >
              Cleaner
            </Button>
          </Grid>
        </Grid>
      </div>
    );
  } else {
    return (
      <div className={styles.grid}>
        <Meta />
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              required
              label="First Name"
              variant="outlined"
              margin="normal"
              size="small"
              fullWidth={true}
              onChange={(e) => (firstName = e.target.value)}
            />
            <br />
            <TextField
              required
              label="Surname"
              variant="outlined"
              margin="normal"
              size="small"
              fullWidth={true}
              onChange={(e) => (surname = e.target.value)}
            />
            <br />
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
              onKeyPress={(ev) => {
                if (ev.key === "Enter") {
                  ev.preventDefault();
                  registerBtnClicked(null);
                }
              }}
            />
            <br />
            {/* Optional data for client & cleaner */}
            {registerChosen == "client" ? null : (
              <>
                <TextField
                  required
                  label="Business Name"
                  variant="outlined"
                  margin="normal"
                  size="small"
                  fullWidth={true}
                  onChange={(e) => (businessName = e.target.value)}
                />
                <br />
                <TextField
                  required
                  label="Business Address"
                  variant="outlined"
                  margin="normal"
                  size="small"
                  fullWidth={true}
                  onChange={(e) => (businessAddress = e.target.value)}
                />
                <br />
                <TextField
                  required
                  label="Business Phone Number"
                  variant="outlined"
                  margin="normal"
                  size="small"
                  fullWidth={true}
                  onChange={(e) => (businessPhoneNumber = e.target.value)}
                />
              </>
            )}
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
              Create Account
            </Button>
          </Grid>
          <Grid item xs={12} style={{ marginTop: "2em" }}>
            <div className={styles.card}>
              <Link href="/login">
                <a>Already have an account, Login here!</a>
              </Link>
            </div>
          </Grid>
        </Grid>
      </div>
    );
  }
}
