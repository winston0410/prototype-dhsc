import{S as L,i as O,s as Q,e as N,t as y,k as u,j as _,c as W,a as q,g as I,d as p,n as c,m as v,f as o,F as A,o as b,x as g,u as w,v as k,P as R,A as T,b as J,G as K}from"../../chunks/vendor-b5be5de1.js";import{e as U,v as V}from"../../chunks/form-d19572ac.js";import{S as z}from"../../chunks/Separator-8a247c32.js";import{I as D}from"../../chunks/InputField-a269cf95.js";import{B as X}from"../../chunks/Button-0ea7efc6.js";import"../../chunks/singletons-12a22614.js";/* empty css                                                            *//* empty css                                                        */function Y(i){let n;return{c(){n=y("Contact name")},l(s){n=I(s,"Contact name")},m(s,m){o(s,n,m)},d(s){s&&p(n)}}}function Z(i){let n,s,m,f,$,l;return $=new z({props:{size:20}}),{c(){n=y(`Contact email
	`),s=N("p"),m=y("Where we can send confirmation and updates as the report progresses"),f=u(),_($.$$.fragment),this.h()},l(t){n=I(t,`Contact email
	`),s=W(t,"P",{class:!0});var a=q(s);m=I(a,"Where we can send confirmation and updates as the report progresses"),a.forEach(p),f=c(t),v($.$$.fragment,t),this.h()},h(){J(s,"class","govuk__remarks svelte-i60bxg")},m(t,a){o(t,n,a),o(t,s,a),A(s,m),o(t,f,a),b($,t,a),l=!0},p:K,i(t){l||(g($.$$.fragment,t),l=!0)},o(t){w($.$$.fragment,t),l=!1},d(t){t&&p(n),t&&p(s),t&&p(f),k($,t)}}}function ee(i){let n,s,m,f,$,l;return $=new z({props:{size:20}}),{c(){n=y(`Phone number
	`),s=N("p"),m=y("If we need to get in touch for more information, include extension number"),f=u(),_($.$$.fragment),this.h()},l(t){n=I(t,`Phone number
	`),s=W(t,"P",{class:!0});var a=q(s);m=I(a,"If we need to get in touch for more information, include extension number"),a.forEach(p),f=c(t),v($.$$.fragment,t),this.h()},h(){J(s,"class","govuk__remarks svelte-i60bxg")},m(t,a){o(t,n,a),o(t,s,a),A(s,m),o(t,f,a),b($,t,a),l=!0},p:K,i(t){l||(g($.$$.fragment,t),l=!0)},o(t){w($.$$.fragment,t),l=!1},d(t){t&&p(n),t&&p(s),t&&p(f),k($,t)}}}function te(i){let n;return{c(){n=y("Next")},l(s){n=I(s,"Next")},m(s,m){o(s,n,m)},d(s){s&&p(n)}}}function se(i){let n,s,m,f,$,l,t,a,F,C,P,d,S,h,x,j,B;return f=new D({props:{name:"name",type:"text",$$slots:{default:[Y]},$$scope:{ctx:i}}}),l=new z({props:{size:30}}),a=new D({props:{name:"email",type:"email",$$slots:{default:[Z]},$$scope:{ctx:i}}}),C=new z({props:{size:30}}),d=new D({props:{name:"phone",type:"tel",$$slots:{default:[ee]},$$scope:{ctx:i}}}),h=new z({props:{size:30}}),j=new X({props:{href:"./fault-report-summary",disabled:i[0].name!==""||i[0].email!==""||i[0].phone!=="",$$slots:{default:[te]},$$scope:{ctx:i}}}),{c(){n=N("h1"),s=y("Contact details"),m=u(),_(f.$$.fragment),$=u(),_(l.$$.fragment),t=u(),_(a.$$.fragment),F=u(),_(C.$$.fragment),P=u(),_(d.$$.fragment),S=u(),_(h.$$.fragment),x=u(),_(j.$$.fragment)},l(e){n=W(e,"H1",{});var r=q(n);s=I(r,"Contact details"),r.forEach(p),m=c(e),v(f.$$.fragment,e),$=c(e),v(l.$$.fragment,e),t=c(e),v(a.$$.fragment,e),F=c(e),v(C.$$.fragment,e),P=c(e),v(d.$$.fragment,e),S=c(e),v(h.$$.fragment,e),x=c(e),v(j.$$.fragment,e)},m(e,r){o(e,n,r),A(n,s),o(e,m,r),b(f,e,r),o(e,$,r),b(l,e,r),o(e,t,r),b(a,e,r),o(e,F,r),b(C,e,r),o(e,P,r),b(d,e,r),o(e,S,r),b(h,e,r),o(e,x,r),b(j,e,r),B=!0},p(e,[r]){const G={};r&2&&(G.$$scope={dirty:r,ctx:e}),f.$set(G);const H={};r&2&&(H.$$scope={dirty:r,ctx:e}),a.$set(H);const M={};r&2&&(M.$$scope={dirty:r,ctx:e}),d.$set(M);const E={};r&1&&(E.disabled=e[0].name!==""||e[0].email!==""||e[0].phone!==""),r&2&&(E.$$scope={dirty:r,ctx:e}),j.$set(E)},i(e){B||(g(f.$$.fragment,e),g(l.$$.fragment,e),g(a.$$.fragment,e),g(C.$$.fragment,e),g(d.$$.fragment,e),g(h.$$.fragment,e),g(j.$$.fragment,e),B=!0)},o(e){w(f.$$.fragment,e),w(l.$$.fragment,e),w(a.$$.fragment,e),w(C.$$.fragment,e),w(d.$$.fragment,e),w(h.$$.fragment,e),w(j.$$.fragment,e),B=!1},d(e){e&&p(n),e&&p(m),k(f,e),e&&p($),k(l,e),e&&p(t),k(a,e),e&&p(F),k(C,e),e&&p(P),k(d,e),e&&p(S),k(h,e),e&&p(x),k(j,e)}}}function ne(i,n,s){let m;return R(i,U,f=>s(0,m=f)),T(async()=>{await V(["name","email","phone"])}),[m]}class ie extends L{constructor(n){super();O(this,n,ne,se,Q,{})}}export{ie as default};
