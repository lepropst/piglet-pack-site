import { Card, CardContent, CardHeader } from '@mui/material';
import Box from '@mui/material/Box';

import Grid from '@mui/material/Grid';

import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Markdown from 'markdown-to-jsx';

type Props = {
  websiteServices: { title: string; price: string; content: string }[];
  serverServices: { title: string; price: string; content: string }[];
  projectServices: { title: string; price: string; content: string }[];
};
export const Layout = (props: Props) => {
  const { websiteServices, serverServices, projectServices } = props;
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginY: '3em',
      }}
    >
      <Box sx={{ margin: '5em' }}>
        <Typography variant="body1">
          Each category of service is listed below. Every category address a
          specific area of concern or time specific needs.
        </Typography>
      </Box>
      <Paper
        elevation={4}
        sx={{
          textAlign: 'center',
          paddingLeft: '2em',
          paddingRight: '2em',
          margin: '2em',
          backgroundColor: 'secondary.main',
        }}
      >
        <Typography variant="h5">Recurring Services</Typography>
      </Paper>
      <Grid container direction="row" spacing={2}>
        <Grid
          item
          xs={12}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            backgroundImage:
              'linear-gradient(to left, rgba(29, 124, 181, .05), rgba(29, 181, 163,.3))',
          }}
        >
          <Typography variant="body1">For Websites</Typography>
        </Grid>

        {props.websiteServices.map((e, i) => (
          <Grid item xs={12} md={4} key={`${e.title}-${i}`}>
            <Card raised sx={{ padding: '1em' }}>
              <CardHeader
                title={e.title}
                action={typeof e.price === 'number' ? `$${e.price}` : e.price}
              />
              <CardContent>
                <Markdown>{e.content}</Markdown>
              </CardContent>
            </Card>
          </Grid>
        ))}

        <Grid item xs={12}>
          <Paper sx={{ padding: '1em' }}>
            All these service come with a flexibility gurantee. If you do not
            see what you are looking for, or would like to request anything
            specific: send us a qoute!
            <div style={{ height: '2em' }} />
            We are able to accommodate most situations and our services always
            come with a service plan so we can transparently work with our
            clients.
          </Paper>
          <div
            style={{
              height: '2em',
              border: '1px solid top',
              width: '100%',
            }}
          />
        </Grid>

        <Grid
          item
          xs={12}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            backgroundImage:
              'linear-gradient(to left, rgba(29, 124, 181, .05), rgba(29, 181, 163,.3))',
          }}
        >
          <Typography variant="body1">For Servers</Typography>
        </Grid>
        {serverServices.map((e, i) => (
          <Grid item xs={12} md={4} key={`${e.title}-${i}`}>
            <Card raised sx={{ padding: '1em' }}>
              <CardHeader
                title={e.title}
                action={typeof e.price === 'number' ? `$${e.price}` : e.price}
              />
              <CardContent>
                <Markdown>{e.content}</Markdown>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Typography variant="h5">Project Based Services</Typography>

      <Grid
        spacing={2}
        justifyContent="center"
        direction="row"
        container
        alignItems="stretch"
      >
        {projectServices.map((e, i) => (
          <Grid item xs={12} md={4} key={`${e.title}-${i}`}>
            <Card raised sx={{ padding: '1em' }}>
              <CardHeader
                title={e.title}
                action={typeof e.price === 'number' ? `$${e.price}` : e.price}
              />
              <CardContent>
                <Markdown>{e.content}</Markdown>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
export default Layout;
