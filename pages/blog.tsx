import { Button, Divider, List, ListItem, Typography } from '@mui/material';
import Container from '@mui/system/Container';
import Head from 'next/head';
import Box from '@mui/system/Box';
import { getAllPostsForHome } from '../lib/api/apiContentful';
import { TypePage } from '../lib/api/types';
import Link from 'next/link';
import { TypeBlogPost, TypeBlogPostFields } from '../lib/api/generated-types';

export type Props = { preview: boolean; allPosts: any[] };
const CustomBlogPosting = (props: { item: TypeBlogPostFields }) => {
  const { item } = props;
  return (
    <ListItem divider>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'start',
          justifyContent: 'start',
        }}
      >
        <Button sx={{ textDecoration: 'none' }}>
          <Link href={`/posts/${item.title}`}>{item.title}</Link>
        </Button>
        <Typography>{item.description}</Typography>
      </Box>
    </ListItem>
  );
};
export default function Blog(props: Props) {
  const heroPost = props.allPosts[0];
  const morePosts = props.allPosts.slice(1);

  return (
    <Container>
      <Head>
        <title>Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <List>
        {props.allPosts.map((e: any, i: number) => (
          <CustomBlogPosting item={e} key={`${e.title}-${i}`} />
        ))}
      </List>
    </Container>
  );
}
export async function getStaticProps({ preview = false }) {
  var allPosts = await getAllPostsForHome(false);
  console.log(allPosts);

  if (allPosts == undefined) allPosts = [];
  return {
    props: { preview, allPosts },
  };
}
