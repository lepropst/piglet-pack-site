import React from 'react';
import * as fs from 'fs';
const BASE_URL = 'http://localhost:3000';

const Sitemap = () => {
  return null;
};

const staticPaths = fs
  .readdirSync('pages')
  .filter((staticPage) => {
    return ![
      'api',
      '_app.js',
      '_document.js',
      '404.js',
      'sitemap.xml.js',
    ].includes(staticPage);
  })
  .map((staticPagePath) => {
    return `${BASE_URL}/${staticPagePath}`;
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
