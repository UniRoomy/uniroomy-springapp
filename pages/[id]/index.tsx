import React from "react";
import { useSelector, useDispatch } from "react-redux";
import type { webState } from "../../src/reducers";
import { GetStaticProps, GetStaticPaths } from "next";
import { UserStatusType, UserDataMapType } from "../../src/types";

interface Props {
  email: string;
}

export const getStaticProps: GetStaticProps = async (context) => {
  const email = context.params.id;

  console.log("Email: " + email);

  return {
    props: {
      email,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  console.log("PATHS");
  //   const userData = useSelector((state: webState) => state.userData);

  const ids: string[] = ["gmail"];
  const paths = ids.map((email: string) => ({
    params: { id: email },
  }));

  return {
    paths: paths,
    fallback: false,
  };
};

// export default function home({ email, userStatus, userData }: Props) {
export default function home({ email }: Props) {
  const userStatus = useSelector((state: webState) => state.userStatus);
  const userData = useSelector((state: webState) => state.userData);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Home Page</h1>
      <h4>{email}</h4>
    </div>
  );
}
