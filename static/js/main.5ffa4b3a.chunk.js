(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{12:function(e,t,n){},14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(6),c=n.n(o),l=(n(12),n(13),n(1)),i=n(2),s=n(4),u=n(3),h=function(e){var t=e.id,n=e.name,a=e.email;return(r.a.createElement("div",{className:"bg-light-green dib br3 ma2 bw2 shadow-5 grow"},r.a.createElement("img",{src:"https://robohash.org/".concat(t,"?200x200"),alt:"logo"}),r.a.createElement("div",null,r.a.createElement("h2",null,n),r.a.createElement("p",null,a))))},m=function(e){var t=e.robots;return(r.a.createElement("div",null,t.map((function(e,n){return r.a.createElement(h,{key:n,id:t[n].id,name:t[n].name,email:t[n].email})}))))},d=function(e){e.searchField;var t=e.searchChange;return(r.a.createElement("div",{className:"pa2"},r.a.createElement("input",{onChange:t,className:"pa3 ba b--green bg-lightest-blue",type:"text",placeholder:"Search Robots"})))},b=function(e){return r.a.createElement("div",{style:{overflowY:"scroll",border:"1px solid black",height:"500px"}},e.children)},p=(n(14),function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).state={hasError:!1},a}return Object(i.a)(n,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?r.a.createElement("h1",null,"Ooooops. Something went wrong!"):this.props.children}}]),n}(a.Component)),f=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={robots:[],searchField:""},e.onSearchChange=function(t){e.setState({searchField:t.target.value})},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({robots:t})}))}},{key:"render",value:function(){var e=this.state,t=e.robots,n=e.searchField,a=t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return t.length?r.a.createElement("div",{className:"tc"},r.a.createElement("h1",null,"RoboFriends"),r.a.createElement(d,{searchChange:this.onSearchChange}),r.a.createElement(b,null,r.a.createElement(p,null,r.a.createElement(m,{robots:a})))):r.a.createElement("h1",null,"LOADING")}}]),n}(a.Component);c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(f,null)),document.getElementById("root"))},7:function(e,t,n){e.exports=n(15)}},[[7,1,2]]]);
//# sourceMappingURL=main.5ffa4b3a.chunk.js.map