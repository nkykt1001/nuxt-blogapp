import{r as s,o as n,y,F as g,z as b,i as l,e,c as _,f as o,t as r,h as u,a as k,w as C,u as A}from"./entry.39174c30.js";import{u as L}from"./fetch.71a32d5f.js";const w={__name:"List",props:{articles:Array},setup(v){const a=v;return(i,m)=>{const d=s("v-card-title"),c=s("v-card-subtitle"),p=s("v-card-text"),h=s("v-btn"),f=s("v-card-actions"),x=s("v-card");return n(),y("ul",null,[(n(!0),y(g,null,b(a.articles,t=>(n(),y("li",{key:t.id,class:"mb-5",style:{"list-style":"none"}},[l(x,null,{default:e(()=>[t.title?(n(),_(d,{key:0},{default:e(()=>[o(r(t.title),1)]),_:2},1024)):u("",!0),t.authorName.lengh!==0?(n(),_(c,{key:1},{default:e(()=>[o(r(t.authorName[0]),1)]),_:2},1024)):u("",!0),l(c,null,{default:e(()=>[o(r(t.publishedAt),1)]),_:2},1024),t.is_migrate&&t.content_migrate?(n(),_(p,{key:2},{default:e(()=>[o(r(t.content_migrate.slice(0,100))+"... ",1)]),_:2},1024)):u("",!0),!t.is_migrate&&t.content?(n(),_(p,{key:3},{default:e(()=>[o(r(t.content.slice(0,100))+"... ",1)]),_:2},1024)):u("",!0),l(f,null,{default:e(()=>[l(h,{to:`/article/${t.id}`,class:"text-primary",flat:"",nuxt:""},{default:e(()=>[o(" \u8A73\u7D30\u3092\u898B\u308B ")]),_:2},1032,["to"])]),_:2},1024)]),_:2},1024)]))),128))])}}},B={__name:"index",async setup(v){let a,i;const m=k(),{data:d,error:c}=([a,i]=C(()=>L("/blogs",{baseURL:m.apiURL,headers:{"X-MICROCMS-API-KEY":m.apiKey},initialCache:!1},"$PslAyef5YX")),a=await a,i(),a);if(c.value)throw c.value;return(p,h)=>{const f=w;return n(),_(f,{articles:A(d).contents},null,8,["articles"])}}};export{B as default};
