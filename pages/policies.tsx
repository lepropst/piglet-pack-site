import {
  Card,
  Link,
  CardContent,
  CardHeader,
  Grid,
  Typography,
} from "@mui/material";
import type { NextPage } from "next";

export const PolicyPage: NextPage = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Card>
          <CardContent>
            <Typography>
              PDFs and links to Google Documents of Piglet Packs poolicies are
              below.
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={6}>
        <Card>
          <CardHeader title="PDF" />

          <CardContent>
            <Typography variant="body1">
              <a href="https://ik.imagekit.io/yuoea5uff/pigletpack/PigletPolicy_v1_qbQF0Ta9Q.pdf">
                Click to Open the Piglet Policy
              </a>
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={6}>
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
export default PolicyPage;
