const __vite__fileDeps=["assets/index-Dp0iFNYI.js","assets/index-DnpzUxhX.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{resolveComponent as rt,openBlock as ot,createBlock as st,shallowRef as ct,unref as Q,shallowReactive as it,nextTick as at,defineComponent as qe,reactive as lt,inject as Y,computed as N,h as ze,provide as ae,ref as ut,watch as ft,createApp as ht}from"vue";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const f of a.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&r(f)}).observe(document,{childList:!0,subtree:!0});function n(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(o){if(o.ep)return;o.ep=!0;const a=n(o);fetch(o.href,a)}})();const dt=(e,t)=>{const n=e.__vccOpts||e;for(const[r,o]of t)n[r]=o;return n},pt={};function mt(e,t){const n=rt("router-view");return ot(),st(n)}const gt=dt(pt,[["render",mt]]),vt="modulepreload",yt=function(e){return"/"+e},Se={},Et=function(t,n,r){let o=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),f=a?.nonce||a?.getAttribute("nonce");o=Promise.all(n.map(p=>{if(p=yt(p),p in Se)return;Se[p]=!0;const i=p.endsWith(".css"),h=i?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${p}"]${h}`))return;const s=document.createElement("link");if(s.rel=i?"stylesheet":vt,i||(s.as="script",s.crossOrigin=""),s.href=p,f&&s.setAttribute("nonce",f),document.head.appendChild(s),i)return new Promise((u,l)=>{s.addEventListener("load",u),s.addEventListener("error",()=>l(new Error(`Unable to preload CSS for ${p}`)))})}))}return o.then(()=>t()).catch(a=>{const f=new Event("vite:preloadError",{cancelable:!0});if(f.payload=a,window.dispatchEvent(f),!f.defaultPrevented)throw a})};/*!
  * vue-router v4.3.2
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const q=typeof document<"u";function Rt(e){return e.__esModule||e[Symbol.toStringTag]==="Module"}const S=Object.assign;function le(e,t){const n={};for(const r in t){const o=t[r];n[r]=M(o)?o.map(e):e(o)}return n}const W=()=>{},M=Array.isArray,Ue=/#/g,Pt=/&/g,wt=/\//g,St=/=/g,_t=/\?/g,Ge=/\+/g,bt=/%5B/g,Ct=/%5D/g,Ke=/%5E/g,kt=/%60/g,Ve=/%7B/g,At=/%7C/g,De=/%7D/g,Ot=/%20/g;function me(e){return encodeURI(""+e).replace(At,"|").replace(bt,"[").replace(Ct,"]")}function xt(e){return me(e).replace(Ve,"{").replace(De,"}").replace(Ke,"^")}function he(e){return me(e).replace(Ge,"%2B").replace(Ot,"+").replace(Ue,"%23").replace(Pt,"%26").replace(kt,"`").replace(Ve,"{").replace(De,"}").replace(Ke,"^")}function Lt(e){return he(e).replace(St,"%3D")}function Mt(e){return me(e).replace(Ue,"%23").replace(_t,"%3F")}function Nt(e){return e==null?"":Mt(e).replace(wt,"%2F")}function X(e){try{return decodeURIComponent(""+e)}catch{}return""+e}const $t=/\/$/,It=e=>e.replace($t,"");function ue(e,t,n="/"){let r,o={},a="",f="";const p=t.indexOf("#");let i=t.indexOf("?");return p<i&&p>=0&&(i=-1),i>-1&&(r=t.slice(0,i),a=t.slice(i+1,p>-1?p:t.length),o=e(a)),p>-1&&(r=r||t.slice(0,p),f=t.slice(p,t.length)),r=Ht(r??t,n),{fullPath:r+(a&&"?")+a+f,path:r,query:o,hash:X(f)}}function Tt(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function _e(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function Bt(e,t,n){const r=t.matched.length-1,o=n.matched.length-1;return r>-1&&r===o&&z(t.matched[r],n.matched[o])&&Qe(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function z(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function Qe(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!jt(e[n],t[n]))return!1;return!0}function jt(e,t){return M(e)?be(e,t):M(t)?be(t,e):e===t}function be(e,t){return M(t)?e.length===t.length&&e.every((n,r)=>n===t[r]):e.length===1&&e[0]===t}function Ht(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/"),o=r[r.length-1];(o===".."||o===".")&&r.push("");let a=n.length-1,f,p;for(f=0;f<r.length;f++)if(p=r[f],p!==".")if(p==="..")a>1&&a--;else break;return n.slice(0,a).join("/")+"/"+r.slice(f).join("/")}var Z;(function(e){e.pop="pop",e.push="push"})(Z||(Z={}));var F;(function(e){e.back="back",e.forward="forward",e.unknown=""})(F||(F={}));function qt(e){if(!e)if(q){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),It(e)}const zt=/^[^#]+#/;function Ut(e,t){return e.replace(zt,"#")+t}function Gt(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const te=()=>({left:window.scrollX,top:window.scrollY});function Kt(e){let t;if("el"in e){const n=e.el,r=typeof n=="string"&&n.startsWith("#"),o=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!o)return;t=Gt(o,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.scrollX,t.top!=null?t.top:window.scrollY)}function Ce(e,t){return(history.state?history.state.position-t:-1)+e}const de=new Map;function Vt(e,t){de.set(e,t)}function Dt(e){const t=de.get(e);return de.delete(e),t}let Qt=()=>location.protocol+"//"+location.host;function We(e,t){const{pathname:n,search:r,hash:o}=t,a=e.indexOf("#");if(a>-1){let p=o.includes(e.slice(a))?e.slice(a).length:1,i=o.slice(p);return i[0]!=="/"&&(i="/"+i),_e(i,"")}return _e(n,e)+r+o}function Wt(e,t,n,r){let o=[],a=[],f=null;const p=({state:l})=>{const g=We(e,location),E=n.value,C=t.value;let b=0;if(l){if(n.value=g,t.value=l,f&&f===E){f=null;return}b=C?l.position-C.position:0}else r(g);o.forEach(R=>{R(n.value,E,{delta:b,type:Z.pop,direction:b?b>0?F.forward:F.back:F.unknown})})};function i(){f=n.value}function h(l){o.push(l);const g=()=>{const E=o.indexOf(l);E>-1&&o.splice(E,1)};return a.push(g),g}function s(){const{history:l}=window;l.state&&l.replaceState(S({},l.state,{scroll:te()}),"")}function u(){for(const l of a)l();a=[],window.removeEventListener("popstate",p),window.removeEventListener("beforeunload",s)}return window.addEventListener("popstate",p),window.addEventListener("beforeunload",s,{passive:!0}),{pauseListeners:i,listen:h,destroy:u}}function ke(e,t,n,r=!1,o=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:o?te():null}}function Ft(e){const{history:t,location:n}=window,r={value:We(e,n)},o={value:t.state};o.value||a(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function a(i,h,s){const u=e.indexOf("#"),l=u>-1?(n.host&&document.querySelector("base")?e:e.slice(u))+i:Qt()+e+i;try{t[s?"replaceState":"pushState"](h,"",l),o.value=h}catch(g){console.error(g),n[s?"replace":"assign"](l)}}function f(i,h){const s=S({},t.state,ke(o.value.back,i,o.value.forward,!0),h,{position:o.value.position});a(i,s,!0),r.value=i}function p(i,h){const s=S({},o.value,t.state,{forward:i,scroll:te()});a(s.current,s,!0);const u=S({},ke(r.value,i,null),{position:s.position+1},h);a(i,u,!1),r.value=i}return{location:r,state:o,push:p,replace:f}}function Yt(e){e=qt(e);const t=Ft(e),n=Wt(e,t.state,t.location,t.replace);function r(a,f=!0){f||n.pauseListeners(),history.go(a)}const o=S({location:"",base:e,go:r,createHref:Ut.bind(null,e)},t,n);return Object.defineProperty(o,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(o,"state",{enumerable:!0,get:()=>t.state.value}),o}function Xt(e){return typeof e=="string"||e&&typeof e=="object"}function Fe(e){return typeof e=="string"||typeof e=="symbol"}const T={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Ye=Symbol("");var Ae;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(Ae||(Ae={}));function U(e,t){return S(new Error,{type:e,[Ye]:!0},t)}function I(e,t){return e instanceof Error&&Ye in e&&(t==null||!!(e.type&t))}const Oe="[^/]+?",Zt={sensitive:!1,strict:!1,start:!0,end:!0},Jt=/[.+*?^${}()[\]/\\]/g;function en(e,t){const n=S({},Zt,t),r=[];let o=n.start?"^":"";const a=[];for(const h of e){const s=h.length?[]:[90];n.strict&&!h.length&&(o+="/");for(let u=0;u<h.length;u++){const l=h[u];let g=40+(n.sensitive?.25:0);if(l.type===0)u||(o+="/"),o+=l.value.replace(Jt,"\\$&"),g+=40;else if(l.type===1){const{value:E,repeatable:C,optional:b,regexp:R}=l;a.push({name:E,repeatable:C,optional:b});const P=R||Oe;if(P!==Oe){g+=10;try{new RegExp(`(${P})`)}catch(L){throw new Error(`Invalid custom RegExp for param "${E}" (${P}): `+L.message)}}let O=C?`((?:${P})(?:/(?:${P}))*)`:`(${P})`;u||(O=b&&h.length<2?`(?:/${O})`:"/"+O),b&&(O+="?"),o+=O,g+=20,b&&(g+=-8),C&&(g+=-20),P===".*"&&(g+=-50)}s.push(g)}r.push(s)}if(n.strict&&n.end){const h=r.length-1;r[h][r[h].length-1]+=.7000000000000001}n.strict||(o+="/?"),n.end?o+="$":n.strict&&(o+="(?:/|$)");const f=new RegExp(o,n.sensitive?"":"i");function p(h){const s=h.match(f),u={};if(!s)return null;for(let l=1;l<s.length;l++){const g=s[l]||"",E=a[l-1];u[E.name]=g&&E.repeatable?g.split("/"):g}return u}function i(h){let s="",u=!1;for(const l of e){(!u||!s.endsWith("/"))&&(s+="/"),u=!1;for(const g of l)if(g.type===0)s+=g.value;else if(g.type===1){const{value:E,repeatable:C,optional:b}=g,R=E in h?h[E]:"";if(M(R)&&!C)throw new Error(`Provided param "${E}" is an array but it is not repeatable (* or + modifiers)`);const P=M(R)?R.join("/"):R;if(!P)if(b)l.length<2&&(s.endsWith("/")?s=s.slice(0,-1):u=!0);else throw new Error(`Missing required param "${E}"`);s+=P}}return s||"/"}return{re:f,score:r,keys:a,parse:p,stringify:i}}function tn(e,t){let n=0;for(;n<e.length&&n<t.length;){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?e.length===1&&e[0]===80?-1:1:e.length>t.length?t.length===1&&t[0]===80?1:-1:0}function nn(e,t){let n=0;const r=e.score,o=t.score;for(;n<r.length&&n<o.length;){const a=tn(r[n],o[n]);if(a)return a;n++}if(Math.abs(o.length-r.length)===1){if(xe(r))return 1;if(xe(o))return-1}return o.length-r.length}function xe(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const rn={type:0,value:""},on=/[a-zA-Z0-9_]/;function sn(e){if(!e)return[[]];if(e==="/")return[[rn]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(g){throw new Error(`ERR (${n})/"${h}": ${g}`)}let n=0,r=n;const o=[];let a;function f(){a&&o.push(a),a=[]}let p=0,i,h="",s="";function u(){h&&(n===0?a.push({type:0,value:h}):n===1||n===2||n===3?(a.length>1&&(i==="*"||i==="+")&&t(`A repeatable param (${h}) must be alone in its segment. eg: '/:ids+.`),a.push({type:1,value:h,regexp:s,repeatable:i==="*"||i==="+",optional:i==="*"||i==="?"})):t("Invalid state to consume buffer"),h="")}function l(){h+=i}for(;p<e.length;){if(i=e[p++],i==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:i==="/"?(h&&u(),f()):i===":"?(u(),n=1):l();break;case 4:l(),n=r;break;case 1:i==="("?n=2:on.test(i)?l():(u(),n=0,i!=="*"&&i!=="?"&&i!=="+"&&p--);break;case 2:i===")"?s[s.length-1]=="\\"?s=s.slice(0,-1)+i:n=3:s+=i;break;case 3:u(),n=0,i!=="*"&&i!=="?"&&i!=="+"&&p--,s="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${h}"`),u(),f(),o}function cn(e,t,n){const r=en(sn(e.path),n),o=S(r,{record:e,parent:t,children:[],alias:[]});return t&&!o.record.aliasOf==!t.record.aliasOf&&t.children.push(o),o}function an(e,t){const n=[],r=new Map;t=Ne({strict:!1,end:!0,sensitive:!1},t);function o(s){return r.get(s)}function a(s,u,l){const g=!l,E=ln(s);E.aliasOf=l&&l.record;const C=Ne(t,s),b=[E];if("alias"in s){const O=typeof s.alias=="string"?[s.alias]:s.alias;for(const L of O)b.push(S({},E,{components:l?l.record.components:E.components,path:L,aliasOf:l?l.record:E}))}let R,P;for(const O of b){const{path:L}=O;if(u&&L[0]!=="/"){const j=u.record.path,$=j[j.length-1]==="/"?"":"/";O.path=u.record.path+(L&&$+L)}if(R=cn(O,u,C),l?l.alias.push(R):(P=P||R,P!==R&&P.alias.push(R),g&&s.name&&!Me(R)&&f(s.name)),E.children){const j=E.children;for(let $=0;$<j.length;$++)a(j[$],R,l&&l.children[$])}l=l||R,(R.record.components&&Object.keys(R.record.components).length||R.record.name||R.record.redirect)&&i(R)}return P?()=>{f(P)}:W}function f(s){if(Fe(s)){const u=r.get(s);u&&(r.delete(s),n.splice(n.indexOf(u),1),u.children.forEach(f),u.alias.forEach(f))}else{const u=n.indexOf(s);u>-1&&(n.splice(u,1),s.record.name&&r.delete(s.record.name),s.children.forEach(f),s.alias.forEach(f))}}function p(){return n}function i(s){let u=0;for(;u<n.length&&nn(s,n[u])>=0&&(s.record.path!==n[u].record.path||!Xe(s,n[u]));)u++;n.splice(u,0,s),s.record.name&&!Me(s)&&r.set(s.record.name,s)}function h(s,u){let l,g={},E,C;if("name"in s&&s.name){if(l=r.get(s.name),!l)throw U(1,{location:s});C=l.record.name,g=S(Le(u.params,l.keys.filter(P=>!P.optional).concat(l.parent?l.parent.keys.filter(P=>P.optional):[]).map(P=>P.name)),s.params&&Le(s.params,l.keys.map(P=>P.name))),E=l.stringify(g)}else if(s.path!=null)E=s.path,l=n.find(P=>P.re.test(E)),l&&(g=l.parse(E),C=l.record.name);else{if(l=u.name?r.get(u.name):n.find(P=>P.re.test(u.path)),!l)throw U(1,{location:s,currentLocation:u});C=l.record.name,g=S({},u.params,s.params),E=l.stringify(g)}const b=[];let R=l;for(;R;)b.unshift(R.record),R=R.parent;return{name:C,path:E,params:g,matched:b,meta:fn(b)}}return e.forEach(s=>a(s)),{addRoute:a,resolve:h,removeRoute:f,getRoutes:p,getRecordMatcher:o}}function Le(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function ln(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:un(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function un(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]=typeof n=="object"?n[r]:n;return t}function Me(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function fn(e){return e.reduce((t,n)=>S(t,n.meta),{})}function Ne(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}function Xe(e,t){return t.children.some(n=>n===e||Xe(e,n))}function hn(e){const t={};if(e===""||e==="?")return t;const r=(e[0]==="?"?e.slice(1):e).split("&");for(let o=0;o<r.length;++o){const a=r[o].replace(Ge," "),f=a.indexOf("="),p=X(f<0?a:a.slice(0,f)),i=f<0?null:X(a.slice(f+1));if(p in t){let h=t[p];M(h)||(h=t[p]=[h]),h.push(i)}else t[p]=i}return t}function $e(e){let t="";for(let n in e){const r=e[n];if(n=Lt(n),r==null){r!==void 0&&(t+=(t.length?"&":"")+n);continue}(M(r)?r.map(a=>a&&he(a)):[r&&he(r)]).forEach(a=>{a!==void 0&&(t+=(t.length?"&":"")+n,a!=null&&(t+="="+a))})}return t}function dn(e){const t={};for(const n in e){const r=e[n];r!==void 0&&(t[n]=M(r)?r.map(o=>o==null?null:""+o):r==null?r:""+r)}return t}const pn=Symbol(""),Ie=Symbol(""),ge=Symbol(""),Ze=Symbol(""),pe=Symbol("");function D(){let e=[];function t(r){return e.push(r),()=>{const o=e.indexOf(r);o>-1&&e.splice(o,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function B(e,t,n,r,o,a=f=>f()){const f=r&&(r.enterCallbacks[o]=r.enterCallbacks[o]||[]);return()=>new Promise((p,i)=>{const h=l=>{l===!1?i(U(4,{from:n,to:t})):l instanceof Error?i(l):Xt(l)?i(U(2,{from:t,to:l})):(f&&r.enterCallbacks[o]===f&&typeof l=="function"&&f.push(l),p())},s=a(()=>e.call(r&&r.instances[o],t,n,h));let u=Promise.resolve(s);e.length<3&&(u=u.then(h)),u.catch(l=>i(l))})}function fe(e,t,n,r,o=a=>a()){const a=[];for(const f of e)for(const p in f.components){let i=f.components[p];if(!(t!=="beforeRouteEnter"&&!f.instances[p]))if(mn(i)){const s=(i.__vccOpts||i)[t];s&&a.push(B(s,n,r,f,p,o))}else{let h=i();a.push(()=>h.then(s=>{if(!s)return Promise.reject(new Error(`Couldn't resolve component "${p}" at "${f.path}"`));const u=Rt(s)?s.default:s;f.components[p]=u;const g=(u.__vccOpts||u)[t];return g&&B(g,n,r,f,p,o)()}))}}return a}function mn(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function Te(e){const t=Y(ge),n=Y(Ze),r=N(()=>{const i=Q(e.to);return t.resolve(i)}),o=N(()=>{const{matched:i}=r.value,{length:h}=i,s=i[h-1],u=n.matched;if(!s||!u.length)return-1;const l=u.findIndex(z.bind(null,s));if(l>-1)return l;const g=Be(i[h-2]);return h>1&&Be(s)===g&&u[u.length-1].path!==g?u.findIndex(z.bind(null,i[h-2])):l}),a=N(()=>o.value>-1&&En(n.params,r.value.params)),f=N(()=>o.value>-1&&o.value===n.matched.length-1&&Qe(n.params,r.value.params));function p(i={}){return yn(i)?t[Q(e.replace)?"replace":"push"](Q(e.to)).catch(W):Promise.resolve()}return{route:r,href:N(()=>r.value.href),isActive:a,isExactActive:f,navigate:p}}const gn=qe({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Te,setup(e,{slots:t}){const n=lt(Te(e)),{options:r}=Y(ge),o=N(()=>({[je(e.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[je(e.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const a=t.default&&t.default(n);return e.custom?a:ze("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:o.value},a)}}}),vn=gn;function yn(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function En(e,t){for(const n in t){const r=t[n],o=e[n];if(typeof r=="string"){if(r!==o)return!1}else if(!M(o)||o.length!==r.length||r.some((a,f)=>a!==o[f]))return!1}return!0}function Be(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const je=(e,t,n)=>e??t??n,Rn=qe({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const r=Y(pe),o=N(()=>e.route||r.value),a=Y(Ie,0),f=N(()=>{let h=Q(a);const{matched:s}=o.value;let u;for(;(u=s[h])&&!u.components;)h++;return h}),p=N(()=>o.value.matched[f.value]);ae(Ie,N(()=>f.value+1)),ae(pn,p),ae(pe,o);const i=ut();return ft(()=>[i.value,p.value,e.name],([h,s,u],[l,g,E])=>{s&&(s.instances[u]=h,g&&g!==s&&h&&h===l&&(s.leaveGuards.size||(s.leaveGuards=g.leaveGuards),s.updateGuards.size||(s.updateGuards=g.updateGuards))),h&&s&&(!g||!z(s,g)||!l)&&(s.enterCallbacks[u]||[]).forEach(C=>C(h))},{flush:"post"}),()=>{const h=o.value,s=e.name,u=p.value,l=u&&u.components[s];if(!l)return He(n.default,{Component:l,route:h});const g=u.props[s],E=g?g===!0?h.params:typeof g=="function"?g(h):g:null,b=ze(l,S({},E,t,{onVnodeUnmounted:R=>{R.component.isUnmounted&&(u.instances[s]=null)},ref:i}));return He(n.default,{Component:b,route:h})||b}}});function He(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const Pn=Rn;function wn(e){const t=an(e.routes,e),n=e.parseQuery||hn,r=e.stringifyQuery||$e,o=e.history,a=D(),f=D(),p=D(),i=ct(T);let h=T;q&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const s=le.bind(null,c=>""+c),u=le.bind(null,Nt),l=le.bind(null,X);function g(c,m){let d,v;return Fe(c)?(d=t.getRecordMatcher(c),v=m):v=c,t.addRoute(v,d)}function E(c){const m=t.getRecordMatcher(c);m&&t.removeRoute(m)}function C(){return t.getRoutes().map(c=>c.record)}function b(c){return!!t.getRecordMatcher(c)}function R(c,m){if(m=S({},m||i.value),typeof c=="string"){const y=ue(n,c,m.path),A=t.resolve({path:y.path},m),V=o.createHref(y.fullPath);return S(y,A,{params:l(A.params),hash:X(y.hash),redirectedFrom:void 0,href:V})}let d;if(c.path!=null)d=S({},c,{path:ue(n,c.path,m.path).path});else{const y=S({},c.params);for(const A in y)y[A]==null&&delete y[A];d=S({},c,{params:u(y)}),m.params=u(m.params)}const v=t.resolve(d,m),_=c.hash||"";v.params=s(l(v.params));const k=Tt(r,S({},c,{hash:xt(_),path:v.path})),w=o.createHref(k);return S({fullPath:k,hash:_,query:r===$e?dn(c.query):c.query||{}},v,{redirectedFrom:void 0,href:w})}function P(c){return typeof c=="string"?ue(n,c,i.value.path):S({},c)}function O(c,m){if(h!==c)return U(8,{from:m,to:c})}function L(c){return G(c)}function j(c){return L(S(P(c),{replace:!0}))}function $(c){const m=c.matched[c.matched.length-1];if(m&&m.redirect){const{redirect:d}=m;let v=typeof d=="function"?d(c):d;return typeof v=="string"&&(v=v.includes("?")||v.includes("#")?v=P(v):{path:v},v.params={}),S({query:c.query,hash:c.hash,params:v.path!=null?{}:c.params},v)}}function G(c,m){const d=h=R(c),v=i.value,_=c.state,k=c.force,w=c.replace===!0,y=$(d);if(y)return G(S(P(y),{state:typeof y=="object"?S({},_,y.state):_,force:k,replace:w}),m||d);const A=d;A.redirectedFrom=m;let V;return!k&&Bt(r,v,d)&&(V=U(16,{to:A,from:v}),Pe(v,v,!0,!1)),(V?Promise.resolve(V):ve(A,v)).catch(x=>I(x)?I(x,2)?x:se(x):oe(x,A,v)).then(x=>{if(x){if(I(x,2))return G(S({replace:w},P(x.to),{state:typeof x.to=="object"?S({},_,x.to.state):_,force:k}),m||A)}else x=Ee(A,v,!0,w,_);return ye(A,v,x),x})}function et(c,m){const d=O(c,m);return d?Promise.reject(d):Promise.resolve()}function ne(c){const m=ee.values().next().value;return m&&typeof m.runWithContext=="function"?m.runWithContext(c):c()}function ve(c,m){let d;const[v,_,k]=Sn(c,m);d=fe(v.reverse(),"beforeRouteLeave",c,m);for(const y of v)y.leaveGuards.forEach(A=>{d.push(B(A,c,m))});const w=et.bind(null,c,m);return d.push(w),H(d).then(()=>{d=[];for(const y of a.list())d.push(B(y,c,m));return d.push(w),H(d)}).then(()=>{d=fe(_,"beforeRouteUpdate",c,m);for(const y of _)y.updateGuards.forEach(A=>{d.push(B(A,c,m))});return d.push(w),H(d)}).then(()=>{d=[];for(const y of k)if(y.beforeEnter)if(M(y.beforeEnter))for(const A of y.beforeEnter)d.push(B(A,c,m));else d.push(B(y.beforeEnter,c,m));return d.push(w),H(d)}).then(()=>(c.matched.forEach(y=>y.enterCallbacks={}),d=fe(k,"beforeRouteEnter",c,m,ne),d.push(w),H(d))).then(()=>{d=[];for(const y of f.list())d.push(B(y,c,m));return d.push(w),H(d)}).catch(y=>I(y,8)?y:Promise.reject(y))}function ye(c,m,d){p.list().forEach(v=>ne(()=>v(c,m,d)))}function Ee(c,m,d,v,_){const k=O(c,m);if(k)return k;const w=m===T,y=q?history.state:{};d&&(v||w?o.replace(c.fullPath,S({scroll:w&&y&&y.scroll},_)):o.push(c.fullPath,_)),i.value=c,Pe(c,m,d,w),se()}let K;function tt(){K||(K=o.listen((c,m,d)=>{if(!we.listening)return;const v=R(c),_=$(v);if(_){G(S(_,{replace:!0}),v).catch(W);return}h=v;const k=i.value;q&&Vt(Ce(k.fullPath,d.delta),te()),ve(v,k).catch(w=>I(w,12)?w:I(w,2)?(G(w.to,v).then(y=>{I(y,20)&&!d.delta&&d.type===Z.pop&&o.go(-1,!1)}).catch(W),Promise.reject()):(d.delta&&o.go(-d.delta,!1),oe(w,v,k))).then(w=>{w=w||Ee(v,k,!1),w&&(d.delta&&!I(w,8)?o.go(-d.delta,!1):d.type===Z.pop&&I(w,20)&&o.go(-1,!1)),ye(v,k,w)}).catch(W)}))}let re=D(),Re=D(),J;function oe(c,m,d){se(c);const v=Re.list();return v.length?v.forEach(_=>_(c,m,d)):console.error(c),Promise.reject(c)}function nt(){return J&&i.value!==T?Promise.resolve():new Promise((c,m)=>{re.add([c,m])})}function se(c){return J||(J=!c,tt(),re.list().forEach(([m,d])=>c?d(c):m()),re.reset()),c}function Pe(c,m,d,v){const{scrollBehavior:_}=e;if(!q||!_)return Promise.resolve();const k=!d&&Dt(Ce(c.fullPath,0))||(v||!d)&&history.state&&history.state.scroll||null;return at().then(()=>_(c,m,k)).then(w=>w&&Kt(w)).catch(w=>oe(w,c,m))}const ce=c=>o.go(c);let ie;const ee=new Set,we={currentRoute:i,listening:!0,addRoute:g,removeRoute:E,hasRoute:b,getRoutes:C,resolve:R,options:e,push:L,replace:j,go:ce,back:()=>ce(-1),forward:()=>ce(1),beforeEach:a.add,beforeResolve:f.add,afterEach:p.add,onError:Re.add,isReady:nt,install(c){const m=this;c.component("RouterLink",vn),c.component("RouterView",Pn),c.config.globalProperties.$router=m,Object.defineProperty(c.config.globalProperties,"$route",{enumerable:!0,get:()=>Q(i)}),q&&!ie&&i.value===T&&(ie=!0,L(o.location).catch(_=>{}));const d={};for(const _ in T)Object.defineProperty(d,_,{get:()=>i.value[_],enumerable:!0});c.provide(ge,m),c.provide(Ze,it(d)),c.provide(pe,i);const v=c.unmount;ee.add(c),c.unmount=function(){ee.delete(c),ee.size<1&&(h=T,K&&K(),K=null,i.value=T,ie=!1,J=!1),v()}}};function H(c){return c.reduce((m,d)=>m.then(()=>ne(d)),Promise.resolve())}return we}function Sn(e,t){const n=[],r=[],o=[],a=Math.max(t.matched.length,e.matched.length);for(let f=0;f<a;f++){const p=t.matched[f];p&&(e.matched.find(h=>z(h,p))?r.push(p):n.push(p));const i=e.matched[f];i&&(t.matched.find(h=>z(h,i))||o.push(i))}return[n,r,o]}let _n=[{path:"/",name:"home",component:()=>Et(()=>import("./index-Dp0iFNYI.js"),__vite__mapDeps([0,1]))}];const bn=wn({history:Yt(),routes:_n}),Je=ht(gt);Je.use(bn);Je.mount("#app");export{dt as _};
