import { Box, Card, CardContent } from '@mui/material';
import Markdown from 'markdown-to-jsx';

export const Profiles = (props: { eliasProfile: string }) => {
  return (
    <Box>
      <Card>
        <CardContent>
          <Markdown>{props.eliasProfile}</Markdown>
        </CardContent>
      </Card>
    </Box>
  );
};
export default Profiles;
