import{u as m,q as f,e as i,r as v,bW as U,j as x,bX as E}from"./index-f22446e5.js";import{a as n}from"./js.cookie-bb004444.js";import{u as b}from"./useDispatch-ce130263.js";function T(u){var a;const{Component:c}=u,t=m(),{currentUser:h,isValidating:y,isLoading:j,login:C,logout:D,error:G,updateCurrentUser:N,getUserCookie:d}=f(),s=i(e=>e.novelprofileReducer.userName),l=i(e=>e.novelprofileReducer.userEmail),p=b();if(n.set(d),v.useEffect(()=>{if(s==="Guest"){t("/dashboards/noveldashboard");return}else n.get("user_id")==null&&t("/")},[]),s!=="Guest"){const r=(a=(()=>{const{data:o,error:g,isValidating:R,mutate:V}=E("User",`${l}`);return o||g})())==null?void 0:a.account_type;console.log("Account Type = ",r),p(U(r))}return x.jsx(c,{})}export{T as default};
