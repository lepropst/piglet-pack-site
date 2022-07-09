import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Link from '@mui/material/Link';
import Fade from '@mui/material/Fade';
import GlobalStyles from '@mui/material/GlobalStyles';
import pigletDividerBlack from '../public/piglet_divider_black.png';

import { useIntersectionObserver } from '../utilities/use-intersection-observer';
import { ReactElement, useRef } from 'react';

import Image from 'next/image';

import MissionStatement, {
  MissionStatementContainer,
} from '../components/common/MissionStatement';
import { WhyUs, WelcomeMessageContainer } from '../components/home';
import { getContent } from '../lib/api';

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
    <Box ref={ref} sx={{ scrollSnapAlign: 'center' }}>
      <Fade timeout={750} in={visible}>
        {props.children}
      </Fade>
    </Box>
  );
};
type Props = {
  WelcomeMessageContent: {
    title: string;
    date: string;
    author: { name: string };
    content: string;
  };
  MissionStatementContent: {
    title: string;
    date: string;
    author: { name: string };
    content: string;
  };
};

export const Home = (props: Props) => {
  const gStyles = <GlobalStyles styles={{ body: { overflowX: 'hidden' } }} />;
  const { WelcomeMessageContent, MissionStatementContent } = props;
  console.log(MissionStatementContent);
  return (
    <Box>
      {gStyles}
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
      <FadeComponent>
        <WelcomeMessageContainer content={WelcomeMessageContent.content} />
      </FadeComponent>
      <WhyUs />
    </Box>
  );
};
export default Home;
export const getStaticProps = async () => {
  const WelcomeMessageContent = getContent({
    directory: 'home',
    filename: 'welcome-message.md',
    fields: ['title', 'date', 'author', 'content'],
  });
  const MissionStatementContent = getContent({
    directory: 'common',
    filename: 'mission-statement.md',
    fields: ['title', 'date', 'author', 'content'],
  });

  return {
    props: { WelcomeMessageContent, MissionStatementContent },
  };
};
