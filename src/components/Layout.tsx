import * as React from "react";
import Nav from "./Nav";
import Header from "./Header";
import styles from "../styles/web/Layout.module.css";

interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <>
      <Nav />
      <div className={styles.container}>
        <main className={styles.main}>
          <Header />
          {children}
        </main>
      </div>
    </>
  );
}
