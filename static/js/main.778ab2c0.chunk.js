(this["webpackJsonpnews-portal-app"]=this["webpackJsonpnews-portal-app"]||[]).push([[0],{38:function(e,a,t){e.exports=t(70)},43:function(e,a,t){},44:function(e,a,t){e.exports=t.p+"static/media/logo.5d5d9eef.svg"},45:function(e,a,t){},46:function(e,a,t){},70:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(16),l=t.n(c),o=(t(43),t(44),t(45),t(9)),s=t(10),i=t(12),m=t(11);var u=function(e){return r.a.createElement("button",{onClick:e.handleClick},e.btnText)};var p=function(e){return e.x*e.y},d=(n.Component,t(18)),v=(t(46),{container:{color:"red",fontSize:"20px"},btn:{color:"blue"}}),b=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(){var e;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=a.call.apply(a,[this].concat(r))).state={username:null,password:null},e.handleSubmit=function(a){a.preventDefault(),console.log(e.state)},e.handleOnChange=function(a){e.setState(Object(d.a)({},a.target.name,a.target.value))},e.handleWithRefs=function(){console.log(e.refs.username.value),e.setState({username:e.refs.username.value,password:e.refs.password.value})},e}return Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"jumbotron"},r.a.createElement("h2",{style:v.container},"Login Page"),r.a.createElement("br",null),r.a.createElement("form",null,r.a.createElement("input",{type:"text",placeholder:"usename",ref:"username",onChange:this.handleWithRefs,style:{borderRadius:"10px"}}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("input",{type:"password",placeholder:"password",ref:"password",onChange:this.handleWithRefs,style:{borderRadius:"10px"}}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("button",{className:"login-btn",onClick:this.handleSubmit},"Login")))}}]),t}(n.Component),h=(n.Component,t(7));function E(){return r.a.createElement("div",null,r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light"},r.a.createElement(h.b,{className:"navbar-brand",to:"#"},"Navbar"),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},r.a.createElement("ul",{className:"navbar-nav mr-auto"},r.a.createElement("li",{className:"nav-item active"},r.a.createElement(h.b,{className:"nav-link",to:"/",exact:!0},"Home ",r.a.createElement("span",{className:"sr-only"}))),r.a.createElement("li",{className:"nav-item"},r.a.createElement(h.b,{className:"nav-link",to:"/login"},"Login")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(h.b,{className:"nav-link",to:"/dashboard"},"Dashboard"))))))}var f=function(e){return r.a.createElement("div",{className:"jumbotron"},"Welcome ",e.myname," to my new portal.")},g=t(2);var w=function(e){return console.log(e),r.a.createElement("div",null,"My use id is : ",e.match.params.id)},N=function(e){return r.a.createElement("div",{className:"card"},r.a.createElement("img",{src:e.urlToImage,className:"card-img-top",alt:e.title}),r.a.createElement("div",{className:"card-body"},r.a.createElement("div",{className:"card-title"},r.a.createElement("a",{href:e.url,target:"_blank"},e.title)),r.a.createElement("div",{className:"card-text"},e.description)),r.a.createElement("div",{className:"card-footer text-muted"},"By ",e.author,r.a.createElement("br",null),e.publishedAt))};var y=t(19),j=t(36),O=t.n(j),k=function(e){return function(a){O.a.get("https://newsapi.org/v2/top-headlines?country=".concat(e,"&apiKey=5ebb5a6ed1b2437193a5613470f91932")).then((function(e){console.log(e),a({type:"GET_TOP_NEWS",payload:e.data})})).catch((function(e){console.log(e)}))}},x=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(o.a)(this,t),(n=a.call(this,e)).state={newsList:null},n}return Object(s.a)(t,[{key:"componentDidMount",value:function(){this.props.getTopNews("us")}},{key:"render",value:function(){return console.log(this.props),r.a.createElement("div",{className:"row"},this.props.newsList&&this.props.newsList.articles.map((function(e){return r.a.createElement("div",{className:"col-md-4"},r.a.createElement(N,e))})))}}]),t}(n.Component),C=Object(y.b)((function(e){return{newsList:e.news.newsList}}),(function(e){return{getTopNews:function(a){e(k(a))}}}))(x),L=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){console.log(this.props);var e=this.props.match;return r.a.createElement("div",{className:"row",style:{backgroundColor:"#f4f4f4"}},r.a.createElement("div",{className:"col-3 sidebar-bg-color"},r.a.createElement("nav",{class:"nav flex-column"},r.a.createElement(h.b,{className:"nav-link active",to:"".concat(e.url)},"Home"),r.a.createElement(h.b,{className:"nav-link active",to:"".concat(e.url,"/users")},"Users"),r.a.createElement(h.b,{className:"nav-link active",to:"".concat(e.url,"/news")},"News"))),r.a.createElement("div",{className:"col-9"},r.a.createElement(g.c,null,r.a.createElement(g.a,{path:"".concat(e.path),exact:!0},"Hello Dashboard"),r.a.createElement(g.a,{path:"".concat(e.path,"/users"),exact:!0},"Hello users"),r.a.createElement(g.a,{path:"".concat(e.path,"/users/:id"),component:w}),r.a.createElement(g.a,{path:"".concat(e.path,"/news"),component:C,exact:!0}))))}}]),t}(n.Component);var S=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(h.a,null,r.a.createElement(E,null),r.a.createElement(g.a,{path:"/",component:function(e){return r.a.createElement(f,Object.assign({myname:"nejar"},e))},exact:!0}),r.a.createElement(g.a,{path:"/login",component:b}),r.a.createElement(g.a,{path:"/dashboard",component:function(e){return r.a.createElement(L,e)}})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(69);var T=t(13),W=t(37),R=t(24),_={newsList:null},D=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"GET_TOP_NEWS":return Object(R.a)(Object(R.a)({},e),{},{newsList:a.payload});default:return e}},H=Object(T.c)({news:D}),A=Object(T.e)(H,{},Object(T.d)(T.a.apply(void 0,[W.a])));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(y.a,{store:A},r.a.createElement(S,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[38,1,2]]]);
//# sourceMappingURL=main.778ab2c0.chunk.js.map