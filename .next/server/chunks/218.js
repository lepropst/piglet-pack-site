"use strict";
exports.id = 218;
exports.ids = [218];
exports.modules = {

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





/***/ })

};
;