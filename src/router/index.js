import Vue from "vue";
import VueRouter from "vue-router";

const Join = () => import("../views/Join.vue");
const JoinRace = () => import("../views/JoinRace.vue");
const JoinTeam = () => import("../views/JoinTeam.vue");
const JoinInfo = () => import("../views/JoinInfo.vue");
const RankInfo = () => import("../views/RankInfo.vue");
const RankList = () => import("../views/RankList.vue");
const RankVote = () => import("../views/RankVote.vue");
const RankLucky = () => import("../views/RankLucky.vue");
const RankStat = () => import("../views/RankStat.vue");

Vue.use(VueRouter);

const routes = [
    // 当前活动进程，开赛后修改为RankList
    { name: "index", path: "/", component: RankInfo },

    { name: "Join", path: "/join", component: Join },
    { name: "JoinRace", path: "/join/race", component: JoinRace },
    { name: "JoinTeam", path: "/join/team", component: JoinTeam },
    { name: "JoinInfo", path: "/join/info", component: JoinInfo },
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
