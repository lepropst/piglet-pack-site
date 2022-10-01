import * as Contentful from "contentful";

export interface TypeImageFields {
    image?: Contentful.Asset;
}

export type TypeImage = Contentful.Entry<TypeImageFields>;
