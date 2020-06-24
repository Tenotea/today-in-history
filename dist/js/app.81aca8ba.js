(function(t){function e(e){for(var a,i,s=e[0],c=e[1],u=e[2],l=0,f=[];l<s.length;l++)i=s[l],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&f.push(o[i][0]),o[i]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);p&&p(e);while(f.length)f.shift()();return r.push.apply(r,u||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],a=!0,s=1;s<n.length;s++){var c=n[s];0!==o[c]&&(a=!1)}a&&(r.splice(e--,1),t=i(i.s=n[0]))}return t}var a={},o={app:0},r=[];function i(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=a,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(n,a,function(e){return t[e]}.bind(null,a));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var u=0;u<s.length;u++)e(s[u]);var p=c;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0238":function(t,e,n){"use strict";var a=n("88a9"),o=n.n(a);o.a},"137e":function(t,e,n){},"22cc":function(t,e,n){"use strict";var a=n("137e"),o=n.n(a);o.a},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},r=[],i=(n("5c0b"),n("2877")),s={},c=Object(i["a"])(s,o,r,!1,null,null,null),u=c.exports,p=n("8c4f"),l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("HistoricEvent")],1)},f=[],d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"main"},[n("h1",{staticClass:"title"},[t._v(" Today In History! "),n("p",[t._v("Today's Date: "+t._s(t.todaysDate.fullDate)+". ")])]),n("p",{staticClass:"happening"},[t._v(" "+t._s(t.historicEvent.text)+" "),n("span",{staticClass:"date"},[t._v(" -"+t._s(t.todaysDate.justMonth)+" "+t._s(t.historicEvent.year)+" ")])]),n("button",{class:t.isLoading+" refresh",on:{click:function(e){return t.refreshHappening()}}},[n("span",{staticClass:"text"},[t._v(" "+t._s(t.buttonStatus?t.buttonStatus:"More Happenings")+" ")]),t._v(" "),n("span",{staticClass:"spinner"})]),t._m(0)])},h=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",{staticClass:"credits"},[t._v(" A vue.js progressive web app by Adelakun Emmanuel. Hosted on "),n("a",{attrs:{href:"https://www.netlify.app"}},[t._v(" Netlify. ")]),t._v(" "),n("br"),t._v(" View source code on "),n("a",{attrs:{href:"https://github.com/Tenotea/today-in-history"}},[t._v(" GitHub. ")])])}],g=(n("a15b"),n("ac1f"),n("1276"),n("5530")),v=n("2f62"),b={name:"HistoricEvent",data:function(){return{isLoading:"",buttonStatus:""}},created:function(){var t=this;this.isLoading="loading",this.getAnHappening().then((function(e){t.setNewHappening(e.data),t.isLoading=""})).catch((function(e){t.buttonStatus=e,t.isLoading="error"}))},methods:Object(g["a"])(Object(g["a"])(Object(g["a"])({},Object(v["b"])(["getAnHappening"])),Object(v["c"])(["setNewHappening"])),{},{refreshHappening:function(){var t=this;this.isLoading="loading",this.getAnHappening().then((function(e){t.setNewHappening(e.data),t.isLoading=""})).catch((function(e){t.buttonStatus=e,t.isLoading="error"}))}}),computed:{todaysDate:function(){var t=new Date(Date.now()),e=t.toDateString().split(" "),n=t.toDateString().split(" ").length-2;e[n]=e[n]+",";var a=e[1];return{fullDate:e.join(" "),justMonth:a+" "+e[2]}},historicEvent:function(){return this.$store.state.happening}}},m=b,y=(n("0238"),Object(i["a"])(m,d,h,!1,null,"299483a2",null)),_=y.exports,w={name:"Home",components:{HistoricEvent:_}},j=w,O=Object(i["a"])(j,l,f,!1,null,null,null),H=O.exports,S=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"canvas"}},[n("h1",{staticClass:"title"},[t._v(" PAGE NOT FOUND ")]),n("p",{staticClass:"caption"},[t._v(" Sorry, this site has only one page!")]),n("router-link",{attrs:{to:"/"}},[n("button",{staticClass:"redirect"},[t._v(" Check out more happenings ")])])],1)},E=[],x={},D=x,k=(n("22cc"),Object(i["a"])(D,S,E,!1,null,"2a9db9cc",null)),C=k.exports;a["a"].use(p["a"]);var A=[{path:"/",name:"Home",component:H},{path:"**",name:"404",component:C}],N=new p["a"]({mode:"history",base:"/",routes:A}),L=N,M=(n("99af"),n("bc3a")),P=n.n(M);a["a"].use(v["a"]);var T=new v["a"].Store({state:{happening:{}},mutations:{setNewHappening:function(t,e){t.happening=e}},actions:{getAnHappening:function(t){var e=new Date(Date.now()),n={month:e.getMonth()+1,day:e.getDate()};return P()({method:"GET",url:"https://numbersapi.p.rapidapi.com/".concat(n.month,"/").concat(n.day,"/date"),headers:{"content-type":"application/octet-stream","x-rapidapi-host":"numbersapi.p.rapidapi.com","x-rapidapi-key":"81c659109dmshadb56c0ea289726p179823jsn96f706f9ac31",useQueryString:!0},params:{fragment:!1,json:!0}})}},modules:{}}),$=n("9483");Object($["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}}),a["a"].config.productionTip=!1,new a["a"]({router:L,store:T,render:function(t){return t(u)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";var a=n("9c0c"),o=n.n(a);o.a},"88a9":function(t,e,n){},"9c0c":function(t,e,n){}});
//# sourceMappingURL=app.81aca8ba.js.map