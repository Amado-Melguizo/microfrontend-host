(()=>{"use strict";var a,B={},F={};function e(a){var c=F[a];if(void 0!==c)return c.exports;var l=F[a]={exports:{}};return B[a](l,l.exports,e),l.exports}e.m=B,e.c=F,a=[],e.O=(c,l,d,h)=>{if(!l){var s=1/0;for(v=0;v<a.length;v++){for(var[l,d,h]=a[v],_=!0,g=0;g<l.length;g++)(!1&h||s>=h)&&Object.keys(e.O).every(S=>e.O[S](l[g]))?l.splice(g--,1):(_=!1,h<s&&(s=h));if(_){a.splice(v--,1);var y=d();void 0!==y&&(c=y)}}return c}h=h||0;for(var v=a.length;v>0&&a[v-1][2]>h;v--)a[v]=a[v-1];a[v]=[l,d,h]},e.d=(a,c)=>{for(var l in c)e.o(c,l)&&!e.o(a,l)&&Object.defineProperty(a,l,{enumerable:!0,get:c[l]})},e.f={},e.e=a=>Promise.all(Object.keys(e.f).reduce((c,l)=>(e.f[l](a,c),c),[])),e.u=a=>a+"."+{123:"9f20b8a56fca1b63",203:"f7f84e551a991cea",439:"a1fe7b315dd993fb",541:"39ba02b80030e7f9",584:"b287cc2e09b57017",922:"ad180f60f776dda4"}[a]+".js",e.miniCssF=a=>{},e.o=(a,c)=>Object.prototype.hasOwnProperty.call(a,c),(()=>{var a={},c="microfrontend-host:";e.l=(l,d,h,v)=>{if(a[l])a[l].push(d);else{var s,_;if(void 0!==h)for(var g=document.getElementsByTagName("script"),y=0;y<g.length;y++){var m=g[y];if(m.getAttribute("src")==l||m.getAttribute("data-webpack")==c+h){s=m;break}}s||(_=!0,(s=document.createElement("script")).type="module",s.charset="utf-8",s.timeout=120,e.nc&&s.setAttribute("nonce",e.nc),s.setAttribute("data-webpack",c+h),s.src=e.tu(l)),a[l]=[d];var w=(E,S)=>{s.onerror=s.onload=null,clearTimeout(p);var O=a[l];if(delete a[l],s.parentNode&&s.parentNode.removeChild(s),O&&O.forEach(b=>b(S)),E)return E(S)},p=setTimeout(w.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=w.bind(null,s.onerror),s.onload=w.bind(null,s.onload),_&&document.head.appendChild(s)}}})(),e.r=a=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(a,"__esModule",{value:!0})},(()=>{var a={},c={};e.f.remotes=(l,d)=>{e.o(a,l)&&a[l].forEach(h=>{var v=e.R;v||(v=[]);var s=c[h];if(!(v.indexOf(s)>=0)){if(v.push(s),s.p)return d.push(s.p);var _=p=>{p||(p=new Error("Container missing")),"string"==typeof p.message&&(p.message+='\nwhile loading "'+s[1]+'" from '+s[2]),e.m[h]=()=>{throw p},s.p=0},g=(p,E,S,O,b,U)=>{try{var P=p(E,S);if(!P||!P.then)return b(P,O,U);var $=P.then(C=>b(C,O),_);if(!U)return $;d.push(s.p=$)}catch(C){_(C)}},m=(p,E,S)=>g(E.get,s[1],v,0,w,S),w=p=>{s.p=1,e.m[h]=E=>{E.exports=p()}};g(e,s[2],0,0,(p,E,S)=>p?g(e.I,s[0],0,p,m,S):_(),1)}})}})(),(()=>{e.S={};var a={},c={};e.I=(l,d)=>{d||(d=[]);var h=c[l];if(h||(h=c[l]={}),!(d.indexOf(h)>=0)){if(d.push(h),a[l])return a[l];e.o(e.S,l)||(e.S[l]={});var v=e.S[l],_="microfrontend-host",g=(w,p,E,S)=>{var O=v[w]=v[w]||{},b=O[p];(!b||!b.loaded&&(!S!=!b.eager?S:_>b.from))&&(O[p]={get:E,from:_,eager:!!S})},m=[];return"default"===l&&(g("@angular/common","17.3.12",()=>e.e(584).then(()=>()=>e(584))),g("@angular/core","17.3.12",()=>e.e(123).then(()=>()=>e(123))),g("@angular/router","17.3.12",()=>e.e(922).then(()=>()=>e(922)))),a[l]=m.length?Promise.all(m).then(()=>a[l]=1):1}}})(),(()=>{var a;e.tt=()=>(void 0===a&&(a={createScriptURL:c=>c},typeof trustedTypes<"u"&&trustedTypes.createPolicy&&(a=trustedTypes.createPolicy("angular#bundler",a))),a)})(),e.tu=a=>e.tt().createScriptURL(a),e.p="",(()=>{var a=t=>{var n=i=>i.split(".").map(u=>+u==u?+u:u),r=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(t),f=r[1]?n(r[1]):[];return r[2]&&(f.length++,f.push.apply(f,n(r[2]))),r[3]&&(f.push([]),f.push.apply(f,n(r[3]))),f},l=t=>{var n=t[0],r="";if(1===t.length)return"*";if(n+.5){r+=0==n?">=":-1==n?"<":1==n?"^":2==n?"~":n>0?"=":"!=";for(var f=1,i=1;i<t.length;i++)f--,r+="u"==(typeof(o=t[i]))[0]?"-":(f>0?".":"")+(f=2,o);return r}var u=[];for(i=1;i<t.length;i++){var o=t[i];u.push(0===o?"not("+x()+")":1===o?"("+x()+" || "+x()+")":2===o?u.pop()+" "+u.pop():l(o))}return x();function x(){return u.pop().replace(/^\((.+)\)$/,"$1")}},d=(t,n)=>{if(0 in t){n=a(n);var r=t[0],f=r<0;f&&(r=-r-1);for(var i=0,u=1,o=!0;;u++,i++){var x,A,j=u<t.length?(typeof t[u])[0]:"";if(i>=n.length||"o"==(A=(typeof(x=n[i]))[0]))return!o||("u"==j?u>r&&!f:""==j!=f);if("u"==A){if(!o||"u"!=j)return!1}else if(o)if(j==A)if(u<=r){if(x!=t[u])return!1}else{if(f?x>t[u]:x<t[u])return!1;x!=t[u]&&(o=!1)}else if("s"!=j&&"n"!=j){if(f||u<=r)return!1;o=!1,u--}else{if(u<=r||A<j!=f)return!1;o=!1}else"s"!=j&&"n"!=j&&(o=!1,u--)}}var z=[],M=z.pop.bind(z);for(i=1;i<t.length;i++){var L=t[i];z.push(1==L?M()|M():2==L?M()&M():L?d(L,n):!M())}return!!M()},y=(t,n,r)=>{var f=r?(t=>Object.keys(t).reduce((n,r)=>(t[r].eager&&(n[r]=t[r]),n),{}))(t[n]):t[n];return Object.keys(f).reduce((i,u)=>!i||!f[i].loaded&&((t,n)=>{t=a(t),n=a(n);for(var r=0;;){if(r>=t.length)return r<n.length&&"u"!=(typeof n[r])[0];var f=t[r],i=(typeof f)[0];if(r>=n.length)return"u"==i;var u=n[r],o=(typeof u)[0];if(i!=o)return"o"==i&&"n"==o||"s"==o||"u"==i;if("o"!=i&&"u"!=i&&f!=u)return f<u;r++}})(i,u)?u:i,0)},p=t=>{throw new Error(t)},V=(t=>function(n,r,f,i,u){var o=e.I(n);return o&&o.then&&!f?o.then(t.bind(t,n,e.S[n],r,!1,i,u)):t(n,e.S[n],r,f,i,u)})((t,n,r,f,i,u)=>{if(!((t,n)=>t&&e.o(t,n))(n,r))return((t,n,r)=>r?r():((t,n)=>p("Shared module "+n+" doesn't exist in shared scope "+t))(t,n))(t,r,u);var o=y(n,r,f);return d(i,o)||p(((t,n,r,f)=>"Unsatisfied version "+r+" from "+(r&&t[n][r].from)+" of shared singleton module "+n+" (required "+l(f)+")")(n,r,o,i)),(t=>(t.loaded=1,t.get()))(n[r][o])}),T={},H={131:()=>V("default","@angular/core",!1,[4,17,3,12],()=>e.e(123).then(()=>()=>e(123))),199:()=>V("default","@angular/router",!1,[1,17,1,0],()=>e.e(541).then(()=>()=>e(922))),297:()=>V("default","@angular/common",!1,[4,17,3,12],()=>e.e(203).then(()=>()=>e(584))),661:()=>V("default","@angular/core",!1,[1,17,1,0],()=>e.e(123).then(()=>()=>e(123)))},D={439:[131,199,297,661],584:[131],922:[131,297]},G={};e.f.consumes=(t,n)=>{e.o(D,t)&&D[t].forEach(r=>{if(e.o(T,r))return n.push(T[r]);if(!G[r]){var f=o=>{T[r]=0,e.m[r]=x=>{delete e.c[r],x.exports=o()}};G[r]=!0;var i=o=>{delete T[r],e.m[r]=x=>{throw delete e.c[r],o}};try{var u=H[r]();u.then?n.push(T[r]=u.then(f).catch(i)):f(u)}catch(o){i(o)}}})}})(),(()=>{var a={121:0};e.f.j=(d,h)=>{var v=e.o(a,d)?a[d]:void 0;if(0!==v)if(v)h.push(v[2]);else if(121!=d){var s=new Promise((m,w)=>v=a[d]=[m,w]);h.push(v[2]=s);var _=e.p+e.u(d),g=new Error;e.l(_,m=>{if(e.o(a,d)&&(0!==(v=a[d])&&(a[d]=void 0),v)){var w=m&&("load"===m.type?"missing":m.type),p=m&&m.target&&m.target.src;g.message="Loading chunk "+d+" failed.\n("+w+": "+p+")",g.name="ChunkLoadError",g.type=w,g.request=p,v[1](g)}},"chunk-"+d,d)}else a[d]=0},e.O.j=d=>0===a[d];var c=(d,h)=>{var g,y,[v,s,_]=h,m=0;if(v.some(p=>0!==a[p])){for(g in s)e.o(s,g)&&(e.m[g]=s[g]);if(_)var w=_(e)}for(d&&d(h);m<v.length;m++)e.o(a,y=v[m])&&a[y]&&a[y][0](),a[y]=0;return e.O(w)},l=self.webpackChunkmicrofrontend_host=self.webpackChunkmicrofrontend_host||[];l.forEach(c.bind(null,0)),l.push=c.bind(null,l.push.bind(l))})()})();