(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b8b36dc8"],{"04c4":function(e,t,i){"use strict";i.d(t,"e",(function(){return n})),i.d(t,"f",(function(){return s})),i.d(t,"d",(function(){return r})),i.d(t,"c",(function(){return c})),i.d(t,"b",(function(){return o})),i.d(t,"a",(function(){return u}));var a=i("41cb");function n(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return Object(a["e"])().get("/api/team/race/achieve/".concat(e.achieve_id,"/top100"),{params:{server:e.server,event_id:t}})}function s(e){return Object(a["e"])().get("/api/team/race/achieve/finish/process",{params:{ids:e}})}function r(e,t){return Object(a["e"])().get("/api/team/achieve/".concat(e,"/mount/top"),{params:t})}function c(e){return Object(a["e"])().get("/api/team/achieve-mix/top",{params:e})}function o(e,t){return Object(a["e"])().get("/api/team/race/events/".concat(e,"/youngster"),{params:t})}function u(e){return Object(a["a"])().get("/api/cms/team/boss_aid",{params:e})}},"13d5":function(e,t,i){"use strict";var a=i("23e7"),n=i("d58f").left,s=i("a640"),r=i("1212"),c=i("9adc"),o=!c&&r>79&&r<83,u=o||!s("reduce");a({target:"Array",proto:!0,forced:u},{reduce:function(e){var t=arguments.length;return n(this,e,t,t>1?arguments[1]:void 0)}})},"365d":function(e,t,i){"use strict";var a=i("65c2"),n={LOGO:a["__imgPath"]+"image/rank/common/logo.png",cover:function(e){return a["__imgPath"]+"image/rank/cover/".concat(e,".png")},boss:function(e){return a["__imgPath"]+"image/rank/race/".concat(e,"/boss.png")},bg:function(e){return a["__imgPath"]+"image/rank/race/".concat(e,"/bg.png")},version:function(e){return a["__imgPath"]+"image/rank/race/".concat(e,"/version.png")},logos:function(e){return a["__imgPath"]+"image/rank/logos/"+e+".png"},bossIcon:function(e){return a["__imgPath"]+"image/rank/boss/".concat(e,".png")}};t["a"]=n},"39ce":function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFgAAABYCAYAAABxlTA0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAFoGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDIgNzkuMTYwOTI0LCAyMDE3LzA3LzEzLTAxOjA2OjM5ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOCAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIwLTEwLTE0VDE1OjQ5OjUyKzA4OjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMC0xMS0yMlQxNzoyNjoyMiswODowMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyMC0xMS0yMlQxNzoyNjoyMiswODowMCIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJzUkdCIElFQzYxOTY2LTIuMSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpmMDFhNWEyOS1lNWFk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"},"3c36":function(e,t,i){"use strict";i.r(t);var a=function(){var e=this,t=e._self._c;return t("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"m-rank-rank",attrs:{"element-loading-text":"加载中...","element-loading-spinner":"el-icon-loading","element-loading-background":"rgba(0, 0, 0, 0.3)"}},[t("el-row",{staticClass:"m-rank-boss m-rank-filter",attrs:{gutter:20,type:"flex"}},e._l(e.bossList,(function(i,a){return t("el-col",{key:a,attrs:{span:e.span}},[t("li",{staticClass:"u-boss",class:{on:a==e.achieve_id||i==e.bossName},on:{click:function(t){return e.changeBoss(a)}}},[t("img",{staticClass:"u-boss-icon",attrs:{src:e.bossIcon(a),onerror:e.defaultBossIcon}}),t("span",{staticClass:"u-boss-name"},[e._v(e._s(i))]),t("span",{staticClass:"u-boss-per",class:e.getProcessCls(e.getTotal(a))},[e._v("("+e._s(e.getTotal(a))+"/100)")])])])})),1),t("div",{staticClass:"m-rank-server m-rank-filter"},[t("ul",[e.preBossData&&e.preBossData.length?t("el-checkbox",{staticClass:"u-pre",attrs:{border:"",size:"mini",value:e.isPre},on:{change:e.onPreChange}},[e._v("预赛")]):e._e(),t("li",{class:{on:!e.server},on:{click:function(t){return e.changeServer("")}}},[e._v("全区全服")]),e._l(e.servers,(function(i){return t("li",{key:i,class:{on:e.server==i},on:{click:function(t){return e.changeServer(i)}}},[e._v(" "+e._s(i)+" ")])}))],2)]),t("div",{staticClass:"m-rank-top100"},[e.data&&e.data.length?t("div",{staticClass:"m-rank-top100-list",class:{"not-last":!e.isLastBoss}},e._l(e.data,(function(i,a){return t("rank-item",{key:a,attrs:{i:a,item:i,newbie:e.newbie,isLastBoss:e.isLastBoss}})})),1):t("div",{staticClass:"m-rank-top100-null"},[t("img",{staticClass:"m-rank-null",attrs:{src:"".concat(e.imgPath,"image/rank/common/null.png")}})])])],1)},n=[],s=i("c7eb"),r=i("1da1"),c=i("5530"),o=i("2909"),u=(i("99af"),i("4de4"),i("7db0"),i("a15b"),i("d81d"),i("14d9"),i("13d5"),i("b0c0"),i("dca8"),i("b64b"),i("d3b7"),i("0643"),i("2382"),i("fffc"),i("4e3e"),i("a573"),i("9d4a"),i("159b"),i("65c2")),l=i("60d7"),d=i("2ef0"),h=i.n(d),m=i("04c4"),v=i("365d"),g=i("feff"),f={components:{"rank-item":g["a"]},props:[],data:function(){return{loading:!1,servers:["跨服"].concat(Object(o["a"])(l)),achieve_id:"",server:"",total:"",origin_data:[],imgPath:u["__imgPath"],isPre:!1,preBossData:[],newbie:{keep_10:[],youngster_list:[],king_back:[]}}},computed:{id:function(){return this.$store.state.id},race:function(){return this.$store.state.race},achieves:function(){return this.$store.state.achieves||[]},bossList:function(){var e={};return this.achieves.forEach((function(t){e[t.achievement_id]=t.name})),e},bossName:function(){var e=this.achieves.concat(this.preBossData),t=e.reduce((function(e,t){return e[t.achievement_id]=t.name,e}),{});return t[this.achieve_id]},aids:function(){var e,t=this.isPre?null===(e=this.preBossData)||void 0===e?void 0:e.reduce((function(e,t){return e[t.achievement_id]=t.name,e}),{}):this.bossList;return Object.keys(t).join(",")},span:function(){return~~(24/Object.keys(this.bossList).length)},data:function(){var e=this.origin_data||[];return e=e.filter((function(e){return!e.superstar})),e.forEach((function(t,i){var a=t.leader,n=t.teammate.split(";"),s=[],r="";n.forEach((function(e,t){var i=e.split(",");i[0]!=a?s.push(i):r=i})),e[i]["members"]=s,e[i]["leaders"]=r})),e},params:function(){return{server:this.server,achieve_id:~~this.achieve_id}},defaultBossIcon:function(e){return"this.src='".concat(this.bossIcon("0"),"';this.onerror=null")},isLastBoss:function(){var e;return this.achieve_id==(null===(e=this.achieves[this.achieves.length-1])||void 0===e?void 0:e.achievement_id)}},methods:{changeBoss:function(e){this.server="";var t=this.bossList[e],i=this.isPre?this.preBossData.find((function(e){return e.name==t})).achievement_id:e;this.achieve_id=i,this.$router.push({query:{aid:i}})},changeServer:function(e){this.server=e,this.$router.push({query:Object(c["a"])(Object(c["a"])({},this.$route.query),{},{server:e})})},loadData:function(){var e=Object(r["a"])(Object(s["a"])().mark((function e(){var t=this;return Object(s["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(this.achieve_id){e.next=2;break}return e.abrupt("return");case 2:return this.loading=!0,e.next=5,this.loadNewbie();case 5:return e.next=7,Object(m["e"])(this.params,this.id).then(function(){var e=Object(r["a"])(Object(s["a"])().mark((function e(i){return Object(s["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.origin_data=i.data.data||[],t.origin_data=Object.freeze(t.origin_data);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).finally((function(){t.loading=!1}));case 7:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),loadNewbie:function(){var e=this;Object(m["b"])(this.id).then((function(t){e.newbie=t.data.data}))},getProcessCls:function(e){return e=~~e,e<100?"isLess":"isDanger"},bossIcon:function(e){return v["a"].bossIcon(e)},loadPreBossAid:function(){var e=this;Object(m["a"])({rank_id:this.id,is_rank_boss:2,_no_page:1}).then((function(t){var i;e.preBossData=null===(i=t.data.data)||void 0===i?void 0:i.map((function(e){return{achievement_id:e.aid,event_id:e.rank_id,name:e.name}}))}))},getTotal:function(e){var t,i,a=this.bossList[e],n=this.isPre?null===(t=this.preBossData)||void 0===t||null===(i=t.find((function(e){return e.name==a})))||void 0===i?void 0:i.achievement_id:e;return this.total[n]>100?100:this.total[n]},onPreChange:function(){var e,t;if(null!==(e=this.preBossData)&&void 0!==e&&e.length){this.isPre=!this.isPre;var i={is_pre:this.isPre?1:0};null!==(t=this.$route.query)&&void 0!==t&&t.server&&(i.server=this.$route.query.server),this.$router.push({query:i})}}},watch:{race:{deep:!0,immediate:!0,handler:function(e){if(e&&(null===e||void 0===e||!e.status)){var t=this.achieves[this.achieves.length-1].achievement_id;this.$router.push({query:{aid:t}})}}},id:{handler:function(e){e&&this.loadData()}},params:{deep:!0,handler:function(e){this.loadData()}},"$route.query":{handler:function(e){e.aid&&(this.achieve_id=e.aid),e.server&&(this.server=e.server),e.is_pre&&(this.isPre=!!~~e.is_pre),e.server&&(this.server=e.server)},immediate:!0},achieves:{immediate:!0,handler:function(){var e;~~this.$route.query.aid?this.achieve_id=this.$route.query.aid:this.achieve_id=this.isPre?null===(e=this.preBossData[0])||void 0===e?void 0:e.achievement_id:h.a.first(Object.keys(this.bossList))}},aids:{immediate:!0,handler:function(e){var t=this;e&&Object(m["f"])(e).then((function(e){t.total=e.data.data}))}},isPre:function(e){this.achieve_id=e?this.preBossData[0].achievement_id:this.achieves[0].achievement_id}},beforeRouteEnter:function(e,t,i){i((function(e){e.loadPreBossAid()}))}},b=f,p=(i("f880"),i("2877")),A=Object(p["a"])(b,a,n,!1,null,null,null);t["default"]=A.exports},"60d7":function(e){e.exports=JSON.parse('["蝶恋花","龙争虎斗","长安城","幽月轮","斗转星移","剑胆琴心","乾坤一掷","唯我独尊","梦江南","绝代天骄","天鹅坪","破阵子","飞龙在天","青梅煮酒","眉间雪","有人赴约","万象长安","山海相逢"]')},9485:function(e,t,i){"use strict";var a=i("23e7"),n=i("2266"),s=i("59ed"),r=i("825a"),c=i("46c4"),o=TypeError;a({target:"Iterator",proto:!0,real:!0},{reduce:function(e){r(this),s(e);var t=c(this),i=arguments.length<2,a=i?void 0:arguments[1],u=0;if(n(t,(function(t){i?(i=!1,a=t):a=e(a,t,u),u++}),{IS_RECORD:!0}),i)throw new o("Reduce of empty iterator with no initial value");return a}})},"9d4a":function(e,t,i){"use strict";i("9485")},d58f:function(e,t,i){"use strict";var a=i("59ed"),n=i("7b0b"),s=i("44ad"),r=i("07fa"),c=TypeError,o="Reduce of empty array with no initial value",u=function(e){return function(t,i,u,l){var d=n(t),h=s(d),m=r(d);if(a(i),0===m&&u<2)throw new c(o);var v=e?m-1:0,g=e?-1:1;if(u<2)while(1){if(v in h){l=h[v],v+=g;break}if(v+=g,e?v<0:m<=v)throw new c(o)}for(;e?v>=0:m>v;v+=g)v in h&&(l=i(l,h[v],v,d));return l}};e.exports={left:u(!1),right:u(!0)}},dca8:function(e,t,i){"use strict";var a=i("23e7"),n=i("bb2f"),s=i("d039"),r=i("861d"),c=i("f183").onFreeze,o=Object.freeze,u=s((function(){o(1)}));a({target:"Object",stat:!0,forced:u,sham:!n},{freeze:function(e){return o&&r(e)?o(c(e)):e}})},e4ca:function(e,t,i){},f880:function(e,t,i){"use strict";i("e4ca")},feff:function(e,t,i){"use strict";i("fb6a");var a=function(){var e=this,t=e._self._c;return t("div",{staticClass:"m-rank-top100-item",class:e.showIndex?"is-No"+(e.i+1):""},[e.showIndex?t("div",{staticClass:"u-ranking",class:"is-Top"+(e.i+1),on:{click:function(t){return e.copy(e.item.team_name)}}},[t("i",{staticClass:"u-pic"},[e.i<3?t("img",{attrs:{loading:"lazy",src:e.getRankImg(e.i+1)}}):e._e()]),t("span",[e._v(e._s(e.i+1))])]):e._e(),t("a",{staticClass:"u-logo",attrs:{href:e.teamLink(e.item.team_id),target:"_blank"}},[e.item.team_logo?t("el-image",{attrs:{src:e.i<3?e.teamLogo(e.item.team_logo,!0):e.teamLogo(e.item.team_logo,!1),fit:"fill"}}):t("div",{staticClass:"el-image"},[t("img",{attrs:{loading:"lazy",src:i("39ce")}})])],1),t("div",{staticClass:"u-title"},[e.item.team_id?t("a",{staticClass:"u-teamname",attrs:{href:e.teamLink(e.item.team_id),target:"_blank"}},[t("i",{staticClass:"el-icon-link"}),e._v(" "+e._s(e.item.team_name&&e.item.team_name.slice(0,6))+" ")]):t("span",{staticClass:"u-teamname u-teamname-null"},[e._v("未知")]),t("span",{staticClass:"u-server"},[e._v(e._s(e.item.team_server))]),e.i>2&&e.isLastBoss?t("span",{staticClass:"u-youngster"},[e.isNewbie?t("img",{staticClass:"u-chanlian",attrs:{src:e.chanlian,alt:""}}):e._e(),e.isYoungster?t("img",{staticClass:"u-heima",attrs:{src:e.heima,alt:""}}):e._e(),e.isKingBack?t("img",{staticClass:"u-wangzhe",attrs:{src:e.wangzhe,alt:""}}):e._e()]):e._e()]),t("div",{staticClass:"u-time",class:{"u-youngster-time":(e.isNewbie||e.isYoungster||e.isKingBack)&&e.isLastBoss||!e.isLastBoss},on:{click:function(t){e.copy(e.showTime(e.item.created))}}},[t("span",{staticClass:"u-time-fight"},[e._v(" 用时 : "),t("b",[e._v(e._s(e.showTC(e.item.fight_time)))])]),t("span",{staticClass:"u-time-finish"},[e._v(e._s(e.showTime(e.item.created)))])]),e.i<3&&e.isLastBoss?t("div",{staticClass:"u-youngster"},[e.isNewbie?t("img",{staticClass:"u-chanlian",attrs:{src:e.chanlian,alt:""}}):e._e(),e.isYoungster?t("img",{staticClass:"u-heima",attrs:{src:e.heima,alt:""}}):e._e(),e.isKingBack?t("img",{staticClass:"u-wangzhe",attrs:{src:e.wangzhe,alt:""}}):e._e()]):e._e(),e.item.leaders?t("div",{staticClass:"u-leader"},[t("span",{staticClass:"u-leader-label"},[e._v("团长 :")]),t("img",{staticClass:"u-mount",attrs:{loading:"lazy",src:e.showLeaderMount(e.item.leaders[1])}}),t("span",{staticClass:"u-username"},[e._v(" "+e._s(e.showLeaderName(e.item.leaders[0]))+" ")])]):e._e(),t("el-row",{staticClass:"u-teammates",attrs:{gutter:10}},e._l(e.item.members,(function(i,a){return t("el-col",{key:a,staticClass:"u-member",attrs:{span:e.i<3?8:e.span}},[t("div",{staticClass:"u-member-content"},[t("img",{staticClass:"u-mount",attrs:{loading:"lazy",src:e.showMemberMount(i)}}),t("span",{staticClass:"u-username",attrs:{title:e.showMemberName(i)}},[e._v(e._s(e.showMemberName(i)))])])])})),1)],1)},n=[],s=(i("caad"),i("d81d"),i("a9e3"),i("2532"),i("a573"),i("65c2")),r=i("85e4"),c=i("e4f1"),o={name:"rank-item",props:{i:{type:[String,Number],default:0},item:{type:Object,default:function(){}},showIndex:{type:Boolean,default:!0},span:{type:Number,default:4},isLastBoss:{type:Boolean,default:!1},newbie:{type:Object,default:function(){}}},data:function(){return{chanlian:s["__cdn"]+"design/event/rank/chanlian.webp",heima:s["__cdn"]+"design/event/rank/heima.webp",wangzhe:s["__cdn"]+"design/event/rank/wangzhe.webp"}},computed:{isNewbie:function(){var e,t,i=(null===(e=this.newbie)||void 0===e||null===(t=e.keep_10)||void 0===t?void 0:t.map((function(e){return e.ID})))||[];return null===i||void 0===i?void 0:i.includes(this.item.team_id)},isYoungster:function(){var e,t,i=(null===(e=this.newbie)||void 0===e||null===(t=e.youngster_list)||void 0===t?void 0:t.map((function(e){return e.ID})))||[];return null===i||void 0===i?void 0:i.includes(this.item.team_id)},isKingBack:function(){var e,t,i=(null===(e=this.newbie)||void 0===e||null===(t=e.king_back)||void 0===t?void 0:t.map((function(e){return e.ID})))||[];return null===i||void 0===i?void 0:i.includes(this.item.team_id)}},methods:{getRankImg:function(e){return s["__imgPath"]+"image/rank/common/rank_"+e+".png"},teamLogo:function(e,t){return e?t?Object(r["h"])(e,240,!0):Object(r["h"])(e,176,!0):""},teamLink:function(e){return Object(r["e"])("org",e)},showTime:function(e){return Object(c["c"])(new Date(1e3*e))},showTC:function(e){var t=e/1e3;return~~(t/60)+"分"+~~(t%60)+"秒"},showMemberMount:function(e){var t=e&&e[1]||0,i=s["__imgPath"]+"image/xf/"+t+".png";return i},showMemberName:function(e){return e&&e[0].slice(0,12)||"未知"},showLeaderMount:function(e){var t=s["__imgPath"]+"image/xf/"+e+".png";return t},showLeaderName:function(e){return e&&e.slice(0,12)||"未知"},copy:function(e){navigator.clipboard.writeText(e)}}},u=o,l=i("2877"),d=Object(l["a"])(u,a,n,!1,null,null,null);t["a"]=d.exports}}]);
//# sourceMappingURL=chunk-b8b36dc8.fcb551d5.js.map