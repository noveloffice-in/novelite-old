import{j as o}from"./index-f22446e5.js";import{G as i}from"./Grid-6c01a67e.js";import{B as n}from"./Box-f8c4e902.js";import{C as c}from"./CardContent-621adc32.js";import{T as t}from"./Typography-493ceae3.js";const r="/assets/novelite/client-dashboard/assets/icon-connect-93bb1783.svg",l="/assets/novelite/client-dashboard/assets/icon-user-male-ff0c3edd.svg",a="/assets/novelite/client-dashboard/assets/icon-briefcase-5ac68925.svg",g="/assets/novelite/client-dashboard/assets/icon-mailbox-58a01fce.svg",d="/assets/novelite/client-dashboard/assets/icon-favorites-c75eec14.svg",b="/assets/novelite/client-dashboard/assets/icon-speech-bubble-4432cbf3.svg",m=[{icon:l,title:"Employees",digits:"96",bgcolor:"primary"},{icon:a,title:"Clients",digits:"3,650",bgcolor:"warning"},{icon:g,title:"Projects",digits:"356",bgcolor:"secondary"},{icon:d,title:"Events",digits:"696",bgcolor:"error"},{icon:b,title:"Payroll",digits:"$96k",bgcolor:"success"},{icon:r,title:"Reports",digits:"59",bgcolor:"info"}],j=()=>o.jsx(i,{container:!0,spacing:3,mt:3,children:m.map((s,e)=>o.jsx(i,{item:!0,xs:12,sm:4,lg:2,children:o.jsx(n,{bgcolor:s.bgcolor+".light",textAlign:"center",children:o.jsxs(c,{children:[o.jsx("img",{src:s.icon,alt:s.icon,width:"50"}),o.jsx(t,{color:s.bgcolor+".main",mt:1,variant:"subtitle1",fontWeight:600,children:s.title}),o.jsx(t,{color:s.bgcolor+".main",variant:"h4",fontWeight:600,children:s.digits})]})})},e))});export{j as T};
