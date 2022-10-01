import Box from '@mui/material/Box/Box';
import React from 'react';
import { TypeImage } from '../../../src/lib/generated-types';
import Image from 'next/image';
const styles = {
  image: {
    margin: 0,
  },
};

export function CustomImage({ fields }: Omit<TypeImage, 'metadata'>) {
  const { image } = fields;

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
      <Image className="w-full" src={`${image?.fields.file.url}?w=960`} />
    </Box>
  );
}
export { CustomImage as Image };
