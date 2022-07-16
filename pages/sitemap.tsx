
export const Sitemap = () => null
export const getServerSideProps = async (props: {res:any}) => {
    const {res} = props;
    const BASE_URL = 'http://localhost:3000';

    const sitemap = `
    <?xml version="1.0" encoding="UTF-8"?>
    <sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        <sitemap>
            <loc>https://pigletpack.com/about</loc>
        </sitemap>
        <sitemap>
            <loc>https://pigletpack.com/contact</loc>
        </sitemap>
        <sitemap>
            <loc>https://pigletpack.com/services</loc>
        </sitemap>
        <sitemap>
            <loc>https://pigletpack.com/policies</loc>
        </sitemap>
        <sitemap>
            <loc>https://pigletpack.com/home</loc>
        </sitemap>
        <sitemap>
            <loc>https://pigletpack.com/index</loc>
        </sitemap>
        <sitemap>
            <loc>https://pigletpack.com/</loc>
        </sitemap>
    </sitemapindex>
  `;

    res.setHeader('Content-Type', 'text/xml');
    res.write(sitemap);
    res.end();

    return {
        props: {},
    };
};

export default Sitemap;


