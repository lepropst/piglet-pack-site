import * as Contentful from "contentful";

export interface TypeAuthorFields {
    name: Contentful.EntryFields.Symbol;
    email?: Contentful.EntryFields.Symbol;
    facebook?: Contentful.EntryFields.Symbol;
    linkedIn?: Contentful.EntryFields.Symbol;
    slug?: Contentful.EntryFields.Symbol;
}

export type TypeAuthor = Contentful.Entry<TypeAuthorFields>;
