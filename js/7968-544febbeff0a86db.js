(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7968],{16669:function(t,e,n){"use strict";n.d(e,{Om:function(){return r},ZP:function(){return l}});var r,i,o=n(14924),u=n(85893),s=n(94184),a=n.n(s);!function(t){t[t.ACTIVE=0]="ACTIVE",t[t.NOT_APPLY=1]="NOT_APPLY",t[t.APPLY=2]="APPLY",t[t.NOT_SIGN_IN=3]="NOT_SIGN_IN",t[t.COMING=4]="COMING",t[t.ENDED=5]="ENDED"}(r||(r={}));var c=(i={},(0,o.Z)(i,r.ACTIVE,{color:"#6CDF8C",bgColor:"rgba(108, 223, 140, 0.1)",text:"ACTIVE"}),(0,o.Z)(i,r.NOT_APPLY,{color:"rgb(230, 177, 247, 0.6)",bgColor:"rgba(230, 177, 247, 0.2)",text:"not applied"}),(0,o.Z)(i,r.APPLY,{color:"#7DD5F9",bgColor:"rgba(125, 213, 249, 0.2)",text:"submitted"}),(0,o.Z)(i,r.NOT_SIGN_IN,{color:"rgba(254, 254, 254, 0.4)",bgColor:"rgba(254, 254, 254, 0.1)",text:"not sign in"}),(0,o.Z)(i,r.COMING,{color:"rgba(254, 254, 254, 0.3)",bgColor:"rgba(254, 254, 254, 0.1)",text:"coming soon"}),(0,o.Z)(i,r.ENDED,{color:"rgba(254, 254, 254, 0.3)",bgColor:"rgba(254, 254, 254, 0.05)",text:"ended"}),i);function l(t){var e=t.type,n=c[e],i=n.text,o=n.color,s=n.bgColor;return(0,u.jsxs)("span",{className:a()("uppercase absolute right-0 top-0 text-x-xs p-1",e===r.ACTIVE&&"pr-2.5"),style:{color:o,background:s},children:[e===r.ACTIVE?(0,u.jsx)("span",{className:"inline-block w-1.5 h-1.5 bg-xgreen outline-xgreen/20 outline outline-[3px] ml-1 mr-2 rounded-full"}):null,i,(0,u.jsx)("svg",{className:"absolute -left-2.5 top-0",width:"10",height:"20",viewBox:"0 0 10 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,u.jsx)("g",{children:(0,u.jsx)("path",{d:"M0 0H89V20H10L0 0Z",fill:s})})})]})}},67968:function(t,e,n){"use strict";n.d(e,{$:function(){return b},Z:function(){return g}});var r=n(47568),i=n(34051),o=n.n(i),u=n(85893),s=n(94184),a=n.n(s),c=n(11163),l=n(67294),d=n(31156),f=n(68391),p=n(19848),v=n(32702),x=n(54041),h=n(11116),m=n(11556),b=function(){var t=(0,r.Z)(o().mark((function t(e){var n,r,i,u,s,a,c=arguments;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=c.length>1&&void 0!==c[1]?c[1]:"",r=c.length>2&&void 0!==c[2]?c[2]:"launchpad",t.next=3,(0,p.UT)("/resource/v1/file/upload/url",{module:r,suffix:n}).catch((function(t){return{url:"",static:""}}));case 3:if(i=t.sent,u=i.url,s=i.static,u){t.next=8;break}return t.abrupt("return","");case 8:return t.next=10,(0,p.ZE)(u,e).catch((function(t){}));case 10:return a=t.sent.status,t.abrupt("return",200===a?s:"");case 12:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();function g(t){var e=t.finish,n=t.cur,i=t.index,s=t.info,p=t.task_id,g=t.data,_=s.data,w=_.display_text,k=_.condition,y=k.ext,N=k.max_size,I=k.count,T=N/1024/1024,C=(0,l.useState)(!1),A=C[0],L=C[1],Z=(0,f.bN)(),E=Z.sniffer,D=Z.userInfo,O=Z.toLogin,j=(0,v.q)(),P=j.round,S=j.refreshApplyInfo,M=j.active_sub_stage,z=(0,l.useState)([]),B=z[0],U=z[1],F=!e&&!n,W=(0,l.useState)(!1),$=W[0],V=W[1];(0,c.useRouter)();(0,l.useEffect)((function(){U([])}),[D.uuid]);var R=function(){var t=(0,r.Z)(o().mark((function t(){var e;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,x._v)({round_no:null===P||void 0===P?void 0:P.round_no,sub_stage_id:null===M||void 0===M?void 0:M.id,task_id:p,task_data:B});case 2:return e=t.sent,t.next=5,S();case 5:return t.abrupt("return",e);case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();(0,l.useEffect)((function(){var t=g;(null===t||void 0===t?void 0:t.length)&&U(t)}),[g]);var G=function(){var t=(0,r.Z)(o().mark((function t(e){var n,r,i,u,s,a,c;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(i=null===(n=e.target)||void 0===n||null===(r=n.files)||void 0===r?void 0:r[0]){t.next=4;break}return t.abrupt("return");case 4:if(u=i.name,s=u.substring(u.lastIndexOf(".")+1),!(i&&i.size>N)){t.next=10;break}V(!0),t.next=18;break;case 10:return V(!1),L(!0),a=i.name,t.next=15,b(i,s);case 15:(c=t.sent)&&U([{name:a,src:c}]),L(!1);case 18:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return(0,u.jsxs)(m.jC,{icon:(0,u.jsx)("div",{className:a()("p-1 bg-xcyan h-8 h5:h-6 h5:w-6 h5:min-w-[24px] web:min-w-[32px]",F?"opacity-30":""),children:E.isMobile?(0,u.jsx)(h.g2Z,{}):(0,u.jsx)(h.gf5,{})}),index:i,disabled:!!F,btnDisabled:!B.length&&D.isLogin,finish:!!e,btnText:"confirm",title:w,onVerify:R,children:[(0,u.jsx)("ul",{children:B.map((function(t){return(0,u.jsxs)("li",{className:"h-12 h5:h-8 w-full flex items-center bg-xwhite/5 text-xwhite/60 px-3",children:[E.isMobile?(0,u.jsx)(h.g2Z,{}):(0,u.jsx)(h.gf5,{}),(0,u.jsx)("span",{className:"flex-1 font-poppins font-light h5:text-xs truncate pr-15 h5:pr-5 pl-2",children:t.name}),e?null:(0,u.jsx)(h.sWC,{className:"web:hover:opacity-60",onClick:function(){U((function(e){return e.filter((function(e){return t.src!==e.src}))}))}})]},t.src)}))}),(0,u.jsx)("input",{onChange:G,className:"hidden",multiple:!1,type:"file",accept:y.map((function(t){return".".concat(t)})).join(",")+",.pdf",id:"myFileInput"}),B.length>=I||e?null:(0,u.jsxs)(u.Fragment,{children:[(0,u.jsxs)("p",{className:a()("font-poppins font-normal text-x-xs mb-2",F&&"opacity-30",$?"text-error":"text-xwhite/60"),children:["File size limit is ",T,"MB"]}),(0,u.jsx)(d.zx,{loading:A,loadingVariant:"blue",loadingSize:12,onClick:function(){if(D.isLogin){var t=document.querySelector("#myFileInput");t&&t.click()}else O()},disabled:F||B.length>=I,className:"!w-20 !px-0 !font-poppins !text-x-xs",btnText:"upload",type:"white",size:"md"})]})]})}},11556:function(t,e,n){"use strict";n.d(e,{em:function(){return k},jC:function(){return N},sD:function(){return y}});var r,i=n(47568),o=n(14924),u=n(10253),s=n(34051),a=n.n(s),c=n(85893),l=n(18629),d=n(94184),f=n.n(d),p=n(11163),v=n(67294),x=n(31156),h=n(68391),m=n(43241),b=n(11116),g=n(60835),_=n.n(g);function w(t){var e=t.title,n=t.description,r=t.errorMsg,i=t.titleClassName;return(0,c.jsxs)("div",{className:"flex-1 pl-4 h5:pl-3",children:[(0,c.jsxs)("div",{children:[(0,c.jsx)("p",{className:f()("text-x-sm font-poppins font-normal",i),children:e}),n?(0,c.jsx)("div",{className:"text-xwhite/40 font-xextralight text-xs leading-tight mt-2",children:n}):null]}),r?(0,c.jsx)("p",{className:"text-error font-poppins font-medium text-x-xs mt-1.5",children:r}):null]})}var k=(r={},(0,o.Z)(r,-1,"The task has not been fulfilled."),(0,o.Z)(r,200001,"You have not yet authorized any social media accounts."),(0,o.Z)(r,200002,"Action too frequent. Please try again later."),(0,o.Z)(r,200003,"The task has not been fulfilled."),(0,o.Z)(r,200004,"Account already used. Please switch."),(0,o.Z)(r,200010,"Invalid verification code."),(0,o.Z)(r,200020,"Wrong answer."),r);function y(t){var e=t.title,n=t.description,r=t.btnText,o=t.isComplete,s=t.icon,d=t.suffix,p=void 0===d?null:d,g=t.titleClassName,y=t.btnDisabled,N=t.className,I=void 0===N?"":N,T=t.onCardClick,C=t.onClick,A=t.disabled,L=t.id,Z=(0,v.useState)(0),E=Z[0],D=Z[1],O=(0,v.useState)(""),j=O[0],P=O[1],S=(0,v.useState)(!1),M=S[0],z=S[1],B=(0,h.bN)(),U=B.userInfo,F=B.toLogin,W=(0,m.lm)().noti;(0,l.Z)((function(){D((function(t){return t>0?t-1:0}))}),E?1e3:void 0);var $=(0,u.Z)((0,m.Fs)("md"),1)[0];return(0,v.useEffect)((function(){!U.isLogin&&D(0)}),[U.isLogin]),(0,c.jsxs)("div",{onClick:function(){return!A&&(null===T||void 0===T?void 0:T())},className:f()("w-full p-4 h5:px-3 bg-xwhite/5 mt-1",T&&!A&&"web:cursor-pointer web:hover:bg-xwhite/10"),children:[(0,c.jsxs)("div",{className:f()("flex items-center",I,_().task),children:[(0,c.jsx)("div",{className:A?"opacity-30":"",children:s}),(0,c.jsx)(w,{titleClassName:f()(g,A&&"opacity-30"),title:e,errorMsg:E&&!o?j:"",description:n}),(0,c.jsx)(x.ph,{children:p}),r||o?(0,c.jsxs)("div",{className:f()("web:w-[104px]  text-right",o?"h5:w-12":"h5:w-[86px]"),children:[r&&!o?(0,c.jsx)(x.zx,{"data-sensors-click":!0,id:L,loading:M,disabled:!!E||M||A||y,onClick:function(){var t=(0,i.Z)(a().mark((function t(e){var n;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.preventDefault(),e.stopPropagation(),U.isLogin){t.next=4;break}return t.abrupt("return",F());case 4:return z(!0),e.nativeEvent.stopImmediatePropagation(),t.next=8,null===C||void 0===C?void 0:C();case 8:n=t.sent,z(!1),n?(D(60),n!==k[-1]&&W("error",n),P(k[-1])):null===n&&D(60);case 11:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),type:"ghost",size:"md",className:f()("rounded-none !text-x-xs h5:px-0 inline-block web:!w-20 !font-poppins !font-extrabold h5:!h-7 h5:!w-16",M&&"pr-1.5"),children:E?"".concat(E," s"):M?"":r}):null,o?(0,c.jsx)(b.D1J,{size:$?24:20,className:"inline text-xwhite web:p-1 bg-xgreen rounded-full h5:p-0.5"}):null]}):null]}),(0,c.jsx)(x.H5,{children:p})]})}var N=function(t){var e=t.title,n=t.btnText,r=t.icon,o=t.onVerify,u=t.disabled,s=t.btnDisabled,d=t.finish,g=t.index,_=t.contentClass,w=t.children,y=(0,v.useState)(0),N=y[0],I=y[1],T=(0,v.useState)(""),C=T[0],A=T[1],L=(0,v.useState)(!1),Z=L[0],E=L[1],D=(0,h.bN)(),O=D.userInfo,j=D.sniffer,P=D.toLogin,S=(0,m.lm)().noti;(0,p.useRouter)();return(0,l.Z)((function(){I((function(t){return t>0?t-1:0}))}),N?1e3:void 0),(0,v.useEffect)((function(){!O.isLogin&&I(0)}),[O.isLogin]),(0,c.jsxs)("div",{className:f()("bg-xwhite/5 mt-1 p-4",!u&&"web:cursor-pointer web:hover:bg-xwhite/10"),children:[(0,c.jsxs)("div",{className:f()("flex mb-3"),children:[r,(0,c.jsx)("p",{className:"text-x-sm font-poppins font-normal flex-1 ml-3 min-h-[32px] flex items-center",children:(0,c.jsx)("span",{className:f()("inline-block leading-xtight",u&&"opacity-30"),children:e})}),(0,c.jsx)("div",{className:f()("web:w-[104px] text-right",d?"h5:w-12":"h5:w-[86px]"),children:d?(0,c.jsx)(b.D1J,{size:j.isMobile?20:24,className:"inline text-xwhite web:p-1 bg-xgreen rounded-full h5:p-0.5"}):(0,c.jsx)(x.zx,{"data-sensors-click":!0,id:"aod_task".concat(g,"_verify"),loading:Z,disabled:!!N||Z||u||s,onClick:(0,i.Z)(a().mark((function t(){var e;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(O.isLogin){t.next=3;break}return P(),t.abrupt("return");case 3:return E(!0),t.next=6,null===o||void 0===o?void 0:o();case 6:e=t.sent,E(!1),e?(I(60),A(k[200020]===e?e:k[-1]),![(k[-1],k[200020])].includes(e)&&S("error",e)):null===e&&I(60);case 9:case"end":return t.stop()}}),t)}))),type:"ghost",size:"md",className:f()("rounded-none !text-x-xs h5:px-0 inline-block web:!w-20 !font-poppins !font-extrabold h5:!h-7 h5:!w-16",Z&&"pr-1.5"),children:N?"".concat(N," s"):Z?"":n})})]}),(0,c.jsxs)("div",{className:f()("web:ml-11 web:mr-[104px]",u&&"opacity-30",_),children:[w,C&&N&&!d?(0,c.jsx)("p",{className:"text-error font-poppins font-medium text-x-xs mt-1.5",children:C}):null]})]})}},45624:function(t,e,n){"use strict";n.d(e,{A9:function(){return v},CQ:function(){return f},E$:function(){return x},Gd:function(){return d},OU:function(){return p},lA:function(){return h}});var r=n(47568),i=n(10253),o=n(34051),u=n.n(o),s=n(2593),a=n(39917),c=n(85582),l=n(39625),d=function(){var t=(0,r.Z)(u().mark((function t(e,n,r){var o,s,a,l;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o=(0,c.u)(e,n,m(r)),t.t0=i.Z,t.next=4,Promise.all([o.tvl(),o.getTotalBidsCnt()]);case 4:return t.t1=t.sent,s=(0,t.t0)(t.t1,2),a=s[0],l=s[1],t.abrupt("return",{tvl:a,totalBidsCnt:Number(l)});case 9:case"end":return t.stop()}}),t)})));return function(e,n,r){return t.apply(this,arguments)}}(),f=function(){var t=(0,r.Z)(u().mark((function t(e,n,r,i,o){var a,d,f;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=(0,c.u)(e,r,m(i,o)),t.next=3,a.getUserBids(n);case 3:return d=t.sent,f=d.filter((function(t){return t.length>0})).flat(1).map((function(t){return{id:s.O$.from(t.id).toNumber(),bidder:t.bidder,price:(0,l.d)(t.price),timestamp:s.O$.from(t.timestamp).toNumber(),nonce:o?BigInt(t.nonce):void 0}})),t.abrupt("return",f);case 6:case"end":return t.stop()}}),t)})));return function(e,n,r,i,o){return t.apply(this,arguments)}}(),p=function(){var t=(0,r.Z)(u().mark((function t(e,n,r,i,o){var a,l;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=(0,c.u)(e,i,m(o)),t.next=3,a.getBidAmtByBuyerId(n,r);case 3:return l=t.sent,t.abrupt("return",s.O$.from(l).toNumber());case 5:case"end":return t.stop()}}),t)})));return function(e,n,r,i,o){return t.apply(this,arguments)}}(),v=function(){var t=(0,r.Z)(u().mark((function t(e,n,r,i){var o,a,d;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o=(0,c.u)(e,n,m(r,i)),t.next=3,o.floorBid();case 3:return a=t.sent,d={id:s.O$.from(a.id).toNumber(),bidder:a.bidder,price:(0,l.d)(a.price),timestamp:s.O$.from(a.timestamp).toNumber(),nonce:i?BigInt(a.nonce):void 0},t.abrupt("return",d);case 6:case"end":return t.stop()}}),t)})));return function(e,n,r,i){return t.apply(this,arguments)}}(),x=function(){var t=(0,r.Z)(u().mark((function t(e,n,r,i){var o,a,d;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o=(0,c.u)(e,r,m(i)),t.next=3,o.getUserClaimInfos(n);case 3:return a=t.sent,d=a.map((function(t,e){return{bidder:n[e],hasClaimed:t.hasClaimed,refundAmount:(0,l.d)(t.refundAmount),nftCount:s.O$.from(t.nftCount).toNumber()}})),t.abrupt("return",d);case 6:case"end":return t.stop()}}),t)})));return function(e,n,r,i){return t.apply(this,arguments)}}(),h=function(t,e){return t.price!==e.price?t.price>e.price:t.nonce&&e.nonce?t.nonce===e.nonce?t.id<=e.id:t.nonce<e.nonce:t.id<=e.id},m=function(t,e){return[12,18].includes(null!==t&&void 0!==t?t:0)?e?a.H_:a.cs:e?a.Ut:a.N5}},32702:function(t,e,n){"use strict";n.d(e,{n:function(){return k},q:function(){return y}});var r=n(47568),i=n(26042),o=n(69396),u=n(34051),s=n.n(u),a=n(85893),c=n(9496),l=n(67294),d=n(44982),f=n(95639),p=n(91768),v=n(68391),x=n(19848),h=n(16669),m=n(45624),b=n(54041),g=n(12676),_={productIndex:0,setProductIndex:function(){return null},tabs:[],stage:[],task_id:[],task_info:[],whitelistList:{amount:0,user_info:[]},sub_stage:[],products:[],limit_for_token_id:"",refreshApplyInfo:function(){return null},setPairTaskState:function(){return null},onShare:function(){return null},refreshActive:function(){return null},refreshPoolInfo:function(){return null},social:{}},w=(0,l.createContext)(_),k=function(t){var e,n,u=t.children,k=t.info,y=t.tabs,N=(0,v.bN)().userInfo,I=(0,l.useState)(0),T=I[0],C=I[1],A=(0,l.useState)(k),L=A[0],Z=A[1];(0,l.useEffect)((function(){Z(k)}),[k]);var E,D,O=null===(e=L.product)||void 0===e?void 0:e[T],j=null===(n=L.collections)||void 0===n?void 0:n[T],P=L.stage,S=L.product,M=L.active_stage,z=L.active_sub_stage,B=L.game,U=L.limit_for_token_id,F=L.round;(null===M||void 0===M?void 0:M.stage_type)===g.A.ENDED&&(M.last_type=null===(E=P[P.length-2])||void 0===E?void 0:E.stage_type,M.properties=(null===(D=P[P.length-2])||void 0===D?void 0:D.properties)||{});var W=(j||B||{}).network,$=(F||{}).round_no,V=(M||{}).properties,R=(0,c.Z)(b.to,{defaultParams:[$],refreshOnWindowFocus:!1}).data,G=void 0===R?_.whitelistList:R,Y=([(null===M||void 0===M?void 0:M.stage_type)&&g.A.WL_APPLICATION,g.A.WL_RESULT].includes(null===M||void 0===M?void 0:M.stage_type)||[(null===M||void 0===M?void 0:M.last_type)&&g.A.WL_APPLICATION,g.A.WL_RESULT].includes(null===M||void 0===M?void 0:M.last_type))&&N.uuid?$:"",J=(0,c.Z)((function(){return(0,b.OS)(Y)}),{refreshOnWindowFocus:!1,refreshDeps:[N.uuid,Y]}),q=J.data,H=J.refresh,Q=z||{},K=Q.task_info,X=void 0===K?[]:K,tt=Q.task_id,et=void 0===tt?[]:tt,nt=(0,l.useMemo)((function(){var t=(null===q||void 0===q?void 0:q.task_result)||[],e=((null===V||void 0===V?void 0:V.sub_stage)||[]).map((function(e){var n=((null===t||void 0===t?void 0:t.find((function(t){return t.sub_stage_id===e.id})))||{}).submit,r=void 0!==n&&n,u=h.Om.ENDED;return u=r&&(null===M||void 0===M?void 0:M.stage_type)===g.A.WL_APPLICATION?h.Om.APPLY:e.id===(null===z||void 0===z?void 0:z.id)&&(null===M||void 0===M?void 0:M.stage_type)!==g.A.ENDED?N.isLogin?[g.A.MINT,g.A.BID,g.A.ENDED,void 0].includes(null===M||void 0===M?void 0:M.stage_type)?h.Om.ACTIVE:h.Om.NOT_APPLY:[g.A.MINT,g.A.BID,void 0].includes(null===M||void 0===M?void 0:M.stage_type)?h.Om.ACTIVE:h.Om.NOT_SIGN_IN:Date.now()>1e3*e.end_time||(null===M||void 0===M?void 0:M.stage_type)===g.A.ENDED?h.Om.ENDED:h.Om.COMING,(0,o.Z)((0,i.Z)({},e),{submit:r,status:u})})),n=((null===t||void 0===t?void 0:t.find((function(t){return t.sub_stage_id===(null===z||void 0===z?void 0:z.id)})))||{}).task_log,r=null===X||void 0===X?void 0:X.map((function(t){var e,r=null===n||void 0===n?void 0:n.find((function(e){return e.task_id===t.task_id}));return(0,o.Z)((0,i.Z)({},t),{data:null===r||void 0===r||null===(e=r.extend)||void 0===e?void 0:e.data,finish:!!(null===r||void 0===r?void 0:r.task_id)&&N.isLogin})}));return{sub_stage:e,task_info:r}}),[X,null===M||void 0===M?void 0:M.stage_type,null===V||void 0===V?void 0:V.sub_stage,null===z||void 0===z?void 0:z.id,null===q||void 0===q?void 0:q.task_result,N.isLogin]),rt=nt.sub_stage,it=nt.task_info,ot=null===O||void 0===O?void 0:O.payment_token_address,ut=(0,d.de)(W,ot),st=N.isLogin&&it.filter((function(t){return t.finish})).length===it.length,at=(0,l.useCallback)((function(t){var e,n=t==f.ly.IgoMint?null===(e=L.stage.filter((function(t){return t.stage_type==g.A.MINT}))[0].properties)||void 0===e?void 0:e.share_copies:L.round.share_copies;(0,p.U)(t||f.ly.Igo,{imageUrl:F.image,copyOverride:n})}),[L.round.share_copies,L.stage,F.image]),ct=(0,l.useCallback)((function(){(0,x.pv)("/launchpad/v1/igo/".concat($)).catch((function(t){return null})).then((function(t){t&&Z((function(e){return(0,i.Z)({},e,t)}))}))}),[$]),lt=(0,c.Z)((0,r.Z)(s().mark((function t(){return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!W||!(null===O||void 0===O?void 0:O.auction_contract_address)){t.next=2;break}return t.abrupt("return",(0,m.Gd)(W,null===O||void 0===O?void 0:O.auction_contract_address,F.round_no));case 2:case"end":return t.stop()}}),t)}))),{refreshOnWindowFocus:!0,refreshDeps:[W,null===O||void 0===O?void 0:O.auction_contract_address]}),dt=lt.data,ft=lt.refresh;return(0,a.jsx)(w.Provider,{value:{onShare:at,refreshActive:ct,social:(null===q||void 0===q?void 0:q.social)||{},isFinishTask:st,refreshApplyInfo:H,collection:j,limit_for_token_id:U,round:F,products:S,product:O,productIndex:T,setProductIndex:C,tabs:y,game:B,stage:P,whitelistList:G,tokenMetaData:ut,active_stage:M,task_id:et,task_info:it,sub_stage:rt,active_sub_stage:z,refreshPoolInfo:ft,poolInfo:dt},children:u})};function y(){return(0,l.useContext)(w)}},54041:function(t,e,n){"use strict";n.d(e,{OS:function(){return p},_v:function(){return m},cB:function(){return x},jt:function(){return w},to:function(){return f},xK:function(){return g}});var r=n(47568),i=n(26042),o=n(69396),u=n(34051),s=n.n(u),a=n(19848),c=n(11556),l=n(35910),d=n(45624);function f(t){return(0,a.pv)("/launchpad/v1/igo/whitelist/apply/list",{round_no:t})}function p(t){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(s().mark((function t(e){var n;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=null,!e){t.next=5;break}return t.next=4,(0,a.pv)("/launchpad/v1/igo/account/round/apply?round_no=".concat(e)).catch((function(){return null}));case 4:n=t.sent;case 5:return t.abrupt("return",{task_result:(null===n||void 0===n?void 0:n.task_result)||[],social:(null===n||void 0===n?void 0:n.social)||{}});case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function x(t,e){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(s().mark((function t(e,n){return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",e&&(0,a.UT)("/launchpad/v1/igo/account/round/task/report",{round_no:e,task_id:n}).catch((function(){})));case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function m(t,e,n){return b.apply(this,arguments)}function b(){return(b=(0,r.Z)(s().mark((function t(e,n,r){var i,o,u,l,d,f,p;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=3,(0,a.UT)("/launchpad/v1/igo/account/round/task/verify",e).catch((function(t){return t}));case 3:if(d=t.sent,null===n||void 0===n||n((null===d||void 0===d||null===(i=d.data)||void 0===i||null===(o=i.extend)||void 0===o?void 0:o.condition)||[]),200003!==(null===d||void 0===d?void 0:d.err_code)||!r||!(null===(u=d.data)||void 0===u||null===(l=u.extend)||void 0===l?void 0:l.username)){t.next=8;break}return t.abrupt("return","Please complete the task with your authorized ".concat(r," account: ").concat(null===(f=d.data)||void 0===f||null===(p=f.extend)||void 0===p?void 0:p.username,"."));case 8:return t.abrupt("return",(null===d||void 0===d?void 0:d.verify)?"":c.em[null===d||void 0===d?void 0:d.err_code]||c.em[-1]);case 9:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function g(t){return _.apply(this,arguments)}function _(){return _=(0,r.Z)(s().mark((function t(e){var n,u,c,f,p,v,x,h,m;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=e.network,u=e.round_no,c=e.collection_id,f=e.token_index,p=e.need_filled_amount,v=e.minter_contract_address,x=e.auction_contract_address,u){t.next=3;break}return t.abrupt("return",{});case 3:return t.next=5,(0,a.pv)("/launchpad/v1/eligible/igo/".concat(u),{collection_id:c,token_index:f});case 5:if(h=t.sent,p&&n){t.next=8;break}return t.abrupt("return",h);case 8:return t.next=10,Promise.all((h.eligible_info||[]).map(function(){var t=(0,r.Z)(s().mark((function t(e){var r;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!x){t.next=7;break}return t.next=4,(0,d.OU)(n,e.address,e.limit_for_buyer_id,x,u);case 4:r=t.sent,t.next=10;break;case 7:return t.next=9,(0,l.c)(n,e.address,e.limit_for_buyer_id,v);case 9:r=t.sent;case 10:return t.abrupt("return",(0,o.Z)((0,i.Z)({},e),{filled_amount:r}));case 11:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()));case 10:return m=t.sent,t.abrupt("return",{limit_for_token_id:h.limit_for_token_id,eligible_info:m});case 12:case"end":return t.stop()}}),t)}))),_.apply(this,arguments)}function w(t,e){return k.apply(this,arguments)}function k(){return(k=(0,r.Z)(s().mark((function t(e,n){var r;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e||!n){t.next=5;break}return t.next=3,(0,a.UT)("/launchpad/v1/igo/account/whitelist/apply",{round_no:e,sub_stage_id:n}).catch((function(t){return{err_msg:t.err_msg}}));case 3:return r=t.sent,t.abrupt("return",(null===r||void 0===r?void 0:r.err_msg)||"");case 5:return t.abrupt("return","Invalid param");case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}},12676:function(t,e,n){"use strict";var r,i;n.d(e,{A:function(){return r},F:function(){return i}}),function(t){t[t.WL_APPLICATION=1]="WL_APPLICATION",t[t.WL_RESULT=2]="WL_RESULT",t[t.MINT=3]="MINT",t[t.ENDED=4]="ENDED",t[t.BID=5]="BID",t[t.CLAIM=6]="CLAIM",t[t.DEPOSIT=7]="DEPOSIT",t[t.DEPOSIT_CLAIM=8]="DEPOSIT_CLAIM"}(r||(r={})),function(t){t[t.TwitterFollowType=101]="TwitterFollowType",t[t.TwitterRetweetedType=102]="TwitterRetweetedType",t[t.TwitterLikingType=103]="TwitterLikingType",t[t.TwitterLikingAndRetweetedType=104]="TwitterLikingAndRetweetedType",t[t.TwitterFollowAndRetweetedType=105]="TwitterFollowAndRetweetedType",t[t.TwitterFollowers=106]="TwitterFollowers",t[t.QuizType=201]="QuizType",t[t.ChooseImage=202]="ChooseImage",t[t.ChooseAns=203]="ChooseAns",t[t.Pair=301]="Pair",t[t.Choose=302]="Choose",t[t.JoinDiscordServer=401]="JoinDiscordServer",t[t.JoinDiscordServerMax=402]="JoinDiscordServerMax",t[t.Email=501]="Email",t[t.VisitUrl=601]="VisitUrl",t[t.Upload=701]="Upload"}(i||(i={}))},35910:function(t,e,n){"use strict";n.d(e,{X:function(){return c},c:function(){return l}});var r=n(47568),i=n(34051),o=n.n(i),u=n(2593),s=n(44982),a=n(85582),c=function(){var t=(0,r.Z)(o().mark((function t(e,n,r,i,c){var l,d;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(c=c&&""!=c?c:s.Mz[e],l=(0,a.u)(e,c)){t.next=4;break}return t.abrupt("return",void 0);case 4:return t.next=6,l.getMintedAmtByTokenId(n,r,i);case 6:return d=t.sent,t.abrupt("return",u.O$.from(d).toNumber());case 8:case"end":return t.stop()}}),t)})));return function(e,n,r,i,o){return t.apply(this,arguments)}}(),l=function(){var t=(0,r.Z)(o().mark((function t(e,n,r,i){var c,l;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(i=i&&""!=i?i:s.Mz[e],c=(0,a.u)(e,i)){t.next=4;break}return t.abrupt("return",void 0);case 4:return t.next=6,c.getMintedAmtByBuyerId(n,r);case 6:return l=t.sent,t.abrupt("return",u.O$.from(l).toNumber());case 8:case"end":return t.stop()}}),t)})));return function(e,n,r,i){return t.apply(this,arguments)}}()},60835:function(t){t.exports={task:"task_task__OLnQi"}},84192:function(t,e,n){"use strict";n.d(e,{Zn:function(){return i},ez:function(){return r}});const r={gwei:9,wei:18},i={ether:-9,wei:9}},39625:function(t,e,n){"use strict";n.d(e,{d:function(){return o}});var r=n(84192),i=n(15229);function o(t,e="wei"){return(0,i.b)(t,r.ez[e])}},15229:function(t,e,n){"use strict";function r(t,e){let n=t.toString();const r=n.startsWith("-");r&&(n=n.slice(1)),n=n.padStart(e,"0");let[i,o]=[n.slice(0,n.length-e),n.slice(n.length-e)];return o=o.replace(/(0+)$/,""),`${r?"-":""}${i||"0"}${o?`.${o}`:""}`}n.d(e,{b:function(){return r}})}}]);