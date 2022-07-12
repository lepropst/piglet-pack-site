import { CardActions, Theme } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Collapse from '@mui/material/Collapse';
import useMediaQuery from '@mui/material/useMediaQuery';
import Markdown from 'markdown-to-jsx';
import { useState } from 'react';
import ExpandMore from './ExpandMoreIcon';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

type Props = {
  content: string;
  description: string;
  title: string;
  price: string | number;
};
export function ContentCard(props: Props) {
  const [expanded, setExpanded] = useState(false);

  const matches = useMediaQuery((theme: Theme) => {
    return theme.breakpoints.down('sm');
  });

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card raised sx={{ padding: '1' }}>
      <CardHeader
        title={props.title}
        action={
          typeof props.price === 'number' ? `$${props.price}` : props.price
        }
      />

      {matches && (
        <CardActions disableSpacing>
          {!expanded && (
            <Markdown style={{ height: '3em', overflow: 'expandOnClick' }}>
              {props.description}
            </Markdown>
          )}

          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
      )}

      {matches && (
        <>
          <CardContent onClick={() => setExpanded(!expanded)}>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <Markdown>{props.content}</Markdown>{' '}
            </Collapse>
          </CardContent>
        </>
      )}
      {!matches && (
        <CardContent>
          <Markdown>{props.content}</Markdown>
        </CardContent>
      )}
    </Card>
  );
}
export default ContentCard;
