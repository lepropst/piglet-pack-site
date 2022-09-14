import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { ReactNode, useState } from 'react';
import { useTheme } from '../../utilities/styling';

export function Slide(props: Props) {
  const [visible, setVisible] = useState<number>(0);
  const { colorMode, theme } = useTheme();
  const increment = () => {
    setVisible(visible + 1);
  };
  const decrement = () => {
    setVisible(visible - 1);
  };
  const getCurrentSlide = () => {
    const currentSlide = props.slides[visible];
    return currentSlide;
  };
  console.log(visible);
  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
        bottom: 0,
        margin: 'auto',
        '&::before': {
          position: 'fixed',
          content: '""',
          zIndex: -1,
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          opacity: 0.25,
        },
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Box sx={{ height: '95%' }}>{getCurrentSlide()}</Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-evenly',
          margin: '.5em',
          botttom: 0,
          height: '5%',
        }}
      >
        <Button
          variant="contained"
          color="success"
          onClick={decrement}
          disabled={visible === 0}
        >
          Previous
        </Button>

        <Button
          variant="contained"
          color="success"
          onClick={increment}
          disabled={visible >= props.slides.length - 1}
        >
          Next
        </Button>
      </Box>
    </Box>
  );
}
export type Props = { slides: ReactNode[] };
export default Slide;
