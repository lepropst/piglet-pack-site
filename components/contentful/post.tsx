import { CardActionArea, CardContent } from '@mui/material';
import Card from '@mui/material/Card';
import { TypeBlogPostFields } from '../../lib/api/generated-types';
import PostBody from './post/post-body';
import PostFooter from './post/post-footer';
import { PostHeader } from './post/post-header';

export default function Post(props: { page: any }) {
  const { title, dateCreated, content, author } = props.page;
  return (
    <Card>
      <PostHeader
        coverImage={props.page.coverImage ? props.page.coverImage : null}
        title={title ? title : ''}
        date={dateCreated ? dateCreated : ''}
      />
      <CardContent>
        <PostBody content={content} />
        <PostFooter author={author.name}></PostFooter>
      </CardContent>
    </Card>
  );
}
