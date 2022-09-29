"use strict";
exports.id = 691;
exports.ids = [691];
exports.modules = {

/***/ 4691:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "f": () => (/* binding */ getPage),
  "_": () => (/* binding */ getPagesOfType)
});

// EXTERNAL MODULE: external "contentful"
var external_contentful_ = __webpack_require__(7225);
// EXTERNAL MODULE: external "fast-safe-stringify"
var external_fast_safe_stringify_ = __webpack_require__(5376);
var external_fast_safe_stringify_default = /*#__PURE__*/__webpack_require__.n(external_fast_safe_stringify_);
;// CONCATENATED MODULE: ./lib/api/pageParsers.ts

const parsePage = (page)=>{
    // Kill circular references
    return JSON.parse(external_fast_safe_stringify_default()(page));
};

;// CONCATENATED MODULE: ./lib/api/apiContentful.ts


const client = (0,external_contentful_.createClient)({
    space: process.env.CONTENTFUL_SPACE_ID || "",
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || ""
});
const previewClient = (0,external_contentful_.createClient)({
    space: process.env.CONTENTFUL_SPACE_ID || "",
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || "",
    host: "preview.contentful.com"
});
const getClient = (preview)=>preview ? previewClient : client;
const getPageQuery = (params)=>({
        limit: 1,
        include: 10,
        "fields.slug": params.slug,
        content_type: params.pageContentType
    });
async function getPage(params) {
    const query = getPageQuery(params);
    console.log(query);
    const result = await getClient(params.preview ? params.preview : false).getEntry(params.slug);
    const page = result;
    return page ? parsePage(page) : null;
}
async function getPagesOfType(params) {
    const { pageContentType , preview  } = params;
    const client = getClient(preview ? preview : false);
    const { items: pages  } = await client.getEntries({
        limit: 100,
        content_type: pageContentType
    });
    return pages ? pages.map((page)=>parsePage(page)) : [];
}


/***/ })

};
;