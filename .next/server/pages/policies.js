"use strict";
(() => {
var exports = {};
exports.id = 823;
exports.ids = [823];
exports.modules = {

/***/ 2946:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "PolicyPage": () => (/* binding */ PolicyPage),
  "default": () => (/* binding */ pages_policies),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: external "@mui/material/Card"
var Card_ = __webpack_require__(8167);
var Card_default = /*#__PURE__*/__webpack_require__.n(Card_);
;// CONCATENATED MODULE: external "@mui/material/Link"
const Link_namespaceObject = require("@mui/material/Link");
var Link_default = /*#__PURE__*/__webpack_require__.n(Link_namespaceObject);
// EXTERNAL MODULE: external "@mui/material/CardContent"
var CardContent_ = __webpack_require__(8455);
var CardContent_default = /*#__PURE__*/__webpack_require__.n(CardContent_);
// EXTERNAL MODULE: external "@mui/material/CardHeader"
var CardHeader_ = __webpack_require__(9361);
var CardHeader_default = /*#__PURE__*/__webpack_require__.n(CardHeader_);
// EXTERNAL MODULE: external "@mui/material/Grid"
var Grid_ = __webpack_require__(5612);
var Grid_default = /*#__PURE__*/__webpack_require__.n(Grid_);
// EXTERNAL MODULE: external "@mui/material/Typography"
var Typography_ = __webpack_require__(7163);
var Typography_default = /*#__PURE__*/__webpack_require__.n(Typography_);
;// CONCATENATED MODULE: ./components/policies/index.tsx







const Layout = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Grid_default()), {
        container: true,
        spacing: 3,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                item: true,
                xs: 12,
                children: /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                    variant: "h2",
                    children: "PDFs and links to Google Documents of Piglet Packs policies are below."
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                item: true,
                xs: 12,
                md: 6,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Card_default()), {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((CardHeader_default()), {
                            title: "Image kit hosted PDF"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((CardContent_default()), {
                            children: /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                variant: "body1",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    href: "https://ik.imagekit.io/yuoea5uff/pigletpack/PigletPolicy_v1_qbQF0Ta9Q.pdf",
                                    children: "PDF Link"
                                })
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                item: true,
                xs: 12,
                md: 6,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Card_default()), {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((CardHeader_default()), {
                            title: "Google Doc"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((CardContent_default()), {
                            children: /*#__PURE__*/ jsx_runtime_.jsx((Link_default()), {
                                href: "https://drive.google.com/drive/folders/1-yzu7y2bxM375Cu5iQ6VJLhp00jg1dD-?usp=sharing",
                                children: "Google Drive Link"
                            })
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const policies = (Layout);

;// CONCATENATED MODULE: ./pages/policies.tsx



const PolicyPage = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: "Policies for Piglet Pack services"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "description",
                        content: "Policy page for the services rendered by Piglet Pack design based in Fort Worth, Tx."
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "canonical",
                        href: "https://pigletpack.com/policies"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(policies, {})
        ]
    });
};
const getStaticProps = async ()=>{
    return {
        props: {}
    };
};
/* harmony default export */ const pages_policies = (PolicyPage);


/***/ }),

/***/ 8167:
/***/ ((module) => {

module.exports = require("@mui/material/Card");

/***/ }),

/***/ 8455:
/***/ ((module) => {

module.exports = require("@mui/material/CardContent");

/***/ }),

/***/ 9361:
/***/ ((module) => {

module.exports = require("@mui/material/CardHeader");

/***/ }),

/***/ 5612:
/***/ ((module) => {

module.exports = require("@mui/material/Grid");

/***/ }),

/***/ 7163:
/***/ ((module) => {

module.exports = require("@mui/material/Typography");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(2946));
module.exports = __webpack_exports__;

})();