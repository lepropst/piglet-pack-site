"use strict";
(() => {
var exports = {};
exports.id = 521;
exports.ids = [521];
exports.modules = {

/***/ 1054:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "About": () => (/* binding */ About),
  "default": () => (/* binding */ pages_about),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2167);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
// EXTERNAL MODULE: ./lib/api/index.ts + 1 modules
var api = __webpack_require__(8495);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(5692);
// EXTERNAL MODULE: external "@mui/material/Typography"
var Typography_ = __webpack_require__(7163);
var Typography_default = /*#__PURE__*/__webpack_require__.n(Typography_);
// EXTERNAL MODULE: external "@mui/material/Box"
var Box_ = __webpack_require__(19);
var Box_default = /*#__PURE__*/__webpack_require__.n(Box_);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./components/common/MissionStatement.tsx
var MissionStatement = __webpack_require__(5313);
;// CONCATENATED MODULE: external "@mui/material/Fade"
const Fade_namespaceObject = require("@mui/material/Fade");
var Fade_default = /*#__PURE__*/__webpack_require__.n(Fade_namespaceObject);
// EXTERNAL MODULE: ./utilities/use-intersection-observer.ts
var use_intersection_observer = __webpack_require__(9663);
// EXTERNAL MODULE: external "markdown-to-jsx"
var external_markdown_to_jsx_ = __webpack_require__(1904);
var external_markdown_to_jsx_default = /*#__PURE__*/__webpack_require__.n(external_markdown_to_jsx_);
;// CONCATENATED MODULE: ./components/about/commonLayout.tsx








// eslint-disable-next-line react/display-name
const CommonLayout = /*#__PURE__*/ (0,external_react_.forwardRef)((props, ref)=>{
    const innerRef = (0,external_react_.useRef)(null);
    const visible = (0,use_intersection_observer/* useIntersectionObserver */.S)({
        root: null,
        ref: innerRef
    });
    return /*#__PURE__*/ jsx_runtime_.jsx("article", {
        children: /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
            ref: ref,
            ...props,
            sx: {
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                minHeight: "90vh",
                scrollSnapAlign: "start",
                scrollSnapMargin: "4rem",
                backgroundColor: props.backgroundColor ? props.backgroundColor : "inherit"
            },
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                ref: innerRef,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                        variant: "h2",
                        children: props.title
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((Fade_default()), {
                        in: visible,
                        timeout: 500,
                        children: /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
                            sx: {
                                marginL: "4rem"
                            },
                            children: /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                component: "div",
                                children: /*#__PURE__*/ jsx_runtime_.jsx((external_markdown_to_jsx_default()), {
                                    children: props.content
                                })
                            })
                        })
                    }),
                    props.image && /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                        src: props.image.src,
                        alt: props.image.alt
                    })
                ]
            })
        })
    });
});
/* harmony default export */ const commonLayout = (CommonLayout);

;// CONCATENATED MODULE: ./components/about/profiles.tsx



const Profiles = (props)=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Card, {
            children: /*#__PURE__*/ jsx_runtime_.jsx(material_.CardContent, {
                children: /*#__PURE__*/ jsx_runtime_.jsx((external_markdown_to_jsx_default()), {
                    children: props.eliasProfile
                })
            })
        })
    });
};
/* harmony default export */ const profiles = (Profiles);

;// CONCATENATED MODULE: ./components/about/index.tsx









const Layout = (props)=>{
    const { eliasProfile , whoWeAre , whatWeDo , whyWeDoIt , image , MissionStatementContent , minorityMessage ,  } = props;
    const WhoWeAre = ()=>/*#__PURE__*/ jsx_runtime_.jsx(commonLayout, {
            content: whoWeAre.content,
            title: whoWeAre.title
        });
    const WhatWeDo = ()=>/*#__PURE__*/ jsx_runtime_.jsx(commonLayout, {
            content: whatWeDo.content,
            title: whatWeDo.title
        });
    const WhyWeDoIt = ()=>/*#__PURE__*/ jsx_runtime_.jsx(commonLayout, {
            content: whyWeDoIt.content,
            title: whyWeDoIt.title
        });
    const MinorityMessage = (props)=>{
        return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
            ...props,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                    variant: "h4",
                    sx: {
                        marginY: "1em",
                        textAlign: "center"
                    },
                    children: minorityMessage.title
                }),
                /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                    component: "div",
                    children: /*#__PURE__*/ jsx_runtime_.jsx((external_markdown_to_jsx_default()), {
                        children: minorityMessage.content
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {})
            ]
        });
    };
    const inputGlobalStyles = /*#__PURE__*/ jsx_runtime_.jsx(material_.GlobalStyles, {
        styles: {
            html: {
                "scroll-snap-type": "y proximity"
            }
        }
    });
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
        sx: {
            display: "flex",
            flexDirection: "column",
            height: "auto",
            alignItems: "center"
        },
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h1", {
                style: {
                    textAlign: "center"
                },
                children: [
                    "About Piglet Pack",
                    /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                    " Web Development and Design"
                ]
            }),
            inputGlobalStyles,
            /*#__PURE__*/ jsx_runtime_.jsx(MissionStatement/* default */.Z, {
                content: MissionStatementContent.content,
                minHeight: "60vh",
                xOffset: 1,
                transition: true,
                children: image !== null && /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                    src: image,
                    alt: "piglet pack logo",
                    height: "200px",
                    width: "200px"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(WhoWeAre, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(WhatWeDo, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(WhyWeDoIt, {}),
            /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
                sx: {
                    height: "2px",
                    background: "black",
                    width: "80vw",
                    marginX: "auto"
                }
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(profiles, {
                eliasProfile: eliasProfile
            })
        ]
    });
};
/* harmony default export */ const about = ((/* unused pure expression or super */ null && (Layout)));

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
;// CONCATENATED MODULE: ./pages/about.tsx






const About = (props)=>{
    const { MissionStatementContent , eliasProfile , whoWeAre , whatWeDo , whyWeDoIt , minorityMessage ,  } = props;
    const { 0: image , 1: setImage  } = (0,external_react_.useState)(null);
    (0,external_react_.useEffect)(()=>{
        if (image) {
            console.log(image);
        } else {
            const imageUrl = "https://ik.imagekit.io/yuoea5uff/pigletpack/piglet_logo_black_UbMq0qFW88.png?ik-sdk-version=javascript-1.4.3&updatedAt=1653973905844";
            external_axios_default().get(imageUrl, {
                responseType: "blob"
            }).then(function(response) {
                var reader = new window.FileReader();
                reader.readAsDataURL(response.data);
                reader.onload = function() {
                    var imageDataUrl = reader.result;
                    if (typeof imageDataUrl !== "string") {
                        imageDataUrl = new String(imageDataUrl).toString();
                    }
                    setImage(imageDataUrl);
                };
            });
        }
    }, [
        image
    ]);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: "Web Development and design by Piglet Pack"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "description",
                        content: "About page describing Piglet Pack, a web development and design company based in Fort Worth, Tx."
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "canonical",
                        href: "https://pigletpack.com/about"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Layout, {
                minorityMessage: minorityMessage,
                image: image,
                whoWeAre: whoWeAre,
                whatWeDo: whatWeDo,
                whyWeDoIt: whyWeDoIt,
                MissionStatementContent: MissionStatementContent,
                eliasProfile: eliasProfile.content
            })
        ]
    });
};
/* harmony default export */ const pages_about = (About);
const getStaticProps = async ()=>{
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
    const whatWeDo = (0,api/* getContent */.L)({
        directory: "about",
        filename: "what-we-do.md",
        fields: [
            "title",
            "date",
            "author",
            "content"
        ]
    });
    const whoWeAre = (0,api/* getContent */.L)({
        directory: "about",
        filename: "who-we-are.md",
        fields: [
            "title",
            "date",
            "author",
            "content"
        ]
    });
    const whyWeDoIt = (0,api/* getContent */.L)({
        directory: "about",
        filename: "why-we-do-it.md",
        fields: [
            "title",
            "date",
            "author",
            "content"
        ]
    });
    const minorityMessage = (0,api/* getContent */.L)({
        directory: "about",
        filename: "minority-message.md",
        fields: [
            "title",
            "date",
            "author",
            "content"
        ]
    });
    const eliasProfile = (0,api/* getContent */.L)({
        directory: "about",
        filename: "eliasProfile.md",
        fields: [
            "content"
        ]
    });
    return {
        props: {
            MissionStatementContent,
            whatWeDo,
            whoWeAre,
            whyWeDoIt,
            minorityMessage,
            eliasProfile
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

/***/ 2167:
/***/ ((module) => {

module.exports = require("axios");

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
var __webpack_exports__ = __webpack_require__.X(0, [311,910,675,495,967], () => (__webpack_exec__(1054)));
module.exports = __webpack_exports__;

})();