import{s as R,c as z,d as m,u as G,g as O,a as J,i as T,b as h,e as v,h as K,f as y,j as b,k as w,l as N,m as $,n as Q,o as U,p as W,q as X,r as Y,t as Z}from"./CKfNpntD.js";import{S as ee,i as te,d as j,t as H,a as M,m as k,c as q,b as A}from"./C1sNicUe.js";import{H as ae,N as se,g as le}from"./I2HbobfB.js";import{F as ne}from"./fa6TxhnN.js";import{g as ie}from"./CIZhNd1z.js";function P(u){let t,l,a,p='<a href="/score-board"><i class="bi bi-house"></i></a>',c,s,d;return{c(){t=$("nav"),l=$("ol"),a=$("li"),a.innerHTML=p,c=N(),s=$("li"),d=Z(u[1]),this.h()},l(n){t=b(n,"NAV",{"aria-label":!0,class:!0});var f=w(t);l=b(f,"OL",{class:!0});var i=w(l);a=b(i,"LI",{class:!0,"aria-current":!0,"data-svelte-h":!0}),X(a)!=="svelte-1o0lgl5"&&(a.innerHTML=p),c=y(i),s=b(i,"LI",{class:!0});var r=w(s);d=Y(r,u[1]),r.forEach(m),i.forEach(m),f.forEach(m),this.h()},h(){v(a,"class","breadcrumb-item active"),v(a,"aria-current","page"),v(s,"class","breadcrumb-item"),v(l,"class","breadcrumb"),v(t,"aria-label","breadcrumb"),v(t,"class","d-print-none")},m(n,f){T(n,t,f),h(t,l),h(l,a),h(l,c),h(l,s),h(s,d)},p(n,f){f&2&&W(d,n[1])},d(n){n&&m(t)}}}function re(u){let t,l,a,p,c,s,d,n,f,i,r,L,V,E,I;document.title=t="RallyLog | "+u[1],a=new ae({}),n=new se({});let o=u[0]&&P(u);const S=u[5].default,_=z(S,u,u[4],null);return E=new ne({}),{c(){l=N(),A(a.$$.fragment),p=N(),c=$("main"),s=$("div"),d=$("div"),A(n.$$.fragment),f=N(),i=$("div"),o&&o.c(),r=N(),L=$("div"),_&&_.c(),V=N(),A(E.$$.fragment),this.h()},l(e){K("svelte-1q1zxjc",document.head).forEach(m),l=y(e),q(a.$$.fragment,e),p=y(e),c=b(e,"MAIN",{class:!0});var x=w(c);s=b(x,"DIV",{class:!0});var B=w(s);d=b(B,"DIV",{class:!0});var C=w(d);q(n.$$.fragment,C),C.forEach(m),f=y(B),i=b(B,"DIV",{class:!0});var D=w(i);o&&o.l(D),r=y(D),L=b(D,"DIV",{class:!0});var F=w(L);_&&_.l(F),F.forEach(m),D.forEach(m),B.forEach(m),x.forEach(m),V=y(e),q(E.$$.fragment,e),this.h()},h(){v(d,"class","col-xl-2 col-lg-2 d-none d-xl-flex d-lg-flex justify-content-end"),v(L,"class","d-flex flex-column gap-4"),v(i,"class","col-xl-10 col-lg-10 col-md-12 col-sm-12 d-flex flex-column mt-3"),v(s,"class","row"),v(c,"class","container")},m(e,g){T(e,l,g),k(a,e,g),T(e,p,g),T(e,c,g),h(c,s),h(s,d),k(n,d,null),h(s,f),h(s,i),o&&o.m(i,null),h(i,r),h(i,L),_&&_.m(L,null),T(e,V,g),k(E,e,g),I=!0},p(e,[g]){(!I||g&2)&&t!==(t="RallyLog | "+e[1])&&(document.title=t),e[0]?o?o.p(e,g):(o=P(e),o.c(),o.m(i,r)):o&&(o.d(1),o=null),_&&_.p&&(!I||g&16)&&G(_,S,e,e[4],I?J(S,e[4],g,null):O(e[4]),null)},i(e){I||(M(a.$$.fragment,e),M(n.$$.fragment,e),M(_,e),M(E.$$.fragment,e),I=!0)},o(e){H(a.$$.fragment,e),H(n.$$.fragment,e),H(_,e),H(E.$$.fragment,e),I=!1},d(e){e&&(m(l),m(p),m(c),m(V)),j(a,e),j(n),o&&o.d(),_&&_.d(e),j(E,e)}}}function oe(u,t,l){let a,{$$slots:p={},$$scope:c}=t;const{stores:{pageName:s},actions:{init:d}}=ie();Q(u,s,r=>l(1,a=r));const{actions:{init:n}}=le();let{pageTitle:f}=t,{showBreadcrumb:i=!0}=t;return s.set(f),U(async()=>{await d(),await n()}),u.$$set=r=>{"pageTitle"in r&&l(3,f=r.pageTitle),"showBreadcrumb"in r&&l(0,i=r.showBreadcrumb),"$$scope"in r&&l(4,c=r.$$scope)},[i,a,s,f,c,p]}class _e extends ee{constructor(t){super(),te(this,t,oe,re,R,{pageTitle:3,showBreadcrumb:0})}}export{_e as P};
