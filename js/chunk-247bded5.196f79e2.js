(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-247bded5"],{"279a":function(t,i,e){},"481e":function(t,i,e){"use strict";e.r(i);e("9911");var n=function(){var t=this,i=t._self._c;return i("div",{staticClass:"m-superstar-info"},[i("div",{staticClass:"m-superstar-kv-title"},[i("img",{attrs:{src:t.imgurl+"kv/kv-title.png"}})]),i("div",{staticClass:"m-superstar-main"},[i("div",{staticClass:"u-menu"},t._l(t.menu,(function(e,n){return i("div",{key:e.key,staticClass:"u-menu-item",class:[e.noEnable?"no-enable":"",n==t.menuActive?"actived":""],on:{click:function(i){return t.menuClick(e,n)}}},[e.noEnable?i("img",{attrs:{src:t.imgurl+(n==t.menuActive?e.active:e.img)}}):i("router-link",{attrs:{to:t.link(e.key)}},[i("img",{attrs:{src:t.imgurl+(n==t.menuActive?e.active:e.img)}})])],1)})),0),i("router-view")],1)])},a=[],s=(e("c740"),e("b0c0"),e("d087")),c={name:"SuperstarInfo",components:{},data:function(){return{imgurl:"https://img.jx3box.com/topic/menpaitiantuan/",menu:[{name:"活动介绍",img:"biaoqianye/hdjs.png",active:"biaoqianye/hdjs-active.png",key:"introduce"},{name:"报名",img:"biaoqianye/bm.jpg",active:"biaoqianye/bm-active.jpg",key:"join"},{name:"天团榜",img:"biaoqianye/ttb.jpg",active:"biaoqianye/ttb-active.jpg",key:"list"},{name:"数据榜",img:"biaoqianye/sjb.jpg",active:"biaoqianye/sjb-active.jpg",key:"dps"},{name:"视频集锦",img:"biaoqianye/spjj.jpg",active:"biaoqianye/spjj-active.jpg",key:"video"}],menuActive:0}},computed:{id:function(){return this.$route.params.id||0}},created:function(){var t=this,i=this.menu.findIndex((function(i){return i.key==t.$route.name}));this.menuActive=i,this.$store.state.id=this.id||0,this.init()},methods:{link:function(t){return"/"+this.id+"/"+t},menuClick:function(t,i){t.noEnable||(this.menuActive=i)},init:function(){var t=this;Object(s["a"])(this.id).then((function(i){t.data=i.data.data,t.$store.state.achieves=i.data.data.boss_map,t.$store.state.race=i.data.data}))}}},r=c,u=(e("f9f7"),e("2877")),o=Object(u["a"])(r,n,a,!1,null,"dedf1baa",null);i["default"]=o.exports},c740:function(t,i,e){"use strict";var n=e("23e7"),a=e("b727").findIndex,s=e("44d2"),c="findIndex",r=!0;c in[]&&Array(1)[c]((function(){r=!1})),n({target:"Array",proto:!0,forced:r},{findIndex:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}}),s(c)},d087:function(t,i,e){"use strict";e.d(i,"a",(function(){return a})),e.d(i,"b",(function(){return s}));var n=e("41cb");function a(t){return Object(n["d"])().get("/api/team/rank/events/"+t)}function s(t){return Object(n["d"])().get("/api/team/rank/events",{params:t})}},f9f7:function(t,i,e){"use strict";e("279a")}}]);
//# sourceMappingURL=chunk-247bded5.196f79e2.js.map