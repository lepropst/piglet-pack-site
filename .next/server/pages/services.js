"use strict";
(() => {
var exports = {};
exports.id = 54;
exports.ids = [54];
exports.modules = {

/***/ 3583:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Services": () => (/* binding */ Services),
  "default": () => (/* binding */ pages_services),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: external "@mui/material/CardContent"
var CardContent_ = __webpack_require__(8455);
var CardContent_default = /*#__PURE__*/__webpack_require__.n(CardContent_);
// EXTERNAL MODULE: external "@mui/material/Card"
var Card_ = __webpack_require__(8167);
var Card_default = /*#__PURE__*/__webpack_require__.n(Card_);
// EXTERNAL MODULE: external "@mui/material/CardHeader"
var CardHeader_ = __webpack_require__(9361);
var CardHeader_default = /*#__PURE__*/__webpack_require__.n(CardHeader_);
// EXTERNAL MODULE: external "@mui/material/Box"
var Box_ = __webpack_require__(19);
var Box_default = /*#__PURE__*/__webpack_require__.n(Box_);
// EXTERNAL MODULE: external "@mui/material/Grid"
var Grid_ = __webpack_require__(5612);
var Grid_default = /*#__PURE__*/__webpack_require__.n(Grid_);
// EXTERNAL MODULE: external "@mui/material/Paper"
var Paper_ = __webpack_require__(1598);
var Paper_default = /*#__PURE__*/__webpack_require__.n(Paper_);
// EXTERNAL MODULE: external "@mui/material/Typography"
var Typography_ = __webpack_require__(7163);
var Typography_default = /*#__PURE__*/__webpack_require__.n(Typography_);
// EXTERNAL MODULE: external "markdown-to-jsx"
var external_markdown_to_jsx_ = __webpack_require__(1904);
var external_markdown_to_jsx_default = /*#__PURE__*/__webpack_require__.n(external_markdown_to_jsx_);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(5692);
;// CONCATENATED MODULE: external "@mui/material/Collapse"
const Collapse_namespaceObject = require("@mui/material/Collapse");
var Collapse_default = /*#__PURE__*/__webpack_require__.n(Collapse_namespaceObject);
;// CONCATENATED MODULE: external "@mui/material/useMediaQuery"
const useMediaQuery_namespaceObject = require("@mui/material/useMediaQuery");
var useMediaQuery_default = /*#__PURE__*/__webpack_require__.n(useMediaQuery_namespaceObject);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: external "@mui/material/IconButton"
const IconButton_namespaceObject = require("@mui/material/IconButton");
var IconButton_default = /*#__PURE__*/__webpack_require__.n(IconButton_namespaceObject);
// EXTERNAL MODULE: external "@mui/material/styles"
var styles_ = __webpack_require__(8442);
;// CONCATENATED MODULE: ./components/services/ExpandMoreIcon.tsx



const ExpandMore = (0,styles_.styled)((props)=>{
    const { expand , ...other } = props;
    return /*#__PURE__*/ jsx_runtime_.jsx((IconButton_default()), {
        ...other
    });
})(({ theme , expand  })=>({
        transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
        marginLeft: "auto",
        transition: theme.transitions.create("transform", {
            duration: theme.transitions.duration.shortest
        })
    }));
/* harmony default export */ const ExpandMoreIcon = (ExpandMore);

;// CONCATENATED MODULE: external "@mui/icons-material/ExpandMore"
const ExpandMore_namespaceObject = require("@mui/icons-material/ExpandMore");
var ExpandMore_default = /*#__PURE__*/__webpack_require__.n(ExpandMore_namespaceObject);
;// CONCATENATED MODULE: ./components/services/ContentCard.tsx











function ContentCard(props) {
    const { 0: expanded , 1: setExpanded  } = (0,external_react_.useState)(false);
    const matches = useMediaQuery_default()((theme)=>{
        return theme.breakpoints.down("sm");
    });
    const handleExpandClick = ()=>{
        setExpanded(!expanded);
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Card_default()), {
        raised: true,
        sx: {
            padding: "1"
        },
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((CardHeader_default()), {
                title: props.title,
                action: typeof props.price === "number" ? `$${props.price}` : props.price
            }),
            matches && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.CardActions, {
                disableSpacing: true,
                children: [
                    !expanded && /*#__PURE__*/ jsx_runtime_.jsx((external_markdown_to_jsx_default()), {
                        style: {
                            height: "3em",
                            overflow: "expandOnClick"
                        },
                        children: props.description
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(ExpandMoreIcon, {
                        expand: expanded,
                        onClick: handleExpandClick,
                        "aria-expanded": expanded,
                        "aria-label": "show more",
                        children: /*#__PURE__*/ jsx_runtime_.jsx((ExpandMore_default()), {})
                    })
                ]
            }),
            matches && /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                children: /*#__PURE__*/ jsx_runtime_.jsx((CardContent_default()), {
                    onClick: ()=>setExpanded(!expanded),
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Collapse_default()), {
                        in: expanded,
                        timeout: "auto",
                        unmountOnExit: true,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((external_markdown_to_jsx_default()), {
                                children: props.content
                            }),
                            " "
                        ]
                    })
                })
            }),
            !matches && /*#__PURE__*/ jsx_runtime_.jsx((CardContent_default()), {
                children: /*#__PURE__*/ jsx_runtime_.jsx((external_markdown_to_jsx_default()), {
                    children: props.content
                })
            })
        ]
    });
}
/* harmony default export */ const services_ContentCard = (ContentCard);

;// CONCATENATED MODULE: ./components/services/index.tsx










const Layout = (props)=>{
    const { websiteServices , serverServices , projectServices , hostingService  } = props;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
        sx: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginY: "3em"
        },
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Grid_default()), {
                container: true,
                direction: "row",
                spacing: 2,
                justifyContent: "center",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                        item: true,
                        xs: 12,
                        sx: {
                            display: "flex",
                            justifyContent: "center",
                            backgroundImage: "linear-gradient(to left, rgba(29, 124, 181, .05), rgba(29, 181, 163,.3))"
                        },
                        children: /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                            variant: "h6",
                            children: "For Websites"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                        item: true,
                        xs: 12,
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Card_default()), {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx((CardHeader_default()), {
                                    title: "Single Page Website Special!",
                                    action: "$250"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((CardContent_default()), {
                                    children: [
                                        "Single page static or Wordpress websites are offered as an independent service. We can design a full page for single-page website, or simply add an extra page to your existing site.",
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            style: {
                                                height: "1em"
                                            }
                                        }),
                                        "Often creating a static single-page website is ideal for events, weddings, or other important events. With our services you can specify any design or visual effect and keep the code for use later!",
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            style: {
                                                height: "1em"
                                            }
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            style: {
                                                display: "flex",
                                                justifyContent: "center"
                                            },
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                    style: {
                                                        margin: ".5em",
                                                        padding: 0,
                                                        listStyle: "disc"
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            children: "Basic SEO Optimization"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            children: "Security Monitoring"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            children: "Basic Malware Removal"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            children: "Monitoring Errors and Outages"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            children: "Software update and function checks"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            children: "Cloud Backups"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            children: "Custom Recurring Requests"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                    style: {
                                                        margin: ".5em",
                                                        padding: 0,
                                                        listStyle: "disc"
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            children: "2 hours website support"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            children: "Staff phone support"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            children: "Updates and minor additions"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            children: "Web Developer Assistance"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            children: "Mobile Optimization"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            children: "Design Optimization"
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        })
                    }),
                    websiteServices.map((e, i)=>/*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                            item: true,
                            xs: 12,
                            md: i === Object.keys(websiteServices).length - 1 ? 12 : 6,
                            lg: 4,
                            children: /*#__PURE__*/ jsx_runtime_.jsx(services_ContentCard, {
                                title: e.title,
                                price: e.price,
                                description: e.content,
                                content: e.content
                            })
                        }, `${e.title}-${i}`)),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Grid_default()), {
                        item: true,
                        xs: 12,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((Paper_default()), {
                                sx: {
                                    padding: "1em"
                                },
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Typography_default()), {
                                    component: "div",
                                    children: [
                                        "All these service come with a flexibility guarantee. If you do not \xa0 see what you are looking for, or would like to request anything specific: send us an email!",
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            style: {
                                                height: "2em"
                                            }
                                        }),
                                        "We are able to accommodate most situations and our services always come with a service plan so we can transparently work with our clients."
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                style: {
                                    height: "2em",
                                    border: "1px solid top",
                                    width: "100%"
                                }
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                        item: true,
                        xs: 12,
                        sx: {
                            display: "flex",
                            justifyContent: "center",
                            backgroundImage: "linear-gradient(to left, rgba(29, 124, 181, .05), rgba(29, 181, 163,.3))"
                        },
                        children: "Hosting Options"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                        item: true,
                        xs: 12,
                        children: /*#__PURE__*/ jsx_runtime_.jsx((Card_default()), {
                            children: /*#__PURE__*/ jsx_runtime_.jsx((CardContent_default()), {
                                children: /*#__PURE__*/ jsx_runtime_.jsx((external_markdown_to_jsx_default()), {
                                    children: hostingService.content
                                })
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                        item: true,
                        xs: 12,
                        sx: {
                            display: "flex",
                            justifyContent: "center",
                            backgroundImage: "linear-gradient(to left, rgba(29, 124, 181, .05), rgba(29, 181, 163,.3))"
                        },
                        children: /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                            variant: "h6",
                            children: "For Servers"
                        })
                    }),
                    serverServices.map((e, i)=>/*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                            item: true,
                            xs: 12,
                            md: i % 2 === 0 && i === Object.keys(serverServices).length - 1 ? 12 : 6,
                            lg: 4,
                            sx: {
                                height: "100%"
                            },
                            children: /*#__PURE__*/ jsx_runtime_.jsx(services_ContentCard, {
                                description: e.content,
                                title: e.title,
                                price: e.price,
                                content: e.content
                            })
                        }, `${e.title}-${i}`)),
                    /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                        item: true,
                        xs: 12,
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Typography_default()), {
                            variant: "h6",
                            component: "div",
                            children: [
                                "Our services are meant to make life easier. Whether you want a completely custom set up, a content management system, or to manage a cloud drive we have experience in a versatile array of languages. There are many instances from hobby projects, to small business infrastructure, that may require the hosting or ownership of a server. We can help simplify the process of implementing most server and server-less infrastructure. Our experience in content management systems, static website servers, and APIs make our services suitable to enable you to host on or off premise.",
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    style: {
                                        height: "1em"
                                    }
                                }),
                                "We Maintain experience in",
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    style: {
                                        display: "flex"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    children: "Django"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    children: "Express"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    children: "Flask"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    children: "NextJs"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    children: "NuxtJs"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    children: "Wordpress"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    children: "NestJs"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    children: "Shopify"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    children: "Wix"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    children: "Material-ui (Googles UI Framework)"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    children: "SQL and No SQL Databases"
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                        item: true,
                        xs: 12,
                        sx: {
                            display: "flex",
                            justifyContent: "center",
                            backgroundImage: "linear-gradient(to left, rgba(29, 124, 181, .05), rgba(29, 181, 163,.3))"
                        },
                        children: /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                            variant: "h6",
                            children: "Audits"
                        })
                    }),
                    projectServices.map((e, i)=>/*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                            item: true,
                            xs: 12,
                            md: 6,
                            lg: 4,
                            children: /*#__PURE__*/ jsx_runtime_.jsx(services_ContentCard, {
                                description: e.content,
                                title: e.title,
                                price: e.price,
                                content: e.content
                            })
                        }, `${e.title}-${i}`))
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                spacing: 2,
                justifyContent: "center",
                direction: "row",
                container: true,
                alignItems: "stretch"
            })
        ]
    });
};
/* harmony default export */ const services = (Layout);

// EXTERNAL MODULE: ./lib/api/index.ts + 1 modules
var api = __webpack_require__(8495);
;// CONCATENATED MODULE: ./pages/services.tsx




const Services = (props)=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: "Web development services offered by Piglet Pack"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "description",
                        content: "Web development and design services offered by Piglet Pack, a web development and design company based in Fort Worth, Tx."
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "canonical",
                        href: "https://pigletpack.com/services"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(services, {
                serverServices: [
                    props.server_service_01,
                    props.server_service_02,
                    props.server_service_03,
                    props.server_service_04, 
                ],
                websiteServices: [
                    props.website_service_01,
                    props.website_service_02,
                    props.website_service_03, 
                ],
                projectServices: [
                    props.project_service_01,
                    props.project_service_02,
                    props.project_service_03,
                    props.project_service_04, 
                ],
                hostingService: props.hosting_service
            })
        ]
    });
};
const getStaticProps = async ()=>{
    const project_service_01 = (0,api/* getContent */.L)({
        directory: "services",
        filename: "project-service-01.md",
        fields: [
            "price",
            "content",
            "title"
        ]
    });
    const project_service_02 = (0,api/* getContent */.L)({
        directory: "services",
        filename: "project-service-02.md",
        fields: [
            "price",
            "content",
            "title"
        ]
    });
    const project_service_03 = (0,api/* getContent */.L)({
        directory: "services",
        filename: "project-service-03.md",
        fields: [
            "price",
            "content",
            "title"
        ]
    });
    const project_service_04 = (0,api/* getContent */.L)({
        directory: "services",
        filename: "project-service-04.md",
        fields: [
            "price",
            "content",
            "title"
        ]
    });
    const server_service_01 = (0,api/* getContent */.L)({
        directory: "services",
        filename: "server-service-01.md",
        fields: [
            "price",
            "content",
            "title"
        ]
    });
    const server_service_02 = (0,api/* getContent */.L)({
        directory: "services",
        filename: "server-service-02.md",
        fields: [
            "price",
            "content",
            "title"
        ]
    });
    const server_service_03 = (0,api/* getContent */.L)({
        directory: "services",
        filename: "server-service-03.md",
        fields: [
            "price",
            "content",
            "title"
        ]
    });
    const server_service_04 = (0,api/* getContent */.L)({
        directory: "services",
        filename: "server-service-04.md",
        fields: [
            "price",
            "content",
            "title"
        ]
    });
    const website_service_01 = (0,api/* getContent */.L)({
        directory: "services",
        filename: "website-service-01.md",
        fields: [
            "title",
            "price",
            "content"
        ]
    });
    const website_service_02 = (0,api/* getContent */.L)({
        directory: "services",
        filename: "website-service-02.md",
        fields: [
            "title",
            "price",
            "content"
        ]
    });
    const website_service_03 = (0,api/* getContent */.L)({
        directory: "services",
        filename: "website-service-03.md",
        fields: [
            "title",
            "price",
            "content"
        ]
    });
    const hosting_service = (0,api/* getContent */.L)({
        directory: "services",
        filename: "hosting-service.md",
        fields: [
            "content"
        ]
    });
    return {
        props: {
            project_service_01,
            project_service_02,
            project_service_03,
            project_service_04,
            server_service_01,
            server_service_02,
            server_service_03,
            server_service_04,
            website_service_01,
            website_service_02,
            website_service_03,
            hosting_service
        }
    };
};
/* harmony default export */ const pages_services = (Services);


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

/***/ 1598:
/***/ ((module) => {

module.exports = require("@mui/material/Paper");

/***/ }),

/***/ 7163:
/***/ ((module) => {

module.exports = require("@mui/material/Typography");

/***/ }),

/***/ 8442:
/***/ ((module) => {

module.exports = require("@mui/material/styles");

/***/ }),

/***/ 8076:
/***/ ((module) => {

module.exports = require("gray-matter");

/***/ }),

/***/ 1904:
/***/ ((module) => {

module.exports = require("markdown-to-jsx");

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
var __webpack_exports__ = __webpack_require__.X(0, [495], () => (__webpack_exec__(3583)));
module.exports = __webpack_exports__;

})();