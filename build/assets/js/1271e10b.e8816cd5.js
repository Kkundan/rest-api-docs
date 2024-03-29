"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[710],{92384:(e,s,a)=>{a.r(s),a.d(s,{assets:()=>J,contentTitle:()=>I,default:()=>k,frontMatter:()=>v,metadata:()=>q,toc:()=>w});var t=a(74848),i=a(28453),l=a(91366),n=a.n(l),d=(a(6050),a(57742)),r=a.n(d),c=(a(67792),a(27362)),p=a.n(c),o=a(36683),h=a.n(o),m=a(81124),x=a.n(m),j=a(60674),u=a.n(j),y=a(23397),g=a.n(y),b=(a(26651),a(51107)),f=(a(77675),a(19365));const v={id:"deletedataset",title:"deleteDataset",description:"This API is used to delete a dataset.",sidebar_label:"deleteDataset",hide_title:!0,hide_table_of_contents:!0,api:"eJzNVt9z2zYM/ld4eGrvpNhxnF/K5SF13M7r0uRib+tdlJspEYpYS6RKUk48nf73HUl5tdOlcd+mJ4oEP4AAPgANGPqgIbqDS2qoRgP3ATDUqeKV4VJABLOca3JxMyFck1ojI0YShgUaJJQwf2svFrGY5UjmF7XJpeJ/U3t7TspaG5LTpZWdv0OqUM1JJotCPiIjycpuz+QCxdxBXFHBqJFqRSqqaIkGlY7swbxTJGiJcwhAVqicigmDCLw5nQgEoPBrjdq8k2wFUQOpFAaFsUuDT6ZXFZQL+4dPtKwK1HbtMdZeiBpY0qJGiKCJVSwIITFs2BBDRGL4jRrU5q8RVTEEVqyF1n7WAl1JoT30oN/3Gjbduq0vgBwpQ+XkR1IITL1cAzrNsaTO+FVlDdJGcfEAwdp8iGCBWIW04EsEq/2SGtz16p/IAtI/Ib/Wggz6gwHpH0WDYXQwJB+uZg5tiiYcSbngO2OORtPb9+Hs+uP403lC0+ToIDkIDzKG4fD4+CQ8TfaT8OQIT+jpcHg6YIdn5Iaa/Lzn1RnFUxPOFBW6ksqEU0xrxc1qV+0lfQrpA57vHx4Phif9/hnhIi1qhtM6uZQl5UI7RU5Dhioci1Qyi7KjgjSvxQKZA/mDqp0Nu0hT1DocSWGULMJbn6XhL13kLdxnd4rChLNVheG1yxa9qwIhteBZ1iG9twz6WYjpxdX4+nbyYfKpQ/k8nYY3SpqfS8j9M1JKhudJIdMFOEpssJBWVcFTx9/eF/0Cqky+YGqZUSnLdsM9mVApqUaS4Y8N6EMbQKkfXnlt7UKS1YW3cZeCsGUC9KFT8wzLl4FvVQyiuwZs5YAIKmpyCMDWoPXaViyukEFkVI3Biz5u2/sASjS5tHWvkto5yGJE0HteUjSq5Vp1rQqIIDem0lGv1xgUVJh2T9MlXwmTFrJme6kse+PRVY9WvLc8hACWVHGadP7wV74vZN2+bRsZrQsD0b8Obp25uuPv1L7JYyVU89S2io0XWtuge7n9dzI2iolrG69JOyGXs1xk0kly44Ps30jGwqCqFNdIJgyF4WZFRvbhrrvdYoYKRYrwnw1wJIvCU4BUSi45Q01MjoShobzQRGbuV9eVrVnIiA+SJplU7uR1K96MJ6O31uuotNd8uNffc4lsA11Sx5Muh57HesvkjZb3/2zfXRA3unEb+BRtumy+e/bC+wBym+3RHTRNQjX+roq2tdtfa7Ql+O7+W766jGdc2zWDKKOFxh+46M1tx7635CXbuk0qVo4WfjKAABa4WpO4vW/XXdzp90eb5Xzj6hb6Wtb2h8psSH1XJ7fYf3M9nUEASTfllL4gKfpo6wl9hAhiaOJYxX58ibcHmNiNMPHWEBPbMcZdaGOw7P0HyRx4iw==",sidebar_class_name:"post api-method",info_path:"saviynt/saviynt-enterprise-identity-cloud-api-reference",custom_edit_url:null},I=void 0,q={id:"saviynt/deletedataset",title:"deleteDataset",description:"This API is used to delete a dataset.",source:"@site/docs/saviynt/deletedataset.api.mdx",sourceDirName:"saviynt",slug:"/saviynt/deletedataset",permalink:"/saviynt/deletedataset",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"deletedataset",title:"deleteDataset",description:"This API is used to delete a dataset.",sidebar_label:"deleteDataset",hide_title:!0,hide_table_of_contents:!0,api:"eJzNVt9z2zYM/ld4eGrvpNhxnF/K5SF13M7r0uRib+tdlJspEYpYS6RKUk48nf73HUl5tdOlcd+mJ4oEP4AAPgANGPqgIbqDS2qoRgP3ATDUqeKV4VJABLOca3JxMyFck1ojI0YShgUaJJQwf2svFrGY5UjmF7XJpeJ/U3t7TspaG5LTpZWdv0OqUM1JJotCPiIjycpuz+QCxdxBXFHBqJFqRSqqaIkGlY7swbxTJGiJcwhAVqicigmDCLw5nQgEoPBrjdq8k2wFUQOpFAaFsUuDT6ZXFZQL+4dPtKwK1HbtMdZeiBpY0qJGiKCJVSwIITFs2BBDRGL4jRrU5q8RVTEEVqyF1n7WAl1JoT30oN/3Gjbduq0vgBwpQ+XkR1IITL1cAzrNsaTO+FVlDdJGcfEAwdp8iGCBWIW04EsEq/2SGtz16p/IAtI/Ib/Wggz6gwHpH0WDYXQwJB+uZg5tiiYcSbngO2OORtPb9+Hs+uP403lC0+ToIDkIDzKG4fD4+CQ8TfaT8OQIT+jpcHg6YIdn5Iaa/Lzn1RnFUxPOFBW6ksqEU0xrxc1qV+0lfQrpA57vHx4Phif9/hnhIi1qhtM6uZQl5UI7RU5Dhioci1Qyi7KjgjSvxQKZA/mDqp0Nu0hT1DocSWGULMJbn6XhL13kLdxnd4rChLNVheG1yxa9qwIhteBZ1iG9twz6WYjpxdX4+nbyYfKpQ/k8nYY3SpqfS8j9M1JKhudJIdMFOEpssJBWVcFTx9/eF/0Cqky+YGqZUSnLdsM9mVApqUaS4Y8N6EMbQKkfXnlt7UKS1YW3cZeCsGUC9KFT8wzLl4FvVQyiuwZs5YAIKmpyCMDWoPXaViyukEFkVI3Biz5u2/sASjS5tHWvkto5yGJE0HteUjSq5Vp1rQqIIDem0lGv1xgUVJh2T9MlXwmTFrJme6kse+PRVY9WvLc8hACWVHGadP7wV74vZN2+bRsZrQsD0b8Obp25uuPv1L7JYyVU89S2io0XWtuge7n9dzI2iolrG69JOyGXs1xk0kly44Ps30jGwqCqFNdIJgyF4WZFRvbhrrvdYoYKRYrwnw1wJIvCU4BUSi45Q01MjoShobzQRGbuV9eVrVnIiA+SJplU7uR1K96MJ6O31uuotNd8uNffc4lsA11Sx5Muh57HesvkjZb3/2zfXRA3unEb+BRtumy+e/bC+wBym+3RHTRNQjX+roq2tdtfa7Ql+O7+W766jGdc2zWDKKOFxh+46M1tx7635CXbuk0qVo4WfjKAABa4WpO4vW/XXdzp90eb5Xzj6hb6Wtb2h8psSH1XJ7fYf3M9nUEASTfllL4gKfpo6wl9hAhiaOJYxX58ibcHmNiNMPHWEBPbMcZdaGOw7P0HyRx4iw==",sidebar_class_name:"post api-method",info_path:"saviynt/saviynt-enterprise-identity-cloud-api-reference",custom_edit_url:null},sidebar:"saviyntSidebar",previous:{title:"updateDatasetValues",permalink:"/saviynt/updatedatasetvalues"},next:{title:"uploadDatasetCSV",permalink:"/saviynt/uploaddatasetcsv"}},J={},w=[];function S(e){const s={code:"code",p:"p",...(0,i.R)(),...e.components},{Details:a}=s;return a||function(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(b.default,{as:"h1",className:"openapi__heading",children:"deleteDataset"}),"\n",(0,t.jsx)(r(),{method:"post",path:"/deleteDataset"}),"\n",(0,t.jsx)(s.p,{children:"This API is used to delete a dataset."}),"\n",(0,t.jsxs)(s.p,{children:["The ",(0,t.jsx)(s.code,{children:"Authorization"})," must have a ",(0,t.jsx)(s.code,{children:"Bearer"})," followed by a ",(0,t.jsx)(s.code,{children:"Token"}),"."]}),"\n",(0,t.jsx)(s.p,{children:"Mandatory parameters:"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.code,{children:"datasetname"})}),"\n",(0,t.jsx)(b.default,{id:"request",as:"h2",className:"openapi-tabs__heading",children:"Request"}),"\n",(0,t.jsxs)(a,{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0,children:[(0,t.jsx)("summary",{style:{},children:(0,t.jsx)("h3",{className:"openapi-markdown__details-summary-header-params",children:(0,t.jsx)(s.p,{children:"Path Parameters"})})}),(0,t.jsx)("div",{children:(0,t.jsx)("ul",{children:(0,t.jsx)(h(),{className:"paramsItem",param:{name:"path",in:"path",required:!0,schema:{type:"string"}}})})})]}),"\n",(0,t.jsx)(p(),{className:"openapi-tabs__mime",children:(0,t.jsx)(f.default,{label:"text/plain",value:"text/plain-schema",children:(0,t.jsxs)(a,{style:{},className:"openapi-markdown__details mime","data-collapsed":!1,open:!0,children:[(0,t.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-mime",children:(0,t.jsx)("h3",{className:"openapi-markdown__details-summary-header-body",children:(0,t.jsx)(s.p,{children:"Body"})})}),(0,t.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,t.jsx)("ul",{style:{marginLeft:"1rem"},children:(0,t.jsx)(s.p,{children:"any"})})]})})}),"\n",(0,t.jsx)("div",{children:(0,t.jsx)("div",{children:(0,t.jsx)(n(),{label:void 0,id:void 0,children:(0,t.jsxs)(f.default,{label:"200",value:"200",children:[(0,t.jsx)("div",{children:(0,t.jsx)(s.p,{children:"deleteDataset"})}),(0,t.jsxs)(a,{style:{textAlign:"left",marginBottom:"1rem"},className:"openapi-markdown__details","data-collaposed":!0,open:!1,children:[(0,t.jsx)("summary",{style:{},children:(0,t.jsx)("strong",{children:(0,t.jsx)(s.p,{children:"Response Headers"})})}),(0,t.jsxs)("ul",{style:{marginLeft:"1rem"},children:[(0,t.jsxs)("li",{className:"schemaItem",children:[(0,t.jsxs)("summary",{style:{},children:[(0,t.jsx)("strong",{children:(0,t.jsx)(s.p,{children:"Connection"})}),(0,t.jsx)("span",{style:{opacity:"0.6"},children:(0,t.jsx)(s.p,{children:"string"})})]}),(0,t.jsx)("div",{})]}),(0,t.jsxs)("li",{className:"schemaItem",children:[(0,t.jsxs)("summary",{style:{},children:[(0,t.jsx)("strong",{children:(0,t.jsx)(s.p,{children:"Date"})}),(0,t.jsx)("span",{style:{opacity:"0.6"},children:(0,t.jsx)(s.p,{children:"string"})})]}),(0,t.jsx)("div",{})]}),(0,t.jsxs)("li",{className:"schemaItem",children:[(0,t.jsxs)("summary",{style:{},children:[(0,t.jsx)("strong",{children:(0,t.jsx)(s.p,{children:"Set-Cookie"})}),(0,t.jsx)("span",{style:{opacity:"0.6"},children:(0,t.jsx)(s.p,{children:"string"})})]}),(0,t.jsx)("div",{})]}),(0,t.jsxs)("li",{className:"schemaItem",children:[(0,t.jsxs)("summary",{style:{},children:[(0,t.jsx)("strong",{children:(0,t.jsx)(s.p,{children:"Strict-Transport-Security"})}),(0,t.jsx)("span",{style:{opacity:"0.6"},children:(0,t.jsx)(s.p,{children:"string"})})]}),(0,t.jsx)("div",{})]}),(0,t.jsxs)("li",{className:"schemaItem",children:[(0,t.jsxs)("summary",{style:{},children:[(0,t.jsx)("strong",{children:(0,t.jsx)(s.p,{children:"Transfer-Encoding"})}),(0,t.jsx)("span",{style:{opacity:"0.6"},children:(0,t.jsx)(s.p,{children:"string"})})]}),(0,t.jsx)("div",{})]}),(0,t.jsxs)("li",{className:"schemaItem",children:[(0,t.jsxs)("summary",{style:{},children:[(0,t.jsx)("strong",{children:(0,t.jsx)(s.p,{children:"Vary"})}),(0,t.jsx)("span",{style:{opacity:"0.6"},children:(0,t.jsx)(s.p,{children:"string"})})]}),(0,t.jsx)("div",{})]}),(0,t.jsxs)("li",{className:"schemaItem",children:[(0,t.jsxs)("summary",{style:{},children:[(0,t.jsx)("strong",{children:(0,t.jsx)(s.p,{children:"X-Content-Type-Options"})}),(0,t.jsx)("span",{style:{opacity:"0.6"},children:(0,t.jsx)(s.p,{children:"string"})})]}),(0,t.jsx)("div",{})]}),(0,t.jsxs)("li",{className:"schemaItem",children:[(0,t.jsxs)("summary",{style:{},children:[(0,t.jsx)("strong",{children:(0,t.jsx)(s.p,{children:"X-Frame-Options"})}),(0,t.jsx)("span",{style:{opacity:"0.6"},children:(0,t.jsx)(s.p,{children:"string"})})]}),(0,t.jsx)("div",{})]}),(0,t.jsxs)("li",{className:"schemaItem",children:[(0,t.jsxs)("summary",{style:{},children:[(0,t.jsx)("strong",{children:(0,t.jsx)(s.p,{children:"X-XSS-Protection"})}),(0,t.jsx)("span",{style:{opacity:"0.6"},children:(0,t.jsx)(s.p,{children:"string"})})]}),(0,t.jsx)("div",{})]})]})]}),(0,t.jsx)("div",{children:(0,t.jsx)(p(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,t.jsx)(f.default,{label:"application/json",value:"application/json",children:(0,t.jsxs)(g(),{className:"openapi-tabs__schema",children:[(0,t.jsx)(f.default,{label:"Schema",value:"Schema",children:(0,t.jsxs)(a,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,t.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,t.jsx)("strong",{children:(0,t.jsx)(s.p,{children:"Schema"})})}),(0,t.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,t.jsxs)("ul",{style:{marginLeft:"1rem"},children:[(0,t.jsx)(u(),{collapsible:!1,name:"errorCode",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"0"}}),(0,t.jsx)(u(),{collapsible:!1,name:"msg",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"Successful"}})]})]})}),(0,t.jsx)(f.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,t.jsx)(x(),{responseExample:'{\n  "errorCode": "0",\n  "msg": "Successful"\n}',language:"json"})}),(0,t.jsx)(f.default,{label:"deleteDataset",value:"deleteDataset",children:(0,t.jsx)(x(),{responseExample:'{\n  "errorCode": "0",\n  "msg": "Successful"\n}',language:"json"})})]})})})})]})})})})]})}function k(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(S,{...e})}):S(e)}}}]);