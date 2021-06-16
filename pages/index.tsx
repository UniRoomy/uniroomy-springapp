import React, { useEffect } from "react";
import Meta from "../src/components/Meta";
import { useSelector, useDispatch } from "react-redux";
import type { webState } from "../src/reducers";
import { addUser } from "../src/actions";
import { defaultUsers } from "../src/data";

interface Props {}

export default function index({}: Props) {
  // const userData = useSelector((state: webState) => state.userData);
  // const userStatus = useSelector((state: webState) => state.userStatus);
  // const dispatch = useDispatch();

  /*
  // loading users (not being persisted so just used the data.ts file directly)
  useEffect(() => {
    defaultUsers.map((userObj) => {
      if (Object.keys(userObj).length == 5) {
        dispatch(
          addUser(
            "add-client",
            true,
            userObj.firstName,
            userObj.surname,
            userObj.email,
            userObj.password,
            null,
            null,
            null
          )
        );
      } else if ("businessName" in userObj) {
        dispatch(
          addUser(
            "add-cleaner",
            false,
            userObj.firstName,
            userObj.surname,
            userObj.email,
            userObj.password,
            userObj.businessName,
            userObj.businessPhoneNumber,
            userObj.businessAddress
          )
        );
      }
    });
  }, []); 
  */

  return (
    <>
      <Meta />

      <div>
        <h1>LANDING PAGE</h1>
      </div>
    </>
  );
}
