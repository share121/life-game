import{d as e,s as l,r as a,t,a as d,o as i,v as o,x as s,f as n,b as u,e as r,y as m,A as c,B as p,F as f,C as h,D as v,G as V,H as g,I as _,J as b,K as w,U as y,L as x,M as U,N as k,O as C,P as H,Q as S,R as j,S as D}from"../../vendor-521a8e3c.js";import{u as T}from"../stores/config-e32d92d6.js";import{u as W}from"../stores/temp-ca71d587.js";const A=e=>(j("data-v-00423f3f"),e=e(),D(),e),B={class:"container"},F=A((()=>s("h1",null,"生命游戏",-1))),G=A((()=>s("br",null,null,-1))),I={class:"dialog-footer"},J=e({__name:"HeaderView",emits:["fullscreen"],setup(e){const{isStart:j}=l(W()),D=a(!1),A=T(),J=t("(min-width: 440px)"),K=t("(min-width: 660px)");return d(),(e,l)=>{const a=_,t=b,d=w,T=y,W=x,L=U,M=k,N=C,O=H,P=S;return i(),o("div",B,[F,s("div",null,[n(W,{class:"space"},{default:u((()=>[n(a,{onClick:l[0]||(l[0]=e=>j.value=!r(j))},{default:u((()=>[m(c(r(j)?"暂停":"开始"),1)])),_:1}),n(a,{onClick:l[1]||(l[1]=l=>e.$emit("fullscreen")),icon:r(p)},null,8,["icon"]),n(a,{onClick:l[2]||(l[2]=e=>D.value=!0)},{default:u((()=>[m("设置")])),_:1}),r(J)?(i(),o(f,{key:0},[n(t,{direction:"vertical"}),n(T,null,{default:u((({isDark:e,toggleDark:l})=>[n(d,{"model-value":e,"inline-prompt":"","active-icon":r(h),"inactive-icon":r(v),onChange:e=>l()},null,8,["model-value","active-icon","inactive-icon","onChange"])])),_:1})],64)):V("",!0)])),_:1})]),n(P,{modelValue:r(D),"onUpdate:modelValue":l[10]||(l[10]=e=>g(D)?D.value=e:null),title:"设置","show-close":!1,width:r(K)?"50%":"90%"},{footer:u((()=>[s("span",I,[n(a,{type:"primary",onClick:l[9]||(l[9]=e=>D.value=!1)},{default:u((()=>[m("确定")])),_:1})])])),default:u((()=>[n(O,{model:r(A),"label-width":r(K)?"120px":"70px"},{default:u((()=>[n(M,{label:"列"},{default:u((()=>[n(L,{modelValue:r(A).col,"onUpdate:modelValue":l[3]||(l[3]=e=>r(A).col=e),min:1,"step-strictly":"",disabled:r(j)},null,8,["modelValue","disabled"])])),_:1}),n(M,{label:"行"},{default:u((()=>[n(L,{modelValue:r(A).row,"onUpdate:modelValue":l[4]||(l[4]=e=>r(A).row=e),min:1,"step-strictly":"",disabled:r(j)},null,8,["modelValue","disabled"])])),_:1}),n(M,{label:"迭代速度"},{default:u((()=>[n(N,{placement:"right",title:"迭代速度",width:200,trigger:"hover"},{reference:u((()=>[n(L,{modelValue:r(A).updateSpeed,"onUpdate:modelValue":l[5]||(l[5]=e=>r(A).updateSpeed=e),min:1,"step-strictly":""},null,8,["modelValue"])])),default:u((()=>[m(" 每次迭代的间隔时间"),G,m("单位：ms ")])),_:1})])),_:1}),n(M,{label:"细胞宽度"},{default:u((()=>[n(N,{placement:"right",title:"细胞宽度",width:200,trigger:"hover"},{reference:u((()=>[n(L,{modelValue:r(A).divWidth,"onUpdate:modelValue":l[6]||(l[6]=e=>r(A).divWidth=e),min:1,"step-strictly":""},null,8,["modelValue"])])),default:u((()=>[m(" 单位：px ")])),_:1})])),_:1}),n(M,{label:"细胞高度"},{default:u((()=>[n(N,{placement:"right",title:"细胞高度",width:200,trigger:"hover"},{reference:u((()=>[n(L,{modelValue:r(A).divHeight,"onUpdate:modelValue":l[7]||(l[7]=e=>r(A).divHeight=e),min:1,"step-strictly":""},null,8,["modelValue"])])),default:u((()=>[m(" 单位：px ")])),_:1})])),_:1}),n(M,{label:"过渡动画"},{default:u((()=>[n(N,{placement:"right",title:"过渡动画",width:200,trigger:"hover"},{reference:u((()=>[n(d,{modelValue:r(A).enabledTransition,"onUpdate:modelValue":l[8]||(l[8]=e=>r(A).enabledTransition=e)},null,8,["modelValue"])])),default:u((()=>[m(" 是否显示细胞出现和消失的动画 ")])),_:1})])),_:1})])),_:1},8,["model","label-width"])])),_:1},8,["modelValue","width"])])}}});export{J as _};