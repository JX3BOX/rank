(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3b8e5abb"],{"04c4":function(t,e,a){"use strict";a.d(e,"e",(function(){return s})),a.d(e,"d",(function(){return o})),a.d(e,"g",(function(){return r})),a.d(e,"f",(function(){return n})),a.d(e,"c",(function(){return u})),a.d(e,"b",(function(){return l})),a.d(e,"a",(function(){return d})),a.d(e,"h",(function(){return c}));a("99af");var i=a("2777");function s(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return i["a"].get("team/race/achieve/".concat(t,"/top100"),{params:{server:e}})}function n(t){return i["a"].get("team/race/achieve/finish/process",{params:{ids:t}})}function o(t,e){return i["a"].get("team/rank/events/".concat(t,"/live-tv-list"),{params:e})}function r(t,e){return i["a"].get("team/video/event/".concat(t),{params:e})}function l(t){return i["a"].delete("team/video/".concat(t))}function c(t,e){return i["a"].put("team/video/".concat(t),e)}function d(t){return i["a"].post("team/video",t)}function u(t,e){return i["a"].post("team/events/".concat(t,"/vote-team/").concat(e))}},"15ac":function(t){t.exports=JSON.parse('{"1":{"8548":"余晖","8549":"宓桃","8550":"武雪散","8551":"猿飞","8552":"哑头陀","8553":"岳琳"}}')},"363f":function(t,e,a){},"36a9":function(t,e,a){"use strict";var i=a("363f"),s=a.n(i);s.a},"81a8":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"m-rank-video",attrs:{"element-loading-text":"加载中...","element-loading-spinner":"el-icon-loading","element-loading-background":"rgba(0, 0, 0, 0.8)"}},[a("div",{staticClass:"m-rank-video-title"},[a("img",{attrs:{src:t.video_title_img}}),t.isSuperAdmin?a("el-button",{staticClass:"u-addv",attrs:{type:"primary",icon:"el-icon-circle-plus-outline"},on:{click:t.add}},[t._v("添加视频")]):t._e()],1),a("el-row",{staticClass:"m-rank-boss",attrs:{gutter:20,type:"flex",justify:"space-between"}},[a("el-col",{attrs:{span:3}},[a("div",{staticClass:"u-boss",class:{on:""==t.current_boss},on:{click:function(e){return t.changeBoss(0)}}},[a("span",{staticClass:"u-boss-name"},[t._v("全部")])])]),t._l(t.bossList,(function(e,i){return a("el-col",{key:i,attrs:{span:3}},[a("div",{staticClass:"u-boss",class:{on:i==t.current_boss},on:{click:function(e){return t.changeBoss(i)}}},[a("span",{staticClass:"u-boss-name"},[t._v(t._s(e))])])])}))],2),a("div",{staticClass:"m-rank-video-content"},[t.data&&t.data.length?[a("el-row",{staticClass:"m-rank-video-list",attrs:{gutter:20}},t._l(t.data,(function(e,i){return a("el-col",{directives:[{name:"show",rawName:"v-show",value:!t.current_boss||e.aid==t.current_boss,expression:"!current_boss || item.aid == current_boss"}],key:i,attrs:{span:8}},[a("div",{staticClass:"m-rank-video-item"},[a("a",{staticClass:"u-video",attrs:{href:e.url,target:"_blank"}},[a("img",{staticClass:"u-live-cover",attrs:{src:t._f("videoCover")(e.aid),loading:"lazy"}}),a("i",{staticClass:"u-player"},[a("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 511.999 511.999","svg-inline":"",role:"presentation",focusable:"false",tabindex:"-1"}},[a("linearGradient",{attrs:{id:"a",gradientUnits:"userSpaceOnUse",x1:"35.029",y1:"257.313",x2:"478.029",y2:"257.313",gradientTransform:"matrix(.9983 0 0 -.9983 -.085 512.866)"}},[a("stop",{attrs:{offset:"0","stop-color":"#00f2fe"}}),a("stop",{attrs:{offset:".021","stop-color":"#03effe"}}),a("stop",{attrs:{offset:".293","stop-color":"#24d2fe"}}),a("stop",{attrs:{offset:".554","stop-color":"#3cbdfe"}}),a("stop",{attrs:{offset:".796","stop-color":"#4ab0fe"}}),a("stop",{attrs:{offset:"1","stop-color":"#4facfe"}})],1),a("path",{attrs:{d:"M104.967 511.999l-.313-.001c-38.47-.21-69.77-31.983-69.77-70.829V70.058c0-25.691 13.39-48.512 35.819-61.041 22.429-12.531 48.88-11.971 70.758 1.497l302.4 186.405c20.869 12.848 33.305 35.16 33.255 59.678-.05 24.52-12.576 46.781-33.507 59.55L224.997 449.999c-9.405 5.758-21.695 2.802-27.452-6.602-5.758-9.404-2.802-21.694 6.602-27.452l218.639-133.869c9.139-5.576 14.378-14.886 14.4-25.56.022-10.673-5.179-20.004-14.268-25.601L120.517 44.511c-9.374-5.771-20.718-6.011-30.339-.636-9.62 5.375-15.364 15.162-15.364 26.183V441.17c0 18.385 15.541 30.819 30.056 30.898 4.735.001 10.08-1.726 15.553-5.064 9.411-5.743 21.698-2.768 27.441 6.645 5.743 9.413 2.767 21.698-6.645 27.441-11.702 7.14-24.23 10.908-36.252 10.909z",fill:"url(#a)"}})],1)])]),a("div",{staticClass:"u-info"},[a("a",{attrs:{href:t._f("teamLink")(e.team_id),target:"_blank"}},[a("img",{staticClass:"u-team-logo",attrs:{src:t._f("liveAvatar")(e.logo),loading:"lazy"}})]),a("div",{staticClass:"u-team"},[a("span",{staticClass:"u-label"},[t._v("团队 : ")]),a("a",{staticClass:"u-team-name",attrs:{href:t._f("teamLink")(e.team_id),target:"_blank"}},[t._v(t._s(e.name))])]),a("div",{staticClass:"u-room"},[a("a",{staticClass:"u-room-name",attrs:{href:e.url,target:"_blank"}},[t._v(" "+t._s(e.title)+" ")])]),t.isSuperAdmin?a("div",{staticClass:"u-op"},[a("el-button",{staticClass:"u-edit",attrs:{type:"primary",plain:"",icon:"el-icon-edit-outline",size:"mini"},on:{click:function(a){return t.edit(e)}}},[t._v("编辑")]),a("el-button",{staticClass:"u-delete",attrs:{type:"danger",plain:"",icon:"el-icon-delete",size:"mini"},on:{click:function(a){return t.del(e.ID)}}},[t._v("删除")])],1):t._e()])])])})),1),a("el-pagination",{staticClass:"m-rank-video-pages m-archive-pages",attrs:{background:"",layout:"total, prev, pager, next,jumper","hide-on-single-page":!0,"page-size":t.per,total:t.total,"current-page":t.page},on:{"update:currentPage":function(e){t.page=e},"update:current-page":function(e){t.page=e}}})]:a("el-alert",{staticClass:"m-archive-null",attrs:{title:"没有找到相关条目",type:"info",center:"","show-icon":""}})],2),a("el-dialog",{staticClass:"m-rank-video-dialog",attrs:{title:"添加/编辑视频",visible:t.dialogVisible,width:"30%"},on:{"update:visible":function(e){t.dialogVisible=e}}},[a("div",{staticClass:"m-rank-video-form"},[a("el-form",{ref:"form",attrs:{"label-width":"80px"}},[a("el-form-item",{attrs:{label:"团队ID"}},[a("el-input",{attrs:{placeholder:"请输入正确的团队数字编号"},model:{value:t.video.team_id,callback:function(e){t.$set(t.video,"team_id",t._n(e))},expression:"video.team_id"}})],1),a("el-form-item",{attrs:{label:"成就ID"}},[a("el-select",{attrs:{placeholder:"请选择"},model:{value:t.video.aid,callback:function(e){t.$set(t.video,"aid",t._n(e))},expression:"video.aid"}},t._l(t.bossList,(function(t,e){return a("el-option",{key:e,attrs:{label:t,value:e}})})),1)],1),a("el-form-item",{attrs:{label:"视频链接"}},[a("el-input",{attrs:{placeholder:"请输入视频网址"},model:{value:t.video.url,callback:function(e){t.$set(t.video,"url",e)},expression:"video.url"}})],1),a("el-form-item",{attrs:{label:"视频标题"}},[a("el-input",{attrs:{placeholder:"请注明XX视角"},model:{value:t.video.title,callback:function(e){t.$set(t.video,"title",e)},expression:"video.title"}})],1)],1)],1),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.dialogVisible=!1}}},[t._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:t.submit}},[t._v("确 定")])],1)])],1)},s=[],n=(a("d3b7"),a("15ac")),o=a("64c7"),r=a("04c4"),l=a("85e4"),c=a("c9d2"),d=a.n(c),u=a("9756"),f=a("2ef0"),p=a.n(f),m={props:[],data:function(){return{video_title_img:o["__imgPath"]+"image/rank/common/videos.png",data:[],per:24,page:1,total:1,loading:!1,servers:u,server:"",current_boss:"",isSuperAdmin:d.a.isSuperAdmin(),dialogVisible:!1,video:{ID:"",team_id:"",event_id:"",aid:"",title:"",url:""}}},computed:{id:function(){return this.$store.state.id},params:function(){return{pageSize:this.per,pageIndex:this.page,aid:this.current_boss}},bossList:function(){return n[this.id]||[]},demo_video:function(){return{team_id:"",event_id:~~this.id,aid:"",title:"",url:""}}},methods:{changeBoss:function(t){this.current_boss=t,this.page=1,this.loadData()},loadData:function(){var t=this;this.loading=!0,Object(r["g"])(this.id,this.params).then((function(e){t.data=e.data.data.list,t.page=e.data.data.page.index,t.total=e.data.data.page.total})).finally((function(){t.loading=!1}))},del:function(t){var e=this;this.$alert("确认删除吗","消息",{confirmButtonText:"确定",callback:function(a){"confirm"==a&&Object(r["b"])(t).then((function(t){e.$message({type:"success",message:"删除成功"}),location.reload()}))}})},edit:function(t){this.dialogVisible=!0,this.video=t},add:function(){this.dialogVisible=!0,this.video=p.a.cloneDeep(this.demo_video)},submit:function(){var t=this;this.video.ID?Object(r["h"])(this.video.ID,this.video).then((function(e){t.$message({type:"success",message:"更新成功"}),t.dialogVisible=!1})):Object(r["a"])(this.video).then((function(e){t.$message({type:"success",message:"发布成功"}),t.dialogVisible=!1}))}},watch:{params:{deep:!0,handler:function(){this.loadData()}}},filters:{teamLogo:function(t){return t?Object(l["getThumbnail"])(t,120,!0):o["default_avatar"]},liveAvatar:function(t){return t?Object(l["getThumbnail"])(t,68,!0):o["default_avatar"]},teamLink:function(t){return"/team/#/org/view/"+t},videoCover:function(t){return o["__imgPath"]+"image/rank/videos/".concat(t,".png")}},created:function(){this.loadData()},components:{}},v=m,g=(a("36a9"),a("2877")),b=Object(g["a"])(v,i,s,!1,null,null,null);e["default"]=b.exports},9756:function(t){t.exports=JSON.parse('["蝶恋花","龙争虎斗","长安城","幽月轮","斗转星移","剑胆琴心","乾坤一掷","唯我独尊","梦江南","绝代天骄","天鹅坪","破阵子","飞龙在天","青梅煮酒","执子之手","奉天证道","共結來緣","傲血戰意","巔峰再起","江海雲夢"]')}}]);
//# sourceMappingURL=chunk-3b8e5abb.4c2eb07b.js.map