import{a2 as r,ao as d,r as c,ac as N,a0 as P,j as C}from"./index-f22446e5.js";import{a as T,g as w,s as F,B as G,r as E,e as S,u as U,d as x,c as H}from"./Typography-493ceae3.js";import{L as $}from"./ListContext-74b9cccd.js";import{l as I}from"./listItemIconClasses-5a5c13b9.js";import{d as M}from"./dividerClasses-0b6de4a8.js";import{l as O}from"./listItemTextClasses-243cffc5.js";function _(e){return w("MuiMenuItem",e)}const z=T("MuiMenuItem",["root","focusVisible","dense","disabled","divider","gutters","selected"]),n=z,D=["autoFocus","component","dense","divider","disableGutters","focusVisibleClassName","role","tabIndex","className"],W=(e,s)=>{const{ownerState:a}=e;return[s.root,a.dense&&s.dense,a.divider&&s.divider,!a.disableGutters&&s.gutters]},q=e=>{const{disabled:s,dense:a,divider:t,disableGutters:l,selected:p,classes:o}=e,i=H({root:["root",a&&"dense",s&&"disabled",!l&&"gutters",t&&"divider",p&&"selected"]},_,o);return r({},o,i)},A=F(G,{shouldForwardProp:e=>E(e)||e==="classes",name:"MuiMenuItem",slot:"Root",overridesResolver:W})(({theme:e,ownerState:s})=>r({},e.typography.body1,{display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",minHeight:48,paddingTop:6,paddingBottom:6,boxSizing:"border-box",whiteSpace:"nowrap"},!s.disableGutters&&{paddingLeft:16,paddingRight:16},s.divider&&{borderBottom:`1px solid ${(e.vars||e).palette.divider}`,backgroundClip:"padding-box"},{"&:hover":{textDecoration:"none",backgroundColor:(e.vars||e).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${n.selected}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:d(e.palette.primary.main,e.palette.action.selectedOpacity),[`&.${n.focusVisible}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`:d(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.focusOpacity)}},[`&.${n.selected}:hover`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`:d(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:d(e.palette.primary.main,e.palette.action.selectedOpacity)}},[`&.${n.focusVisible}`]:{backgroundColor:(e.vars||e).palette.action.focus},[`&.${n.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity},[`& + .${M.root}`]:{marginTop:e.spacing(1),marginBottom:e.spacing(1)},[`& + .${M.inset}`]:{marginLeft:52},[`& .${O.root}`]:{marginTop:0,marginBottom:0},[`& .${O.inset}`]:{paddingLeft:36},[`& .${I.root}`]:{minWidth:36}},!s.dense&&{[e.breakpoints.up("sm")]:{minHeight:"auto"}},s.dense&&r({minHeight:32,paddingTop:4,paddingBottom:4},e.typography.body2,{[`& .${I.root} svg`]:{fontSize:"1.25rem"}}))),J=c.forwardRef(function(s,a){const t=N({props:s,name:"MuiMenuItem"}),{autoFocus:l=!1,component:p="li",dense:o=!1,divider:b=!1,disableGutters:i=!1,focusVisibleClassName:k,role:R="menuitem",tabIndex:f,className:B}=t,V=P(t,D),g=c.useContext($),v=c.useMemo(()=>({dense:o||g.dense||!1,disableGutters:i}),[g.dense,o,i]),u=c.useRef(null);S(()=>{l&&u.current&&u.current.focus()},[l]);const j=r({},t,{dense:v.dense,divider:b,disableGutters:i}),m=q(t),L=U(u,a);let y;return t.disabled||(y=f!==void 0?f:-1),C.jsx($.Provider,{value:v,children:C.jsx(A,r({ref:L,role:R,tabIndex:y,component:p,focusVisibleClassName:x(m.focusVisible,k),className:x(m.root,B)},V,{ownerState:j,classes:m}))})}),ee=J;export{ee as M};