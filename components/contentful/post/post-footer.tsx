import { Typography } from '@mui/material';
import Box from '@mui/system/Box';

export default function PostFooter(props: { author: string }) {
  return (
    <Box>
      <Typography>{props.author}</Typography>
    </Box>
  );
}
