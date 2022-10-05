import { TypeBlogPostFields, TypeAuthorFields } from './generated-types';
import * as Contentful from 'contentful';

export * from './generated-types';
export type TypePage = Contentful.Entry<TypeBlogPostFields | TypeAuthorFields>;
