import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);
const VueRouterPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(to) {
    return VueRouterPush.call(this, to).catch((err) => err);
};

const Index = () => import("@/views/Surprise/Index.vue");

const routes = [{ name: "index", path: "/", component: Index }];

const router = new VueRouter({
    // mode: "history",
    base: "/surprise",
    routes,
});

export default router;
