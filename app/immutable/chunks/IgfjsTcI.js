import{s as V,v as I,d as g,i as C,O as N,n as H,F as Z,b as p,e as $,j as v,k as S,q as A,f as b,m as y,l as w,p as F,r as q,t as R,o as le}from"./BwOIbrFS.js";import{S as j,i as T,t as x,a as k,g as ee,e as te,d as M,m as E,c as D,b as L}from"./CIEn127l.js";import{g as U,e as B}from"./-hpW7dp1.js";import{S as se}from"./sLfV-lac.js";function O(i,e,l){const t=i.slice();return t[2]=e[l],t}function z(i){let e,l,t="Recent Players",n,c,u,d,h='<div class="d-flex justify-content-end"><a class="btn btn-primary" href="/players">More</a></div>',m=B(i[0]),a=[];for(let s=0;s<m.length;s+=1)a[s]=J(O(i,m,s));return{c(){e=y("div"),l=y("div"),l.textContent=t,n=w(),c=y("ul");for(let s=0;s<a.length;s+=1)a[s].c();u=w(),d=y("div"),d.innerHTML=h,this.h()},l(s){e=v(s,"DIV",{class:!0});var _=S(e);l=v(_,"DIV",{class:!0,"data-svelte-h":!0}),A(l)!=="svelte-1nj2k76"&&(l.textContent=t),n=b(_),c=v(_,"UL",{class:!0});var r=S(c);for(let o=0;o<a.length;o+=1)a[o].l(r);r.forEach(g),u=b(_),d=v(_,"DIV",{class:!0,"data-svelte-h":!0}),A(d)!=="svelte-bnhc5h"&&(d.innerHTML=h),_.forEach(g),this.h()},h(){$(l,"class","card-header"),$(c,"class","list-group list-group-flush"),$(d,"class","card-body"),$(e,"class","card")},m(s,_){C(s,e,_),p(e,l),p(e,n),p(e,c);for(let r=0;r<a.length;r+=1)a[r]&&a[r].m(c,null);p(e,u),p(e,d)},p(s,_){if(_&1){m=B(s[0]);let r;for(r=0;r<m.length;r+=1){const o=O(s,m,r);a[r]?a[r].p(o,_):(a[r]=J(o),a[r].c(),a[r].m(c,null))}for(;r<a.length;r+=1)a[r].d(1);a.length=m.length}},d(s){s&&g(e),Z(a,s)}}}function J(i){let e,l,t=i[2].name+"",n,c,u,d=i[2].country+"",h,m;return{c(){e=y("li"),l=y("span"),n=R(t),c=w(),u=y("span"),h=R(d),m=w(),this.h()},l(a){e=v(a,"LI",{class:!0});var s=S(e);l=v(s,"SPAN",{class:!0});var _=S(l);n=q(_,t),_.forEach(g),c=b(s),u=v(s,"SPAN",{class:!0});var r=S(u);h=q(r,d),r.forEach(g),m=b(s),s.forEach(g),this.h()},h(){$(l,"class","fw-bold"),$(u,"class","fw-light"),$(e,"class","list-group-item")},m(a,s){C(a,e,s),p(e,l),p(l,n),p(e,c),p(e,u),p(u,h),p(e,m)},p(a,s){s&1&&t!==(t=a[2].name+"")&&F(n,t),s&1&&d!==(d=a[2].country+"")&&F(h,d)},d(a){a&&g(e)}}}function ne(i){let e,l=i[0]?.length&&z(i);return{c(){l&&l.c(),e=N()},l(t){l&&l.l(t),e=N()},m(t,n){l&&l.m(t,n),C(t,e,n)},p(t,[n]){t[0]?.length?l?l.p(t,n):(l=z(t),l.c(),l.m(e.parentNode,e)):l&&(l.d(1),l=null)},i:I,o:I,d(t){t&&g(e),l&&l.d(t)}}}function ae(i,e,l){let t;const{stores:{players:n}}=U();return H(i,n,c=>l(0,t=c)),[t,n]}let re=class extends j{constructor(e){super(),T(this,e,ae,ne,V,{})}};function K(i){let e,l;return{c(){e=y("span"),l=R(i[1]),this.h()},l(t){e=v(t,"SPAN",{class:!0});var n=S(e);l=q(n,i[1]),n.forEach(g),this.h()},h(){$(e,"class","fw-light")},m(t,n){C(t,e,n),p(e,l)},p(t,n){n&2&&F(l,t[1])},d(t){t&&g(e)}}}function ie(i){let e,l=i[0]&&K(i);return{c(){l&&l.c(),e=N()},l(t){l&&l.l(t),e=N()},m(t,n){l&&l.m(t,n),C(t,e,n)},p(t,[n]){t[0]?l?l.p(t,n):(l=K(t),l.c(),l.m(e.parentNode,e)):l&&(l.d(1),l=null)},i:I,o:I,d(t){t&&g(e),l&&l.d(t)}}}function ce(i,e,l){let{id:t}=e;const{actions:{getPlayerById:n}}=U();let c="",u="0",d=!1;return i.$$set=h=>{"id"in h&&l(0,t=h.id)},i.$$.update=()=>{i.$$.dirty&13&&t&&t!==u&&!d&&(l(3,d=!0),n(t).then(h=>{l(1,c=h?.name)}).finally(()=>{l(2,u=t),l(3,d=!1)}))},[t,c,u,d]}class Q extends j{constructor(e){super(),T(this,e,ce,ie,V,{id:0})}}function W(i,e,l){const t=i.slice();return t[2]=e[l],t}function X(i){let e,l,t="Recent Matches",n,c,u,d,h='<div class="d-flex justify-content-between"><a class="btn btn-primary" href="/score-board">New Match</a> <a class="btn btn-primary" href="/matches">More</a></div>',m,a=B(i[0]),s=[];for(let r=0;r<a.length;r+=1)s[r]=Y(W(i,a,r));const _=r=>x(s[r],1,1,()=>{s[r]=null});return{c(){e=y("div"),l=y("div"),l.textContent=t,n=w(),c=y("ul");for(let r=0;r<s.length;r+=1)s[r].c();u=w(),d=y("div"),d.innerHTML=h,this.h()},l(r){e=v(r,"DIV",{class:!0});var o=S(e);l=v(o,"DIV",{class:!0,"data-svelte-h":!0}),A(l)!=="svelte-caqbdb"&&(l.textContent=t),n=b(o),c=v(o,"UL",{class:!0});var f=S(c);for(let P=0;P<s.length;P+=1)s[P].l(f);f.forEach(g),u=b(o),d=v(o,"DIV",{class:!0,"data-svelte-h":!0}),A(d)!=="svelte-1b9od0b"&&(d.innerHTML=h),o.forEach(g),this.h()},h(){$(l,"class","card-header"),$(c,"class","list-group list-group-flush"),$(d,"class","card-body"),$(e,"class","card")},m(r,o){C(r,e,o),p(e,l),p(e,n),p(e,c);for(let f=0;f<s.length;f+=1)s[f]&&s[f].m(c,null);p(e,u),p(e,d),m=!0},p(r,o){if(o&1){a=B(r[0]);let f;for(f=0;f<a.length;f+=1){const P=W(r,a,f);s[f]?(s[f].p(P,o),k(s[f],1)):(s[f]=Y(P),s[f].c(),k(s[f],1),s[f].m(c,null))}for(ee(),f=a.length;f<s.length;f+=1)_(f);te()}},i(r){if(!m){for(let o=0;o<a.length;o+=1)k(s[o]);m=!0}},o(r){s=s.filter(Boolean);for(let o=0;o<s.length;o+=1)x(s[o]);m=!1},d(r){r&&g(e),Z(s,r)}}}function Y(i){let e,l,t=i[2].tournament+"",n,c,u,d,h,m="vs",a,s,_,r;return u=new Q({props:{id:i[2].player1_id}}),s=new Q({props:{id:i[2].player2_id}}),{c(){e=y("li"),l=y("span"),n=R(t),c=w(),L(u.$$.fragment),d=w(),h=y("span"),h.textContent=m,a=w(),L(s.$$.fragment),_=w(),this.h()},l(o){e=v(o,"LI",{class:!0});var f=S(e);l=v(f,"SPAN",{class:!0});var P=S(l);n=q(P,t),P.forEach(g),c=b(f),D(u.$$.fragment,f),d=b(f),h=v(f,"SPAN",{class:!0,"data-svelte-h":!0}),A(h)!=="svelte-6mux3n"&&(h.textContent=m),a=b(f),D(s.$$.fragment,f),_=b(f),f.forEach(g),this.h()},h(){$(l,"class","d-block fw-bold"),$(h,"class","fw-bold"),$(e,"class","list-group-item")},m(o,f){C(o,e,f),p(e,l),p(l,n),p(e,c),E(u,e,null),p(e,d),p(e,h),p(e,a),E(s,e,null),p(e,_),r=!0},p(o,f){(!r||f&1)&&t!==(t=o[2].tournament+"")&&F(n,t);const P={};f&1&&(P.id=o[2].player1_id),u.$set(P);const G={};f&1&&(G.id=o[2].player2_id),s.$set(G)},i(o){r||(k(u.$$.fragment,o),k(s.$$.fragment,o),r=!0)},o(o){x(u.$$.fragment,o),x(s.$$.fragment,o),r=!1},d(o){o&&g(e),M(u),M(s)}}}function oe(i){let e,l,t=i[0]?.length&&X(i);return{c(){t&&t.c(),e=N()},l(n){t&&t.l(n),e=N()},m(n,c){t&&t.m(n,c),C(n,e,c),l=!0},p(n,[c]){n[0]?.length?t?(t.p(n,c),c&1&&k(t,1)):(t=X(n),t.c(),k(t,1),t.m(e.parentNode,e)):t&&(ee(),x(t,1,1,()=>{t=null}),te())},i(n){l||(k(t),l=!0)},o(n){x(t),l=!1},d(n){n&&g(e),t&&t.d(n)}}}function fe(i,e,l){let t;const{stores:{matches:n}}=U();return H(i,n,c=>l(0,t=c)),[t,n]}let ue=class extends j{constructor(e){super(),T(this,e,fe,oe,V,{})}};function de(i){let e,l='<div class="card-header">Recent Statistics</div> <ul class="list-group list-group-flush"><li class="list-group-item"><div class="d-flex justify-content-between"><span class="fw-light">First Serve Accuracy:</span> <span class="fw-bold">30%</span></div></li> <li class="list-group-item"><div class="d-flex justify-content-between"><span class="fw-light">Second Serve Accuracy:</span> <span class="fw-bold">30%</span></div></li></ul> <div class="card-body"><div class="d-flex justify-content-end"><a class="btn btn-primary" href="/stats">More</a></div></div>';return{c(){e=y("div"),e.innerHTML=l,this.h()},l(t){e=v(t,"DIV",{class:!0,"data-svelte-h":!0}),A(e)!=="svelte-4l9dv3"&&(e.innerHTML=l),this.h()},h(){$(e,"class","card")},m(t,n){C(t,e,n)},p:I,i:I,o:I,d(t){t&&g(e)}}}class he extends j{constructor(e){super(),T(this,e,null,de,V,{})}}function pe(i){let e,l;return e=new se({props:{options:i[0],value:i[1],disabled:!1,helperText:""}}),{c(){L(e.$$.fragment)},l(t){D(e.$$.fragment,t)},m(t,n){E(e,t,n),l=!0},p(t,[n]){const c={};n&1&&(c.options=t[0]),n&2&&(c.value=t[1]),e.$set(c)},i(t){l||(k(e.$$.fragment,t),l=!0)},o(t){x(e.$$.fragment,t),l=!1},d(t){M(e,t)}}}function me(i,e,l){let t,n;const{stores:{currentPlayer:c,players:u},actions:{init:d}}=U();H(i,c,s=>l(5,t=s)),H(i,u,s=>l(4,n=s));let h=[],m="0";const a={key:"All Players",value:"0"};return le(async()=>{await d(),l(1,m=t?.id??"")}),i.$$.update=()=>{i.$$.dirty&16&&l(0,h=n?.length?[a,...n.map(s=>({key:s.name,value:s.id}))]:[a])},[h,m,c,u,n]}class ge extends j{constructor(e){super(),T(this,e,me,pe,V,{})}}function _e(i){let e,l,t,n,c,u,d,h,m;return l=new ue({}),n=new ge({}),u=new he({}),h=new re({}),{c(){e=y("div"),L(l.$$.fragment),t=w(),L(n.$$.fragment),c=w(),L(u.$$.fragment),d=w(),L(h.$$.fragment),this.h()},l(a){e=v(a,"DIV",{class:!0});var s=S(e);D(l.$$.fragment,s),t=b(s),D(n.$$.fragment,s),c=b(s),D(u.$$.fragment,s),d=b(s),D(h.$$.fragment,s),s.forEach(g),this.h()},h(){$(e,"class","d-flex flex-column gap-4")},m(a,s){C(a,e,s),E(l,e,null),p(e,t),E(n,e,null),p(e,c),E(u,e,null),p(e,d),E(h,e,null),m=!0},p:I,i(a){m||(k(l.$$.fragment,a),k(n.$$.fragment,a),k(u.$$.fragment,a),k(h.$$.fragment,a),m=!0)},o(a){x(l.$$.fragment,a),x(n.$$.fragment,a),x(u.$$.fragment,a),x(h.$$.fragment,a),m=!1},d(a){a&&g(e),M(l),M(n),M(u),M(h)}}}class Pe extends j{constructor(e){super(),T(this,e,null,_e,V,{})}}export{Pe as D};
