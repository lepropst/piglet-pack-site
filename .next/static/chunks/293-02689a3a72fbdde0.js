(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[293],{6243:function(e,t,n){"use strict";var r=n(7294);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}const o=["children","options"],a=["allowFullScreen","allowTransparency","autoComplete","autoFocus","autoPlay","cellPadding","cellSpacing","charSet","className","classId","colSpan","contentEditable","contextMenu","crossOrigin","encType","formAction","formEncType","formMethod","formNoValidate","formTarget","frameBorder","hrefLang","inputMode","keyParams","keyType","marginHeight","marginWidth","maxLength","mediaGroup","minLength","noValidate","radioGroup","readOnly","rowSpan","spellCheck","srcDoc","srcLang","srcSet","tabIndex","useMap"].reduce(((e,t)=>(e[t.toLowerCase()]=t,e)),{for:"htmlFor"}),l={amp:"&",apos:"'",gt:">",lt:"<",nbsp:"\xa0",quot:"\u201c"},c=["style","script"],u=/([-A-Z0-9_:]+)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|(?:\{((?:\\.|{[^}]*?}|[^}])*)\})))?/gi,s=/mailto:/i,d=/\n{2,}$/,f=/^( *>[^\n]+(\n[^\n]+)*\n*)+\n{2,}/,p=/^ *> ?/gm,g=/^ {2,}\n/,m=/^(?:( *[-*_]) *){3,}(?:\n *)+\n/,y=/^\s*(`{3,}|~{3,}) *(\S+)? *\n([\s\S]+?)\s*\1 *(?:\n *)+\n?/,h=/^(?: {4}[^\n]+\n*)+(?:\n *)+\n?/,b=/^(`+)\s*([\s\S]*?[^`])\s*\1(?!`)/,v=/^(?:\n *)*\n/,w=/\r\n?/g,k=/^\[\^([^\]]+)](:.*)\n/,S=/^\[\^([^\]]+)]/,x=/\f/g,O=/^\s*?\[(x|\s)\]/,_=/^ *(#{1,6}) *([^\n]+?)(?: +#*)?(?:\n *)*(?:\n|$)/,A=/^([^\n]+)\n *(=|-){3,} *(?:\n *)+\n/,z=/^ *(?!<[a-z][^ >/]* ?\/>)<([a-z][^ >/]*) ?([^>]*)\/{0}>\n?(\s*(?:<\1[^>]*?>[\s\S]*?<\/\1>|(?!<\1)[\s\S])*?)<\/\1>\n*/i,I=/&([a-z]+);/g,j=/^<!--[\s\S]*?(?:-->)/,E=/^(data|aria|x)-[a-z_][a-z\d_.-]*$/,M=/^ *<([a-z][a-z0-9:]*)(?:\s+((?:<.*?>|[^>])*))?\/?>(?!<\/\1>)(\s*\n)?/i,L=/^\{.*\}$/,C=/^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/,H=/^<([^ >]+@[^ >]+)>/,R=/^<([^ >]+:\/[^ >]+)>/,P=/ *\n+$/,$=/(?:^|\n)( *)$/,N=/-([a-z])?/gi,W=/^(.*\|?.*)\n *(\|? *[-:]+ *\|[-| :]*)\n((?:.*\|.*\n)*)\n?/,D=/^\[([^\]]*)\]:\s*(\S+)\s*("([^"]*)")?/,G=/^!\[([^\]]*)\] ?\[([^\]]*)\]/,q=/^\[([^\]]*)\] ?\[([^\]]*)\]/,B=/(\[|\])/g,T=/(\n|^[-*]\s|^#|^ {2,}|^-{2,}|^>\s)/,U=/\t/g,X=/^ *\| */,Z=/(^ *\||\| *$)/g,F=/ *$/,V=/^ *:-+: *$/,J=/^ *:-+ *$/,Q=/^ *-+: *$/,K=/^([*_])\1((?:\[.*?\][([].*?[)\]]|<.*?>(?:.*?<.*?>)?|`.*?`|~+.*?~+|.)*?)\1\1(?!\1)/,Y=/^([*_])((?:\[.*?\][([].*?[)\]]|<.*?>(?:.*?<.*?>)?|`.*?`|~+.*?~+|.)*?)\1(?!\1|\w)/,ee=/^~~((?:\[.*?\]|<.*?>(?:.*?<.*?>)?|`.*?`|.)*?)~~/,te=/^\\([^0-9A-Za-z\s])/,ne=/^[\s\S]+?(?=[^0-9A-Z\s\u00c0-\uffff&;.()'"]|\d+\.|\n\n| {2,}\n|\w+:\S|$)/i,re=/^\n+/,ie=/^([ \t]*)/,oe=/\\([^0-9A-Z\s])/gi,ae=new RegExp("^( *)((?:[*+-]|\\d+\\.)) +"),le=new RegExp("^( *)((?:[*+-]|\\d+\\.)) +[^\\n]*(?:\\n(?!\\1(?:[*+-]|\\d+\\.) )[^\\n]*)*(\\n|$)","gm"),ce=new RegExp("^( *)((?:[*+-]|\\d+\\.)) [\\s\\S]+?(?:\\n{2,}(?! )(?!\\1(?:[*+-]|\\d+\\.) (?!(?:[*+-]|\\d+\\.) ))\\n*|\\s*\\n*$)"),ue="(?:\\[[^\\]]*\\]|[^\\[\\]]|\\](?=[^\\[]*\\]))*",se=new RegExp("^\\[("+ue+")\\]\\(\\s*<?((?:[^\\s\\\\]|\\\\.)*?)>?(?:\\s+['\"]([\\s\\S]*?)['\"])?\\s*\\)"),de=new RegExp("^!\\[("+ue+")\\]\\(\\s*<?((?:[^\\s\\\\]|\\\\.)*?)>?(?:\\s+['\"]([\\s\\S]*?)['\"])?\\s*\\)"),fe=[f,h,y,_,A,j,le,ce,W],pe=[...fe,/^[^\n]+(?:  \n|\n{2,})/,z,M];function ge(e){return e.replace(/[\xc0\xc1\xc2\xc3\xc4\xc5\xe0\xe1\xe2\xe3\xe4\xe5\xe6\xc6]/g,"a").replace(/[\xe7\xc7]/g,"c").replace(/[\xf0\xd0]/g,"d").replace(/[\xc8\xc9\xca\xcb\xe9\xe8\xea\xeb]/g,"e").replace(/[\xcf\xef\xce\xee\xcd\xed\xcc\xec]/g,"i").replace(/[\xd1\xf1]/g,"n").replace(/[\xf8\xd8\u0153\u0152\xd5\xf5\xd4\xf4\xd3\xf3\xd2\xf2]/g,"o").replace(/[\xdc\xfc\xdb\xfb\xda\xfa\xd9\xf9]/g,"u").replace(/[\u0178\xff\xdd\xfd]/g,"y").replace(/[^a-z0-9- ]/gi,"").replace(/ /gi,"-").toLowerCase()}function me(e){return Q.test(e)?"right":V.test(e)?"center":J.test(e)?"left":null}function ye(e,t,n){const r=n.t;n.t=!0;const i=t(e.trim(),n);n.t=r;let o=[[]];return i.forEach((function(e,t){"tableSeparator"===e.type?0!==t&&t!==i.length-1&&o.push([]):("text"!==e.type||null!=i[t+1]&&"tableSeparator"!==i[t+1].type||(e.content=e.content.replace(F,"")),o[o.length-1].push(e))})),o}function he(e,t,n){n.o=!0;const r=ye(e[1],t,n),i=e[2].replace(Z,"").split("|").map(me),o=function(e,t,n){return e.trim().split("\n").map((function(e){return ye(e,t,n)}))}(e[3],t,n);return n.o=!1,{align:i,cells:o,header:r,type:"table"}}function be(e,t){return null==e.align[t]?{}:{textAlign:e.align[t]}}function ve(e){return function(t,n){return n.o?e.exec(t):null}}function we(e){return function(t,n){return n.o||n.u?e.exec(t):null}}function ke(e){return function(t,n){return n.o||n.u?null:e.exec(t)}}function Se(e){return function(t){return e.exec(t)}}function xe(e,t,n){if(t.o||t.u)return null;if(n&&!n.endsWith("\n"))return null;let r="";e.split("\n").every((e=>!fe.some((t=>t.test(e)))&&(r+=e+"\n",e.trim())));const i=r.trimEnd();return""==i?null:[r,i]}function Oe(e){try{if(decodeURIComponent(e).replace(/[^A-Za-z0-9/:]/g,"").match(/^\s*(javascript|vbscript|data):/i))return null}catch(e){return null}return e}function _e(e){return e.replace(oe,"$1")}function Ae(e,t,n){const r=n.o||!1,i=n.u||!1;n.o=!0,n.u=!0;const o=e(t,n);return n.o=r,n.u=i,o}function ze(e,t,n){const r=n.o||!1,i=n.u||!1;n.o=!1,n.u=!0;const o=e(t,n);return n.o=r,n.u=i,o}function Ie(e,t,n){return n.o=!1,e(t+"\n\n",n)}const je=(e,t,n)=>({content:Ae(t,e[1],n)});function Ee(){return{}}function Me(){return null}function Le(...e){return e.filter(Boolean).join(" ")}function Ce(e,t,n){let r=e;const i=t.split(".");for(;i.length&&(r=r[i[0]],void 0!==r);)i.shift();return r||n}var He,Re;function Pe(e,t={}){t.overrides=t.overrides||{},t.slugify=t.slugify||ge,t.namedCodesToUnicode=t.namedCodesToUnicode?i({},l,t.namedCodesToUnicode):l;const n=t.createElement||r.createElement;function o(e,r,...o){const a=Ce(t.overrides,`${e}.props`,{});return n(function(e,t){const n=Ce(t,e);return n?"function"==typeof n||"object"==typeof n&&"render"in n?n:Ce(t,`${e}.component`,e):e}(e,t.overrides),i({},r,a,{className:Le(null==r?void 0:r.className,a.className)||void 0}),...o)}function Z(e){let n=!1;t.forceInline?n=!0:t.forceBlock||(n=!1===T.test(e));const i=ue(oe(n?e:`${e.trimEnd().replace(re,"")}\n\n`,{o:n}));for(;"string"==typeof i[i.length-1]&&!i[i.length-1].trim();)i.pop();if(null===t.wrapper)return i;const a=t.wrapper||(n?"span":"div");let l;if(i.length>1||t.forceWrapper)l=i;else{if(1===i.length)return l=i[0],"string"==typeof l?o("span",{key:"outer"},l):l;l=null}return r.createElement(a,{key:"outer"},l)}function F(e){const t=e.match(u);return t?t.reduce((function(e,t,n){const i=t.indexOf("=");if(-1!==i){const l=(o=t.slice(0,i),-1!==o.indexOf("-")&&null===o.match(E)&&(o=o.replace(N,(function(e,t){return t.toUpperCase()}))),o).trim(),c=function(e){const t=e[0];return('"'===t||"'"===t)&&e.length>=2&&e[e.length-1]===t?e.slice(1,-1):e}(t.slice(i+1).trim()),u=a[l]||l,s=e[u]=function(e,t){return"style"===e?t.split(/;\s?/).reduce((function(e,t){const n=t.slice(0,t.indexOf(":"));return e[n.replace(/(-[a-z])/g,(e=>e[1].toUpperCase()))]=t.slice(n.length+1).trim(),e}),{}):"href"===e?Oe(t):(t.match(L)&&(t=t.slice(1,t.length-1)),"true"===t||"false"!==t&&t)}(l,c);"string"==typeof s&&(z.test(s)||M.test(s))&&(e[u]=r.cloneElement(Z(s.trim()),{key:n}))}else"style"!==t&&(e[a[t]||t]=!0);var o;return e}),{}):void 0}const V=[],J={},Q={blockQuote:{i:ke(f),l:He.HIGH,_:(e,t,n)=>({content:t(e[0].replace(p,""),n)}),p:(e,t,n)=>o("blockquote",{key:n.g},t(e.content,n))},breakLine:{i:Se(g),l:He.HIGH,_:Ee,p:(e,t,n)=>o("br",{key:n.g})},breakThematic:{i:ke(m),l:He.HIGH,_:Ee,p:(e,t,n)=>o("hr",{key:n.g})},codeBlock:{i:ke(h),l:He.MAX,_:e=>({content:e[0].replace(/^ {4}/gm,"").replace(/\n+$/,""),lang:void 0}),p:(e,t,n)=>o("pre",{key:n.g},o("code",{className:e.lang?`lang-${e.lang}`:""},e.content))},codeFenced:{i:ke(y),l:He.MAX,_:e=>({content:e[3],lang:e[2]||void 0,type:"codeBlock"})},codeInline:{i:we(b),l:He.LOW,_:e=>({content:e[2]}),p:(e,t,n)=>o("code",{key:n.g},e.content)},footnote:{i:ke(k),l:He.MAX,_:e=>(V.push({footnote:e[2],identifier:e[1]}),{}),p:Me},footnoteReference:{i:ve(S),l:He.HIGH,_:e=>({content:e[1],target:`#${t.slugify(e[1])}`}),p:(e,t,n)=>o("a",{key:n.g,href:Oe(e.target)},o("sup",{key:n.g},e.content))},gfmTask:{i:ve(O),l:He.HIGH,_:e=>({completed:"x"===e[1].toLowerCase()}),p:(e,t,n)=>o("input",{checked:e.completed,key:n.g,readOnly:!0,type:"checkbox"})},heading:{i:ke(_),l:He.HIGH,_:(e,n,r)=>({content:Ae(n,e[2],r),id:t.slugify(e[2]),level:e[1].length}),p:(e,t,n)=>(e.tag=`h${e.level}`,o(e.tag,{id:e.id,key:n.g},t(e.content,n)))},headingSetext:{i:ke(A),l:He.MAX,_:(e,t,n)=>({content:Ae(t,e[1],n),level:"="===e[2]?1:2,type:"heading"})},htmlComment:{i:Se(j),l:He.HIGH,_:()=>({}),p:Me},image:{i:we(de),l:He.HIGH,_:e=>({alt:e[1],target:_e(e[2]),title:e[3]}),p:(e,t,n)=>o("img",{key:n.g,alt:e.alt||void 0,title:e.title||void 0,src:Oe(e.target)})},link:{i:ve(se),l:He.LOW,_:(e,t,n)=>({content:ze(t,e[1],n),target:_e(e[2]),title:e[3]}),p:(e,t,n)=>o("a",{key:n.g,href:Oe(e.target),title:e.title},t(e.content,n))},linkAngleBraceStyleDetector:{i:ve(R),l:He.MAX,_:e=>({content:[{content:e[1],type:"text"}],target:e[1],type:"link"})},linkBareUrlDetector:{i:(e,t)=>t.m?null:ve(C)(e,t),l:He.MAX,_:e=>({content:[{content:e[1],type:"text"}],target:e[1],title:void 0,type:"link"})},linkMailtoDetector:{i:ve(H),l:He.MAX,_(e){let t=e[1],n=e[1];return s.test(n)||(n="mailto:"+n),{content:[{content:t.replace("mailto:",""),type:"text"}],target:n,type:"link"}}},list:{i(e,t,n){const r=$.exec(n);return!r||!t.h&&t.o?null:ce.exec(e=r[1]+e)},l:He.HIGH,_(e,t,n){const r=e[2],i=r.length>1,o=i?+r:void 0,a=e[0].replace(d,"\n").match(le);let l=!1;return{items:a.map((function(e,r){const i=ae.exec(e)[0].length,o=new RegExp("^ {1,"+i+"}","gm"),c=e.replace(o,"").replace(ae,""),u=r===a.length-1,s=-1!==c.indexOf("\n\n")||u&&l;l=s;const d=n.o,f=n.h;let p;n.h=!0,s?(n.o=!1,p=c.replace(P,"\n\n")):(n.o=!0,p=c.replace(P,""));const g=t(p,n);return n.o=d,n.h=f,g})),ordered:i,start:o}},p:(e,t,n)=>o(e.ordered?"ol":"ul",{key:n.g,start:e.start},e.items.map((function(e,r){return o("li",{key:r},t(e,n))})))},newlineCoalescer:{i:ke(v),l:He.LOW,_:Ee,p:()=>"\n"},paragraph:{i:xe,l:He.LOW,_:je,p:(e,t,n)=>o("p",{key:n.g},t(e.content,n))},ref:{i:ve(D),l:He.MAX,_:e=>(J[e[1]]={target:e[2],title:e[4]},{}),p:Me},refImage:{i:we(G),l:He.MAX,_:e=>({alt:e[1]||void 0,ref:e[2]}),p:(e,t,n)=>o("img",{key:n.g,alt:e.alt,src:Oe(J[e.ref].target),title:J[e.ref].title})},refLink:{i:ve(q),l:He.MAX,_:(e,t,n)=>({content:t(e[1],n),fallbackContent:t(e[0].replace(B,"\\$1"),n),ref:e[2]}),p:(e,t,n)=>J[e.ref]?o("a",{key:n.g,href:Oe(J[e.ref].target),title:J[e.ref].title},t(e.content,n)):o("span",{key:n.g},t(e.fallbackContent,n))},table:{i:ke(W),l:He.HIGH,_:he,p:(e,t,n)=>o("table",{key:n.g},o("thead",null,o("tr",null,e.header.map((function(r,i){return o("th",{key:i,style:be(e,i)},t(r,n))})))),o("tbody",null,e.cells.map((function(r,i){return o("tr",{key:i},r.map((function(r,i){return o("td",{key:i,style:be(e,i)},t(r,n))})))}))))},tableSeparator:{i:function(e,t){return t.t?X.exec(e):null},l:He.HIGH,_:function(){return{type:"tableSeparator"}},p:()=>" | "},text:{i:Se(ne),l:He.MIN,_:e=>({content:e[0].replace(I,((e,n)=>t.namedCodesToUnicode[n]?t.namedCodesToUnicode[n]:e))}),p:e=>e.content},textBolded:{i:we(K),l:He.MED,_:(e,t,n)=>({content:t(e[2],n)}),p:(e,t,n)=>o("strong",{key:n.g},t(e.content,n))},textEmphasized:{i:we(Y),l:He.LOW,_:(e,t,n)=>({content:t(e[2],n)}),p:(e,t,n)=>o("em",{key:n.g},t(e.content,n))},textEscaped:{i:we(te),l:He.HIGH,_:e=>({content:e[1],type:"text"})},textStrikethroughed:{i:we(ee),l:He.LOW,_:je,p:(e,t,n)=>o("del",{key:n.g},t(e.content,n))}};!0!==t.disableParsingRawHTML&&(Q.htmlBlock={i:Se(z),l:He.HIGH,_(e,t,n){const[,r]=e[3].match(ie),i=new RegExp(`^${r}`,"gm"),o=e[3].replace(i,""),a=(l=o,pe.some((e=>e.test(l)))?Ie:Ae);var l;const u=e[1].toLowerCase(),s=-1!==c.indexOf(u);n.m=n.m||"a"===u;const d=s?e[3]:a(t,o,n);return n.m=!1,{attrs:F(e[2]),content:d,noInnerParse:s,tag:s?u:e[1]}},p:(e,t,n)=>o(e.tag,i({key:n.g},e.attrs),e.noInnerParse?e.content:t(e.content,n))},Q.htmlSelfClosing={i:Se(M),l:He.HIGH,_:e=>({attrs:F(e[2]||""),tag:e[1]}),p:(e,t,n)=>o(e.tag,i({},e.attrs,{key:n.g}))});const oe=function(e){let t=Object.keys(e);function n(r,i){let o=[],a="";for(;r;){let l=0;for(;l<t.length;){const c=t[l],u=e[c],s=u.i(r,i,a);if(s){const e=s[0];r=r.substring(e.length);const t=u._(s,n,i);null==t.type&&(t.type=c),o.push(t),a=e;break}l++}}return o}return t.sort((function(t,n){let r=e[t].l,i=e[n].l;return r!==i?r-i:t<n?-1:1})),function(e,t){return n(function(e){return e.replace(w,"\n").replace(x,"").replace(U,"    ")}(e),t)}}(Q),ue=(fe=Q,me=function(e,t,n){return fe[e.type].p(e,t,n)},function e(t,n={}){if(Array.isArray(t)){const r=n.g,i=[];let o=!1;for(let a=0;a<t.length;a++){n.g=a;const r=e(t[a],n),l="string"==typeof r;l&&o?i[i.length-1]+=r:null!==r&&i.push(r),o=l}return n.g=r,i}return me(t,e,n)});var fe,me;const ye=Z(e);return V.length?o("div",null,ye,o("footer",{key:"footer"},V.map((function(e){return o("div",{id:t.slugify(e.identifier),key:e.identifier},e.identifier,ue(oe(e.footnote,{o:!0})))})))):ye}(Re=He||(He={}))[Re.MAX=0]="MAX",Re[Re.HIGH=1]="HIGH",Re[Re.MED=2]="MED",Re[Re.LOW=3]="LOW",Re[Re.MIN=4]="MIN",t.Z=e=>{let{children:t,options:n}=e,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t.indexOf(n=o[r])>=0||(i[n]=e[n]);return i}(e,o);return r.cloneElement(Pe(t,n),i)}},8045:function(e,t,n){"use strict";var r=n(9361).default,i=n(4941).Z,o=n(3929).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.src,n=e.sizes,a=e.unoptimized,f=void 0!==a&&a,g=e.priority,y=void 0!==g&&g,k=e.loading,A=e.lazyRoot,I=void 0===A?null:A,j=e.lazyBoundary,E=e.className,M=e.quality,L=e.width,C=e.height,H=e.style,R=e.objectFit,P=e.objectPosition,$=e.onLoadingComplete,N=e.placeholder,W=void 0===N?"empty":N,D=e.blurDataURL,G=m(e,["src","sizes","unoptimized","priority","loading","lazyRoot","lazyBoundary","className","quality","width","height","style","objectFit","objectPosition","onLoadingComplete","placeholder","blurDataURL"]),q=l.useContext(d.ImageConfigContext),B=l.useMemo((function(){var e=b||q||u.imageConfigDefault,t=o(e.deviceSizes).concat(o(e.imageSizes)).sort((function(e,t){return e-t})),n=e.deviceSizes.sort((function(e,t){return e-t}));return p({},e,{allSizes:t,deviceSizes:n})}),[q]),T=G,U=n?"responsive":"intrinsic";"layout"in T&&(T.layout&&(U=T.layout),delete T.layout);var X=_;if("loader"in T){if(T.loader){var Z=T.loader;X=function(e){e.config;var t=m(e,["config"]);return Z(t)}}delete T.loader}var F="";if(function(e){return"object"===typeof e&&(S(e)||function(e){return void 0!==e.src}(e))}(t)){var V=S(t)?t.default:t;if(!V.src)throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(V)));if(D=D||V.blurDataURL,F=V.src,(!U||"fill"!==U)&&(C=C||V.height,L=L||V.width,!V.height||!V.width))throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(V)))}t="string"===typeof t?t:F;var J=O(L),Q=O(C),K=O(M),Y=!y&&("lazy"===k||"undefined"===typeof k);(t.startsWith("data:")||t.startsWith("blob:"))&&(f=!0,Y=!1);v.has(t)&&(Y=!1);h&&(f=!0);var ee,te=i(l.useState(!1),2),ne=te[0],re=te[1],ie=i(s.useIntersection({rootRef:I,rootMargin:j||"200px",disabled:!Y}),3),oe=ie[0],ae=ie[1],le=ie[2],ce=!Y||ae,ue={boxSizing:"border-box",display:"block",overflow:"hidden",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},se={boxSizing:"border-box",display:"block",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},de=!1,fe={position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",padding:0,border:"none",margin:"auto",display:"block",width:0,height:0,minWidth:"100%",maxWidth:"100%",minHeight:"100%",maxHeight:"100%",objectFit:R,objectPosition:P};0;var pe=Object.assign({},H,fe),ge="blur"!==W||ne?{}:{backgroundSize:R||"cover",backgroundPosition:P||"0% 0%",filter:"blur(20px)",backgroundImage:'url("'.concat(D,'")')};if("fill"===U)ue.display="block",ue.position="absolute",ue.top=0,ue.left=0,ue.bottom=0,ue.right=0;else if("undefined"!==typeof J&&"undefined"!==typeof Q){var me=Q/J,ye=isNaN(me)?"100%":"".concat(100*me,"%");"responsive"===U?(ue.display="block",ue.position="relative",de=!0,se.paddingTop=ye):"intrinsic"===U?(ue.display="inline-block",ue.position="relative",ue.maxWidth="100%",de=!0,se.maxWidth="100%",ee="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27".concat(J,"%27%20height=%27").concat(Q,"%27/%3e")):"fixed"===U&&(ue.display="inline-block",ue.position="relative",ue.width=J,ue.height=Q)}else 0;var he={src:w,srcSet:void 0,sizes:void 0};ce&&(he=x({config:B,src:t,unoptimized:f,layout:U,width:J,quality:K,sizes:n,loader:X}));var be=t;0;var ve,we="imagesrcset",ke="imagesizes";we="imageSrcSet",ke="imageSizes";var Se=(r(ve={},we,he.srcSet),r(ve,ke,he.sizes),ve),xe=l.default.useLayoutEffect,Oe=l.useRef($),_e=l.useRef(t);l.useEffect((function(){Oe.current=$}),[$]),xe((function(){_e.current!==t&&(le(),_e.current=t)}),[le,t]);var Ae=p({isLazy:Y,imgAttributes:he,heightInt:Q,widthInt:J,qualityInt:K,layout:U,className:E,imgStyle:pe,blurStyle:ge,loading:k,config:B,unoptimized:f,placeholder:W,loader:X,srcString:be,onLoadingCompleteRef:Oe,setBlurComplete:re,setIntersection:oe,isVisible:ce,noscriptSizes:n},T);return l.default.createElement(l.default.Fragment,null,l.default.createElement("span",{style:ue},de?l.default.createElement("span",{style:se},ee?l.default.createElement("img",{style:{display:"block",maxWidth:"100%",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},alt:"","aria-hidden":!0,src:ee}):null):null,l.default.createElement(z,Object.assign({},Ae))),y?l.default.createElement(c.default,null,l.default.createElement("link",Object.assign({key:"__nimg-"+he.src+he.srcSet+he.sizes,rel:"preload",as:"image",href:he.srcSet?void 0:he.src},Se))):null)};var a,l=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=g();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if(Object.prototype.hasOwnProperty.call(e,i)){var o=r?Object.getOwnPropertyDescriptor(e,i):null;o&&(o.get||o.set)?Object.defineProperty(n,i,o):n[i]=e[i]}n.default=e,t&&t.set(e,n);return n}(n(7294)),c=(a=n(5443))&&a.__esModule?a:{default:a},u=n(9309),s=n(7190),d=n(9977),f=(n(3794),n(2392));function p(){return p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},p.apply(this,arguments)}function g(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return g=function(){return e},e}function m(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}var y={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",experimentalLayoutRaw:!1}||{},h=y.experimentalUnoptimized,b={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",experimentalLayoutRaw:!1},v=new Set,w=(new Map,"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7");var k=new Map([["default",function(e){var t=e.config,n=e.src,r=e.width,i=e.quality;0;if(n.endsWith(".svg")&&!t.dangerouslyAllowSVG)return n;return"".concat(f.normalizePathTrailingSlash(t.path),"?url=").concat(encodeURIComponent(n),"&w=").concat(r,"&q=").concat(i||75)}],["imgix",function(e){var t=e.config,n=e.src,r=e.width,i=e.quality,o=new URL("".concat(t.path).concat(I(n))),a=o.searchParams;a.set("auto",a.get("auto")||"format"),a.set("fit",a.get("fit")||"max"),a.set("w",a.get("w")||r.toString()),i&&a.set("q",i.toString());return o.href}],["cloudinary",function(e){var t=e.config,n=e.src,r=e.width,i=e.quality,o=["f_auto","c_limit","w_"+r,"q_"+(i||"auto")].join(",")+"/";return"".concat(t.path).concat(o).concat(I(n))}],["akamai",function(e){var t=e.config,n=e.src,r=e.width;return"".concat(t.path).concat(I(n),"?imwidth=").concat(r)}],["custom",function(e){var t=e.src;throw new Error('Image with src "'.concat(t,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}]]);function S(e){return void 0!==e.default}function x(e){var t=e.config,n=e.src,r=e.unoptimized,i=e.layout,a=e.width,l=e.quality,c=e.sizes,u=e.loader;if(r)return{src:n,srcSet:void 0,sizes:void 0};var s=function(e,t,n,r){var i=e.deviceSizes,a=e.allSizes;if(r&&("fill"===n||"responsive"===n)){for(var l,c=/(^|\s)(1?\d?\d)vw/g,u=[];l=c.exec(r);l)u.push(parseInt(l[2]));if(u.length){var s,d=.01*(s=Math).min.apply(s,o(u));return{widths:a.filter((function(e){return e>=i[0]*d})),kind:"w"}}return{widths:a,kind:"w"}}return"number"!==typeof t||"fill"===n||"responsive"===n?{widths:i,kind:"w"}:{widths:o(new Set([t,2*t].map((function(e){return a.find((function(t){return t>=e}))||a[a.length-1]})))),kind:"x"}}(t,a,i,c),d=s.widths,f=s.kind,p=d.length-1;return{sizes:c||"w"!==f?c:"100vw",srcSet:d.map((function(e,r){return"".concat(u({config:t,src:n,quality:l,width:e})," ").concat("w"===f?e:r+1).concat(f)})).join(", "),src:u({config:t,src:n,quality:l,width:d[p]})}}function O(e){return"number"===typeof e?e:"string"===typeof e?parseInt(e,10):void 0}function _(e){var t,n=(null==(t=e.config)?void 0:t.loader)||"default",r=k.get(n);if(r)return r(e);throw new Error('Unknown "loader" found in "next.config.js". Expected: '.concat(u.VALID_LOADERS.join(", "),". Received: ").concat(n))}function A(e,t,n,r,i,o){e&&e.src!==w&&e["data-loaded-src"]!==t&&(e["data-loaded-src"]=t,("decode"in e?e.decode():Promise.resolve()).catch((function(){})).then((function(){if(e.parentNode&&(v.add(t),"blur"===r&&o(!0),null==i?void 0:i.current)){var n=e.naturalWidth,a=e.naturalHeight;i.current({naturalWidth:n,naturalHeight:a})}})))}var z=function(e){var t=e.imgAttributes,n=(e.heightInt,e.widthInt),r=e.qualityInt,i=e.layout,o=e.className,a=e.imgStyle,c=e.blurStyle,u=e.isLazy,s=e.placeholder,d=e.loading,f=e.srcString,g=e.config,y=e.unoptimized,h=e.loader,b=e.onLoadingCompleteRef,v=e.setBlurComplete,w=e.setIntersection,k=e.onLoad,S=e.onError,O=(e.isVisible,e.noscriptSizes),_=m(e,["imgAttributes","heightInt","widthInt","qualityInt","layout","className","imgStyle","blurStyle","isLazy","placeholder","loading","srcString","config","unoptimized","loader","onLoadingCompleteRef","setBlurComplete","setIntersection","onLoad","onError","isVisible","noscriptSizes"]);return d=u?"lazy":d,l.default.createElement(l.default.Fragment,null,l.default.createElement("img",Object.assign({},_,t,{decoding:"async","data-nimg":i,className:o,style:p({},a,c),ref:l.useCallback((function(e){w(e),(null==e?void 0:e.complete)&&A(e,f,0,s,b,v)}),[w,f,i,s,b,v]),onLoad:function(e){A(e.currentTarget,f,0,s,b,v),k&&k(e)},onError:function(e){"blur"===s&&v(!0),S&&S(e)}})),(u||"blur"===s)&&l.default.createElement("noscript",null,l.default.createElement("img",Object.assign({},_,x({config:g,src:f,unoptimized:y,layout:i,width:n,quality:r,sizes:O,loader:h}),{decoding:"async","data-nimg":i,style:a,className:o,loading:d}))))};function I(e){return"/"===e[0]?e.slice(1):e}("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7190:function(e,t,n){"use strict";var r=n(4941).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,n=e.rootMargin,u=e.disabled||!a,s=i.useRef(),d=r(i.useState(!1),2),f=d[0],p=d[1],g=r(i.useState(null),2),m=g[0],y=g[1];i.useEffect((function(){if(a){if(s.current&&(s.current(),s.current=void 0),u||f)return;return m&&m.tagName&&(s.current=function(e,t,n){var r=function(e){var t,n={root:e.root||null,margin:e.rootMargin||""},r=c.find((function(e){return e.root===n.root&&e.margin===n.margin}));if(r&&(t=l.get(r)))return t;var i=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=i.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return t={id:n,observer:o,elements:i},c.push(n),l.set(n,t),t}(n),i=r.id,o=r.observer,a=r.elements;return a.set(e,t),o.observe(e),function(){if(a.delete(e),o.unobserve(e),0===a.size){o.disconnect(),l.delete(i);var t=c.findIndex((function(e){return e.root===i.root&&e.margin===i.margin}));t>-1&&c.splice(t,1)}}}(m,(function(e){return e&&p(e)}),{root:null==t?void 0:t.current,rootMargin:n})),function(){null==s.current||s.current(),s.current=void 0}}if(!f){var e=o.requestIdleCallback((function(){return p(!0)}));return function(){return o.cancelIdleCallback(e)}}}),[m,u,n,t,f]);var h=i.useCallback((function(){p(!1)}),[]);return[y,f,h]};var i=n(7294),o=n(9311),a="function"===typeof IntersectionObserver;var l=new Map,c=[];("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5675:function(e,t,n){e.exports=n(8045)},9396:function(e,t,n){"use strict";function r(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}n.d(t,{Z:function(){return r}})},603:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}n.d(t,{Z:function(){return i}})}}]);