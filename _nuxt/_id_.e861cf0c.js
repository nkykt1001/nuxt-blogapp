import{_ as i}from"./Body.4faa5920.js";import{a as n,b as u,w as _,c as l,u as m,o as p}from"./entry.39174c30.js";import{u as f}from"./fetch.71a32d5f.js";const b={__name:"[id]",async setup(d){let e,a;const t=n(),s=u().params.id,{data:r,error:o}=([e,a]=_(()=>f(`/blogs/${s}`,{baseURL:t.apiURL,headers:{"X-MICROCMS-API-KEY":t.apiKey},initialCache:!1},"$ZV8LJjTMhD")),e=await e,a(),e);if(o.value)throw o.value;return(y,C)=>{const c=i;return p(),l(c,{article:m(r)},null,8,["article"])}}};export{b as default};
