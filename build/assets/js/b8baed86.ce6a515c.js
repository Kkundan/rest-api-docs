"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[5703],{10526:(e,s,a)=>{a.r(s),a.d(s,{assets:()=>N,contentTitle:()=>S,default:()=>J,frontMatter:()=>v,metadata:()=>k,toc:()=>E});var t=a(74848),i=a(28453),r=a(91366),l=a.n(r),n=(a(6050),a(57742)),d=a.n(n),c=(a(67792),a(27362)),o=a.n(c),h=a(36683),m=a.n(h),p=a(81124),x=a.n(p),j=a(60674),u=a.n(j),y=a(23397),b=a.n(y),g=(a(26651),a(51107)),f=(a(77675),a(19365));const v={id:"check-job-status",title:"Check Job Status",description:"This API is used to fetch the status of any job other that Data Import Job.",sidebar_label:"Check Job Status",hide_title:!0,hide_table_of_contents:!0,api:"eJzdVm1v2zgM/isCP22AnbhB27U+7EPmZUV66AuSDDggKxBZZmq1tuRJdDZf4P9+kOysr1vz+QwEliWKfEg+JLMF4rcW4iUcRIOIJbostWJfSRaSJFoI4FynLNGKjC7gJoAMrTCyIqkVxLDIpWXj6ymTltUWM0aarZFEzihHZolTbZleM64adqdTpilHwyjnxD5z4mxaVtoQO9fp4Jv5ptxvkSNbjWvKtZH/cmdnxcraEsv5BtnqE3KDZsXWuij0D8xY2rDVQt+jWg3YTscFVxknbRpWccNLG/uT1Z1Ob42uq1Ww+1S8xBUEoCs03tY0gxhEjuL+XKdzjx8CMPi9RkufdNZAvAWhFaEityzrgmTFDQ3X2pRhxom7bStyLP2KmgohBp3eoSAIoDLOlo9tvIUdokeSloxUtxAA/uRlVbitseJFQ1JYaAPoUe9541yn0PrHeWErrWxneRRF7vU0nYlz3GWD/XI9R56h8Vc+c8JXnXsFwCKvAxaN2Li+ZaPo4ISNRnF0GB+dsrOLBTg0czQbNPvqG1dc5BgmutGEw4PBQa+DwkTre7k3riSZz76Ei6u/J5cfj0/SKD0Ux+GR+HAcHqYfDsPT48N1GPGT9GDET0diFP3FrjnlH4fe3MJwZddowokSOnOq97Qq8lrdY+aV/BN+MbzE8MoH3e6rYj6+mFzNpmfTS/DJfMRBXlWFFJ6+wzvrErk/AdEYbRKdvcGnyDGvtLd/lppehtezq7PZZD7vQPZH3tILbsVb2PCixmcwIILe1HN9HYt9RSN5Ti630NUCVJxyCECqh7UrWmkwg5hMjcFvo9y2NwGUSLl2tV9p66PkdMQwfNEKrKdtZ7s2BcSQE1U2Hg63hIorageWb2SjSBS6zgZCl8NJcjHklRxujiCADTeSp31QuisvC7Hfd+12zeuCIP4V5tbjtShqI6mZO6c6XSm3UrjG+chFhw161923l3G5TH0bfUvaC3nWSrXWXlJSR8fORzZRhKYy0iKbZqhIUsMS57ifCjNco0ElEF4dHIkuChRuh1VGb2SG1s+NDInLwg8OP0bqyk0JzFiXJcvW2viTt1G8m0yT9y7qaGxn+WgQDTydXaZL7qulJ9Er7e8J6ked/38z+frUE/6kYVVwqVxoPLG3fREsn8/DmwByVyXxErbblFv8aoq2ddvfazQNxMubB5r7QsmkdesM4jUvLP4hrO9mfdW+Z78D129y1fhq8h0EIIB7bHbF3960u8nl7XdHSWclXDgFD1dfG+FtsLs0FgIreiT+ots+aR/XV/MFBJD2/xTKrqU5xV5v8LCMlzdt2/4HhltACg==",sidebar_class_name:"post api-method",info_path:"saviynt/saviynt-enterprise-identity-cloud-api-reference",custom_edit_url:null},S=void 0,k={id:"saviynt/check-job-status",title:"Check Job Status",description:"This API is used to fetch the status of any job other that Data Import Job.",source:"@site/docs/saviynt/check-job-status.api.mdx",sourceDirName:"saviynt",slug:"/saviynt/check-job-status",permalink:"/saviynt/check-job-status",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"check-job-status",title:"Check Job Status",description:"This API is used to fetch the status of any job other that Data Import Job.",sidebar_label:"Check Job Status",hide_title:!0,hide_table_of_contents:!0,api:"eJzdVm1v2zgM/isCP22AnbhB27U+7EPmZUV66AuSDDggKxBZZmq1tuRJdDZf4P9+kOysr1vz+QwEliWKfEg+JLMF4rcW4iUcRIOIJbostWJfSRaSJFoI4FynLNGKjC7gJoAMrTCyIqkVxLDIpWXj6ymTltUWM0aarZFEzihHZolTbZleM64adqdTpilHwyjnxD5z4mxaVtoQO9fp4Jv5ptxvkSNbjWvKtZH/cmdnxcraEsv5BtnqE3KDZsXWuij0D8xY2rDVQt+jWg3YTscFVxknbRpWccNLG/uT1Z1Ob42uq1Ww+1S8xBUEoCs03tY0gxhEjuL+XKdzjx8CMPi9RkufdNZAvAWhFaEityzrgmTFDQ3X2pRhxom7bStyLP2KmgohBp3eoSAIoDLOlo9tvIUdokeSloxUtxAA/uRlVbitseJFQ1JYaAPoUe9541yn0PrHeWErrWxneRRF7vU0nYlz3GWD/XI9R56h8Vc+c8JXnXsFwCKvAxaN2Li+ZaPo4ISNRnF0GB+dsrOLBTg0czQbNPvqG1dc5BgmutGEw4PBQa+DwkTre7k3riSZz76Ei6u/J5cfj0/SKD0Ux+GR+HAcHqYfDsPT48N1GPGT9GDET0diFP3FrjnlH4fe3MJwZddowokSOnOq97Qq8lrdY+aV/BN+MbzE8MoH3e6rYj6+mFzNpmfTS/DJfMRBXlWFFJ6+wzvrErk/AdEYbRKdvcGnyDGvtLd/lppehtezq7PZZD7vQPZH3tILbsVb2PCixmcwIILe1HN9HYt9RSN5Ti630NUCVJxyCECqh7UrWmkwg5hMjcFvo9y2NwGUSLl2tV9p66PkdMQwfNEKrKdtZ7s2BcSQE1U2Hg63hIorageWb2SjSBS6zgZCl8NJcjHklRxujiCADTeSp31QuisvC7Hfd+12zeuCIP4V5tbjtShqI6mZO6c6XSm3UrjG+chFhw161923l3G5TH0bfUvaC3nWSrXWXlJSR8fORzZRhKYy0iKbZqhIUsMS57ifCjNco0ElEF4dHIkuChRuh1VGb2SG1s+NDInLwg8OP0bqyk0JzFiXJcvW2viTt1G8m0yT9y7qaGxn+WgQDTydXaZL7qulJ9Er7e8J6ked/38z+frUE/6kYVVwqVxoPLG3fREsn8/DmwByVyXxErbblFv8aoq2ddvfazQNxMubB5r7QsmkdesM4jUvLP4hrO9mfdW+Z78D129y1fhq8h0EIIB7bHbF3960u8nl7XdHSWclXDgFD1dfG+FtsLs0FgIreiT+ots+aR/XV/MFBJD2/xTKrqU5xV5v8LCMlzdt2/4HhltACg==",sidebar_class_name:"post api-method",info_path:"saviynt/saviynt-enterprise-identity-cloud-api-reference",custom_edit_url:null},sidebar:"saviyntSidebar",previous:{title:"Create and Update Trigger",permalink:"/saviynt/create-and-update-trigger"},next:{title:"Delete Trigger",permalink:"/saviynt/delete-trigger"}},N={},E=[];function D(e){const s={code:"code",p:"p",...(0,i.R)(),...e.components},{Details:a}=s;return a||function(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(g.default,{as:"h1",className:"openapi__heading",children:"Check Job Status"}),"\n",(0,t.jsx)(d(),{method:"post",path:"/checkJobStatus"}),"\n",(0,t.jsx)(s.p,{children:"This API is used to fetch the status of any job other that Data Import Job."}),"\n",(0,t.jsxs)(s.p,{children:["The ",(0,t.jsx)(s.code,{children:"Authorization"})," must have ",(0,t.jsx)(s.code,{children:"Bearer"})," followed by ",(0,t.jsx)(s.code,{children:"Token"}),"."]}),"\n",(0,t.jsxs)(s.p,{children:["Mandatory params:\r\n",(0,t.jsx)(s.code,{children:"jobgroup"}),",\r\n",(0,t.jsx)(s.code,{children:"jobname"})]}),"\n",(0,t.jsx)(g.default,{id:"request",as:"h2",className:"openapi-tabs__heading",children:"Request"}),"\n",(0,t.jsxs)(a,{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0,children:[(0,t.jsx)("summary",{style:{},children:(0,t.jsx)("h3",{className:"openapi-markdown__details-summary-header-params",children:(0,t.jsx)(s.p,{children:"Path Parameters"})})}),(0,t.jsx)("div",{children:(0,t.jsx)("ul",{children:(0,t.jsx)(m(),{className:"paramsItem",param:{name:"path",in:"path",required:!0,schema:{type:"string"}}})})})]}),"\n",(0,t.jsx)(o(),{className:"openapi-tabs__mime",children:(0,t.jsx)(f.default,{label:"multipart/form-data",value:"multipart/form-data-schema",children:(0,t.jsxs)(a,{style:{},className:"openapi-markdown__details mime","data-collapsed":!1,open:!0,children:[(0,t.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-mime",children:(0,t.jsx)("h3",{className:"openapi-markdown__details-summary-header-body",children:(0,t.jsx)(s.p,{children:"Body"})})}),(0,t.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,t.jsxs)("ul",{style:{marginLeft:"1rem"},children:[(0,t.jsx)(u(),{collapsible:!1,name:"jobgroup",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"Analytics"}}),(0,t.jsx)(u(),{collapsible:!1,name:"jobname",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"AnalyticsJob"}})]})]})})}),"\n",(0,t.jsx)("div",{children:(0,t.jsx)("div",{children:(0,t.jsx)(l(),{label:void 0,id:void 0,children:(0,t.jsxs)(f.default,{label:"200",value:"200",children:[(0,t.jsx)("div",{children:(0,t.jsx)(s.p,{children:"Check Job Status"})}),(0,t.jsxs)(a,{style:{textAlign:"left",marginBottom:"1rem"},className:"openapi-markdown__details","data-collaposed":!0,open:!1,children:[(0,t.jsx)("summary",{style:{},children:(0,t.jsx)("strong",{children:(0,t.jsx)(s.p,{children:"Response Headers"})})}),(0,t.jsxs)("ul",{style:{marginLeft:"1rem"},children:[(0,t.jsxs)("li",{className:"schemaItem",children:[(0,t.jsxs)("summary",{style:{},children:[(0,t.jsx)("strong",{children:(0,t.jsx)(s.p,{children:"Date"})}),(0,t.jsx)("span",{style:{opacity:"0.6"},children:(0,t.jsx)(s.p,{children:"string"})})]}),(0,t.jsx)("div",{})]}),(0,t.jsxs)("li",{className:"schemaItem",children:[(0,t.jsxs)("summary",{style:{},children:[(0,t.jsx)("strong",{children:(0,t.jsx)(s.p,{children:"Server"})}),(0,t.jsx)("span",{style:{opacity:"0.6"},children:(0,t.jsx)(s.p,{children:"string"})})]}),(0,t.jsx)("div",{})]}),(0,t.jsxs)("li",{className:"schemaItem",children:[(0,t.jsxs)("summary",{style:{},children:[(0,t.jsx)("strong",{children:(0,t.jsx)(s.p,{children:"Set-Cookie"})}),(0,t.jsx)("span",{style:{opacity:"0.6"},children:(0,t.jsx)(s.p,{children:"string"})})]}),(0,t.jsx)("div",{})]}),(0,t.jsxs)("li",{className:"schemaItem",children:[(0,t.jsxs)("summary",{style:{},children:[(0,t.jsx)("strong",{children:(0,t.jsx)(s.p,{children:"Transfer-Encoding"})}),(0,t.jsx)("span",{style:{opacity:"0.6"},children:(0,t.jsx)(s.p,{children:"string"})})]}),(0,t.jsx)("div",{})]}),(0,t.jsxs)("li",{className:"schemaItem",children:[(0,t.jsxs)("summary",{style:{},children:[(0,t.jsx)("strong",{children:(0,t.jsx)(s.p,{children:"X-Frame-Options"})}),(0,t.jsx)("span",{style:{opacity:"0.6"},children:(0,t.jsx)(s.p,{children:"string"})})]}),(0,t.jsx)("div",{})]})]})]}),(0,t.jsx)("div",{children:(0,t.jsx)(o(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,t.jsx)(f.default,{label:"application/json",value:"application/json",children:(0,t.jsxs)(b(),{className:"openapi-tabs__schema",children:[(0,t.jsx)(f.default,{label:"Schema",value:"Schema",children:(0,t.jsxs)(a,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,t.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,t.jsx)("strong",{children:(0,t.jsx)(s.p,{children:"Schema"})})}),(0,t.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,t.jsxs)("ul",{style:{marginLeft:"1rem"},children:[(0,t.jsx)(u(),{collapsible:!1,name:"errorCode",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"0"}}),(0,t.jsx)(u(),{collapsible:!1,name:"msg",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"IN-PROGRESS"}})]})]})}),(0,t.jsx)(f.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,t.jsx)(x(),{responseExample:'{\n  "errorCode": "0",\n  "msg": "IN-PROGRESS"\n}',language:"json"})}),(0,t.jsx)(f.default,{label:"Check Job Status",value:"Check Job Status",children:(0,t.jsx)(x(),{responseExample:'{\n  "errorCode": "0",\n  "msg": "IN-PROGRESS"\n}',language:"json"})})]})})})})]})})})})]})}function J(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(D,{...e})}):D(e)}}}]);