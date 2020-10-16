import Vue from "vue";
import VueRouter from "vue-router";

const Info = () => import("../views/Info.vue");
const Rank = () => import("../views/Rank.vue");
const Vote = () => import("../views/Vote.vue");
const Video = () => import("../views/Video.vue");
const Lucky = () => import("../views/Lucky.vue");
const Stat = () => import("../views/Stat.vue");

Vue.use(VueRouter);

const routes = [
    // 当前活动进程，开赛后修改为Rank
    { name: "index", path: "/:id/", component: Info },
    { name: "info", path: "/:id/info", component: Info },
    { name: "lucky", path: "/:id/lucky", component: Lucky },
    { name: "rank", path: "/:id/rank", component: Rank },
    { name: "vote", path: "/:id/vote", component: Vote },
    { name: "video", path: "/:id/video", component: Video },
    { name: "stat", path: "/:id/stat", component: Stat },
];

const router = new VueRouter({
    routes,
});

export default router;
