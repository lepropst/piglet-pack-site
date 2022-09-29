"use strict";
exports.id = 398;
exports.ids = [398];
exports.modules = {

/***/ 398:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export getStylingTokens */
// {"Star Command Blue":"1D7CB5","Blue NCS":"1D86B2","Blue Munsell":"1D8FAF","Blue Munsell 2":"1D99AC","Viridian Green":"1DA2A9","Light Sea Green":"1DACA6","Keppel":"1DB5A3"}
const getStylingTokens = (mode)=>({
        palette: {
            mode,
            ...mode === "light" ? {
                // palette values for light mode
                primary: {
                    main: "#1d7cb5"
                },
                secondary: {
                    main: "#1db5a3"
                },
                success: {
                    main: "#ee95e0ff"
                },
                background: {
                    paper: "#FCFEFF"
                }
            } : {
                primary: {
                    main: "#1d7cb5"
                },
                secondary: {
                    main: "#1db5a3"
                },
                success: {
                    main: "#ee95e0ff"
                },
                background: {
                    paper: "#ECFAFC"
                }
            }
        },
        typography: {
            subtitle2: {
                fontFamily: "Roboto",
                fontWeight: 400,
                fontSize: "1.2em",
                lineHeight: 1.6,
                letterSpacing: "0.0075em"
            }
        }
    });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getStylingTokens);


/***/ })

};
;