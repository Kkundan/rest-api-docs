"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[2967],{7466:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>d,contentTitle:()=>a,default:()=>p,frontMatter:()=>c,metadata:()=>l,toc:()=>u});var r=n(74848),i=n(28453),o=n(3514),s=n(84142);const c={id:"job-control",title:"Job Control",description:"Job Control",custom_edit_url:null},a=void 0,l={id:"saviynt/job-control",title:"Job Control",description:"Job Control",source:"@site/docs/saviynt/job-control.tag.mdx",sourceDirName:"saviynt",slug:"/saviynt/job-control",permalink:"/saviynt/job-control",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"job-control",title:"Job Control",description:"Job Control",custom_edit_url:null},sidebar:"saviyntSidebar",previous:{title:"Send Email",permalink:"/saviynt/send-email"},next:{title:"Create and Update Trigger",permalink:"/saviynt/create-and-update-trigger"}},d={},u=[];function m(t){return(0,r.jsx)(o.A,{items:(0,s.$S)().items})}function p(t={}){const{wrapper:e}={...(0,i.R)(),...t.components};return e?(0,r.jsx)(e,{...t,children:(0,r.jsx)(m,{...t})}):m()}},3514:(t,e,n)=>{n.d(e,{A:()=>x});n(96540);var r=n(18215),i=n(84142),o=n(28774),s=n(16654),c=n(21312),a=n(51107);const l={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var d=n(74848);function u(t){let{href:e,children:n}=t;return(0,d.jsx)(o.default,{href:e,className:(0,r.A)("card padding--lg",l.cardContainer),children:n})}function m(t){let{href:e,icon:n,title:i,description:o}=t;return(0,d.jsxs)(u,{href:e,children:[(0,d.jsxs)(a.default,{as:"h2",className:(0,r.A)("text--truncate",l.cardTitle),title:i,children:[n," ",i]}),o&&(0,d.jsx)("p",{className:(0,r.A)("text--truncate",l.cardDescription),title:o,children:o})]})}function p(t){let{item:e}=t;const n=(0,i.Nr)(e);return n?(0,d.jsx)(m,{href:n,icon:"\ud83d\uddc3\ufe0f",title:e.label,description:e.description??(0,c.translate)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:e.items.length})}):null}function f(t){let{item:e}=t;const n=(0,s.A)(e.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",r=(0,i.cC)(e.docId??void 0);return(0,d.jsx)(m,{href:e.href,icon:n,title:e.label,description:e.description??r?.description})}function h(t){let{item:e}=t;switch(e.type){case"link":return(0,d.jsx)(f,{item:e});case"category":return(0,d.jsx)(p,{item:e});default:throw new Error(`unknown item type ${JSON.stringify(e)}`)}}function j(t){let{className:e}=t;const n=(0,i.$S)();return(0,d.jsx)(x,{items:n.items,className:e})}function x(t){const{items:e,className:n}=t;if(!e)return(0,d.jsx)(j,{...t});const o=(0,i.d1)(e);return(0,d.jsx)("section",{className:(0,r.A)("row",n),children:o.map(((t,e)=>(0,d.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,d.jsx)(h,{item:t})},e)))})}}}]);