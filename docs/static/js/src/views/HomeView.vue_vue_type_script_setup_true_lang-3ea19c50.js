import{d as e,s as t,W as a,X as n,r as u,Y as l,Z as s,_ as o,$ as r,a0 as c,a1 as i,a2 as y,t as f,a as v,F as x,a3 as d,a4 as p,a5 as m,a6 as h,o as g,a7 as S,a8 as k}from"../../vendor-d428b540.js";import{u as w}from"../stores/config-4023621f.js";import{u as T}from"../stores/temp-a39b8907.js";const F=["data-x","data-y"],J=["data-x","data-y"],N=e({__name:"HomeView",setup(e){const{col:N,row:O,divSize:b,updateSpeed:A,enabledTransition:X}=t(w());let{isStart:Y,isClean:q}=t(T()),E=a([]);function _(e,t){return E.find((a=>a.x===e&&a.y===t))}function j(e,t,a=!_(e,t)){!!_(e,t)?a||E.splice(function(e,t){return E.findIndex((a=>a.x===e&&a.y===t))}(e,t),1):a&&E.push({x:e,y:t})}const{workerFn:z}=n((e=>{const t=JSON.parse(e);function*a(...e){if(1===e.length)for(const t of e[0])yield[t];else{const t=[],n=e[0][0];for(const u of a(...e.slice(1)))t.push(u),yield[n,...u];for(const a of e[0].slice(1))for(const e of t)yield[a,...e]}}function n(e,t,a){return u(t,a).map((({x:t,y:a})=>function(t,a){return e.find((e=>e.x===t&&e.y===a))}(t,a)))}function u(e,t){return[...a([-1,0,1],[-1,0,1])].filter((([e,t])=>0!==e||0!==t)).map((([a,n])=>({x:e+a,y:t+n})))}const l=[],s=[];var o;return t.forEach((({x:e,y:t})=>{[{x:e,y:t},...u(e,t)].forEach((e=>{s.push(e)}))})),(o=s,o.filter(((e,t,a)=>a.findIndex((t=>{return a=e,n=t,JSON.stringify(a)===JSON.stringify(n);var a,n}))===t))).forEach((({x:e,y:a})=>{const u=function(e,a){return t.find((t=>t.x===e&&t.y===a))}(e,a);switch(n(t,e,a).reduce(((e,t)=>e+ +!!t),0)){case 2:break;case 3:u||l.push({x:e,y:a});break;default:u&&l.push({x:e,y:a})}})),JSON.stringify(l)}));let C=u(null);function D(e,t){return Array(t-e).fill(e).map(((e,t)=>e+t))}l(Y,(()=>{if(C.value&&(cancelAnimationFrame(C.value),C.value=null),Y.value){let e=performance.now();C.value=requestAnimationFrame((async function t(a){Y.value&&(a-e>=A.value&&(e=a,JSON.parse(await z(JSON.stringify(E))).forEach((({x:e,y:t})=>{j(e,t)}))),C.value=requestAnimationFrame(t))}))}}));const I=s((()=>{let e=E.reduce(((e,t)=>t.y>e?t.y:e),O.value-1)+1;return D(E.reduce(((e,t)=>t.y<e?t.y:e),0),e)})),H=s((()=>{let e=E.reduce(((e,t)=>t.x>e?t.x:e),N.value-1)+1;return D(E.reduce(((e,t)=>t.x<e?t.x:e),0),e)}));l((()=>I.value[0]),(async(e,t)=>{let a=document.querySelector("main");a&&(await S(),0===a.scrollTop&&(a.scrollTop+=(b.value+8)*(t-e)))})),l((()=>H.value[0]),(async(e,t)=>{let a=document.querySelector("main");a&&(a.scrollLeft+=(b.value+8)*(t-e))}));const L=u(!1),{x:M,y:V}=o({type:"client"}),{element:W}=r({x:M,y:V}),{pressed:Z}=c(),{vibrate:$}=i({pattern:[300,100,300]}),B=u(!1),G=u(!1);function K(e){G.value||B.value&&"mouse"===e.pointerType||(L.value=!0)}function P(e){return!(!e.dataset.x||!e.dataset.y)}function Q(e){if(P(e)){return{x:+e.dataset.x,y:+e.dataset.y}}}function R(e){if(e.target&&P(e.target)){const{x:t,y:a}=Q(e.target);j(t,a)}}function U(e,t){const a=e.x-t.x,n=e.y-t.y;return Math.hypot(a,n)}l(L,(e=>{if(e&&W.value&&P(W.value)){let{x:e,y:t}=Q(W.value);j(e,t),$()}})),l(Z,(()=>{B.value=L.value=!1})),l(W,(()=>{!Z.value&&L.value||(B.value=!0)})),l(W,(e=>{if(L.value&&e&&P(e)){let{x:t,y:a}=Q(e);j(t,a)}})),l(q,(()=>{q&&(q.value=!1,C.value&&(cancelAnimationFrame(C.value),C.value=null),E.length=0)}));let ee={x:0,y:0},te={x:0,y:0};function ae(e){2===e.touches.length&&(G.value=!0,ee={x:e.touches[0].clientX,y:e.touches[0].clientY},te={x:e.touches[1].clientX,y:e.touches[1].clientY})}function ne(e){if(2===e.touches.length){e.preventDefault();let t=(U({x:e.touches[0].clientX,y:e.touches[0].clientY},{x:e.touches[1].clientX,y:e.touches[1].clientY})-U(ee,te))/200;b.value+=t,b.value<1&&(b.value=1)}else L.value&&e.preventDefault()}return(e,t)=>{const a=k;return y((g(),f("div",{class:p(["container",{transition:v(X),zoom:v(G)}]),style:m({"--columns":v(H).length,"--size":v(b)+"px"}),onContextmenu:t[0]||(t[0]=h((()=>{}),["prevent"])),onClick:R,onTouchstart:ae,onTouchmove:ne,onTouchend:t[1]||(t[1]=e=>G.value=!1)},[v(X)?(g(!0),f(x,{key:0},d(v(I),(e=>(g(),f(x,{key:e},[(g(!0),f(x,null,d(v(H),(t=>(g(),f("div",{key:t,"data-x":t,"data-y":e,class:p({true:_(t,e)})},null,10,F)))),128))],64)))),128)):(g(!0),f(x,{key:1},d(v(I),(e=>(g(),f(x,null,[(g(!0),f(x,null,d(v(H),(t=>(g(),f("div",{"data-x":t,"data-y":e,class:p({true:_(t,e)})},null,10,J)))),256))],64)))),256))],38)),[[a,K]])}}});export{N as _};