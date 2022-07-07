import { Box } from '@mui/material';

export default function Footer() {
  return (
    <Box
      id="footer"
      sx={{
        borderTop: '0.3em solid rgba(238, 149, 224, 0.7)',
        position: 'relative',
        backgroundColor: '$dark',
        width: '100%',
        height: '3em',
        padding: '0.5em',
        marginTop: 'auto',
        marginBottom: 0,
      }}
    >
      © Elias Rangel
    </Box>
  );
}

export { Footer };
