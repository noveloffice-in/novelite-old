import{j as e,r as f,L as v,f as y,R as p,e as b,bV as T,aR as A,bZ as L}from"./index-f22446e5.js";import"./Breadcrumb-c1517ab0.js";import{P as R}from"./PageContainer-53646ac6.js";import{A as M}from"./AppCard-7a1e954a.js";import{r as B,i as E}from"./createSvgIcon-0049ca4f.js";import{S as P}from"./Scrollbar-4e88fbd7.js";import{B as r}from"./Box-f8c4e902.js";import{L as C}from"./ListItem-91f72477.js";import{L as d}from"./ListItemAvatar-e4b79901.js";import{A as x}from"./Avatar-934745ac.js";import{L as I}from"./ListItemText-8858e1cf.js";import{T as c}from"./Typography-493ceae3.js";import{D as _}from"./Divider-efe6cf9e.js";import{f as S}from"./index-15eab23a.js";import{A as N}from"./index.esm-e0300107.js";import{I as H}from"./InputBase-6d6630d9.js";import{I as V}from"./IconButton-dffcd583.js";import{u as q}from"./useDispatch-ce130263.js";import"./Grid-6c01a67e.js";import"./Link-f430d0ec.js";import"./Card-99a14ea7.js";import"./Paper-eafa25ad.js";import"./createChainedFunction-0bab83cf.js";import"./ownerWindow-698471fc.js";import"./ownerDocument-613eb639.js";import"./isMuiElement-0a1be5b6.js";import"./useId-6ded1857.js";import"./useControlled-7a3bcd39.js";import"./index-276feae1.js";import"./ListContext-74b9cccd.js";import"./listItemButtonClasses-35818a18.js";import"./listItemTextClasses-243cffc5.js";import"./dividerClasses-0b6de4a8.js";import"./index-5a0c5ef2.js";import"./index-f401f0bd.js";import"./formControlState-02eb4045.js";import"./useFormControl-c5cffc22.js";import"./utils-5ebfb48b.js";var u={},z=E;Object.defineProperty(u,"__esModule",{value:!0});var h=u.default=void 0,G=z(B()),O=e,W=(0,G.default)((0,O.jsx)("path",{d:"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"}),"ArrowBack");h=u.default=W;function Z({data:s,title:n}){const i=f.useRef(null),a=()=>{var t;(t=i.current)==null||t.scrollIntoView({behavior:"smooth"})};f.useEffect(()=>{a()},[]);const l=t=>t===null||t===""?"":(t=t.toString(),t.replace(/(<([^>]+)>)/ig,""));return e.jsx(r,{children:(s==null?void 0:s.length)!==0?e.jsxs(r,{children:[e.jsxs(r,{children:[e.jsx(r,{display:"flex",alignItems:"center",p:2,children:e.jsxs(C,{dense:!0,disableGutters:!0,children:[e.jsx(r,{component:v,to:"/dashboards/novel_tickets",children:e.jsx(d,{children:e.jsxs(x,{children:[" ",e.jsx(h,{})," "]})})}),e.jsx(I,{primary:e.jsx(c,{variant:"h5",children:n})})]})}),e.jsx(_,{})]}),e.jsx(r,{display:"flex",children:e.jsx(r,{width:"100%",children:e.jsxs(P,{sx:{overflow:"auto",maxHeight:{xs:"65vh",md:"65vh",lg:"60vh"}},children:[e.jsx(r,{sx:{p:3,msOverflowStyle:"scroll",maxHeight:{xs:"100%",md:"100%",lg:"100%"}},children:s==null?void 0:s.map((t,m)=>e.jsx(r,{children:t.comment_by==="Administrator"?e.jsxs(r,{display:"flex",children:[e.jsx(d,{children:e.jsx(x,{alt:y,src:y,sx:{width:40,height:40}})}),e.jsxs(r,{children:[e.jsxs(c,{variant:"body2",color:"grey.400",mb:1,children:[s.creation," ",S(new Date(t.creation),{addSuffix:!1})," ","ago"]}),e.jsx(r,{mb:2,sx:{p:1,backgroundColor:"grey.100",mr:"auto",maxWidth:"320px"},children:l(t.content)})]})]}):e.jsx(r,{mb:1,display:"flex",alignItems:"flex-end",flexDirection:"row-reverse",children:e.jsxs(r,{alignItems:"flex-end",display:"flex",flexDirection:"column",children:[e.jsxs(c,{variant:"body2",color:"grey.400",mb:1,children:[s.creation," ",S(new Date(t.creation),{addSuffix:!1})," ","ago"]}),e.jsx(r,{mb:2,sx:{p:1,backgroundColor:"primary.light",ml:"auto",maxWidth:"320px"},children:l(t.content)})]})})},m))}),e.jsx("div",{ref:i})]})})})]}):e.jsxs(r,{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",p:2,pb:1,pt:1,children:[e.jsxs(C,{dense:!0,disableGutters:!0,children:[e.jsx(r,{component:v,to:"/dashboards/novel_tickets",children:e.jsx(d,{children:e.jsxs(x,{children:[" ",e.jsx(h,{})," "]})})}),e.jsx(I,{primary:e.jsx(c,{variant:"h5",children:n})})]}),e.jsx(r,{sx:{display:{xs:"flex",md:"flex",lg:"none"},mr:"10px"}}),e.jsx(c,{variant:"h4",children:"No Previous Chats"})]})})}function J({id:s,mutate:n}){const[i,a]=p.useState("");q(),p.useState(null),p.useState();const l=b(o=>o.novelprofileReducer.userEmail),t=b(o=>o.novelprofileReducer.userName),{createDoc:m,isCompleted:K}=T();f.useEffect(()=>{let o=setInterval(()=>{n()},2e3);return()=>clearInterval(o)},[]);const k=o=>{a(o.target.value)},D=new Date().toLocaleString("en-US",{timeZone:"Asia/Kolkata"}),w=o=>{o.preventDefault(),o.stopPropagation();let j={reference_doctype:"Issue",comment_type:"Comment",reference_name:s,creation:D,comment_email:l,comment_by:t,content:i};console.log("Message = ",j),m("Comment",j).then(()=>{console.log("Ticket created Successfully"),n()}).catch(g=>{console.log("inside catch "+JSON.stringify(g.message)),console.err(g.message)}),a("")};return e.jsx(r,{p:2,children:e.jsxs("form",{style:{display:"flex",gap:"10px",alignItems:"center"},children:[e.jsx(H,{id:"msg-sent",fullWidth:!0,value:i,placeholder:"Type a Message",size:"small",type:"text",inputProps:{"aria-label":"Type a Message"},onChange:k}),e.jsx(V,{"aria-label":"delete",onClick:w,disabled:!i,type:"submit",color:"primary",children:e.jsx(N,{stroke:1.5,size:"20"})})]})})}function Re(){let{id:s,title:n}=A();const{data:i,error:a,isValidating:l,mutate:t}=L("Comment",{fields:["name","content","comment_email","creation","comment_by"],filters:[["reference_doctype","=","Issue"],["reference_name","=",s]],limit:1e4,orderBy:{field:"creation",order:"asc"}});return e.jsx(R,{title:"Tickets App",description:"this is Chat page",id:"ChatContainer",style:{marginTop:"5px"},children:e.jsx(M,{children:e.jsxs(r,{flexGrow:1,children:[e.jsx(Z,{data:i,title:n,id:s}),e.jsx(_,{}),e.jsx(J,{id:s,mutate:t})]})})})}export{Re as default};