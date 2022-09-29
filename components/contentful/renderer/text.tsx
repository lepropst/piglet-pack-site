import React from 'react';

import { BlockTitle } from '../block-title';
import { renderRichText } from '../../../lib/api//rich-text';
import { TypeComponent_text } from '../../../lib/api//types';

export function Text({ fields }: TypeComponent_text) {
  const { title, text } = fields;

  return (
    <>
      {title ? <BlockTitle title={title} /> : null}
      {renderRichText(text as any)}
    </>
  );
}
