import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Link from "@mui/material/Link";
import Fade from "@mui/material/Fade";
import GlobalStyles from "@mui/material/GlobalStyles";

import { useIntersectionObserver } from "../utilities/use-intersection-observer";
import { ReactElement, useEffect, useRef, useState } from "react";
// import Image from "mui-image";
import Image from "next/image";

import MissionStatement from "../components/common/MissionStatement";
import { WhyUs, WelcomeMessage } from "../components/home";

const FadeComponent = (props: {
  threshold?: number;
  children: ReactElement<any, any>;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const visible = useIntersectionObserver({
    root: null,
    ref: ref,
    threshold: props.threshold ? props.threshold : 0.2,
  });
  return (
    <Box ref={ref} sx={{ scrollSnapAlign: "center" }}>
      <Fade timeout={750} in={visible}>
        {props.children}
      </Fade>
    </Box>
  );
};
export const Home = () => {
  const gStyles = <GlobalStyles styles={{ body: { overflowX: "hidden" } }} />;

  return (
    <Box>
      {gStyles}
      <Link
        sx={{
          display: "flex",
          margin: "1em",
          marginLeft: "3em",
          marginRight: "3em",
          width: "auto",
          height: "auto",
          justifyContent: "center",
        }}
        href="/"
      >
        <Image
          src={
            "https://ik.imagekit.io/yuoea5uff/pigletpack/piglet_divider_black_-CzRHEEw-.png"
          }
          alt="logo link for Piglet Pack"
          height="169"
          width="1203"
        />
      </Link>
      <MissionStatement
        padding=".5em"
        justifyContent="start"
        minHeight={".7vh"}
      />
      <Divider variant="middle" textAlign="center" light></Divider>
      <FadeComponent>
        <WelcomeMessage />
      </FadeComponent>

      <WhyUs />
    </Box>
  );
};
export default Home;
