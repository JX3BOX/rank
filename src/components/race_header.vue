<template>
    <div class="m-race-header">

        <!-- TODO:boss图 -->
        <!-- <img class="u-boss" :src="boss_img_url" alt="" /> -->
        <img class="u-boss" src="../assets/img/boss/1.png"/>

        <!-- TODO:logo -->
        <img class="u-logo" src="../assets/img/common/logo.png">

        <!-- TODO:version -->
        <img class="u-version" src="../assets/img/version/1.png"/>

        <!-- 赞助商 -->
        <div class="u-sponsors">
            <span class="u-sponsors-label">活动赞助商：</span>
            <ul class="u-sponsors-list" v-if="sponsors.length">
                <li v-for="(sponsor, i) in sponsors" :key="i">
                    <a :href="sponsor.link" target="_blank"
                        ><img :src="sponsor.logo"
                    /></a>
                </li>
            </ul>
        </div>

        <!-- 启用的模块 -->
        <race-tab />
    </div>
</template>

<script>
// TODO:赞助商调用远程部分
import sponsors from "@/assets/data/sponsors.js";
import tabs from './race_tab.vue'
import {__imgPath,__ossMirror} from '@jx3box/jx3box-common/js/jx3box.json'
export default {
    props: [],
    data: function() {
        return {
            
        };
    },
    computed: {
        id: function() {
            return this.$store.state.id;
        },
        boss_img_url: function() {
            return '/img/boss' + this.id + ".png";
            // return __ossMirror + 'image/rank/boss' + this.id + ".png";
        },
        sponsors : function (){
            return sponsors[this.id] || []
        }
    },
    methods: {},
    mounted: function() {
    },
    components: {
        'race-tab' : tabs
    },
};
</script>

<style lang="less">
@import "../assets/css/race_header.less";
</style>
