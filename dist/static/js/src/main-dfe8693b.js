import{h as r,i as s,j as t}from"../vendor-48e368d4.js";import{A as e}from"./App-83914b16.js";import{r as o}from"./router/index-12ca69e4.js";const i=r(e);i.use(s().use(t)),i.use(o),i.directive("json",((r,s)=>{var t;r.setAttribute(null!=(t=s.arg)?t:"",JSON.stringify(s.value))})),i.mount("#app");