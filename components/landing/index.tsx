import CardContent from '@mui/material/CardContent';

import Container from '@mui/material/Card';

import Card from '@mui/material/Card';

import Markdown from 'markdown-to-jsx';

export type Props = {
  section: { title: string; content: string };
};
export function Layout(props: Props) {
  return (
    <Container
      sx={{
        width: '100%',

        position: 'relative',
      }}
    >
      <Card
        sx={{
          position: 'relative',
          height: '100%',
          display: 'flex',
          overflow: 'auto',
        }}
      >
        <CardContent sx={{ marginX: '3em' }}>
          <Markdown>{props.section.content}</Markdown>
        </CardContent>
      </Card>
    </Container>
  );
}
export default Layout;
