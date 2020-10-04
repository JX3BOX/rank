import Vue from "vue";
import VueRouter from "vue-router";

const Join = () => import("../views/Join.vue");
const JoinTeam = () => import("../views/JoinTeam.vue");
const JoinMember = () => import("../views/JoinMember.vue");
const JoinInfo = () => import("../views/JoinInfo.vue");

Vue.use(VueRouter);

const routes = [
    { name: "join", path: "/", component: Join },
    { name: "team", path: "/team", component: JoinTeam },
    { name: "member", path: "/member", component: JoinMember },
    { name: "info", path: "/info", component: JoinInfo },
];

const router = new VueRouter({
    routes,
});

export default router;
