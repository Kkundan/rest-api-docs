"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[6572],{31718:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>f,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var s=r(74848),i=r(28453),n=r(3514),c=r(84142);const a={id:"roles-1",title:"Roles1",description:"Roles1",custom_edit_url:null},o=void 0,l={id:"saviynt/roles-1",title:"Roles1",description:"Roles1",source:"@site/docs/saviynt/roles-1.tag.mdx",sourceDirName:"saviynt",slug:"/saviynt/roles-1",permalink:"/saviynt/roles-1",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"roles-1",title:"Roles1",description:"Roles1",custom_edit_url:null},sidebar:"saviyntSidebar",previous:{title:"Get Requestable Users",permalink:"/saviynt/get-requestable-users"},next:{title:"Create Role Request",permalink:"/saviynt/create-role-request"}},d={},u=[];function m(e){return(0,s.jsx)(n.A,{items:(0,c.$S)().items})}function f(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(m,{...e})}):m()}},3514:(e,t,r)=>{r.d(t,{A:()=>g});r(96540);var s=r(18215),i=r(84142),n=r(28774),c=r(16654),a=r(21312),o=r(51107);const l={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var d=r(74848);function u(e){let{href:t,children:r}=e;return(0,d.jsx)(n.default,{href:t,className:(0,s.A)("card padding--lg",l.cardContainer),children:r})}function m(e){let{href:t,icon:r,title:i,description:n}=e;return(0,d.jsxs)(u,{href:t,children:[(0,d.jsxs)(o.default,{as:"h2",className:(0,s.A)("text--truncate",l.cardTitle),title:i,children:[r," ",i]}),n&&(0,d.jsx)("p",{className:(0,s.A)("text--truncate",l.cardDescription),title:n,children:n})]})}function f(e){let{item:t}=e;const r=(0,i.Nr)(t);return r?(0,d.jsx)(m,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,a.translate)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function p(e){let{item:t}=e;const r=(0,c.A)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",s=(0,i.cC)(t.docId??void 0);return(0,d.jsx)(m,{href:t.href,icon:r,title:t.label,description:t.description??s?.description})}function h(e){let{item:t}=e;switch(t.type){case"link":return(0,d.jsx)(p,{item:t});case"category":return(0,d.jsx)(f,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function x(e){let{className:t}=e;const r=(0,i.$S)();return(0,d.jsx)(g,{items:r.items,className:t})}function g(e){const{items:t,className:r}=e;if(!t)return(0,d.jsx)(x,{...e});const n=(0,i.d1)(t);return(0,d.jsx)("section",{className:(0,s.A)("row",r),children:n.map(((e,t)=>(0,d.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,d.jsx)(h,{item:e})},t)))})}}}]);