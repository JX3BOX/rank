(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d0b3c872"],{"1d5c":function(t,i,e){},4397:function(t,i,e){"use strict";e("1d5c")},"481e":function(t,i,e){"use strict";e.r(i);e("9911");var n=function(){var t=this,i=t._self._c;return i("div",{staticClass:"m-superstar-info"},[i("div",{staticClass:"m-superstar-kv-title"},[i("img",{attrs:{src:t.imgurl+"kv/kv-title.png"}})]),i("div",{staticClass:"m-superstar-main"},[i("div",{staticClass:"u-menu"},t._l(t.menu,(function(e,n){return i("div",{key:e.key,staticClass:"u-menu-item",class:[e.noEnable?"no-enable":"",n==t.menuActive?"actived":""],on:{click:function(i){return t.menuClick(e,n)}}},[e.noEnable?i("img",{attrs:{src:t.imgurl+(n==t.menuActive?e.active:e.img)}}):i("router-link",{attrs:{to:t.link(e.key)}},[i("img",{attrs:{src:t.imgurl+(n==t.menuActive?e.active:e.img)}})])],1)})),0),i("router-view")],1)])},a=[],s=e("d087"),c={name:"SuperstarInfo",components:{},data:function(){return{imgurl:"https://img.jx3box.com/topic/menpaitiantuan/",menu:[{name:"活动介绍",img:"biaoqianye/hdjs.png",active:"biaoqianye/hdjs-active.png",key:"introduce"},{name:"报名",img:"biaoqianye/bm.jpg",active:"biaoqianye/bm-active.jpg",key:"signup"},{name:"天团榜",img:"biaoqianye/ttb.jpg",active:"biaoqianye/ttb-active.jpg",key:"list"},{name:"数据榜",img:"biaoqianye/sjb.jpg",active:"biaoqianye/sjb-active.jpg",key:"data",noEnable:!0},{name:"视频集锦",img:"biaoqianye/spjj.jpg",active:"biaoqianye/spjj-active.jpg",key:"video",noEnable:!0}],menuActive:0}},computed:{id:function(){return this.$route.params.id||0}},created:function(){this.$store.state.id=this.id||0,this.init()},methods:{link:function(t){return"/"+this.id+"/"+t},menuClick:function(t,i){t.noEnable||(this.menuActive=i)},init:function(){var t=this;Object(s["a"])(this.id).then((function(i){t.data=i.data.data,t.$store.state.achieves=i.data.data.boss_map,t.$store.state.race=i.data.data}))}}},u=c,r=(e("4397"),e("2877")),o=Object(r["a"])(u,n,a,!1,null,"718666a8",null);i["default"]=o.exports},d087:function(t,i,e){"use strict";e.d(i,"a",(function(){return a})),e.d(i,"b",(function(){return s}));var n=e("41cb");function a(t){return Object(n["d"])().get("/api/team/rank/events/"+t)}function s(t){return Object(n["d"])().get("/api/team/rank/events",{params:t})}}}]);
//# sourceMappingURL=chunk-d0b3c872.395aa0d1.js.map