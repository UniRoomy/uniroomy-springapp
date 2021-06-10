import React, { useEffect } from "react";
import Meta from "../src/components/Meta";
import { useSelector, useDispatch } from "react-redux";
import type { webState } from "../src/reducers";
import { addUser } from "../src/actions";
import { defaultUsers } from "../src/data";

interface Props {}

export default function index({}: Props) {
  const userData = useSelector((state: webState) => state.userData);
  const dispatch = useDispatch();

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
    console.log(userData);
  }, [userData]);

  return (
    <>
      <Meta />

      <div>
        <h1>LANDING PAGE</h1>
      </div>
    </>
  );
}
