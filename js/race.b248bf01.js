(function(t){function e(e){for(var r,a,i=e[0],c=e[1],u=e[2],d=0,l=[];d<i.length;d++)a=i[d],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&l.push(o[a][0]),o[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);f&&f(e);while(l.length)l.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],r=!0,a=1;a<n.length;a++){var i=n[a];0!==o[i]&&(r=!1)}r&&(s.splice(e--,1),t=c(c.s=n[0]))}return t}var r={},a={race:0},o={race:0},s=[];function i(t){return c.p+"js/"+({}[t]||t)+"."+{"chunk-0204c4ff":"91dd9794","chunk-25312de3":"066a928c","chunk-29e84e6f":"9cef79f7","chunk-2d25d9b5":"6d5aa013","chunk-47bda914":"835a42ab","chunk-913283fa":"aac4597b"}[t]+".js"}function c(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(t){var e=[],n={"chunk-0204c4ff":1,"chunk-25312de3":1,"chunk-29e84e6f":1,"chunk-2d25d9b5":1,"chunk-47bda914":1,"chunk-913283fa":1};a[t]?e.push(a[t]):0!==a[t]&&n[t]&&e.push(a[t]=new Promise((function(e,n){for(var r="css/"+({}[t]||t)+"."+{"chunk-0204c4ff":"a00d38cf","chunk-25312de3":"a00d38cf","chunk-29e84e6f":"20dd06a4","chunk-2d25d9b5":"20dd06a4","chunk-47bda914":"a00d38cf","chunk-913283fa":"a00d38cf"}[t]+".css",o=c.p+r,s=document.getElementsByTagName("link"),i=0;i<s.length;i++){var u=s[i],d=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(d===r||d===o))return e()}var l=document.getElementsByTagName("style");for(i=0;i<l.length;i++){u=l[i],d=u.getAttribute("data-href");if(d===r||d===o)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var r=e&&e.target&&e.target.src||o,s=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=r,delete a[t],f.parentNode.removeChild(f),n(s)},f.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){a[t]=0})));var r=o[t];if(0!==r)if(r)e.push(r[2]);else{var s=new Promise((function(e,n){r=o[t]=[e,n]}));e.push(r[2]=s);var u,d=document.createElement("script");d.charset="utf-8",d.timeout=120,c.nc&&d.setAttribute("nonce",c.nc),d.src=i(t);var l=new Error;u=function(e){d.onerror=d.onload=null,clearTimeout(f);var n=o[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;l.message="Loading chunk "+t+" failed.\n("+r+": "+a+")",l.name="ChunkLoadError",l.type=r,l.request=a,n[1](l)}o[t]=void 0}};var f=setTimeout((function(){u({type:"timeout",target:d})}),12e4);d.onerror=d.onload=u,document.head.appendChild(d)}return Promise.all(e)},c.m=t,c.c=r,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)c.d(n,r,function(e){return t[e]}.bind(null,r));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="https://console.cnyixun.com/static/rank/",c.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],d=u.push.bind(u);u.push=e,u=u.slice();for(var l=0;l<u.length;l++)e(u[l]);var f=d;s.push([2,"chunk-vendors"]),n()})({"02ab":function(t,e,n){},"0ec3":function(t,e,n){"use strict";var r=n("f43e"),a=n.n(r);a.a},2:function(t,e,n){t.exports=n("7318")},2777:function(t,e,n){"use strict";n.d(e,"a",(function(){return l}));n("99af"),n("d3b7");var r=n("bc3a"),a=n.n(r),o=n("64c7"),s=n("2b0e"),i=n("5c96");s["default"].prototype.$notify=i["Notification"],s["default"].prototype.$message=i["Message"];var c=new s["default"],u=a.a.create({withCredentials:!0});function d(t){t["interceptors"]["response"].use((function(t){return t}),(function(t){return t.response&&t.response.data?c.$message.error("".concat(t.response.data.msg)):c.$message.error("网络请求异常"),console.log(t),Promise.reject(t)}))}d(a.a),d(u);var l=a.a.create({withCredentials:!0,baseURL:o["__next"]});function f(t){t["interceptors"]["response"].use((function(t){return t.data.code?(c.$message.error("[".concat(t.data.code,"]").concat(t.data.msg)),Promise.reject(t)):t}),(function(t){return t.response&&t.response.data?c.$message.error("".concat(t.response.data.msg)):c.$message.error("网络请求异常"),console.log(t),Promise.reject(t)}))}f(l)},"35cb":function(t,e,n){"use strict";var r=n("02ab"),a=n.n(r);a.a},"365d":function(t,e,n){"use strict";var r=n("64c7"),a={LOGO:r["__imgPath"]+"image/rank/common/logo.png",cover:function(t){return r["__imgPath"]+"image/rank/cover/"+t+".png"},boss:function(t){return r["__imgPath"]+"image/rank/boss/"+t+".png"},version:function(t){return r["__imgPath"]+"image/rank/version/"+t+".png"}};e["a"]=a},7318:function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=n("5c96"),o=n.n(a),s=n("6a69"),i=(n("6b30"),n("c5b4"),n("d3b7"),n("8c4f")),c=function(){return n.e("chunk-2d25d9b5").then(n.bind(null,"2469"))},u=function(){return n.e("chunk-25312de3").then(n.bind(null,"789b"))},d=function(){return n.e("chunk-0204c4ff").then(n.bind(null,"29c8"))},l=function(){return n.e("chunk-47bda914").then(n.bind(null,"81a8"))},f=function(){return n.e("chunk-29e84e6f").then(n.bind(null,"aec9"))},p=function(){return n.e("chunk-913283fa").then(n.bind(null,"7ab3"))};r["default"].use(i["a"]);var h=[{name:"index",path:"/:id/",component:c},{name:"info",path:"/:id/info",component:c},{name:"lucky",path:"/:id/lucky",component:f},{name:"rank",path:"/:id/rank",component:u},{name:"vote",path:"/:id/vote",component:d},{name:"video",path:"/:id/video",component:l},{name:"stat",path:"/:id/stat",component:p}],m=new i["a"]({routes:h}),b=m,v=n("2f62");r["default"].use(v["a"]);var g={state:{id:"",race:""},mutations:{},getters:{},actions:{},modules:{}},k=new v["a"].Store(g),_=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"m-rank-container",class:"m-rank-event-"+t.id,attrs:{id:"app"}},[n("Header"),t.id?n("div",{staticClass:"m-rank-race"},[n("div",{staticClass:"m-rank-header"},[n("race-header",{attrs:{data:t.data}})],1),n("div",{staticClass:"m-rank-content"},[n("router-view")],1)]):t._e(),n("Footer")],1)},y=[],C=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"m-race-header"},[r("div",{staticClass:"u-vision"},[r("img",{staticClass:"u-boss",attrs:{src:t.boss_img_url,alt:""}}),r("img",{staticClass:"u-logo",attrs:{src:t.LOGO}}),r("img",{staticClass:"u-version",attrs:{src:t.version_img_url,alt:""}})]),r("div",{staticClass:"u-sponsors"},[r("span",{staticClass:"u-sponsors-label"},[t._v("活动赞助商：")]),t.sponsors.length?r("ul",{staticClass:"u-sponsors-list"},t._l(t.sponsors,(function(t,e){return r("li",{key:e},[r("a",{staticClass:"logo",attrs:{href:t.link,target:"_blank"}},[r("img",{attrs:{src:t.logo}})])])})),0):t._e()]),r("race-tab",{attrs:{data:t.data}}),r("img",{staticClass:"u-qrcode",attrs:{src:n("de9c")}})],1)},O=[],w=n("365d"),j=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"m-race-tab"},t._l(t.visible_blocks,(function(e,r){return n("router-link",{key:r,staticClass:"u-item",attrs:{to:t.link(r)}},[t._v(t._s(e))])})),1)},$=[],P=(n("4160"),n("159b"),n("f358")),x={props:["data"],data:function(){return{}},computed:{id:function(){return this.$store.state.id},visible_blocks:function(){var t=this.data&&this.data.blocks||[],e={};return t.forEach((function(t){e[t]=P[t]})),e}},methods:{link:function(t){return"/"+this.id+"/"+t}},filters:{}},E=x,S=(n("bbae"),n("2877")),L=Object(S["a"])(E,j,$,!1,null,null,null),T=L.exports,A=(n("64c7"),{props:["data"],data:function(){return{LOGO:w["a"].LOGO}},computed:{id:function(){return this.$store.state.id},boss_img_url:function(){return w["a"].boss(this.id)},version_img_url:function(){return w["a"].version(this.id)},sponsors:function(){return this.data&&this.data.sponsors||[]}},methods:{},mounted:function(){},components:{"race-tab":T}}),N=A,M=(n("0ec3"),Object(S["a"])(N,C,O,!1,null,null,null)),q=M.exports,G=n("d087"),B={name:"App",props:[],data:function(){return{data:""}},computed:{id:function(){return this.$store.state.id}},methods:{init:function(t){var e=this;Object(G["a"])(t||this.id).then((function(t){e.data=t.data.data,e.$store.state.race=t.data.data}))}},created:function(){},mounted:function(){this.$store.state.id=this.$route.params.id},watch:{"$route.params.id":function(t){this.$store.state.id=t,this.init(t)}},components:{"race-header":q}},J=B,D=(n("35cb"),Object(S["a"])(J,_,y,!1,null,null,null)),F=D.exports;r["default"].config.productionTip=!1,r["default"].use(o.a),r["default"].use(s["a"]),new r["default"]({router:b,store:k,render:function(t){return t(F)}}).$mount("#app")},8922:function(t,e,n){},bbae:function(t,e,n){"use strict";var r=n("8922"),a=n.n(r);a.a},d087:function(t,e,n){"use strict";n.d(e,"d",(function(){return a})),n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return s})),n.d(e,"c",(function(){return i}));var r=n("2777");function a(t){return r["a"].post("team/rank/events",t)}function o(t){return r["a"].get("team/rank/events/"+t)}function s(t){return r["a"].get("team/rank/events",{params:t})}function i(t){return r["a"].post("team/rank/join",t)}},de9c:function(t,e,n){t.exports=n.p+"img/boxqrcode.be7b9e09.png"},f358:function(t){t.exports=JSON.parse('{"info":"活动介绍","lucky":"众筹奖池","rank":"排行榜","vote":"人气投票","video":"直播视频","stat":"统计分析"}')},f43e:function(t,e,n){}});
//# sourceMappingURL=race.b248bf01.js.map