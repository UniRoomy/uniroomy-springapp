import React from "react";
import { useSelector, useDispatch } from "react-redux";
import type { webState } from "../../src/reducers";
import { GetStaticProps, GetStaticPaths } from "next";
import { UserStatusType, UserDataMapType } from "../../src/types";
import { defaultUsers } from "../../src/data";
import { withRouter } from "next/router";

interface Props {
  email: string;
}

export const getStaticProps: GetStaticProps = async (context) => {
  const email = context.params.id;

  return {
    props: {
      email,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  // const res = await fetch("https://localhost/:3000/api/getDefaultUsers");
  // const data = await res.json();

  const ids: string[] = defaultUsers.map((userObj) => userObj.email);
  const paths = ids.map((email: string) => ({
    params: { id: email },
  }));

  return {
    paths: paths,
    fallback: false,
  };
};

// export default function home({ email, userStatus, userData }: Props) {
function home({ email, router }) {
  const userStatus = useSelector((state: webState) => state.userStatus);
  const currentUser = useSelector((state: webState) => state.currentUser);
  // const dispatch = useDispatch();

  console.log(userStatus);
  console.log(currentUser);

  return (
    <div>
      <h1>Home Page</h1>
      <h4>{userStatus.userEmail ? userStatus.userEmail : "No Email :("}</h4>
    </div>
  );
}

export default withRouter(home);
