(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{23:function(e,t,a){e.exports=a(39)},28:function(e,t,a){},31:function(e,t){},32:function(e,t,a){},38:function(e,t,a){},39:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(21),c=a.n(l),s=(a(28),a(29),a(3)),o=a(1),i=a.n(o),u=a(5),m=a(2),b=function(){return r.a.createElement("div",{className:"d-flex justify-content-center"},r.a.createElement("div",{className:"spinner-grow",role:"status"},r.a.createElement("span",{className:"sr-only"},"Loading...")))},d=function(e){var t=e.item;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"card mt-3 ",style:{width:"33.33%"}},r.a.createElement("img",{src:t.link,className:"rouded ",style:{height:"18rem"},alt:"..."}),r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",{className:"card-title"},"\u0414\u0430\u0442\u0430: ",r.a.createElement("b",{className:"font-weight-bold"},new Date(t.data).toLocaleDateString())),r.a.createElement("p",{className:"card-text"},"\u0421\u044b\u043b\u043a\u0430: ",r.a.createElement("a",{href:t.link,target:"_blank",rel:"noopener noreferrer"},t.link)),r.a.createElement("a",{href:"/detail/".concat(t.name),className:"btn btn-primary"},"\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435"))))};function f(){}var p=Object(n.createContext)({token:null,userId:null,login:f,logout:f,isAuthenticated:!1}),v=function(){var e=Object(n.useState)(!1),t=Object(m.a)(e,2),a=t[0],r=t[1],l=Object(n.useState)(null),c=Object(m.a)(l,2),s=c[0],o=c[1];return{loading:a,request:Object(n.useCallback)(function(){var e=Object(u.a)(i.a.mark((function e(t){var a,n,l,c,s,u,m=arguments;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=m.length>1&&void 0!==m[1]?m[1]:"GET",n=m.length>2?m[2]:void 0,l=m.length>3?m[3]:void 0,c=m.length>4?m[4]:void 0,r(!0),e.prev=5,l&&(n=JSON.stringify(n)),e.next=9,fetch(t,{method:a,body:n,headers:c});case 9:return s=e.sent,e.next=12,s.json();case 12:return u=e.sent,s.ok||(r(!1),o(u)),r(!1),e.abrupt("return",u);case 18:e.prev=18,e.t0=e.catch(5),r(!1),o(e.t0);case 22:case"end":return e.stop()}}),e,null,[[5,18]])})));return function(t){return e.apply(this,arguments)}}(),[]),error:s,clearError:Object(n.useCallback)((function(){return o(null)}),[])}};var E=function(){var e=Object(n.useContext)(p).token,t=Object(n.useState)([]),a=Object(m.a)(t,2),l=a[0],c=a[1],s=v(),o=s.request,f=s.loading,E=Object(n.useCallback)(Object(u.a)(i.a.mark((function t(){var a;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o("/api/file","GET",null,!1,{authorization:"Bearer ".concat(e)});case 3:a=t.sent,c(a),t.next=9;break;case 7:t.prev=7,t.t0=t.catch(0);case 9:case"end":return t.stop()}}),t,null,[[0,7]])}))),[e,o]);return Object(n.useEffect)((function(){E()}),[E]),f?r.a.createElement(b,null):r.a.createElement("div",{className:"row"},l?l.map((function(e,t){return r.a.createElement(d,{item:e,key:t})})):r.a.createElement("p",{className:"d-flex justify-content-center align-items-center mt-5"},"\u0412\u044b \u0435\u0449\u0435 \u043d\u0435 \u0437\u0430\u0433\u0440\u0443\u0436\u0430\u043b\u0438 \u0444\u0430\u0439\u043b\u044b"))},g=function(){var e=Object(n.useState)(null),t=Object(m.a)(e,2),a=t[0],r=t[1],l=Object(n.useState)(!1),c=Object(m.a)(l,2),s=c[0],o=c[1],i=Object(n.useState)(null),u=Object(m.a)(i,2),b=u[0],d=u[1],f=Object(n.useCallback)((function(e,t){r(e),d(t),localStorage.setItem("userData",JSON.stringify({userId:t,token:e}))}),[]),p=Object(n.useCallback)((function(){r(null),d(null),localStorage.removeItem("userData")}),[]);Object(n.useEffect)((function(){var e=JSON.parse(localStorage.getItem("userData"));e&&e.token&&f(e.token,e.id),o(!0)}),[f]);return{login:f,logout:p,token:a,userId:b,id:function(){var e=JSON.parse(localStorage.getItem("userData"));if(e&&e.token)return e.id},ready:s}};var h=function(e){if(e){var t=document.createElement("div");t.className="toast-top-right",t.id="toast-container",t.innerHTML='\n            <div class="toast toast-'.concat(e.type,'" aria-live="polite" >\n                <div class="toast-message">').concat(e.message,"</div>\n            </div>\n        "),document.body.append(t),setTimeout((function(){t.style.opacity=0,t.style.transition="all 1s",setTimeout((function(){t.remove()}),1700)}),1700)}};a(31),a(32);var N=function(){var e=v(),t=(e.error,e.request),a=(e.clearError,Object(s.g)()),l=Object(n.useRef)(),c=g(),o=c.token,m=(c.login,c.logout,c.userId,function(){var e=Object(u.a)(i.a.mark((function e(n){var r,c,s,u,m;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(n.preventDefault(),c=n.target.elements.buffer.files,s=new FormData,r=0;r<c.length;++r)s.append("idx".concat(r),c[r]);if(u=l.current.value,!(c.length<0)&&u){e.next=7;break}return e.abrupt("return",h({type:"error",message:"\u043f\u043e\u043b\u044f \u043f\u0443\u0441\u0442\u044b\u0435"}));case 7:return e.next=9,t("/api/file/upload/".concat(u),"POST",s,!1,{authorization:"Bearer ".concat(o)});case 9:"success"===(m=e.sent).type&&a.push("/files/"),console.log(m),h(m);case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());return Object(n.useEffect)((function(){}),[]),r.a.createElement("div",{className:"App"},r.a.createElement("form",{onSubmit:m},r.a.createElement("label",null,"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430 \u0444\u0430\u0439\u043b\u043e\u0432"),r.a.createElement("br",null),r.a.createElement("input",{type:"file",id:"file",accept:"image/*",name:"buffer"}),r.a.createElement("label",{htmlFor:"file",class:"btn-3"},r.a.createElement("span",null,"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0444\u0430\u0439\u043b\u044b")),r.a.createElement("input",{type:"text",ref:l,placeholder:"\u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0444\u0430\u0439\u043b\u0430"}),r.a.createElement("input",{type:"submit",name:"send",className:"button-upload"})),r.a.createElement("hr",null))},O=function(e){var t=e.file;return t=t[0],console.log(t.link),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"card mb-3 mt-4 col"},r.a.createElement("img",{src:t.link,className:"rouded",style:{height:"18rem"},alt:"..."}),r.a.createElement("div",{className:"card-body"},r.a.createElement("p",{className:"card-text"},"\u0412\u043b\u0430\u0434\u0435\u043b\u0435\u0446: ",r.a.createElement("b",{className:"font-weight-bold"},t.master)),r.a.createElement("p",{className:"card-text"},"\u0421\u044b\u043b\u043a\u0430: ",r.a.createElement("a",{href:t.link,target:"_blank",rel:"noopener noreferrer"},t.link)),r.a.createElement("p",{className:"card-text"},"\u0414\u0430\u0442\u0430 \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f: ",r.a.createElement("b",{className:"font-weight-bold"},new Date(t.data).toLocaleDateString())))))};var j=function(){var e=Object(n.useContext)(p).token,t=Object(n.useState)(null),a=Object(m.a)(t,2),l=a[0],c=a[1],o=Object(s.h)().id,d=v(),f=d.request,E=d.loading,g=Object(n.useCallback)(Object(u.a)(i.a.mark((function t(){var a;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,f("/api/file/".concat(o),"GET",null,!1,{authorization:"Bearer ".concat(e)});case 3:a=t.sent,c(a),t.next=9;break;case 7:t.prev=7,t.t0=t.catch(0);case 9:case"end":return t.stop()}}),t,null,[[0,7]])}))),[e,o,f]);return Object(n.useEffect)((function(){g()}),[g]),E?r.a.createElement(b,null):r.a.createElement(r.a.Fragment,null,!E&&l&&r.a.createElement(O,{file:l}))},k=a(13),w=a(14);a(37),a(38);var x=function(){var e=Object(n.useContext)(p),t=v(),a=t.loading,l=t.error,c=t.request,s=t.clearError,o=Object(n.useState)(!0),b=Object(m.a)(o,2),d=b[0],f=b[1],E=Object(n.useState)(""),g=Object(m.a)(E,2),N=g[0],O=g[1],j=Object(n.useState)(""),x=Object(m.a)(j,2),y=x[0],S=x[1],C=Object(n.useState)(""),I=Object(m.a)(C,2),T=I[0],D=I[1],F=Object(n.useState)(!0),P=Object(m.a)(F,2),L=P[0],B=P[1],q=Object(n.useState)({email:"",password:""}),J=Object(m.a)(q,2),_=J[0],z=J[1],G=Object(n.useState)(!1),H=Object(m.a)(G,2),R=H[0],A=H[1],U=Object(n.useState)(!1),W=Object(m.a)(U,2),M=W[0],$=W[1];function K(){L&&N.length>2&&y.length>4&&T.length>2?A(!0):A(!1)}Object(n.useEffect)((function(){h(l),s(null)}),[l,s]);var Q=function(e){z(Object(w.a)(Object(w.a)({},_),{},Object(k.a)({},e.target.name,e.target.value))),_.email.length>1&&_.password.length>1?$(!0):$(!1)},V=function(){var e=Object(u.a)(i.a.mark((function e(t){var a,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,a={email:N,login:T,password:y},e.next=5,c("/api/auth/register","POST",a,!0,{"Content-Type":"application/json;charset=utf-8"});case 5:n=e.sent,h(n),e.next=11;break;case 9:e.prev=9,e.t0=e.catch(1);case 11:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}(),X=function(){var t=Object(u.a)(i.a.mark((function t(a){var n;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),t.prev=1,t.next=4,c("/api/auth/login","POST",Object(w.a)({},_),!0,{"Content-Type":"application/json;charset=utf-8"});case 4:n=t.sent,e.login(n.token,n.userId),t.next=10;break;case 8:t.prev=8,t.t0=t.catch(1);case 10:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}();return r.a.createElement("div",{className:"row justify-content-center align-items-center",style:{marginTop:"10rem"}},r.a.createElement("div",{className:"col-4 "},d?r.a.createElement("div",{className:"row  switcher-auth text-center"},r.a.createElement("div",{className:"col-6 ",onClick:f.bind(null,!1)},"Sign Up"),r.a.createElement("div",{className:"col-6 switcher-auth__active",onClick:f.bind(null,!0)},"Sign In")):r.a.createElement("div",{className:"row  switcher-auth text-center"},r.a.createElement("div",{className:"col-6 switcher-auth__active",onClick:f.bind(null,!1)},"Sign Up"),r.a.createElement("div",{className:"col-6 ",onClick:f.bind(null,!0)},"Sign In")),d?r.a.createElement("form",{className:"mt-4",onSubmit:X},r.a.createElement("div",{className:"mb-3"},r.a.createElement("label",{htmlFor:"Email",className:"form-label"},"Email address"),r.a.createElement("input",{type:"email",className:"form-control",id:"Email",name:"email",onChange:Q})),r.a.createElement("div",{className:"mb-3"},r.a.createElement("label",{htmlFor:"Password",className:"form-label","aria-describedby":"passwordHelpBlock"},"Password"),r.a.createElement("input",{type:"password",className:"form-control",id:"Password",name:"password",onChange:Q})),M?r.a.createElement("button",{type:"submit",className:"btn bg-success btn-block text-white",disabled:a},"Sign In"):r.a.createElement("button",{type:"submit",className:"btn btn-block text-white bg-danger bg-gradient",disabled:!0},"Sign In")):r.a.createElement("form",{className:"mt-4",onSubmit:V},r.a.createElement("div",{className:"mb-3"},r.a.createElement("label",{htmlFor:"Email",className:"form-label"},"Email address"),r.a.createElement("input",{type:"email",className:"form-control",value:N,onChange:function(e){O(e.target.value),K()}}),r.a.createElement("div",{id:"emailHelp",className:"form-text"},"We'll never share your email with anyone else.")),r.a.createElement("div",{className:"mb-3"},r.a.createElement("label",{htmlFor:"Login",className:"form-label"},"Login"),r.a.createElement("input",{type:"text",className:"form-control",value:T,onChange:function(e){D(e.target.value),K()}})),r.a.createElement("div",{className:"mb-3"},r.a.createElement("label",{htmlFor:"Password",className:"form-label","aria-describedby":"passwordHelpBlock"},"Password"),r.a.createElement("input",{type:"password",className:"form-control",value:y,onChange:function(e){S(e.target.value),K()}})),r.a.createElement("div",{className:"mb-3 form-check"},r.a.createElement("input",{type:"hidden",className:"form-check-input",id:"CheckRuls",checked:L,onChange:function(e){B(e.target.checked),K()}})),R?r.a.createElement("button",{className:"btn bg-success btn-block text-white",disabled:a},"Register"):r.a.createElement("button",{type:"submit",className:"btn btn-block text-white bg-danger bg-gradient",disabled:!0},"Register"))))};var y=function(){var e=Object(n.useContext)(p).token,t=Object(n.useState)(null),a=Object(m.a)(t,2),l=a[0],c=a[1],s=v(),o=s.request,d=s.loading,f=Object(n.useCallback)(Object(u.a)(i.a.mark((function t(){var a;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o("/api/auth/profil","GET",null,!1,{authorization:"Bearer ".concat(e)});case 3:a=t.sent,console.log(a),c(a),t.next=10;break;case 8:t.prev=8,t.t0=t.catch(0);case 10:case"end":return t.stop()}}),t,null,[[0,8]])}))),[e,o]);return Object(n.useEffect)((function(){f()}),[f]),d?r.a.createElement(b,null):r.a.createElement(r.a.Fragment,null,!d&&l&&r.a.createElement("div",{className:"mt-3 d-flex "},r.a.createElement("div",{className:"col"},"\u0412\u0430\u0448\u0430 \u043f\u043e\u0447\u0442\u0430: ",l.email),r.a.createElement("div",{className:"col"},"\u0412\u0430\u0448\u0430 \u043b\u043e\u0433\u0438\u043d: ",l.login),r.a.createElement("div",{className:"col"},"\u0412\u0430\u0448\u0438\u0445 \u0444\u0430\u0439\u043b\u043e\u0432: ",l.files.length)))},S=a(9),C=function(){var e=Object(s.g)(),t=Object(n.useContext)(p);return r.a.createElement("nav",{className:"navbar navbar-dark bg-dark navbar-expand-lg container-flued mh-100",style:{height:"4rem"}},r.a.createElement("div",{className:"container"},r.a.createElement("span",{className:"navbar-brand"},"FileLoader"),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse float-right justify-content-end text-uppercase",id:"navbarNav"},r.a.createElement("ul",{className:"navbar-nav"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(S.b,{className:"nav-link","aria-current":"page",to:"/upload"},"UpLoad")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(S.b,{className:"nav-link",to:"/files"},"Files")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(S.b,{className:"nav-link",to:"/profile"},"Profil")),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link",href:"/",onClick:function(a){a.preventDefault(),t.logout(),e.push("/")}},"LogOut"))))))};var I=function(){var e=g(),t=e.token,a=e.login,n=e.logout,l=e.userId,c=e.ready,o=!!t,i=function(e){return e?r.a.createElement(s.d,null,r.a.createElement(s.b,{path:"/files",exact:!0},r.a.createElement(E,null)),r.a.createElement(s.b,{path:"/upload",exact:!0},r.a.createElement(N,null)),r.a.createElement(s.b,{path:"/detail/:id"},r.a.createElement(j,null)),r.a.createElement(s.b,{path:"/profile",exact:!0},r.a.createElement(y,null)),r.a.createElement(s.a,{to:"/files"})):r.a.createElement(s.d,null,r.a.createElement(s.b,{path:"/",exact:!0},r.a.createElement(x,null)),r.a.createElement(s.a,{to:"/"}))}(o);return c?r.a.createElement(p.Provider,{value:{token:t,login:a,logout:n,userId:l,isAuthenticated:o}},r.a.createElement(S.a,null,o&&r.a.createElement(C,null),r.a.createElement("div",{className:"container"},i))):r.a.createElement(b,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(I,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[23,1,2]]]);
//# sourceMappingURL=main.42f36c4f.chunk.js.map