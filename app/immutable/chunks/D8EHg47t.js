import{o as xe,Q as lt}from"./BwOIbrFS.js";import{w as we}from"./D6m8aYfR.js";new URL("sveltekit-internal://");function ft(e,t){return e==="/"||t==="ignore"?e:t==="never"?e.endsWith("/")?e.slice(0,-1):e:t==="always"&&!e.endsWith("/")?e+"/":e}function ut(e){return e.split("%25").map(decodeURI).join("%25")}function dt(e){for(const t in e)e[t]=decodeURIComponent(e[t]);return e}function ue({href:e}){return e.split("#")[0]}function ht(e,t,n,r=!1){const o=new URL(e);Object.defineProperty(o,"searchParams",{value:new Proxy(o.searchParams,{get(i,a){if(a==="get"||a==="getAll"||a==="has")return f=>(n(f),i[a](f));t();const c=Reflect.get(i,a);return typeof c=="function"?c.bind(i):c}}),enumerable:!0,configurable:!0});const s=["href","pathname","search","toString","toJSON"];r&&s.push("hash");for(const i of s)Object.defineProperty(o,i,{get(){return t(),e[i]},enumerable:!0,configurable:!0});return o}function pt(...e){let t=5381;for(const n of e)if(typeof n=="string"){let r=n.length;for(;r;)t=t*33^n.charCodeAt(--r)}else if(ArrayBuffer.isView(n)){const r=new Uint8Array(n.buffer,n.byteOffset,n.byteLength);let o=r.length;for(;o;)t=t*33^r[--o]}else throw new TypeError("value must be a string or TypedArray");return(t>>>0).toString(36)}function gt(e){const t=atob(e),n=new Uint8Array(t.length);for(let r=0;r<t.length;r++)n[r]=t.charCodeAt(r);return n.buffer}const mt=window.fetch;window.fetch=(e,t)=>((e instanceof Request?e.method:t?.method||"GET")!=="GET"&&B.delete(ye(e)),mt(e,t));const B=new Map;function _t(e,t){const n=ye(e,t),r=document.querySelector(n);if(r?.textContent){let{body:o,...s}=JSON.parse(r.textContent);const i=r.getAttribute("data-ttl");return i&&B.set(n,{body:o,init:s,ttl:1e3*Number(i)}),r.getAttribute("data-b64")!==null&&(o=gt(o)),Promise.resolve(new Response(o,s))}return window.fetch(e,t)}function wt(e,t,n){if(B.size>0){const r=ye(e,n),o=B.get(r);if(o){if(performance.now()<o.ttl&&["default","force-cache","only-if-cached",void 0].includes(n?.cache))return new Response(o.body,o.init);B.delete(r)}}return window.fetch(t,n)}function ye(e,t){let r=`script[data-sveltekit-fetched][data-url=${JSON.stringify(e instanceof Request?e.url:e)}]`;if(t?.headers||t?.body){const o=[];t.headers&&o.push([...new Headers(t.headers)].join(",")),t.body&&(typeof t.body=="string"||ArrayBuffer.isView(t.body))&&o.push(t.body),r+=`[data-hash="${pt(...o)}"]`}return r}const yt=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function vt(e){const t=[];return{pattern:e==="/"?/^\/$/:new RegExp(`^${At(e).map(r=>{const o=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(r);if(o)return t.push({name:o[1],matcher:o[2],optional:!1,rest:!0,chained:!0}),"(?:/(.*))?";const s=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(r);if(s)return t.push({name:s[1],matcher:s[2],optional:!0,rest:!1,chained:!0}),"(?:/([^/]+))?";if(!r)return;const i=r.split(/\[(.+?)\](?!\])/);return"/"+i.map((c,f)=>{if(f%2){if(c.startsWith("x+"))return de(String.fromCharCode(parseInt(c.slice(2),16)));if(c.startsWith("u+"))return de(String.fromCharCode(...c.slice(2).split("-").map(_=>parseInt(_,16))));const d=yt.exec(c),[,p,u,l,h]=d;return t.push({name:l,matcher:h,optional:!!p,rest:!!u,chained:u?f===1&&i[0]==="":!1}),u?"(.*?)":p?"([^/]*)?":"([^/]+?)"}return de(c)}).join("")}).join("")}/?$`),params:t}}function bt(e){return!/^\([^)]+\)$/.test(e)}function At(e){return e.slice(1).split("/").filter(bt)}function kt(e,t,n){const r={},o=e.slice(1),s=o.filter(a=>a!==void 0);let i=0;for(let a=0;a<t.length;a+=1){const c=t[a];let f=o[a-i];if(c.chained&&c.rest&&i&&(f=o.slice(a-i,a+1).filter(d=>d).join("/"),i=0),f===void 0){c.rest&&(r[c.name]="");continue}if(!c.matcher||n[c.matcher](f)){r[c.name]=f;const d=t[a+1],p=o[a+1];d&&!d.rest&&d.optional&&p&&c.chained&&(i=0),!d&&!p&&Object.keys(r).length===s.length&&(i=0);continue}if(c.optional&&c.chained){i++;continue}return}if(!i)return r}function de(e){return e.normalize().replace(/[[\]]/g,"\\$&").replace(/%/g,"%25").replace(/\//g,"%2[Ff]").replace(/\?/g,"%3[Ff]").replace(/#/g,"%23").replace(/[.*+?^${}()|\\]/g,"\\$&")}function St({nodes:e,server_loads:t,dictionary:n,matchers:r}){const o=new Set(t);return Object.entries(n).map(([a,[c,f,d]])=>{const{pattern:p,params:u}=vt(a),l={id:a,exec:h=>{const _=p.exec(h);if(_)return kt(_,u,r)},errors:[1,...d||[]].map(h=>e[h]),layouts:[0,...f||[]].map(i),leaf:s(c)};return l.errors.length=l.layouts.length=Math.max(l.errors.length,l.layouts.length),l});function s(a){const c=a<0;return c&&(a=~a),[c,e[a]]}function i(a){return a===void 0?a:[o.has(a),e[a]]}}function Be(e,t=JSON.parse){try{return t(sessionStorage[e])}catch{}}function Pe(e,t,n=JSON.stringify){const r=n(t);try{sessionStorage[e]=r}catch{}}const U=globalThis.__sveltekit_mdhpum?.base??"",Et=globalThis.__sveltekit_mdhpum?.assets??U,Rt="1741237971717",Ge="sveltekit:snapshot",Me="sveltekit:scroll",qe="sveltekit:states",It="sveltekit:pageurl",j="sveltekit:history",q="sveltekit:navigation",C={tap:1,hover:2,viewport:3,eager:4,off:-1,false:-1},Y=location.origin;function He(e){if(e instanceof URL)return e;let t=document.baseURI;if(!t){const n=document.getElementsByTagName("base");t=n.length?n[0].href:document.URL}return new URL(e,t)}function ve(){return{x:pageXOffset,y:pageYOffset}}function $(e,t){return e.getAttribute(`data-sveltekit-${t}`)}const Ce={...C,"":C.hover};function Ke(e){let t=e.assignedSlot??e.parentNode;return t?.nodeType===11&&(t=t.host),t}function We(e,t){for(;e&&e!==t;){if(e.nodeName.toUpperCase()==="A"&&e.hasAttribute("href"))return e;e=Ke(e)}}function ge(e,t,n){let r;try{if(r=new URL(e instanceof SVGAElement?e.href.baseVal:e.href,document.baseURI),n&&r.hash.match(/^#[^/]/)){const a=location.hash.split("#")[1]||"/";r.hash=`#${a}${r.hash}`}}catch{}const o=e instanceof SVGAElement?e.target.baseVal:e.target,s=!r||!!o||oe(r,t,n)||(e.getAttribute("rel")||"").split(/\s+/).includes("external"),i=r?.origin===Y&&e.hasAttribute("download");return{url:r,external:s,target:o,download:i}}function X(e){let t=null,n=null,r=null,o=null,s=null,i=null,a=e;for(;a&&a!==document.documentElement;)r===null&&(r=$(a,"preload-code")),o===null&&(o=$(a,"preload-data")),t===null&&(t=$(a,"keepfocus")),n===null&&(n=$(a,"noscroll")),s===null&&(s=$(a,"reload")),i===null&&(i=$(a,"replacestate")),a=Ke(a);function c(f){switch(f){case"":case"true":return!0;case"off":case"false":return!1;default:return}}return{preload_code:Ce[r??"off"],preload_data:Ce[o??"off"],keepfocus:c(t),noscroll:c(n),reload:c(s),replace_state:c(i)}}function Oe(e){const t=we(e);let n=!0;function r(){n=!0,t.update(i=>i)}function o(i){n=!1,t.set(i)}function s(i){let a;return t.subscribe(c=>{(a===void 0||n&&c!==a)&&i(a=c)})}return{notify:r,set:o,subscribe:s}}const Ye={v:()=>{}};function Ut(){const{set:e,subscribe:t}=we(!1);let n;async function r(){clearTimeout(n);try{const o=await fetch(`${Et}/app/version.json`,{headers:{pragma:"no-cache","cache-control":"no-cache"}});if(!o.ok)return!1;const i=(await o.json()).version!==Rt;return i&&(e(!0),Ye.v(),clearTimeout(n)),i}catch{return!1}}return{subscribe:t,check:r}}function oe(e,t,n){return e.origin!==Y||!e.pathname.startsWith(t)?!0:n?!(e.pathname===t+"/"||e.pathname===t+"/index.html"||e.protocol==="file:"&&e.pathname.replace(/\/[^/]+\.html?$/,"")===t):!1}function hn(e){}function Ne(e){const t=Tt(e),n=new ArrayBuffer(t.length),r=new DataView(n);for(let o=0;o<n.byteLength;o++)r.setUint8(o,t.charCodeAt(o));return n}const Lt="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";function Tt(e){e.length%4===0&&(e=e.replace(/==?$/,""));let t="",n=0,r=0;for(let o=0;o<e.length;o++)n<<=6,n|=Lt.indexOf(e[o]),r+=6,r===24&&(t+=String.fromCharCode((n&16711680)>>16),t+=String.fromCharCode((n&65280)>>8),t+=String.fromCharCode(n&255),n=r=0);return r===12?(n>>=4,t+=String.fromCharCode(n)):r===18&&(n>>=2,t+=String.fromCharCode((n&65280)>>8),t+=String.fromCharCode(n&255)),t}const xt=-1,Pt=-2,Ct=-3,Ot=-4,Nt=-5,$t=-6;function jt(e,t){if(typeof e=="number")return o(e,!0);if(!Array.isArray(e)||e.length===0)throw new Error("Invalid input");const n=e,r=Array(n.length);function o(s,i=!1){if(s===xt)return;if(s===Ct)return NaN;if(s===Ot)return 1/0;if(s===Nt)return-1/0;if(s===$t)return-0;if(i)throw new Error("Invalid input");if(s in r)return r[s];const a=n[s];if(!a||typeof a!="object")r[s]=a;else if(Array.isArray(a))if(typeof a[0]=="string"){const c=a[0],f=t?.[c];if(f)return r[s]=f(o(a[1]));switch(c){case"Date":r[s]=new Date(a[1]);break;case"Set":const d=new Set;r[s]=d;for(let l=1;l<a.length;l+=1)d.add(o(a[l]));break;case"Map":const p=new Map;r[s]=p;for(let l=1;l<a.length;l+=2)p.set(o(a[l]),o(a[l+1]));break;case"RegExp":r[s]=new RegExp(a[1],a[2]);break;case"Object":r[s]=Object(a[1]);break;case"BigInt":r[s]=BigInt(a[1]);break;case"null":const u=Object.create(null);r[s]=u;for(let l=1;l<a.length;l+=2)u[a[l]]=o(a[l+1]);break;case"Int8Array":case"Uint8Array":case"Uint8ClampedArray":case"Int16Array":case"Uint16Array":case"Int32Array":case"Uint32Array":case"Float32Array":case"Float64Array":case"BigInt64Array":case"BigUint64Array":{const l=globalThis[c],h=a[1],_=Ne(h),m=new l(_);r[s]=m;break}case"ArrayBuffer":{const l=a[1],h=Ne(l);r[s]=h;break}default:throw new Error(`Unknown type ${c}`)}}else{const c=new Array(a.length);r[s]=c;for(let f=0;f<a.length;f+=1){const d=a[f];d!==Pt&&(c[f]=o(d))}}else{const c={};r[s]=c;for(const f in a){const d=a[f];c[f]=o(d)}}return r[s]}return o(0)}const Je=new Set(["load","prerender","csr","ssr","trailingSlash","config"]);[...Je];const Dt=new Set([...Je]);[...Dt];function Ft(e){return e.filter(t=>t!=null)}class se{constructor(t,n){this.status=t,typeof n=="string"?this.body={message:n}:n?this.body=n:this.body={message:`Error: ${t}`}}toString(){return JSON.stringify(this.body)}}class be{constructor(t,n){this.status=t,this.location=n}}class Ae extends Error{constructor(t,n,r){super(r),this.status=t,this.text=n}}const Vt="x-sveltekit-invalidated",Bt="x-sveltekit-trailing-slash";function Q(e){return e instanceof se||e instanceof Ae?e.status:500}function Gt(e){return e instanceof Ae?e.text:"Internal Error"}let S,H,he;const Mt=xe.toString().includes("$$")||/function \w+\(\) \{\}/.test(xe.toString());Mt?(S={data:{},form:null,error:null,params:{},route:{id:null},state:{},status:-1,url:new URL("https://example.com")},H={current:null},he={current:!1}):(S=new class{data=$state.raw({});form=$state.raw(null);error=$state.raw(null);params=$state.raw({});route=$state.raw({id:null});state=$state.raw({});status=$state.raw(-1);url=$state.raw(new URL("https://example.com"))},H=new class{current=$state.raw(null)},he=new class{current=$state.raw(!1)},Ye.v=()=>he.current=!0);function qt(e){Object.assign(S,e)}const Ht="/__data.json",Kt=".html__data.json";function Wt(e){return e.endsWith(".html")?e.replace(/\.html$/,Kt):e.replace(/\/$/,"")+Ht}const Yt=new Set(["icon","shortcut icon","apple-touch-icon"]),N=Be(Me)??{},K=Be(Ge)??{},P={url:Oe({}),page:Oe({}),navigating:we(null),updated:Ut()};function ke(e){N[e]=ve()}function Jt(e,t){let n=e+1;for(;N[n];)delete N[n],n+=1;for(n=t+1;K[n];)delete K[n],n+=1}function F(e){return location.href=e.href,new Promise(()=>{})}async function ze(){if("serviceWorker"in navigator){const e=await navigator.serviceWorker.getRegistration(U||"/");e&&await e.update()}}function $e(){}let Se,me,Z,T,_e,v;const ee=[],te=[];let x=null;const Xe=new Set,zt=new Set,G=new Set;let y={branch:[],error:null,url:null},Ee=!1,ne=!1,je=!0,W=!1,V=!1,Qe=!1,Re=!1,Ze,A,I,O;const M=new Set;async function _n(e,t,n){document.URL!==location.href&&(location.href=location.href),v=e,await e.hooks.init?.(),Se=St(e),T=document.documentElement,_e=t,me=e.nodes[0],Z=e.nodes[1],me(),Z(),A=history.state?.[j],I=history.state?.[q],A||(A=I=Date.now(),history.replaceState({...history.state,[j]:A,[q]:I},""));const r=N[A];r&&(history.scrollRestoration="manual",scrollTo(r.x,r.y)),n?await cn(_e,n):await an(v.hash?fn(new URL(location.href)):location.href,{replaceState:!0}),sn()}function Xt(){ee.length=0,Re=!1}function et(e){te.some(t=>t?.snapshot)&&(K[e]=te.map(t=>t?.snapshot?.capture()))}function tt(e){K[e]?.forEach((t,n)=>{te[n]?.snapshot?.restore(t)})}function De(){ke(A),Pe(Me,N),et(I),Pe(Ge,K)}async function Ie(e,t,n,r){return z({type:"goto",url:He(e),keepfocus:t.keepFocus,noscroll:t.noScroll,replace_state:t.replaceState,state:t.state,redirect_count:n,nav_token:r,accept:()=>{t.invalidateAll&&(Re=!0),t.invalidate&&t.invalidate.forEach(on)}})}async function Qt(e){if(e.id!==x?.id){const t={};M.add(t),x={id:e.id,token:t,promise:rt({...e,preload:t}).then(n=>(M.delete(t),n.type==="loaded"&&n.state.error&&(x=null),n))}}return x.promise}async function pe(e){const t=(await ce(e,!1))?.route;t&&await Promise.all([...t.layouts,t.leaf].map(n=>n?.[1]()))}function nt(e,t,n){y=e.state;const r=document.querySelector("style[data-sveltekit]");r&&r.remove(),Object.assign(S,e.props.page),Ze=new v.root({target:t,props:{...e.props,stores:P,components:te},hydrate:n,sync:!1}),tt(I);const o={from:null,to:{params:y.params,route:{id:y.route?.id??null},url:new URL(location.href)},willUnload:!1,type:"enter",complete:Promise.resolve()};G.forEach(s=>s(o)),ne=!0}function re({url:e,params:t,branch:n,status:r,error:o,route:s,form:i}){let a="never";if(U&&(e.pathname===U||e.pathname===U+"/"))a="always";else for(const l of n)l?.slash!==void 0&&(a=l.slash);e.pathname=ft(e.pathname,a),e.search=e.search;const c={type:"loaded",state:{url:e,params:t,branch:n,error:o,route:s},props:{constructors:Ft(n).map(l=>l.node.component),page:Te(S)}};i!==void 0&&(c.props.form=i);let f={},d=!S,p=0;for(let l=0;l<Math.max(n.length,y.branch.length);l+=1){const h=n[l],_=y.branch[l];h?.data!==_?.data&&(d=!0),h&&(f={...f,...h.data},d&&(c.props[`data_${p}`]=f),p+=1)}return(!y.url||e.href!==y.url.href||y.error!==o||i!==void 0&&i!==S.form||d)&&(c.props.page={error:o,params:t,route:{id:s?.id??null},state:{},status:r,url:new URL(e),form:i??null,data:d?f:S.data}),c}async function Ue({loader:e,parent:t,url:n,params:r,route:o,server_data_node:s}){let i=null,a=!0;const c={dependencies:new Set,params:new Set,parent:!1,route:!1,url:!1,search_params:new Set},f=await e();if(f.universal?.load){let d=function(...u){for(const l of u){const{href:h}=new URL(l,n);c.dependencies.add(h)}};const p={route:new Proxy(o,{get:(u,l)=>(a&&(c.route=!0),u[l])}),params:new Proxy(r,{get:(u,l)=>(a&&c.params.add(l),u[l])}),data:s?.data??null,url:ht(n,()=>{a&&(c.url=!0)},u=>{a&&c.search_params.add(u)},v.hash),async fetch(u,l){let h;u instanceof Request?(h=u.url,l={body:u.method==="GET"||u.method==="HEAD"?void 0:await u.blob(),cache:u.cache,credentials:u.credentials,headers:[...u.headers].length?u.headers:void 0,integrity:u.integrity,keepalive:u.keepalive,method:u.method,mode:u.mode,redirect:u.redirect,referrer:u.referrer,referrerPolicy:u.referrerPolicy,signal:u.signal,...l}):h=u;const _=new URL(h,n);return a&&d(_.href),_.origin===n.origin&&(h=_.href.slice(n.origin.length)),ne?wt(h,_.href,l):_t(h,l)},setHeaders:()=>{},depends:d,parent(){return a&&(c.parent=!0),t()},untrack(u){a=!1;try{return u()}finally{a=!0}}};i=await f.universal.load.call(null,p)??null}return{node:f,loader:e,server:s,universal:f.universal?.load?{type:"data",data:i,uses:c}:null,data:i??s?.data??null,slash:f.universal?.trailingSlash??s?.slash}}function Fe(e,t,n,r,o,s){if(Re)return!0;if(!o)return!1;if(o.parent&&e||o.route&&t||o.url&&n)return!0;for(const i of o.search_params)if(r.has(i))return!0;for(const i of o.params)if(s[i]!==y.params[i])return!0;for(const i of o.dependencies)if(ee.some(a=>a(new URL(i))))return!0;return!1}function Le(e,t){return e?.type==="data"?e:e?.type==="skip"?t??null:null}function Zt(e,t){if(!e)return new Set(t.searchParams.keys());const n=new Set([...e.searchParams.keys(),...t.searchParams.keys()]);for(const r of n){const o=e.searchParams.getAll(r),s=t.searchParams.getAll(r);o.every(i=>s.includes(i))&&s.every(i=>o.includes(i))&&n.delete(r)}return n}function Ve({error:e,url:t,route:n,params:r}){return{type:"loaded",state:{error:e,url:t,route:n,params:r,branch:[]},props:{page:Te(S),constructors:[]}}}async function rt({id:e,invalidating:t,url:n,params:r,route:o,preload:s}){if(x?.id===e)return M.delete(x.token),x.promise;const{errors:i,layouts:a,leaf:c}=o,f=[...a,c];i.forEach(g=>g?.().catch(()=>{})),f.forEach(g=>g?.[1]().catch(()=>{}));let d=null;const p=y.url?e!==ae(y.url):!1,u=y.route?o.id!==y.route.id:!1,l=Zt(y.url,n);let h=!1;const _=f.map((g,w)=>{const b=y.branch[w],k=!!g?.[0]&&(b?.loader!==g[1]||Fe(h,u,p,l,b.server?.uses,r));return k&&(h=!0),k});if(_.some(Boolean)){try{d=await st(n,_)}catch(g){const w=await D(g,{url:n,params:r,route:{id:e}});return M.has(s)?Ve({error:w,url:n,params:r,route:o}):ie({status:Q(g),error:w,url:n,route:o})}if(d.type==="redirect")return d}const m=d?.nodes;let R=!1;const E=f.map(async(g,w)=>{if(!g)return;const b=y.branch[w],k=m?.[w];if((!k||k.type==="skip")&&g[1]===b?.loader&&!Fe(R,u,p,l,b.universal?.uses,r))return b;if(R=!0,k?.type==="error")throw k;return Ue({loader:g[1],url:n,params:r,route:o,parent:async()=>{const le={};for(let fe=0;fe<w;fe+=1)Object.assign(le,(await E[fe])?.data);return le},server_data_node:Le(k===void 0&&g[0]?{type:"skip"}:k??null,g[0]?b?.server:void 0)})});for(const g of E)g.catch(()=>{});const L=[];for(let g=0;g<f.length;g+=1)if(f[g])try{L.push(await E[g])}catch(w){if(w instanceof be)return{type:"redirect",location:w.location};if(M.has(s))return Ve({error:await D(w,{params:r,url:n,route:{id:o.id}}),url:n,params:r,route:o});let b=Q(w),k;if(m?.includes(w))b=w.status??b,k=w.error;else if(w instanceof se)k=w.body;else{if(await P.updated.check())return await ze(),await F(n);k=await D(w,{params:r,url:n,route:{id:o.id}})}const J=await en(g,L,i);return J?re({url:n,params:r,branch:L.slice(0,J.idx).concat(J.node),status:b,error:k,route:o}):await ot(n,{id:o.id},k,b)}else L.push(void 0);return re({url:n,params:r,branch:L,status:200,error:null,route:o,form:t?void 0:null})}async function en(e,t,n){for(;e--;)if(n[e]){let r=e;for(;!t[r];)r-=1;try{return{idx:r+1,node:{node:await n[e](),loader:n[e],data:{},server:null,universal:null}}}catch{continue}}}async function ie({status:e,error:t,url:n,route:r}){const o={};let s=null;if(v.server_loads[0]===0)try{const a=await st(n,[!0]);if(a.type!=="data"||a.nodes[0]&&a.nodes[0].type!=="data")throw 0;s=a.nodes[0]??null}catch{(n.origin!==Y||n.pathname!==location.pathname||Ee)&&await F(n)}try{const a=await Ue({loader:me,url:n,params:o,route:r,parent:()=>Promise.resolve({}),server_data_node:Le(s)}),c={node:await Z(),loader:Z,universal:null,server:null,data:null};return re({url:n,params:o,branch:[a,c],status:e,error:t,route:null})}catch(a){if(a instanceof be)return Ie(new URL(a.location,location.href),{},0);throw a}}async function tn(e){let t;try{if(t=await v.hooks.reroute({url:new URL(e)})??e,typeof t=="string"){const n=new URL(e);v.hash?n.hash=t:n.pathname=t,t=n}}catch{return}return t}async function ce(e,t){if(e&&!oe(e,U,v.hash)){const n=await tn(e);if(!n)return;const r=nn(n);for(const o of Se){const s=o.exec(r);if(s)return{id:ae(e),invalidating:t,route:o,params:dt(s),url:e}}}}function nn(e){return ut(v.hash?e.hash.replace(/^#/,"").replace(/[?#].+/,""):e.pathname.slice(U.length))||"/"}function ae(e){return(v.hash?e.hash.replace(/^#/,""):e.pathname)+e.search}function at({url:e,type:t,intent:n,delta:r}){let o=!1;const s=ct(y,n,e,t);r!==void 0&&(s.navigation.delta=r);const i={...s.navigation,cancel:()=>{o=!0,s.reject(new Error("navigation cancelled"))}};return W||Xe.forEach(a=>a(i)),o?null:s}async function z({type:e,url:t,popped:n,keepfocus:r,noscroll:o,replace_state:s,state:i={},redirect_count:a=0,nav_token:c={},accept:f=$e,block:d=$e}){const p=O;O=c;const u=await ce(t,!1),l=at({url:t,type:e,delta:n?.delta,intent:u});if(!l){d(),O===c&&(O=p);return}const h=A,_=I;f(),W=!0,ne&&P.navigating.set(H.current=l.navigation);let m=u&&await rt(u);if(!m){if(oe(t,U,v.hash))return await F(t);m=await ot(t,{id:null},await D(new Ae(404,"Not Found",`Not found: ${t.pathname}`),{url:t,params:{},route:{id:null}}),404)}if(t=u?.url||t,O!==c)return l.reject(new Error("navigation aborted")),!1;if(m.type==="redirect")if(a>=20)m=await ie({status:500,error:await D(new Error("Redirect loop"),{url:t,params:{},route:{id:null}}),url:t,route:{id:null}});else return await Ie(new URL(m.location,t).href,{},a+1,c),!1;else m.props.page.status>=400&&await P.updated.check()&&(await ze(),await F(t));if(Xt(),ke(h),et(_),m.props.page.url.pathname!==t.pathname&&(t.pathname=m.props.page.url.pathname),i=n?n.state:i,!n){const g=s?0:1,w={[j]:A+=g,[q]:I+=g,[qe]:i};(s?history.replaceState:history.pushState).call(history,w,"",t),s||Jt(A,I)}if(x=null,m.props.page.state=i,ne){y=m.state,m.props.page&&(m.props.page.url=t);const g=(await Promise.all(Array.from(zt,w=>w(l.navigation)))).filter(w=>typeof w=="function");if(g.length>0){let w=function(){g.forEach(b=>{G.delete(b)})};g.push(w),g.forEach(b=>{G.add(b)})}Ze.$set(m.props),qt(m.props.page),Qe=!0}else nt(m,_e,!1);const{activeElement:R}=document;await lt();const E=n?n.scroll:o?ve():null;if(je){const g=t.hash&&document.getElementById(decodeURIComponent(v.hash?t.hash.split("#")[2]??"":t.hash.slice(1)));E?scrollTo(E.x,E.y):g?g.scrollIntoView():scrollTo(0,0)}const L=document.activeElement!==R&&document.activeElement!==document.body;!r&&!L&&ln(),je=!0,m.props.page&&Object.assign(S,m.props.page),W=!1,e==="popstate"&&tt(I),l.fulfil(void 0),G.forEach(g=>g(l.navigation)),P.navigating.set(H.current=null)}async function ot(e,t,n,r){return e.origin===Y&&e.pathname===location.pathname&&!Ee?await ie({status:r,error:n,url:e,route:t}):await F(e)}function rn(){let e,t,n;T.addEventListener("mousemove",a=>{const c=a.target;clearTimeout(e),e=setTimeout(()=>{s(c,C.hover)},20)});function r(a){a.defaultPrevented||s(a.composedPath()[0],C.tap)}T.addEventListener("mousedown",r),T.addEventListener("touchstart",r,{passive:!0});const o=new IntersectionObserver(a=>{for(const c of a)c.isIntersecting&&(pe(new URL(c.target.href)),o.unobserve(c.target))},{threshold:0});async function s(a,c){const f=We(a,T),d=f===t&&c>=n;if(!f||d)return;const{url:p,external:u,download:l}=ge(f,U,v.hash);if(u||l)return;const h=X(f),_=p&&ae(y.url)===ae(p);if(!(h.reload||_))if(c<=h.preload_data){t=f,n=C.tap;const m=await ce(p,!1);if(!m)return;Qt(m)}else c<=h.preload_code&&(t=f,n=c,pe(p))}function i(){o.disconnect();for(const a of T.querySelectorAll("a")){const{url:c,external:f,download:d}=ge(a,U,v.hash);if(f||d)continue;const p=X(a);p.reload||(p.preload_code===C.viewport&&o.observe(a),p.preload_code===C.eager&&pe(c))}}G.add(i),i()}function D(e,t){if(e instanceof se)return e.body;const n=Q(e),r=Gt(e);return v.hooks.handleError({error:e,event:t,status:n,message:r})??{message:r}}function an(e,t={}){return e=new URL(He(e)),e.origin!==Y?Promise.reject(new Error("goto: invalid URL")):Ie(e,t,0)}function on(e){if(typeof e=="function")ee.push(e);else{const{href:t}=new URL(e,location.href);ee.push(n=>n.href===t)}}function sn(){history.scrollRestoration="manual",addEventListener("beforeunload",t=>{let n=!1;if(De(),!W){const r=ct(y,void 0,null,"leave"),o={...r.navigation,cancel:()=>{n=!0,r.reject(new Error("navigation cancelled"))}};Xe.forEach(s=>s(o))}n?(t.preventDefault(),t.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"&&De()}),navigator.connection?.saveData||rn(),T.addEventListener("click",async t=>{if(t.button||t.which!==1||t.metaKey||t.ctrlKey||t.shiftKey||t.altKey||t.defaultPrevented)return;const n=We(t.composedPath()[0],T);if(!n)return;const{url:r,external:o,target:s,download:i}=ge(n,U,v.hash);if(!r)return;if(s==="_parent"||s==="_top"){if(window.parent!==window)return}else if(s&&s!=="_self")return;const a=X(n);if(!(n instanceof SVGAElement)&&r.protocol!==location.protocol&&!(r.protocol==="https:"||r.protocol==="http:")||i)return;const[f,d]=(v.hash?r.hash.replace(/^#/,""):r.href).split("#"),p=f===ue(location);if(o||a.reload&&(!p||!d)){at({url:r,type:"link"})?W=!0:t.preventDefault();return}if(d!==void 0&&p){const[,u]=y.url.href.split("#");if(u===d){if(t.preventDefault(),d===""||d==="top"&&n.ownerDocument.getElementById("top")===null)window.scrollTo({top:0});else{const l=n.ownerDocument.getElementById(decodeURIComponent(d));l&&(l.scrollIntoView(),l.focus())}return}if(V=!0,ke(A),e(r),!a.replace_state)return;V=!1}t.preventDefault(),await new Promise(u=>{requestAnimationFrame(()=>{setTimeout(u,0)}),setTimeout(u,100)}),await z({type:"link",url:r,keepfocus:a.keepfocus,noscroll:a.noscroll,replace_state:a.replace_state??r.href===location.href})}),T.addEventListener("submit",t=>{if(t.defaultPrevented)return;const n=HTMLFormElement.prototype.cloneNode.call(t.target),r=t.submitter;if((r?.formTarget||n.target)==="_blank"||(r?.formMethod||n.method)!=="get")return;const i=new URL(r?.hasAttribute("formaction")&&r?.formAction||n.action);if(oe(i,U,!1))return;const a=t.target,c=X(a);if(c.reload)return;t.preventDefault(),t.stopPropagation();const f=new FormData(a),d=r?.getAttribute("name");d&&f.append(d,r?.getAttribute("value")??""),i.search=new URLSearchParams(f).toString(),z({type:"form",url:i,keepfocus:c.keepfocus,noscroll:c.noscroll,replace_state:c.replace_state??i.href===location.href})}),addEventListener("popstate",async t=>{if(t.state?.[j]){const n=t.state[j];if(O={},n===A)return;const r=N[n],o=t.state[qe]??{},s=new URL(t.state[It]??location.href),i=t.state[q],a=y.url?ue(location)===ue(y.url):!1;if(i===I&&(Qe||a)){o!==S.state&&(S.state=o),e(s),N[A]=ve(),r&&scrollTo(r.x,r.y),A=n;return}const f=n-A;await z({type:"popstate",url:s,popped:{state:o,scroll:r,delta:f},accept:()=>{A=n,I=i},block:()=>{history.go(-f)},nav_token:O})}else if(!V){const n=new URL(location.href);e(n),v.hash&&location.reload()}}),addEventListener("hashchange",()=>{V&&(V=!1,history.replaceState({...history.state,[j]:++A,[q]:I},"",location.href))});for(const t of document.querySelectorAll("link"))Yt.has(t.rel)&&(t.href=t.href);addEventListener("pageshow",t=>{t.persisted&&P.navigating.set(H.current=null)});function e(t){y.url=S.url=t,P.page.set(Te(S)),P.page.notify()}}async function cn(e,{status:t=200,error:n,node_ids:r,params:o,route:s,server_route:i,data:a,form:c}){Ee=!0;const f=new URL(location.href);let d;({params:o={},route:s={id:null}}=await ce(f,!1)||{}),d=Se.find(({id:l})=>l===s.id);let p,u=!0;try{const l=r.map(async(_,m)=>{const R=a[m];return R?.uses&&(R.uses=it(R.uses)),Ue({loader:v.nodes[_],url:f,params:o,route:s,parent:async()=>{const E={};for(let L=0;L<m;L+=1)Object.assign(E,(await l[L]).data);return E},server_data_node:Le(R)})}),h=await Promise.all(l);if(d){const _=d.layouts;for(let m=0;m<_.length;m++)_[m]||h.splice(m,0,void 0)}p=re({url:f,params:o,branch:h,status:t,error:n,form:c,route:d??null})}catch(l){if(l instanceof be){await F(new URL(l.location,location.href));return}p=await ie({status:Q(l),error:await D(l,{url:f,params:o,route:s}),url:f,route:s}),e.textContent="",u=!1}p.props.page&&(p.props.page.state={}),nt(p,e,u)}async function st(e,t){const n=new URL(e);n.pathname=Wt(e.pathname),e.pathname.endsWith("/")&&n.searchParams.append(Bt,"1"),n.searchParams.append(Vt,t.map(s=>s?"1":"0").join(""));const r=window.fetch,o=await r(n.href,{});if(!o.ok){let s;throw o.headers.get("content-type")?.includes("application/json")?s=await o.json():o.status===404?s="Not Found":o.status===500&&(s="Internal Error"),new se(o.status,s)}return new Promise(async s=>{const i=new Map,a=o.body.getReader(),c=new TextDecoder;function f(p){return jt(p,{...v.decoders,Promise:u=>new Promise((l,h)=>{i.set(u,{fulfil:l,reject:h})})})}let d="";for(;;){const{done:p,value:u}=await a.read();if(p&&!d)break;for(d+=!u&&d?`
`:c.decode(u,{stream:!0});;){const l=d.indexOf(`
`);if(l===-1)break;const h=JSON.parse(d.slice(0,l));if(d=d.slice(l+1),h.type==="redirect")return s(h);if(h.type==="data")h.nodes?.forEach(_=>{_?.type==="data"&&(_.uses=it(_.uses),_.data=f(_.data))}),s(h);else if(h.type==="chunk"){const{id:_,data:m,error:R}=h,E=i.get(_);i.delete(_),R?E.reject(f(R)):E.fulfil(f(m))}}}})}function it(e){return{dependencies:new Set(e?.dependencies??[]),params:new Set(e?.params??[]),parent:!!e?.parent,route:!!e?.route,url:!!e?.url,search_params:new Set(e?.search_params??[])}}function ln(){const e=document.querySelector("[autofocus]");if(e)e.focus();else{const t=document.body,n=t.getAttribute("tabindex");t.tabIndex=-1,t.focus({preventScroll:!0,focusVisible:!1}),n!==null?t.setAttribute("tabindex",n):t.removeAttribute("tabindex");const r=getSelection();if(r&&r.type!=="None"){const o=[];for(let s=0;s<r.rangeCount;s+=1)o.push(r.getRangeAt(s));setTimeout(()=>{if(r.rangeCount===o.length){for(let s=0;s<r.rangeCount;s+=1){const i=o[s],a=r.getRangeAt(s);if(i.commonAncestorContainer!==a.commonAncestorContainer||i.startContainer!==a.startContainer||i.endContainer!==a.endContainer||i.startOffset!==a.startOffset||i.endOffset!==a.endOffset)return}r.removeAllRanges()}})}}}function ct(e,t,n,r){let o,s;const i=new Promise((c,f)=>{o=c,s=f});return i.catch(()=>{}),{navigation:{from:{params:e.params,route:{id:e.route?.id??null},url:e.url},to:n&&{params:t?.params??null,route:{id:t?.route?.id??null},url:n},willUnload:!t,type:r,complete:i},fulfil:o,reject:s}}function Te(e){return{data:e.data,error:e.error,form:e.form,params:e.params,route:e.route,state:e.state,status:e.status,url:e.url}}function fn(e){const t=new URL(e);return t.hash=decodeURIComponent(e.hash),t}export{_n as a,an as g,hn as l,P as s};
