(this["webpackJsonpnews-portal-app"]=this["webpackJsonpnews-portal-app"]||[]).push([[0],{21:function(e,a,t){e.exports=t(36)},26:function(e,a,t){},27:function(e,a,t){e.exports=t.p+"static/media/logo.5d5d9eef.svg"},28:function(e,a,t){},29:function(e,a,t){},36:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(18),c=t.n(l),o=(t(26),t(27),t(28),t(7)),s=t(8),m=t(10),i=t(9);var u=function(e){return r.a.createElement("button",{onClick:e.handleClick},e.btnText)};var p=function(e){return e.x*e.y},v=(n.Component,t(19)),d=(t(29),{container:{color:"red",fontSize:"20px"},btn:{color:"blue"}}),h=function(e){Object(m.a)(t,e);var a=Object(i.a)(t);function t(){var e;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=a.call.apply(a,[this].concat(r))).state={username:null,password:null},e.handleSubmit=function(a){a.preventDefault(),console.log(e.state)},e.handleOnChange=function(a){e.setState(Object(v.a)({},a.target.name,a.target.value))},e.handleWithRefs=function(){console.log(e.refs.username.value),e.setState({username:e.refs.username.value,password:e.refs.password.value})},e}return Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"jumbotron"},r.a.createElement("h2",{style:d.container},"Login Page"),r.a.createElement("br",null),r.a.createElement("form",null,r.a.createElement("input",{type:"text",placeholder:"usename",ref:"username",onChange:this.handleWithRefs,style:{borderRadius:"10px"}}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("input",{type:"password",placeholder:"password",ref:"password",onChange:this.handleWithRefs,style:{borderRadius:"10px"}}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("button",{className:"login-btn",onClick:this.handleSubmit},"Login")))}}]),t}(n.Component),b=(n.Component,t(6));function E(){return r.a.createElement("div",null,r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light"},r.a.createElement(b.b,{className:"navbar-brand",to:"#"},"Navbar"),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},r.a.createElement("ul",{className:"navbar-nav mr-auto"},r.a.createElement("li",{className:"nav-item active"},r.a.createElement(b.b,{className:"nav-link",to:"/",exact:!0},"Home ",r.a.createElement("span",{className:"sr-only"},"(current)"))),r.a.createElement("li",{className:"nav-item"},r.a.createElement(b.b,{className:"nav-link",to:"/login"},"Login")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(b.b,{className:"nav-link",to:"/dashboard"},"Dashboard"))))))}var f=function(e){return r.a.createElement("div",{className:"jumbotron"},"Welcome ",e.myname," to my new portal.")},g=t(1);var w=function(e){return console.log(e),r.a.createElement("div",null,"My use id is : ",e.match.params.id)},N=function(e){Object(m.a)(t,e);var a=Object(i.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){console.log(this.props);var e=this.props.match;return r.a.createElement("div",{className:"row",stye:{backgroundColor:"#f4f4f4"}},r.a.createElement("div",{className:"col-3"},r.a.createElement("nav",{class:"nav flex-column"},r.a.createElement(b.b,{className:"nav-link active",to:"".concat(e.url)},"Home"),r.a.createElement(b.b,{className:"nav-link active",to:"".concat(e.url,"/users")},"Users"),r.a.createElement(b.b,{className:"nav-link active",to:"".concat(e.url,"/news")},"News"))),r.a.createElement("div",{className:"col-9"},r.a.createElement(g.c,null,r.a.createElement(g.a,{path:"".concat(e.path),exact:!0},"Hello Dashboard"),r.a.createElement(g.a,{path:"".concat(e.path,"/users"),exact:!0},"Hello users"),r.a.createElement(g.a,{path:"".concat(e.path,"/users/:id"),component:w}),r.a.createElement(g.a,{path:"".concat(e.path,"/news")},"Hello news"))))}}]),t}(n.Component);var y=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(b.a,null,r.a.createElement(E,null),r.a.createElement(g.a,{path:"/",component:function(e){return r.a.createElement(f,Object.assign({myname:"nejar"},e))},exact:!0}),r.a.createElement(g.a,{path:"/login",component:h}),r.a.createElement(g.a,{path:"/dashboard",component:function(e){return r.a.createElement(N,e)}})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(35);c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[21,1,2]]]);
//# sourceMappingURL=main.010f5e8e.chunk.js.map