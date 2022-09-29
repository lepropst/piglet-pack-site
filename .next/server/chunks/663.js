"use strict";
exports.id = 663;
exports.ids = [663];
exports.modules = {

/***/ 6663:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Header": () => (/* binding */ Header),
  "default": () => (/* binding */ Header)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./utilities/interfaces/lib/interfaces.ts
const pages = [
    "Home",
    "About",
    "Services",
    "Contact",
    "Policies", 
];
const routes = {
    home: "/home",
    about: "/about",
    services: "/services",
    contact: "/contact",
    policies: "/policies"
};
var StateActionsEnum;
(function(StateActionsEnum) {
    StateActionsEnum["setActive"] = "SET_ACTIVE";
    StateActionsEnum["setAboutPage"] = "SET_ABOUT_PAGE";
})(StateActionsEnum || (StateActionsEnum = {}));

;// CONCATENATED MODULE: ./utilities/interfaces/index.ts


// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(5692);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: external "@mui/icons-material/Menu"
var Menu_ = __webpack_require__(3365);
var Menu_default = /*#__PURE__*/__webpack_require__.n(Menu_);
// EXTERNAL MODULE: ./utilities/styling/index.ts + 2 modules
var styling = __webpack_require__(6218);
;// CONCATENATED MODULE: ./components/header/header.tsx








function CustomHeaderLink(props) {
    const router = (0,router_.useRouter)();
    return /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
        href: props.to,
        children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
            variant: "h5",
            sx: {
                textDecoration: router.pathname.toLowerCase() === props.to ? "underline" : "none",
                color: "inherit",
                marginX: "1em",
                "&:hover": {
                    textDecoration: "underline",
                    cursor: "pointer"
                }
            },
            children: props.children
        })
    });
}
function Header() {
    const { colorMode , theme  } = (0,styling/* useTheme */.Fg)();
    const isButtonVisible = (0,material_.useMediaQuery)(theme.breakpoints.down("md"));
    const { 0: anchorEl , 1: setAnchorEl  } = (0,external_react_.useState)(null);
    const open = Boolean(anchorEl);
    const handleClick = (event)=>{
        setAnchorEl(event.currentTarget);
    };
    const handleClose = ()=>{
        setAnchorEl(null);
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
        style: {
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "center",
            width: "100vw"
        },
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(CustomHeaderLink, {
                noactive: 0,
                to: "/",
                children: "Piglet Pack"
            }, 202),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Container, {
                children: [
                    isButtonVisible && /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                        sx: {
                            display: "flex",
                            flexDirection: "row",
                            marginX: "auto",
                            justifyContent: "center"
                        },
                        children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Button, {
                            id: "basic-button",
                            "aria-controls": open ? "basic-menu" : undefined,
                            "aria-haspopup": "true",
                            "aria-expanded": open ? "true" : undefined,
                            onClick: handleClick,
                            children: /*#__PURE__*/ jsx_runtime_.jsx((Menu_default()), {})
                        })
                    }),
                    isButtonVisible && /*#__PURE__*/ jsx_runtime_.jsx(material_.Menu, {
                        id: "basic-menu",
                        anchorEl: anchorEl,
                        open: open,
                        onClose: handleClose,
                        anchorOrigin: {
                            vertical: "bottom",
                            horizontal: "center"
                        },
                        transformOrigin: {
                            vertical: "top",
                            horizontal: "center"
                        },
                        MenuListProps: {
                            "aria-labelledby": "basic-button"
                        },
                        children: pages.map((e, i)=>/*#__PURE__*/ jsx_runtime_.jsx(material_.MenuItem, {
                                children: /*#__PURE__*/ jsx_runtime_.jsx(CustomHeaderLink, {
                                    noactive: e.toLowerCase() === "home" ? 1 : 0,
                                    to: "/" + e.toLowerCase(),
                                    children: e
                                })
                            }, `${e}-${i}`))
                    }),
                    !isButtonVisible && /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                        sx: {
                            display: "flex",
                            flexDirection: "row",
                            marginX: "auto",
                            justifyContent: "center"
                        },
                        children: pages.map((e, i)=>/*#__PURE__*/ jsx_runtime_.jsx(CustomHeaderLink, {
                                noactive: e.toLowerCase() === "home" ? 1 : 0,
                                to: "/" + e.toLowerCase(),
                                children: e
                            }, `${e}-${i}`))
                    })
                ]
            })
        ]
    });
};



/***/ })

};
;