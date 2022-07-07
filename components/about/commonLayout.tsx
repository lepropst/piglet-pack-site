import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Fade from "@mui/material/Fade";
import { forwardRef, useEffect, useRef, useState } from "react";
import { useIntersectionObserver } from "../../utilities/use-intersection-observer";

export interface CommonLayoutPropType {
  text: string[];
}
// eslint-disable-next-line react/display-name
export const CommonLayout = forwardRef(
  (props: { text: string[]; title: string; backgroundColor?: string }, ref) => {
    const innerRef = useRef<HTMLDivElement>(null);
    const visible = useIntersectionObserver({ root: null, ref: innerRef });

    return (
      <Box
        ref={ref}
        {...props}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          minHeight: "0.9vh",
          scrollSnapAlign: "start",
          scrollSnapMargin: "4rem",
          backgroundColor: props.backgroundColor
            ? props.backgroundColor
            : "inherit",
        }}
      >
        <Box ref={innerRef}>
          <Typography variant="h2">{props.title}</Typography>

          <Fade in={visible} timeout={500}>
            <Box
              sx={{
                marginL: "4rem",
              }}
            >
              {props.text.length > 1 &&
                props.text.map((e, i) => (
                  <Fade key={`${e}-${i}-text`} in={visible} timeout={1000 * i}>
                    <Typography variant="h5" marginBottom="1.5rem">
                      {e}
                    </Typography>
                  </Fade>
                ))}
            </Box>
          </Fade>
        </Box>
      </Box>
    );
  }
);
export default CommonLayout;
