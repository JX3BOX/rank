import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);
const VueRouterPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(to) {
    return VueRouterPush.call(this, to).catch((err) => err);
};

const Info = () => import("@/views/Superstar/Info.vue");

const routes = [
    { name: "index", path: "/", redirect: "/info" },
    { name: "info", path: "/info", component: Info },
];

const router = new VueRouter({
    // mode: "history",
    base: "/superstar",
    routes,
});

export default router;
