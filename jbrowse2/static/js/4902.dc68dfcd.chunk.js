"use strict";(globalThis.webpackChunk_jbrowse_web=globalThis.webpackChunk_jbrowse_web||[]).push([[4902],{83162:(r,a,e)=>{e.d(a,{A:()=>A});var t=e(7552),o=e(93878),s=e(70799),n=e(51148),l=e(84893),i=e(4785),c=e(74893),u=e(69500);const d=(0,c.A)((0,u.jsx)("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person");var p=e(28375),v=e(43045);const m=(0,n.Ay)("div",{name:"MuiAvatar",slot:"Root",overridesResolver:(r,a)=>{const{ownerState:e}=r;return[a.root,a[e.variant],e.colorDefault&&a.colorDefault]}})((0,l.A)((({theme:r})=>({position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:r.typography.fontFamily,fontSize:r.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none",variants:[{props:{variant:"rounded"},style:{borderRadius:(r.vars||r).shape.borderRadius}},{props:{variant:"square"},style:{borderRadius:0}},{props:{colorDefault:!0},style:{color:(r.vars||r).palette.background.default,...r.vars?{backgroundColor:r.vars.palette.Avatar.defaultBg}:{backgroundColor:r.palette.grey[400],...r.applyStyles("dark",{backgroundColor:r.palette.grey[600]})}}}]})))),g=(0,n.Ay)("img",{name:"MuiAvatar",slot:"Img",overridesResolver:(r,a)=>a.img})({width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4}),f=(0,n.Ay)(d,{name:"MuiAvatar",slot:"Fallback",overridesResolver:(r,a)=>a.fallback})({width:"75%",height:"75%"}),A=t.forwardRef((function(r,a){const e=(0,i.b)({props:r,name:"MuiAvatar"}),{alt:n,children:l,className:c,component:d="div",slots:A={},slotProps:h={},imgProps:y,sizes:b,src:w,srcSet:x,variant:k="circular",...S}=e;let M=null;const R=function({crossOrigin:r,referrerPolicy:a,src:e,srcSet:o}){const[s,n]=t.useState(!1);return t.useEffect((()=>{if(!e&&!o)return;n(!1);let t=!0;const s=new Image;return s.onload=()=>{t&&n("loaded")},s.onerror=()=>{t&&n("error")},s.crossOrigin=r,s.referrerPolicy=a,s.src=e,o&&(s.srcset=o),()=>{t=!1}}),[r,a,e,o]),s}({...y,src:w,srcSet:x}),P=w||x,j=P&&"error"!==R,C={...e,colorDefault:!j,component:d,variant:k};delete C.ownerState;const N=(r=>{const{classes:a,variant:e,colorDefault:t}=r,o={root:["root",e,t&&"colorDefault"],img:["img"],fallback:["fallback"]};return(0,s.A)(o,p.k,a)})(C),[D,G]=(0,v.A)("img",{className:N.img,elementType:g,externalForwardedProps:{slots:A,slotProps:{img:{...y,...h.img}}},additionalProps:{alt:n,src:w,srcSet:x,sizes:b},ownerState:C});return M=j?(0,u.jsx)(D,{...G}):l||0===l?l:P&&n?n[0]:(0,u.jsx)(f,{ownerState:C,className:N.fallback}),(0,u.jsx)(m,{as:d,className:(0,o.A)(N.root,c),ref:a,...S,ownerState:C,children:M})}))},28375:(r,a,e)=>{e.d(a,{A:()=>n,k:()=>s});var t=e(33761),o=e(85693);function s(r){return(0,o.Ay)("MuiAvatar",r)}const n=(0,t.A)("MuiAvatar",["root","colorDefault","circular","rounded","square","img","fallback"])},34902:(r,a,e)=>{e.r(a),e.d(a,{avatarGroupClasses:()=>m,default:()=>y,getAvatarGroupUtilityClass:()=>v});var t=e(7552),o=(e(19487),e(93878)),s=e(70799),n=e(51148),l=e(84893),i=e(4785),c=e(28375),u=e(83162),d=e(33761),p=e(85693);function v(r){return(0,p.Ay)("MuiAvatarGroup",r)}const m=(0,d.A)("MuiAvatarGroup",["root","avatar"]);var g=e(43045),f=e(69500);const A={small:-16,medium:-8},h=(0,n.Ay)("div",{name:"MuiAvatarGroup",slot:"Root",overridesResolver:(r,a)=>({[`& .${m.avatar}`]:a.avatar,...a.root})})((0,l.A)((({theme:r})=>({display:"flex",flexDirection:"row-reverse",[`& .${c.A.root}`]:{border:`2px solid ${(r.vars||r).palette.background.default}`,boxSizing:"content-box",marginLeft:"var(--AvatarGroup-spacing, -8px)","&:last-child":{marginLeft:0}}})))),y=t.forwardRef((function(r,a){const e=(0,i.b)({props:r,name:"MuiAvatarGroup"}),{children:n,className:l,component:c="div",componentsProps:d,max:p=5,renderSurplus:m,slotProps:y={},slots:b={},spacing:w="medium",total:x,variant:k="circular",...S}=e;let M=p<2?2:p;const R={...e,max:p,spacing:w,component:c,variant:k},P=(r=>{const{classes:a}=r;return(0,s.A)({root:["root"],avatar:["avatar"]},v,a)})(R),j=t.Children.toArray(n).filter((r=>t.isValidElement(r))),C=x||j.length;C===M&&(M+=1),M=Math.min(C+1,M);const N=Math.min(j.length,M-1),D=Math.max(C-M,C-N,0),G=m?m(D):`+${D}`,z=R.spacing&&void 0!==A[R.spacing]?A[R.spacing]:-R.spacing||-8,F={slots:b,slotProps:{surplus:y.additionalAvatar??d?.additionalAvatar,...d,...y}},[T,$]=(0,g.A)("surplus",{elementType:u.A,externalForwardedProps:F,className:P.avatar,ownerState:R,additionalProps:{variant:k,style:{"--AvatarRoot-spacing":z?`${z}px`:void 0,...S.style}}});return(0,f.jsxs)(h,{as:c,ownerState:R,className:(0,o.A)(P.root,l),ref:a,...S,children:[D?(0,f.jsx)(T,{...$,children:G}):null,j.slice(0,N).reverse().map((r=>t.cloneElement(r,{className:(0,o.A)(r.props.className,P.avatar),variant:r.props.variant||k})))]})}))}}]);
//# sourceMappingURL=4902.dc68dfcd.chunk.js.map