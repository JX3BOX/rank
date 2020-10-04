import Vue from "vue";
import VueRouter from "vue-router";

const RankInfo = () => import("../views/RankInfo.vue");
const RankList = () => import("../views/RankList.vue");
const RankVote = () => import("../views/RankVote.vue");
const RankVideo = () => import("../views/RankVideo.vue");
const RankLucky = () => import("../views/RankLucky.vue");
const RankStat = () => import("../views/RankStat.vue");

Vue.use(VueRouter);

const routes = [
    // 当前活动进程，开赛后修改为RankList
    { name: "index", path: "/", component: RankInfo },

    { name: "RankInfo", path: "/info", component: RankInfo },
    { name: "RankList", path: "/race", component: RankList },
    { name: "RankVote", path: "/vote", component: RankVote },
    { name: "RankVideo", path: "/video", component: RankVideo },
    { name: "RankLucky", path: "/lucky", component: RankLucky },
    { name: "RankStat", path: "/stat", component: RankStat },
];

const router = new VueRouter({
    routes,
});

export default router;
