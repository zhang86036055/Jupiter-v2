(this["webpackJsonptwitch-client"]=this["webpackJsonptwitch-client"]||[]).push([[0],{171:function(e,t,n){},255:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(30),i=n.n(c),s=(n(171),n(14)),o=n(19),l=n(18),u=n(257),d=n(163),h=n(81),j=n(48),f=n(65),m=n(263),b=n(261),p=n(259),O=n(260),g=n(265),x=n(266),y="",v="".concat(y,"/login"),S=function(e){return fetch(v,{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify(e)}).then((function(e){if(200!==e.status)throw Error("Fail to log in");return e.json()}))},C="".concat(y,"/register"),w=function(e){return fetch(C,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(e){if(200!==e.status)throw Error("Fail to register")}))},I="".concat(y,"/logout"),F=function(){return fetch(I,{method:"POST",credentials:"include"}).then((function(e){if(200!==e.status)throw Error("Fail to log out")}))},P="".concat(y,"/game"),k=function(){return fetch(P).then((function(e){if(200!==e.status)throw Error("Fail to get top games");return e.json()}))},E="".concat(y,"/game?game_name="),M="".concat(y,"/search?game_id="),T=function(e){return fetch("".concat(M).concat(e)).then((function(e){if(200!==e.status)throw Error("Fail to find the game");return e.json()}))},_=function(e){return function(e){return fetch("".concat(E).concat(e)).then((function(e){if(200!==e.status)throw Error("Fail to find the game");return e.json()}))}(e).then((function(e){if(e&&e.id)return T(e.id);throw Error("Fail to find the game")}))},R="".concat(y,"/favorite"),D=function(){return fetch(R,{credentials:"include"}).then((function(e){if(200!==e.status)throw Error("Fail to get favorite item");return e.json()}))},L="".concat(y,"/recommendation"),A=function(){return fetch(L,{credentials:"include"}).then((function(e){if(200!==e.status)throw Error("Fail to get recommended item");return e.json()}))},G=n(6),V=function(e){Object(o.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(s.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={displayModal:!1},e.handleCancel=function(){e.setState({displayModal:!1})},e.signinOnClick=function(){e.setState({displayModal:!0})},e.onFinish=function(t){S(t).then((function(t){e.setState({displayModal:!1}),d.b.success("Welcome back, ".concat(t.name)),e.props.onSuccess()})).catch((function(e){d.b.error(e.message)}))},e.render=function(){return Object(G.jsxs)(G.Fragment,{children:[Object(G.jsx)(f.a,{shape:"round",onClick:e.signinOnClick,style:{marginRight:"20px"},children:"Login"}),Object(G.jsx)(b.a,{title:"Log in",visible:e.state.displayModal,onCancel:e.handleCancel,footer:null,destroyOnClose:!0,children:Object(G.jsxs)(p.a,{name:"normal_login",onFinish:e.onFinish,preserve:!1,children:[Object(G.jsx)(p.a.Item,{name:"user_id",rules:[{required:!0,message:"Please input your Username!"}],children:Object(G.jsx)(O.a,{prefix:Object(G.jsx)(g.a,{}),placeholder:"Username"})}),Object(G.jsx)(p.a.Item,{name:"password",rules:[{required:!0,message:"Please input your Password!"}],children:Object(G.jsx)(O.a,{prefix:Object(G.jsx)(x.a,{}),placeholder:"Password"})}),Object(G.jsx)(p.a.Item,{children:Object(G.jsx)(f.a,{type:"primary",htmlType:"submit",children:"Login"})})]})})]})},e}return n}(a.a.Component),q=function(e){Object(o.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(s.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={displayModal:!1},e.handleCancel=function(){e.setState({displayModal:!1})},e.signupOnClick=function(){e.setState({displayModal:!0})},e.onFinish=function(t){w(t).then((function(){e.setState({displayModal:!1}),d.b.success("Successfully signed up")})).catch((function(e){d.b.error(e.message)}))},e.render=function(){return Object(G.jsxs)(G.Fragment,{children:[Object(G.jsx)(f.a,{shape:"round",type:"primary",onClick:e.signupOnClick,children:"Register"}),Object(G.jsx)(b.a,{title:"Register",visible:e.state.displayModal,onCancel:e.handleCancel,footer:null,destroyOnClose:!0,children:Object(G.jsxs)(p.a,{name:"normal_register",initialValues:{remember:!0},onFinish:e.onFinish,preserve:!1,children:[Object(G.jsx)(p.a.Item,{name:"user_id",rules:[{required:!0,message:"Please input your Username!"}],children:Object(G.jsx)(O.a,{prefix:Object(G.jsx)(g.a,{}),placeholder:"Username"})}),Object(G.jsx)(p.a.Item,{name:"password",rules:[{required:!0,message:"Please input your Password!"}],children:Object(G.jsx)(O.a,{prefix:Object(G.jsx)(x.a,{}),placeholder:"Password"})}),Object(G.jsx)(p.a.Item,{name:"first_name",rules:[{required:!0,message:"Please input your Firstname!"}],children:Object(G.jsx)(O.a,{placeholder:"firstname"})}),Object(G.jsx)(p.a.Item,{name:"last_name",rules:[{required:!0,message:"Please input your Lastname!"}],children:Object(G.jsx)(O.a,{placeholder:"lastname"})}),Object(G.jsx)(p.a.Item,{children:Object(G.jsx)(f.a,{type:"primary",htmlType:"submit",children:"Register"})})]})})]})},e}return n}(a.a.Component),N=n(262),J=n(267),U=n(166),B=n(268),K=n(269),H=m.a.SubMenu,W="streams",z="videos",Q="clips",X=function(e){Object(o.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(s.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={displayDrawer:!1},e.onDrawerClose=function(){e.setState({displayDrawer:!1})},e.onFavoriteClick=function(){e.setState({displayDrawer:!0})},e.render=function(){var t=e.props.data,n=t.VIDEO,r=t.STREAM,a=t.CLIP;return Object(G.jsxs)(G.Fragment,{children:[Object(G.jsx)(f.a,{type:"primary",shape:"round",onClick:e.onFavoriteClick,icon:Object(G.jsx)(J.a,{}),children:"My Favorites"}),Object(G.jsx)(N.a,{title:"My Favorites",placement:"right",width:720,visible:e.state.displayDrawer,onClose:e.onDrawerClose,children:Object(G.jsxs)(m.a,{mode:"inline",defaultOpenKeys:[W],style:{height:"100%",borderRight:0},selectable:!1,children:[Object(G.jsx)(H,{icon:Object(G.jsx)(U.a,{}),title:"Streams",children:r.map((function(e){return Object(G.jsx)(m.a.Item,{children:Object(G.jsx)("a",{href:e.url,target:"_blank",rel:"noopener noreferrer",children:"".concat(e.broadcaster_name," - ").concat(e.title)})},e.id)}))},W),Object(G.jsx)(H,{icon:Object(G.jsx)(B.a,{}),title:"Videos",children:n.map((function(e){return Object(G.jsx)(m.a.Item,{children:Object(G.jsx)("a",{href:e.url,target:"_blank",rel:"noopener noreferrer",children:"".concat(e.broadcaster_name," - ").concat(e.title)})},e.id)}))},z),Object(G.jsx)(H,{icon:Object(G.jsx)(K.a,{}),title:"Clips",children:a.map((function(e){return Object(G.jsx)(m.a.Item,{children:Object(G.jsx)("a",{href:e.url,target:"_blank",rel:"noopener noreferrer",children:"".concat(e.broadcaster_name," - ").concat(e.title)})},e.id)}))},Q)]})})]})},e}return n}(a.a.Component),Y=n(271),Z=n(272),$=n(128),ee=function(e){Object(o.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(s.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={displayModal:!1},e.handleCancel=function(){e.setState({displayModal:!1})},e.searchOnClick=function(){e.setState({displayModal:!0})},e.onSubmit=function(t){_(t.game_name).then((function(t){e.setState({displayModal:!1}),e.props.onSuccess(t)})).catch((function(e){d.b.error(e.message)}))},e.render=function(){return Object(G.jsxs)(G.Fragment,{children:[Object(G.jsxs)(f.a,{shape:"round",onClick:e.searchOnClick,icon:Object(G.jsx)($.a,{}),style:{marginLeft:"20px",marginTop:"20px"},children:["Custom Search"," "]}),Object(G.jsx)(b.a,{title:"Search",visible:e.state.displayModal,onCancel:e.handleCancel,footer:null,children:Object(G.jsxs)(p.a,{name:"custom_search",onFinish:e.onSubmit,children:[Object(G.jsx)(p.a.Item,{name:"game_name",rules:[{required:!0,message:"Please enter a game name"}],children:Object(G.jsx)(O.a,{placeholder:"Game name"})}),Object(G.jsx)(p.a.Item,{children:Object(G.jsx)(f.a,{type:"primary",htmlType:"submit",children:"Search"})})]})})]})},e}return n}(a.a.Component),te=n(159),ne=n.n(te),re=n(137),ae=n(121),ce=n(258),ie=n(264),se=n(270),oe=re.a.TabPane,le="stream",ue="videos",de="clips",he=function(e,t,n,r){var a="".concat(e.broadcaster_name," - ").concat(e.title),c=n.find((function(t){return t.id===e.id}));return Object(G.jsxs)(G.Fragment,{children:[t&&Object(G.jsx)(ae.a,{title:c?"Remove from favorite list":"Add to favorite list",children:Object(G.jsx)(f.a,{shape:"circle",icon:c?Object(G.jsx)(J.a,{}):Object(G.jsx)(se.a,{}),onClick:function(){var t;c?(t=e,fetch(R,{method:"DELETE",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify({favorite:t})}).then((function(e){if(200!==e.status)throw Error("Fail to delete favorite item")}))).then((function(){r()})).catch((function(e){d.b.error(e.message)})):function(e){return fetch(R,{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify({favorite:e})}).then((function(e){if(200!==e.status)throw Error("Fail to add favorite item")}))}(e).then((function(){r()})).catch((function(e){d.b.error(e.message)}))}})}),Object(G.jsx)("div",{style:{overflow:"hidden",textOverflow:"ellipsis",width:450},children:Object(G.jsx)(ae.a,{title:a,children:Object(G.jsx)("span",{children:a})})})]})},je=function(e,t,n,r){return Object(G.jsx)(ce.b,{grid:{xs:1,sm:2,md:4,lg:4,xl:6},dataSource:e,renderItem:function(e){return Object(G.jsx)(ce.b.Item,{style:{marginRight:"20px"},children:Object(G.jsx)(ie.a,{title:he(e,t,n,r),children:Object(G.jsx)("a",{href:e.url,target:"_blank",rel:"noopener noreferrer",children:Object(G.jsx)("img",{alt:"Placeholder",src:(a=e.thumbnail_url,a.replace("%{height}","252").replace("%{width}","480").replace("{height}","252").replace("{width}","480"))})})})});var a}})},fe=function(e){var t=e.resources,n=e.loggedIn,r=e.favoriteItems,a=e.favoriteOnChange,c=t.VIDEO,i=t.STREAM,s=t.CLIP,o=r.VIDEO,l=r.STREAM,u=r.CLIP;return Object(G.jsxs)(re.a,{defaultActiveKey:le,children:[Object(G.jsx)(oe,{tab:"Streams",style:{height:"680px",overflow:"auto"},forceRender:!0,children:je(i,n,l,a)},le),Object(G.jsx)(oe,{tab:"Videos",style:{height:"680px",overflow:"auto"},forceRender:!0,children:je(c,n,o,a)},ue),Object(G.jsx)(oe,{tab:"Clips",style:{height:"680px",overflow:"auto"},forceRender:!0,children:je(s,n,u,a)},de)]})},me=u.a.Header,be=u.a.Content,pe=u.a.Sider,Oe=function(e){Object(o.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(s.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={loggedIn:!1,topGames:[],resources:{VIDEO:[],STREAM:[],CLIP:[]},favoriteItems:{VIDEO:[],STREAM:[],CLIP:[]}},e.favoriteOnChange=function(){D().then((function(t){e.setState({favoriteItems:t,loggedIn:!0})})).catch((function(e){d.b.error(e.message)}))},e.onGameSelect=function(t){var n=t.key;"Recommendation"!==n?T(n).then((function(t){e.setState({resources:t})})):A().then((function(t){e.setState({resources:t})}))},e.customSearchOnSuccess=function(t){e.setState({resources:t})},e.signinOnSuccess=function(){D().then((function(t){e.setState({favoriteItems:t,loggedIn:!0})})).catch((function(e){d.b.error(e.message)}))},e.signoutOnClick=function(){F().then((function(){e.setState({loggedIn:!1}),d.b.success("Successfull signed out")})).catch((function(e){d.b.error(e.message)}))},e.componentDidMount=function(){k().then((function(t){e.setState({topGames:t})})).catch((function(e){d.b.error(e.message)}))},e.render=function(){return Object(G.jsxs)(u.a,{children:[Object(G.jsx)(me,{children:Object(G.jsxs)(h.a,{justify:"space-between",children:[Object(G.jsx)(j.a,{children:e.state.loggedIn&&Object(G.jsx)(X,{data:e.state.favoriteItems})}),Object(G.jsx)(j.a,{children:e.state.loggedIn?Object(G.jsx)(f.a,{shape:"round",onClick:e.signoutOnClick,children:"Logout"}):Object(G.jsxs)(G.Fragment,{children:[Object(G.jsx)(V,{onSuccess:e.signinOnSuccess}),Object(G.jsx)(q,{})]})})]})}),Object(G.jsxs)(u.a,{children:[Object(G.jsxs)(pe,{width:300,className:"site-layout-background",children:[Object(G.jsx)(ee,{onSuccess:e.customSearchOnSuccess}),Object(G.jsxs)(m.a,{mode:"inline",onSelect:e.onGameSelect,style:{marginTop:"10px"},children:[Object(G.jsx)(m.a.Item,{icon:Object(G.jsx)(Y.a,{}),children:"Recommend for you!"},"Recommendation"),Object(G.jsx)(ne.a,{icon:Object(G.jsx)(Z.a,{}),title:"Popular Games",className:"site-top-game-list",children:e.state.topGames.map((function(e){return Object(G.jsxs)(m.a.Item,{style:{height:"50px"},children:[Object(G.jsx)("img",{alt:"Placeholder",src:e.box_art_url.replace("{height}","40").replace("{width}","40"),style:{borderRadius:"50%",marginRight:"20px"}}),Object(G.jsx)("span",{children:e.name})]},e.id)}))},"Popular Games")]})]}),Object(G.jsx)(u.a,{style:{padding:"24px"},children:Object(G.jsx)(be,{className:"site-layout-background",style:{padding:24,margin:0,height:800,overflow:"auto"},children:Object(G.jsx)(fe,{resources:e.state.resources,loggedIn:e.state.loggedIn,favoriteItems:e.state.favoriteItems,favoriteOnChange:e.favoriteOnChange})})})]})]})},e}return n}(a.a.Component),ge=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,273)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),r(e),a(e),c(e),i(e)}))};i.a.render(Object(G.jsx)(a.a.StrictMode,{children:Object(G.jsx)(Oe,{})}),document.getElementById("root")),ge()}},[[255,1,2]]]);
//# sourceMappingURL=main.15d51185.chunk.js.map