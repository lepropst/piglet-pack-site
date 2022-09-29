import { createClient } from 'contentful';

import { parsePage } from './pageParsers';
type Locale = string;

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID || '',
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || '',
});

const previewClient = createClient({
  space: process.env.CONTENTFUL_SPACE_ID || '',
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || '',
  host: 'preview.contentful.com',
});

const getClient = (preview: boolean) => (preview ? previewClient : client);

type GetPageParams = {
  slug: string;

  pageContentType: string;
  preview?: boolean;
};

const getPageQuery = (params: GetPageParams) => ({
  limit: 1,
  include: 10,

  'fields.slug': params.slug,
  content_type: params.pageContentType,
});

export async function getPage(params: GetPageParams) {
  const query = getPageQuery(params);

  console.log(query);
  const { items } = await getClient(
    params.preview ? params.preview : false
  ).getEntry(params.slug);
  const page = items;

  return page ? parsePage(page) : null;
}

type GetPagesOfTypeParams = {
  pageContentType: string;
  preview?: boolean;
};

export async function getPagesOfType(params: GetPagesOfTypeParams) {
  const { pageContentType, preview } = params;
  const client = getClient(preview ? preview : false);

  const { items: pages } = await client.getEntries({
    limit: 100,

    content_type: pageContentType,
  });

  return pages ? pages.map((page) => parsePage(page)) : [];
}
