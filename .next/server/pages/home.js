"use strict";
(() => {
var exports = {};
exports.id = 229;
exports.ids = [229];
exports.modules = {

/***/ 1638:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Home": () => (/* binding */ Home),
  "default": () => (/* binding */ pages_home),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./utilities/use-intersection-observer.ts
var use_intersection_observer = __webpack_require__(9663);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(5692);
// EXTERNAL MODULE: external "markdown-to-jsx"
var external_markdown_to_jsx_ = __webpack_require__(1904);
var external_markdown_to_jsx_default = /*#__PURE__*/__webpack_require__.n(external_markdown_to_jsx_);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./components/common/MissionStatement.tsx
var MissionStatement = __webpack_require__(5313);
;// CONCATENATED MODULE: ./public/piglet_divider_black.png
/* harmony default export */ const piglet_divider_black = ({"src":"/_next/static/media/piglet_divider_black.789f8d23.png","height":282,"width":2005,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAABCAMAAADU3h9xAAAABlBMVEXnmdsKBgmhdHP4AAAAAnRSTlMBCGFTdEsAAAAJcEhZcwAAFE0AABRNAZTKjS8AAAARSURBVAiZY2BgYGBkZGBgAAAAEgADXZtyfAAAAABJRU5ErkJggg=="});
;// CONCATENATED MODULE: ./components/home/index.tsx








const PageBanner = ({ MissionStatementContent  })=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                style: {
                    textAlign: "center"
                },
                children: "Piglet Pack Web Development and Design"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(material_.Link, {
                sx: {
                    display: "flex",
                    margin: "1em",
                    marginLeft: "3em",
                    marginRight: "3em",
                    width: "auto",
                    height: "auto",
                    justifyContent: "center"
                },
                href: "/",
                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                    src: piglet_divider_black,
                    alt: "logo links for Piglet Pack",
                    height: "169",
                    width: "1203"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(MissionStatement/* default */.Z, {
                padding: ".5em",
                justifyContent: "start",
                minHeight: ".7vh",
                content: MissionStatementContent.content
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(material_.Divider, {
                variant: "middle",
                textAlign: "center",
                light: true
            })
        ]
    });
const Layout = (props)=>{
    const { MissionStatementContent , welcome_message_01 , welcome_message_02 , welcome_message_03 , why_us_01 , why_us_02 , why_us_03 , why_us_04 ,  } = props;
    const gStyles = /*#__PURE__*/ jsx_runtime_.jsx(material_.GlobalStyles, {
        styles: {
            body: {
                overflowX: "hidden"
            }
        }
    });
    const welcomeRef = (0,external_react_.useRef)(null);
    const initiate_welcome = (0,use_intersection_observer/* default */.Z)({
        root: null,
        ref: welcomeRef
    });
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("main", {
        children: [
            gStyles,
            /*#__PURE__*/ jsx_runtime_.jsx("section", {
                children: /*#__PURE__*/ jsx_runtime_.jsx(PageBanner, {
                    MissionStatementContent: MissionStatementContent
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                ref: welcomeRef,
                children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Grow, {
                    in: initiate_welcome,
                    ...initiate_welcome ? {
                        timeout: 1000
                    } : {},
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                        sx: {
                            display: "flex",
                            alignContent: "start",
                            flexDirection: "column",
                            minHeight: "0.8vh"
                        },
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(material_.Paper, {
                                elevation: 1,
                                sx: {
                                    padding: "1em",
                                    marginY: "1rem",
                                    borderRadius: ".8em",
                                    width: "80%",
                                    backgroundColor: "#FFFFFF"
                                },
                                children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                                    component: "div",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((external_markdown_to_jsx_default()), {
                                        children: welcome_message_01.content
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(material_.Paper, {
                                elevation: 1,
                                sx: {
                                    padding: "1em",
                                    marginY: "1rem",
                                    borderRadius: ".8em",
                                    width: "80%",
                                    alignSelf: "flex-end",
                                    backgroundColor: "#FFFFFF"
                                },
                                children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                                    component: "div",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((external_markdown_to_jsx_default()), {
                                        children: welcome_message_02.content
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(material_.Paper, {
                                elevation: 1,
                                sx: {
                                    padding: "1em",
                                    marginY: "1rem",
                                    borderRadius: ".8em",
                                    width: "80%",
                                    backgroundColor: "#FFFFFF"
                                },
                                children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                                    component: "div",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((external_markdown_to_jsx_default()), {
                                        children: welcome_message_03.content
                                    })
                                })
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                id: "whyus",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                    sx: {
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignContent: "center",
                        minHeight: "0.8vh"
                    },
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                            variant: "h2",
                            children: "Why Piglet Pack?"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(material_.Paper, {
                            elevation: 3,
                            sx: {
                                padding: "1em",
                                marginY: "1em",
                                borderRadius: ".8em",
                                width: "80%",
                                alignSelf: "flex-end"
                            },
                            children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                                component: "div",
                                children: /*#__PURE__*/ jsx_runtime_.jsx((external_markdown_to_jsx_default()), {
                                    children: why_us_01.content
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(material_.Paper, {
                            elevation: 3,
                            sx: {
                                padding: "1em",
                                marginY: "1em",
                                borderRadius: ".8em",
                                width: "80%",
                                alignSelf: "flex-start"
                            },
                            children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                                component: "div",
                                children: /*#__PURE__*/ jsx_runtime_.jsx((external_markdown_to_jsx_default()), {
                                    children: why_us_02.content
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(material_.Paper, {
                            elevation: 3,
                            sx: {
                                padding: "1em",
                                marginY: "1em",
                                borderRadius: ".8em",
                                width: "80%",
                                alignSelf: "flex-end"
                            },
                            children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                                component: "div",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("article", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((external_markdown_to_jsx_default()), {
                                        children: why_us_03.content
                                    })
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(material_.Paper, {
                            elevation: 3,
                            sx: {
                                padding: "2em",
                                marginY: "20vh",
                                borderRadius: ".9em",
                                width: "100%",
                                alignSelf: "center",
                                textAlign: "center",
                                background: "white"
                            },
                            children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                                component: "div",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("article", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((external_markdown_to_jsx_default()), {
                                        children: why_us_04.content
                                    })
                                })
                            })
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const home = (Layout);

// EXTERNAL MODULE: ./lib/api/index.ts + 1 modules
var api = __webpack_require__(8495);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
;// CONCATENATED MODULE: ./pages/home.tsx






const Home = (props)=>{
    const { welcome_message_01 , welcome_message_02 , welcome_message_03 , why_us_04 , why_us_03 , why_us_02 , why_us_01 , MissionStatementContent ,  } = (0,external_react_.useMemo)(()=>props, [
        props
    ]);
    const welcomeRef = (0,external_react_.useRef)(null);
    const initiate_welcome = (0,use_intersection_observer/* useIntersectionObserver */.S)({
        root: null,
        ref: welcomeRef
    });
    const whyRef = (0,external_react_.useRef)(null);
    const initiate_why = (0,use_intersection_observer/* useIntersectionObserver */.S)({
        root: null,
        ref: welcomeRef
    });
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: "Home of Piglet Pack, web development and design"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "description",
                        content: "Home page of Piglet Pack, a web development and design company based in Fort Worth, Tx."
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "canonical",
                        href: "https://pigletpack.com/"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(home, {
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
/* harmony default export */ const pages_home = (Home);
const getStaticProps = async ()=>{
    const welcome_message_01 = (0,api/* getContent */.L)({
        directory: "home",
        filename: "welcome-message_01.md",
        fields: [
            "title",
            "date",
            "author",
            "content"
        ]
    });
    const welcome_message_02 = (0,api/* getContent */.L)({
        directory: "home",
        filename: "welcome-message_02.md",
        fields: [
            "title",
            "date",
            "author",
            "content"
        ]
    });
    const welcome_message_03 = (0,api/* getContent */.L)({
        directory: "home",
        filename: "welcome-message_03.md",
        fields: [
            "title",
            "date",
            "author",
            "content"
        ]
    });
    const MissionStatementContent = (0,api/* getContent */.L)({
        directory: "common",
        filename: "mission-statement.md",
        fields: [
            "title",
            "date",
            "author",
            "content"
        ]
    });
    const why_us_01 = (0,api/* getContent */.L)({
        directory: "home",
        filename: "why-us_01.md",
        fields: [
            "title",
            "date",
            "author",
            "content"
        ]
    });
    const why_us_02 = (0,api/* getContent */.L)({
        directory: "home",
        filename: "why-us_02.md",
        fields: [
            "title",
            "date",
            "author",
            "content"
        ]
    });
    const why_us_03 = (0,api/* getContent */.L)({
        directory: "home",
        filename: "why-us_03.md",
        fields: [
            "title",
            "date",
            "author",
            "content"
        ]
    });
    const why_us_04 = (0,api/* getContent */.L)({
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
var __webpack_exports__ = __webpack_require__.X(0, [311,910,675,495,967], () => (__webpack_exec__(1638)));
module.exports = __webpack_exports__;

})();