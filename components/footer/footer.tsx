import { Box, Button } from '@mui/material';

export default function Footer() {
  return (
    <footer
      id="footer"
      style={{
        borderTop: '0.3em solid rgba(238, 149, 224, 0.7)',
        position: 'relative',
        backgroundColor: '$dark',
        width: '100%',
        height: '3em',
        padding: '0.5em',
        marginTop: 'auto',
        marginBottom: 0,
        display: 'flex',
        justifyContent: 'space-around',
      }}
    >
      © Elias Rangel
      <Button
        variant="outlined"
        onClick={(e) => {
          e.preventDefault();
          document.body.scrollTop = 0; // For Safari
          document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
        }}
      >
        Back to Top
      </Button>
    </footer>
  );
}

export { Footer };
