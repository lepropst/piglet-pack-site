import { GlobalStyles } from '@mui/material';
import Typography from '@mui/material/Typography';
import Fade from '@mui/material/Fade';
import Box, { BoxTypeMap } from '@mui/material/Box';
import Image from 'next/image';
import MissionStatementContainer from '../common/MissionStatement';
import CommonLayout from './commonLayout';
import Profiles from './profiles';
import { useRef } from 'react';
import Markdown from 'markdown-to-jsx';
export type Props = {
  MissionStatementContent: {
    title: string;
    date: string;
    content: string;
  };
  whatWeDo: {
    title: string;
    date: string;
    content: string;
  };
  whoWeAre: {
    title: string;
    date: string;
    content: string;
  };
  whyWeDoIt: {
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
    eliasProfile,
    whoWeAre,
    whatWeDo,
    whyWeDoIt,
    image,
    MissionStatementContent,
    minorityMessage,
  } = props;
  const WhoWeAre = () => (
    <CommonLayout content={whoWeAre.content} title={whoWeAre.title} />
  );
  const WhatWeDo = () => (
    <CommonLayout content={whatWeDo.content} title={whatWeDo.title} />
  );
  const WhyWeDoIt = () => (
    <CommonLayout content={whyWeDoIt.content} title={whyWeDoIt.title} />
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

      <WhoWeAre />

      <WhatWeDo />

      <WhyWeDoIt />

      <Box
        sx={{
          height: '2px',
          background: 'black',
          width: '80vw',
          marginX: 'auto',
        }}
      />
      {/* <MinorityMessage /> */}
      <Profiles eliasProfile={eliasProfile} />
    </Box>
  );
};

export default Layout;
