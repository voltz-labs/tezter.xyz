import { PropsWithChildren } from "react";
import { Container } from "react-bootstrap";
import { Footer } from "../Footer";
import { NavBar } from "../NavBar";
import styles from "./Page.module.scss";

export interface PageProps extends PropsWithChildren<{}> {}

export const Page = ({ children }: PageProps) => {
  return (
    <div className={styles["container"]}>
      <NavBar />
      <main>
        <Container>{children}</Container>
      </main>
      <Footer />
    </div>
  );
};
