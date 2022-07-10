import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Fade from '@mui/material/Fade';
import { forwardRef, useRef } from 'react';
import Image from 'next/image';
import { useIntersectionObserver } from '../../utilities/use-intersection-observer';
import Markdown from 'markdown-to-jsx';

export interface CommonLayoutPropType {
  text: string[];
}
// eslint-disable-next-line react/display-name
export const CommonLayout = forwardRef(
  (
    props: {
      content: string;
      title: string;
      backgroundColor?: string;
      image?: { src: string; alt: string };
    },
    ref
  ) => {
    const innerRef = useRef<HTMLDivElement>(null);
    const visible = useIntersectionObserver({ root: null, ref: innerRef });

    return (
      <Box
        ref={ref}
        {...props}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          minHeight: '90vh',
          scrollSnapAlign: 'start',
          scrollSnapMargin: '4rem',
          backgroundColor: props.backgroundColor
            ? props.backgroundColor
            : 'inherit',
        }}
      >
        <Box ref={innerRef}>
          <Typography variant="h2">{props.title}</Typography>

          <Fade in={visible} timeout={500}>
            <Box
              sx={{
                marginL: '4rem',
              }}
            >
              <Typography component="div">
                <Markdown>{props.content}</Markdown>
              </Typography>
            </Box>
          </Fade>
          {props.image && <Image src={props.image.src} alt={props.image.alt} />}
        </Box>
      </Box>
    );
  }
);
export default CommonLayout;
