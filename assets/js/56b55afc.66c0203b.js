"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[3970],{31810:(t,e,i)=>{i.r(e),i.d(e,{assets:()=>d,contentTitle:()=>c,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var n=i(74848),r=i(28453),a=i(3514),s=i(84142);const o={id:"organization",title:"Organization",description:"Organization",custom_edit_url:null},c=void 0,l={id:"saviynt/organization",title:"Organization",description:"Organization",source:"@site/docs/saviynt/organization.tag.mdx",sourceDirName:"saviynt",slug:"/saviynt/organization",permalink:"/api-editor.github.io/saviynt/organization",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"organization",title:"Organization",description:"Organization",custom_edit_url:null},sidebar:"saviyntSidebar",previous:{title:"Get List of UserGroups",permalink:"/api-editor.github.io/saviynt/get-list-of-usergroups"},next:{title:"Create Organization",permalink:"/api-editor.github.io/saviynt/create-organization"}},d={},u=[];function m(t){return(0,n.jsx)(a.A,{items:(0,s.$S)().items})}function p(t={}){const{wrapper:e}={...(0,r.R)(),...t.components};return e?(0,n.jsx)(e,{...t,children:(0,n.jsx)(m,{...t})}):m()}},3514:(t,e,i)=>{i.d(e,{A:()=>x});i(96540);var n=i(18215),r=i(84142),a=i(28774),s=i(16654),o=i(21312),c=i(51107);const l={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var d=i(74848);function u(t){let{href:e,children:i}=t;return(0,d.jsx)(a.default,{href:e,className:(0,n.A)("card padding--lg",l.cardContainer),children:i})}function m(t){let{href:e,icon:i,title:r,description:a}=t;return(0,d.jsxs)(u,{href:e,children:[(0,d.jsxs)(c.default,{as:"h2",className:(0,n.A)("text--truncate",l.cardTitle),title:r,children:[i," ",r]}),a&&(0,d.jsx)("p",{className:(0,n.A)("text--truncate",l.cardDescription),title:a,children:a})]})}function p(t){let{item:e}=t;const i=(0,r.Nr)(e);return i?(0,d.jsx)(m,{href:i,icon:"\ud83d\uddc3\ufe0f",title:e.label,description:e.description??(0,o.translate)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:e.items.length})}):null}function g(t){let{item:e}=t;const i=(0,s.A)(e.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",n=(0,r.cC)(e.docId??void 0);return(0,d.jsx)(m,{href:e.href,icon:i,title:e.label,description:e.description??n?.description})}function f(t){let{item:e}=t;switch(e.type){case"link":return(0,d.jsx)(g,{item:e});case"category":return(0,d.jsx)(p,{item:e});default:throw new Error(`unknown item type ${JSON.stringify(e)}`)}}function h(t){let{className:e}=t;const i=(0,r.$S)();return(0,d.jsx)(x,{items:i.items,className:e})}function x(t){const{items:e,className:i}=t;if(!e)return(0,d.jsx)(h,{...t});const a=(0,r.d1)(e);return(0,d.jsx)("section",{className:(0,n.A)("row",i),children:a.map(((t,e)=>(0,d.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,d.jsx)(f,{item:t})},e)))})}}}]);