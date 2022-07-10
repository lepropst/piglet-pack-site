import Card from '@mui/material/Card';
import Link from '@mui/material/Link';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
export const Layout = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Typography variant="h2">
          PDFs and links to Google Documents of Piglet Packs policies are below.
        </Typography>
      </Grid>
      <Grid item xs={12} md={6}>
        <Card>
          <CardHeader title="Image kit hosted PDF" />

          <CardContent>
            <Typography variant="body1">
              <a href="https://ik.imagekit.io/yuoea5uff/pigletpack/PigletPolicy_v1_qbQF0Ta9Q.pdf">
                PDF Link
              </a>
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} md={6}>
        <Card>
          <CardHeader title="Google Doc" />
          <CardContent>
            <Link href="https://drive.google.com/drive/folders/1-yzu7y2bxM375Cu5iQ6VJLhp00jg1dD-?usp=sharing">
              Google Drive Link
            </Link>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};
export default Layout;
