import Vue from "vue";
import VueRouter from "vue-router";

const Info = () => import("../views/Info.vue");
const Rank = () => import("../views/Rank.vue");
const Vote = () => import("../views/Vote.vue");
const Live = () => import("../views/Live.vue");
const Video = () => import("../views/Video.vue");
const Lucky = () => import("../views/Lucky.vue");
const Stat = () => import("../views/Stat.vue");

Vue.use(VueRouter);

const routes = [
    // 当前活动进程，开赛后修改为Rank
    { name: "index", path: "/", component: Info },
    { name: "info", path: "/info", component: Info },
    { name: "lucky", path: "/lucky", component: Lucky },
    { name: "rank", path: "/rank/:type?/:subtype?", component: Rank },
    { name: "vote", path: "/vote", component: Vote },
    { name: "live", path: "/live", component: Live },
    { name: "video", path: "/video", component: Video },
    { name: "stat", path: "/stat", component: Stat },
];

const router = new VueRouter({
    // mode : 'history',
    routes,
});

export default router;
