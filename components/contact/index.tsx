import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { useRef, MouseEventHandler } from 'react';
import ContactForm from './contact_form';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  margin: '1em',
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
const EmailLink = styled(Typography)(({ theme }) => ({
  ...theme.typography.h5,
  '&:hover': {
    textDecoration: 'underline',
  },
}));
const emailText = 'pigletpack@protonmail.com';

export const Layout = () => {
  const emailRef = useRef<HTMLAnchorElement>(null);
  const emailClickHandler: MouseEventHandler<HTMLAnchorElement> = (event) => {
    event.preventDefault();
    const el = emailRef.current;
    if (!el) {
      return null;
    } else {
      navigator.clipboard.writeText(emailText);
      alert('Copied the text: ' + emailText);
      return true;
    }
  };
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Item>
          <EmailLink onClick={emailClickHandler}>{emailText}</EmailLink>
        </Item>
      </Grid>
      <Grid item xs={12}>
        You can email us at the above address, or submit a form directly below!
      </Grid>
      <Grid xs={12} item>
        <Item>
          <ContactForm />
        </Item>
      </Grid>
    </Grid>
  );
};
export default Layout;
