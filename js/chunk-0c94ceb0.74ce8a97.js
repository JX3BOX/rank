(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0c94ceb0"],{2526:function(t,s,a){"use strict";a.r(s);a("b0c0");var i=function(){var t=this,s=t._self._c;return s("div",{staticClass:"m-awards"},[t._m(0),t._m(1),t._l(t.list,(function(a,i){return s("div",{key:i,staticClass:"m-awards-list"},[s("div",{staticClass:"m-awards-td"},[s("div",{staticClass:"u-number"},[t._v(t._s(i+1))])]),a.name?[s("div",{staticClass:"m-awards-td"},[s("div",{staticClass:"u-name"},[t._v(t._s(a.name||""))])]),s("div",{staticClass:"m-awards-td"},[s("div",{staticClass:"m-break"},[t._v(t._s(a.gift||""))])]),s("div",{staticClass:"m-awards-td"},[s("div",{directives:[{name:"katex",rawName:"v-katex",value:t.options,expression:"options"}],staticClass:"m-break"},[t._v(t._s(a.target))])]),s("div",{staticClass:"m-awards-td"},[s("div",{staticClass:"u-name"},[t._v(t._s(a.prizewinner||"待定"))])]),s("div",{staticClass:"m-awards-td"},[a.name?s("div",{staticClass:"u-btn",class:!a.remark&&"is-disabled"}):t._e()])]:s("div",{staticClass:"m-awards-td u-no-data"},[t._v("虚位以待")])],2)}))],2)},r=[function(){var t=this,s=t._self._c;return s("div",{staticClass:"m-top"},[s("div",{staticClass:"u-left"},[s("div",[t._v("可以由玩家个人、团队或其它组织形式提交奖项设立申请，奖品由玩家提供。")]),s("div",[t._v("每届共接受100个奖项设立，可由玩家自定义奖项授予范围。")]),s("div",[t._v("奖品包括：现金、实物和虚拟三种类型。")]),s("div",[t._v(" 赛事中﹝百强榜﹞指代团队百强榜，﹝天梯榜﹞指代个人天梯榜（即通过dps排名，所有进入天梯榜的本身需属于一个参赛团队方可，但团队本身不一定进百强），如发生削弱，将会提前闭榜。 ")]),s("h2",[t._v("限制条件")]),s("span",[t._v(" ① 玩家在设立以上奖项时，需按照魔盒指定规范进行提交，如有意向但未及时提供相应资料或奖励则视为放弃 "),s("br"),t._v(" ② 每个奖项必须为不可预知的获奖目标，不能带有强指定性"),s("br"),t._v(" ③ 每个设立单位最多不能超过设立10个奖项，魔盒将根据实际情况，有权选择性接受设立的奖项 ")])]),s("div",{staticClass:"u-right"},[s("img",{attrs:{src:a("a8be")}})])])},function(){var t=this,s=t._self._c;return s("div",{staticClass:"m-awards-header"},[s("div",{staticClass:"m-awards-th"},[t._v("序号")]),s("div",{staticClass:"m-awards-th"},[t._v("出奖人")]),s("div",{staticClass:"m-awards-th"},[t._v("奖项")]),s("div",{staticClass:"m-awards-th"},[t._v("授予")]),s("div",{staticClass:"m-awards-th"},[t._v("获奖人")]),s("div",{staticClass:"m-awards-th"},[t._v("备注")])])}],e=(a("99af"),a("cb29"),a("4e82"),a("524f")),n={name:"Awards",components:{},data:function(){return{options:{delimiters:[{left:"$$",right:"$$",display:!1},{left:"$",right:"$",display:!1},{left:"\\(",right:"\\)",display:!1},{left:"\\[",right:"\\]",display:!0}]},list:[]}},methods:{getList:function(){var t=this;Object(e["a"])({orderBy:"rank"}).then((function(s){var a,i,r=null===s||void 0===s||null===(a=s.data)||void 0===a||null===(i=a.data)||void 0===i?void 0:i.list.sort((function(t,s){return~~t.order-~~s.order})),e=100-r.length;t.list=r.concat(new Array(e).fill({}))}))}},mounted:function(){this.getList()}},d=n,c=(a("9b62"),a("2877")),o=Object(c["a"])(d,i,r,!1,null,null,null);s["default"]=o.exports},"3f7e":function(t,s,a){"use strict";var i=a("b5db"),r=i.match(/firefox\/(\d+)/i);t.exports=!!r&&+r[1]},"43e1":function(t,s,a){},"4e82":function(t,s,a){"use strict";var i=a("23e7"),r=a("e330"),e=a("59ed"),n=a("7b0b"),d=a("07fa"),c=a("083a"),o=a("577e"),u=a("d039"),v=a("addb"),l=a("a640"),f=a("3f7e"),m=a("99f4"),h=a("1212"),b=a("ea83"),p=[],_=r(p.sort),w=r(p.push),C=u((function(){p.sort(void 0)})),g=u((function(){p.sort(null)})),k=l("sort"),x=!u((function(){if(h)return h<70;if(!(f&&f>3)){if(m)return!0;if(b)return b<603;var t,s,a,i,r="";for(t=65;t<76;t++){switch(s=String.fromCharCode(t),t){case 66:case 69:case 70:case 72:a=3;break;case 68:case 71:a=4;break;default:a=2}for(i=0;i<47;i++)p.push({k:s+i,v:a})}for(p.sort((function(t,s){return s.v-t.v})),i=0;i<p.length;i++)s=p[i].k.charAt(0),r.charAt(r.length-1)!==s&&(r+=s);return"DGBEFHACIJK"!==r}})),y=C||!g||!k||!x,A=function(t){return function(s,a){return void 0===a?-1:void 0===s?1:void 0!==t?+t(s,a)||0:o(s)>o(a)?1:-1}};i({target:"Array",proto:!0,forced:y},{sort:function(t){void 0!==t&&e(t);var s=n(this);if(x)return void 0===t?_(s):_(s,t);var a,i,r=[],o=d(s);for(i=0;i<o;i++)i in s&&w(r,s[i]);v(r,A(t)),a=d(r),i=0;while(i<a)s[i]=r[i++];while(i<o)c(s,i++);return s}})},"524f":function(t,s,a){"use strict";a.d(s,"a",(function(){return r})),a.d(s,"b",(function(){return e}));var i=a("41cb");function r(t){return Object(i["e"])().get("/api/team/team-gift-record/list/public",{params:t})}function e(){return Object(i["a"])().get("/api/cms/user/my/info",{params:{__no_cache:1}})}},"81d5":function(t,s,a){"use strict";var i=a("7b0b"),r=a("23cb"),e=a("07fa");t.exports=function(t){var s=i(this),a=e(s),n=arguments.length,d=r(n>1?arguments[1]:void 0,a),c=n>2?arguments[2]:void 0,o=void 0===c?a:r(c,a);while(o>d)s[d++]=t;return s}},"99f4":function(t,s,a){"use strict";var i=a("b5db");t.exports=/MSIE|Trident/.test(i)},"9b62":function(t,s,a){"use strict";a("43e1")},a8be:function(t,s,a){t.exports=a.p+"img/top-right.93e09ad2.png"},cb29:function(t,s,a){"use strict";var i=a("23e7"),r=a("81d5"),e=a("44d2");i({target:"Array",proto:!0},{fill:r}),e("fill")},ea83:function(t,s,a){"use strict";var i=a("b5db"),r=i.match(/AppleWebKit\/(\d+)\./);t.exports=!!r&&+r[1]}}]);
//# sourceMappingURL=chunk-0c94ceb0.74ce8a97.js.map