import{P as d,f as b,D as C,E as f,U as j,G as P,r as T,j as t}from"./index-f22446e5.js";import{T as y,d as R,a as D,b as v,c as J}from"./LastPage-bc499633.js";import{B}from"./Breadcrumb-c1517ab0.js";import{P as k}from"./PageContainer-53646ac6.js";import{P as w}from"./ParentCard-c6023dea.js";import{P as A}from"./Paper-eafa25ad.js";import{T as M,a as I,b as q,c as p,d as r,e as _}from"./TableRow-5d89add1.js";import{T as a}from"./Typography-493ceae3.js";import{S as $}from"./Stack-8d476df3.js";import{A as E}from"./Avatar-934745ac.js";import{C as U}from"./Chip-22604cd4.js";import{T as W}from"./TablePagination-e523b84e.js";import{u as F}from"./Grid-6c01a67e.js";import{B as H}from"./Box-f8c4e902.js";import{I as h}from"./IconButton-dffcd583.js";import"./createSvgIcon-0049ca4f.js";import"./createChainedFunction-0bab83cf.js";import"./ownerWindow-698471fc.js";import"./ownerDocument-613eb639.js";import"./isMuiElement-0a1be5b6.js";import"./useId-6ded1857.js";import"./useControlled-7a3bcd39.js";import"./index.esm-e0300107.js";import"./Link-f430d0ec.js";import"./Card-99a14ea7.js";import"./CardHeader-53ac68d8.js";import"./Divider-efe6cf9e.js";import"./dividerClasses-0b6de4a8.js";import"./CardContent-621adc32.js";import"./createStack-e9d30bfe.js";import"./styled-af0837ae.js";import"./KeyboardArrowRight-c0a54765.js";import"./LastPage-13b3e262.js";import"./Toolbar-1cf165db.js";import"./Select-8c02317b.js";import"./Popover-9060c6fe.js";import"./Modal-99caf082.js";import"./Fade-6b4e951e.js";import"./utils-e57cfcaa.js";import"./Portal-bdf58041.js";import"./Grow-1067b88b.js";import"./List-24f7ff12.js";import"./ListContext-74b9cccd.js";import"./utils-5ebfb48b.js";import"./formControlState-02eb4045.js";import"./useFormControl-c5cffc22.js";import"./InputBase-6d6630d9.js";import"./MenuItem-65e34cdb.js";import"./listItemIconClasses-5a5c13b9.js";import"./listItemTextClasses-243cffc5.js";function O(i){const o=F(),{count:s,page:n,rowsPerPage:c,onPageChange:m}=i,g=l=>{m(l,0)},e=l=>{m(l,n-1)},x=l=>{m(l,n+1)},S=l=>{m(l,Math.max(0,Math.ceil(s/c)-1))};return t.jsxs(H,{sx:{flexShrink:0,ml:2.5},children:[t.jsx(h,{onClick:g,disabled:n===0,"aria-label":"first page",children:o.direction==="rtl"?t.jsx(R,{}):t.jsx(D,{})}),t.jsx(h,{onClick:e,disabled:n===0,"aria-label":"previous page",children:o.direction==="rtl"?t.jsx(v,{}):t.jsx(J,{})}),t.jsx(h,{onClick:x,disabled:n>=Math.ceil(s/c)-1,"aria-label":"next page",children:o.direction==="rtl"?t.jsx(J,{}):t.jsx(v,{})}),t.jsx(h,{onClick:S,disabled:n>=Math.ceil(s/c)-1,"aria-label":"last page",children:o.direction==="rtl"?t.jsx(D,{}):t.jsx(R,{})})]})}O.propTypes={count:d.number.isRequired,onPageChange:d.func.isRequired,page:d.number.isRequired,rowsPerPage:d.number.isRequired};const u=[{orderno:"ORD - 0120145",items:"5",imgsrc:b,customer:"Sunil Joshi",total:"550,000",status:"Completed",date:"10 Jun, 2021 09:51:40"},{orderno:"ORD - 0120146",items:"1",imgsrc:C,customer:"John Deo",total:"45,000",status:"Pending",date:"10 Jun, 2021 07:46:00"},{orderno:"ORD - 0120460",items:"3",imgsrc:f,customer:"Mily Peter",total:"57,000",status:"Cancel",date:"10 Jun, 2021 04:19:38"},{orderno:"ORD - 0124060",items:"11",imgsrc:j,customer:"Andrew McDownland",total:"457,000",status:"Completed",date:"10 Jun, 2021 04:12:29"},{orderno:"ORD - 0124568",items:"4",imgsrc:P,customer:"Christopher Jamil",total:"120,000",status:"Pending",date:"15 Apr, 2021 04:12:50"},{orderno:"ORD - 0120146",items:"1",imgsrc:C,customer:"John Deo",total:"45,000",status:"Pending",date:"10 Jun, 2021 07:46:00"},{orderno:"ORD - 0120460",items:"3",imgsrc:f,customer:"Mily Peter",total:"57,000",status:"Cancel",date:"10 Jun, 2021 04:19:38"},{orderno:"ORD - 0124060",items:"11",imgsrc:j,customer:"Andrew McDownland",total:"457,000",status:"Completed",date:"10 Jun, 2021 04:12:29"},{orderno:"ORD - 0124568",items:"4",imgsrc:P,customer:"Christopher Jamil",total:"120,000",status:"Pending",date:"15 Apr, 2021 04:12:50"},{orderno:"ORD - 0120145",items:"5",imgsrc:b,customer:"Sunil Joshi",total:"550,000",status:"Completed",date:"10 Jun, 2021 09:51:40"},{orderno:"ORD - 0124060",items:"11",imgsrc:j,customer:"Andrew McDownland",total:"457,000",status:"Completed",date:"10 Jun, 2021 04:12:29"},{orderno:"ORD - 0124568",items:"4",imgsrc:P,customer:"Christopher Jamil",total:"120,000",status:"Pending",date:"15 Apr, 2021 04:12:50"}].sort((i,o)=>i.calories<o.calories?-1:1),N=[{to:"/",title:"Home"},{title:"Pagination Table"}],Wt=()=>{const[i,o]=T.useState(0),[s,n]=T.useState(5),c=i>0?Math.max(0,(1+i)*s-u.length):0,m=(e,x)=>{o(x)},g=e=>{n(parseInt(e.target.value,10)),o(0)};return t.jsxs(k,{title:"Pagination Table",description:"this is Pagination Table page",children:[t.jsx(B,{title:"Pagination Table",items:N}),t.jsx(w,{title:"Pagination Table",children:t.jsx(A,{variant:"outlined",children:t.jsx(M,{children:t.jsxs(I,{"aria-label":"custom pagination table",sx:{whiteSpace:"nowrap"},children:[t.jsx(q,{children:t.jsxs(p,{children:[t.jsx(r,{children:t.jsx(a,{variant:"h6",children:"Order No."})}),t.jsx(r,{children:t.jsx(a,{variant:"h6",children:"Customer"})}),t.jsx(r,{children:t.jsx(a,{variant:"h6",children:"Items"})}),t.jsx(r,{children:t.jsx(a,{variant:"h6",children:"Total"})}),t.jsx(r,{children:t.jsx(a,{variant:"h6",children:"Date"})}),t.jsx(r,{children:t.jsx(a,{variant:"h6",children:"Status"})})]})}),t.jsxs(_,{children:[(s>0?u.slice(i*s,i*s+s):u).map(e=>t.jsxs(p,{children:[t.jsx(r,{children:t.jsx(a,{variant:"h6",children:e.orderno})}),t.jsx(r,{children:t.jsxs($,{direction:"row",spacing:2,alignItems:"center",children:[t.jsx(E,{src:e.imgsrc,alt:e.imgsrc,width:"30"}),t.jsx(a,{variant:"h6",fontWeight:"600",children:e.customer})]})}),t.jsx(r,{children:t.jsx(a,{color:"textSecondary",variant:"h6",fontWeight:"400",children:e.items})}),t.jsx(r,{children:t.jsxs(a,{color:"textSecondary",variant:"h6",fontWeight:"400",children:["$",e.total]})}),t.jsx(r,{children:t.jsx(a,{variant:"h6",children:e.date})}),t.jsx(r,{children:t.jsx(U,{color:e.status==="Completed"?"success":e.status==="Pending"?"warning":e.status==="Cancel"?"error":"secondary",sx:{borderRadius:"6px"},size:"small",label:e.status})})]},e.orderno)),c>0&&t.jsx(p,{style:{height:53*c},children:t.jsx(r,{colSpan:6})})]}),t.jsx(y,{children:t.jsx(p,{children:t.jsx(W,{rowsPerPageOptions:[5,10,25,{label:"All",value:-1}],colSpan:6,count:u.length,rowsPerPage:s,page:i,SelectProps:{inputprops:{"aria-label":"rows per page"},native:!0},onPageChange:m,onRowsPerPageChange:g,ActionsComponent:O})})})]})})})})]})};export{Wt as default};
