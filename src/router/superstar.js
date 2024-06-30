import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);
const VueRouterPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(to) {
    return VueRouterPush.call(this, to).catch((err) => err);
};

const Info = () => import("@/views/Superstar/Info.vue");
const Join = () => import("@/views/Superstar/Join.vue");
const Nav = () => import("@/views/Superstar/Nav.vue");

const routes = [
    { name: "index", path: "/:id", redirect: { name: "info" } },
    { name: "info", path: "/:id/info", component: Info },
    { name: "join", path: "/:id/join", component: Join },
    { name: "nav", path: "/", component: Nav },
];

const router = new VueRouter({
    // mode: "history",
    base: "/superstar",
    routes,
});

export default router;
