import { SxProps, Theme } from '@mui/material';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Markdown from 'markdown-to-jsx';
import { ReactNode } from 'react';
import { Link } from 'react-router-dom';

export const MissionStatementContainer = (props: {
  content: string;
  snap?: boolean;
  minHeight?: number | string;
  snapAlign?: 'start' | 'end' | 'center';
  backgroundColor?: string;
  transition?: boolean;
  xOffset?: number;
  padding?: string;
  justifyContent?: string;
  children?: ReactNode;
}) => {
  const styles: SxProps<Theme> = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: props.justifyContent || 'center',
    alignItems: 'center',
    textAlign: 'center',
    maxWidth: '30rem',
    padding: props.padding || '1em',
    marginX: 'auto',
    minHeight: props.minHeight ? props.minHeight : window.innerHeight * 0.9,
    backgroundColor: props.backgroundColor ? props.backgroundColor : 'inherit',
  };
  // if(props.xOffset) {
  //   styles.
  // }
  if (props.snap) {
    styles.scrollSnapAlign = props.snapAlign ? props.snapAlign : 'end';
    styles.scrollSnapMargin = '2rem';
  }

  return (
    <Box sx={styles}>
      <Markdown>{props.content}</Markdown>

      {props.children && props.children}
    </Box>
  );
};

export default MissionStatementContainer;
