import React from 'react';
import ErrorPage from 'next/error';

import { getPage } from '../../lib/api/apiContentful';
import { isPreviewEnabled } from '../../lib/api/preview';
import { PageHead } from '../../components/contentful/page-head';
import { PageContentTypes } from '../../lib/api/constants';
import { TypePage_landing } from '../../lib/api/types';
import { BlockRenderer } from '../../components/contentful/renderer/block-renderer';
import { withLocale } from '../../lib/api/translations';

type LandingProps = {
  page: TypePage_landing;
};

export default function Landing({ page }: LandingProps) {
  if (!page) {
    return <ErrorPage statusCode={404} />;
  }

  // eslint-disable-next-line no-unsafe-optional-chaining
  const { hero, sections = [] } = page.fields;

  return (
    <div className="w-full pb-16 lg:pb-24">
      <PageHead page={page} />
      <BlockRenderer block={hero} />
      <BlockRenderer block={sections} />
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
  const page = await getPage({
    slug,
    preview,
    pageContentType: PageContentTypes.LandingPage,
  });

  return {
    props: { page },
  };
};
