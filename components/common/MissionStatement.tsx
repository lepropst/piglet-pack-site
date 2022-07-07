import { SxProps, Theme } from "@mui/material";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import { ReactNode } from "react";
import { Link } from "react-router-dom";

export const MissionStatement = (props: {
  snap?: boolean;
  minHeight?: number | string;
  snapAlign?: "start" | "end" | "center";
  backgroundColor?: string;
  transition?: boolean;
  xOffset?: number;
  padding?: string;
  justifyContent?: string;
  children?: ReactNode;
}) => {
  const styles: SxProps<Theme> = {
    display: "flex",
    flexDirection: "column",
    justifyContent: props.justifyContent || "center",
    alignItems: "center",
    textAlign: "center",
    maxWidth: "30rem",
    padding: props.padding || "1em",
    marginX: "auto",
    minHeight: props.minHeight ? props.minHeight : window.innerHeight * 0.9,
    backgroundColor: props.backgroundColor ? props.backgroundColor : "inherit",
  };
  // if(props.xOffset) {
  //   styles.
  // }
  if (props.snap) {
    styles.scrollSnapAlign = props.snapAlign ? props.snapAlign : "end";
    styles.scrollSnapMargin = "2rem";
  }

  return (
    <Box sx={styles}>
      <Typography variant="h2">Mission Statement</Typography>
      <Typography variant="h5">
        Piglet Pack is the combined effort of two autistic individuals
        encouraging the optimization of professional communication across
        various platforms. The Piglet Pack priority is to aid in the
        collaborative development of effective and accessible communication that
        is comfortable for all parties.
      </Typography>

      {props.children && props.children}
    </Box>
  );
};

export default MissionStatement;
