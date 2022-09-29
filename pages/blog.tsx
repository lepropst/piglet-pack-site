import { Button, Typography } from '@mui/material';
import Container from '@mui/system/Container';
import Head from 'next/head';
import Box from '@mui/system/Box';
import {
  StoryblokComponent,
  getStoryblokApi,
  apiPlugin,
  storyblokInit,
  Story,
} from '@storyblok/react';
import { getPagesOfType } from '../lib/api/apiContentful';
import { TypePage } from '../lib/api/types';
import Link from 'next/link';

export type Props = { preview: boolean; allPosts: any[] };
const CustomBlogPosting = (props: { item: TypePage }) => {
  const { item } = props;
  return (
    <Box sx={{ display: 'flex', flexDirection: 'row' }}>
      <Button sx={{ textDecoration: 'none' }}>
        <Link href={`/posts/${item.fields.title}`}>{item.fields.title}</Link>
      </Button>
    </Box>
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

      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        {props.allPosts.map((e: TypePage, i: number) => (
          <CustomBlogPosting item={e} key={`${e.fields.title}-${i}`} />
        ))}
      </Box>
    </Container>
  );
}
export async function getStaticProps({ preview = false }) {
  var allPosts = await getPagesOfType({
    pageContentType: 'blogPost',
  });
  allPosts.map((e) => console.log(e.fields.title));

  if (allPosts == undefined) allPosts = [];
  return {
    props: { preview, allPosts },
  };
}
