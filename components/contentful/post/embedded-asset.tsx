import React from 'react';
import noop from 'lodash/noop';
import { Image } from './image';

// import { NodeRenderer } from '@contentful/rich-text-react-renderer';

export const EmbeddedAsset = ({
  data: {
    target: { sys, fields },
  },
}: {
  data: { target: { sys: any; fields: any } };
}) => {
  const isImage = fields.file.contentType.includes('image');
  if (isImage) {
    return (
      <Image
        sys={sys}
        // Change fields format to what <Image /> expects
        fields={{
          ...fields,
          image: { fields } as any,
        }}
        toPlainObject={noop as any}
        update={noop as any}
      />
    );
  }

  //   // Ignore all other asset types, e.g. PDFs, other docs etc.
  return null;
};
