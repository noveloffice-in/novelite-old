var ie=Object.defineProperty,se=Object.defineProperties;var oe=Object.getOwnPropertyDescriptors;var H=Object.getOwnPropertySymbols;var ae=Object.prototype.hasOwnProperty,ne=Object.prototype.propertyIsEnumerable;var $=(r,s,o)=>s in r?ie(r,s,{enumerable:!0,configurable:!0,writable:!0,value:o}):r[s]=o,z=(r,s)=>{for(var o in s||(s={}))ae.call(s,o)&&$(r,o,s[o]);if(H)for(var o of H(s))ne.call(s,o)&&$(r,o,s[o]);return r},O=(r,s)=>se(r,oe(s));import{j as e,r as x,af as le,e as u,ag as ce,ah as Q,ai as V,aj as _,ak as G,R as de,al as me,am as pe}from"./index-f22446e5.js";import{B as he}from"./Breadcrumb-c1517ab0.js";import{C as xe}from"./CustomCheckbox-4449b219.js";import{I as A,W as P,H as B,E as ue,A as je,J as fe,K as ge,L as I,G as Ce,D as be}from"./index.esm-e0300107.js";import{u as J,G as U}from"./Grid-6c01a67e.js";import{L as q}from"./ListItemButton-23d5f8ef.js";import{B as a}from"./Box-f8c4e902.js";import{L as X}from"./ListItemIcon-a9e66107.js";import{L as Y}from"./ListItemText-8858e1cf.js";import{S as g}from"./Stack-58acc4b3.js";import{T as m}from"./Typography-493ceae3.js";import{C as Z}from"./Chip-22604cd4.js";import{f as we}from"./index-15eab23a.js";import{S as ee}from"./Scrollbar-4e88fbd7.js";import{L as re}from"./List-24f7ff12.js";import{u as S}from"./useDispatch-ce130263.js";import{C as v}from"./CustomFormLabel-1e27e530.js";import{S as ve}from"./Slide-008ae128.js";import{B as h}from"./Button-7d294087.js";import{D as ke,a as ye}from"./DialogContent-4bed6d00.js";import{D as Le}from"./DialogTitle-b1205a27.js";import{D as Se}from"./DialogContentText-19fdc416.js";import{T as k}from"./TextField-eaaf417f.js";import{D as ze}from"./DialogActions-04b28c99.js";import{D as y}from"./Divider-efe6cf9e.js";import{C as Ie}from"./CustomTextField-6979225c.js";import{F as Ee}from"./Fab-4a353d81.js";import{I as Te}from"./InputAdornment-ad52364f.js";import{e as L}from"./emailSv-e31e5e93.js";import{R as De}from"./Quill-3c89cfbc.js";import{T as E}from"./Tooltip-c24d37bb.js";import{I as T}from"./IconButton-dffcd583.js";import{A as D}from"./Avatar-934745ac.js";import{P as We}from"./Paper-eafa25ad.js";import{P as Re}from"./PageContainer-53646ac6.js";import{A as Fe}from"./AppCard-7a1e954a.js";import{u as K}from"./useMediaQuery-39de02de.js";import{D as W}from"./Drawer-6833f653.js";import"./Link-f430d0ec.js";import"./SwitchBase-43edb643.js";import"./useFormControl-c5cffc22.js";import"./useControlled-7a3bcd39.js";import"./ListContext-74b9cccd.js";import"./listItemButtonClasses-35818a18.js";import"./listItemIconClasses-5a5c13b9.js";import"./listItemTextClasses-243cffc5.js";import"./createStack-e9d30bfe.js";import"./styled-af0837ae.js";import"./index-5a0c5ef2.js";import"./index-f401f0bd.js";import"./index-276feae1.js";import"./utils-e57cfcaa.js";import"./ownerWindow-698471fc.js";import"./ownerDocument-613eb639.js";import"./Modal-99caf082.js";import"./Fade-6b4e951e.js";import"./createChainedFunction-0bab83cf.js";import"./Portal-bdf58041.js";import"./useId-6ded1857.js";import"./FormControl-902fa994.js";import"./utils-5ebfb48b.js";import"./isMuiElement-0a1be5b6.js";import"./formControlState-02eb4045.js";import"./Select-8c02317b.js";import"./Popover-9060c6fe.js";import"./Grow-1067b88b.js";import"./InputBase-6d6630d9.js";import"./dividerClasses-0b6de4a8.js";import"./_baseIsEqual-c9a24d62.js";import"./isObjectLike-3b2c2e9f.js";import"./Popper-7c45775d.js";import"./createPopper-319e19c4.js";import"./Card-99a14ea7.js";const Ae=({id:r,onClick:s,onChange:o,onStar:n,onImportant:p,from:t,subject:c,time:l,checked:i,label:j,starred:f,onDelete:C,important:b,isSelected:d})=>{const w=J(),M=w.palette.warning.main,te=w.palette.error.light;return e.jsxs(q,{sx:{mb:1,py:2},selected:d,alignItems:"flex-start",children:[e.jsx(a,{children:e.jsx(X,{sx:{minWidth:"35px",mt:"0"},children:e.jsx(xe,{edge:"start",id:`check${r}`,tabIndex:-1,onChange:o})})}),e.jsxs(Y,{onClick:s,children:[e.jsxs(g,{direction:"row",gap:"10px",alignItems:"center",children:[e.jsx(m,{variant:"subtitle2",mb:.5,fontWeight:600,mr:"auto",children:t}),e.jsx(Z,{label:j,size:"small",color:j==="Promotional"?"primary":j==="Social"?"error":"success"})]}),e.jsx(m,{variant:"subtitle2",noWrap:!0,width:"80%",color:"text.secondary",children:c}),e.jsxs(g,{direction:"row",mt:1,gap:"10px",alignItems:"center",children:[e.jsx(A,{onClick:n,stroke:1,size:"18",style:{fill:f?M:"",stroke:f?M:""}}),e.jsx(P,{onClick:p,size:"18",stroke:1.2,style:{fill:b?te:""}}),i?e.jsx(B,{onClick:C,stroke:1.5,size:"16"}):"",e.jsxs(m,{variant:"caption",noWrap:!0,sx:{ml:"auto"},children:[we(new Date(l),{addSuffix:!1}),"","ago"]})]})]})]})},Pe=({showrightSidebar:r})=>{const s=S();x.useEffect(()=>{s(le())},[s]);const o=(t,c,l)=>{switch(c){case"inbox":return t.filter(i=>i.inbox&&!i.trash&&i.from.toLocaleLowerCase().includes(l));case"sent":return t.filter(i=>i.sent&&!i.trash&&i.from.toLocaleLowerCase().includes(l));case"draft":return t.filter(i=>i.draft&&!i.trash&&i.from.toLocaleLowerCase().includes(l));case"spam":return t.filter(i=>i.spam&&!i.trash&&i.from.toLocaleLowerCase().includes(l));case"trash":return t.filter(i=>i.trash&&i.from.toLocaleLowerCase().includes(l));case"starred":return t.filter(i=>i.starred&&!i.trash&&i.from.toLocaleLowerCase().includes(l));case"important":return t.filter(i=>i.important&&!i.trash&&i.from.toLocaleLowerCase().includes(l));case"Promotional":return t.filter(i=>i.label==="Promotional"&&!i.trash&&i.from.toLocaleLowerCase().includes(l));case"Social":return t.filter(i=>i.label==="Social"&&!i.trash&&i.from.toLocaleLowerCase().includes(l));case"Health":return t.filter(i=>i.label==="Health"&&!i.trash&&i.from.toLocaleLowerCase().includes(l));default:throw new Error(`Unknown filter: ${c}`)}},n=u(t=>o(t.emailReducer.emails,t.emailReducer.currentFilter,t.emailReducer.emailSearch)),p=u(t=>t.emailReducer.emailContent);return e.jsx(re,{children:e.jsx(ee,{sx:{height:{lg:"calc(100vh - 100px)",md:"100vh"},maxHeight:"800px"},children:n.map(t=>e.jsx(Ae,O(z({active:p},t),{onClick:()=>{s(ce(t.id)),r()},onDelete:()=>s(Q(t.id)),isSelected:t.id===p,onStar:()=>s(V(t.id)),onImportant:()=>s(_(t.id)),onChange:c=>{c.target.checked===!0?s(G(t.id,"checked")):s(G(t.id,"unchecked"))}}),t.id))})})},Be=de.forwardRef((r,s)=>e.jsx(ve,z({direction:"up",ref:s},r))),Me=()=>{const[r,s]=x.useState(!1),o=()=>{s(!0)},n=()=>{s(!1)};return e.jsxs(a,{children:[e.jsx(a,{p:3,pb:1,children:e.jsx(h,{variant:"contained",fullWidth:!0,color:"primary",onClick:o,children:"Compose"})}),e.jsxs(ke,{open:r,TransitionComponent:Be,keepMounted:!0,onClose:n,fullWidth:!0,"aria-labelledby":"alert-dialog-slide-title","aria-describedby":"alert-dialog-slide-description",children:[e.jsx(Le,{id:"alert-dialog-slide-title",variant:"h5",children:"Compose Mail"}),e.jsx(ye,{children:e.jsxs(Se,{id:"alert-dialog-slide-description",component:"div",children:[e.jsx(v,{htmlFor:"to-text",children:"To"}),e.jsx(k,{id:"to-text",fullWidth:!0,size:"small",variant:"outlined"}),e.jsx(v,{htmlFor:"subject-text",children:"Subject"}),e.jsx(k,{id:"subject-text",fullWidth:!0,size:"small",variant:"outlined"}),e.jsx(v,{htmlFor:"message-text",children:"Message"}),e.jsx(k,{id:"message-text",placeholder:"Write a message",multiline:!0,fullWidth:!0,rows:4,variant:"outlined"}),e.jsx(v,{htmlFor:"upload-text",children:"Attachment"}),e.jsx(k,{type:"file",autoFocus:!0,id:"upload-text",fullWidth:!0,size:"small",variant:"outlined"})]})}),e.jsxs(ze,{children:[e.jsx(h,{onClick:n,color:"primary",variant:"contained",children:"Send"}),e.jsx(h,{onClick:n,color:"secondary",children:"Cancel"})]})]})]})},He=()=>{const r=u(t=>t.emailReducer.currentFilter),o=`${u(t=>t.customizer).borderRadius}px`,n=S(),p=[{id:2,name:"inbox",icon:ue,color:"inherit"},{id:3,name:"sent",icon:je,color:"inherit"},{id:4,name:"draft",icon:fe,color:"inherit"},{id:4,name:"spam",icon:ge,color:"inherit"},{id:5,name:"trash",icon:B,color:"inherit"},{id:6,divider:!0},{id:1,filterbyTitle:"Sort By"},{id:7,name:"starred",icon:A,color:"inherit"},{id:8,name:"important",icon:P,color:"inherit"},{id:9,divider:!0},{id:13,filterbyTitle:"Labels"},{id:10,name:"Promotional",icon:I,color:"primary.main"},{id:11,name:"Social",icon:I,color:"error.main"},{id:12,name:"Health",icon:I,color:"success.main"}];return e.jsxs(e.Fragment,{children:[e.jsx(a,{children:e.jsx(Me,{})}),e.jsx(re,{children:e.jsx(ee,{sx:{height:{lg:"calc(100vh - 100px)",md:"100vh"},maxHeight:"800px"},children:p.map(t=>t.filterbyTitle?e.jsx(m,{variant:"subtitle2",p:3,pb:1,pl:5.5,fontWeight:600,children:t.filterbyTitle},t.id):t.divider?e.jsx(y,{},t.id):e.jsxs(q,{sx:{mb:1,px:"20px",mx:3,borderRadius:o},selected:r===`${t.name}`,onClick:()=>n(me(`${t.name}`)),children:[e.jsx(X,{sx:{minWidth:"30px",color:t.color},children:e.jsx(t.icon,{stroke:"1.5",size:19})}),e.jsx(Y,{sx:{textTransform:"capitalize"},children:t.name})]},`${t.id}${t.name}`))})})]})},$e=({onClick:r})=>{const s=u(n=>n.emailReducer.emailSearch),o=S();return e.jsxs(a,{display:"flex",sx:{p:2},children:[e.jsx(Ee,{onClick:r,color:"primary",size:"small",sx:{mr:1,flexShrink:"0",display:{xs:"block",lineHeight:"10px",lg:"none"}},children:e.jsx(Ce,{width:"16"})}),e.jsx(Ie,{id:"outlined-basic",InputProps:{endAdornment:e.jsx(Te,{position:"end",children:e.jsx(be,{size:"16"})})},fullWidth:!0,size:"small",value:s,placeholder:"Search emails",variant:"outlined",onChange:n=>o(pe(n.target.value))})]})},N=()=>{var f,C,b;const r=u(d=>d.emailReducer.emails[d.emailReducer.emailContent-1]),[s,o]=x.useState(!1),[n,p]=x.useState(""),t=()=>{o(!s)},c=S(),l=J(),i=l.palette.warning.main,j=l.palette.error.light;return r&&!r.trash?e.jsxs(a,{children:[e.jsxs(g,{p:2,gap:0,direction:"row",children:[e.jsx(E,{title:r.starred?"Unstar":"Star",children:e.jsx(T,{onClick:()=>c(V(r.id)),children:e.jsx(A,{stroke:1.3,size:"18",style:{fill:r.starred?i:"",stroke:r.starred?i:""}})})}),e.jsx(E,{title:r?"Important":"Not Important",children:e.jsx(T,{onClick:()=>c(_(r.id)),children:e.jsx(P,{size:"18",stroke:1.3,style:{fill:r.important?j:""}})})}),e.jsx(E,{title:"Delete",children:e.jsx(T,{onClick:()=>c(Q(r.id)),children:e.jsx(B,{size:"18",stroke:1.3})})})]}),e.jsx(y,{}),e.jsxs(a,{p:3,children:[e.jsxs(a,{display:"flex",alignItems:"center",sx:{pb:3},children:[e.jsx(D,{alt:r.from,src:r.thumbnail}),e.jsxs(a,{sx:{ml:2},children:[e.jsx(m,{variant:"h6",children:r.from}),e.jsx(m,{variant:"body2",children:r.To})]}),e.jsx(Z,{label:r.label,sx:{ml:"auto",height:"21px"},size:"small",color:r.label==="Promotional"?"primary":r.label==="Social"?"error":"success"})]}),e.jsx(a,{sx:{py:2},children:e.jsx(m,{variant:"h4",children:r.subject})}),e.jsx(a,{sx:{py:2},children:e.jsx("div",{dangerouslySetInnerHTML:{__html:r.emailContent}})})]}),((f=r==null?void 0:r.attchments)==null?void 0:f.length)===0?null:e.jsxs(e.Fragment,{children:[e.jsx(y,{}),e.jsxs(a,{p:3,children:[e.jsxs(m,{variant:"h6",children:["Attachments (",(C=r==null?void 0:r.attchments)==null?void 0:C.length,")"]}),e.jsx(U,{container:!0,spacing:3,children:(b=r.attchments)==null?void 0:b.map(d=>e.jsx(U,{item:!0,lg:4,children:e.jsxs(g,{direction:"row",gap:2,mt:2,children:[e.jsx(D,{variant:"rounded",sx:{width:"48px",height:"48px",bgcolor:w=>w.palette.grey[100]},children:e.jsx(D,{src:d.image,alt:"av",variant:"rounded",sx:{width:"24px",height:"24px"}})}),e.jsxs(a,{mr:"auto",children:[e.jsx(m,{variant:"subtitle2",fontWeight:600,mb:1,children:d.title}),e.jsx(m,{variant:"body2",children:d.fileSize})]})]})},d.id))})]}),e.jsx(y,{})]}),e.jsxs(a,{p:3,children:[e.jsxs(g,{direction:"row",gap:2,children:[e.jsx(h,{variant:"outlined",size:"small",color:"primary",onClick:t,children:"Reply"}),e.jsx(h,{variant:"outlined",size:"small",children:"Forward"})]}),s?e.jsx(a,{mt:3,children:e.jsx(We,{variant:"outlined",children:e.jsx(De,{value:n,onChange:d=>{p(d)},placeholder:"Type here..."})})}):null]})]}):e.jsx(a,{p:3,height:"50vh",display:"flex",justifyContent:"center",alignItems:"center",children:e.jsxs(a,{children:[e.jsx(m,{variant:"h4",children:"Please Select a Mail"}),e.jsx("br",{}),e.jsx("img",{src:L,alt:L,width:"250px"})]})})},R=240,F=320,nt=()=>{const[r,s]=x.useState(!1),[o,n]=x.useState(!1),p=K(c=>c.breakpoints.up("lg")),t=K(c=>c.breakpoints.up("md"));return e.jsxs(Re,{title:"Email App",description:"this is email page",children:[e.jsx(he,{title:"Email app",subtitle:"Look at Inbox",children:e.jsx(a,{children:e.jsx("img",{src:L,alt:L,width:"165px"})})}),e.jsxs(Fe,{children:[e.jsx(W,{open:r,onClose:()=>s(!1),sx:{width:R,"& .MuiDrawer-paper":{width:R,position:"relative",zIndex:2},flexShrink:0},variant:p?"permanent":"temporary",children:e.jsx(He,{})}),e.jsxs(a,{sx:{minWidth:F,width:{xs:"100%",md:F,lg:F},flexShrink:0},children:[e.jsx($e,{onClick:()=>s(!0)}),e.jsx(Pe,{showrightSidebar:()=>n(!0)})]}),t?e.jsx(W,{anchor:"right",variant:"permanent",sx:{zIndex:0,width:"200px",flex:"1 1 auto","& .MuiDrawer-paper":{position:"relative"}},children:e.jsx(a,{children:e.jsx(N,{})})}):e.jsx(W,{anchor:"right",open:o,onClose:()=>n(!1),sx:{width:R,flexShrink:0,"& .MuiDrawer-paper":{width:"85%"}},variant:"temporary",children:e.jsxs(a,{children:[e.jsx(a,{pl:3,pt:3,children:e.jsxs(h,{variant:"outlined",color:"primary",size:"small",onClick:()=>n(!1),sx:{display:{xs:"block",md:"none",lg:"none"}},children:[" ","Back"," "]})}),e.jsx(N,{})]})})]})]})};export{nt as default};
