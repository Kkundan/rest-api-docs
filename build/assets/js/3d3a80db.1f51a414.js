"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[4924],{60316:(e,s,a)=>{a.r(s),a.d(s,{assets:()=>N,contentTitle:()=>f,default:()=>k,frontMatter:()=>v,metadata:()=>q,toc:()=>T});var i=a(74848),t=a(28453),l=a(91366),n=a.n(l),r=(a(6050),a(57742)),d=a.n(r),c=(a(67792),a(27362)),m=a.n(c),p=(a(36683),a(81124)),o=a.n(p),h=a(60674),u=a.n(h),x=a(23397),j=a.n(x),y=(a(26651),a(51107)),g=(a(77675),a(19365));const v={id:"validate-user-data",title:"Validate User Data",description:"This API will validate the attribute values of an existing user.",sidebar_label:"Validate User Data",hide_title:!0,hide_table_of_contents:!0,api:"eJztVm1v4zYM/isCP22AnTe0u87bDeiluUM39Fq0uWFAWyC0zcS62JJPktN6Qf77QNl5KRq06XD7tnyJRD+mH1LiQy7B4cxCdAtfLBkL9wGkZBMjSye1ggjGmbTi9OpcPMg8FwvMZYqOhMtIoHNGxpUjNldkhZ4KVIIepXVSzURlyXTu1J0aZyQmp5XLtJF/IzueiKKyTmS4IDH5QGjITMRU57l+oFTEtZiM9ZzUxL9+gSpFp00tSjRY2IiNE/ausKAJ7y49Xcx3EQwQpdElGSfJilzOSUySyjpdtOb613543PttEohJlpS88WvaWU+lsc5/JxCTHLdr69BVdk41bwpUOOMYyCUdCIC9+0DPU4hgnTVO8Rk6hAAMfavIug86rSFaQqKVI+V4iWWZy8S/3P1q+QyWYJOMCuSVq0uCCHT8lRIHAWzj46eUlP0dlHVGqhkEQI9YlDmbHFnXh1UAm7hexv+uM8Xw7CDPA4auk/Qy/EyT57E+xpfRX1NNsFqtNjYf7p/r28iJFT6z0RL8Zdxmow35ScRNWOuoWuq7zBt6u+w2FDwLQ7bUyjY0Br0e/z2tmz3cAsgIU66yaAln6Gjv0e6JflxRIHpH4owSMej1T0T/XXTUjwYD8eliDMznhsyCzKH+TktMMgqHutaOuv1Ov/XhwqHWc3kwr+Hw5vpjOL78Y/T5/TH+hPGgPwj7R/EgPBoghth/dxz2Tn7GExqkg6M4/kVcocved/3nxgaVnZIJRyrRKbs+8KtJVqk5pd7JX+GwqZxwXJcUNjJgD/WktFVyOm09fTRYvNnFzenF6PL6/NP55+Z6fq9CNkaboU5fKYseV1BhZ69wrJKErGVsq0RSq2uyVe6+i6SYit6gKGv4AYrSIg8TlCnmti3Qt6nENtXQgzadm5ztT9laWZjgU2FpTdkTwI6u7LD0RAtymeYeUWrrk48ugwi6e1qG9TXOvXoJlckhgsy50kbd7tKRQuVWHYsLWSuX5LpKO4kuuqPhRRdL2V0c+0iMxLjNSvPKc91q7TwGTNGHu8nxarW6ZxpJZaSrb/gqN75itDLh/r5zQsyNSXsURA2GTzP23f41tAf5wuTSud52y9H6wP8bfQ9Aqqn2zKRrqqfJqRgpR6Y00pI4T0k56Wox5ET76eiapmRIJQR7B6ihznNK2MITyUKmZP0IlZJDmfvJibe2KkttHKWiuRdWTLXxT15n8cPofPgjnzIZ23z5uNPreIXgu1WgF6A22L3d6QnvnZnk/xnwX82A7dV29Oi6ZY7Sz1G+cJdtmd8+nwzvA8hYCaJbWC5jtPTF5KsVm79VZGqIbu+3hcy71Xqq8Lowp5r78k5PbBSMpe55Q1oF6zdOk4RK9yL2fkesri5vxhBA3E6vRaOeBh94ssUHiOAO7sDPwZtu6u1LyFHNKpz5ivN++fcP7tpK7A==",sidebar_class_name:"post api-method",info_path:"saviynt/saviynt-enterprise-identity-cloud-api-reference",custom_edit_url:null},f=void 0,q={id:"saviynt/validate-user-data",title:"Validate User Data",description:"This API will validate the attribute values of an existing user.",source:"@site/docs/saviynt/validate-user-data.api.mdx",sourceDirName:"saviynt",slug:"/saviynt/validate-user-data",permalink:"/saviynt/validate-user-data",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"validate-user-data",title:"Validate User Data",description:"This API will validate the attribute values of an existing user.",sidebar_label:"Validate User Data",hide_title:!0,hide_table_of_contents:!0,api:"eJztVm1v4zYM/isCP22AnTe0u87bDeiluUM39Fq0uWFAWyC0zcS62JJPktN6Qf77QNl5KRq06XD7tnyJRD+mH1LiQy7B4cxCdAtfLBkL9wGkZBMjSye1ggjGmbTi9OpcPMg8FwvMZYqOhMtIoHNGxpUjNldkhZ4KVIIepXVSzURlyXTu1J0aZyQmp5XLtJF/IzueiKKyTmS4IDH5QGjITMRU57l+oFTEtZiM9ZzUxL9+gSpFp00tSjRY2IiNE/ausKAJ7y49Xcx3EQwQpdElGSfJilzOSUySyjpdtOb613543PttEohJlpS88WvaWU+lsc5/JxCTHLdr69BVdk41bwpUOOMYyCUdCIC9+0DPU4hgnTVO8Rk6hAAMfavIug86rSFaQqKVI+V4iWWZy8S/3P1q+QyWYJOMCuSVq0uCCHT8lRIHAWzj46eUlP0dlHVGqhkEQI9YlDmbHFnXh1UAm7hexv+uM8Xw7CDPA4auk/Qy/EyT57E+xpfRX1NNsFqtNjYf7p/r28iJFT6z0RL8Zdxmow35ScRNWOuoWuq7zBt6u+w2FDwLQ7bUyjY0Br0e/z2tmz3cAsgIU66yaAln6Gjv0e6JflxRIHpH4owSMej1T0T/XXTUjwYD8eliDMznhsyCzKH+TktMMgqHutaOuv1Ov/XhwqHWc3kwr+Hw5vpjOL78Y/T5/TH+hPGgPwj7R/EgPBoghth/dxz2Tn7GExqkg6M4/kVcocved/3nxgaVnZIJRyrRKbs+8KtJVqk5pd7JX+GwqZxwXJcUNjJgD/WktFVyOm09fTRYvNnFzenF6PL6/NP55+Z6fq9CNkaboU5fKYseV1BhZ69wrJKErGVsq0RSq2uyVe6+i6SYit6gKGv4AYrSIg8TlCnmti3Qt6nENtXQgzadm5ztT9laWZjgU2FpTdkTwI6u7LD0RAtymeYeUWrrk48ugwi6e1qG9TXOvXoJlckhgsy50kbd7tKRQuVWHYsLWSuX5LpKO4kuuqPhRRdL2V0c+0iMxLjNSvPKc91q7TwGTNGHu8nxarW6ZxpJZaSrb/gqN75itDLh/r5zQsyNSXsURA2GTzP23f41tAf5wuTSud52y9H6wP8bfQ9Aqqn2zKRrqqfJqRgpR6Y00pI4T0k56Wox5ET76eiapmRIJQR7B6ihznNK2MITyUKmZP0IlZJDmfvJibe2KkttHKWiuRdWTLXxT15n8cPofPgjnzIZ23z5uNPreIXgu1WgF6A22L3d6QnvnZnk/xnwX82A7dV29Oi6ZY7Sz1G+cJdtmd8+nwzvA8hYCaJbWC5jtPTF5KsVm79VZGqIbu+3hcy71Xqq8Lowp5r78k5PbBSMpe55Q1oF6zdOk4RK9yL2fkesri5vxhBA3E6vRaOeBh94ssUHiOAO7sDPwZtu6u1LyFHNKpz5ivN++fcP7tpK7A==",sidebar_class_name:"post api-method",info_path:"saviynt/saviynt-enterprise-identity-cloud-api-reference",custom_edit_url:null},sidebar:"saviyntSidebar",previous:{title:"Authenticate User",permalink:"/saviynt/authenticate-user"},next:{title:"Get SavRoles",permalink:"/saviynt/get-savroles"}},N={},T=[];function b(e){const s={code:"code",p:"p",...(0,t.R)(),...e.components},{Details:a}=s;return a||function(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(y.default,{as:"h1",className:"openapi__heading",children:"Validate User Data"}),"\n",(0,i.jsx)(d(),{method:"post",path:"/validateUserData"}),"\n",(0,i.jsx)(s.p,{children:"This API will validate the attribute values of an existing user."}),"\n",(0,i.jsxs)(s.p,{children:["The ",(0,i.jsx)(s.code,{children:"Authorization"})," must have ",(0,i.jsx)(s.code,{children:"Bearer"})," followed by ",(0,i.jsx)(s.code,{children:"Token"}),"."]}),"\n",(0,i.jsx)(s.p,{children:"Mandatory params:"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.code,{children:"username"})}),"\n",(0,i.jsx)(s.p,{children:"Optional params:"}),"\n",(0,i.jsxs)(s.p,{children:["user properties like ",(0,i.jsx)(s.code,{children:"customproperty<1-50>"}),", ",(0,i.jsx)(s.code,{children:"hcp<1-5>"}),", ",(0,i.jsx)(s.code,{children:"ecp<1-5>"}),", ",(0,i.jsx)(s.code,{children:"firstname"}),", ",(0,i.jsx)(s.code,{children:"lastname"}),", ",(0,i.jsx)(s.code,{children:"statuskey"}),", ",(0,i.jsx)(s.code,{children:"manager"})," etc."]}),"\n",(0,i.jsx)(y.default,{id:"request",as:"h2",className:"openapi-tabs__heading",children:"Request"}),"\n",(0,i.jsx)(m(),{className:"openapi-tabs__mime",children:(0,i.jsx)(g.default,{label:"application/json",value:"application/json-schema",children:(0,i.jsxs)(a,{style:{},className:"openapi-markdown__details mime","data-collapsed":!1,open:!0,children:[(0,i.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-mime",children:(0,i.jsx)("h3",{className:"openapi-markdown__details-summary-header-body",children:(0,i.jsx)(s.p,{children:"Body"})})}),(0,i.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.jsxs)("ul",{style:{marginLeft:"1rem"},children:[(0,i.jsx)(u(),{collapsible:!1,name:"ecp1",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"test1"}}),(0,i.jsx)(u(),{collapsible:!1,name:"firstname",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"John"}}),(0,i.jsx)(u(),{collapsible:!1,name:"hcp1",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"test2"}}),(0,i.jsx)(u(),{collapsible:!1,name:"lastname",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"Doe1"}}),(0,i.jsx)(u(),{collapsible:!1,name:"username",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"jdoe"}})]})]})})}),"\n",(0,i.jsx)("div",{children:(0,i.jsx)("div",{children:(0,i.jsx)(n(),{label:void 0,id:void 0,children:(0,i.jsxs)(g.default,{label:"200",value:"200",children:[(0,i.jsx)("div",{children:(0,i.jsx)(s.p,{children:"Validate User Data"})}),(0,i.jsxs)(a,{style:{textAlign:"left",marginBottom:"1rem"},className:"openapi-markdown__details","data-collaposed":!0,open:!1,children:[(0,i.jsx)("summary",{style:{},children:(0,i.jsx)("strong",{children:(0,i.jsx)(s.p,{children:"Response Headers"})})}),(0,i.jsxs)("ul",{style:{marginLeft:"1rem"},children:[(0,i.jsxs)("li",{className:"schemaItem",children:[(0,i.jsxs)("summary",{style:{},children:[(0,i.jsx)("strong",{children:(0,i.jsx)(s.p,{children:"Date"})}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:(0,i.jsx)(s.p,{children:"string"})})]}),(0,i.jsx)("div",{})]}),(0,i.jsxs)("li",{className:"schemaItem",children:[(0,i.jsxs)("summary",{style:{},children:[(0,i.jsx)("strong",{children:(0,i.jsx)(s.p,{children:"Server"})}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:(0,i.jsx)(s.p,{children:"string"})})]}),(0,i.jsx)("div",{})]}),(0,i.jsxs)("li",{className:"schemaItem",children:[(0,i.jsxs)("summary",{style:{},children:[(0,i.jsx)("strong",{children:(0,i.jsx)(s.p,{children:"Set-Cookie"})}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:(0,i.jsx)(s.p,{children:"string"})})]}),(0,i.jsx)("div",{})]}),(0,i.jsxs)("li",{className:"schemaItem",children:[(0,i.jsxs)("summary",{style:{},children:[(0,i.jsx)("strong",{children:(0,i.jsx)(s.p,{children:"Transfer-Encoding"})}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:(0,i.jsx)(s.p,{children:"string"})})]}),(0,i.jsx)("div",{})]}),(0,i.jsxs)("li",{className:"schemaItem",children:[(0,i.jsxs)("summary",{style:{},children:[(0,i.jsx)("strong",{children:(0,i.jsx)(s.p,{children:"X-Content-Type-Options"})}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:(0,i.jsx)(s.p,{children:"string"})})]}),(0,i.jsx)("div",{})]}),(0,i.jsxs)("li",{className:"schemaItem",children:[(0,i.jsxs)("summary",{style:{},children:[(0,i.jsx)("strong",{children:(0,i.jsx)(s.p,{children:"X-Frame-Options"})}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:(0,i.jsx)(s.p,{children:"string"})})]}),(0,i.jsx)("div",{})]})]})]}),(0,i.jsx)("div",{children:(0,i.jsx)(m(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,i.jsx)(g.default,{label:"application/json",value:"application/json",children:(0,i.jsxs)(j(),{className:"openapi-tabs__schema",children:[(0,i.jsx)(g.default,{label:"Schema",value:"Schema",children:(0,i.jsxs)(a,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,i.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,i.jsx)("strong",{children:(0,i.jsx)(s.p,{children:"Schema"})})}),(0,i.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.jsxs)("ul",{style:{marginLeft:"1rem"},children:[(0,i.jsx)(u(),{collapsible:!1,name:"errorCode",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"0"}}),(0,i.jsx)(u(),{collapsible:!1,name:"msg",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"Success"}}),(0,i.jsx)(u(),{collapsible:!0,className:"schemaItem",children:(0,i.jsxs)(a,{style:{},className:"openapi-markdown__details",children:[(0,i.jsx)("summary",{style:{},children:(0,i.jsxs)("span",{className:"openapi-schema__container",children:[(0,i.jsx)("strong",{className:"openapi-schema__property",children:(0,i.jsx)(s.p,{children:"validationResult"})}),(0,i.jsx)("span",{className:"openapi-schema__name",children:(0,i.jsx)(s.p,{children:"object"})})]})}),(0,i.jsxs)("div",{style:{marginLeft:"1rem"},children:[(0,i.jsx)(u(),{collapsible:!1,name:"ecp1",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"true"}}),(0,i.jsx)(u(),{collapsible:!1,name:"firstname",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"true"}}),(0,i.jsx)(u(),{collapsible:!1,name:"hcp1",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"true"}}),(0,i.jsx)(u(),{collapsible:!1,name:"lastname",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"false"}})]})]})})]})]})}),(0,i.jsx)(g.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,i.jsx)(o(),{responseExample:'{\n  "errorCode": "0",\n  "msg": "Success",\n  "validationResult": {\n    "ecp1": "true",\n    "firstname": "true",\n    "hcp1": "true",\n    "lastname": "false"\n  }\n}',language:"json"})}),(0,i.jsx)(g.default,{label:"Validate User Data",value:"Validate User Data",children:(0,i.jsx)(o(),{responseExample:'{\n  "errorCode": "0",\n  "msg": "Success",\n  "validationResult": {\n    "ecp1": "true",\n    "firstname": "true",\n    "hcp1": "true",\n    "lastname": "false"\n  }\n}',language:"json"})})]})})})})]})})})})]})}function k(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(b,{...e})}):b(e)}}}]);