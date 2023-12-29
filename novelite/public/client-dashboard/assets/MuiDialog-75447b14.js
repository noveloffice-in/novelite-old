var M=Object.defineProperty;var k=Object.getOwnPropertySymbols;var R=Object.prototype.hasOwnProperty,G=Object.prototype.propertyIsEnumerable;var D=(s,i,t)=>i in s?M(s,i,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[i]=t,v=(s,i)=>{for(var t in i||(i={}))R.call(i,t)&&D(s,t,i[t]);if(k)for(var t of k(i))G.call(i,t)&&D(s,t,i[t]);return s};import{R as n,j as e}from"./index-f22446e5.js";import{B}from"./Breadcrumb-c1517ab0.js";import{P}from"./PageContainer-53646ac6.js";import{P as E}from"./ParentCard-c6023dea.js";import{C as m}from"./ChildCard-37e943a8.js";import{aP as q,X as U,q as V}from"./index.esm-e0300107.js";import{B as o}from"./Button-7d294087.js";import{T as O}from"./Typography-493ceae3.js";import{D as h,a as j}from"./DialogContent-4bed6d00.js";import{D as x}from"./DialogTitle-b1205a27.js";import{L as T}from"./List-24f7ff12.js";import{L as C}from"./ListItem-91f72477.js";import{L as S}from"./ListItemAvatar-e4b79901.js";import{A as F}from"./Avatar-934745ac.js";import{L as b}from"./ListItemText-8858e1cf.js";import{D as g}from"./DialogContentText-19fdc416.js";import{D as f}from"./DialogActions-04b28c99.js";import{S as W}from"./Slide-008ae128.js";import{C as X}from"./CustomTextField-6979225c.js";import{B as A}from"./Box-f8c4e902.js";import{A as z}from"./AppBar-f67660a3.js";import{T as H}from"./Toolbar-1cf165db.js";import{I as J}from"./IconButton-dffcd583.js";import{D as Q}from"./Divider-efe6cf9e.js";import{C as Y}from"./CustomSelect-bb7b643c.js";import{C as $}from"./CustomSwitch-07128eb7.js";import{F as K}from"./FormControl-902fa994.js";import{I as N}from"./TextField-eaaf417f.js";import{M as u}from"./MenuItem-65e34cdb.js";import{F as Z}from"./FormControlLabel-1a8afdbd.js";import{S as _}from"./Stack-58acc4b3.js";import{u as ee,G as d}from"./Grid-6c01a67e.js";import{u as ie}from"./useMediaQuery-39de02de.js";import"./Link-f430d0ec.js";import"./Card-99a14ea7.js";import"./Paper-eafa25ad.js";import"./CardHeader-53ac68d8.js";import"./CardContent-621adc32.js";import"./Modal-99caf082.js";import"./Fade-6b4e951e.js";import"./utils-e57cfcaa.js";import"./ownerDocument-613eb639.js";import"./ownerWindow-698471fc.js";import"./createChainedFunction-0bab83cf.js";import"./Portal-bdf58041.js";import"./useId-6ded1857.js";import"./ListContext-74b9cccd.js";import"./listItemButtonClasses-35818a18.js";import"./isMuiElement-0a1be5b6.js";import"./listItemTextClasses-243cffc5.js";import"./dividerClasses-0b6de4a8.js";import"./Select-8c02317b.js";import"./Popover-9060c6fe.js";import"./Grow-1067b88b.js";import"./utils-5ebfb48b.js";import"./useControlled-7a3bcd39.js";import"./formControlState-02eb4045.js";import"./useFormControl-c5cffc22.js";import"./InputBase-6d6630d9.js";import"./Switch-cf222fee.js";import"./SwitchBase-43edb643.js";import"./listItemIconClasses-5a5c13b9.js";import"./createStack-e9d30bfe.js";import"./styled-af0837ae.js";const w=["JohnDeo@gmail.com","SmithRocky@gmail.com"],te=()=>{const[s,i]=n.useState(!1),[t,r]=n.useState(w[1]),c=()=>{i(!0)},l=a=>{i(!1),r(a)};return e.jsxs(e.Fragment,{children:[e.jsx(o,{variant:"contained",color:"primary",fullWidth:!0,onClick:c,children:"Open Simple Dialog"}),e.jsxs(O,{variant:"subtitle1",component:"div",mb:1,textAlign:"center",children:["Selected: ",t]}),e.jsxs(h,{onClose:()=>l(t),open:s,children:[e.jsx(x,{children:"Set backup account"}),e.jsxs(T,{sx:{pt:0},children:[w.map(a=>e.jsxs(C,{button:!0,onClick:()=>l(a),children:[e.jsx(S,{children:e.jsx(F,{sx:{bgcolor:"primary.light",color:"primary.main"},children:e.jsx(q,{widht:20,height:20})})}),e.jsx(b,{primary:a})]},a)),e.jsxs(C,{autoFocus:!0,button:!0,onClick:()=>l("addAccount"),children:[e.jsx(S,{children:e.jsx(F,{children:e.jsx(U,{width:20,height:20})})}),e.jsx(b,{primary:"Add account"})]})]})]})]})},se=()=>{const[s,i]=n.useState(!1),t=()=>{i(!0)},r=()=>{i(!1)};return e.jsxs(e.Fragment,{children:[e.jsx(o,{variant:"contained",color:"secondary",fullWidth:!0,onClick:t,children:"Open Alert Dialog"}),e.jsxs(h,{open:s,onClose:r,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:[e.jsx(x,{id:"alert-dialog-title",children:"Use Google's location service?"}),e.jsx(j,{children:e.jsx(g,{id:"alert-dialog-description",children:"Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running."})}),e.jsxs(f,{children:[e.jsx(o,{color:"error",onClick:r,children:"Disagree"}),e.jsx(o,{onClick:r,autoFocus:!0,children:"Agree"})]})]})]})},re=n.forwardRef(function(i,t){return e.jsx(W,v({direction:"up",ref:t},i))}),oe=()=>{const[s,i]=n.useState(!1),t=()=>{i(!0)},r=()=>{i(!1)};return e.jsxs(e.Fragment,{children:[e.jsx(o,{variant:"contained",color:"success",fullWidth:!0,onClick:t,children:"Open Transition Dialog"}),e.jsxs(h,{open:s,TransitionComponent:re,keepMounted:!0,onClose:r,"aria-describedby":"alert-dialog-slide-description",children:[e.jsx(x,{children:"Use Google's location service?"}),e.jsx(j,{children:e.jsx(g,{id:"alert-dialog-slide-description",children:"Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running."})}),e.jsxs(f,{children:[e.jsx(o,{color:"error",onClick:r,children:"Disagree"}),e.jsx(o,{onClick:r,children:"Agree"})]})]})]})},ne=()=>{const[s,i]=n.useState(!1),t=()=>{i(!0)},r=()=>{i(!1)};return e.jsxs(e.Fragment,{children:[e.jsx(o,{variant:"contained",color:"warning",fullWidth:!0,onClick:t,children:"Open Form Dialog"}),e.jsxs(h,{open:s,onClose:r,children:[e.jsx(x,{children:"Subscribe"}),e.jsxs(j,{children:[e.jsx(g,{children:"To subscribe to this website, please enter your email address here. We will send updates occasionally."}),e.jsx(A,{mt:2,children:e.jsx(X,{autoFocus:!0,margin:"dense",id:"name",label:"Email Address",type:"email",fullWidth:!0})})]}),e.jsxs(f,{children:[e.jsx(o,{color:"error",onClick:r,children:"Cancel"}),e.jsx(o,{onClick:r,children:"Subscribe"})]})]})]})},le=n.forwardRef(function(i,t){return e.jsx(W,v({direction:"up",ref:t},i))}),ae=()=>{const[s,i]=n.useState(!1),t=()=>{i(!0)},r=()=>{i(!1)};return e.jsxs(e.Fragment,{children:[e.jsx(o,{variant:"contained",color:"error",fullWidth:!0,onClick:t,children:"Open Fullscreen Dialog"}),e.jsxs(h,{fullScreen:!0,open:s,onClose:r,TransitionComponent:le,children:[e.jsx(z,{sx:{position:"relative"},children:e.jsxs(H,{children:[e.jsx(J,{edge:"start",color:"inherit",onClick:r,"aria-label":"close",children:e.jsx(V,{width:24,height:24})}),e.jsx(O,{ml:2,flex:1,variant:"h6",component:"div",children:"Sound"}),e.jsx(o,{autoFocus:!0,color:"inherit",onClick:r,children:"Save"})]})}),e.jsxs(T,{children:[e.jsx(C,{button:!0,children:e.jsx(b,{primary:"Phone ringtone",secondary:"Titania"})}),e.jsx(Q,{}),e.jsx(C,{button:!0,children:e.jsx(b,{primary:"Default notification ringtone",secondary:"Tethys"})})]})]})]})},ce=()=>{const[s,i]=n.useState(!1),[t,r]=n.useState(!0),[c,l]=n.useState("sm"),a=()=>{i(!0)},p=()=>{i(!1)},I=y=>{l(y.target.value)},L=y=>{r(y.target.checked)};return e.jsxs(e.Fragment,{children:[e.jsx(o,{variant:"contained",color:"primary",fullWidth:!0,onClick:a,children:"Open Maxwidth Dialog"}),e.jsxs(h,{fullWidth:t,maxWidth:c,open:s,onClose:p,children:[e.jsx(x,{children:"Optional sizes"}),e.jsxs(j,{children:[e.jsx(g,{children:"You can set my maximum width and whether to adapt or not."}),e.jsxs(A,{noValidate:!0,component:"form",sx:{display:"flex",flexDirection:"column",m:"auto",width:"fit-content"},children:[e.jsxs(K,{sx:{mt:2,minWidth:120},children:[e.jsx(N,{htmlFor:"max-width",children:"maxWidth"}),e.jsxs(Y,{autoFocus:!0,value:c,onChange:I,label:"maxWidth",inputProps:{name:"max-width",id:"max-width"},children:[e.jsx(u,{value:!1,children:"false"}),e.jsx(u,{value:"xs",children:"xs"}),e.jsx(u,{value:"sm",children:"sm"}),e.jsx(u,{value:"md",children:"md"}),e.jsx(u,{value:"lg",children:"lg"}),e.jsx(u,{value:"xl",children:"xl"})]})]}),e.jsx(Z,{sx:{mt:1},control:e.jsx($,{checked:t,onChange:L}),label:"Full width"})]})]}),e.jsx(f,{children:e.jsx(o,{color:"error",variant:"contained",onClick:p,children:"Close"})})]})]})},de=()=>{const[s,i]=n.useState(!1),[t,r]=n.useState("paper"),c=p=>()=>{i(!0),r(p)},l=()=>{i(!1)},a=n.useRef(null);return n.useEffect(()=>{if(s){const{current:p}=a;p!==null&&p.focus()}},[s]),e.jsxs(e.Fragment,{children:[e.jsxs(_,{spacing:2,children:[e.jsx(o,{variant:"contained",color:"success",onClick:c("paper"),children:"Scroll with Paper"}),e.jsx(o,{variant:"contained",color:"secondary",onClick:c("body"),children:"Scroll with Body"})]}),e.jsxs(h,{open:s,onClose:l,scroll:t,"aria-labelledby":"scroll-dialog-title","aria-describedby":"scroll-dialog-description",children:[e.jsx(x,{id:"scroll-dialog-title",children:"Subscribe"}),e.jsx(j,{dividers:t==="paper",children:e.jsx(g,{id:"scroll-dialog-description",ref:a,tabIndex:-1,children:[...new Array(50)].map(()=>`Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`).join(`
`)})}),e.jsxs(f,{children:[e.jsx(o,{color:"error",onClick:l,children:"Cancel"}),e.jsx(o,{onClick:l,children:"Subscribe"})]})]})]})},me=()=>{const[s,i]=n.useState(!1),t=ee(),r=ie(t.breakpoints.down("md")),c=()=>{i(!0)},l=()=>{i(!1)};return e.jsxs(e.Fragment,{children:[e.jsx(o,{variant:"contained",color:"warning",fullWidth:!0,onClick:c,children:"Open Responsive Dialog"}),e.jsxs(h,{fullScreen:r,open:s,onClose:l,"aria-labelledby":"responsive-dialog-title",children:[e.jsx(x,{id:"responsive-dialog-title",children:"Use Google's location service?"}),e.jsx(j,{children:e.jsx(g,{children:"Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running."})}),e.jsxs(f,{children:[e.jsx(o,{autoFocus:!0,onClick:l,children:"Disagree"}),e.jsx(o,{onClick:l,autoFocus:!0,children:"Agree"})]})]})]})},he=[{to:"/",title:"Home"},{title:"Dialog"}],Di=()=>e.jsxs(P,{title:"Dialog",description:"this is Dialog page",children:[e.jsx(B,{title:"Dialog",items:he}),e.jsx(E,{title:"Dialog",children:e.jsxs(d,{container:!0,spacing:3,children:[e.jsx(d,{item:!0,xs:12,lg:4,sm:6,display:"flex",alignItems:"stretch",children:e.jsx(m,{title:"Simple",children:e.jsx(te,{})})}),e.jsx(d,{item:!0,xs:12,lg:4,sm:6,display:"flex",alignItems:"stretch",children:e.jsx(m,{title:"Alert",children:e.jsx(se,{})})}),e.jsx(d,{item:!0,xs:12,lg:4,sm:6,display:"flex",alignItems:"stretch",children:e.jsx(m,{title:"Transition",children:e.jsx(oe,{})})}),e.jsx(d,{item:!0,xs:12,lg:4,sm:6,display:"flex",alignItems:"stretch",children:e.jsx(m,{title:"Form",children:e.jsx(ne,{})})}),e.jsx(d,{item:!0,xs:12,lg:4,sm:6,display:"flex",alignItems:"stretch",children:e.jsx(m,{title:"Full screen",children:e.jsx(ae,{})})}),e.jsx(d,{item:!0,xs:12,lg:4,sm:6,display:"flex",alignItems:"stretch",children:e.jsx(m,{title:"Max width",children:e.jsx(ce,{})})}),e.jsx(d,{item:!0,xs:12,lg:4,sm:6,display:"flex",alignItems:"stretch",children:e.jsx(m,{title:"Scrolling Content",children:e.jsx(de,{})})}),e.jsx(d,{item:!0,xs:12,lg:4,sm:6,display:"flex",alignItems:"stretch",children:e.jsx(m,{title:"Responsive Fullscreen",children:e.jsx(me,{})})})]})})]});export{Di as default};