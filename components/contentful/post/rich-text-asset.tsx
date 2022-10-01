import Box from '@mui/material/Box';
import Image from 'next/image';

export default function RichTextAsset({
  id,
  assets,
}: {
  id: number;
  assets: any[];
}) {
  const asset = assets?.find((asset: any) => asset.sys.id === id);
  console.log(asset);
  if (asset?.url) {
    return (
      <Box
        sx={{
          position: 'relative',
          height: '250px',
          '*': { position: 'absolute' },
        }}
      >
        <Image
          src={asset.url}
          objectFit="none"
          layout="fill"
          alt={asset.description}
        />
      </Box>
    );
  }

  return null;
}
