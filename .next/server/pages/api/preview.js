"use strict";
(() => {
var exports = {};
exports.id = 157;
exports.ids = [157];
exports.modules = {

/***/ 9621:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ preview)
});

// NAMESPACE OBJECT: ./lib/api/index.ts
var lib_api_namespaceObject = {};
__webpack_require__.r(lib_api_namespaceObject);

;// CONCATENATED MODULE: external "fs"
const external_fs_namespaceObject = require("fs");
;// CONCATENATED MODULE: external "path"
const external_path_namespaceObject = require("path");
var external_path_default = /*#__PURE__*/__webpack_require__.n(external_path_namespaceObject);
;// CONCATENATED MODULE: external "gray-matter"
const external_gray_matter_namespaceObject = require("gray-matter");
;// CONCATENATED MODULE: ./lib/api/api.ts



const postsDirectory = external_path_default().resolve(process.cwd(), "content");
const getDirectories = (source)=>{
    return fs.readdirSync(source, {
        withFileTypes: true
    }).filter((dirent)=>dirent.isDirectory()).map((dirent)=>dirent.name);
};
function getContentDirectories() {
    let flies = getDirectories(postsDirectory);
    return flies;
}
function getContent(props) {
    const { directory , filename  } = props;
    const fullPath = path.resolve(postsDirectory, directory);
    return returnFileContents(fullPath, filename, props.fields);
}
function returnFileContents(fullPath, filename, fields) {
    const realSlug = filename.replace(/\.md$/, "");
    const fileContents = fs.readFileSync(path.resolve(fullPath, `${realSlug}.md`), "utf8");
    const { data , content  } = matter(fileContents);
    const items = {};
    // Ensure only the minimal needed data is exposed
    fields.forEach((field)=>{
        if (field === "slug") {
            items[field] = realSlug;
        }
        if (field === "content") {
            items[field] = content;
        }
        if (typeof data[field] !== "undefined") {
            items[field] = data[field];
        }
    });
    return items;
}

;// CONCATENATED MODULE: ./lib/api/index.ts


;// CONCATENATED MODULE: ./pages/api/preview.js

async function preview(req, res) {
    const { secret , slug  } = req.query;
    if (secret !== process.env.CONTENTFUL_PREVIEW_SECRET || !slug) {
        return res.status(401).json({
            message: "Invalid token"
        });
    }
    // Fetch the headless CMS to check if the provided `slug` exists
    const post = await (0,lib_api_namespaceObject.getPreviewPostBySlug)(slug);
    // If the slug doesn't exist prevent preview mode from being enabled
    if (!post) {
        return res.status(401).json({
            message: "Invalid slug"
        });
    }
    // Enable Preview Mode by setting the cookies
    res.setPreviewData({});
    // Redirect to the path from the fetched post
    // We don't redirect to req.query.slug as that might lead to open redirect vulnerabilities
    // res.writeHead(307, { Location: `/posts/${post.slug}` })
    const url = `/posts/${post.slug}`;
    res.setHeader("Content-Type", "text/html");
    res.write(`<!DOCTYPE html><html><head><meta http-equiv="Refresh" content="0; url=${url}" />
    <script>window.location.href = '${url}'</script>
    </head>
    </html>`);
    res.end();
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(9621));
module.exports = __webpack_exports__;

})();