import { Card, CardContent, CardHeader } from '@mui/material';
import Box from '@mui/material/Box';

import Grid from '@mui/material/Grid';

import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { flexbox } from '@mui/system';
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
      <Grid container direction="row" spacing={2} justifyContent="center">
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
          <Typography variant="h6">For Websites</Typography>
        </Grid>
        <Grid item xs={12}>
          <Card>
            <CardHeader title="Single Page Website Special!" action="$250" />
            <CardContent>
              Single page static or Wordpress websites are offered as an
              independent service. We can design a full page for single-page
              website, or simply add an extra page to your existing site.
              <div style={{ height: '1em' }} />
              Often creating a static single-page website is ideal for events,
              weddings, or other important events. With our services you can
              specify any design or visual effect and keep the code for use
              later!
              <div style={{ height: '1em' }} />
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <ul style={{ margin: 0, padding: 0 }}>
                  <li>Basic SEO Optimization</li>
                  <li>Security Monitoring</li>
                  <li>Basic Malware Removal</li>
                  <li>Monitoring Errors and Outages</li>
                  <li>Software update and function checks</li>
                  <li>Cloud Backups</li>
                  <li>Custom Recurring Requests</li>
                </ul>
                <ul>
                  <li>2 hours website support</li>
                  <li>Staff phone support</li>
                  <li>Updates and minor additions</li>
                  <li>Web Developer Assistance</li>
                  <li>Mobile Optimization</li>
                  <li>Design Optimization</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </Grid>
        {websiteServices.map((e, i) => (
          <Grid
            item
            xs={12}
            md={i === Object.keys(websiteServices).length - 1 ? 12 : 6}
            lg={4}
            key={`${e.title}-${i}`}
          >
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
            <Typography component="div">
              All these service come with a flexibility guarantee. If you do not
                see what you are looking for, or would like to request anything
              specific: send us an email!
              <div style={{ height: '2em' }} />
              We are able to accommodate most situations and our services always
              come with a service plan so we can transparently work with our
              clients.
            </Typography>
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
          <Typography variant="h6">For Servers</Typography>
        </Grid>

        {serverServices.map((e, i) => (
          <Grid
            item
            xs={12}
            md={
              i % 2 === 0 && i === Object.keys(serverServices).length - 1
                ? 12
                : 6
            }
            lg={4}
            key={`${e.title}-${i}`}
            sx={{ height: '100%' }}
          >
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
          <Typography variant="h6" component="div">
            Our services are meant to make life easier. Whether you want a
            completely custom set up, a content management system, or to manage
            a cloud drive we have experience in a versatile array of languages.
            There are many instances from hobby projects, to small business
            infrastructure, that may require the hosting or ownership of a
            server. We can help simplify the process of implementing most server
            and server-less infrastructure. Our experience in content management
            systems, static website servers, and APIs make our services suitable
            to enable you to host on or off premise.
            <div style={{ height: '1em' }} />
            We Maintain experience in
            <div style={{ display: 'flex' }}>
              <ul>
                <li>Django</li>
                <li>Express</li>
                <li>Flask</li>
                <li>NextJs</li>
                <li>NuxtJs</li>
                <li>Wordpress</li>
              </ul>

              <ul>
                <li>NestJs</li>
                <li>Shopify</li>
                <li>Wix</li>
                <li>Material-ui (Googles UI Framework)</li>
                <li>SQL and No SQL Databases</li>
              </ul>
            </div>
          </Typography>
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
          <Typography variant="h6">Audits</Typography>
        </Grid>
        {projectServices.map((e, i) => (
          <Grid item xs={12} md={6} lg={4} key={`${e.title}-${i}`}>
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

      <Grid
        spacing={2}
        justifyContent="center"
        direction="row"
        container
        alignItems="stretch"
      ></Grid>
    </Box>
  );
};
export default Layout;
