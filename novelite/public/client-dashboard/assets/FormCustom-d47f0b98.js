var q=Object.defineProperty,J=Object.defineProperties;var Q=Object.getOwnPropertyDescriptors;var p=Object.getOwnPropertySymbols;var S=Object.prototype.hasOwnProperty,F=Object.prototype.propertyIsEnumerable;var y=(t,i,s)=>i in t?q(t,i,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[i]=s,h=(t,i)=>{for(var s in i||(i={}))S.call(i,s)&&y(t,s,i[s]);if(p)for(var s of p(i))F.call(i,s)&&y(t,s,i[s]);return t},j=(t,i)=>J(t,Q(i));var T=(t,i)=>{var s={};for(var o in t)S.call(t,o)&&i.indexOf(o)<0&&(s[o]=t[o]);if(t!=null&&p)for(var o of p(t))i.indexOf(o)<0&&F.call(t,o)&&(s[o]=t[o]);return s};import{P as U,R as d,j as e}from"./index-f22446e5.js";import{B as X}from"./Breadcrumb-c1517ab0.js";import{P as Y}from"./PageContainer-53646ac6.js";import{C as c}from"./CustomTextField-6979225c.js";import{C as f}from"./CustomSelect-bb7b643c.js";import{C as Z}from"./CustomSlider-fe1d4d2e.js";import{C as _}from"./CustomRangeSlider-f3a1438d.js";import{C as g}from"./CustomSwitch-07128eb7.js";import{B as u}from"./Button-7d294087.js";import{s as I,T as k}from"./Typography-493ceae3.js";import{C as a}from"./CustomFormLabel-1e27e530.js";import{C as b}from"./CustomCheckbox-4449b219.js";import{C}from"./CustomRadio-9bd4be50.js";import{P as ee}from"./ParentCard-c6023dea.js";import{aO as te,aG as re}from"./index.esm-e0300107.js";import{G as r}from"./Grid-6c01a67e.js";import{M as m}from"./MenuItem-65e34cdb.js";import{L as M,A as D}from"./AdapterDateFns-e8091ed7.js";import{T as ie,D as se}from"./DateTimePicker-10a0f4f9.js";import{R as A}from"./RadioGroup-d6891a0e.js";import{F as v}from"./FormControl-902fa994.js";import{F as n}from"./FormControlLabel-1a8afdbd.js";import{B as x}from"./Box-f8c4e902.js";import{S as w}from"./Stack-8d476df3.js";import{a as le}from"./Slider-93346d09.js";import"./Link-f430d0ec.js";import"./TextField-eaaf417f.js";import"./useId-6ded1857.js";import"./formControlState-02eb4045.js";import"./useFormControl-c5cffc22.js";import"./Select-8c02317b.js";import"./Popover-9060c6fe.js";import"./Modal-99caf082.js";import"./Fade-6b4e951e.js";import"./utils-e57cfcaa.js";import"./ownerDocument-613eb639.js";import"./ownerWindow-698471fc.js";import"./createChainedFunction-0bab83cf.js";import"./Portal-bdf58041.js";import"./Paper-eafa25ad.js";import"./Grow-1067b88b.js";import"./List-24f7ff12.js";import"./ListContext-74b9cccd.js";import"./utils-5ebfb48b.js";import"./useControlled-7a3bcd39.js";import"./InputBase-6d6630d9.js";import"./Switch-cf222fee.js";import"./SwitchBase-43edb643.js";import"./Radio-64f1bc00.js";import"./Card-99a14ea7.js";import"./CardHeader-53ac68d8.js";import"./Divider-efe6cf9e.js";import"./dividerClasses-0b6de4a8.js";import"./CardContent-621adc32.js";import"./listItemIconClasses-5a5c13b9.js";import"./listItemTextClasses-243cffc5.js";import"./DialogContent-4bed6d00.js";import"./DialogActions-04b28c99.js";import"./ListItem-91f72477.js";import"./listItemButtonClasses-35818a18.js";import"./isMuiElement-0a1be5b6.js";import"./Chip-22604cd4.js";import"./IconButton-dffcd583.js";import"./InputAdornment-ad52364f.js";import"./useMediaQuery-39de02de.js";import"./index-70e737d1.js";import"./index-5a0c5ef2.js";import"./index-f401f0bd.js";import"./MobileDateTimePicker-b9fa9db5.js";import"./Tabs-fb2c1fbf.js";import"./KeyboardArrowRight-c0a54765.js";import"./Popper-7c45775d.js";import"./createPopper-319e19c4.js";import"./FormGroup-1d7adb6d.js";import"./Stack-58acc4b3.js";import"./createStack-e9d30bfe.js";import"./styled-af0837ae.js";import"./visuallyHidden-14c3de6e.js";const oe=I(u)(({theme:t})=>({backgroundColor:t.palette.grey[100]})),ae=I(u)(({theme:t})=>({border:`1px solid ${t.palette.grey[100]}`,color:t.palette.text.primary,"&:hover":{border:t.palette.mode==="dark"?`1px solid ${t.palette.grey[200]}`:`1px solid ${t.palette.grey[300]}`,backgroundColor:t.palette.grey[100],color:t.palette.text.secondary}})),B=t=>{const o=t,{children:i}=o,s=T(o,["children"]);return e.jsxs(le,j(h({},s),{children:[i,e.jsx(x,{sx:{height:9,width:"2px",backgroundColor:"#fff"}}),e.jsx(x,{sx:{height:"14px",width:"2px",backgroundColor:"#fff",ml:"2px"}}),e.jsx(x,{sx:{height:9,width:"2px",backgroundColor:"#fff",ml:"2px"}})]}))};B.propTypes={children:U.node};const Pt=()=>{const[t,i]=d.useState("1"),[s,o]=d.useState("1"),[P,z]=d.useState("1"),V=l=>{i(l.target.value)},W=l=>{o(l.target.value)},E=l=>{z(l.target.value)},[N,R]=d.useState(null),[L,O]=d.useState(null),[G,$]=d.useState(30),H=(l,K)=>{$(K)};return e.jsxs(Y,{title:"Custom Form",description:"this is Custom Form page",children:[e.jsx(X,{title:"Custom Form",subtitle:"custom designed element"}),e.jsx(ee,{title:"Custom Form",children:e.jsxs(r,{container:!0,spacing:3,children:[e.jsxs(r,{item:!0,xs:12,sm:12,lg:4,children:[e.jsx(a,{htmlFor:"name",children:"Name"}),e.jsx(c,{id:"name",placeholder:"Enter text",variant:"outlined",fullWidth:!0,size:"small"}),e.jsx(a,{htmlFor:"demo-simple-select",children:"Select Dropdown"}),e.jsxs(f,{labelId:"demo-simple-select-label",id:"demo-simple-select",value:t,onChange:V,fullWidth:!0,size:"small",children:[e.jsx(m,{value:1,children:"One"}),e.jsx(m,{value:2,children:"Two"}),e.jsx(m,{value:3,children:"Three"})]})]}),e.jsxs(r,{item:!0,xs:12,sm:12,lg:4,children:[e.jsx(a,{htmlFor:"cname",children:"Company Name"}),e.jsx(c,{id:"cname",placeholder:"Enter text",variant:"outlined",fullWidth:!0,size:"small"}),e.jsx(a,{htmlFor:"time",children:"Time"}),e.jsx(M,{dateAdapter:D,children:e.jsx(ie,{value:L,onChange:l=>{O(l)},renderInput:l=>e.jsx(c,j(h({size:"small"},l),{fullWidth:!0,sx:{"& .MuiSvgIcon-root":{width:"18px",height:"18px"},"& .MuiFormHelperText-root":{display:"none"}}}))})})]}),e.jsxs(r,{item:!0,xs:12,sm:12,lg:4,children:[e.jsx(a,{htmlFor:"disabled",children:"Industry Type"}),e.jsx(c,{id:"disabled",placeholder:"Disabled filled",variant:"outlined",fullWidth:!0,disabled:!0,size:"small",sx:{"& .MuiOutlinedInput-notchedOutline":{borderColor:l=>`${l.palette.mode==="dark"?"rgba(255, 255, 255, 0.12) !important":"#dee3e9 !important"}`}}}),e.jsx(a,{htmlFor:"date",children:"Date"}),e.jsx(M,{dateAdapter:D,children:e.jsx(se,{renderInput:l=>e.jsx(c,j(h({},l),{fullWidth:!0,size:"small",sx:{"& .MuiSvgIcon-root":{width:18,height:18},"& .MuiFormHelperText-root":{display:"none"}}})),placeholder:"DateTimePicker",value:N,onChange:l=>{R(l)}})})]}),e.jsxs(r,{item:!0,xs:12,sm:12,lg:12,children:[e.jsx(a,{children:"Lorem ipsum dolor sit amet"}),e.jsx(A,{"aria-label":"gender",defaultValue:"radio1",name:"radio-buttons-group",children:e.jsxs(r,{container:!0,children:[e.jsx(r,{item:!0,xs:12,sm:4,lg:4,children:e.jsx(v,{component:"fieldset",children:e.jsx(n,{value:"radio1",control:e.jsx(C,{}),label:"Male"})})}),e.jsx(r,{item:!0,xs:12,sm:4,lg:4,children:e.jsx(v,{component:"fieldset",children:e.jsx(n,{value:"radio2",control:e.jsx(C,{}),label:"Female"})})}),e.jsx(r,{item:!0,xs:12,sm:4,lg:4,children:e.jsx(v,{component:"fieldset",children:e.jsx(n,{value:"radio3",control:e.jsx(C,{disabled:!0}),label:"Disabled"})})})]})})]}),e.jsxs(r,{item:!0,xs:12,sm:12,lg:12,children:[e.jsx(a,{children:"Industry Type"}),e.jsx(A,{"aria-label":"gender",defaultValue:"radio1",name:"radio-buttons-group",children:e.jsxs(r,{container:!0,children:[e.jsx(r,{item:!0,xs:12,sm:4,lg:4,children:e.jsx(n,{control:e.jsx(b,{defaultChecked:!0}),label:"Enter text"})}),e.jsx(r,{item:!0,xs:12,sm:4,lg:4,children:e.jsx(n,{control:e.jsx(b,{}),label:"Enter text"})}),e.jsx(r,{item:!0,xs:12,sm:4,lg:4,children:e.jsx(n,{disabled:!0,control:e.jsx(b,{disabled:!0}),label:"Disabled"})})]})})]}),e.jsxs(r,{item:!0,xs:12,sm:12,lg:4,children:[e.jsx(a,{children:"Slider"}),e.jsx(_,{components:{Thumb:B},getAriaLabel:l=>l===0?"Minimum price":"Maximum price",defaultValue:[20,40]}),e.jsxs(r,{container:!0,spacing:2,mt:1,children:[e.jsx(r,{item:!0,xs:12,sm:6,lg:6,children:e.jsxs(f,{id:"range1",value:s,onChange:W,fullWidth:!0,size:"small",children:[e.jsx(m,{value:1,children:"750"}),e.jsx(m,{value:2,children:"850"}),e.jsx(m,{value:3,children:"950"})]})}),e.jsx(r,{item:!0,xs:12,sm:6,lg:6,children:e.jsxs(f,{id:"rang2",value:P,onChange:E,fullWidth:!0,size:"small",children:[e.jsx(m,{value:1,children:"950"}),e.jsx(m,{value:2,children:"1050"}),e.jsx(m,{value:3,children:"1150"})]})})]}),e.jsx(a,{sx:{mt:3},children:"Volume"}),e.jsx(Z,{"aria-label":"Volume",value:G,onChange:H}),e.jsxs(x,{display:"flex",alignItems:"stretch",children:[e.jsx(k,{children:e.jsx(te,{width:20})}),e.jsx(x,{ml:"auto",children:e.jsx(k,{children:e.jsx(re,{width:20})})})]})]}),e.jsxs(r,{item:!0,xs:12,sm:12,lg:12,children:[e.jsx(a,{children:"Switch"}),e.jsxs(r,{container:!0,spacing:0,children:[e.jsx(r,{item:!0,xs:12,sm:6,lg:3,children:e.jsx(n,{control:e.jsx(g,{}),label:"Enter text"})}),e.jsx(r,{item:!0,xs:12,sm:6,lg:3,children:e.jsx(n,{control:e.jsx(g,{defaultChecked:!0}),label:"Enter text"})}),e.jsx(r,{item:!0,xs:12,sm:6,lg:3,children:e.jsx(n,{control:e.jsx(g,{disabled:!0,sx:{"& .MuiSwitch-switchBase.Mui-disabled+.MuiSwitch-track":{opacity:1}}}),label:"Disabled"})}),e.jsx(r,{item:!0,xs:12,sm:6,lg:3,children:e.jsx(n,{control:e.jsx(g,{defaultChecked:!0,disabled:!0,sx:{"& .MuiSwitch-switchBase.Mui-checked.Mui-disabled":{opacity:.5}}}),label:"Disabled"})})]}),e.jsxs(w,{direction:{xs:"column",sm:"row"},spacing:2,justifyContent:"space-between",mt:2,children:[e.jsxs(w,{spacing:1,direction:"row",children:[e.jsx(u,{variant:"contained",color:"primary",children:"Add New"}),e.jsx(oe,{variant:"contained",disabled:!0,children:"Add New"}),e.jsx(ae,{variant:"outlined",children:"Add New"})]}),e.jsxs(w,{direction:"row",spacing:1,children:[e.jsx(u,{variant:"contained",color:"secondary",children:"Add New"}),e.jsx(u,{variant:"contained",color:"success",children:"Add New"})]})]})]})]})})]})};export{Pt as default};
