var O=Object.defineProperty,L=Object.defineProperties;var U=Object.getOwnPropertyDescriptors;var w=Object.getOwnPropertySymbols;var T=Object.prototype.hasOwnProperty,F=Object.prototype.propertyIsEnumerable;var P=(n,a,o)=>a in n?O(n,a,{enumerable:!0,configurable:!0,writable:!0,value:o}):n[a]=o,p=(n,a)=>{for(var o in a||(a={}))T.call(a,o)&&P(n,o,a[o]);if(w)for(var o of w(a))F.call(a,o)&&P(n,o,a[o]);return n},W=(n,a)=>L(n,U(a));var B=(n,a)=>{var o={};for(var c in n)T.call(n,c)&&a.indexOf(c)<0&&(o[c]=n[c]);if(n!=null&&w)for(var c of w(n))a.indexOf(c)<0&&F.call(n,c)&&(o[c]=n[c]);return o};import{R as I,j as e,f as k,r as Y}from"./index-f22446e5.js";import{P as $}from"./PageContainer-53646ac6.js";import{B as K}from"./Breadcrumb-c1517ab0.js";import{B as h}from"./BlankCard-3b4c954c.js";import{C as x}from"./CustomTextField-6979225c.js";import{C as d}from"./CustomFormLabel-1e27e530.js";import{C as M}from"./CustomSelect-bb7b643c.js";import{G as i}from"./Grid-6c01a67e.js";import{C as m}from"./CardContent-621adc32.js";import{T as r}from"./Typography-493ceae3.js";import{B as t}from"./Box-f8c4e902.js";import{A as u}from"./Avatar-934745ac.js";import{S as s}from"./Stack-58acc4b3.js";import{B as l}from"./Button-7d294087.js";import{M as R}from"./MenuItem-65e34cdb.js";import{ap as G,aq as V,ar as E,as as q,E as H,at as J,au as Q,av as X,aw as _,ax as Z,ay as ee,a3 as N,a7 as re,x as D,ai as te,az as ie,aA as ne}from"./index.esm-e0300107.js";import{C as v}from"./CustomSwitch-07128eb7.js";import{T as A}from"./Tooltip-c24d37bb.js";import{I as b}from"./IconButton-dffcd583.js";import{D as y}from"./Divider-efe6cf9e.js";import{T as se,a as S}from"./Tabs-fb2c1fbf.js";import"./Link-f430d0ec.js";import"./Card-99a14ea7.js";import"./Paper-eafa25ad.js";import"./TextField-eaaf417f.js";import"./FormControl-902fa994.js";import"./utils-5ebfb48b.js";import"./useFormControl-c5cffc22.js";import"./isMuiElement-0a1be5b6.js";import"./useId-6ded1857.js";import"./formControlState-02eb4045.js";import"./Select-8c02317b.js";import"./Popover-9060c6fe.js";import"./Modal-99caf082.js";import"./Fade-6b4e951e.js";import"./utils-e57cfcaa.js";import"./ownerDocument-613eb639.js";import"./ownerWindow-698471fc.js";import"./createChainedFunction-0bab83cf.js";import"./Portal-bdf58041.js";import"./Grow-1067b88b.js";import"./List-24f7ff12.js";import"./ListContext-74b9cccd.js";import"./useControlled-7a3bcd39.js";import"./InputBase-6d6630d9.js";import"./createStack-e9d30bfe.js";import"./styled-af0837ae.js";import"./listItemIconClasses-5a5c13b9.js";import"./dividerClasses-0b6de4a8.js";import"./listItemTextClasses-243cffc5.js";import"./Switch-cf222fee.js";import"./SwitchBase-43edb643.js";import"./Popper-7c45775d.js";import"./createPopper-319e19c4.js";import"./KeyboardArrowRight-c0a54765.js";const ae=[{value:"us",label:"United States"},{value:"uk",label:"United Kingdom"},{value:"india",label:"India"},{value:"russia",label:"Russia"}],oe=[{value:"us",label:"US Dollar ($)"},{value:"uk",label:"United Kingdom (Pound)"},{value:"india",label:"India (INR)"},{value:"russia",label:"Russia (Ruble)"}],le=()=>{const[n,a]=I.useState("india"),o=j=>{a(j.target.value)},[c,g]=I.useState("india"),f=j=>{g(j.target.value)};return e.jsxs(i,{container:!0,spacing:3,children:[e.jsx(i,{item:!0,xs:12,lg:6,children:e.jsx(h,{children:e.jsxs(m,{children:[e.jsx(r,{variant:"h5",mb:1,children:"Change Profile"}),e.jsx(r,{color:"textSecondary",mb:3,children:"Change your profile picture from here"}),e.jsx(t,{textAlign:"center",display:"flex",justifyContent:"center",children:e.jsxs(t,{children:[e.jsx(u,{src:k,alt:k,sx:{width:120,height:120,margin:"0 auto"}}),e.jsxs(s,{direction:"row",justifyContent:"center",spacing:2,my:3,children:[e.jsxs(l,{variant:"contained",color:"primary",component:"label",children:["Upload",e.jsx("input",{hidden:!0,accept:"image/*",multiple:!0,type:"file"})]}),e.jsx(l,{variant:"outlined",color:"error",children:"Reset"})]}),e.jsx(r,{variant:"subtitle1",color:"textSecondary",mb:4,children:"Allowed JPG, GIF or PNG. Max size of 800K"})]})})]})})}),e.jsx(i,{item:!0,xs:12,lg:6,children:e.jsx(h,{children:e.jsxs(m,{children:[e.jsx(r,{variant:"h5",mb:1,children:"Change Password"}),e.jsx(r,{color:"textSecondary",mb:3,children:"To change your password please confirm here"}),e.jsxs("form",{children:[e.jsx(d,{sx:{mt:0},htmlFor:"text-cpwd",children:"Current Password"}),e.jsx(x,{id:"text-cpwd",value:"MathewAnderson",variant:"outlined",fullWidth:!0,type:"password"}),e.jsx(d,{htmlFor:"text-npwd",children:"New Password"}),e.jsx(x,{id:"text-npwd",value:"MathewAnderson",variant:"outlined",fullWidth:!0,type:"password"}),e.jsx(d,{htmlFor:"text-conpwd",children:"Confirm Password"}),e.jsx(x,{id:"text-conpwd",value:"MathewAnderson",variant:"outlined",fullWidth:!0,type:"password"})]})]})})}),e.jsxs(i,{item:!0,xs:12,children:[e.jsx(h,{children:e.jsxs(m,{children:[e.jsx(r,{variant:"h5",mb:1,children:"Personal Details"}),e.jsx(r,{color:"textSecondary",mb:3,children:"To change your personal detail , edit and save from here"}),e.jsx("form",{children:e.jsxs(i,{container:!0,spacing:3,children:[e.jsxs(i,{item:!0,xs:12,sm:6,children:[e.jsx(d,{sx:{mt:0},htmlFor:"text-name",children:"Your Name"}),e.jsx(x,{id:"text-name",value:"Mathew Anderson",variant:"outlined",fullWidth:!0})]}),e.jsxs(i,{item:!0,xs:12,sm:6,children:[e.jsx(d,{sx:{mt:0},htmlFor:"text-store-name",children:"Store Name"}),e.jsx(x,{id:"text-store-name",value:"Maxima Studio",variant:"outlined",fullWidth:!0})]}),e.jsxs(i,{item:!0,xs:12,sm:6,children:[e.jsx(d,{sx:{mt:0},htmlFor:"text-location",children:"Location"}),e.jsx(M,{fullWidth:!0,id:"text-location",variant:"outlined",value:n,onChange:o,children:ae.map(j=>e.jsx(R,{value:j.value,children:j.label},j.value))})]}),e.jsxs(i,{item:!0,xs:12,sm:6,children:[e.jsx(d,{sx:{mt:0},htmlFor:"text-currency",children:"Currency"}),e.jsx(M,{fullWidth:!0,id:"text-currency",variant:"outlined",value:c,onChange:f,children:oe.map(j=>e.jsx(R,{value:j.value,children:j.label},j.value))})]}),e.jsxs(i,{item:!0,xs:12,sm:6,children:[e.jsx(d,{sx:{mt:0},htmlFor:"text-email",children:"Email"}),e.jsx(x,{id:"text-email",value:"info@modernize.com",variant:"outlined",fullWidth:!0})]}),e.jsxs(i,{item:!0,xs:12,sm:6,children:[e.jsx(d,{sx:{mt:0},htmlFor:"text-phone",children:"Phone"}),e.jsx(x,{id:"text-phone",value:"+91 12345 65478",variant:"outlined",fullWidth:!0})]}),e.jsxs(i,{item:!0,xs:12,children:[e.jsx(d,{sx:{mt:0},htmlFor:"text-address",children:"Address"}),e.jsx(x,{id:"text-address",value:"814 Howard Street, 120065, India",variant:"outlined",fullWidth:!0})]})]})})]})}),e.jsxs(s,{direction:"row",spacing:2,sx:{justifyContent:"end"},mt:3,children:[e.jsx(l,{size:"large",variant:"contained",color:"primary",children:"Save"}),e.jsx(l,{size:"large",variant:"text",color:"error",children:"Cancel"})]})]})]})},ce=()=>e.jsxs(e.Fragment,{children:[e.jsxs(i,{container:!0,spacing:3,justifyContent:"center",children:[e.jsx(i,{item:!0,xs:12,lg:9,children:e.jsx(h,{children:e.jsxs(m,{children:[e.jsx(r,{variant:"h4",mb:2,children:"Notification Preferences"}),e.jsx(r,{color:"textSecondary",children:"Select the notificaitons ou would like to receive via email. Please note that you cannot opt out of receving service messages, such as payment, security or legal notifications."}),e.jsx(d,{htmlFor:"text-email",children:"Email Address*"}),e.jsx(x,{id:"text-email",variant:"outlined",fullWidth:!0}),e.jsx(r,{color:"textSecondary",children:"Required for notificaitons."}),e.jsxs(s,{direction:"row",spacing:2,mt:4,children:[e.jsx(u,{variant:"rounded",sx:{bgcolor:"grey.100",color:"grey.500",width:48,height:48},children:e.jsx(G,{size:"22"})}),e.jsxs(t,{children:[e.jsx(r,{variant:"h6",mb:1,children:"Our newsletter"}),e.jsx(r,{variant:"subtitle1",color:"textSecondary",children:"We'll always let you know about important changes"})]}),e.jsx(t,{sx:{ml:"auto !important"},children:e.jsx(v,{})})]}),e.jsxs(s,{direction:"row",spacing:2,mt:3,children:[e.jsx(u,{variant:"rounded",sx:{bgcolor:"grey.100",color:"grey.500",width:48,height:48},children:e.jsx(V,{size:"22"})}),e.jsxs(t,{children:[e.jsx(r,{variant:"h6",mb:1,children:"Order Confirmation"}),e.jsx(r,{variant:"subtitle1",color:"textSecondary",children:"You will be notified when customer order any product"})]}),e.jsx(t,{sx:{ml:"auto !important"},children:e.jsx(v,{checked:!0})})]}),e.jsxs(s,{direction:"row",spacing:2,mt:3,children:[e.jsx(u,{variant:"rounded",sx:{bgcolor:"grey.100",color:"grey.500",width:48,height:48},children:e.jsx(E,{size:"22"})}),e.jsxs(t,{children:[e.jsx(r,{variant:"h6",mb:1,children:"Order Status Changed"}),e.jsx(r,{variant:"subtitle1",color:"textSecondary",children:"You will be notified when customer make changes to the order"})]}),e.jsx(t,{sx:{ml:"auto !important"},children:e.jsx(v,{checked:!0})})]}),e.jsxs(s,{direction:"row",spacing:2,mt:3,children:[e.jsx(u,{variant:"rounded",sx:{bgcolor:"grey.100",color:"grey.500",width:48,height:48},children:e.jsx(q,{size:"22"})}),e.jsxs(t,{children:[e.jsx(r,{variant:"h6",mb:1,children:"Order Delivered"}),e.jsx(r,{variant:"subtitle1",color:"textSecondary",children:"You will be notified once the order is delivered"})]}),e.jsx(t,{sx:{ml:"auto !important"},children:e.jsx(v,{})})]}),e.jsxs(s,{direction:"row",spacing:2,mt:3,children:[e.jsx(u,{variant:"rounded",sx:{bgcolor:"grey.100",color:"grey.500",width:48,height:48},children:e.jsx(H,{size:"22"})}),e.jsxs(t,{children:[e.jsx(r,{variant:"h6",mb:1,children:"Email Notification"}),e.jsx(r,{variant:"subtitle1",color:"textSecondary",children:"Turn on email notificaiton to get updates through email"})]}),e.jsx(t,{sx:{ml:"auto !important"},children:e.jsx(v,{checked:!0})})]})]})})}),e.jsx(i,{item:!0,xs:12,lg:9,children:e.jsx(h,{children:e.jsxs(m,{children:[e.jsx(r,{variant:"h4",mb:2,children:"Date & Time"}),e.jsx(r,{color:"textSecondary",children:"Time zones and calendar display settings."}),e.jsxs(s,{direction:"row",spacing:2,mt:4,children:[e.jsx(u,{variant:"rounded",sx:{bgcolor:"grey.100",color:"grey.500",width:48,height:48},children:e.jsx(E,{size:"22"})}),e.jsxs(t,{children:[e.jsx(r,{variant:"subtitle1",color:"textSecondary",children:"Time zone"}),e.jsx(r,{variant:"h6",mb:1,children:"(UTC + 02:00) Athens, Bucharet"})]}),e.jsx(t,{sx:{ml:"auto !important"},children:e.jsx(A,{title:"Download",children:e.jsx(b,{children:e.jsx(J,{size:"22"})})})})]})]})})}),e.jsx(i,{item:!0,xs:12,lg:9,children:e.jsx(h,{children:e.jsxs(m,{children:[e.jsx(r,{variant:"h4",mb:2,children:"Ignore Tracking"}),e.jsxs(s,{direction:"row",spacing:2,mt:4,children:[e.jsx(u,{variant:"rounded",sx:{bgcolor:"grey.100",color:"grey.500",width:48,height:48},children:e.jsx(Q,{size:"22"})}),e.jsxs(t,{children:[e.jsx(r,{variant:"h6",mb:1,children:"Ignore Browser Tracking"}),e.jsx(r,{variant:"subtitle1",color:"textSecondary",children:"Browser Cookie"})]}),e.jsx(t,{sx:{ml:"auto !important"},children:e.jsx(v,{})})]})]})})})]}),e.jsxs(s,{direction:"row",spacing:2,sx:{justifyContent:"end"},mt:3,children:[e.jsx(l,{size:"large",variant:"contained",color:"primary",children:"Save"}),e.jsx(l,{size:"large",variant:"text",color:"error",children:"Cancel"})]})]}),de=()=>e.jsxs(e.Fragment,{children:[e.jsxs(i,{container:!0,spacing:3,justifyContent:"center",children:[e.jsx(i,{item:!0,xs:12,lg:9,children:e.jsx(h,{children:e.jsxs(m,{children:[e.jsx(r,{variant:"h4",mb:2,children:"Billing Information"}),e.jsxs(i,{container:!0,spacing:3,children:[e.jsxs(i,{item:!0,xs:12,sm:6,children:[e.jsx(d,{sx:{mt:0},htmlFor:"text-bname",children:"Business Name*"}),e.jsx(x,{id:"text-bname",value:"Visitor Analytics",variant:"outlined",fullWidth:!0})]}),e.jsxs(i,{item:!0,xs:12,sm:6,children:[e.jsx(d,{sx:{mt:0},htmlFor:"text-bsector",children:"Business Sector*"}),e.jsx(x,{id:"text-bsector",value:"Arts, Media & Entertainment",variant:"outlined",fullWidth:!0})]}),e.jsxs(i,{item:!0,xs:12,sm:6,children:[e.jsx(d,{sx:{mt:0},htmlFor:"text-baddress",children:"Business Address*"}),e.jsx(x,{id:"text-baddress",value:"",variant:"outlined",fullWidth:!0})]}),e.jsxs(i,{item:!0,xs:12,sm:6,children:[e.jsx(d,{sx:{mt:0},htmlFor:"text-bcy",children:"Country*"}),e.jsx(x,{id:"text-bcy",value:"Romania",variant:"outlined",fullWidth:!0})]}),e.jsxs(i,{item:!0,xs:12,sm:6,children:[e.jsx(d,{sx:{mt:0},htmlFor:"text-fname",children:"First Name*"}),e.jsx(x,{id:"text-fname",value:"",variant:"outlined",fullWidth:!0})]}),e.jsxs(i,{item:!0,xs:12,sm:6,children:[e.jsx(d,{sx:{mt:0},htmlFor:"text-lname",children:"Last Name*"}),e.jsx(x,{id:"text-lname",value:"",variant:"outlined",fullWidth:!0})]})]})]})})}),e.jsx(i,{item:!0,xs:12,lg:9,children:e.jsx(h,{children:e.jsxs(m,{children:[e.jsxs(r,{variant:"h4",display:"flex",mb:2,children:["Current Plan :",e.jsx(r,{variant:"h4",component:"div",ml:"2px",color:"success.main",children:"Executive"})]}),e.jsx(r,{color:"textSecondary",children:"Thanks for being a premium member and supporting our development."}),e.jsxs(s,{direction:"row",spacing:2,mt:4,mb:2,children:[e.jsx(u,{variant:"rounded",sx:{bgcolor:"grey.100",color:"grey.500",width:48,height:48},children:e.jsx(X,{size:"22"})}),e.jsxs(t,{children:[e.jsx(r,{variant:"subtitle1",color:"textSecondary",children:"Current Plan"}),e.jsx(r,{variant:"h6",mb:1,children:"750.000 Monthly Visits"})]}),e.jsx(t,{sx:{ml:"auto !important"},children:e.jsx(A,{title:"Add",children:e.jsx(b,{children:e.jsx(_,{size:"22"})})})})]}),e.jsxs(s,{direction:"row",spacing:2,children:[e.jsx(l,{variant:"contained",color:"primary",children:"Change Plan"}),e.jsx(l,{variant:"outlined",color:"error",children:"Reset Plan"})]})]})})}),e.jsx(i,{item:!0,xs:12,lg:9,children:e.jsx(h,{children:e.jsxs(m,{children:[e.jsx(r,{variant:"h4",mb:2,children:"Payment Method"}),e.jsx(r,{color:"textSecondary",children:"On 26 December, 2023"}),e.jsxs(s,{direction:"row",spacing:2,mt:4,children:[e.jsx(u,{variant:"rounded",sx:{bgcolor:"grey.100",color:"grey.500",width:48,height:48},children:e.jsx(Z,{size:"22"})}),e.jsxs(t,{children:[e.jsx(r,{variant:"h6",mb:1,children:"Visa"}),e.jsx(r,{variant:"subtitle1",fontWeight:600,children:"*****2102"})]}),e.jsx(t,{sx:{ml:"auto !important"},children:e.jsx(A,{title:"Edit",children:e.jsx(b,{children:e.jsx(ee,{size:"22"})})})})]}),e.jsx(r,{color:"textSecondary",my:1,children:"If you updated your payment method, it will only be dislpayed here after your next billing cycle."}),e.jsx(l,{variant:"outlined",color:"error",children:"Cancel Subscription"})]})})})]}),e.jsxs(s,{direction:"row",spacing:2,sx:{justifyContent:"end"},mt:3,children:[e.jsx(l,{size:"large",variant:"contained",color:"primary",children:"Save"}),e.jsx(l,{size:"large",variant:"text",color:"error",children:"Cancel"})]})]}),xe=()=>e.jsxs(e.Fragment,{children:[e.jsxs(i,{container:!0,spacing:3,justifyContent:"center",children:[e.jsx(i,{item:!0,xs:12,lg:8,children:e.jsx(h,{children:e.jsxs(m,{children:[e.jsx(r,{variant:"h4",mb:2,children:"Two-factor Authentication"}),e.jsxs(s,{direction:"row",justifyContent:"space-between",alignItems:"center",mb:4,children:[e.jsx(r,{variant:"subtitle1",color:"textSecondary",children:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis sapiente sunt earum officiis laboriosam ut."}),e.jsx(l,{variant:"contained",color:"primary",children:"Enable"})]}),e.jsx(y,{}),e.jsxs(s,{direction:"row",spacing:2,py:2,alignItems:"center",children:[e.jsxs(t,{children:[e.jsx(r,{variant:"h6",children:"Authentication App"}),e.jsx(r,{variant:"subtitle1",color:"textSecondary",children:"Google auth app"})]}),e.jsx(t,{sx:{ml:"auto !important"},children:e.jsx(l,{variant:"text",color:"primary",children:"Setup"})})]}),e.jsx(y,{}),e.jsxs(s,{direction:"row",spacing:2,py:2,alignItems:"center",children:[e.jsxs(t,{children:[e.jsx(r,{variant:"h6",children:"Another e-mail"}),e.jsx(r,{variant:"subtitle1",color:"textSecondary",children:"E-mail to send verification link"})]}),e.jsx(t,{sx:{ml:"auto !important"},children:e.jsx(l,{variant:"text",color:"primary",children:"Setup"})})]}),e.jsx(y,{}),e.jsxs(s,{direction:"row",spacing:2,py:2,alignItems:"center",children:[e.jsxs(t,{children:[e.jsx(r,{variant:"h6",children:"SMS Recovery"}),e.jsx(r,{variant:"subtitle1",color:"textSecondary",children:"Your phone number or something"})]}),e.jsx(t,{sx:{ml:"auto !important"},children:e.jsx(l,{variant:"text",color:"primary",children:"Setup"})})]})]})})}),e.jsx(i,{item:!0,xs:12,lg:4,children:e.jsx(h,{children:e.jsxs(m,{children:[e.jsx(u,{variant:"rounded",sx:{bgcolor:"primary.light",color:"primary.main",width:48,height:48},children:e.jsx(N,{size:"26"})}),e.jsx(r,{variant:"h5",mt:2,children:"Devices"}),e.jsx(r,{color:"textSecondary",mt:1,mb:2,children:"Lorem ipsum dolor sit amet consectetur adipisicing elit Rem."}),e.jsx(l,{variant:"contained",color:"primary",children:"Sign out from all devices"}),e.jsxs(s,{direction:"row",spacing:2,py:2,mt:3,alignItems:"center",children:[e.jsx(re,{size:"26"}),e.jsxs(t,{children:[e.jsx(r,{variant:"h6",children:"iPhone 14"}),e.jsx(r,{variant:"subtitle1",color:"textSecondary",children:"London UK, Oct 23 at 1:15 AM"})]}),e.jsx(t,{sx:{ml:"auto !important"},children:e.jsx(b,{children:e.jsx(D,{size:"22"})})})]}),e.jsx(y,{}),e.jsxs(s,{direction:"row",spacing:2,py:2,alignItems:"center",children:[e.jsx(N,{size:"26"}),e.jsxs(t,{children:[e.jsx(r,{variant:"h6",children:"Macbook Air "}),e.jsx(r,{variant:"subtitle1",color:"textSecondary",children:"Gujarat India, Oct 24 at 3:15 AM"})]}),e.jsx(t,{sx:{ml:"auto !important"},children:e.jsx(b,{children:e.jsx(D,{size:"22"})})})]}),e.jsx(s,{children:e.jsx(l,{variant:"text",color:"primary",children:"Need Help ?"})})]})})})]}),e.jsxs(s,{direction:"row",spacing:2,sx:{justifyContent:"end"},mt:3,children:[e.jsx(l,{size:"large",variant:"contained",color:"primary",children:"Save"}),e.jsx(l,{size:"large",variant:"text",color:"error",children:"Cancel"})]})]}),he=[{to:"/",title:"Home"},{title:"Account Setting"}];function C(n){const f=n,{children:a,value:o,index:c}=f,g=B(f,["children","value","index"]);return e.jsx("div",W(p({role:"tabpanel",hidden:o!==c,id:`simple-tabpanel-${c}`,"aria-labelledby":`simple-tab-${c}`},g),{children:o===c&&e.jsx(t,{children:a})}))}function z(n){return{id:`simple-tab-${n}`,"aria-controls":`simple-tabpanel-${n}`}}const ur=()=>{const[n,a]=Y.useState(0),o=(c,g)=>{a(g)};return e.jsxs($,{title:"Account Setting",description:"this is Account Setting page",children:[e.jsx(K,{title:"Account Setting",items:he}),e.jsx(i,{container:!0,spacing:3,children:e.jsx(i,{item:!0,xs:12,children:e.jsxs(h,{children:[e.jsx(t,{sx:{maxWidth:{xs:320,sm:480}},children:e.jsxs(se,{value:n,onChange:o,scrollButtons:"auto","aria-label":"basic tabs example",variant:"scrollable",children:[e.jsx(S,p({iconPosition:"start",icon:e.jsx(te,{size:"22"}),label:"Account"},z(0))),e.jsx(S,p({iconPosition:"start",icon:e.jsx(ie,{size:"22"}),label:"Notifications"},z(1))),e.jsx(S,p({iconPosition:"start",icon:e.jsx(G,{size:"22"}),label:"Bills"},z(2))),e.jsx(S,p({iconPosition:"start",icon:e.jsx(ne,{size:"22"}),label:"Security"},z(3)))]})}),e.jsx(y,{}),e.jsxs(m,{children:[e.jsx(C,{value:n,index:0,children:e.jsx(le,{})}),e.jsx(C,{value:n,index:1,children:e.jsx(ce,{})}),e.jsx(C,{value:n,index:2,children:e.jsx(de,{})}),e.jsx(C,{value:n,index:3,children:e.jsx(xe,{})})]})]})})})]})};export{ur as default};