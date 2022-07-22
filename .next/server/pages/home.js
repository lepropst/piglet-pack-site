"use strict";
(() => {
var exports = {};
exports.id = 229;
exports.ids = [229];
exports.modules = {

/***/ 7084:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Home": () => (/* binding */ Home),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utilities_use_intersection_observer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9663);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_home__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9);
/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8495);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);






const Home = (props)=>{
    const { welcome_message_01 , welcome_message_02 , welcome_message_03 , why_us_04 , why_us_03 , why_us_02 , why_us_01 , MissionStatementContent ,  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(()=>props, [
        props
    ]);
    const welcomeRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
    const initiate_welcome = (0,_utilities_use_intersection_observer__WEBPACK_IMPORTED_MODULE_1__/* .useIntersectionObserver */ .S)({
        root: null,
        ref: welcomeRef
    });
    const whyRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
    const initiate_why = (0,_utilities_use_intersection_observer__WEBPACK_IMPORTED_MODULE_1__/* .useIntersectionObserver */ .S)({
        root: null,
        ref: welcomeRef
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_5___default()), {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                        children: "Home of Piglet Pack, web development and design"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "description",
                        content: "Home page of Piglet Pack, a web development and design company based in Fort Worth, Tx."
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                        rel: "canonical",
                        href: "https://pigletpack.com/"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_home__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                welcome_message_01: welcome_message_01,
                welcome_message_02: welcome_message_02,
                welcome_message_03: welcome_message_03,
                why_us_04: why_us_04,
                why_us_03: why_us_03,
                why_us_02: why_us_02,
                why_us_01: why_us_01,
                MissionStatementContent: MissionStatementContent
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);
const getStaticProps = async ()=>{
    const welcome_message_01 = (0,_lib_api__WEBPACK_IMPORTED_MODULE_4__/* .getContent */ .L)({
        directory: "home",
        filename: "welcome-message_01.md",
        fields: [
            "title",
            "date",
            "author",
            "content"
        ]
    });
    const welcome_message_02 = (0,_lib_api__WEBPACK_IMPORTED_MODULE_4__/* .getContent */ .L)({
        directory: "home",
        filename: "welcome-message_02.md",
        fields: [
            "title",
            "date",
            "author",
            "content"
        ]
    });
    const welcome_message_03 = (0,_lib_api__WEBPACK_IMPORTED_MODULE_4__/* .getContent */ .L)({
        directory: "home",
        filename: "welcome-message_03.md",
        fields: [
            "title",
            "date",
            "author",
            "content"
        ]
    });
    const MissionStatementContent = (0,_lib_api__WEBPACK_IMPORTED_MODULE_4__/* .getContent */ .L)({
        directory: "common",
        filename: "mission-statement.md",
        fields: [
            "title",
            "date",
            "author",
            "content"
        ]
    });
    const why_us_01 = (0,_lib_api__WEBPACK_IMPORTED_MODULE_4__/* .getContent */ .L)({
        directory: "home",
        filename: "why-us_01.md",
        fields: [
            "title",
            "date",
            "author",
            "content"
        ]
    });
    const why_us_02 = (0,_lib_api__WEBPACK_IMPORTED_MODULE_4__/* .getContent */ .L)({
        directory: "home",
        filename: "why-us_02.md",
        fields: [
            "title",
            "date",
            "author",
            "content"
        ]
    });
    const why_us_03 = (0,_lib_api__WEBPACK_IMPORTED_MODULE_4__/* .getContent */ .L)({
        directory: "home",
        filename: "why-us_03.md",
        fields: [
            "title",
            "date",
            "author",
            "content"
        ]
    });
    const why_us_04 = (0,_lib_api__WEBPACK_IMPORTED_MODULE_4__/* .getContent */ .L)({
        directory: "home",
        filename: "why-us_04.md",
        fields: [
            "title",
            "date",
            "author",
            "content"
        ]
    });
    return {
        props: {
            welcome_message_01,
            welcome_message_02,
            welcome_message_03,
            why_us_01,
            why_us_02,
            why_us_03,
            why_us_04,
            MissionStatementContent
        }
    };
};


/***/ }),

/***/ 5692:
/***/ ((module) => {

module.exports = require("@mui/material");

/***/ }),

/***/ 19:
/***/ ((module) => {

module.exports = require("@mui/material/Box");

/***/ }),

/***/ 7163:
/***/ ((module) => {

module.exports = require("@mui/material/Typography");

/***/ }),

/***/ 8076:
/***/ ((module) => {

module.exports = require("gray-matter");

/***/ }),

/***/ 1904:
/***/ ((module) => {

module.exports = require("markdown-to-jsx");

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 7147:
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ 1017:
/***/ ((module) => {

module.exports = require("path");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [311,910,675,495,967,9], () => (__webpack_exec__(7084)));
module.exports = __webpack_exports__;

})();