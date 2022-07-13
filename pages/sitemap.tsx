import React from 'react';
import * as fs from 'fs';
import path from 'path';
const BASE_URL = 'https://pigletpack.com';

const Sitemap = () => {
  return null;
};

const staticPaths = fs
  .readdirSync('pages')
  .filter((staticPage) => {
    return !['api', '_app.tsx', '_document.tsx', 'sitemap.tsx'].includes(
      staticPage
    );
  })
  .map((staticPagePath) => {
    return `${BASE_URL}/${path.parse(staticPagePath).name}`;
  });

export const getServerSideProps = async (props: { res: any }) => {
  const { res } = props;

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${staticPaths
        .map((url) => {
          return `
            <url>
              <loc>${url}</loc>
              <lastmod>${new Date().toISOString()}</lastmod>
              <changefreq>monthly</changefreq>
              <priority>1.0</priority>
            </url>
          `;
        })
        .join('')}
    </urlset>
`;
  res.setHeader('Content-Type', 'text/xml');
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};

export default Sitemap;
