"use strict";
(() => {
var exports = {};
exports.id = 922;
exports.ids = [922];
exports.modules = {

/***/ 9184:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Landing),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: external "next/error"
const error_namespaceObject = require("next/error");
var error_default = /*#__PURE__*/__webpack_require__.n(error_namespaceObject);
// EXTERNAL MODULE: ./lib/api/apiContentful.ts + 1 modules
var apiContentful = __webpack_require__(4691);
;// CONCATENATED MODULE: ./lib/api/preview.ts
const ENABLED = "1";
const disablePreview = (url)=>{
    const pattern = /preview=[^\\&]+&?/;
    return url.replace(pattern, "");
};
const isPreviewEnabled = (query)=>{
    const param = String(query?.preview).toLowerCase();
    return param === ENABLED;
};
const withPreviewParam = (url, isPreview)=>{
    const query = isPreview ? `?preview=${ENABLED}` : "";
    return url + query;
};

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
;// CONCATENATED MODULE: ./components/contentful/page-head.tsx



const PageHead = ({ page  })=>{
    // const seo = page.fields.seo.fields;
    const { title  } = page.fields;
    // const robots = [
    //   seo.no_index === true ? 'noindex' : undefined,
    //   seo.no_follow === true ? 'nofollow' : undefined,
    // ].filter((x) => x !== undefined);
    return /*#__PURE__*/ jsx_runtime_.jsx((head_default()), {
        children: /*#__PURE__*/ jsx_runtime_.jsx("title", {
            children: title
        })
    });
};

;// CONCATENATED MODULE: ./lib/api/constants.ts
const SITE_NAME = "Help Center";
const PageContentType = "page";
const ComponentContentTypes = {
    Section: "component_section",
    Hero: "component_hero",
    Text: "component_text",
    Image: "component_image",
    Video: "component_video"
};
const PageContentTypes = {
    HelpDeskArticle: "page_help_center_article",
    LandingPage: "page_landing"
};
const fallbackImage = {
    title: "Thumbnail placeholder",
    url: "https://dummyimage.com/720x400"
};

;// CONCATENATED MODULE: external "lodash"
const external_lodash_namespaceObject = require("lodash");
var external_lodash_default = /*#__PURE__*/__webpack_require__.n(external_lodash_namespaceObject);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
;// CONCATENATED MODULE: ./lib/api/translations/locales.ts
// cheap trick
const UnknownLocale = Symbol("unknown-locale");
const locales_defaultLocale = "en-US";
// need to be in sync with space
const availableLocales = [
    locales_defaultLocale,
    "de-DE"
];
// for a potential locale picker
// export const languageNames = {
//   en: 'English',
//   fr: 'français',
//   pl: 'polski'
// }
function locales_findLocale(current) {
    return availableLocales.find((locale)=>current === locale);
}
/**
 * Returns UnknownLocale if the provided locale isn't one that can be used
 * @param locale
 */ const getLocale = (locale)=>{
    if (!locale) {
        return;
    }
    const actualLocale = locales_findLocale(String(locale));
    return actualLocale ?? UnknownLocale;
};
const withLocale = (fn)=>{
    return (context)=>{
        const locale = getLocale(context.params?.locale);
        switch(locale){
            case UnknownLocale:
                context.res.writeHead(302, {
                    Location: "/"
                }).end();
                break;
            case undefined:
                context.res.statusCode = 404;
                break;
            default:
                return fn(locale, context);
        }
    };
};

;// CONCATENATED MODULE: ./lib/api/translations/getInitialLocale.ts

const getInitialLocale = ()=>{
    const previousLocale = localStorage.getItem("locale");
    const browserLocale = navigator.language;
    const browserLanguage = browserLocale.split("-")[0];
    const possibleLocales = [
        previousLocale,
        browserLocale,
        browserLanguage
    ];
    return possibleLocales.length > 0 ? possibleLocales.find((locale)=>findLocale(locale)) : defaultLocale;
};

;// CONCATENATED MODULE: ./lib/api/translations/context.tsx

const LocaleContext = /*#__PURE__*/ (0,external_react_.createContext)("");
const useLocaleContext = ()=>(0,external_react_.useContext)(LocaleContext);

;// CONCATENATED MODULE: ./lib/api/translations/index.ts




;// CONCATENATED MODULE: ./lib/api/useNavigation.ts




function linkToPage(locale, page, isPreview) {
    const slug = page.fields.slug;
    const pageType = page.sys.contentType.sys.id;
    switch(pageType){
        case PageContentTypes.HelpDeskArticle:
            {
                return {
                    href: withPreviewParam("/[locale]/articles/[slug]", isPreview),
                    as: withPreviewParam(`/${locale}/articles/${slug}`, isPreview)
                };
            }
        case PageContentTypes.LandingPage:
            {
                return {
                    href: withPreviewParam(`/[locale]/[slug]`, isPreview),
                    as: withPreviewParam(`/${locale}/${slug}`, isPreview)
                };
            }
        default:
            {
                throw new Error("Page type is not supported yet");
            }
    }
}
function normalizePath(path) {
    // strip query params & trailing slashes
    return path.replace(/\?.*/, "").replace(/\/$/, "");
}
function useNavigation() {
    const { query , asPath: currentPath , route  } = (0,router_.useRouter)();
    const locale = useLocaleContext();
    const isPreview = isPreviewEnabled(query);
    const linkTo = (page)=>{
        return linkToPage(locale, page, isPreview);
    };
    const linkToPath = (url)=>{
        return {
            href: withPreviewParam(`/[locale]${url}`, isPreview),
            as: withPreviewParam(`/${locale}${url}`, isPreview)
        };
    };
    const isActive = (page)=>{
        const active = normalizePath(currentPath);
        const target = normalizePath(linkTo(page).as);
        return target === active;
    };
    return {
        currentPath,
        isPreview,
        route,
        linkTo,
        linkToPath,
        isActive
    };
}

;// CONCATENATED MODULE: ./components/contentful/link.tsx




const Link = ({ page , path , href , children  })=>{
    const { linkTo , linkToPath  } = useNavigation();
    return /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
        href: path ? linkToPath(path) : page ? linkTo(page) : {
            href
        },
        children: children
    });
};

;// CONCATENATED MODULE: external "lodash/has"
const has_namespaceObject = require("lodash/has");
var has_default = /*#__PURE__*/__webpack_require__.n(has_namespaceObject);
;// CONCATENATED MODULE: external "@contentful/rich-text-types"
const rich_text_types_namespaceObject = require("@contentful/rich-text-types");
;// CONCATENATED MODULE: external "@contentful/rich-text-react-renderer"
const rich_text_react_renderer_namespaceObject = require("@contentful/rich-text-react-renderer");
;// CONCATENATED MODULE: external "lodash/noop"
const noop_namespaceObject = require("lodash/noop");
var noop_default = /*#__PURE__*/__webpack_require__.n(noop_namespaceObject);
;// CONCATENATED MODULE: ./components/contentful/renderer/image.tsx


const styles = {
    image: {
        margin: 0
    }
};
function Image({ fields  }) {
    const { title , image  } = fields;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "flex flex-col w-full lg:mb-12 mt-8",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                className: "w-full",
                style: styles.image,
                src: `${image.fields.file.url}?w=960`
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                className: "py-4 text-gray-700 text-center",
                children: title
            })
        ]
    });
}

;// CONCATENATED MODULE: external "react-player"
const external_react_player_namespaceObject = require("react-player");
var external_react_player_default = /*#__PURE__*/__webpack_require__.n(external_react_player_namespaceObject);
;// CONCATENATED MODULE: ./components/contentful/renderer/video.tsx



const video_styles = {
    container: {
        paddingBottom: "56.25%"
    }
};
function Video({ fields  }) {
    const { 0: isSSR , 1: setIsSSR  } = (0,external_react_.useState)(true);
    const { title , youtubeVideoId  } = fields;
    // fix for issue with React v18 and react player
    // Hydration failed because the initial UI does not match what was rendered on the server.
    // https://github.com/cookpete/react-player/issues/1428
    (0,external_react_.useEffect)(()=>{
        setIsSSR(false);
    }, []);
    if (!youtubeVideoId) {
        return null;
    }
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "flex flex-col w-full lg:mb-12 mt-8",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "relative w-full h-0 items-center overflow-hidden",
                style: video_styles.container,
                children: !isSSR && /*#__PURE__*/ jsx_runtime_.jsx((external_react_player_default()), {
                    style: {
                        position: "absolute"
                    },
                    width: "100%",
                    height: "100%",
                    controls: true,
                    url: `https://www.youtube.com/embed/${youtubeVideoId}`
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                className: "py-4 text-gray-700 text-center",
                children: title
            })
        ]
    });
}

;// CONCATENATED MODULE: ./lib/api/rich-text/embedded-asset.tsx





const EmbeddedAsset = ({ data: { target: { sys , fields  } ,  } ,  })=>{
    const isVideo = fields.file.contentType.includes("video");
    if (isVideo) {
        return /*#__PURE__*/ jsx_runtime_.jsx(Video, {
            sys: sys,
            // Change fields format to what <Image /> expects
            fields: fields,
            toPlainObject: (noop_default()),
            update: (noop_default())
        });
    }
    const isImage = fields.file.contentType.includes("image");
    if (isImage) {
        return /*#__PURE__*/ jsx_runtime_.jsx(Image, {
            sys: sys,
            // Change fields format to what <Image /> expects
            fields: {
                name: fields.name,
                title: fields.title,
                image: {
                    fields
                }
            },
            toPlainObject: (noop_default()),
            update: (noop_default())
        });
    }
    // Ignore all other asset types, e.g. PDFs, other docs etc.
    return null;
};

;// CONCATENATED MODULE: ./lib/api/rich-text/hyperlink.tsx



const Hyperlink = (props)=>{
    const href = props.type === "AssetLink" ? props.data.target.fields.file.url : props.data.uri;
    // Link text has to be rendered itself as rich text
    // to account for various formatting options (e.g. bold text)
    const linkText = renderRichText({
        content: props.content,
        data: {},
        nodeType: "document"
    });
    return /*#__PURE__*/ jsx_runtime_.jsx("a", {
        href: href,
        target: "_blank",
        rel: "noopener noreferrer",
        children: linkText
    });
};

;// CONCATENATED MODULE: ./lib/api/rich-text/render.tsx






const isRichText = (x)=>{
    return [
        "data",
        "content",
        "nodeType"
    ].every((prop)=>has_default()(x, prop));
};
const PlainHyperlink = (props)=>/*#__PURE__*/ jsx_runtime_.jsx(Hyperlink, {
        ...props,
        type: "PlainLink"
    });
const AssetHyperlink = (props)=>/*#__PURE__*/ jsx_runtime_.jsx(Hyperlink, {
        ...props,
        type: "AssetLink"
    });
const renderRichText = (rtd)=>(0,rich_text_react_renderer_namespaceObject.documentToReactComponents)(rtd, {
        renderNode: {
            [rich_text_types_namespaceObject.INLINES.HYPERLINK]: PlainHyperlink,
            [rich_text_types_namespaceObject.INLINES.ASSET_HYPERLINK]: AssetHyperlink,
            [rich_text_types_namespaceObject.INLINES.ENTRY_HYPERLINK]: ()=>null,
            [rich_text_types_namespaceObject.BLOCKS.EMBEDDED_ASSET]: EmbeddedAsset
        }
    });

;// CONCATENATED MODULE: external "lodash/get"
const get_namespaceObject = require("lodash/get");
var get_default = /*#__PURE__*/__webpack_require__.n(get_namespaceObject);
;// CONCATENATED MODULE: external "lodash/truncate"
const truncate_namespaceObject = require("lodash/truncate");
var truncate_default = /*#__PURE__*/__webpack_require__.n(truncate_namespaceObject);
;// CONCATENATED MODULE: external "@contentful/rich-text-plain-text-renderer"
const rich_text_plain_text_renderer_namespaceObject = require("@contentful/rich-text-plain-text-renderer");
;// CONCATENATED MODULE: ./lib/api/rich-text/summary.ts




const isTextNode = (node)=>{
    return get_default()(node, "sys.contentType.sys.id") == ComponentContentTypes.Text;
};
const getSummary = (content = [])=>{
    const text = content.filter(isTextNode).map((node)=>(0,rich_text_plain_text_renderer_namespaceObject.documentToPlainTextString)(get_default()(node, "fields.text"))).join(" ");
    return truncate_default()(text, {
        length: 70
    });
};

;// CONCATENATED MODULE: ./lib/api/rich-text/index.ts



;// CONCATENATED MODULE: ./components/contentful/renderer/hero.tsx



const Hero = ({ fields  })=>{
    const { title , text , ctaText , ctaLink , image  } = fields;
    const textComp = isRichText(text) ? renderRichText(text) : text;
    const linkProps = ctaLink ? {
        page: ctaLink
    } : {
        href: "#"
    };
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "bg-white mx-auto max-w-screen-xl",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "px-8 py-20 mx-auto flex flex-wrap flex-col md:flex-row items-start",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "flex flex-col w-full md:w-3/6 justify-center items-start",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                            className: "pt-4 text-3xl font-medium leading-tight text-gray-900",
                            children: title
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "leading-relaxed text-lg text-gray-700 py-6",
                            children: textComp && textComp.toString()
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(Link, {
                            ...linkProps,
                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                className: "w-full md:w-auto bg-blue-600 text-white font-semibold rounded-full px-3 py-2 text-center",
                                children: ctaText
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "w-full md:w-3/6 text-center py-8 md:py-0",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                        className: "w-full px-8 z-50 float-right",
                        src: `${image.fields.file.url}?w=960`
                    })
                })
            ]
        })
    });
};

;// CONCATENATED MODULE: ./components/contentful/block-title.tsx


function BlockTitle(props) {
    return /*#__PURE__*/ jsx_runtime_.jsx("h2", {
        className: "font-sans break-normal",
        children: props.title
    });
}

;// CONCATENATED MODULE: ./components/contentful/renderer/text.tsx




function Text({ fields  }) {
    const { title , text  } = fields;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            title ? /*#__PURE__*/ jsx_runtime_.jsx(BlockTitle, {
                title: title
            }) : null,
            renderRichText(text)
        ]
    });
}

;// CONCATENATED MODULE: ./components/contentful/renderer/section.tsx



const Column = ({ column  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(BlockRenderer, {
        block: column
    });
};
function Section(section) {
    const { columns  } = section.fields;
    if (!columns) {
        return null;
    }
    return /*#__PURE__*/ jsx_runtime_.jsx("section", {
        className: "text-gray-700 body-font",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "mx-auto max-w-screen-xl",
            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "flex flex-row flex-wrap px-6 lg:px-4 mx-auto",
                children: columns.map((column, index)=>/*#__PURE__*/ jsx_runtime_.jsx(Column, {
                        column: column
                    }, index))
            })
        })
    });
}

;// CONCATENATED MODULE: ./components/contentful/renderer/help-center-article.tsx




const HelpCenterArticle = (props)=>{
    const { fields  } = props;
    const summary = getSummary(fields.body);
    return(// A modified version of:
    // https://github.com/mertJF/tailblocks/blob/master/src/blocks/blog/light/a.js
    /*#__PURE__*/ jsx_runtime_.jsx(Link, {
        page: props,
        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
            className: "p-4 max-w-sm md:w-1/3 block",
            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "h-full border-2 border-gray-200 rounded-lg overflow-hidden",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "p-6 break-word",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                            className: "tracking-widest text-xs title-font font-medium text-blue-600 mb-1",
                            children: "ARTICLE"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                            className: "title-font text-lg font-medium text-gray-900 mb-2",
                            children: fields.title
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            className: "leading-relaxed",
                            children: summary
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "text-blue-600 inline-flex items-center pt-3 md:mb-2 lg:mb-0",
                            children: [
                                "Learn More",
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                                    className: "w-4 h-4 ml-2",
                                    viewBox: "0 0 24 24",
                                    stroke: "currentColor",
                                    strokeWidth: "2",
                                    fill: "none",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                            d: "M5 12h14"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                            d: "M12 5l7 7-7 7"
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            })
        })
    }));
};

;// CONCATENATED MODULE: ./components/contentful/renderer/block-renderer.tsx










const BlockRenderer = ({ block  })=>{
    if (Array.isArray(block)) {
        return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
            children: block.map((b)=>/*#__PURE__*/ jsx_runtime_.jsx(BlockRenderer, {
                    block: b
                }, `block-${b.sys.id}`))
        });
    }
    const contentTypeId = external_lodash_default().get(block, "sys.contentType.sys.id");
    const Component = ContentTypeMap[contentTypeId];
    if (!Component) {
        console.warn(`${contentTypeId} can not be handled`);
        return null;
    }
    const { id  } = block.sys;
    const componentProps = {
        ...block,
        parent: block.parent
    };
    return /*#__PURE__*/ jsx_runtime_.jsx(Component, {
        ...componentProps
    }, `${contentTypeId}-${id}`);
};
const ContentTypeMap = {
    [ComponentContentTypes.Hero]: Hero,
    [ComponentContentTypes.Section]: Section,
    [PageContentTypes.HelpDeskArticle]: HelpCenterArticle,
    [ComponentContentTypes.Text]: Text,
    [ComponentContentTypes.Image]: Image,
    [ComponentContentTypes.Video]: Video
};


;// CONCATENATED MODULE: ./pages/posts/[slug].tsx








function Landing({ page  }) {
    if (!page) {
        return /*#__PURE__*/ jsx_runtime_.jsx((error_default()), {
            statusCode: 404
        });
    }
    // eslint-disable-next-line no-unsafe-optional-chaining
    const { hero , sections =[]  } = page.fields;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "w-full pb-16 lg:pb-24",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(PageHead, {
                page: page
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(BlockRenderer, {
                block: hero
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(BlockRenderer, {
                block: sections
            })
        ]
    });
};
const getServerSideProps = async (props)=>{
    const { params , query  } = props;
    const slug = String(params?.slug ?? "/");
    const preview = isPreviewEnabled(query);
    const page = await (0,apiContentful/* getPage */.f)({
        slug,
        preview,
        pageContentType: PageContentTypes.LandingPage
    });
    return {
        props: {
            page
        }
    };
};


/***/ }),

/***/ 7225:
/***/ ((module) => {

module.exports = require("contentful");

/***/ }),

/***/ 5376:
/***/ ((module) => {

module.exports = require("fast-safe-stringify");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [311,910,699,676,664,691], () => (__webpack_exec__(9184)));
module.exports = __webpack_exports__;

})();