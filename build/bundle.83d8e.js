!function(t){function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}var e={};n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(n){return t[n]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},n.p="/",n(n.s="OR2C")}({MV5A:function(){},OR2C:function(t,n,e){"use strict";e.r(n);var r=e("hosL"),o=r.h,_=r.render,i=r.hydrate,u=function(t){return t&&t.default?t.default:t},l=function(t){return"/"===t[t.length-1]?t:t+"/"};if("serviceWorker"in navigator&&navigator.serviceWorker.register(e.p+"sw.js"),"function"==typeof u(e("QfWi"))){var c=document.getElementById("preact_root")||document.body.firstElementChild;0,function(){var t=u(e("QfWi")),n={},r=document.querySelector('[type="__PREACT_CLI_DATA__"]');r&&(n=JSON.parse(decodeURI(r.innerHTML)).preRenderData||n);var f={preRenderData:n},s=n.url?l(n.url):"",a=i&&s===l(location.pathname);c=(a?i:_)(o(t,{CLI_DATA:f}),document.body,c)}()}},QRet:function(t,n,e){"use strict";function r(t,n){d.options.__h&&d.options.__h(a,t,h||n),h=0;var e=a.__H||(a.__H={__:[],__h:[]});return t>=e.__.length&&e.__.push({}),e.__[t]}function o(t){return h=1,function(t,n,e){var o=r(s++,2);return o.t=t,o.__c||(o.__=[e?e(n):f(void 0,n),function(t){var n=o.t(o.__[0],t);o.__[0]!==n&&(o.__=[n,o.__[1]],o.__c.setState({}))}],o.__c=a),o.__}(f,t)}function _(t,n){var e=r(s++,3);!d.options.__s&&c(e.__H,n)&&(e.__=t,e.__H=n,a.__H.__h.push(e))}function i(){v.forEach((function(t){if(t.__P)try{t.__H.__h.forEach(u),t.__H.__h.forEach(l),t.__H.__h=[]}catch(n){t.__H.__h=[],d.options.__e(n,t.__v)}})),v=[]}function u(t){var n=a;"function"==typeof t.__c&&t.__c(),a=n}function l(t){var n=a;t.__c=t.__(),a=n}function c(t,n){return!t||t.length!==n.length||n.some((function(n,e){return n!==t[e]}))}function f(t,n){return"function"==typeof n?n(t):n}e.d(n,"b",(function(){return o})),e.d(n,"a",(function(){return _}));var s,a,p,d=e("hosL"),h=0,v=[],y=d.options.__b,m=d.options.__r,b=d.options.diffed,g=d.options.__c,k=d.options.unmount;d.options.__b=function(t){a=null,y&&y(t)},d.options.__r=function(t){m&&m(t),s=0;var n=(a=t.__c).__H;n&&(n.__h.forEach(u),n.__h.forEach(l),n.__h=[])},d.options.diffed=function(t){b&&b(t);var n=t.__c;n&&n.__H&&n.__H.__h.length&&(1!==v.push(n)&&p===d.options.requestAnimationFrame||((p=d.options.requestAnimationFrame)||function(t){var n,e=function(){clearTimeout(r),w&&cancelAnimationFrame(n),setTimeout(t)},r=setTimeout(e,100);w&&(n=requestAnimationFrame(e))})(i)),a=void 0},d.options.__c=function(t,n){n.some((function(t){try{t.__h.forEach(u),t.__h=t.__h.filter((function(t){return!t.__||l(t)}))}catch(e){n.some((function(t){t.__h&&(t.__h=[])})),n=[],d.options.__e(e,t.__v)}})),g&&g(t,n)},d.options.unmount=function(t){k&&k(t);var n=t.__c;if(n&&n.__H)try{n.__H.__.forEach(u)}catch(t){d.options.__e(t,n.__v)}};var w="function"==typeof requestAnimationFrame},QfWi:function(t,n,e){"use strict";e.r(n),function(t){function r(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,r)}return e}function o(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function _(){function n(t){var n=function(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?r(Object(e),!0).forEach((function(n){o(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):r(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}({},s);n[t]=!n[t],a(n)}function e(){for(var t=["","","",""],n=0;n<100&&(t=u.pickOne(),!s[t[2]]);n++);c(t),h(!1),m(!1),k(!1)}var _=Object(i.b)(u.pickOne()),l=_[0],c=_[1],f=Object(i.b)({V:!0,N:!0,A:!0,M:!0,P:!0}),s=f[0],a=f[1],p=Object(i.b)(!1),d=p[0],h=p[1],v=Object(i.b)(!1),y=v[0],m=v[1],b=Object(i.b)(!1),g=b[0],k=b[1];return Object(i.a)((function(){document.onkeypress=function(t){"a"==t.key||"A"==t.key?h(!d):"s"==t.key||"S"==t.key?m(!y):"d"==t.key||"D"==t.key?k(!g):"f"!=t.key&&"F"!=t.key||e()}})),Object(i.a)((function(){var t={},n={},r=!1,o=(document,function(){if(r){r=!1;var o=(new Date).getTime(),_=n.x-t.x,i=n.y-t.y;if(o-t.t>500)return;(_>10&&Math.abs(i)<10||-_>10&&Math.abs(i)<10)&&e()}});"undefined"!=typeof window&&(window.addEventListener("pointerdown",(function(n){r=!0,t.t=(new Date).getTime(),t.x=n.clientX,t.y=n.clientY}),!1),window.addEventListener("pointermove",(function(t){r&&(t.preventDefault(),n.x=t.clientX,n.y=t.clientY)}),!1),window.addEventListener("pointerup",o,!1),window.addEventListener("pointerleave",o,!1),window.addEventListener("pointercancel",o,!1))}),[]),Object(i.a)((function(){e()}),[s]),t("div",{class:"App"},t("div",{class:"Hanzi"},l[0]),t("div",{class:"Cards"},t("div",{class:"left1rightX"},t("pre",{class:"Card",onClick:function(){return h(!d)}},d?l[2]:""),t("pre",{class:"Card",onClick:function(){return m(!y)}},y?l[1]:"")),t("pre",{class:"Card",onClick:function(){return k(!g)}},g?l[3]:""),t("div",{class:"left1rightX"},t("div",null,t("a",{href:"https://en.wiktionary.org/wiki/"+l[0],target:"_blank"},"Wiki")),t("div",{class:"Filters"},"VNAMP".split("").map((function(e){return t("div",{class:s[e]?"swTrue":null,onClick:function(){return n(e)}},e)}))))))}e.d(n,"default",(function(){return _}));e("MV5A");var i=e("QRet"),u=e("iFqS").a.trim().split(/(?:\n\r?)+/m).map((function(t){return t.split(/\t+/).map((function(t){return t.replace("\\n","\n")}))}));"undefined"!=typeof window&&(window._d=u),Array.prototype.pickOne=function(){return this[Math.floor(Math.random()*this.length)]};console}.call(this,e("hosL").h)},hosL:function(t,n,e){"use strict";function r(t,n){for(var e in n)t[e]=n[e];return t}function o(t){var n=t.parentNode;n&&n.removeChild(t)}function _(t,n,e){var r,o,_,u=arguments,l={};for(_ in n)"key"==_?r=n[_]:"ref"==_?o=n[_]:l[_]=n[_];if(arguments.length>3)for(e=[e],_=3;_<arguments.length;_++)e.push(u[_]);if(null!=e&&(l.children=e),"function"==typeof t&&null!=t.defaultProps)for(_ in t.defaultProps)void 0===l[_]&&(l[_]=t.defaultProps[_]);return i(t,l,r,o,null)}function i(t,n,e,r,o){var _={type:t,props:n,key:e,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:null==o?++T.__v:o};return null!=T.vnode&&T.vnode(_),_}function u(){return{current:null}}function l(t){return t.children}function c(t,n){this.props=t,this.context=n}function f(t,n){if(null==n)return t.__?f(t.__,t.__.__k.indexOf(t)+1):null;for(var e;n<t.__k.length;n++)if(null!=(e=t.__k[n])&&null!=e.__e)return e.__e;return"function"==typeof t.type?f(t):null}function s(t){var n,e;if(null!=(t=t.__)&&null!=t.__c){for(t.__e=t.__c.base=null,n=0;n<t.__k.length;n++)if(null!=(e=t.__k[n])&&null!=e.__e){t.__e=t.__c.base=e.__e;break}return s(t)}}function a(t){(!t.__d&&(t.__d=!0)&&M.push(t)&&!p.__r++||L!==T.debounceRendering)&&((L=T.debounceRendering)||N)(p)}function p(){for(var t;p.__r=M.length;)t=M.sort((function(t,n){return t.__v.__b-n.__v.__b})),M=[],t.some((function(t){var n,e,o,_,i,u;t.__d&&(i=(_=(n=t).__v).__e,(u=n.__P)&&(e=[],(o=r({},_)).__v=_.__v+1,w(u,_,o,n.__n,void 0!==u.ownerSVGElement,null!=_.__h?[i]:null,e,null==i?f(_):i,_.__h),O(e,_),_.__e!=i&&s(_)))}))}function d(t,n,e,r,o,_,u,c,s,a){var p,d,v,m,b,g,k,O=r&&r.__k||U,C=O.length;for(e.__k=[],p=0;p<n.length;p++)if(null!=(m=e.__k[p]=null==(m=n[p])||"boolean"==typeof m?null:"string"==typeof m||"number"==typeof m||"bigint"==typeof m?i(null,m,null,null,m):Array.isArray(m)?i(l,{children:m},null,null,null):m.__b>0?i(m.type,m.props,m.key,null,m.__v):m)){if(m.__=e,m.__b=e.__b+1,null===(v=O[p])||v&&m.key==v.key&&m.type===v.type)O[p]=void 0;else for(d=0;d<C;d++){if((v=O[d])&&m.key==v.key&&m.type===v.type){O[d]=void 0;break}v=null}w(t,m,v=v||W,o,_,u,c,s,a),b=m.__e,(d=m.ref)&&v.ref!=d&&(k||(k=[]),v.ref&&k.push(v.ref,null,m),k.push(d,m.__c||b,m)),null!=b?(null==g&&(g=b),"function"==typeof m.type&&null!=m.__k&&m.__k===v.__k?m.__d=s=h(m,s,t):s=y(t,m,v,O,b,s),a||"option"!==e.type?"function"==typeof e.type&&(e.__d=s):t.value=""):s&&v.__e==s&&s.parentNode!=t&&(s=f(v))}for(e.__e=g,p=C;p--;)null!=O[p]&&("function"==typeof e.type&&null!=O[p].__e&&O[p].__e==e.__d&&(e.__d=f(r,p+1)),x(O[p],O[p]));if(k)for(p=0;p<k.length;p++)P(k[p],k[++p],k[++p])}function h(t,n,e){var r,o;for(r=0;r<t.__k.length;r++)(o=t.__k[r])&&(o.__=t,n="function"==typeof o.type?h(o,n,e):y(e,o,o,t.__k,o.__e,n));return n}function v(t,n){return n=n||[],null==t||"boolean"==typeof t||(Array.isArray(t)?t.some((function(t){v(t,n)})):n.push(t)),n}function y(t,n,e,r,o,_){var i,u,l;if(void 0!==n.__d)i=n.__d,n.__d=void 0;else if(null==e||o!=_||null==o.parentNode)t:if(null==_||_.parentNode!==t)t.appendChild(o),i=null;else{for(u=_,l=0;(u=u.nextSibling)&&l<r.length;l+=2)if(u==o)break t;t.insertBefore(o,_),i=_}return void 0!==i?i:o.nextSibling}function m(t,n,e){"-"===n[0]?t.setProperty(n,e):t[n]=null==e?"":"number"!=typeof e||R.test(n)?e:e+"px"}function b(t,n,e,r,o){var _;t:if("style"===n)if("string"==typeof e)t.style.cssText=e;else{if("string"==typeof r&&(t.style.cssText=r=""),r)for(n in r)e&&n in e||m(t.style,n,"");if(e)for(n in e)r&&e[n]===r[n]||m(t.style,n,e[n])}else if("o"===n[0]&&"n"===n[1])_=n!==(n=n.replace(/Capture$/,"")),n=n.toLowerCase()in t?n.toLowerCase().slice(2):n.slice(2),t.l||(t.l={}),t.l[n+_]=e,e?r||t.addEventListener(n,_?k:g,_):t.removeEventListener(n,_?k:g,_);else if("dangerouslySetInnerHTML"!==n){if(o)n=n.replace(/xlink[H:h]/,"h").replace(/sName$/,"s");else if("href"!==n&&"list"!==n&&"form"!==n&&"tabIndex"!==n&&"download"!==n&&n in t)try{t[n]=null==e?"":e;break t}catch(t){}"function"==typeof e||(null!=e&&(!1!==e||"a"===n[0]&&"r"===n[1])?t.setAttribute(n,e):t.removeAttribute(n))}}function g(t){this.l[t.type+!1](T.event?T.event(t):t)}function k(t){this.l[t.type+!0](T.event?T.event(t):t)}function w(t,n,e,o,_,i,u,f,s){var a,p,h,v,y,m,b,g,k,w,O,P=n.type;if(void 0!==n.constructor)return null;null!=e.__h&&(s=e.__h,f=n.__e=e.__e,n.__h=null,i=[f]),(a=T.__b)&&a(n);try{t:if("function"==typeof P){if(g=n.props,k=(a=P.contextType)&&o[a.__c],w=a?k?k.props.value:a.__:o,e.__c?b=(p=n.__c=e.__c).__=p.__E:("prototype"in P&&P.prototype.render?n.__c=p=new P(g,w):(n.__c=p=new c(g,w),p.constructor=P,p.render=E),k&&k.sub(p),p.props=g,p.state||(p.state={}),p.context=w,p.__n=o,h=p.__d=!0,p.__h=[]),null==p.__s&&(p.__s=p.state),null!=P.getDerivedStateFromProps&&(p.__s==p.state&&(p.__s=r({},p.__s)),r(p.__s,P.getDerivedStateFromProps(g,p.__s))),v=p.props,y=p.state,h)null==P.getDerivedStateFromProps&&null!=p.componentWillMount&&p.componentWillMount(),null!=p.componentDidMount&&p.__h.push(p.componentDidMount);else{if(null==P.getDerivedStateFromProps&&g!==v&&null!=p.componentWillReceiveProps&&p.componentWillReceiveProps(g,w),!p.__e&&null!=p.shouldComponentUpdate&&!1===p.shouldComponentUpdate(g,p.__s,w)||n.__v===e.__v){p.props=g,p.state=p.__s,n.__v!==e.__v&&(p.__d=!1),p.__v=n,n.__e=e.__e,n.__k=e.__k,n.__k.forEach((function(t){t&&(t.__=n)})),p.__h.length&&u.push(p);break t}null!=p.componentWillUpdate&&p.componentWillUpdate(g,p.__s,w),null!=p.componentDidUpdate&&p.__h.push((function(){p.componentDidUpdate(v,y,m)}))}p.context=w,p.props=g,p.state=p.__s,(a=T.__r)&&a(n),p.__d=!1,p.__v=n,p.__P=t,a=p.render(p.props,p.state,p.context),p.state=p.__s,null!=p.getChildContext&&(o=r(r({},o),p.getChildContext())),h||null==p.getSnapshotBeforeUpdate||(m=p.getSnapshotBeforeUpdate(v,y)),O=null!=a&&a.type===l&&null==a.key?a.props.children:a,d(t,Array.isArray(O)?O:[O],n,e,o,_,i,u,f,s),p.base=n.__e,n.__h=null,p.__h.length&&u.push(p),b&&(p.__E=p.__=null),p.__e=!1}else null==i&&n.__v===e.__v?(n.__k=e.__k,n.__e=e.__e):n.__e=C(e.__e,n,e,o,_,i,u,s);(a=T.diffed)&&a(n)}catch(t){n.__v=null,(s||null!=i)&&(n.__e=f,n.__h=!!s,i[i.indexOf(f)]=null),T.__e(t,n,e)}}function O(t,n){T.__c&&T.__c(n,t),t.some((function(n){try{t=n.__h,n.__h=[],t.some((function(t){t.call(n)}))}catch(t){T.__e(t,n.__v)}}))}function C(t,n,e,r,_,i,u,l){var c,f,s,a,p=e.props,h=n.props,v=n.type,y=0;if("svg"===v&&(_=!0),null!=i)for(;y<i.length;y++)if((c=i[y])&&(c===t||(v?c.localName==v:3==c.nodeType))){t=c,i[y]=null;break}if(null==t){if(null===v)return document.createTextNode(h);t=_?document.createElementNS("http://www.w3.org/2000/svg",v):document.createElement(v,h.is&&h),i=null,l=!1}if(null===v)p===h||l&&t.data===h||(t.data=h);else{if(i=i&&U.slice.call(t.childNodes),f=(p=e.props||W).dangerouslySetInnerHTML,s=h.dangerouslySetInnerHTML,!l){if(null!=i)for(p={},a=0;a<t.attributes.length;a++)p[t.attributes[a].name]=t.attributes[a].value;(s||f)&&(s&&(f&&s.__html==f.__html||s.__html===t.innerHTML)||(t.innerHTML=s&&s.__html||""))}if(function(t,n,e,r,o){var _;for(_ in e)"children"===_||"key"===_||_ in n||b(t,_,null,e[_],r);for(_ in n)o&&"function"!=typeof n[_]||"children"===_||"key"===_||"value"===_||"checked"===_||e[_]===n[_]||b(t,_,n[_],e[_],r)}(t,h,p,_,l),s)n.__k=[];else if(y=n.props.children,d(t,Array.isArray(y)?y:[y],n,e,r,_&&"foreignObject"!==v,i,u,t.firstChild,l),null!=i)for(y=i.length;y--;)null!=i[y]&&o(i[y]);l||("value"in h&&void 0!==(y=h.value)&&(y!==t.value||"progress"===v&&!y)&&b(t,"value",y,p.value,!1),"checked"in h&&void 0!==(y=h.checked)&&y!==t.checked&&b(t,"checked",y,p.checked,!1))}return t}function P(t,n,e){try{"function"==typeof t?t(n):t.current=n}catch(t){T.__e(t,e)}}function x(t,n,e){var r,_,i;if(T.unmount&&T.unmount(t),(r=t.ref)&&(r.current&&r.current!==t.__e||P(r,null,n)),e||"function"==typeof t.type||(e=null!=(_=t.__e)),t.__e=t.__d=void 0,null!=(r=t.__c)){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(t){T.__e(t,n)}r.base=r.__P=null}if(r=t.__k)for(i=0;i<r.length;i++)r[i]&&x(r[i],n,e);null!=_&&o(_)}function E(t,n,e){return this.constructor(t,e)}function S(t,n,e){var r,o,i;T.__&&T.__(t,n),o=(r="function"==typeof e)?null:e&&e.__k||n.__k,i=[],w(n,t=(!r&&e||n).__k=_(l,null,[t]),o||W,W,void 0!==n.ownerSVGElement,!r&&e?[e]:o?null:n.firstChild?U.slice.call(n.childNodes):null,i,!r&&e?e:o?o.__e:n.firstChild,r),O(i,t)}function j(t,n){S(t,n,j)}function A(t,n,e){var o,_,u,l=arguments,c=r({},t.props);for(u in n)"key"==u?o=n[u]:"ref"==u?_=n[u]:c[u]=n[u];if(arguments.length>3)for(e=[e],u=3;u<arguments.length;u++)e.push(l[u]);return null!=e&&(c.children=e),i(t.type,c,o||t.key,_||t.ref,null)}function D(t,n){var e={__c:n="__cC"+F++,__:t,Consumer:function(t,n){return t.children(n)},Provider:function(t){var e,r;return this.getChildContext||(e=[],(r={})[n]=this,this.getChildContext=function(){return r},this.shouldComponentUpdate=function(t){this.props.value!==t.value&&e.some(a)},this.sub=function(t){e.push(t);var n=t.componentWillUnmount;t.componentWillUnmount=function(){e.splice(e.indexOf(t),1),n&&n.call(t)}}),t.children}};return e.Provider.__=e.Consumer.contextType=e}e.r(n),e.d(n,"render",(function(){return S})),e.d(n,"hydrate",(function(){return j})),e.d(n,"createElement",(function(){return _})),e.d(n,"h",(function(){return _})),e.d(n,"Fragment",(function(){return l})),e.d(n,"createRef",(function(){return u})),e.d(n,"isValidElement",(function(){return H})),e.d(n,"Component",(function(){return c})),e.d(n,"cloneElement",(function(){return A})),e.d(n,"createContext",(function(){return D})),e.d(n,"toChildArray",(function(){return v})),e.d(n,"options",(function(){return T}));var T,H,M,N,L,F,W={},U=[],R=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;T={__e:function(t,n){for(var e,r,o;n=n.__;)if((e=n.__c)&&!e.__)try{if((r=e.constructor)&&null!=r.getDerivedStateFromError&&(e.setState(r.getDerivedStateFromError(t)),o=e.__d),null!=e.componentDidCatch&&(e.componentDidCatch(t),o=e.__d),o)return e.__E=e}catch(n){t=n}throw t},__v:0},H=function(t){return null!=t&&void 0===t.constructor},c.prototype.setState=function(t,n){var e;e=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=r({},this.state),"function"==typeof t&&(t=t(r({},e),this.props)),t&&r(e,t),null!=t&&this.__v&&(n&&this.__h.push(n),a(this))},c.prototype.forceUpdate=function(t){this.__v&&(this.__e=!0,t&&this.__h.push(t),a(this))},c.prototype.render=l,M=[],N="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,p.__r=0,F=0},iFqS:function(t,n){"use strict";n.a="\n有\t\t\tyǒu\t\t\t\t\t\tV\tto have\n是\t\t\tshì\t\t\t\t\t\tV\tto be\n床\t\t\tChuáng\t\t\t\t\tN\tbed\t\t\t\n毯子\t\ttǎnzi\t\t\t\t\tN\tblanket\t\t\n书\t\t\tshū\t\t\t\t\t\tN\tbook\t\t\n书架\t\tshūjià\t\t\t\t\tN\tbookshelf\t\n地毯\t\tdìtǎn\t\t\t\t\tN\tcarpet\t\t\n天花板\t\ttiānhuābǎn\t\t\t\tN\tceiling\t\t\n衣服\t\tyīfú\t\t\t\t\tN\tclothes\t\t\n电脑\t\tdiànnǎo\t\t\t\t\tN\tcomputer\t\n窗帘\t\tchuānglián\t\t\t\tN\tcurtains\t\n"}});
//# sourceMappingURL=bundle.83d8e.js.map