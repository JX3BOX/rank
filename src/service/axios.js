import axios from "axios";
import { installNextInterceptors } from "@jx3box/jx3box-common/js/axios.js";
import { $next } from "@jx3box/jx3box-common/js/https.js";

const __team = "https://team.api.jx3box.com/";
function $team(options) {
    let config = {
        // 同时发送cookie和basic auth
        withCredentials: true,
        auth: {
            username: (localStorage && localStorage.getItem("token")) || "",
            password: "team common request",
        },
        baseURL: process.env.NODE_ENV === "production" ? __team : "/",
        headers: {},
    };

    // 创建实例
    const ins = axios.create(config);

    // 指定拦截器
    installNextInterceptors(ins, options);

    return ins;
}

export { axios, $next, $team };
