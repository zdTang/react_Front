(this["webpackJsonpread-data"]=this["webpackJsonpread-data"]||[]).push([[0],{102:function(e,t){},104:function(e,t){},112:function(e,t){},122:function(e,t,n){},123:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(64),s=n.n(r),o=n(13),i=n(14),l=n(16),u=n(15),d=n(34),h=n(2),p=n(19),b=n.n(p),m=n(30),j=n(65),v="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.182 Safari/537.36",f="h8PCl1ykdWxcAA",g="TCmMJItd9icxcePzJ-CgRe-1TXPCUw",O="mike-tang",x="Frontend123",y=9,k=new(n.n(j).a)({userAgent:v,clientId:f,clientSecret:g,username:O,password:x});function S(e){return N.apply(this,arguments)}function N(){return(N=Object(m.a)(b.a.mark((function e(t){var n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=void 0,e.next=3,k.getSubreddit(t).getHot({limit:y}).then((function(e){n=e}));case 3:return e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var w=1e3,C=200,I=n(1),F=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).state={display:e.display,count:e.count},a}return Object(i.a)(n,[{key:"componentWillUnmount",value:function(){console.log("=======will Unmount")}},{key:"truncateString",value:function(e,t){var n=e.indexOf(" ",t);return-1==n?e:e.substring(0,n)}},{key:"saveToFavourite",value:function(){localStorage.setItem(this.props.post.title,this.props.post.url),console.log("################################");for(var e=0,t=localStorage.length;e<t;e++){var n=localStorage.key(e),a=localStorage.getItem(n);console.log(e+"====="+n+"==========="+a)}}},{key:"imageURL",value:function(){return"https://variety.com/wp-content/uploads/2020/06/reddit-logo-1.png"}},{key:"render",value:function(){return Object(I.jsxs)("div",{className:"card",children:[Object(I.jsx)("img",{className:"card-img-top",src:this.props.post.preview||this.props.post.preview?this.props.post.preview.images[0].source.url:"https://variety.com/wp-content/uploads/2020/06/reddit-logo-1.png",alt:"Card image cap"}),Object(I.jsxs)("div",{className:"card-body",children:[Object(I.jsx)("h5",{className:"card-title",children:this.props.post.title}),Object(I.jsx)("p",{className:"card-text",children:this.truncateString(this.props.post.selftext,C)}),Object(I.jsx)("a",{href:this.props.post.url,target:"_blank",className:"btn btn-primary",children:"Read More"}),Object(I.jsxs)("div",{className:"form-check",children:[Object(I.jsx)("input",{className:"form-check-input",type:"checkbox",value:"",id:"flexCheckIndeterminate",onClick:this.saveToFavourite.bind(this)}),Object(I.jsx)("label",{className:"form-check-label",htmlFor:"flexCheckIndeterminate",children:"Add Favrate"})]})]})]})}}]),n}(a.Component),T=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).state={post:sessionStorage.getItem("post")&&JSON.parse(sessionStorage.getItem("post"))},a}return Object(i.a)(n,[{key:"componentWillUnmount",value:function(){console.log("will unmount==".concat(this.state.post)),sessionStorage.setItem("post",JSON.stringify(this.state.post)),console.log("Search=======will Unmount")}},{key:"showMessage",value:function(e,t){var n=document.createElement("div");n.className="alert ".concat(t),n.appendChild(document.createTextNode(e));var a=document.getElementById("search-container"),c=document.getElementById("search");a.insertBefore(n,c),setTimeout((function(){return document.querySelector(".alert").remove()}),w)}},{key:"SearchReddit",value:function(){var e=Object(m.a)(b.a.mark((function e(){var t,n,a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=document.getElementById("search-input"),n=t.value,a=void 0,""!==n){e.next=7;break}this.showMessage("please add a serarch term","alert-danger"),e.next=15;break;case 7:return e.next=9,S(n);case 9:a=e.sent,a,console.log(a),this.setState({post:a}),console.log(this.state.post),t.value="";case 15:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return console.log("haha".concat(sessionStorage.getItem("post"))),Object(I.jsxs)("div",{id:"search-container",className:"container",children:[Object(I.jsxs)("div",{id:"search",className:"card card-body bg-light mb-2",children:[Object(I.jsx)("h4",{children:"Search SubReddit"}),Object(I.jsx)("input",{type:"text",id:"search-input",className:"form-control mb-3",placeholder:"Search Term..."}),Object(I.jsx)("button",{type:"submit",className:"btn btn-dark btn-block mt-4",onClick:this.SearchReddit.bind(this,"tang"),children:"Search"})]}),(this.state.post||[]).map((function(e,t){return Object(I.jsx)(F,{post:e},t)})),Object(I.jsx)("div",{id:"results"})]})}}]),n}(a.Component),R=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).state={display:e.display,count:e.count},a}return Object(i.a)(n,[{key:"DeleteFavourite",value:function(){localStorage.removeItem(this.props.post.title),this.props.func()}},{key:"render",value:function(){return Object(I.jsx)("div",{className:"card",children:Object(I.jsxs)("div",{className:"card-body",children:[Object(I.jsx)("h5",{className:"card-title",children:this.props.post.title}),Object(I.jsx)("a",{href:this.props.post.url,target:"_blank",className:"btn btn-primary",children:"Read"}),Object(I.jsx)("button",{type:"button",className:"btn btn-outline-danger",onClick:this.DeleteFavourite.bind(this),children:"Remove"})]})})}}]),n}(a.Component),M=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).loadLocalStorage=function(){for(var e=[],t=0,n=localStorage.length;t<n;t++){var c=localStorage.key(t),r=localStorage.getItem(c);e.push({title:c,url:r})}a.setState({post:e})},a.state={post:""},a}return Object(i.a)(n,[{key:"componentDidMount",value:function(){this.loadLocalStorage()}},{key:"DeleteReddit",value:function(){console.log("haha")}},{key:"render",value:function(){var e=this;return Object(I.jsxs)("div",{id:"search-container",className:"container",children:[Object(I.jsx)("div",{id:"search",className:"card card-body bg-light mb-2",children:Object(I.jsx)("h4",{children:"Favourite SubReddit"})}),(this.state.post||[]).map((function(t,n){return Object(I.jsx)(R,{post:t,func:e.loadLocalStorage},n)})),Object(I.jsx)("div",{id:"results"})]})}}]),n}(a.Component),L=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return Object(I.jsxs)(d.a,{children:[Object(I.jsx)("nav",{className:"navbar navbar-dark bg-primary mb-3",children:Object(I.jsx)("div",{className:"container",children:Object(I.jsx)("span",{className:"navbar-brand",children:"Finddit"})})}),Object(I.jsxs)("ul",{className:"nav",children:[Object(I.jsx)("li",{className:"nav-item",children:Object(I.jsx)(d.b,{className:"nav-link active",to:"/Search",children:"Search"})}),Object(I.jsx)("li",{className:"nav-item",children:Object(I.jsx)(d.b,{className:"nav-link active",to:"/Favorite",children:" Favorite "})})]}),Object(I.jsx)(h.a,{path:"/Search",component:T}),Object(I.jsx)(h.a,{path:"/Favorite",component:M})]})}}]),n}(a.Component),B=(n(122),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,124)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),r(e),s(e)}))});s.a.render(Object(I.jsx)(c.a.StrictMode,{children:Object(I.jsx)(L,{})}),document.getElementById("root")),B()},52:function(e,t){},56:function(e,t){},79:function(e,t){},88:function(e,t){},96:function(e,t){}},[[123,1,2]]]);
//# sourceMappingURL=main.83834d65.chunk.js.map