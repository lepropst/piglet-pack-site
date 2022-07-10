import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Markdown from 'markdown-to-jsx';

export const ServiceCard = (props: {
  item: { title: string; content: any; price: number | string };
}) => {
  const content = props.item.content;
  return (
    <Card raised sx={{ padding: '1em' }}>
      <CardHeader
        title={props.item.title}
        action={
          typeof props.item.price === 'number'
            ? `$${props.item.price}`
            : props.item.price
        }
      />
      <CardContent>
        <Markdown>{content}</Markdown>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
