import { CardContent } from '@mui/material';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Markdown from 'markdown-to-jsx';
import Slide from '../common/Slide';

export type Props = {
  sections: { title: string; content: string }[];
};
export function Layout(props: Props) {
  const SlideObject = (props: { title: string; content: string }) => (
    <Card
      sx={{
        height: '100%',
        display: 'flex',

        overflow: 'auto',
      }}
    >
      <CardContent sx={{ marginX: '3em' }}>
        <Markdown>{props.content}</Markdown>
      </CardContent>
    </Card>
  );

  return (
    <Box
      sx={{
        width: '100%',
        height: '90vh',
        position: 'relative',
      }}
    >
      <Slide slides={props.sections.map((e) => SlideObject(e))} />
    </Box>
  );
}
export default Layout;
