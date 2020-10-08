<template>
    <div class="m-race-header">
        <!-- 视觉图 -->
        <div class="u-vision">
            <img class="u-boss" :src="boss_img_url" alt />
            <img class="u-logo" :src="LOGO" />
            <img class="u-version" :src="version_img_url" alt />
        </div>

        <!-- 举办单位 -->
        <div class="u-logos u-media">
            <span>联合举办：</span>
            <ul>
                <li>
                    <a class="logo" href="https://www.jx3box.com" target="_blank">
                        <img
                            class="u-media-jx3box"
                            src="https://oss.jx3box.com/upload/post/2020/10/8/4787512.png"
                        />
                    </a>
                </li>
                <li>
                    <a class="logo" href="https://www.weibo.com/u/6754472163" target="_blank">
                        <img
                            class="u-media-tuilan"
                            src="https://console.cnyixun.com/upload/post/2020/10/9/5547991.jpg"
                        />
                    </a>
                </li>
            </ul>
            <span>独家直播合作：</span>
            <ul>
                <li>
                    <a class="logo" href="https://www.douyu.com/" target="_blank">
                        <img
                            src="https://console.cnyixun.com/upload/post/2020/10/9/2625036.png"
                            alt
                            class="u-media-douyu"
                        />
                    </a>
                </li>
            </ul>
        </div>

        <!-- 赞助商 -->
        <div class="u-logos u-sponsors">
            <span class="u-sponsors-label">活动赞助商：</span>
            <ul class="u-sponsors-list" v-if="sponsors.length">
                <li v-for="(sponsor, i) in sponsors" :key="i">
                    <a class="logo" :href="sponsor.link" target="_blank">
                        <img :src="sponsor.logo" />
                    </a>
                </li>
            </ul>
        </div>

        <!-- 启用的模块 -->
        <race-tab :data="data" />

        <!-- 二维码 -->
        <img class="u-qrcode" :src="qrcode_img_url" />
    </div>
</template>

<script>
import PICS from "@/assets/js/pics.js";
import tabs from "./race_tab.vue";
import { __imgPath, __ossMirror } from "@jx3box/jx3box-common/js/jx3box.json";
export default {
    props: ["data"],
    data: function() {
        return {
            LOGO: PICS.LOGO,
            qrcode_img_url: __imgPath + "image/rank/common/boxqrcode.png",
        };
    },
    computed: {
        id: function() {
            return this.$store.state.id;
        },
        boss_img_url: function() {
            return PICS.boss(this.id);
        },
        version_img_url: function() {
            return PICS.version(this.id);
        },
        sponsors: function() {
            return (this.data && this.data.sponsors) || [];
        },
    },
    methods: {},
    mounted: function() {},
    components: {
        "race-tab": tabs,
    },
};
</script>

<style lang="less">
@import "../assets/css/race_header.less";
</style>
