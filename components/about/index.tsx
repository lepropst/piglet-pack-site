import { GlobalStyles } from '@mui/material';
import Typography from '@mui/material/Typography';

import Box from '@mui/material/Box';
import Image from 'next/image';
import MissionStatementContainer from '../common/MissionStatement';
import CommonLayout from './commonLayout';
import Markdown from 'markdown-to-jsx';
export type Props = {
  MissionStatementContent: {
    title: string;
    date: string;
    content: string;
  };
  whoIAm: {
    title: string;
    date: string;
    content: string;
  };
  whatIDo: {
    title: string;
    date: string;
    content: string;
  };
  whyIDoIt: {
    title: string;
    date: string;
    content: string;
  };

  minorityMessage: {
    title: string;
    content: string;
  };
  image: string | null;
  eliasProfile: string;
};
export const Layout = (props: Props) => {
  const {
    whoIAm,
    whatIDo,
    whyIDoIt,
    image,
    MissionStatementContent,
    minorityMessage,
  } = props;
  const WhoIAm = () => (
    <CommonLayout content={whoIAm.content} title={whoIAm.title} />
  );
  const WhatIDo = () => (
    <CommonLayout content={whatIDo.content} title={whatIDo.title} />
  );
  const WhyIDoIt = () => (
    <CommonLayout content={whyIDoIt.content} title={whyIDoIt.title} />
  );
  const MinorityMessage = (props: any) => {
    return (
      <Box {...props}>
        <Typography variant="h4" sx={{ marginY: '1em', textAlign: 'center' }}>
          {minorityMessage.title}
        </Typography>
        <Typography component={'div'}>
          <Markdown>{minorityMessage.content}</Markdown>
        </Typography>

        <Box />
      </Box>
    );
  };
  const inputGlobalStyles = (
    <GlobalStyles
      styles={{
        html: { 'scroll-snap-type': 'y proximity' },
      }}
    />
  );
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: 'auto',
        alignItems: 'center',
      }}
    >
      <h1 style={{ textAlign: 'center' }}>
        About Piglet Pack
        <br /> Web Development and Design
      </h1>
      {inputGlobalStyles}

      <WhoIAm />

      <WhatIDo />

      <WhyIDoIt />

      <Box
        sx={{
          height: '2px',
          background: 'black',
          width: '80vw',
          marginX: 'auto',
        }}
      />
      <MissionStatementContainer
        content={MissionStatementContent.content}
        minHeight={'60vh'}
        xOffset={1}
        transition
      >
        {image !== null && (
          <Image
            src={image}
            alt="piglet pack logo"
            height="200px"
            width="200px"
          />
        )}
      </MissionStatementContainer>

      <MinorityMessage />
    </Box>
  );
};

export default Layout;
