(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[823],{3795:function(e,t,n){"use strict";n.d(t,{Z:function(){return k}});var r=n(3366),o=n(7462),a=n(7294),i=n(6010),s=n(4780),l=n(8216),u=n(948),c=n(1657),d=n(8791),p=n(1705),v=n(5861),h=n(4867);function m(e){return(0,h.Z)("MuiLink",e)}var f=(0,n(1588).Z)("MuiLink",["root","underlineNone","underlineHover","underlineAlways","button","focusVisible"]),g=n(4844),Z=n(1796);const y={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"};var x=({theme:e,ownerState:t})=>{const n=(e=>y[e]||e)(t.color),r=(0,g.D)(e,`palette.${n}`,!1)||t.color,o=(0,g.D)(e,`palette.${n}Channel`);return"vars"in e&&o?`rgba(${o} / 0.4)`:(0,Z.Fq)(r,.4)},b=n(5893);const w=["className","color","component","onBlur","onFocus","TypographyClasses","underline","variant","sx"],P=(0,u.ZP)(v.Z,{name:"MuiLink",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,t[`underline${(0,l.Z)(n.underline)}`],"button"===n.component&&t.button]}})((({theme:e,ownerState:t})=>(0,o.Z)({},"none"===t.underline&&{textDecoration:"none"},"hover"===t.underline&&{textDecoration:"none","&:hover":{textDecoration:"underline"}},"always"===t.underline&&(0,o.Z)({textDecoration:"underline"},"inherit"!==t.color&&{textDecorationColor:x({theme:e,ownerState:t})},{"&:hover":{textDecorationColor:"inherit"}}),"button"===t.component&&{position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none","&::-moz-focus-inner":{borderStyle:"none"},[`&.${f.focusVisible}`]:{outline:"auto"}})));var k=a.forwardRef((function(e,t){const n=(0,c.Z)({props:e,name:"MuiLink"}),{className:u,color:v="primary",component:h="a",onBlur:f,onFocus:g,TypographyClasses:Z,underline:x="always",variant:k="inherit",sx:j}=n,S=(0,r.Z)(n,w),{isFocusVisibleRef:M,onBlur:N,onFocus:F,ref:R}=(0,d.Z)(),[_,B]=a.useState(!1),D=(0,p.Z)(t,R),T=(0,o.Z)({},n,{color:v,component:h,focusVisible:_,underline:x,variant:k}),E=(e=>{const{classes:t,component:n,focusVisible:r,underline:o}=e,a={root:["root",`underline${(0,l.Z)(o)}`,"button"===n&&"button",r&&"focusVisible"]};return(0,s.Z)(a,m,t)})(T);return(0,b.jsx)(P,(0,o.Z)({color:v,className:(0,i.Z)(E.root,u),classes:Z,component:h,onBlur:e=>{N(e),!1===M.current&&B(!1),f&&f(e)},onFocus:e=>{F(e),!0===M.current&&B(!0),g&&g(e)},ref:D,ownerState:T,variant:k,sx:[...Object.keys(y).includes(v)?[]:[{color:v}],...Array.isArray(j)?j:[j]]},S))}))},5113:function(e,t,n){"use strict";n.d(t,{Z:function(){return g}});var r=n(3366),o=n(7462),a=n(7294),i=n(6010),s=n(4780),l=n(1796),u=n(948),c=n(1657),d=n(4867);function p(e){return(0,d.Z)("MuiPaper",e)}(0,n(1588).Z)("MuiPaper",["root","rounded","outlined","elevation","elevation0","elevation1","elevation2","elevation3","elevation4","elevation5","elevation6","elevation7","elevation8","elevation9","elevation10","elevation11","elevation12","elevation13","elevation14","elevation15","elevation16","elevation17","elevation18","elevation19","elevation20","elevation21","elevation22","elevation23","elevation24"]);var v=n(5893);const h=["className","component","elevation","square","variant"],m=e=>{let t;return t=e<1?5.11916*e**2:4.5*Math.log(e+1)+2,(t/100).toFixed(2)},f=(0,u.ZP)("div",{name:"MuiPaper",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,t[n.variant],!n.square&&t.rounded,"elevation"===n.variant&&t[`elevation${n.elevation}`]]}})((({theme:e,ownerState:t})=>{var n;return(0,o.Z)({backgroundColor:(e.vars||e).palette.background.paper,color:(e.vars||e).palette.text.primary,transition:e.transitions.create("box-shadow")},!t.square&&{borderRadius:e.shape.borderRadius},"outlined"===t.variant&&{border:`1px solid ${(e.vars||e).palette.divider}`},"elevation"===t.variant&&(0,o.Z)({boxShadow:(e.vars||e).shadows[t.elevation]},!e.vars&&"dark"===e.palette.mode&&{backgroundImage:`linear-gradient(${(0,l.Fq)("#fff",m(t.elevation))}, ${(0,l.Fq)("#fff",m(t.elevation))})`},e.vars&&{backgroundImage:null==(n=e.vars.overlays)?void 0:n[t.elevation]}))}));var g=a.forwardRef((function(e,t){const n=(0,c.Z)({props:e,name:"MuiPaper"}),{className:a,component:l="div",elevation:u=1,square:d=!1,variant:m="elevation"}=n,g=(0,r.Z)(n,h),Z=(0,o.Z)({},n,{component:l,elevation:u,square:d,variant:m}),y=(e=>{const{square:t,elevation:n,variant:r,classes:o}=e,a={root:["root",r,!t&&"rounded","elevation"===r&&`elevation${n}`]};return(0,s.Z)(a,p,o)})(Z);return(0,v.jsx)(f,(0,o.Z)({as:l,ownerState:Z,className:(0,i.Z)(y.root,a),ref:t},g))}))},5861:function(e,t,n){"use strict";n.d(t,{Z:function(){return y}});var r=n(3366),o=n(7462),a=n(7294),i=n(6010),s=n(9707),l=n(4780),u=n(948),c=n(1657),d=n(8216),p=n(4867);function v(e){return(0,p.Z)("MuiTypography",e)}(0,n(1588).Z)("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);var h=n(5893);const m=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],f=(0,u.ZP)("span",{name:"MuiTypography",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,n.variant&&t[n.variant],"inherit"!==n.align&&t[`align${(0,d.Z)(n.align)}`],n.noWrap&&t.noWrap,n.gutterBottom&&t.gutterBottom,n.paragraph&&t.paragraph]}})((({theme:e,ownerState:t})=>(0,o.Z)({margin:0},t.variant&&e.typography[t.variant],"inherit"!==t.align&&{textAlign:t.align},t.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},t.gutterBottom&&{marginBottom:"0.35em"},t.paragraph&&{marginBottom:16}))),g={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},Z={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"};var y=a.forwardRef((function(e,t){const n=(0,c.Z)({props:e,name:"MuiTypography"}),a=(e=>Z[e]||e)(n.color),u=(0,s.Z)((0,o.Z)({},n,{color:a})),{align:p="inherit",className:y,component:x,gutterBottom:b=!1,noWrap:w=!1,paragraph:P=!1,variant:k="body1",variantMapping:j=g}=u,S=(0,r.Z)(u,m),M=(0,o.Z)({},u,{align:p,color:a,className:y,component:x,gutterBottom:b,noWrap:w,paragraph:P,variant:k,variantMapping:j}),N=x||(P?"p":j[k]||g[k])||"span",F=(e=>{const{align:t,gutterBottom:n,noWrap:r,paragraph:o,variant:a,classes:i}=e,s={root:["root",a,"inherit"!==e.align&&`align${(0,d.Z)(t)}`,n&&"gutterBottom",r&&"noWrap",o&&"paragraph"]};return(0,l.Z)(s,v,i)})(M);return(0,h.jsx)(f,(0,o.Z)({as:N,ref:t,ownerState:M,className:(0,i.Z)(F.root,y)},S))}))},2734:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});n(7294);var r=n(6682),o=n(247);function a(){return(0,r.Z)(o.Z)}},1705:function(e,t,n){"use strict";var r=n(67);t.Z=r.Z},8791:function(e,t,n){"use strict";n.d(t,{Z:function(){return p}});var r=n(7294);let o,a=!0,i=!1;const s={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function l(e){e.metaKey||e.altKey||e.ctrlKey||(a=!0)}function u(){a=!1}function c(){"hidden"===this.visibilityState&&i&&(a=!0)}function d(e){const{target:t}=e;try{return t.matches(":focus-visible")}catch(n){}return a||function(e){const{type:t,tagName:n}=e;return!("INPUT"!==n||!s[t]||e.readOnly)||"TEXTAREA"===n&&!e.readOnly||!!e.isContentEditable}(t)}var p=function(){const e=r.useCallback((e=>{var t;null!=e&&((t=e.ownerDocument).addEventListener("keydown",l,!0),t.addEventListener("mousedown",u,!0),t.addEventListener("pointerdown",u,!0),t.addEventListener("touchstart",u,!0),t.addEventListener("visibilitychange",c,!0))}),[]),t=r.useRef(!1);return{isFocusVisibleRef:t,onFocus:function(e){return!!d(e)&&(t.current=!0,!0)},onBlur:function(){return!!t.current&&(i=!0,window.clearTimeout(o),o=window.setTimeout((()=>{i=!1}),100),t.current=!1,!0)},ref:e}}},9707:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});var r=n(7462),o=n(3366),a=n(9766),i=n(5578);const s=["sx"];function l(e){const{sx:t}=e,n=(0,o.Z)(e,s),{systemProps:l,otherProps:u}=(e=>{const t={systemProps:{},otherProps:{}};return Object.keys(e).forEach((n=>{i.Gc[n]?t.systemProps[n]=e[n]:t.otherProps[n]=e[n]})),t})(n);let c;return c=Array.isArray(t)?[l,...t]:"function"===typeof t?(...e)=>{const n=t(...e);return(0,a.P)(n)?(0,r.Z)({},l,n):l}:(0,r.Z)({},l,t),(0,r.Z)({},u,{sx:c})}},1588:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var r=n(4867);function o(e,t,n="Mui"){const o={};return t.forEach((t=>{o[t]=(0,r.Z)(e,t,n)})),o}},7960:function(e,t,n){"use strict";function r(e,t){"function"===typeof e?e(t):e&&(e.current=t)}n.d(t,{Z:function(){return r}})},67:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var r=n(7294),o=n(7960);function a(e,t){return r.useMemo((()=>null==e&&null==t?null:n=>{(0,o.Z)(e,n),(0,o.Z)(t,n)}),[e,t])}},1831:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/policies",function(){return n(3341)}])},3341:function(e,t,n){"use strict";n.r(t),n.d(t,{PolicyPage:function(){return h},__N_SSG:function(){return v},default:function(){return m}});var r=n(5893),o=n(9008),a=n.n(o),i=n(6242),s=n(3795),l=n(4267),u=n(8445),c=n(6886),d=n(5861),p=function(){return(0,r.jsxs)(c.ZP,{container:!0,spacing:3,children:[(0,r.jsx)(c.ZP,{item:!0,xs:12,children:(0,r.jsx)(d.Z,{variant:"h2",children:"PDFs and links to Google Documents of Piglet Packs policies are below."})}),(0,r.jsx)(c.ZP,{item:!0,xs:12,md:6,children:(0,r.jsxs)(i.Z,{children:[(0,r.jsx)(u.Z,{title:"Image kit hosted PDF"}),(0,r.jsx)(l.Z,{children:(0,r.jsx)(d.Z,{variant:"body1",children:(0,r.jsx)("a",{href:"https://ik.imagekit.io/yuoea5uff/pigletpack/PigletPolicy_v1_qbQF0Ta9Q.pdf",children:"PDF Link"})})})]})}),(0,r.jsx)(c.ZP,{item:!0,xs:12,md:6,children:(0,r.jsxs)(i.Z,{children:[(0,r.jsx)(u.Z,{title:"Google Doc"}),(0,r.jsx)(l.Z,{children:(0,r.jsx)(s.Z,{href:"https://drive.google.com/drive/folders/1-yzu7y2bxM375Cu5iQ6VJLhp00jg1dD-?usp=sharing",children:"Google Drive Link"})})]})})]})},v=!0,h=function(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(a(),{children:[(0,r.jsx)("title",{children:"Policies for Piglet Pack services"}),(0,r.jsx)("meta",{name:"description",content:"Policy page for the services rendered by Piglet Pack design based in Fort Worth, Tx."}),(0,r.jsx)("link",{rel:"canonical",href:"https://pigletpack.com/policies"})]}),(0,r.jsx)(p,{})]})},m=h}},function(e){e.O(0,[138,774,888,179],(function(){return t=1831,e(e.s=t);var t}));var t=e.O();_N_E=t}]);