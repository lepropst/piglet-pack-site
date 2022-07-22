"use strict";
exports.id = 495;
exports.ids = [495];
exports.modules = {

/***/ 8495:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "L": () => (/* reexport */ getContent)
});

// UNUSED EXPORTS: getContentDirectories

// EXTERNAL MODULE: external "fs"
var external_fs_ = __webpack_require__(7147);
var external_fs_default = /*#__PURE__*/__webpack_require__.n(external_fs_);
// EXTERNAL MODULE: external "path"
var external_path_ = __webpack_require__(1017);
var external_path_default = /*#__PURE__*/__webpack_require__.n(external_path_);
// EXTERNAL MODULE: external "gray-matter"
var external_gray_matter_ = __webpack_require__(8076);
var external_gray_matter_default = /*#__PURE__*/__webpack_require__.n(external_gray_matter_);
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
    const fullPath = external_path_default().resolve(postsDirectory, directory);
    if (filename) {
        return returnFileContents(fullPath, filename, props.fields);
    } else {
        const files = external_fs_default().readdirSync(fullPath);
        const posts = files.map((file)=>returnFileContents(fullPath, file, props.fields));
        return posts;
    }
}
function returnFileContents(fullPath, filename, fields) {
    const realSlug = filename.replace(/\.md$/, "");
    const fileContents = external_fs_default().readFileSync(external_path_default().resolve(fullPath, `${realSlug}.md`), "utf8");
    const { data , content  } = external_gray_matter_default()(fileContents);
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



/***/ })

};
;