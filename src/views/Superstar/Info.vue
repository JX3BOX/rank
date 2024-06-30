<template>
    <div class="m-superstar-info">
        <div class="m-superstar-kv-title"><img :src="imgurl + 'kv/kv-title.png'" /></div>
        <!-- 活动主体部分 -->
        <div class="m-superstar-main">
            <div class="u-menu">
                <div v-for="(item, index) in menu" :key="item.key" class="u-menu-item"
                    :class="item.noEnable ? 'no-enable' : ''" @click="menuClick(item, index)">
                    <img :src="imgurl + (index == menuActive ? item.active : item.img)" />
                </div>
            </div>
            <!-- 活动介绍部分 -->
            <transition name="fade">
                <Introduce v-if="menuActive == 0"></Introduce>
            </transition>
            <!-- 报名 -->
            <transition name="fade">
                <SignUp v-if="menuActive == 1"></SignUp>
            </transition>
            <!-- 天团榜 -->
            <transition name="fade">
                <List v-if="menuActive == 2"></List>
            </transition>
        </div>
    </div>
</template>

<script>
import List from "./List.vue";
import Introduce from "./Introduce.vue";
import SignUp from "./SignUp.vue";
import { getEvent } from "@/service/event.js";
export default {
    name: "SuperstarInfo",
    components: { List, Introduce, SignUp },
    data: function () {
        return {
            imgurl: "https://img.jx3box.com/topic/menpaitiantuan/",
            menu: [
                { name: "活动介绍", img: "biaoqianye/hdjs.png", active: "biaoqianye/hdjs-active.png", key: "hdjs" },
                { name: "报名", img: "biaoqianye/bm.jpg", active: "biaoqianye/bm-active.jpg", key: "bm" },
                { name: "天团榜", img: "biaoqianye/ttb.jpg", active: "biaoqianye/ttb-active.jpg", key: "ttb" },
                { name: "数据榜", img: "biaoqianye/sjb.jpg", active: "biaoqianye/sjb-active.jpg", key: "sjb", noEnable: true },
                { name: "视频集锦", img: "biaoqianye/spjj.jpg", active: "biaoqianye/spjj-active.jpg", key: "spjj", noEnable: true },
            ],
            menuActive: 0,
        };
    },
    computed: {
        id: function () {
            return this.$route.params.id || 0;
        },
    },
    created() {
        this.$store.state.id = this.id || 0;
        this.init()
    },
    methods: {
        menuClick(item, index) {
            if (item.noEnable) return;
            this.menuActive = index;
        },
        init: function () {
            getEvent(this.id).then((res) => {
                this.data = res.data.data;
                this.$store.state.achieves = res.data.data.boss_map;
                this.$store.state.race = res.data.data;
            });
        },
    },
};
</script>
<style lang="less" scoped>
@import "~@/assets/css/superstar/index.less";
</style>
