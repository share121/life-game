!function(){function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(t,e,r,n,o,i,a){try{var u=t[i](a),c=u.value}catch(f){return void r(f)}u.done?e(c):Promise.resolve(c).then(n,o)}function r(t){return function(){var r=this,n=arguments;return new Promise((function(o,i){var a=t.apply(r,n);function u(t){e(a,o,i,u,c,"next",t)}function c(t){e(a,o,i,u,c,"throw",t)}u(void 0)}))}}function n(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,i,a,u=[],c=!0,f=!1;try{if(i=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;c=!1}else for(;!(c=(n=i.call(r)).done)&&(u.push(n.value),u.length!==e);c=!0);}catch(l){f=!0,o=l}finally{try{if(!c&&null!=r.return&&(a=r.return(),Object(a)!==a))return}finally{if(f)throw o}}return u}}(t,e)||u(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */o=function(){return e};var e={},r=Object.prototype,n=r.hasOwnProperty,i=Object.defineProperty||function(t,e,r){t[e]=r.value},a="function"==typeof Symbol?Symbol:{},u=a.iterator||"@@iterator",c=a.asyncIterator||"@@asyncIterator",f=a.toStringTag||"@@toStringTag";function l(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(A){l=function(t,e,r){return t[e]=r}}function s(t,e,r,n){var o=e&&e.prototype instanceof y?e:y,a=Object.create(o.prototype),u=new j(n||[]);return i(a,"_invoke",{value:S(t,r,u)}),a}function h(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(A){return{type:"throw",arg:A}}}e.wrap=s;var v={};function y(){}function p(){}function d(){}var m={};l(m,u,(function(){return this}));var g=Object.getPrototypeOf,x=g&&g(g(N([])));x&&x!==r&&n.call(x,u)&&(m=x);var b=d.prototype=y.prototype=Object.create(m);function w(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function k(e,r){function o(i,a,u,c){var f=h(e[i],e,a);if("throw"!==f.type){var l=f.arg,s=l.value;return s&&"object"==t(s)&&n.call(s,"__await")?r.resolve(s.__await).then((function(t){o("next",t,u,c)}),(function(t){o("throw",t,u,c)})):r.resolve(s).then((function(t){l.value=t,u(l)}),(function(t){return o("throw",t,u,c)}))}c(f.arg)}var a;i(this,"_invoke",{value:function(t,e){function n(){return new r((function(r,n){o(t,e,r,n)}))}return a=a?a.then(n,n):n()}})}function S(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return _()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var u=L(a,r);if(u){if(u===v)continue;return u}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var c=h(t,e,r);if("normal"===c.type){if(n=r.done?"completed":"suspendedYield",c.arg===v)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n="completed",r.method="throw",r.arg=c.arg)}}}function L(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,L(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),v;var o=h(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,v;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,v):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,v)}function E(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function O(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function j(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function N(t){if(t){var e=t[u];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,o=function e(){for(;++r<t.length;)if(n.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:_}}function _(){return{value:void 0,done:!0}}return p.prototype=d,i(b,"constructor",{value:d,configurable:!0}),i(d,"constructor",{value:p,configurable:!0}),p.displayName=l(d,f,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===p||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,d):(t.__proto__=d,l(t,f,"GeneratorFunction")),t.prototype=Object.create(b),t},e.awrap=function(t){return{__await:t}},w(k.prototype),l(k.prototype,c,(function(){return this})),e.AsyncIterator=k,e.async=function(t,r,n,o,i){void 0===i&&(i=Promise);var a=new k(s(t,r,n,o),i);return e.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},w(b),l(b,f,"Generator"),l(b,u,(function(){return this})),l(b,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=N,j.prototype={constructor:j,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(O),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var u=n.call(i,"catchLoc"),c=n.call(i,"finallyLoc");if(u&&c){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,v):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),O(r),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;O(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:N(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),v}},e}function i(t){return function(t){if(Array.isArray(t))return c(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||u(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(t,e){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=u(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var n=0,o=function(){};return{s:o,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,c=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return a=t.done,t},e:function(t){c=!0,i=t},f:function(){try{a||null==r.return||r.return()}finally{if(c)throw i}}}}function u(t,e){if(t){if("string"==typeof t)return c(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?c(t,e):void 0}}function c(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}System.register(["../../vendor-legacy-0d065b64.js","../stores/config-legacy-db69c2a2.js","../stores/temp-legacy-7a482bc9.js"],(function(t,e){"use strict";var u,c,f,l,s,h,v,y,p,d,m,g,x,b,w,k,S,L,E,O,j,N,_,A;return{setters:[function(t){u=t.d,c=t.s,f=t.S,l=t.T,s=t.V,h=t.W,v=t.r,y=t.X,p=t.Y,d=t.Z,m=t._,g=t.$,x=t.t,b=t.F,w=t.a0,k=t.b,S=t.n,L=t.a1,E=t.o,O=t.a2,j=t.a3,N=t.a4},function(t){_=t.u},function(t){A=t.u}],execute:function(){var e=["data-x","data-y","onClick"];t("_",u({__name:"HomeView",setup:function(t){var u=c(_()),T=u.col,I=u.row,F=u.divSize,P=u.updateSpeed,G=u.enabledTransition,J=c(A()),C=J.isStart,q=J.isLocked,Y=f([]);function V(t,e){return Y.find((function(r){return r.x===t&&r.y===e}))}function $(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:!V(t,e);!!V(t,e)?r||Y.splice(function(t,e){return Y.findIndex((function(r){return r.x===t&&r.y===e}))}(t,e),1):r&&Y.push({x:t,y:e})}var z=l((function(t){var e=o().mark(u),r=JSON.parse(t);function u(){var t,r,n,c,f,l,s,h,v,y,p,d,m,g,x,b,w,k=arguments;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(t=k.length,r=new Array(t),n=0;n<t;n++)r[n]=k[n];if(1!==r.length){e.next=21;break}c=a(r[0]),e.prev=3,c.s();case 5:if((f=c.n()).done){e.next=11;break}return l=f.value,e.next=9,[l];case 9:e.next=5;break;case 11:e.next=16;break;case 13:e.prev=13,e.t0=e.catch(3),c.e(e.t0);case 16:return e.prev=16,c.f(),e.finish(16);case 19:e.next=73;break;case 21:s=[],h=r[0][0],v=a(u.apply(void 0,i(r.slice(1)))),e.prev=24,v.s();case 26:if((y=v.n()).done){e.next=33;break}return p=y.value,s.push(p),e.next=31,[h].concat(i(p));case 31:e.next=26;break;case 33:e.next=38;break;case 35:e.prev=35,e.t1=e.catch(24),v.e(e.t1);case 38:return e.prev=38,v.f(),e.finish(38);case 41:d=a(r[0].slice(1)),e.prev=42,d.s();case 44:if((m=d.n()).done){e.next=65;break}g=m.value,x=a(s),e.prev=47,x.s();case 49:if((b=x.n()).done){e.next=55;break}return w=b.value,e.next=53,[g].concat(i(w));case 53:e.next=49;break;case 55:e.next=60;break;case 57:e.prev=57,e.t2=e.catch(47),x.e(e.t2);case 60:return e.prev=60,x.f(),e.finish(60);case 63:e.next=44;break;case 65:e.next=70;break;case 67:e.prev=67,e.t3=e.catch(42),d.e(e.t3);case 70:return e.prev=70,d.f(),e.finish(70);case 73:case"end":return e.stop()}}),e,null,[[3,13,16,19],[24,35,38,41],[42,67,70,73],[47,57,60,63]])}function c(t,e,r){return f(e,r).map((function(e){return function(e,r){return t.find((function(t){return t.x===e&&t.y===r}))}(e.x,e.y)}))}function f(t,e){return i(u([-1,0,1],[-1,0,1])).filter((function(t){var e=n(t,2),r=e[0],o=e[1];return!(0===r&&0===o)})).map((function(r){var o=n(r,2),i=o[0],a=o[1];return{x:t+i,y:e+a}}))}var l,s=[],h=[];return r.forEach((function(t){var e=t.x,r=t.y;[{x:e,y:r}].concat(i(f(e,r))).forEach((function(t){h.push(t)}))})),(l=h,l.filter((function(t,e,r){return r.findIndex((function(e){return r=t,n=e,JSON.stringify(r)===JSON.stringify(n);var r,n}))===e}))).forEach((function(t){var e=t.x,n=t.y,o=function(t,e){return r.find((function(r){return r.x===t&&r.y===e}))}(e,n);switch(c(r,e,n).reduce((function(t,e){return t+ +!!e}),0)){case 2:break;case 3:o||s.push({x:e,y:n});break;default:o&&s.push({x:e,y:n})}})),JSON.stringify(s)})),H=z.workerFn;function M(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;return Array(Number((e-t)/r)).fill(t).map((function(t,e){return t+e*r}))}s(C,(function(){if(C.value){var t=performance.now();requestAnimationFrame(function(){var e=r(o().mark((function e(r){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(C.value){e.next=2;break}return e.abrupt("return");case 2:if(!(r-t>=P.value)){e.next=9;break}return t=r,e.t0=JSON,e.next=7,H(JSON.stringify(Y));case 7:e.t1=e.sent,e.t0.parse.call(e.t0,e.t1).forEach((function(t){$(t.x,t.y)}));case 9:requestAnimationFrame(n);case 10:case"end":return e.stop()}}),e)})));function n(t){return e.apply(this,arguments)}return n}())}}));var U=h((function(){var t=Y.reduce((function(t,e){return e.y>t?e.y:t}),I.value-1)+1;return M(Y.reduce((function(t,e){return e.y<t?e.y:t}),0),t)})),W=h((function(){var t=Y.reduce((function(t,e){return e.x>t?e.x:t}),T.value-1)+1;return M(Y.reduce((function(t,e){return e.x<t?e.x:t}),0),t)}));s((function(){return Y.reduce((function(t,e){return e.y<t?e.y:t}),0)}),function(){var t=r(o().mark((function t(e,r){var n;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=document.querySelector("main")){t.next=3;break}return t.abrupt("return");case 3:if(e===r||0!==n.scrollTop){t.next=7;break}return t.next=6,j();case 6:n.scrollTop+=(F.value+8)*(r-e);case 7:case"end":return t.stop()}}),t)})));return function(e,r){return t.apply(this,arguments)}}()),s((function(){return Y.reduce((function(t,e){return e.x<t?e.x:t}),0)}),(function(t,e){var r=document.querySelector("main");r&&t!==e&&(r.scrollLeft+=(F.value+8)*(e-t))}));var X=v(!1),Z=y({type:"page"}),B=Z.x,D=Z.y,K=p({x:B,y:D}).element,Q=d().pressed,R=m({pattern:[300,100,300]}).vibrate,tt=v(!1);function et(t){("mouse"===t.pointerType&&!tt.value||"mouse"!==t.pointerType)&&(X.value=!0)}return s(X,(function(t){if(t){var e,r,n=+(null===(e=K.value)||void 0===e?void 0:e.dataset.x),o=+(null===(r=K.value)||void 0===r?void 0:r.dataset.y);isNaN(n)||isNaN(o)||$(n,o)}R(),q.value=t})),s(Q,(function(t){t||(tt.value=X.value=!1)})),s(K,(function(){Q.value&&!X.value&&(tt.value=!0)})),s(K,(function(t){if(X.value){var e=+(null==t?void 0:t.dataset.x),r=+(null==t?void 0:t.dataset.y);isNaN(e)||isNaN(r)||$(e,r)}})),function(t,r){var n=N;return g((E(),x("div",{class:"container",style:S({gridTemplateColumns:"repeat(".concat(k(W).length,", auto)"),"--width":k(F)+"px","--height":k(F)+"px"}),onContextmenu:r[0]||(r[0]=L((function(){}),["prevent"]))},[(E(!0),x(b,null,w(k(U),(function(t){return E(),x(b,{key:t},[(E(!0),x(b,null,w(k(W),(function(r){return E(),x("div",{key:r,"data-x":r,"data-y":t,onClick:function(e){return $(r,t)},class:O({true:V(r,t)}),style:S(k(G)?{}:{transition:"none"})},null,14,e)})),128))],64)})),128))],36)),[[n,et]])}}}))}}}))}();
