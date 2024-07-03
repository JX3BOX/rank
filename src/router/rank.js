import Vue from "vue";
import VueRouter from "vue-router";

// 解决重复点击路由报错的BUG
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch((err) => err);
};

const Info = () => import("../views/Rank/Info.vue");
const Rank = () => import("../views/Rank/Rank.vue");
const Dps = () => import("../views/Rank/Dps.vue");
const Vote = () => import("../views/Rank/Vote.vue");
const Live = () => import("../views/Rank/Live.vue");
const Video = () => import("../views/Rank/Video.vue");
const Lucky = () => import("../views/Rank/Lucky.vue");
const Stat = () => import("../views/Rank/Stat.vue");
const Superstar = () => import("../views/Rank/Superstar.vue");
const Awards = () => import("../views/Rank/Awards.vue");
const Index = () => import("../views/Rank/Index.vue");

Vue.use(VueRouter);

const routes = [
    // 当前活动进程，开赛后修改为Rank
    { name: "index", path: "/", component: Index },
    {
        name: "detail",
        path: "/:id",
        redirect: { name: "info" },
        component: () => import("@/layouts/RankLayout.vue"),
        children: [
            { name: "info", path: "/:id/info", component: Info },
            { name: "lucky", path: "/:id/lucky", component: Lucky },
            { name: "dps", path: "/:id/dps", component: Dps },
            { name: "rank", path: "/:id/rank", component: Rank },
            { name: "vote", path: "/:id/vote", component: Vote },
            { name: "live", path: "/:id/live", component: Live },
            { name: "video", path: "/:id/video", component: Video },
            { name: "stat", path: "/:id/stat", component: Stat },
            { name: "superstar", path: "/:id/superstar", component: Superstar },
            { name: "awards", path: "/:id/awards", component: Awards },
        ],
    },
    // { name: "seven", path: "/seven", component: Seven },
    // { name: "welcome", path: "/welcome", component: Welcome },
];

const router = new VueRouter({
    // mode : 'history',
    base: "/rank",
    routes,
});

export default router;
