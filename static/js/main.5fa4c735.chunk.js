(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1062:function(e,t){},1162:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(409),o=n.n(r),s=(n(417),n(13)),l=n.n(s),i=n(112),u=n(66),d=n(71),h=n(25),b=n(26),p=n(28),m=n(27),v=n(29),f=(n(421),n(251),function(e){function t(){var e,n;Object(h.a)(this,t);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(n=Object(p.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(c)))).styles={fontSize:30,fontWeight:"bold"},n}return Object(v.a)(t,e),Object(b.a)(t,[{key:"render",value:function(){var e=this;console.log("Counter Props: ",this.props);var t=this.props,n=t.counter,a=t.onDelete,r=t.onIncrement;return c.a.createElement("div",null,c.a.createElement("span",{style:this.styles,className:this.getBadgeClasses()},this.formatCount()),c.a.createElement("button",{onClick:function(){return r(n)},className:"btn btn-secondary btn-sm"},"Increment"),c.a.createElement("button",{onClick:function(){return a(e.props.counter.id)},className:"btn btn-danger btn-sm m-2"},"Delete"))}},{key:"getBadgeClasses",value:function(){var e="badge m-2 badge-";return e+=0===this.props.counter.count?"warning":"primary"}},{key:"formatCount",value:function(){var e=this.props.counter.count;return 0===e?c.a.createElement("div",null,"Zero"):e}}]),t}(a.Component)),O=function(e){function t(){var e,n;Object(h.a)(this,t);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(n=Object(p.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(c)))).state={counters:[],news:[]},n.handleReset=function(){n.setState({counters:[{id:1,count:0},{id:2,count:0},{id:3,count:0},{id:4,count:0},{id:5,count:0},{id:6,count:0}]})},n.handleIncrement=function(e){var t=Object(d.a)(n.state.counters),a=t.indexOf(e),c=Object(u.a)({},e);t[a]=c,c.count++,n.setState({counters:t})},n.handleDelete=function(e){var t=n.state.counters.filter(function(t){return t.id!==e});n.setState({counters:t})},n}return Object(v.a)(t,e),Object(b.a)(t,[{key:"callbackAwait",value:function(){var e=Object(i.a)(l.a.mark(function e(){var t,n;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("http://localhost:3001/counters");case 3:if((t=e.sent).ok){e.next=6;break}throw Error(t.statusText);case 6:return e.next=8,t.json();case 8:n=e.sent,this.setState({counters:n}),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),this.setState({counters:[{id:1,count:5},{id:2,count:3}]});case 15:case"end":return e.stop()}},e,this,[[0,12]])}));return function(){return e.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){this.callbackAwait(),console.log("callback function called.")}},{key:"render",value:function(){var e=this;return c.a.createElement("div",null,c.a.createElement("button",{className:"btn btn-primary btn-sm m-2",onClick:this.handleReset},"Reset"),this.state.counters.map(function(t,n){return c.a.createElement(f,{key:n,counter:t,onDelete:e.handleDelete,onIncrement:e.handleIncrement})}))}}]),t}(a.Component),k=n(1163),j=function(e){e.length;return c.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light"},c.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarNavAltMarkup"},c.a.createElement("div",{className:"navbar-nav"},c.a.createElement(k.a,{className:"nav-item nav-link active",to:"/news"},"News"),c.a.createElement(k.a,{className:"nav-item nav-link active",to:"/calculator"},"Calculator"),c.a.createElement(k.a,{className:"nav-item nav-link active",to:"/counter"},"Counter"),c.a.createElement(k.a,{className:"nav-item nav-link active",to:"/todos"},"Todos"))))},E=function(e){function t(){return Object(h.a)(this,t),Object(p.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(b.a)(t,[{key:"render",value:function(){var e=this.props.data?this.props.data:"Output here",t=this.props,n=t.handlePrev,a=t.handleNext,r=t.nextDisabled,o=t.previousDisabled;return c.a.createElement("div",null,c.a.createElement("h2",{className:"display-1 text-center"},e," "),c.a.createElement("div",{style:{justifyContent:"center",alignItems:"center"}},c.a.createElement("button",{disabled:o,onClick:n},"Previous"),c.a.createElement("button",{disabled:r,onClick:a},"Next")))}}]),t}(c.a.Component),w=n(114),g={fontSize:"2.5rem",height:"5rem",margin:"0.05rem",width:"5rem"},y=function(e){function t(e){return Object(h.a)(this,t),Object(p.a)(this,Object(m.a)(t).call(this,e))}return Object(v.a)(t,e),Object(b.a)(t,[{key:"render",value:function(){var e,t=this.props,n=t.label,a=t.size,r=t.onClick,o=t.value,s=t.disabled;return c.a.createElement("button",(e={className:"btn btn-secondary",style:g,onClick:function(){return r(o)},disabled:s},Object(w.a)(e,"className","Button"),Object(w.a)(e,"type","button"),Object(w.a)(e,"data-size",a),Object(w.a)(e,"data-value",o),e),n)}}]),t}(c.a.Component),C=function(e){function t(){var e;return Object(h.a)(this,t),(e=Object(p.a)(this,Object(m.a)(t).call(this))).handleClick=function(t){switch(t){case"clear":e.setState({content:"",status:0});break;case"equal":e.calculate();break;default:var n;3===e.state.status?n=t:(n=e.state.content,n+=t),e.setState({content:n,numberDisabled:!1,operandDisabled:!1,status:2})}},e.calculate=function(){var t=n(425),a=e.state.content,c=a;if(a)try{a=c+"="+t.eval(a);var r=Object(d.a)(e.state.operations);r.push(a),e.setState({operations:r,content:a,status:3})}catch(o){alert("There is syntax error..."),e.setState({content:"",status:0})}console.log(e.state)},e.handlePrev=function(){var t,n=e.state,a=n.operations,c=n.content;if(0===n.status)t=a[a.length-1];else{var r=a.indexOf(c);t=a[r>=1?r-1:0]}e.setState({content:t,status:3})},e.handleNext=function(){var t=e.state,n=t.operations,a=t.content,c=n.indexOf(a),r=n[c<n.length-1?c+1:n.length-1];e.setState({content:r,status:3})},e.state={operations:[],content:"",status:0},e}return Object(v.a)(t,e),Object(b.a)(t,[{key:"render",value:function(){var e={justifyContent:"center",alignItems:"center"},t=this.state,n=t.status,a=t.operations,r=0===n||3===n,o=2===n||0===n&&0===a.length,s=2===n||0===n&&0===a.length;return c.a.createElement("div",null,c.a.createElement(E,{data:this.state.content,handlePrev:this.handlePrev,handleNext:this.handleNext,previousDisabled:o,nextDisabled:s}),c.a.createElement("hr",null),c.a.createElement("div",{className:"row",style:e},c.a.createElement(y,{onClick:this.handleClick,disabled:r,label:"/",value:"/"}),c.a.createElement(y,{onClick:this.handleClick,disabled:!1,label:"7",value:"7"}),c.a.createElement(y,{onClick:this.handleClick,disabled:!1,label:"8",value:"8"}),c.a.createElement(y,{onClick:this.handleClick,disabled:!1,label:"9",value:"9"})),c.a.createElement("div",{className:"row",style:e},c.a.createElement(y,{onClick:this.handleClick,disabled:r,label:"x",value:"*"}),c.a.createElement(y,{onClick:this.handleClick,disabled:!1,label:"4",value:"4"}),c.a.createElement(y,{onClick:this.handleClick,disabled:!1,label:"5",value:"5"}),c.a.createElement(y,{onClick:this.handleClick,disabled:!1,label:"6",value:"6"})),c.a.createElement("div",{className:"row",style:e},c.a.createElement(y,{onClick:this.handleClick,disabled:r,label:"-",value:"-"}),c.a.createElement(y,{onClick:this.handleClick,disabled:!1,label:"1",value:"1"}),c.a.createElement(y,{onClick:this.handleClick,disabled:!1,label:"2",value:"2"}),c.a.createElement(y,{onClick:this.handleClick,disabled:!1,label:"3",value:"3"})),c.a.createElement("div",{className:"row",style:e},c.a.createElement(y,{onClick:this.handleClick,disabled:r,label:"+",size:"2",value:"+"}),c.a.createElement(y,{onClick:this.handleClick,disabled:!1,label:"C",value:"clear"}),c.a.createElement(y,{onClick:this.handleClick,disabled:!1,label:"0",value:"0"}),c.a.createElement(y,{onClick:this.handleClick,disabled:r,label:"=",size:"2",value:"equal"})))}}]),t}(c.a.Component),x=n(1166),N=n(1167),S=n(1165),D=function(){return c.a.createElement("div",null,c.a.createElement("h2",null,"Page not found"))},T=function(e){function t(e){var n;return Object(h.a)(this,t),(n=Object(p.a)(this,Object(m.a)(t).call(this,e))).state={value:""},n}return Object(v.a)(t,e),Object(b.a)(t,[{key:"render",value:function(){var e=this;return c.a.createElement("div",null,c.a.createElement("label",null,"Task to do:",c.a.createElement("input",{type:"text",value:this.state.value,onChange:function(t){return e.setState({value:t.target.value})}})),c.a.createElement("button",{className:"btn btn-danger btn-sm m-2",type:"submit",onClick:function(){e.props.handleSubmit(e.state.value),e.setState({value:""})}},"Submit"))}}]),t}(a.Component),B=n(92),A="ADD_TODO",I="REMOVE_TODO",P="INITIALIZE_TODOS",R="LOAD_INITIALIZED_TODOS";function _(){return{type:P}}function F(e){return{type:R,todos:e}}var z=function(e){function t(e){var n;return Object(h.a)(this,t),(n=Object(p.a)(this,Object(m.a)(t).call(this,e))).handleToDoAdd=function(e){n.props.addToDo(e)},n.state={todos:["Work","Have fun"]},n}return Object(v.a)(t,e),Object(b.a)(t,[{key:"componentDidMount",value:function(){this.props.initializeToDos()}},{key:"render",value:function(){return c.a.createElement("div",{style:{justifyContent:"center",alignItems:"center"}},c.a.createElement(T,{handleSubmit:this.handleToDoAdd}),c.a.createElement("hr",null),this.props.todos.map(function(e,t){return c.a.createElement("div",{key:t},e.task)}))}}]),t}(a.Component);var M=Object(B.b)(function(e){return{todos:e.todos}},{initializeToDos:_,addToDo:function(e){return{type:A,task:e}}})(z),W="FETCH_NEWS",H="UPDATE_NEWS",L="UPDATE_FAIL_FETCH",U="FETCH_NEWS_BY_SOURCE",K="TRANSLATE";function J(e){return{type:H,news:e}}function Z(e){return{type:L,message:e}}var q=[["ABC","abc-news"],["BBC","bbc-news"],["Bloomberg","bloomberg"],["CNN","cnn"],["Fortune","fortune"],["Google News","google-news"]],G=function(e){function t(){var e,n;Object(h.a)(this,t);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(n=Object(p.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(c)))).handleUpdate=function(){n.props.fetchNews()},n.handleFetchBySource=function(e){n.props.fetchNewsBySource(e)},n.handleTranslate=function(){n.props.translate()},n.handleMouseOver=function(e){alert(e)},n}return Object(v.a)(t,e),Object(b.a)(t,[{key:"callNewsAwait",value:function(){var e=Object(i.a)(l.a.mark(function e(){var t,n;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,"https://newsapi.org/v2/top-headlines?country=us&apiKey=df47cddd4545452cb04ab5e1d030af8d",e.next=4,fetch("https://newsapi.org/v2/top-headlines?country=us&apiKey=df47cddd4545452cb04ab5e1d030af8d");case 4:if((t=e.sent).ok){e.next=7;break}throw Error(t.statusText);case 7:return e.next=9,t.json();case 9:n=e.sent,console.log({news:n.articles}),this.props.updateNews(n.articles),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(0),console.log("Error occurs!",this.state);case 17:case"end":return e.stop()}},e,this,[[0,14]])}));return function(){return e.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){this.props.news.length>0?console.log("Get data from global store"):this.callNewsAwait()}},{key:"render",value:function(){var e=this;return console.log({newsResources:q}),c.a.createElement("div",null,c.a.createElement("div",null,c.a.createElement("button",{className:"float-right",onClick:function(){return e.handleFetchBySource("")}},"ABC"),c.a.createElement("button",{className:"float-right",onClick:function(){return e.handleFetchBySource("CNN")}},"CNN"),c.a.createElement("button",{className:"float-right",onClick:function(){return e.handleFetchBySource("bbc-news")}},"BBC"),c.a.createElement("button",{className:"float-right",onClick:function(){return e.handleFetchBySource("bbc-sport")}},"BBC SPORT"),c.a.createElement("button",{className:"float-right",onClick:function(){return e.handleFetchBySource("espn")}},"ESPN"),c.a.createElement("hr",null)),c.a.createElement("ul",null,this.props.news.map(function(e,t){var n=e.description;return c.a.createElement("div",null,c.a.createElement("li",{key:t},c.a.createElement("a",{href:e.url},e.title)),c.a.createElement("p",null,n))})))}}]),t}(a.Component);var V=Object(B.b)(function(e){return{news:e.news}},{updateNews:J,fetchNews:function(){return{type:W}},fetchNewsBySource:function(e){return{type:U,source:e}},translate:function(){return{type:K}}})(G),X=function(e){function t(e){var n;return Object(h.a)(this,t),(n=Object(p.a)(this,Object(m.a)(t).call(this,e))).state={data:{}},console.log({props:e}),n.state.data=e.data,console.log(n.state.data),n}return Object(v.a)(t,e),Object(b.a)(t,[{key:"componentDidMount",value:function(e){console.log({props:e})}},{key:"render",value:function(){return c.a.createElement("div",null)}}]),t}(a.Component),Y=n(247);a.Component,Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(855);var $=n(113),Q=n(411),ee=n(41),te="https://newsapi.org/v2/top-headlines?country=us&apiKey=df47cddd4545452cb04ab5e1d030af8d",ne="https://newsapi.org/v2/top-headlines?apiKey=df47cddd4545452cb04ab5e1d030af8d",ae="http://localhost:3001/todos",ce=l.a.mark(ue),re=l.a.mark(de),oe=l.a.mark(he),se=l.a.mark(be),le=l.a.mark(pe),ie=l.a.mark(me);function ue(){var e,t;return l.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,Object(ee.a)(fetch,te);case 3:return e=n.sent,n.next=6,e.json();case 6:return t=n.sent,n.next=9,Object(ee.b)(J(Object(d.a)(t.articles)));case 9:n.next=15;break;case 11:return n.prev=11,n.t0=n.catch(0),n.next=15,Object(ee.b)(Z(n.t0.message));case 15:case"end":return n.stop()}},ce,this,[[0,11]])}function de(e){var t,n,a,c,r,o=arguments;return l.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return t=o.length>1&&void 0!==o[1]?o[1]:window.fetch,s.prev=1,console.log("Saga process the action..."),console.log(e),n=e.source,a=ne+"&sources="+n,console.log({url:a}),s.next=9,Object(ee.a)(t,a);case 9:return c=s.sent,s.next=12,c.json();case 12:return r=s.sent,s.next=15,Object(ee.b)(J(Object(d.a)(r.articles)));case 15:s.next=22;break;case 17:return s.prev=17,s.t0=s.catch(1),console.log({msg:s.t0.message}),s.next=22,Object(ee.b)(Z(s.t0.message));case 22:case"end":return s.stop()}},re,this,[[1,17]])}function he(e){var t,n,a,c=arguments;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=c.length>1&&void 0!==c[1]?c[1]:window.fetch,e.prev=1,e.next=4,Object(ee.a)(t,ae);case 4:return n=e.sent,e.next=7,n.json();case 7:return a=e.sent,console.log({todos:a}),e.next=11,Object(ee.b)(F(a));case 11:e.next=17;break;case 13:return e.prev=13,e.t0=e.catch(1),e.next=17,Object(ee.b)(F([{id:5,task:"have fun"}]));case 17:case"end":return e.stop()}},oe,this,[[1,13]])}function be(){var e,t,a,c;return l.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:e=n(857),t=e.Translate,"1090443603700",a=new t({projectId:"1090443603700"}),c="Hello, world!","cn",a.translate(c,"cn").then(function(e){var t=e[0];console.log("Text: ".concat(c)),console.log("Translation: ".concat(t))}).catch(function(e){console.error("ERROR:",e)});case 6:case"end":return r.stop()}},se,this)}function pe(e){var t,n,a,c,r=arguments;return l.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return t=r.length>1&&void 0!==r[1]?r[1]:window.fetch,o.prev=1,n={method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({task:e.task})},o.next=5,Object(ee.a)(t,ae,n);case 5:return a=o.sent,o.next=8,a.json();case 8:return c=o.sent,console.log({todos:c}),o.next=12,Object(ee.b)(_());case 12:o.next=18;break;case 14:return o.prev=14,o.t0=o.catch(1),o.next=18,Object(ee.b)(F([{id:5,task:"have fun"}]));case 18:case"end":return o.stop()}},le,this,[[1,14]])}function me(){return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(ee.c)(W,ue);case 2:return e.next=4,Object(ee.c)(U,de);case 4:return e.next=6,Object(ee.c)(P,he);case 6:return e.next=8,Object(ee.c)(A,pe);case 8:return e.next=10,Object(ee.c)(K,be);case 10:case"end":return e.stop()}},ie,this)}var ve=me,fe={todos:[{task:"work",id:5}],id:0,redux:"REDUX",news:[]};var Oe=n(1164),ke=function(e){function t(){return Object(h.a)(this,t),Object(p.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(b.a)(t,[{key:"render",value:function(){return c.a.createElement(Oe.a,null,c.a.createElement("div",null,c.a.createElement(j,null),c.a.createElement("main",{className:"container"},c.a.createElement(x.a,null,c.a.createElement(N.a,{path:"/news",component:V}),c.a.createElement(N.a,{path:"/calculator",component:C}),c.a.createElement(N.a,{path:"/todos",component:M}),c.a.createElement(N.a,{path:"/counter",component:O}),c.a.createElement(S.a,{from:"/",to:"/news"})))))}}]),t}(a.Component);var je=Object(B.b)(function(e){return{todos:e.todos}})(ke),Ee=Object(Q.a)(),we=Object($.d)(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:fe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case A:var n=Object(u.a)({},e);return n.id++,Object(u.a)({},n,{todos:Object(d.a)(n.todos).concat([{task:t.task,id:n.id}])});case I:var a=Object(u.a)({},e),c=a.todos.filter(function(e){return e.id!==t.id});return Object(u.a)({},a,{todos:c});case H:return Object(u.a)({},e,{news:t.news});case L:return Object(u.a)({},e,{message:t.message});case R:return Object(u.a)({},e,{todos:t.todos});default:return e}},Object($.a)(Ee));Ee.run(ve),o.a.render(c.a.createElement(B.a,{store:we},c.a.createElement("div",null,c.a.createElement(je,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},247:function(e,t){},251:function(e,t,n){},368:function(e,t){},412:function(e,t,n){e.exports=n(1162)},417:function(e,t,n){},421:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},869:function(e,t){},871:function(e,t){},915:function(e,t){},916:function(e,t){}},[[412,2,1]]]);
//# sourceMappingURL=main.5fa4c735.chunk.js.map