import {
  Divider,
  GlobalStyles,
  Box,
  Link,
  Grow,
  Paper,
  Typography,
} from '@mui/material';
import Markdown from 'markdown-to-jsx';
import Image from 'next/image';
import { useRef } from 'react';
import useIntersectionObserver from '../../utilities/use-intersection-observer';
import MissionStatementContainer from '../common/MissionStatement';
import pigletDividerBlack from '../../public/piglet_divider_black.png';

type Props = {
  MissionStatementContent: {
    title: string;
    content: string;
    author: { name: string };
    date: string;
  };
  welcome_message_01: {
    title: string;
    content: string;
    author: { name: string };
    date: string;
  };
  welcome_message_02: {
    title: string;
    content: string;
    author: { name: string };
    date: string;
  };
  welcome_message_03: {
    title: string;
    content: string;
    author: { name: string };
    date: string;
  };
  why_us_01: {
    title: string;
    content: string;
    author: { name: string };
    date: string;
  };
  why_us_02: {
    title: string;
    content: string;
    author: { name: string };
    date: string;
  };
  why_us_03: {
    title: string;
    content: string;
    author: { name: string };
    date: string;
  };
  why_us_04: {
    title: string;
    content: string;
    author: { name: string };
    date: string;
  };
};

const PageBanner = ({
  MissionStatementContent,
}: {
  MissionStatementContent: { content: string };
}) => (
  <>
    <h1 style={{ textAlign: 'center' }}>
      Piglet Pack Web Development and Design
    </h1>
    <Link
      sx={{
        display: 'flex',
        margin: '1em',
        marginLeft: '3em',
        marginRight: '3em',
        width: 'auto',
        height: 'auto',
        justifyContent: 'center',
      }}
      href="/"
    >
      <Image
        src={pigletDividerBlack}
        alt="logo links for Piglet Pack"
        height="169"
        width="1203"
      />
    </Link>
    <MissionStatementContainer
      padding=".5em"
      justifyContent="start"
      minHeight={'.7vh'}
      content={MissionStatementContent.content}
    />
    <Divider variant="middle" textAlign="center" light></Divider>
  </>
);
export const Layout = (props: Props) => {
  const {
    MissionStatementContent,
    welcome_message_01,
    welcome_message_02,
    welcome_message_03,
    why_us_01,
    why_us_02,
    why_us_03,
    why_us_04,
  } = props;
  const gStyles = <GlobalStyles styles={{ body: { overflowX: 'hidden' } }} />;
  const welcomeRef = useRef<HTMLDivElement>(null);
  const initiate_welcome = useIntersectionObserver({
    root: null,
    ref: welcomeRef,
  });

  return (
    <main>
      {gStyles}
      <section>
        <PageBanner MissionStatementContent={MissionStatementContent} />
      </section>

      <Box ref={welcomeRef}>
        <Grow
          in={initiate_welcome}
          {...(initiate_welcome ? { timeout: 1000 } : {})}
        >
          <Box
            sx={{
              display: 'flex',
              alignContent: 'start',
              flexDirection: 'column',

              minHeight: '0.8vh',
            }}
          >
            <Paper
              elevation={1}
              sx={{
                padding: '1em',
                marginY: '1rem',
                borderRadius: '.8em',
                width: '80%',
                backgroundColor: '#FFFFFF',
              }}
            >
              <Typography component="div">
                <Markdown>{welcome_message_01.content}</Markdown>
              </Typography>
            </Paper>
            <Paper
              elevation={1}
              sx={{
                padding: '1em',
                marginY: '1rem',
                borderRadius: '.8em',
                width: '80%',
                alignSelf: 'flex-end',
                backgroundColor: '#FFFFFF',
              }}
            >
              <Typography component="div">
                <Markdown>{welcome_message_02.content}</Markdown>
              </Typography>
            </Paper>

            <Paper
              elevation={1}
              sx={{
                padding: '1em',
                marginY: '1rem',
                borderRadius: '.8em',
                width: '80%',
                backgroundColor: '#FFFFFF',
              }}
            >
              <Typography component="div">
                <Markdown>{welcome_message_03.content}</Markdown>
              </Typography>
            </Paper>
          </Box>
        </Grow>
      </Box>
      <Box id="whyus">
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignContent: 'center',
            minHeight: '0.8vh',
          }}
        >
          <Typography variant="h2">Why Piglet Pack?</Typography>
          <Paper
            elevation={3}
            sx={{
              padding: '1em',
              marginY: '1em',
              borderRadius: '.8em',

              width: '80%',
              alignSelf: 'flex-end',
            }}
          >
            <Typography component="div">
              <Markdown>{why_us_01.content}</Markdown>
            </Typography>
          </Paper>
          <Paper
            elevation={3}
            sx={{
              padding: '1em',
              marginY: '1em',
              borderRadius: '.8em',
              width: '80%',
              alignSelf: 'flex-start',
            }}
          >
            <Typography component="div">
              <Markdown>{why_us_02.content}</Markdown>
            </Typography>
          </Paper>
          <Paper
            elevation={3}
            sx={{
              padding: '1em',
              marginY: '1em',
              borderRadius: '.8em',
              width: '80%',
              alignSelf: 'flex-end',
            }}
          >
            <Typography component="div">
              <article>
                <Markdown>{why_us_03.content}</Markdown>
              </article>
            </Typography>
          </Paper>

          <Paper
            elevation={3}
            sx={{
              padding: '2em',
              marginY: '20vh',
              borderRadius: '.9em',
              width: '100%',
              alignSelf: 'center',
              textAlign: 'center',
              background: 'white',
            }}
          >
            <Typography component="div">
              <article>
                <Markdown>{why_us_04.content}</Markdown>
              </article>
            </Typography>
          </Paper>
        </Box>
      </Box>
    </main>
  );
};
export default Layout;
