(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[660],{9075:function(e,s,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/videos/raw/[videoId]",function(){return t(3369)}])},3369:function(e,s,t){"use strict";t.r(s),t.d(s,{__N_SSP:function(){return p}});var o=t(2322),r=t(2784),a=t(5632),n=t(5546),i=t(3476),d=t(4330),c=t(2202),l=t(2382),u=t(509),p=!0;s.default=(0,u.Z)(e=>{let{leger:s}=e,[t,u]=(0,r.useState)(),[p,h]=(0,r.useState)(),g=(0,a.useRouter)(),m=(0,i.sJ)(d.m_),f=(0,i.Zl)(d.Lz),y=(0,i.Zl)(d.Je),[_,v]=(0,r.useState)(!1);return(0,r.useEffect)(()=>{s||(c.Am.error("Server Error"),g.back()),s&&(s.editor?v(!0):v(!1),u(s.rawVideo),h(s.editors))},[]),(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)("div",{className:"h-full  bg-gray-100 flex justify-around py-6",children:[s&&t&&(0,o.jsx)(n.cB,{video:t,type:"raw",clientId:m,client:"creator",onDelete:()=>{(0,l.Z)({baseURL:"http://localhost:3000/api",url:"/video/delete",method:"DELETE",headers:{"Content-Type":"application/json",Authorization:sessionStorage.getItem("creatorToken"),videoKey:t.videoKey,type:"raw",bucketname:t.bucketName}}).then(e=>{f(e=>e.filter(e=>e._id!=t._id)),y(e=>e.filter(e=>e.rawVideo._id!=t._id)),c.Am.success(e.data.message),g.push("/videos/raw")}).catch(e=>{e?e.response&&403==e.response.status?(c.Am.error(e.response.data.message),sessionStorage.clear(),g.push("/login")):401==e.response.status&&(c.Am.error("Please first allow us your youtube access"),g.push("/auth")):e.response&&c.Am.error(e.response.data.message),console.log(e)})},page:"video"}),(0,o.jsxs)("div",{className:"flex flex-col gap-y-8",children:[t&&(0,o.jsx)(n.MX,{client:"creator",video:t,type:"raw",propData:e=>{(0,l.Z)({baseURL:"http://localhost:3000/api",url:"/video/update",method:"PUT",headers:{Authorization:sessionStorage.getItem("creatorToken"),"Content-Type":"application/json",type:"raw",videoKey:t.videoKey,bucketName:t.bucketName},data:e}).then(s=>{f(s=>{let o=s.find(e=>e.videoKey==t.videoKey);return o={...o,...e},s}),u(s=>({...s,...e})),c.Am.success(s.data.message)}).catch(e=>{e?e.response&&403==e.response.status?(c.Am.error(e.response.data.message),sessionStorage.clear(),g.push("/login")):401==e.response.status&&(c.Am.error("Please first allow us your youtube access"),g.push("/auth")):e.response&&c.Am.error(e.response.data.message),console.log(e)})}}),!(null==t?void 0:t.editor)&&p&&(0,o.jsx)(n.fc,{isSelected:_,editors:p,onSelect:e=>{let s=prompt("Type ".concat(e.slice(e.length-6)," to continue!"));s==e.slice(e.length-6)&&(0,l.Z)({baseURL:"http://localhost:3000/api",url:"/video/addEditor",method:"PUT",headers:{Authorization:sessionStorage.getItem("creatorToken"),"Content-Type":"application/json"},data:{videoId:t._id,editor:e}}).then(e=>{c.Am.success("Editor Added Successfully"),v(!0),f(s=>{let o=s.find(e=>e._id==t._id);return o.editor=e.data.editor,s}),u(s=>(s.editor=e.data.editor,s)),g.push("/video/raw"),y(s=>{let o=s.find(e=>e.rawVideo._id==t._id);return o.editor=e.data.editor,o.rawVideo.editor=e.data.editor,s})}).catch(e=>{e?e.response&&403==e.response.status&&(c.Am.error(e.response.data.message),sessionStorage.clear(),g.push("/login")):e.response&&c.Am.error(e.response.data.message),console.error(e)})}})]})]})})})},509:function(e,s,t){"use strict";var o=t(2322),r=t(2382),a=t(5632),n=t(2784),i=t(2202),d=t(3542);s.Z=e=>s=>{let t=(0,a.useRouter)(),{BASEURL:c}=d.env,l=async()=>{(0,r.Z)({baseURL:c||"http://localhost:3000/api",url:"/auth/me",method:"GET",headers:{"Content-Type":"application/json",Authorization:sessionStorage.getItem("creatorToken")}}).then(e=>{e.data.isValid||(i.Am.error(e.data.message),sessionStorage.clear(),t.push("/login"))}).catch(e=>{e&&!e.response.isValid&&(i.Am.error(e.response.data.message),sessionStorage.clear(),t.push("/login"))})};return(0,n.useEffect)(()=>{sessionStorage.getItem("creatorToken")&&0!=sessionStorage.getItem("creatorToken").length?l():(sessionStorage.clear(),t.push("/login"))},[]),(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(e,{...s})})}}},function(e){e.O(0,[382,774,888,179],function(){return e(e.s=9075)}),_N_E=e.O()}]);