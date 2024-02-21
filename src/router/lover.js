import Vue from "vue";
import VueRouter from "vue-router";

// 解决重复点击路由报错的BUG
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch((err) => err);
};

Vue.use(VueRouter);

const routes = [
    {
        name: "index",
        path: "/",
        component: () => import("@/views/Lover.vue"),
    }
]

const router = new VueRouter({
    routes,
});

export default router;
