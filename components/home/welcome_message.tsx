import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useIntersectionObserver } from '../../utilities/use-intersection-observer';
import { Tab } from '../../utilities/tab';
import Paper from '@mui/material/Paper';
import { forwardRef, useEffect, useRef, useState } from 'react';
import { GlobalStyles, Slide } from '@mui/material';
import Markdown from 'markdown-to-jsx';

// eslint-disable-next-line react/display-name
export const WelcomeMessageContainer = forwardRef(
  (props: { content: string }, ref) => {
    const innerRef = useRef<HTMLDivElement>(null);
    const initiate = useIntersectionObserver({
      root: null,
      ref: innerRef,
      threshold: 0.2,
    });
    let fadeIn = false;
    fadeIn = initiate ? true : fadeIn === initiate ? false : true;

    const CustomMarkdownComponent = (props: {
      children: any;
      i: number;
      rest: any;
    }) => {
      const { children, i, rest } = props;
      return (
        <Slide
          {...rest}
          timeout={500 * i + 1}
          direction={i % 1 ? 'left' : 'right'}
          in={fadeIn}
        >
          <Paper
            elevation={3}
            sx={{
              padding: '1em',
              marginY: '2rem',
              borderRadius: '.8em',
              width: '80%',
              backgroundColor: '#FFFFFF',
            }}
          >
            <Tab />
            {children}
          </Paper>
        </Slide>
      );
    };
    return (
      <Box id="welcome" ref={ref} sx={{ position: 'relative' }}>
        <Box
          ref={innerRef}
          sx={{
            display: 'flex',
            alignContent: 'start',
            flexDirection: 'column',
            minHeight: '0.8vh',
          }}
        >
          {props.content && <Markdown>{props.content}</Markdown>}
          {/* <Slide timeout={500} direction="right" in={fadeIn}>
            <Paper
              elevation={3}
              sx={{
                padding: '1em',
                marginY: '2rem',
                borderRadius: '.8em',
                width: '80%',
                backgroundColor: '#FFFFFF',
              }}
            >
              <Typography variant="h5">
                <Tab />
                Piglet pack provides essential english and technological
                services. Our expertise allow us to offer well defiined
                services, as well as assess independent and unique situations to
                advise or act on what we can do accordingly.
              </Typography>
            </Paper>
          </Slide>
          <Slide timeout={1000} direction="left" in={fadeIn}>
            <Paper
              elevation={3}
              sx={{
                padding: '1em',
                marginY: '2rem',
                borderRadius: '.8em',
                width: '80%',
                alignSelf: 'flex-end',
                backgroundColor: '#FFFFFF',
              }}
            >
              <Typography variant="h5">
                <Tab />
                Foundations in advocacy, education, and a desire to build
                communities leads us in providing accessible and unique services
                tailored for each client. Consistent communication
              </Typography>
            </Paper>
          </Slide>
          <Slide timeout={1500} direction="right" in={fadeIn}>
            <Paper
              elevation={3}
              sx={{
                padding: '1em',
                marginY: '2rem',
                borderRadius: '.8em',
                width: '80%',
                backgroundColor: '#FFFFFF',
              }}
            >
              <Typography variant="h5">
                <Tab />
                We strive to relieve the work that is required when using the
                plethora of technnologies available to small business. Web
                development and initial site creation is only one side of our
                specialties. We are also able to masnage, advise upon, and
                deploy third party or custom services including serverless or
                SaaS platform services.
              </Typography>
            </Paper>
          </Slide> */}
        </Box>
      </Box>
    );
  }
);
export default WelcomeMessageContainer;
