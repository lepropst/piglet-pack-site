(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[650],{326:function(e,t,n){"use strict";var o=n(4836);t.Z=void 0;var r=o(n(4938)),a=n(5893),i=(0,r.default)((0,a.jsx)("path",{d:"M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"}),"Menu");t.Z=i},4938:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o.createSvgIcon}});var o=n(3875)},3321:function(e,t,n){"use strict";n.d(t,{Z:function(){return w}});var o=n(3366),r=n(7462),a=n(7294),i=n(6010),l=n(7925),s=n(4780),c=n(1796),u=n(948),d=n(1657),p=n(7739),f=n(8216),v=n(4867);function m(e){return(0,v.Z)("MuiButton",e)}var h=(0,n(1588).Z)("MuiButton",["root","text","textInherit","textPrimary","textSecondary","textSuccess","textError","textInfo","textWarning","outlined","outlinedInherit","outlinedPrimary","outlinedSecondary","outlinedSuccess","outlinedError","outlinedInfo","outlinedWarning","contained","containedInherit","containedPrimary","containedSecondary","containedSuccess","containedError","containedInfo","containedWarning","disableElevation","focusVisible","disabled","colorInherit","textSizeSmall","textSizeMedium","textSizeLarge","outlinedSizeSmall","outlinedSizeMedium","outlinedSizeLarge","containedSizeSmall","containedSizeMedium","containedSizeLarge","sizeMedium","sizeSmall","sizeLarge","fullWidth","startIcon","endIcon","iconSizeSmall","iconSizeMedium","iconSizeLarge"]);var b=a.createContext({}),g=n(5893);const y=["children","color","component","className","disabled","disableElevation","disableFocusRipple","endIcon","focusVisibleClassName","fullWidth","size","startIcon","type","variant"],x=e=>(0,r.Z)({},"small"===e.size&&{"& > *:nth-of-type(1)":{fontSize:18}},"medium"===e.size&&{"& > *:nth-of-type(1)":{fontSize:20}},"large"===e.size&&{"& > *:nth-of-type(1)":{fontSize:22}}),Z=(0,u.ZP)(p.Z,{shouldForwardProp:e=>(0,u.FO)(e)||"classes"===e,name:"MuiButton",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,t[n.variant],t[`${n.variant}${(0,f.Z)(n.color)}`],t[`size${(0,f.Z)(n.size)}`],t[`${n.variant}Size${(0,f.Z)(n.size)}`],"inherit"===n.color&&t.colorInherit,n.disableElevation&&t.disableElevation,n.fullWidth&&t.fullWidth]}})((({theme:e,ownerState:t})=>{var n,o;return(0,r.Z)({},e.typography.button,{minWidth:64,padding:"6px 16px",borderRadius:(e.vars||e).shape.borderRadius,transition:e.transitions.create(["background-color","box-shadow","border-color","color"],{duration:e.transitions.duration.short}),"&:hover":(0,r.Z)({textDecoration:"none",backgroundColor:e.vars?`rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,c.Fq)(e.palette.text.primary,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"text"===t.variant&&"inherit"!==t.color&&{backgroundColor:e.vars?`rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,c.Fq)(e.palette[t.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"outlined"===t.variant&&"inherit"!==t.color&&{border:`1px solid ${(e.vars||e).palette[t.color].main}`,backgroundColor:e.vars?`rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,c.Fq)(e.palette[t.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"contained"===t.variant&&{backgroundColor:(e.vars||e).palette.grey.A100,boxShadow:(e.vars||e).shadows[4],"@media (hover: none)":{boxShadow:(e.vars||e).shadows[2],backgroundColor:(e.vars||e).palette.grey[300]}},"contained"===t.variant&&"inherit"!==t.color&&{backgroundColor:(e.vars||e).palette[t.color].dark,"@media (hover: none)":{backgroundColor:(e.vars||e).palette[t.color].main}}),"&:active":(0,r.Z)({},"contained"===t.variant&&{boxShadow:(e.vars||e).shadows[8]}),[`&.${h.focusVisible}`]:(0,r.Z)({},"contained"===t.variant&&{boxShadow:(e.vars||e).shadows[6]}),[`&.${h.disabled}`]:(0,r.Z)({color:(e.vars||e).palette.action.disabled},"outlined"===t.variant&&{border:`1px solid ${(e.vars||e).palette.action.disabledBackground}`},"outlined"===t.variant&&"secondary"===t.color&&{border:`1px solid ${(e.vars||e).palette.action.disabled}`},"contained"===t.variant&&{color:(e.vars||e).palette.action.disabled,boxShadow:(e.vars||e).shadows[0],backgroundColor:(e.vars||e).palette.action.disabledBackground})},"text"===t.variant&&{padding:"6px 8px"},"text"===t.variant&&"inherit"!==t.color&&{color:(e.vars||e).palette[t.color].main},"outlined"===t.variant&&{padding:"5px 15px",border:"1px solid currentColor"},"outlined"===t.variant&&"inherit"!==t.color&&{color:(e.vars||e).palette[t.color].main,border:e.vars?`1px solid rgba(${e.vars.palette[t.color].mainChannel} / 0.5)`:`1px solid ${(0,c.Fq)(e.palette[t.color].main,.5)}`},"contained"===t.variant&&{color:e.vars?e.vars.palette.text.primary:null==(n=(o=e.palette).getContrastText)?void 0:n.call(o,e.palette.grey[300]),backgroundColor:(e.vars||e).palette.grey[300],boxShadow:(e.vars||e).shadows[2]},"contained"===t.variant&&"inherit"!==t.color&&{color:(e.vars||e).palette[t.color].contrastText,backgroundColor:(e.vars||e).palette[t.color].main},"inherit"===t.color&&{color:"inherit",borderColor:"currentColor"},"small"===t.size&&"text"===t.variant&&{padding:"4px 5px",fontSize:e.typography.pxToRem(13)},"large"===t.size&&"text"===t.variant&&{padding:"8px 11px",fontSize:e.typography.pxToRem(15)},"small"===t.size&&"outlined"===t.variant&&{padding:"3px 9px",fontSize:e.typography.pxToRem(13)},"large"===t.size&&"outlined"===t.variant&&{padding:"7px 21px",fontSize:e.typography.pxToRem(15)},"small"===t.size&&"contained"===t.variant&&{padding:"4px 10px",fontSize:e.typography.pxToRem(13)},"large"===t.size&&"contained"===t.variant&&{padding:"8px 22px",fontSize:e.typography.pxToRem(15)},t.fullWidth&&{width:"100%"})}),(({ownerState:e})=>e.disableElevation&&{boxShadow:"none","&:hover":{boxShadow:"none"},[`&.${h.focusVisible}`]:{boxShadow:"none"},"&:active":{boxShadow:"none"},[`&.${h.disabled}`]:{boxShadow:"none"}})),S=(0,u.ZP)("span",{name:"MuiButton",slot:"StartIcon",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.startIcon,t[`iconSize${(0,f.Z)(n.size)}`]]}})((({ownerState:e})=>(0,r.Z)({display:"inherit",marginRight:8,marginLeft:-4},"small"===e.size&&{marginLeft:-2},x(e)))),C=(0,u.ZP)("span",{name:"MuiButton",slot:"EndIcon",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.endIcon,t[`iconSize${(0,f.Z)(n.size)}`]]}})((({ownerState:e})=>(0,r.Z)({display:"inherit",marginRight:-4,marginLeft:8},"small"===e.size&&{marginRight:-2},x(e))));var w=a.forwardRef((function(e,t){const n=a.useContext(b),c=(0,l.Z)(n,e),u=(0,d.Z)({props:c,name:"MuiButton"}),{children:p,color:v="primary",component:h="button",className:x,disabled:w=!1,disableElevation:M=!1,disableFocusRipple:z=!1,endIcon:I,focusVisibleClassName:$,fullWidth:k=!1,size:R="medium",startIcon:_,type:O,variant:E="text"}=u,L=(0,o.Z)(u,y),j=(0,r.Z)({},u,{color:v,component:h,disabled:w,disableElevation:M,disableFocusRipple:z,fullWidth:k,size:R,type:O,variant:E}),P=(e=>{const{color:t,disableElevation:n,fullWidth:o,size:a,variant:i,classes:l}=e,c={root:["root",i,`${i}${(0,f.Z)(t)}`,`size${(0,f.Z)(a)}`,`${i}Size${(0,f.Z)(a)}`,"inherit"===t&&"colorInherit",n&&"disableElevation",o&&"fullWidth"],label:["label"],startIcon:["startIcon",`iconSize${(0,f.Z)(a)}`],endIcon:["endIcon",`iconSize${(0,f.Z)(a)}`]},u=(0,s.Z)(c,m,l);return(0,r.Z)({},l,u)})(j),F=_&&(0,g.jsx)(S,{className:P.startIcon,ownerState:j,children:_}),N=I&&(0,g.jsx)(C,{className:P.endIcon,ownerState:j,children:I});return(0,g.jsxs)(Z,(0,r.Z)({ownerState:j,className:(0,i.Z)(x,n.className),component:h,disabled:w,focusRipple:!z,focusVisibleClassName:(0,i.Z)(P.focusVisible,$),ref:t,type:O},L,{classes:P,children:[F,p,N]}))}))},5097:function(e,t,n){"use strict";n.d(t,{V:function(){return r}});var o=n(4867);function r(e){return(0,o.Z)("MuiDivider",e)}const a=(0,n(1588).Z)("MuiDivider",["root","absolute","fullWidth","inset","middle","flexItem","light","vertical","withChildren","withChildrenVertical","textAlignRight","textAlignLeft","wrapper","wrapperVertical"]);t.Z=a},3599:function(e,t,n){"use strict";n.d(t,{Z:function(){return M}});var o=n(3366),r=n(7462),a=n(7294),i=n(6010),l=n(4780),s=n(1796),c=n(948),u=n(1657),d=n(9773),p=n(7739),f=n(8974),v=n(1705),m=n(5097),h=n(1588);var b=(0,h.Z)("MuiListItemIcon",["root","alignItemsFlexStart"]);var g=(0,h.Z)("MuiListItemText",["root","multiline","dense","inset","primary","secondary"]),y=n(4867);function x(e){return(0,y.Z)("MuiMenuItem",e)}var Z=(0,h.Z)("MuiMenuItem",["root","focusVisible","dense","disabled","divider","gutters","selected"]),S=n(5893);const C=["autoFocus","component","dense","divider","disableGutters","focusVisibleClassName","role","tabIndex"],w=(0,c.ZP)(p.Z,{shouldForwardProp:e=>(0,c.FO)(e)||"classes"===e,name:"MuiMenuItem",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,n.dense&&t.dense,n.divider&&t.divider,!n.disableGutters&&t.gutters]}})((({theme:e,ownerState:t})=>(0,r.Z)({},e.typography.body1,{display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",minHeight:48,paddingTop:6,paddingBottom:6,boxSizing:"border-box",whiteSpace:"nowrap"},!t.disableGutters&&{paddingLeft:16,paddingRight:16},t.divider&&{borderBottom:`1px solid ${(e.vars||e).palette.divider}`,backgroundClip:"padding-box"},{"&:hover":{textDecoration:"none",backgroundColor:(e.vars||e).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${Z.selected}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:(0,s.Fq)(e.palette.primary.main,e.palette.action.selectedOpacity),[`&.${Z.focusVisible}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`:(0,s.Fq)(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.focusOpacity)}},[`&.${Z.selected}:hover`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`:(0,s.Fq)(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:(0,s.Fq)(e.palette.primary.main,e.palette.action.selectedOpacity)}},[`&.${Z.focusVisible}`]:{backgroundColor:(e.vars||e).palette.action.focus},[`&.${Z.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity},[`& + .${m.Z.root}`]:{marginTop:e.spacing(1),marginBottom:e.spacing(1)},[`& + .${m.Z.inset}`]:{marginLeft:52},[`& .${g.root}`]:{marginTop:0,marginBottom:0},[`& .${g.inset}`]:{paddingLeft:36},[`& .${b.root}`]:{minWidth:36}},!t.dense&&{[e.breakpoints.up("sm")]:{minHeight:"auto"}},t.dense&&(0,r.Z)({minHeight:32,paddingTop:4,paddingBottom:4},e.typography.body2,{[`& .${b.root} svg`]:{fontSize:"1.25rem"}}))));var M=a.forwardRef((function(e,t){const n=(0,u.Z)({props:e,name:"MuiMenuItem"}),{autoFocus:s=!1,component:c="li",dense:p=!1,divider:m=!1,disableGutters:h=!1,focusVisibleClassName:b,role:g="menuitem",tabIndex:y}=n,Z=(0,o.Z)(n,C),M=a.useContext(d.Z),z={dense:p||M.dense||!1,disableGutters:h},I=a.useRef(null);(0,f.Z)((()=>{s&&I.current&&I.current.focus()}),[s]);const $=(0,r.Z)({},n,{dense:z.dense,divider:m,disableGutters:h}),k=(e=>{const{disabled:t,dense:n,divider:o,disableGutters:a,selected:i,classes:s}=e,c={root:["root",n&&"dense",t&&"disabled",!a&&"gutters",o&&"divider",i&&"selected"]},u=(0,l.Z)(c,x,s);return(0,r.Z)({},s,u)})(n),R=(0,v.Z)(I,t);let _;return n.disabled||(_=void 0!==y?y:-1),(0,S.jsx)(d.Z.Provider,{value:z,children:(0,S.jsx)(w,(0,r.Z)({ref:R,role:g,tabIndex:_,component:c,focusVisibleClassName:(0,i.Z)(k.focusVisible,b)},Z,{ownerState:$,classes:k}))})}))},8396:function(e,t,n){"use strict";var o;n.d(t,{Z:function(){return d}});var r=n(7294),a=n(4168),i=n(539),l=n(8974);function s(e,t,n,o,a){const i="undefined"!==typeof window&&"undefined"!==typeof window.matchMedia,[s,c]=r.useState((()=>a&&i?n(e).matches:o?o(e).matches:t));return(0,l.Z)((()=>{let t=!0;if(!i)return;const o=n(e),r=()=>{t&&c(o.matches)};return r(),o.addListener(r),()=>{t=!1,o.removeListener(r)}}),[e,n,i]),s}const c=(o||(o=n.t(r,2))).useSyncExternalStore;function u(e,t,n,o){const a=r.useCallback((()=>t),[t]),i=r.useMemo((()=>{if(null!==o){const{matches:t}=o(e);return()=>t}return a}),[a,e,o]),[l,s]=r.useMemo((()=>{if(null===n)return[a,()=>()=>{}];const t=n(e);return[()=>t.matches,e=>(t.addListener(e),()=>{t.removeListener(e)})]}),[a,n,e]);return c(s,l,i)}function d(e,t={}){const n=(0,a.Z)(),o="undefined"!==typeof window&&"undefined"!==typeof window.matchMedia,{defaultMatches:r=!1,matchMedia:l=(o?window.matchMedia:null),ssrMatchMedia:d=null,noSsr:p}=(0,i.Z)({name:"MuiUseMediaQuery",props:t,theme:n});let f="function"===typeof e?e(n):e;f=f.replace(/^@media( ?)/m,"");return(void 0!==c?u:s)(f,r,l,d,p)}},3875:function(e,t,n){"use strict";n.r(t),n.d(t,{capitalize:function(){return r.Z},createChainedFunction:function(){return a},createSvgIcon:function(){return i.Z},debounce:function(){return l.Z},deprecatedPropType:function(){return s},isMuiElement:function(){return c.Z},ownerDocument:function(){return u.Z},ownerWindow:function(){return d.Z},requirePropFactory:function(){return p},setRef:function(){return f},unstable_ClassNameGenerator:function(){return Z},unstable_useEnhancedEffect:function(){return v.Z},unstable_useId:function(){return m},unsupportedProp:function(){return h},useControlled:function(){return b.Z},useEventCallback:function(){return g.Z},useForkRef:function(){return y.Z},useIsFocusVisible:function(){return x.Z}});var o=n(7078),r=n(8216),a=n(9064).Z,i=n(8169),l=n(7144);var s=function(e,t){return()=>null},c=n(1579),u=n(8038),d=n(5340);n(7462);var p=function(e,t){return()=>null},f=n(7960).Z,v=n(8974),m=n(7579).Z;var h=function(e,t,n,o,r){return null},b=n(2627),g=n(2068),y=n(1705),x=n(8791);const Z={configure:e=>{console.warn(["MUI: `ClassNameGenerator` import from `@mui/material/utils` is outdated and might cause unexpected issues.","","You should use `import { unstable_ClassNameGenerator } from '@mui/material/className'` instead","","The detail of the issue: https://github.com/mui/material-ui/issues/30011#issuecomment-1024993401","","The updated documentation: https://mui.com/guides/classname-generator/"].join("\n")),o.Z.configure(e)}}},1210:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=function(e,t,n,o){return!1};("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8418:function(e,t,n){"use strict";var o=n(4941).Z;n(5753).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,a=(r=n(7294))&&r.__esModule?r:{default:r},i=n(6273),l=n(2725),s=n(3462),c=n(1018),u=n(7190),d=n(1210),p=n(8684);var f="undefined"!==typeof a.default.useTransition,v={};function m(e,t,n,o){if(e&&i.isLocalURL(t)){e.prefetch(t,n,o).catch((function(e){0}));var r=o&&"undefined"!==typeof o.locale?o.locale:e&&e.locale;v[t+"%"+n+(r?"%"+r:"")]=!0}}var h=a.default.forwardRef((function(e,t){var n,r=e.href,h=e.as,b=e.children,g=e.prefetch,y=e.passHref,x=e.replace,Z=e.shallow,S=e.scroll,C=e.locale,w=e.onClick,M=e.onMouseEnter,z=e.legacyBehavior,I=void 0===z?!0!==Boolean(!1):z,$=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","legacyBehavior"]);n=b,!I||"string"!==typeof n&&"number"!==typeof n||(n=a.default.createElement("a",null,n));var k=!1!==g,R=o(f?a.default.useTransition():[],2)[1],_=a.default.useContext(s.RouterContext),O=a.default.useContext(c.AppRouterContext);O&&(_=O);var E,L=a.default.useMemo((function(){var e=o(i.resolveHref(_,r,!0),2),t=e[0],n=e[1];return{href:t,as:h?i.resolveHref(_,h):n||t}}),[_,r,h]),j=L.href,P=L.as,F=a.default.useRef(j),N=a.default.useRef(P);I&&(E=a.default.Children.only(n));var T=I?E&&"object"===typeof E&&E.ref:t,V=o(u.useIntersection({rootMargin:"200px"}),3),B=V[0],W=V[1],q=V[2],D=a.default.useCallback((function(e){N.current===P&&F.current===j||(q(),N.current=P,F.current=j),B(e),T&&("function"===typeof T?T(e):"object"===typeof T&&(T.current=e))}),[P,T,j,q,B]);a.default.useEffect((function(){var e=W&&k&&i.isLocalURL(j),t="undefined"!==typeof C?C:_&&_.locale,n=v[j+"%"+P+(t?"%"+t:"")];e&&!n&&m(_,j,P,{locale:t})}),[P,j,W,C,k,_]);var G={ref:D,onClick:function(e){I||"function"!==typeof w||w(e),I&&E.props&&"function"===typeof E.props.onClick&&E.props.onClick(e),e.defaultPrevented||function(e,t,n,o,r,a,l,s,c){if("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&i.isLocalURL(n)){e.preventDefault();var u=function(){t[r?"replace":"push"](n,o,{shallow:a,locale:s,scroll:l})};c?c(u):u()}}(e,_,j,P,x,Z,S,C,O?R:void 0)},onMouseEnter:function(e){I||"function"!==typeof M||M(e),I&&E.props&&"function"===typeof E.props.onMouseEnter&&E.props.onMouseEnter(e),i.isLocalURL(j)&&m(_,j,P,{priority:!0})}};if(!I||y||"a"===E.type&&!("href"in E.props)){var H="undefined"!==typeof C?C:_&&_.locale,A=_&&_.isLocaleDomain&&d.getDomainLocale(P,H,_.locales,_.domainLocales);G.href=A||p.addBasePath(l.addLocale(P,H,_&&_.defaultLocale))}return I?a.default.cloneElement(E,G):a.default.createElement("a",Object.assign({},$,G),n)}));t.default=h,("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7190:function(e,t,n){"use strict";var o=n(4941).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,n=e.rootMargin,c=e.disabled||!i,u=r.useRef(),d=o(r.useState(!1),2),p=d[0],f=d[1],v=o(r.useState(null),2),m=v[0],h=v[1];r.useEffect((function(){if(i){if(u.current&&(u.current(),u.current=void 0),c||p)return;return m&&m.tagName&&(u.current=function(e,t,n){var o=function(e){var t,n={root:e.root||null,margin:e.rootMargin||""},o=s.find((function(e){return e.root===n.root&&e.margin===n.margin}));if(o&&(t=l.get(o)))return t;var r=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return t={id:n,observer:a,elements:r},s.push(n),l.set(n,t),t}(n),r=o.id,a=o.observer,i=o.elements;return i.set(e,t),a.observe(e),function(){if(i.delete(e),a.unobserve(e),0===i.size){a.disconnect(),l.delete(r);var t=s.findIndex((function(e){return e.root===r.root&&e.margin===r.margin}));t>-1&&s.splice(t,1)}}}(m,(function(e){return e&&f(e)}),{root:null==t?void 0:t.current,rootMargin:n})),function(){null==u.current||u.current(),u.current=void 0}}if(!p){var e=a.requestIdleCallback((function(){return f(!0)}));return function(){return a.cancelIdleCallback(e)}}}),[m,c,n,t,p]);var b=r.useCallback((function(){f(!1)}),[]);return[h,p,b]};var r=n(7294),a=n(9311),i="function"===typeof IntersectionObserver;var l=new Map,s=[];("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1018:function(e,t,n){"use strict";var o;Object.defineProperty(t,"__esModule",{value:!0}),t.AppRouterContext=void 0;var r=((o=n(7294))&&o.__esModule?o:{default:o}).default.createContext(null);t.AppRouterContext=r},1664:function(e,t,n){e.exports=n(8418)},1163:function(e,t,n){e.exports=n(387)},4836:function(e){e.exports=function(e){return e&&e.__esModule?e:{default:e}},e.exports.__esModule=!0,e.exports.default=e.exports}}]);