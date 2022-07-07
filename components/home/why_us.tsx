import { Paper, Slide, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { useIntersectionObserver } from "../../utilities/use-intersection-observer";
import { Tab } from "../../utilities/tab";
import { forwardRef, useEffect, useRef } from "react";

// eslint-disable-next-line react/display-name
export const WhyUs = forwardRef((props, ref) => {
  const innerRef = useRef<HTMLDivElement>(null);
  const initiate = useIntersectionObserver({
    root: null,
    ref: innerRef,
    threshold: 0.2,
  });
  let fadeIn = false;
  fadeIn = initiate ? true : fadeIn === initiate ? false : true;

  return (
    <Box id="whyus" {...props} ref={ref}>
      <Box
        ref={innerRef}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignContent: "center",
          minHeight: "0.8vh",
        }}
      >
        <Typography variant="h2">Why Piglet Pack?</Typography>
        <Slide timeout={500} direction="left" in={fadeIn}>
          <Paper
            elevation={3}
            sx={{
              padding: "1em",
              marginY: "1em",
              borderRadius: ".8em",

              width: "80%",
              alignSelf: "flex-end",
            }}
          >
            <Typography variant="h5">
              <Tab />
              We provide end to end coverage of practically any digital service.
              Piglet Pack can advise on the growth and scalability of digital
              service orchestration for efficient business practices. While we
              maintain experience in a wide array of web technologies, we can
              advise and provide solutions involving technologies not directly
              listed in our services page as well. Our services include service
              plans which can be purchased to manage the implementation of a
              planned digital service structure, or Piglet Pack can manage it
              all providing a single source of information and management for
              clients digital services.
            </Typography>
          </Paper>
        </Slide>
        <Slide timeout={1000} direction="right" in={fadeIn}>
          <Paper
            elevation={3}
            sx={{
              padding: "1em",
              marginY: "1em",
              borderRadius: ".8em",
              width: "80%",
              alignSelf: "flex-start",
            }}
          >
            <Typography variant="h5">
              <Tab />
              There are many factors when conducting an online presence. From
              choosing browsers/devices, business software choices, to username
              choices. Creating or managing a website introduces a slew of
              time-consuming tasks, especially for beginning content creators.
              Performing these tasks, learning new technologies, can all add
              complexity to maintaining an online presence. Making a choice to
              give up any amount of control can be concerning as well! A
              conundrum Piglet Pack can help with.
            </Typography>
          </Paper>
        </Slide>
        <Slide timeout={1500} direction="left" in={fadeIn}>
          <Paper
            elevation={3}
            sx={{
              padding: "1em",
              marginY: "1em",
              borderRadius: ".8em",
              width: "80%",
              alignSelf: "flex-end",
            }}
          >
            <Typography variant="h5">
              <Tab />
              Our services revolve around the idea that we provide only what our
              client needs. Our service plans and contracts are completely
              dynamic. This means that we can perform services as small as
              guidance, so that the client retains the most control and manages
              most aspects of the service. We can also completely set up and
              manage digital services so that the client can request any
              technology stack, but never have to get in the nitty gritty.
            </Typography>
          </Paper>
        </Slide>

        <Paper
          elevation={3}
          sx={{
            padding: "2em",
            marginY: "20vh",
            borderRadius: ".9em",
            width: "100%",
            alignSelf: "center",
            textAlign: "center",
            backgroundColor: "#FFFFFF",
          }}
        >
          <Typography variant="h4">
            Piglet Pack grew out of a desire the founders had to provide for
            themselves while pursuing their education. Our motivation to remain
            accessible and flexible stems from real world experience where it is
            evident that many people require much more care than are given. We
            strive to make choosing Piglet Pack an easy choice by being an easy
            choice.
          </Typography>
        </Paper>
      </Box>
    </Box>
  );
});
export default WhyUs;
