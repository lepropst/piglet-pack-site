"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 59:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: external "@mui/material/CssBaseline"
const CssBaseline_namespaceObject = require("@mui/material/CssBaseline");
var CssBaseline_default = /*#__PURE__*/__webpack_require__.n(CssBaseline_namespaceObject);
// EXTERNAL MODULE: ./utilities/styling/index.ts + 2 modules
var styling = __webpack_require__(6218);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
;// CONCATENATED MODULE: external "@mui/system"
const system_namespaceObject = require("@mui/system");
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(5692);
// EXTERNAL MODULE: ./node_modules/next/dynamic.js
var dynamic = __webpack_require__(5152);
var dynamic_default = /*#__PURE__*/__webpack_require__.n(dynamic);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: external "@mui/material/Container"
const Container_namespaceObject = require("@mui/material/Container");
var Container_default = /*#__PURE__*/__webpack_require__.n(Container_namespaceObject);
;// CONCATENATED MODULE: ./components/body/body.tsx


function Body(props) {
    return /*#__PURE__*/ jsx_runtime_.jsx((Container_default()), {
        id: "body",
        maxWidth: "xl",
        sx: {
            position: "relative",
            minHeight: "150vh"
        },
        children: props.children
    });
};


// EXTERNAL MODULE: ./utilities/createEmotionCache.ts
var createEmotionCache = __webpack_require__(901);
;// CONCATENATED MODULE: external "@emotion/react"
const react_namespaceObject = require("@emotion/react");
// EXTERNAL MODULE: ./node_modules/next/script.js
var script = __webpack_require__(4298);
var script_default = /*#__PURE__*/__webpack_require__.n(script);
;// CONCATENATED MODULE: ./pages/_app.tsx
















const clientSideEmotionCache = (0,createEmotionCache/* default */.Z)();
const DynamicHeader = dynamic_default()(()=>Promise.all(/* import() */[__webpack_require__.e(910), __webpack_require__.e(676), __webpack_require__.e(664), __webpack_require__.e(663)]).then(__webpack_require__.bind(__webpack_require__, 6663)), {
    loadableGenerated: {
        modules: [
            "_app.tsx -> " + "../components/header/header"
        ]
    },
    suspense: true,
    ssr: false
});
const DynamicFooter = dynamic_default()(()=>__webpack_require__.e(/* import() */ 535).then(__webpack_require__.bind(__webpack_require__, 3535)), {
    loadableGenerated: {
        modules: [
            "_app.tsx -> " + "../components/footer/footer"
        ]
    },
    suspense: true,
    ssr: false
});
function MyApp({ Component , pageProps , emotionCache =clientSideEmotionCache  }) {
    const { colorMode , theme  } = (0,styling/* useTheme */.Fg)();
    const gStyles = /*#__PURE__*/ jsx_runtime_.jsx(material_.GlobalStyles, {
        styles: {
            body: {
                backgroundImage: "linear-gradient(to left, rgba(29, 124, 181, .07), rgba(29, 181, 163,.1))"
            }
        }
    });
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_namespaceObject.CacheProvider, {
        value: emotionCache,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((script_default()), {
                strategy: "lazyOnload",
                src: `https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((script_default()), {
                id: "google_analytics",
                strategy: "lazyOnload",
                children: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
                    page_path: window.location.pathname,
                    });
                `
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "manifest",
                        href: "/manifest.json"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "viewport",
                        content: "width=device-width, initial-scale=1.0"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: "Piglet Pack"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "description",
                        content: "Piglet pack web development"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "icon",
                        href: "/favicon.ico"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "shortcut icon",
                        href: "/images/favicon.ico"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "apple-touch-icon",
                        sizes: "180x180",
                        href: "/images/apple-touch-icon.png"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "icon",
                        type: "image/png",
                        sizes: "32x32",
                        href: "/images/favicon-32x32.png"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "icon",
                        type: "image/png",
                        sizes: "16x16",
                        href: "/images/favicon-16x16.png"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(system_namespaceObject.ThemeProvider, {
                theme: theme,
                children: /*#__PURE__*/ jsx_runtime_.jsx(styling/* ColorModeContext.Provider */.kc.Provider, {
                    value: colorMode,
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((CssBaseline_default()), {
                        children: [
                            gStyles,
                            /*#__PURE__*/ jsx_runtime_.jsx(external_react_.Suspense, {
                                fallback: `Loading...`,
                                children: /*#__PURE__*/ jsx_runtime_.jsx(DynamicHeader, {})
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(Body, {
                                children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                                    ...pageProps
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(external_react_.Suspense, {
                                fallback: "...loading",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(DynamicFooter, {})
                            })
                        ]
                    })
                })
            })
        ]
    });
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 6218:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "kc": () => (/* reexport */ ColorModeContext),
  "Fg": () => (/* reexport */ useTheme)
});

// UNUSED EXPORTS: getStylingTokens

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./utilities/styling/themeContext.ts

const ColorModeContext = (0,external_react_.createContext)({
    toggleColorMode: ()=>null
});
/* harmony default export */ const themeContext = ((/* unused pure expression or super */ null && (ColorModeContext)));

// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(5692);
// EXTERNAL MODULE: ./utilities/styling/getStylingTokens.ts
var getStylingTokens = __webpack_require__(398);
;// CONCATENATED MODULE: ./utilities/styling/useTheme.ts



function useTheme(initialMode = "light") {
    const { 0: mode , 1: setMode  } = (0,external_react_.useState)(initialMode);
    const colorMode = (0,external_react_.useMemo)(()=>({
            // The dark mode switch would invoke this method
            toggleColorMode: ()=>{
                setMode((prevMode)=>prevMode === "light" ? "dark" : "light");
            }
        }), []);
    // Update the theme only if the mode changes
    const theme = (0,external_react_.useMemo)(()=>(0,material_.responsiveFontSizes)((0,material_.createTheme)((0,getStylingTokens/* default */.Z)(mode))), [
        mode
    ]);
    return {
        colorMode: colorMode,
        theme: theme
    };
}
/* harmony default export */ const styling_useTheme = ((/* unused pure expression or super */ null && (useTheme)));

;// CONCATENATED MODULE: ./utilities/styling/index.ts





/***/ }),

/***/ 1913:
/***/ ((module) => {

module.exports = require("@emotion/cache");

/***/ }),

/***/ 3365:
/***/ ((module) => {

module.exports = require("@mui/icons-material/Menu");

/***/ }),

/***/ 5692:
/***/ ((module) => {

module.exports = require("@mui/material");

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

/***/ 5832:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/loadable.js");

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
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [311,699,927,760], () => (__webpack_exec__(59)));
module.exports = __webpack_exports__;

})();