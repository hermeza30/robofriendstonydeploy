(this.webpackJsonprobofriendstonydeploy=this.webpackJsonprobofriendstonydeploy||[]).push([[0],{12:function(e,t,n){},15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),o=n(7),s=n.n(o),a=(n(12),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,o=t.getLCP,s=t.getTTFB;n(e),c(e),r(e),o(e),s(e)}))}),i=(n(13),n(2)),h=n(3),l=n(5),d=n(4),b=n(0),u=function(e){var t=e.name,n=e.id,c=e.email;return Object(b.jsxs)("div",{className:"bg-light-green dib br3 pa3 ma2 grow bw2 shadow-2",children:[Object(b.jsx)("img",{alt:"robots",src:"https://robohash.org/".concat(n,"?200x200")}),Object(b.jsxs)("div",{children:[Object(b.jsx)("h2",{children:t}),Object(b.jsx)("p",{children:c})]})]})},j=function(e){var t=e.robots.map((function(e,t){return Object(b.jsx)(u,{id:e.id,name:e.name,email:e.email},t)}));return Object(b.jsx)("div",{children:t})},p=function(e){e.searchField;var t=e.searchChange;return Object(b.jsx)("div",{className:"pa2",children:Object(b.jsx)("input",{className:"pa3 ba b--green bg-lightest-blue ",type:"search",placeholder:"search robot",onChange:t})})},f=(n(15),function(e){return Object(b.jsx)("div",{style:{overflowY:"scroll",border:"1px solid black",height:"800px"},children:e.children})}),O=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(e){var c;return Object(i.a)(this,n),(c=t.call(this,e)).state={hasError:!1},c}return Object(h.a)(n,[{key:"componentDidCatch",value:function(e,t){this.state.hasError(e)}},{key:"render",value:function(){return this.state.hasError?Object(b.jsx)("h1",{children:"Oppps. that is not good"}):this.props.children}}]),n}(c.Component),g=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){var e;return Object(i.a)(this,n),(e=t.call(this)).onSearchChange=function(t){e.setState({searchField:t.target.value})},e.state={robots:[],searchField:""},console.log("constructor"),e}return Object(h.a)(n,[{key:"componentDidMount",value:function(){var e=this;console.log("componentDidMount"),fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){e.setState({robots:t})})).catch(console.log)}},{key:"render",value:function(){var e=this.state,t=e.robots,n=e.searchField,c=t.filter((function(e){return e.name.toLocaleLowerCase().includes(n.toLocaleLowerCase())}));return t.length?Object(b.jsxs)("div",{className:"tc",children:[Object(b.jsx)("h1",{className:"f2",children:"Robo-Tony-Friends"}),Object(b.jsx)(p,{searchChange:this.onSearchChange}),Object(b.jsx)(f,{children:Object(b.jsx)(O,{children:Object(b.jsx)(j,{robots:c})})})]}):Object(b.jsx)("h1",{children:"Loading!..."})}}]),n}(c.Component);s.a.render(Object(b.jsx)(r.a.StrictMode,{children:Object(b.jsx)(g,{})}),document.getElementById("root")),a()}},[[16,1,2]]]);
//# sourceMappingURL=main.9a7fb75c.chunk.js.map