(this["webpackJsonpread-data"]=this["webpackJsonpread-data"]||[]).push([[0],{45:function(t,e,n){},46:function(t,e,n){"use strict";n.r(e);var r=n(2),a=n.n(r),c=n(18),s=n.n(c),u=n(3),o=n.n(u),i=n(4),d=n(5),h=n(6),p=n(8),f=n(7),j=(n(25),n(1)),l=function(t){Object(p.a)(n,t);var e=Object(f.a)(n);function n(){var t;Object(d.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(t=e.call.apply(e,[this].concat(a))).state={users:[]},t}return Object(h.a)(n,[{key:"componentDidMount",value:function(){var t=Object(i.a)(o.a.mark((function t(){var e,n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("./data.json");case 2:return e=t.sent,t.next=5,e.json();case 5:n=t.sent,this.setState({users:n});case 7:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){return Object(j.jsx)("ul",{children:this.state.users.map((function(t,e){return Object(j.jsxs)("li",{children:[t.user,", ",t.password]},e)}))})}}]),n}(r.Component),b=(n(45),n(19)),v=n.n(b),O=(r.Component,function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,47)).then((function(e){var n=e.getCLS,r=e.getFID,a=e.getFCP,c=e.getLCP,s=e.getTTFB;n(t),r(t),a(t),c(t),s(t)}))});s.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(l,{})}),document.getElementById("root")),O()}},[[46,1,2]]]);
//# sourceMappingURL=main.b2162020.chunk.js.map