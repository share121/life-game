import{d as e,s as l,r as o,P as t,p as n,F as a,Q as r,a as s,R as u,S as i,o as f,T as c}from"../../vendor-48e368d4.js";import{u as h}from"../stores/config-82c5632a.js";import{u as v}from"../stores/temp-635ff38a.js";const p=["onMousedown","onMouseover"],m=e({__name:"HomeView",setup(e){const{col:m,row:d,divWidth:g,divHeight:y,updateSpeed:w,enabledTransition:A}=l(h()),{isStart:b}=l(v());let x=o(Array(d.value).fill(null).map((()=>Array(m.value).fill(!1))));function*M(...e){if(1===e.length)for(const l of e[0])yield[l];else{let l=[];const o=e[0][0];for(const t of M(...e.slice(1)))l.push(t),yield[o,...t];for(const t of e[0].slice(1))for(const e of l)yield[t,...e]}}function j(e,l,o){return[...M([-1,0,1],[-1,0,1])].filter((([e,l])=>!(0===e&&0===l))).map((([t,n])=>function(l,o){try{return s(e)[o][l]}catch(t){return}}(l+t,o+n)))}return t((()=>({col:s(m),row:s(d)})),(({col:e,row:l})=>{x.value.length>l?x.value.length=l:x.value.length<l&&x.value.push(...Array(l-x.value.length).fill(Array(e).fill(!1))),x.value.forEach((l=>{l.length>e?l.length=e:l.length<e&&l.push(...Array(e-l.length).fill(!1))}))})),t(b,(()=>{if(!b.value)return;let e=performance.now();requestAnimationFrame((function l(o){if(b.value){if(o-e>=w.value){e=o;const l=Array(d.value).fill(null).map((()=>Array(m.value).fill(!1)));s(x).forEach(((e,o)=>{e.forEach(((e,t)=>{switch(j(s(x),t,o).reduce(((e,l)=>e+ +(!0===l)),0)){case 2:l[o][t]=e;break;case 3:l[o][t]=!0}}))})),x.value=l}requestAnimationFrame(l)}}))})),(e,l)=>(f(),n("div",{class:"container",style:u({gridTemplateColumns:`repeat(${s(m)}, auto)`,"--width":s(g)+"px","--height":s(y)+"px"}),onContextmenu:l[0]||(l[0]=i((()=>{}),["prevent"]))},[(f(!0),n(a,null,r(s(x),((e,l)=>(f(),n(a,null,[(f(!0),n(a,null,r(e,((e,o)=>(f(),n("div",{class:c({true:e}),onMousedown:e=>s(x)[l][o]=!s(x)[l][o],onMouseover:e=>0!==e.buttons&&(s(x)[l][o]=!s(x)[l][o]),style:u(s(A)?{}:{transition:"none"})},null,46,p)))),256))],64)))),256))],36))}});export{m as _};
