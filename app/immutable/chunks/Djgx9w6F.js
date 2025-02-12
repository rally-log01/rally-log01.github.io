import{d as S,w as f}from"./Bj3Ywu8e.js";import{A as I}from"./CFPkIEmq.js";var n=(e=>(e.UnAuthenticated="un-authenticated",e.Authenticated="authenticated",e.Admin="admin",e.Root="root",e))(n||{});const l={username:"User",role:n.UnAuthenticated},b={username:"Admin",role:n.Admin},y={username:"Root",role:n.Root},O=[{label:"Home",url:"/home",roles:[n.UnAuthenticated,n.Authenticated,n.Admin,n.Root],index:1}];function w(e){const i=Object.prototype.toString.call(e);return e instanceof Date||typeof e=="object"&&i==="[object Date]"?new e.constructor(+e):typeof e=="number"||i==="[object Number]"||typeof e=="string"||i==="[object String]"?new Date(e):new Date(NaN)}function k(e){return w(e).getDay()===0}const j=()=>{const{stores:{currentUser:e},actions:{init:i}}=T();i();const s=I(e);let t=[];t=[...t,...O];const m=(o,a)=>o&&o.find(d=>d.role===a)?.sundayOnly?k(new Date):!0;return t.filter(o=>{const a=s.role,g=!!o.roles.find(A=>A===a),d=m(o.visibilities,a);return g&&d}).sort((o,a)=>o.index-a.index)};async function p(e){function i(o){return Array.from(new Uint8Array(o)).map(a=>a.toString(16).padStart(2,"0")).join("")}const t=new TextEncoder().encode(e),m=await crypto.subtle.digest("SHA-256",t);return i(m)}let u=null;const N=()=>{const e=f(!1),i=f("Home"),s=f(!1),t=f(l),m=S([t],([r])=>r.role===n.Admin||r.role===n.Root),o=S([t],([r])=>r.role===n.Admin),a=S([t],([r])=>r.role===n.Root);return u={stores:{darkTheme:e,pageName:i,authenticated:s,currentUser:t,currentUserIsAdmin:o,currentUserIsRoot:a,currentUserIsRootOrAdmin:m},actions:{init:()=>{const r=localStorage.getItem("theme"),c=r??"light";e.set(r==="dark"),document.documentElement.setAttribute("data-bs-theme",c),localStorage.setItem("theme",c);const U=localStorage.getItem("currentUser"),h=U?JSON.parse(U):l;switch(t.set(h),localStorage.setItem("currentUser",JSON.stringify(h)),h.username){case b.username:case y.username:s.set(!0);break;case l.username:default:s.set(!1)}},toggleTheme:()=>{const r=localStorage.getItem("theme");let c="light";r==="light"&&(c="dark"),e.set(c==="dark"),document.documentElement.setAttribute("data-bs-theme",c),localStorage.setItem("theme",c)},login:async(r,c)=>r.toLowerCase().trim()==="admin"&&await p(c)==="6a176086ec9c443fe159921a29c549a731faa9b1c368adbc550b3bc036256af0"?(t.set(b),s.set(!0),localStorage.setItem("currentUser",JSON.stringify(b)),!0):r.toLowerCase()==="root"&&await p(c)==="6a176086ec9c443fe159921a29c549a731faa9b1c368adbc550b3bc036256af0"?(t.set(y),s.set(!0),localStorage.setItem("currentUser",JSON.stringify(y)),!0):(localStorage.setItem("currentUser",JSON.stringify(l)),t.set(l),s.set(!1),!1),logout:()=>{s.set(!1),localStorage.setItem("currentUser",JSON.stringify(l)),t.set(l)}}},u},T=()=>u?.stores&&Object.keys(u.stores).length>0&&u?.actions&&Object.keys(u.actions).length>0?u:N();export{n as U,j as a,T as g};
