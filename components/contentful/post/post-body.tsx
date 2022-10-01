import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, INLINES } from '@contentful/rich-text-types';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { TypeBlogPost } from '../../../lib/api/generated-types';
import { Hyperlink } from './hyperlink';
import markdownStyles from './markdown-styles.module.css';
import RichTextAsset from './rich-text-asset';

export const renderRichText = (content: any) => {
  return documentToReactComponents(
    content.json,
    customMarkdownOptions(content)
  );
};
const PlainHyperlink = (props: any) => {
  console.log('doiing PlainHyperlink');
  return <Hyperlink {...props} type="PlainLink" />;
};
const AssetHyperlink = (props: any) => {
  console.log('doiing AssetHyperlink');
  return <Hyperlink {...props} type="AssetLink" />;
};
const customMarkdownOptions = (content: any) => {
  return {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node: any) => {
        return (
          <>
            {node.content.map((e: any) => (
              <Typography component="p" variant="body1" key={`${e.value}`}>
                {e.value}
              </Typography>
            ))}
          </>
        );
      },
      [BLOCKS.EMBEDDED_ASSET]: (node: any) => {
        return (
          <RichTextAsset
            id={node.data.target.sys.id}
            assets={content.links.assets.block}
          />
        );
      },
      [INLINES.HYPERLINK]: PlainHyperlink,
      [INLINES.ASSET_HYPERLINK]: AssetHyperlink,
      [INLINES.ENTRY_HYPERLINK]: () => null, // Ignore entry hyperlink
    },
  };
};

export default function PostBody({ content }: { content: any }) {
  // content.json.content.map((e: any) => console.log(e));
  return (
    <Box sx={{ display: 'flex' }}>
      <div className={markdownStyles['markdown']}>
        {renderRichText(content)}
      </div>
    </Box>
  );
}
