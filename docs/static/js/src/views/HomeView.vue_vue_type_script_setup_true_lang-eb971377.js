import{d as e,s as t,V as n,W as a,r as u,X as s,Y as o,Z as r,_ as l,$ as c,a0 as i,a1 as f,q as y,F as v,a2 as x,a as d,a3 as p,a4 as h,a5 as m,o as g,a6 as S,a7 as w}from"../../vendor-e415ac2b.js";import{u as k}from"../stores/config-dc142c46.js";import{u as J}from"../stores/temp-68e4ff78.js";const N=["data-x","data-y"],O=e({__name:"HomeView",setup(e){const{col:O,row:T,divSize:b,updateSpeed:q,enabledTransition:F}=t(k());let{isStart:X,isClean:Y}=t(J()),A=n([]);function E(e,t){return A.find((n=>n.x===e&&n.y===t))}function _(e,t,n=!E(e,t)){!!E(e,t)?n||A.splice(function(e,t){return A.findIndex((n=>n.x===e&&n.y===t))}(e,t),1):n&&A.push({x:e,y:t})}const{workerFn:j}=a((e=>{const t=JSON.parse(e);function*n(...e){if(1===e.length)for(const t of e[0])yield[t];else{const t=[],a=e[0][0];for(const u of n(...e.slice(1)))t.push(u),yield[a,...u];for(const n of e[0].slice(1))for(const e of t)yield[n,...e]}}function a(e,t,n){return u(t,n).map((({x:t,y:n})=>function(t,n){return e.find((e=>e.x===t&&e.y===n))}(t,n)))}function u(e,t){return[...n([-1,0,1],[-1,0,1])].filter((([e,t])=>0!==e||0!==t)).map((([n,a])=>({x:e+n,y:t+a})))}const s=[],o=[];var r;return t.forEach((({x:e,y:t})=>{[{x:e,y:t},...u(e,t)].forEach((e=>{o.push(e)}))})),(r=o,r.filter(((e,t,n)=>n.findIndex((t=>{return n=e,a=t,JSON.stringify(n)===JSON.stringify(a);var n,a}))===t))).forEach((({x:e,y:n})=>{const u=function(e,n){return t.find((t=>t.x===e&&t.y===n))}(e,n);switch(a(t,e,n).reduce(((e,t)=>e+ +!!t),0)){case 2:break;case 3:u||s.push({x:e,y:n});break;default:u&&s.push({x:e,y:n})}})),JSON.stringify(s)}));let z=u(null);function C(e,t){return Array(t-e).fill(e).map(((e,t)=>e+t))}s(X,(()=>{if(X.value){let e=performance.now();z.value=requestAnimationFrame((async function t(n){X.value&&(n-e>=q.value&&(e=n,JSON.parse(await j(JSON.stringify(A))).forEach((({x:e,y:t})=>{_(e,t)}))),requestAnimationFrame(t))}))}}));const D=o((()=>{let e=A.reduce(((e,t)=>t.y>e?t.y:e),T.value-1)+1;return C(A.reduce(((e,t)=>t.y<e?t.y:e),0),e)})),I=o((()=>{let e=A.reduce(((e,t)=>t.x>e?t.x:e),O.value-1)+1;return C(A.reduce(((e,t)=>t.x<e?t.x:e),0),e)}));s((()=>D.value[0]),(async(e,t)=>{let n=document.querySelector("main");n&&(await S(),n.scrollTop+=(b.value+8)*(t-e))})),s((()=>I.value[0]),((e,t)=>{let n=document.querySelector("main");n&&(n.scrollLeft+=(b.value+8)*(t-e))}));const V=u(!1),{x:H,y:L}=r({type:"client"}),{element:M}=l({x:H,y:L}),{pressed:W}=c(),{vibrate:Z}=i({pattern:[300,100,300]}),$=u(!1),B=u(!1);function G(e){B.value||$.value&&"mouse"===e.pointerType||(V.value=!0)}function K(e){return!(!e.dataset.x||!e.dataset.y)}function P(e){if(K(e)){return{x:+e.dataset.x,y:+e.dataset.y}}}function Q(e){if(e.target&&K(e.target)){const{x:t,y:n}=P(e.target);_(t,n)}}function R(e,t){const n=e.x-t.x,a=e.y-t.y;return Math.hypot(n,a)}s(V,(e=>{if(e&&M.value&&K(M.value)){let{x:e,y:t}=P(M.value);_(e,t),Z()}})),s(W,(()=>{$.value=V.value=!1})),s(M,(()=>{!W.value&&V.value||($.value=!0)})),s(M,(e=>{if(V.value&&e&&K(e)){let{x:t,y:n}=P(e);_(t,n)}})),s(Y,(()=>{Y&&(Y.value=!1,z.value&&(cancelAnimationFrame(z.value),z.value=null),A.length=0)}));let U={x:0,y:0},ee={x:0,y:0};function te(e){2===e.touches.length&&(B.value=!0,U={x:e.touches[0].clientX,y:e.touches[0].clientY},ee={x:e.touches[1].clientX,y:e.touches[1].clientY})}function ne(e){if(2===e.touches.length){e.preventDefault();let t=(R({x:e.touches[0].clientX,y:e.touches[0].clientY},{x:e.touches[1].clientX,y:e.touches[1].clientY})-R(U,ee))/200;b.value+=t,b.value<1&&(b.value=1)}else V.value&&e.preventDefault()}return(e,t)=>{const n=w;return f((g(),y("div",{class:p(["container",{transition:d(F),zoom:d(B)}]),style:h({"--columns":d(I).length,"--size":d(b)+"px"}),onContextmenu:t[0]||(t[0]=m((()=>{}),["prevent"])),onClick:Q,onTouchstart:te,onTouchmove:ne,onTouchend:t[1]||(t[1]=e=>B.value=!1)},[(g(!0),y(v,null,x(d(D),(e=>(g(),y(v,{key:e},[(g(!0),y(v,null,x(d(I),(t=>(g(),y("div",{key:t,"data-x":t,"data-y":e,class:p({true:E(t,e)})},null,10,N)))),128))],64)))),128))],38)),[[n,G]])}}});export{O as _};
