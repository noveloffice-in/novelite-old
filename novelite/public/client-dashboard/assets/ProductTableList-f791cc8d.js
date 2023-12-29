var Q=Object.defineProperty;var w=Object.getOwnPropertySymbols;var U=Object.prototype.hasOwnProperty,V=Object.prototype.propertyIsEnumerable;var A=(r,n,t)=>n in r?Q(r,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[n]=t,D=(r,n)=>{for(var t in n||(n={}))U.call(n,t)&&A(r,t,n[t]);if(w)for(var t of w(n))V.call(n,t)&&A(r,t,n[t]);return r};import{P as f,r as h,aF as Y,e as Z,j as e,ao as _}from"./index-f22446e5.js";import{C as E}from"./CustomCheckbox-4449b219.js";import{C as ee}from"./CustomSwitch-07128eb7.js";import{x as te,D as se,H as ne,aN as re}from"./index.esm-e0300107.js";import{B as u}from"./Box-f8c4e902.js";import{P as ae}from"./Paper-eafa25ad.js";import{T as ie,a as ce,e as le,c as k,d as x,b as oe}from"./TableRow-5d89add1.js";import{A as de}from"./Avatar-934745ac.js";import{T as g}from"./Typography-493ceae3.js";import{f as he}from"./index-70e737d1.js";import{T as y}from"./Tooltip-c24d37bb.js";import{I as R}from"./IconButton-dffcd583.js";import{T as me}from"./TablePagination-e523b84e.js";import{F as ue}from"./FormControlLabel-1a8afdbd.js";import{T as xe}from"./TableSortLabel-e76b7457.js";import{v as pe}from"./visuallyHidden-14c3de6e.js";import{T as fe}from"./Toolbar-1cf165db.js";import{T as ge}from"./TextField-eaaf417f.js";import{I as je}from"./InputAdornment-ad52364f.js";import{u as be}from"./useDispatch-ce130263.js";function z(r,n,t){return n[t]<r[t]?-1:n[t]>r[t]?1:0}function Se(r,n){return r==="desc"?(t,i)=>z(t,i,n):(t,i)=>-z(t,i,n)}function Pe(r,n){const t=r.map((i,a)=>[i,a]);return t.sort((i,a)=>{const m=n(i[0],a[0]);return m!==0?m:i[1]-a[1]}),t.map(i=>i[0])}const Te=[{id:"name",numeric:!1,disablePadding:!1,label:"Products"},{id:"pname",numeric:!1,disablePadding:!1,label:"Date"},{id:"status",numeric:!1,disablePadding:!1,label:"Status"},{id:"price",numeric:!1,disablePadding:!1,label:"Price"},{id:"action",numeric:!1,disablePadding:!1,label:"Action"}];function O(r){const{onSelectAllClick:n,order:t,orderBy:i,numSelected:a,rowCount:m,onRequestSort:p}=r,P=c=>C=>{p(C,c)};return e.jsx(oe,{children:e.jsxs(k,{children:[e.jsx(x,{padding:"checkbox",children:e.jsx(E,{color:"primary",checked:m>0&&a===m,onChange:n,inputprops:{"aria-label":"select all desserts"}})}),Te.map(c=>e.jsx(x,{align:c.numeric?"right":"left",padding:c.disablePadding?"none":"normal",sortDirection:i===c.id?t:!1,children:e.jsxs(xe,{active:i===c.id,direction:i===c.id?t:"asc",onClick:P(c.id),children:[c.label,i===c.id?e.jsx(u,{component:"span",sx:pe,children:t==="desc"?"sorted descending":"sorted ascending"}):null]})},c.id))]})})}O.propTypes={numSelected:f.number.isRequired,onRequestSort:f.func.isRequired,onSelectAllClick:f.func.isRequired,order:f.oneOf(["asc","desc"]).isRequired,orderBy:f.string.isRequired,rowCount:f.number.isRequired};const F=r=>{const{numSelected:n,handleSearch:t,search:i}=r;return e.jsxs(fe,{sx:D({pl:{sm:2},pr:{xs:1,sm:1}},n>0&&{bgcolor:a=>_(a.palette.primary.main,a.palette.action.activatedOpacity)}),children:[n>0?e.jsxs(g,{sx:{flex:"1 1 100%"},color:"inherit",variant:"subtitle2",component:"div",children:[n," selected"]}):e.jsx(u,{sx:{flex:"1 1 100%"},children:e.jsx(ge,{InputProps:{startAdornment:e.jsx(je,{position:"start",children:e.jsx(se,{size:"1.1rem"})})},placeholder:"Search Product",size:"small",onChange:t,value:i})}),n>0?e.jsx(y,{title:"Delete",children:e.jsx(R,{children:e.jsx(ne,{width:"18"})})}):e.jsx(y,{title:"Filter list",children:e.jsx(R,{children:e.jsx(re,{size:"1.2rem",icon:"filter"})})})]})};F.propTypes={numSelected:f.number.isRequired};const Ne=()=>{const[r,n]=h.useState("asc"),[t,i]=h.useState("calories"),[a,m]=h.useState([]),[p,P]=h.useState(0),[c,C]=h.useState(!1),[j,H]=h.useState(5),v=be();h.useEffect(()=>{v(Y())},[v]);const T=Z(s=>s.ecommerceReducer.products),[b,I]=h.useState(T),[B,L]=h.useState("");h.useEffect(()=>{I(T)},[T]);const M=s=>{const o=T.filter(l=>l.title.toLowerCase().includes(s.target.value));L(s.target.value),I(o)},W=(s,o)=>{n(t===o&&r==="asc"?"desc":"asc"),i(o)},$=s=>{if(s.target.checked){const o=b.map(l=>l.title);m(o);return}m([])},K=(s,o)=>{const l=a.indexOf(o);let d=[];l===-1?d=d.concat(a,o):l===0?d=d.concat(a.slice(1)):l===a.length-1?d=d.concat(a.slice(0,-1)):l>0&&(d=d.concat(a.slice(0,l),a.slice(l+1))),m(d)},N=(s,o)=>{P(o)},X=s=>{H(parseInt(s.target.value,10)),P(0)},G=s=>{C(s.target.checked)},J=s=>a.indexOf(s)!==-1,q=p>0?Math.max(0,(1+p)*j-b.length):0;return e.jsx(u,{children:e.jsxs(u,{children:[e.jsx(F,{numSelected:a.length,search:B,handleSearch:s=>M(s)}),e.jsxs(ae,{variant:"outlined",sx:{mx:2,mt:1},children:[e.jsx(ie,{children:e.jsxs(ce,{sx:{minWidth:750},"aria-labelledby":"tableTitle",size:c?"small":"medium",children:[e.jsx(O,{numSelected:a.length,order:r,orderBy:t,onSelectAllClick:$,onRequestSort:W,rowCount:b.length}),e.jsxs(le,{children:[Pe(b,Se(r,t)).slice(p*j,p*j+j).map((s,o)=>{const l=J(s.title),d=`enhanced-table-checkbox-${o}`;return e.jsxs(k,{hover:!0,onClick:S=>K(S,s.title),role:"checkbox","aria-checked":l,tabIndex:-1,selected:l,children:[e.jsx(x,{padding:"checkbox",children:e.jsx(E,{color:"primary",checked:l,inputprops:{"aria-labelledby":d}})}),e.jsx(x,{children:e.jsxs(u,{display:"flex",alignItems:"center",children:[e.jsx(de,{src:s.photo,alt:s.photo,variant:"rounded",sx:{width:56,height:56,borderRadius:"100%"}}),e.jsxs(u,{sx:{ml:2},children:[e.jsx(g,{variant:"h6",fontWeight:"600",children:s.title}),e.jsx(g,{color:"textSecondary",variant:"subtitle2",children:s.category})]})]})}),e.jsx(x,{children:e.jsx(g,{children:he(new Date(s.created),"E, MMM d yyyy")})}),e.jsx(x,{children:e.jsxs(u,{display:"flex",alignItems:"center",children:[e.jsx(u,{sx:{backgroundColor:s.stock?S=>S.palette.success.main:S=>S.palette.error.main,borderRadius:"100%",height:"10px",width:"10px"}}),e.jsx(g,{color:"textSecondary",variant:"subtitle2",sx:{ml:1},children:s.stock?"InStock":"Out of Stock"})]})}),e.jsx(x,{children:e.jsxs(g,{fontWeight:"500",variant:"h6",children:["$",s.price]})}),e.jsx(x,{children:e.jsx(y,{title:"Edit",children:e.jsx(R,{size:"small",children:e.jsx(te,{size:"1.1rem"})})})})]},s.title)}),q>0&&e.jsx(k,{style:{height:(c?33:53)*q},children:e.jsx(x,{colSpan:6})})]})]})}),e.jsx(me,{rowsPerPageOptions:[5,10,25],component:"div",count:b.length,rowsPerPage:j,page:p,onPageChange:N,onRowsPerPageChange:X})]}),e.jsx(u,{ml:2,children:e.jsx(ue,{control:e.jsx(ee,{checked:c,onChange:G}),label:"Dense padding"})})]})})};export{Ne as P};