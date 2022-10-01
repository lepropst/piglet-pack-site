import React from 'react';
import ErrorPage from 'next/error';

import { getPostAndMorePosts } from '../../lib/api/apiContentful';
import { isPreviewEnabled } from '../../lib/api/preview';

import { TypeBlogPostFields } from '../../lib/api/generated-types';
import Post from '../../components/contentful/post';

type LandingProps = {
  page: TypeBlogPostFields;
};

export default function Landing({ page }: LandingProps) {
  if (!page) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <div className="w-full pb-16 lg:pb-24">
      <Post page={page} />
    </div>
  );
}

export const getServerSideProps = async (props: {
  params: { slug: string };
  query: any;
}) => {
  const { params, query } = props;
  const slug = String(params?.slug ?? '/');
  const preview = isPreviewEnabled(query);
  const pageAndMore = await getPostAndMorePosts(slug, preview);

  return {
    props: { page: pageAndMore.post },
  };
};
