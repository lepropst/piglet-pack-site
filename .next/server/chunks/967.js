"use strict";
exports.id = 967;
exports.ids = [967];
exports.modules = {

/***/ 5313:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export MissionStatementContainer */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(19);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Box__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7163);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var markdown_to_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1904);
/* harmony import */ var markdown_to_jsx__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(markdown_to_jsx__WEBPACK_IMPORTED_MODULE_3__);




const MissionStatementContainer = (props)=>{
    const styles = {
        display: "flex",
        flexDirection: "column",
        justifyContent: props.justifyContent || "center",
        alignItems: "center",
        textAlign: "center",
        maxWidth: "30rem",
        padding: props.padding || "1em",
        marginX: "auto",
        minHeight: props.minHeight ? props.minHeight : window.innerHeight * 0.9,
        backgroundColor: props.backgroundColor ? props.backgroundColor : "inherit"
    };
    // if(props.xOffset) {
    //   styles.
    // }
    if (props.snap) {
        styles.scrollSnapAlign = props.snapAlign ? props.snapAlign : "end";
        styles.scrollSnapMargin = "2rem";
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Box__WEBPACK_IMPORTED_MODULE_1___default()), {
        sx: styles,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2___default()), {
                component: "div",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((markdown_to_jsx__WEBPACK_IMPORTED_MODULE_3___default()), {
                    children: props.content
                })
            }),
            props.children && props.children
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MissionStatementContainer);


/***/ }),

/***/ 9663:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "S": () => (/* binding */ useIntersectionObserver),
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function useIntersectionObserver({ root , ref , threshold =0.1 , margin ="0px"  }) {
    const { 0: isIntersecting , 1: setIntersecting  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const config = {
        rootMargin: margin,
        threshold: threshold,
        root: root
    };
    const callback = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((entries)=>{
        const [entry] = entries;
        setIntersecting(entry.isIntersecting);
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        const observer = new IntersectionObserver(callback, config);
        if (ref.current) {
            observer.observe(ref.current);
        }
        const el = ref.current;
        return ()=>{
            if (el) observer.unobserve(el);
        };
    });
    return isIntersecting;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useIntersectionObserver);


/***/ })

};
;