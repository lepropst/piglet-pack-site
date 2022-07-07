import Container from "@mui/material/Container";
import { ReactNode } from "react";
/* eslint-disable-next-line */
export interface BodyProps {}
export default function Body(props: { children: ReactNode | ReactNode[] }) {
  return (
    <Container
      id="body"
      maxWidth="xl"
      sx={{ position: "relative", marginTop: "10vh", minHeight: "150vh" }}
    >
      {props.children}
    </Container>
  );
}
export { Body };
