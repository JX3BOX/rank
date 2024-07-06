import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);
const VueRouterPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(to) {
    return VueRouterPush.call(this, to).catch((err) => err);
};

const Join = () => import("@/views/Superstar/Join.vue");
const Nav = () => import("@/views/Superstar/Nav.vue");
const Introduce = () => import("@/views/Superstar/Introduce.vue");
const SignUp = () => import("@/views/Superstar/SignUp.vue");
const List = () => import("@/views/Superstar/List.vue");

const routes = [
    { name: "join", path: "/:id/join", component: Join },
    { name: "nav", path: "/", component: Nav },
    {
        name: "detail",
        path: "/:id",
        redirect: { name: "introduce" },
        component: () => import("@/layouts/SuperstarLayout.vue"),
        children: [
            { name: "introduce", path: "/:id/introduce", component: Introduce },
            { name: "signup", path: "/:id/signup", component: SignUp },
            { name: "list", path: "/:id/list", component: List },
        ],
    },
];

const router = new VueRouter({
    // mode: "history",
    base: "/superstar",
    routes,
});

export default router;
