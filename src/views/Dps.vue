<template>
    <!-- 天梯榜 -->
    <div class="m-race-dps" v-loading="loading" element-loading-text="加载中..." element-loading-spinner="el-icon-loading" element-loading-background="rgba(0, 0, 0, 0.8)">
        <div class="m-rank-vote-title">
            <img :src="dps_title_img" />
        </div>
        <div class="m-rank-vote-header">
            <!-- TODO: -->
        </div>
        <el-row class="m-rank-boss m-rank-filter" :gutter="20" type="flex">
            <el-col :span="span" v-for="(label, aid) of bossList" :key="aid">
                <li class="u-boss" @click="changeBoss(aid)" :class="{ on: aid == achieve_id }">
                    <span class="u-boss-name">{{ label }}</span>
                </li>
            </el-col>
        </el-row>
        <!-- TODO: -->
    </div>
</template>

<script>
import { __imgPath } from "@jx3box/jx3box-common/data/jx3box.json";
import achieves from "@/assets/data/achieve.json";
export default {
    name: "Dps",
    props: [],
    data: function() {
        return {
            dps_title_img: __imgPath + "image/rank/common/dps.png",
            achieve_id: "", //boss成就ID
            loading: false,
        };
    },
    computed: {
        id: function() {
            return this.$store.state.id;
        },
        bossList: function() {
            return achieves[this.id] || [];
        },
    },
    methods: {},
    created: function() {
        this.achieve_id = this.$route.query.aid || _.first(Object.keys(this.bossList));
    },
    components: {},
};
</script>

<style lang="less">
@import "../assets/css/race_vote.less";
@import "../assets/css/race_rank.less";
@import "../assets/css/race_dps.less";
</style>
