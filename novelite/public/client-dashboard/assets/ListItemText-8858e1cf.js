import{a2 as n,r as h,ac as P,a0 as j,j as l}from"./index-f22446e5.js";import{s as v,T as p,d as C,c as N}from"./Typography-493ceae3.js";import{L as R}from"./ListContext-74b9cccd.js";import{l as f,g as _}from"./listItemTextClasses-243cffc5.js";const $=["children","className","disableTypography","inset","primary","primaryTypographyProps","secondary","secondaryTypographyProps"],k=e=>{const{classes:s,inset:r,primary:a,secondary:c,dense:m}=e;return N({root:["root",r&&"inset",m&&"dense",a&&c&&"multiline"],primary:["primary"],secondary:["secondary"]},_,s)},w=v("div",{name:"MuiListItemText",slot:"Root",overridesResolver:(e,s)=>{const{ownerState:r}=e;return[{[`& .${f.primary}`]:s.primary},{[`& .${f.secondary}`]:s.secondary},s.root,r.inset&&s.inset,r.primary&&r.secondary&&s.multiline,r.dense&&s.dense]}})(({ownerState:e})=>n({flex:"1 1 auto",minWidth:0,marginTop:4,marginBottom:4},e.primary&&e.secondary&&{marginTop:6,marginBottom:6},e.inset&&{paddingLeft:56})),B=h.forwardRef(function(s,r){const a=P({props:s,name:"MuiListItemText"}),{children:c,className:m,disableTypography:i=!1,inset:g=!1,primary:x,primaryTypographyProps:y,secondary:L,secondaryTypographyProps:b}=a,I=j(a,$),{dense:u}=h.useContext(R);let o=x!=null?x:c,t=L;const T=n({},a,{disableTypography:i,inset:g,primary:!!o,secondary:!!t,dense:u}),d=k(T);return o!=null&&o.type!==p&&!i&&(o=l.jsx(p,n({variant:u?"body2":"body1",className:d.primary,component:y!=null&&y.variant?void 0:"span",display:"block"},y,{children:o}))),t!=null&&t.type!==p&&!i&&(t=l.jsx(p,n({variant:"body2",className:d.secondary,color:"text.secondary",display:"block"},b,{children:t}))),l.jsxs(w,n({className:C(d.root,m),ownerState:T,ref:r},I,{children:[o,t]}))}),S=B;export{S as L};
