import{d as e,s as a,S as t,T as n,V as r,W as s,r as i,X as o,Y as u,Z as l,_ as c,$ as f,t as d,F as y,a0 as p,b as v,n as x,a1 as m,o as h,a2 as N,a3 as g}from"../../vendor-6861a305.js";import{u as S}from"../stores/config-e2d3fa08.js";import{u as k}from"../stores/temp-617128af.js";const b=["data-x","data-y","onClick"],w=e({__name:"HomeView",setup(e){const{col:w,row:J,divSize:O,updateSpeed:T,enabledTransition:C}=a(S()),{isStart:E,isLocked:F}=a(k());let _=t([]);function j(e,a){return _.find((t=>t.x===e&&t.y===a))}function A(e,a,t=!j(e,a)){!!j(e,a)?t||_.splice(function(e,a){return _.findIndex((t=>t.x===e&&t.y===a))}(e,a),1):t&&_.push({x:e,y:a})}const{workerFn:q}=n((e=>{const a=JSON.parse(e);function*t(...e){if(1===e.length)for(const a of e[0])yield[a];else{const a=[],n=e[0][0];for(const r of t(...e.slice(1)))a.push(r),yield[n,...r];for(const t of e[0].slice(1))for(const e of a)yield[t,...e]}}function n(e,a,t){return r(a,t).map((({x:a,y:t})=>function(a,t){return e.find((e=>e.x===a&&e.y===t))}(a,t)))}function r(e,a){return[...t([-1,0,1],[-1,0,1])].filter((([e,a])=>!(0===e&&0===a))).map((([t,n])=>({x:e+t,y:a+n})))}const s=[],i=[];var o;return a.forEach((({x:e,y:a})=>{[{x:e,y:a},...r(e,a)].forEach((e=>{i.push(e)}))})),(o=i,o.filter(((e,a,t)=>t.findIndex((a=>{return t=e,n=a,JSON.stringify(t)===JSON.stringify(n);var t,n}))===a))).forEach((({x:e,y:t})=>{const r=function(e,t){return a.find((a=>a.x===e&&a.y===t))}(e,t);switch(n(a,e,t).reduce(((e,a)=>e+ +!!a),0)){case 2:break;case 3:r||s.push({x:e,y:t});break;default:r&&s.push({x:e,y:t})}})),JSON.stringify(s)}));function I(e,a,t=1){return Array(Number((a-e)/t)).fill(e).map(((e,a)=>e+a*t))}r(E,(()=>{if(!E.value)return;let e=performance.now();requestAnimationFrame((async function a(t){E.value&&(t-e>=T.value&&(e=t,JSON.parse(await q(JSON.stringify(_))).forEach((({x:e,y:a})=>{A(e,a)}))),requestAnimationFrame(a))}))}));const V=s((()=>{let e=_.reduce(((e,a)=>a.y>e?a.y:e),J.value-1)+1;return I(_.reduce(((e,a)=>a.y<e?a.y:e),0),e)})),$=s((()=>{let e=_.reduce(((e,a)=>a.x>e?a.x:e),w.value-1)+1;return I(_.reduce(((e,a)=>a.x<e?a.x:e),0),e)})),z=i(!1),{x:H,y:L}=o({type:"page"}),{element:W}=u({x:H,y:L}),{pressed:X}=l(),{vibrate:Y}=c({pattern:[300,100,300]}),Z=i(!1);function B(e){("mouse"===e.pointerType&&!Z.value||"mouse"!==e.pointerType)&&(z.value=!0)}return r(z,(e=>{var a,t;if(e){let e=+(null==(a=W.value)?void 0:a.dataset.x),n=+(null==(t=W.value)?void 0:t.dataset.y);isNaN(e)||isNaN(n)||A(e,n)}Y(),F.value=e})),r(X,(e=>{e||(Z.value=z.value=!1)})),r(W,(()=>{X.value&&!z.value&&(Z.value=!0)})),r(W,(e=>{if(!z.value)return;let a=+(null==e?void 0:e.dataset.x),t=+(null==e?void 0:e.dataset.y);isNaN(a)||isNaN(t)||A(a,t)})),(e,a)=>{const t=g;return f((h(),d("div",{class:"container",style:x({gridTemplateColumns:`repeat(${v($).length}, auto)`,"--width":v(O)+"px","--height":v(O)+"px"}),onContextmenu:a[0]||(a[0]=m((()=>{}),["prevent"]))},[(h(!0),d(y,null,p(v(V),(e=>(h(),d(y,{key:e},[(h(!0),d(y,null,p(v($),(a=>(h(),d("div",{key:a,"data-x":a,"data-y":e,onClick:t=>A(a,e),class:N({true:j(a,e)}),style:x(v(C)?{}:{transition:"none"})},null,14,b)))),128))],64)))),128))],36)),[[t,B]])}}});export{w as _};
