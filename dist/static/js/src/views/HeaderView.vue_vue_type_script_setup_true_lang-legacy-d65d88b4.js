System.register(["../../vendor-legacy-3db0c359.js","../stores/config-legacy-b31610d5.js","../stores/temp-legacy-77a0da97.js"],(function(e,n){"use strict";var t,l,u,r,i,o,a,c,d,f,s,m,p,v,h,g,V,_,b,w,y,x,U,k,C,H,S,j,D,T,W,q,A;return{setters:[function(e){t=e.d,l=e.s,u=e.r,r=e.q,i=e.a,o=e.o,a=e.t,c=e.v,d=e.e,f=e.w,s=e.b,m=e.x,p=e.y,v=e.A,h=e.F,g=e.B,V=e.C,_=e.D,b=e.G,w=e.H,y=e.I,x=e.J,U=e.U,k=e.K,C=e.L,H=e.M,S=e.N,j=e.O,D=e.P,T=e.Q,W=e.R},function(e){q=e.u},function(e){A=e.u}],execute:function(){var n=function(e){return T("data-v-991b3f38"),e=e(),W(),e},B={class:"container"},F=n((function(){return c("h1",null,"生命游戏",-1)})),G=n((function(){return c("br",null,null,-1)})),I={class:"dialog-footer"};e("_",t({__name:"HeaderView",emits:["fullscreen"],setup:function(e){var n=l(A()).isStart,t=u(!1),T=q(),W=r("(min-width: 440px)"),J=r("(min-width: 660px)");return i(),function(e,l){var u=w,r=y,i=x,q=U,A=k,K=C,L=H,M=S,N=j,O=D;return o(),a("div",B,[F,c("div",null,[d(A,{class:"space"},{default:f((function(){return[d(u,{onClick:l[0]||(l[0]=function(e){return n.value=!s(n)})},{default:f((function(){return[m(p(s(n)?"暂停":"开始"),1)]})),_:1}),d(u,{onClick:l[1]||(l[1]=function(n){return e.$emit("fullscreen")}),icon:s(v)},null,8,["icon"]),d(u,{onClick:l[2]||(l[2]=function(e){return t.value=!0})},{default:f((function(){return[m("设置")]})),_:1}),s(W)?(o(),a(h,{key:0},[d(r,{direction:"vertical"}),d(q,null,{default:f((function(e){var n=e.isDark,t=e.toggleDark;return[d(i,{"model-value":n,"inline-prompt":"","active-icon":s(g),"inactive-icon":s(V),onChange:function(e){return t()}},null,8,["model-value","active-icon","inactive-icon","onChange"])]})),_:1})],64)):_("",!0)]})),_:1})]),d(O,{modelValue:s(t),"onUpdate:modelValue":l[10]||(l[10]=function(e){return b(t)?t.value=e:null}),title:"设置","show-close":!1,width:s(J)?"50%":"90%"},{footer:f((function(){return[c("span",I,[d(u,{type:"primary",onClick:l[9]||(l[9]=function(e){return t.value=!1})},{default:f((function(){return[m("确定")]})),_:1})])]})),default:f((function(){return[d(N,{model:s(T),"label-width":s(J)?"120px":"70px"},{default:f((function(){return[d(L,{label:"列"},{default:f((function(){return[d(K,{modelValue:s(T).col,"onUpdate:modelValue":l[3]||(l[3]=function(e){return s(T).col=e}),min:1,"step-strictly":"",disabled:s(n)},null,8,["modelValue","disabled"])]})),_:1}),d(L,{label:"行"},{default:f((function(){return[d(K,{modelValue:s(T).row,"onUpdate:modelValue":l[4]||(l[4]=function(e){return s(T).row=e}),min:1,"step-strictly":"",disabled:s(n)},null,8,["modelValue","disabled"])]})),_:1}),d(L,{label:"迭代速度"},{default:f((function(){return[d(M,{placement:"right",title:"迭代速度",width:200,trigger:"hover"},{reference:f((function(){return[d(K,{modelValue:s(T).updateSpeed,"onUpdate:modelValue":l[5]||(l[5]=function(e){return s(T).updateSpeed=e}),min:0,"step-strictly":""},null,8,["modelValue"])]})),default:f((function(){return[m(" 每次迭代的间隔时间"),G,m("单位：ms ")]})),_:1})]})),_:1}),d(L,{label:"细胞宽度"},{default:f((function(){return[d(M,{placement:"right",title:"细胞宽度",width:200,trigger:"hover"},{reference:f((function(){return[d(K,{modelValue:s(T).divWidth,"onUpdate:modelValue":l[6]||(l[6]=function(e){return s(T).divWidth=e}),min:1,"step-strictly":""},null,8,["modelValue"])]})),default:f((function(){return[m(" 单位：px ")]})),_:1})]})),_:1}),d(L,{label:"细胞高度"},{default:f((function(){return[d(M,{placement:"right",title:"细胞高度",width:200,trigger:"hover"},{reference:f((function(){return[d(K,{modelValue:s(T).divHeight,"onUpdate:modelValue":l[7]||(l[7]=function(e){return s(T).divHeight=e}),min:1,"step-strictly":""},null,8,["modelValue"])]})),default:f((function(){return[m(" 单位：px ")]})),_:1})]})),_:1}),d(L,{label:"过渡动画"},{default:f((function(){return[d(M,{placement:"right",title:"过渡动画",width:200,trigger:"hover"},{reference:f((function(){return[d(i,{modelValue:s(T).enabledTransition,"onUpdate:modelValue":l[8]||(l[8]=function(e){return s(T).enabledTransition=e})},null,8,["modelValue"])]})),default:f((function(){return[m(" 是否显示细胞出现和消失的动画 ")]})),_:1})]})),_:1})]})),_:1},8,["model","label-width"])]})),_:1},8,["modelValue","width"])])}}}))}}}));
