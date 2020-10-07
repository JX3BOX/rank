<template>
    <div class="m-race-header">
        <!-- 视觉图 -->
        <div class="u-vision">
            <img class="u-boss" :src="boss_img_url" alt="" />
            <img class="u-logo" :src="LOGO" />
            <img class="u-version" :src="version_img_url" alt="" />
        </div>

        <!-- 赞助商 -->
        <div class="u-sponsors">
            <span class="u-sponsors-label">活动赞助商：</span>
            <ul class="u-sponsors-list" v-if="sponsors.length">
                <li v-for="(sponsor, i) in sponsors" :key="i">
                    <a class="logo" :href="sponsor.link" target="_blank"
                        ><img :src="sponsor.logo"
                    /></a>
                </li>
            </ul>
        </div>

        <!-- 启用的模块 -->
        <race-tab :data="data"/>
    </div>
</template>

<script>
import PICS from "@/assets/js/pics.js";
import tabs from "./race_tab.vue";
import { __imgPath, __ossMirror } from "@jx3box/jx3box-common/js/jx3box.json";
export default {
    props: ['data'],
    data: function() {
        return {
            LOGO: PICS.LOGO,
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
        sponsors : function (){
            return this.data && this.data.sponsors || []
        }
    },
    methods: {},
    mounted: function() {
        
    },
    components: {
        "race-tab": tabs,
    },
};
</script>

<style lang="less">
@import "../assets/css/race_header.less";
</style>
