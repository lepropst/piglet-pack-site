import * as CFRichTextTypes from "@contentful/rich-text-types";
import * as Contentful from "contentful";
import { TypeAuthorFields } from "./TypeAuthor";

export interface TypeBlogPostFields {
    dateCreated?: Contentful.EntryFields.Date;
    author: Contentful.Entry<TypeAuthorFields>;
    title?: Contentful.EntryFields.Symbol;
    content: CFRichTextTypes.Block | CFRichTextTypes.Inline;
    id?: Contentful.EntryFields.Integer;
    coverImage?: Contentful.Entry<Record<string, any>>;
    description?: Contentful.EntryFields.Symbol;
}

export type TypeBlogPost = Contentful.Entry<TypeBlogPostFields>;
