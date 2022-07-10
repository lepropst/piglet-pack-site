import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Link from '@mui/material/Link';
import Fade from '@mui/material/Fade';
import GlobalStyles from '@mui/material/GlobalStyles';
import { useIntersectionObserver } from '../utilities/use-intersection-observer';
import { useMemo, useRef } from 'react';

import Layout from '../components/home';
import { getContent } from '../lib/api';

type Props = {
  welcome_message_01: {
    title: string;
    date: string;
    author: { name: string };
    content: string;
  };
  welcome_message_02: {
    title: string;
    date: string;
    author: { name: string };
    content: string;
  };
  welcome_message_03: {
    title: string;
    date: string;
    author: { name: string };
    content: string;
  };
  why_us_01: {
    title: string;
    date: string;
    author: { name: string };
    content: string;
  };
  why_us_02: {
    title: string;
    date: string;
    author: { name: string };
    content: string;
  };
  why_us_03: {
    title: string;
    date: string;
    author: { name: string };
    content: string;
  };
  why_us_04: {
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
  const {
    welcome_message_01,
    welcome_message_02,
    welcome_message_03,
    why_us_04,
    why_us_03,
    why_us_02,
    why_us_01,
    MissionStatementContent,
  } = useMemo(() => props, [props]);

  const welcomeRef = useRef<HTMLDivElement>(null);
  const initiate_welcome = useIntersectionObserver({
    root: null,
    ref: welcomeRef,
  });
  const whyRef = useRef<HTMLDivElement>(null);
  const initiate_why = useIntersectionObserver({
    root: null,
    ref: welcomeRef,
  });
  return (
    <Layout
      welcome_message_01={welcome_message_01}
      welcome_message_02={welcome_message_02}
      welcome_message_03={welcome_message_03}
      why_us_04={why_us_04}
      why_us_03={why_us_03}
      why_us_02={why_us_02}
      why_us_01={why_us_01}
      MissionStatementContent={MissionStatementContent}
    />
  );
};
export default Home;
export const getStaticProps = async () => {
  const welcome_message_01 = getContent({
    directory: 'home',
    filename: 'welcome-message_01.md',
    fields: ['title', 'date', 'author', 'content'],
  });
  const welcome_message_02 = getContent({
    directory: 'home',
    filename: 'welcome-message_02.md',
    fields: ['title', 'date', 'author', 'content'],
  });
  const welcome_message_03 = getContent({
    directory: 'home',
    filename: 'welcome-message_03.md',
    fields: ['title', 'date', 'author', 'content'],
  });
  const MissionStatementContent = getContent({
    directory: 'common',
    filename: 'mission-statement.md',
    fields: ['title', 'date', 'author', 'content'],
  });
  const why_us_01 = getContent({
    directory: 'home',
    filename: 'why-us_01.md',
    fields: ['title', 'date', 'author', 'content'],
  });
  const why_us_02 = getContent({
    directory: 'home',
    filename: 'why-us_02.md',
    fields: ['title', 'date', 'author', 'content'],
  });
  const why_us_03 = getContent({
    directory: 'home',
    filename: 'why-us_03.md',
    fields: ['title', 'date', 'author', 'content'],
  });
  const why_us_04 = getContent({
    directory: 'home',
    filename: 'why-us_04.md',
    fields: ['title', 'date', 'author', 'content'],
  });

  return {
    props: {
      welcome_message_01,
      welcome_message_02,
      welcome_message_03,
      why_us_01,
      why_us_02,
      why_us_03,
      why_us_04,
      MissionStatementContent,
    },
  };
};
