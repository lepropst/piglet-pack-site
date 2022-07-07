import { Fade, Paper, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { useIntersectionObserver } from "../../utilities/use-intersection-observer";
import { forwardRef, useRef } from "react";
const reference =
  "“Disability Impacts All of Us Infographic.” Centers for Disease Control and Prevention, Centers for Disease Control and Prevention, 16 Sept. 2020, https://www.cdc.gov/ncbddd/disabilityandhealth/infographic-disability-impacts-all.html.";

// eslint-disable-next-line react/display-name
export const MinorityMessage = forwardRef((props, ref) => {
  const innerRef = useRef<HTMLDivElement>(null);
  const initiate = useIntersectionObserver({ root: null, ref: innerRef });
  return (
    <Box ref={ref} {...props}>
      <Typography variant="h2" sx={{ marginY: "2rem" }}>
        We offer our services in an extremely flexible manner because we believe
        accessibility to any service should never be limited.
      </Typography>
      <Fade in={true} ref={innerRef} timeout={1000}>
        <Typography marginBottom="1rem" variant="h4">
          A significant minority that does not have an active voice in the
          development of business services available to the public. There are
          standards, conventions, many resources for businesses to utilize when
          creating new products. Unfortunately, especially for many start ups or
          small businesses, the accessibility of these resources itself is an
          issue. We strive to increase the accessibility of the tools necessary
          to ensure that new products and services themselves consider
          disability struggles efficiently.
        </Typography>
      </Fade>
      {/* <Fade in={initiate} timeout={1500}>
        <Paper sx={{ paddingX: "1em" }}>
          <blockquote cite={reference}>
            Twenty six percent of the United States population lives with a
            disability.
          </blockquote>
          <figcaption>
            <cite>{reference}</cite>
          </figcaption>
        </Paper>
      </Fade> */}
      <Box />
    </Box>
  );
});
export default MinorityMessage;
