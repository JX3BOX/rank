import Vue from "vue";
import VueRouter from "vue-router";

// 解决重复点击路由报错的BUG
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch((err) => err);
};

const Info = () => import("../views/Info.vue");
const Rank = () => import("../views/Rank.vue");
const Dps = () => import("../views/Dps.vue");
const Vote = () => import("../views/Vote.vue");
const Live = () => import("../views/Live.vue");
const Video = () => import("../views/Video.vue");
const Lucky = () => import("../views/Lucky.vue");
const Stat = () => import("../views/Stat.vue");
const Superstar = () => import("../views/Superstar.vue");
const Seven = () => import("../pages/Seven/Enroll/Index.vue");
const Welcome = () => import("../pages/Seven/Welcome/Index.vue");

Vue.use(VueRouter);

const routes = [
    // 当前活动进程，开赛后修改为Rank
    { name: "index", path: "/:id", component: Info },
    { name: "info", path: "/:id/info", component: Info },
    { name: "lucky", path: "/:id/lucky", component: Lucky },
    { name: "dps", path: "/:id/dps", component: Dps },
    { name: "rank", path: "/:id/rank", component: Rank },
    { name: "vote", path: "/:id/vote", component: Vote },
    { name: "live", path: "/:id/live", component: Live },
    { name: "video", path: "/:id/video", component: Video },
    { name: "stat", path: "/:id/stat", component: Stat },
    { name: "superstar", path: "/:id/superstar", component: Superstar },
    { name: "seven", path: "/seven", component: Seven },
    { name: "welcome", path: "/welcome", component: Welcome },

];

const router = new VueRouter({
    // mode : 'history',
    routes,
});

export default router;
