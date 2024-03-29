"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[1810],{96726:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>C,contentTitle:()=>k,default:()=>M,frontMatter:()=>f,metadata:()=>w,toc:()=>S});var i=t(74848),a=t(28453),r=t(91366),n=t.n(r),l=(t(6050),t(57742)),c=t.n(l),o=(t(67792),t(27362)),d=t.n(o),m=t(36683),p=t.n(m),h=t(81124),j=t.n(h),x=t(60674),u=t.n(x),b=t(23397),y=t.n(b),g=(t(26651),t(51107)),v=(t(77675),t(19365));const f={id:"check-import-status",title:"Check Import Status",description:"This API is used to check the status of data import job.",sidebar_label:"Check Import Status",hide_title:!0,hide_table_of_contents:!0,api:"eJzVVdtu2zgQ/ZXBPLWAbMtO0mZV9MHruoWxmwtiFyiQBvBIGkdMJFIlR956Df37gpTbXOomeV3AgGRqLmcu53CLQtcOk0scxv0YJqaqjIbPokolih1eRZizy6yqRRmNCS4K5WB8PgPloHGcgxjICs5uQQoGJySNA7OCnIRAVbWxAjcm7cNX/VWfGuEEpCAB/wNRFUdgdLkBo/meOWSkIWWwje57x0XBsBw3Uhir/iUPZQlV4wQKWjMs/2SybJewMmVp/uEc0g0sF+aW9bJLCzVZqhxGaGq2IcAsxwQD8llIOw/QMULLrjbascNki6M49o+HPZiEejs3+OlXMOVsg9cHEvZPlxVckX+TTc2YoBOr9DVGyN+pqksODW0iiEcwbq5hFA+PYRQnh8fJwQg+nSywbSOcs12zfWm8cU1Zwb2J2RjhwbA/3MWQ3sSYW/ViXJPJ/OJjb3H21/T0/dFqlMbx4ZveQZ4Oe4dHh3/0KB0e9NI3bw/eUkbpMdE7OCcp3g9CuoUl7VZse1OdmdyHfmHWrGj0LechyJfeR0sV985C391LQ8zHJ9Ozi9mn2Sm2PkxmtLAW70R1XaosjH9w4/ws94Q06Q1nghHW1i9LoEGyRbbW2InJ+ensMbZRZ3vCztH1M+beWt3fv6dncnZy/vd0Mf3QVbb7EJz27WSyxTWVDT+CjzE+hoj4GMbDXG3IF0jEEpb8couaKu9akxTeXd+9W/7WKMs5JmIbjn47tra9irBiKYwnY21caLuPkeBgHzddoEKXvrElJliI1C4ZDLbCmrS0fUdrtdGSlabJ+5mpBtPJyYBqNVgfYYRrsorSXc86l1/5vTv30reiphRMfs6gDZAdZ41Vspn7urpYKTmVeYW6V6XHhrvq/f9g4yeeBr16zjoYBSYovTLBUkm34l2NMNXCtrbKMcxy1qJkAxNfeFDoC16xZZ0x7hXxiSlLzvwJ1NasVc4uaHjOQqoMIh4kvan9CDiHblAOVsaGL8+jeDWdTV77rrN1XeajftwPFPHDrigwcLdH+1X1AfDtHZn/9xfRburC32VQl6S070rY6e2OApd7rqerCAtPk+QSt9uUHH+2Zdv6428N2w0ml1d3Sx5okivn33NMVlQ6fqKjry52tH0Nv8O3OyS9CVwK2uK145Y3P9jfXrU/7sKQv/s0zjKu5Z7TL1L8QArOz+b+7vsPqUHwwQ==",sidebar_class_name:"post api-method",info_path:"saviynt/saviynt-enterprise-identity-cloud-api-reference",custom_edit_url:null},k=void 0,w={id:"saviynt/check-import-status",title:"Check Import Status",description:"This API is used to check the status of data import job.",source:"@site/docs/saviynt/check-import-status.api.mdx",sourceDirName:"saviynt",slug:"/saviynt/check-import-status",permalink:"/api-editor.github.io/saviynt/check-import-status",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"check-import-status",title:"Check Import Status",description:"This API is used to check the status of data import job.",sidebar_label:"Check Import Status",hide_title:!0,hide_table_of_contents:!0,api:"eJzVVdtu2zgQ/ZXBPLWAbMtO0mZV9MHruoWxmwtiFyiQBvBIGkdMJFIlR956Df37gpTbXOomeV3AgGRqLmcu53CLQtcOk0scxv0YJqaqjIbPokolih1eRZizy6yqRRmNCS4K5WB8PgPloHGcgxjICs5uQQoGJySNA7OCnIRAVbWxAjcm7cNX/VWfGuEEpCAB/wNRFUdgdLkBo/meOWSkIWWwje57x0XBsBw3Uhir/iUPZQlV4wQKWjMs/2SybJewMmVp/uEc0g0sF+aW9bJLCzVZqhxGaGq2IcAsxwQD8llIOw/QMULLrjbascNki6M49o+HPZiEejs3+OlXMOVsg9cHEvZPlxVckX+TTc2YoBOr9DVGyN+pqksODW0iiEcwbq5hFA+PYRQnh8fJwQg+nSywbSOcs12zfWm8cU1Zwb2J2RjhwbA/3MWQ3sSYW/ViXJPJ/OJjb3H21/T0/dFqlMbx4ZveQZ4Oe4dHh3/0KB0e9NI3bw/eUkbpMdE7OCcp3g9CuoUl7VZse1OdmdyHfmHWrGj0LechyJfeR0sV985C391LQ8zHJ9Ozi9mn2Sm2PkxmtLAW70R1XaosjH9w4/ws94Q06Q1nghHW1i9LoEGyRbbW2InJ+ensMbZRZ3vCztH1M+beWt3fv6dncnZy/vd0Mf3QVbb7EJz27WSyxTWVDT+CjzE+hoj4GMbDXG3IF0jEEpb8couaKu9akxTeXd+9W/7WKMs5JmIbjn47tra9irBiKYwnY21caLuPkeBgHzddoEKXvrElJliI1C4ZDLbCmrS0fUdrtdGSlabJ+5mpBtPJyYBqNVgfYYRrsorSXc86l1/5vTv30reiphRMfs6gDZAdZ41Vspn7urpYKTmVeYW6V6XHhrvq/f9g4yeeBr16zjoYBSYovTLBUkm34l2NMNXCtrbKMcxy1qJkAxNfeFDoC16xZZ0x7hXxiSlLzvwJ1NasVc4uaHjOQqoMIh4kvan9CDiHblAOVsaGL8+jeDWdTV77rrN1XeajftwPFPHDrigwcLdH+1X1AfDtHZn/9xfRburC32VQl6S070rY6e2OApd7rqerCAtPk+QSt9uUHH+2Zdv6428N2w0ml1d3Sx5okivn33NMVlQ6fqKjry52tH0Nv8O3OyS9CVwK2uK145Y3P9jfXrU/7sKQv/s0zjKu5Z7TL1L8QArOz+b+7vsPqUHwwQ==",sidebar_class_name:"post api-method",info_path:"saviynt/saviynt-enterprise-identity-cloud-api-reference",custom_edit_url:null},sidebar:"saviyntSidebar",previous:{title:"Import Application Data",permalink:"/api-editor.github.io/saviynt/import-application-data"},next:{title:"Force Complete",permalink:"/api-editor.github.io/saviynt/force-complete"}},C={},S=[];function V(e){const s={code:"code",p:"p",...(0,a.R)(),...e.components},{Details:t}=s;return t||function(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(g.default,{as:"h1",className:"openapi__heading",children:"Check Import Status"}),"\n",(0,i.jsx)(c(),{method:"post",path:"/checkImportStatus"}),"\n",(0,i.jsx)(s.p,{children:"This API is used to check the status of data import job."}),"\n",(0,i.jsx)(s.p,{children:"Note: that at a time, only one import job can be run."}),"\n",(0,i.jsxs)(s.p,{children:["The ",(0,i.jsx)(s.code,{children:"Authorization"})," must have ",(0,i.jsx)(s.code,{children:"Bearer"})," followed by ",(0,i.jsx)(s.code,{children:"Token"})]}),"\n",(0,i.jsx)(s.p,{children:"No params"}),"\n",(0,i.jsx)(g.default,{id:"request",as:"h2",className:"openapi-tabs__heading",children:"Request"}),"\n",(0,i.jsxs)(t,{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0,children:[(0,i.jsx)("summary",{style:{},children:(0,i.jsx)("h3",{className:"openapi-markdown__details-summary-header-params",children:(0,i.jsx)(s.p,{children:"Path Parameters"})})}),(0,i.jsx)("div",{children:(0,i.jsx)("ul",{children:(0,i.jsx)(p(),{className:"paramsItem",param:{name:"path",in:"path",required:!0,schema:{type:"string"}}})})})]}),"\n",(0,i.jsx)("div",{children:(0,i.jsx)("div",{children:(0,i.jsx)(n(),{label:void 0,id:void 0,children:(0,i.jsxs)(v.default,{label:"200",value:"200",children:[(0,i.jsx)("div",{children:(0,i.jsx)(s.p,{children:"Check Import Status"})}),(0,i.jsxs)(t,{style:{textAlign:"left",marginBottom:"1rem"},className:"openapi-markdown__details","data-collaposed":!0,open:!1,children:[(0,i.jsx)("summary",{style:{},children:(0,i.jsx)("strong",{children:(0,i.jsx)(s.p,{children:"Response Headers"})})}),(0,i.jsxs)("ul",{style:{marginLeft:"1rem"},children:[(0,i.jsxs)("li",{className:"schemaItem",children:[(0,i.jsxs)("summary",{style:{},children:[(0,i.jsx)("strong",{children:(0,i.jsx)(s.p,{children:"Date"})}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:(0,i.jsx)(s.p,{children:"string"})})]}),(0,i.jsx)("div",{})]}),(0,i.jsxs)("li",{className:"schemaItem",children:[(0,i.jsxs)("summary",{style:{},children:[(0,i.jsx)("strong",{children:(0,i.jsx)(s.p,{children:"Server"})}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:(0,i.jsx)(s.p,{children:"string"})})]}),(0,i.jsx)("div",{})]}),(0,i.jsxs)("li",{className:"schemaItem",children:[(0,i.jsxs)("summary",{style:{},children:[(0,i.jsx)("strong",{children:(0,i.jsx)(s.p,{children:"Set-Cookie"})}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:(0,i.jsx)(s.p,{children:"string"})})]}),(0,i.jsx)("div",{})]}),(0,i.jsxs)("li",{className:"schemaItem",children:[(0,i.jsxs)("summary",{style:{},children:[(0,i.jsx)("strong",{children:(0,i.jsx)(s.p,{children:"Transfer-Encoding"})}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:(0,i.jsx)(s.p,{children:"string"})})]}),(0,i.jsx)("div",{})]}),(0,i.jsxs)("li",{className:"schemaItem",children:[(0,i.jsxs)("summary",{style:{},children:[(0,i.jsx)("strong",{children:(0,i.jsx)(s.p,{children:"X-Frame-Options"})}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:(0,i.jsx)(s.p,{children:"string"})})]}),(0,i.jsx)("div",{})]})]})]}),(0,i.jsx)("div",{children:(0,i.jsx)(d(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,i.jsx)(v.default,{label:"application/json",value:"application/json",children:(0,i.jsxs)(y(),{className:"openapi-tabs__schema",children:[(0,i.jsx)(v.default,{label:"Schema",value:"Schema",children:(0,i.jsxs)(t,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,i.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,i.jsx)("strong",{children:(0,i.jsx)(s.p,{children:"Schema"})})}),(0,i.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.jsxs)("ul",{style:{marginLeft:"1rem"},children:[(0,i.jsx)(u(),{collapsible:!1,name:"errorCode",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"0"}}),(0,i.jsx)(u(),{collapsible:!1,name:"errorMessage",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:""}}),(0,i.jsx)(u(),{collapsible:!1,name:"importStatus",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"COMPLETED"}})]})]})}),(0,i.jsx)(v.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,i.jsx)(j(),{responseExample:'{\n  "errorCode": "0",\n  "errorMessage": "",\n  "importStatus": "COMPLETED"\n}',language:"json"})}),(0,i.jsx)(v.default,{label:"Check Import Status",value:"Check Import Status",children:(0,i.jsx)(j(),{responseExample:'{\n  "errorCode": "0",\n  "errorMessage": "",\n  "importStatus": "COMPLETED"\n}',language:"json"})})]})})})})]})})})})]})}function M(e={}){const{wrapper:s}={...(0,a.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(V,{...e})}):V(e)}}}]);