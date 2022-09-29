"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 3754:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Home": () => (/* binding */ Home),
  "default": () => (/* binding */ pages),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(5692);
// EXTERNAL MODULE: external "@mui/material/Box"
var Box_ = __webpack_require__(19);
var Box_default = /*#__PURE__*/__webpack_require__.n(Box_);
// EXTERNAL MODULE: external "@mui/material/Card"
var Card_ = __webpack_require__(8167);
var Card_default = /*#__PURE__*/__webpack_require__.n(Card_);
// EXTERNAL MODULE: external "markdown-to-jsx"
var external_markdown_to_jsx_ = __webpack_require__(1904);
var external_markdown_to_jsx_default = /*#__PURE__*/__webpack_require__.n(external_markdown_to_jsx_);
;// CONCATENATED MODULE: external "@mui/material/Button"
const Button_namespaceObject = require("@mui/material/Button");
var Button_default = /*#__PURE__*/__webpack_require__.n(Button_namespaceObject);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./utilities/styling/index.ts + 2 modules
var styling = __webpack_require__(6218);
;// CONCATENATED MODULE: ./components/common/Slide.tsx







function Slide(props) {
    const { 0: visible , 1: setVisible  } = (0,external_react_.useState)(0);
    const { colorMode , theme  } = (0,styling/* useTheme */.Fg)();
    const increment = ()=>{
        setVisible(visible + 1);
    };
    const decrement = ()=>{
        setVisible(visible - 1);
    };
    const getCurrentSlide = ()=>{
        const currentSlide = props.slides[visible];
        return currentSlide;
    };
    console.log(visible);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
        sx: {
            width: "100%",
            // height: '100%',
            bottom: 0,
            margin: "auto",
            "&::before": {
                position: "fixed",
                content: '""',
                zIndex: -1,
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
                opacity: 0.25
            },
            display: "flex",
            flexDirection: "column"
        },
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
                sx: {
                    height: "95%"
                },
                children: getCurrentSlide()
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                sx: {
                    display: "flex",
                    justifyContent: "space-evenly",
                    margin: ".5em",
                    botttom: 0,
                    height: "5%"
                },
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                        variant: "contained",
                        color: "success",
                        onClick: decrement,
                        disabled: visible === 0,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                            children: "Previous"
                        })
                    }),
                    visible >= props.slides.length - 1 ? /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                        variant: "contained",
                        color: "success",
                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            style: {
                                textDecoration: "none",
                                color: "inherit"
                            },
                            href: "/home",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                                children: "Home"
                            })
                        })
                    }) : /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                        variant: "contained",
                        color: "success",
                        onClick: increment,
                        disabled: visible >= props.slides.length - 1,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                            children: "Next"
                        })
                    })
                ]
            })
        ]
    });
}
/* harmony default export */ const common_Slide = (Slide);

;// CONCATENATED MODULE: ./components/landing/index.tsx






function Layout(props) {
    const SlideObject = (props)=>/*#__PURE__*/ jsx_runtime_.jsx((Card_default()), {
            sx: {
                height: "100%",
                display: "flex",
                overflow: "auto"
            },
            children: /*#__PURE__*/ jsx_runtime_.jsx(material_.CardContent, {
                sx: {
                    marginX: "3em"
                },
                children: /*#__PURE__*/ jsx_runtime_.jsx((external_markdown_to_jsx_default()), {
                    children: props.content
                })
            })
        });
    return /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
        sx: {
            width: "100%",
            height: "90vh",
            position: "relative"
        },
        children: /*#__PURE__*/ jsx_runtime_.jsx(common_Slide, {
            slides: props.sections.map((e)=>SlideObject(e))
        })
    });
}
/* harmony default export */ const landing = (Layout);

// EXTERNAL MODULE: ./lib/api/index.ts + 1 modules
var api = __webpack_require__(8495);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
;// CONCATENATED MODULE: ./pages/index.tsx





const Home = (props)=>{
    const sections = (0,external_react_.useMemo)(()=>props.sections, [
        props.sections
    ]);
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
            /*#__PURE__*/ jsx_runtime_.jsx(landing, {
                sections: sections
            })
        ]
    });
};
/* harmony default export */ const pages = (Home);
const getStaticProps = async ()=>{
    let content = [];
    const files = [
        "01.md",
        "02.md",
        "03.md", 
    ];
    for(let i = 0; i < files.length; i++){
        console.log(files[i]);
        let tmp = await (0,api/* getContent */.L)({
            directory: "landing",
            filename: files[i],
            fields: [
                "title",
                "content"
            ]
        });
        content.push(tmp);
    }
    return {
        props: {
            sections: content
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

/***/ 8167:
/***/ ((module) => {

module.exports = require("@mui/material/Card");

/***/ }),

/***/ 8076:
/***/ ((module) => {

module.exports = require("gray-matter");

/***/ }),

/***/ 1904:
/***/ ((module) => {

module.exports = require("markdown-to-jsx");

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
var __webpack_exports__ = __webpack_require__.X(0, [311,910,699,676,664,495,398,218], () => (__webpack_exec__(3754)));
module.exports = __webpack_exports__;

})();