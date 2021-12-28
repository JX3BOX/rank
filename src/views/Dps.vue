<template>
    <!-- 天梯榜 -->
    <div class="m-rank-dps" v-loading="loading" element-loading-text="加载中..." element-loading-spinner="el-icon-loading" element-loading-background="rgba(0, 0, 0, 0.8)">
        <div class="m-rank-vote-title">
            <img :src="dps_title_img" />
        </div>
        <!-- TODO: -->
        <!-- <div class="m-rank-vote-header"></div> -->
        <!-- Boss导航 -->
        <el-row class="m-rank-boss m-rank-filter m-rank-dps-filter" :gutter="20" type="flex">
            <el-col :span="span" v-for="(label, id) of boss_list" :key="'aid-' + id">
                <li class="u-boss" @click="changeBoss(id)" :class="{ on: id == aid }">
                    <span class="u-boss-name">{{ label }}</span>
                </li>
            </el-col>
        </el-row>
        <!-- 心法导航 -->
        <div class="m-rank-dps-xf">
            <ul>
                <li class="u-mount" :class="{ on: xfid == mount }" v-for="(label, xfid) in xfmap" :key="'xf-' + xfid" @click="changeMount(xfid)"><img :src="xfid | showMountIcon" :title="label" /></li>
            </ul>
        </div>
        <!-- 数据列表 -->
        <div class="m-rank-dps-list" v-if="list && list.length">
            <el-row class="u-item u-head" :gutter="20">
                <el-col :span="2"><div class="u-ranking">排名</div></el-col>
                <el-col :span="2"><div class="u-mount">心法</div></el-col>
                <el-col :span="3"><div class="u-server">服务器</div></el-col>
                <el-col :span="3"><div class="u-team">来自团队</div></el-col>
                <el-col :span="4"><div class="u-role">角色名</div></el-col>
                <el-col :span="4"><div class="u-dps">记录</div></el-col>
                <el-col :span="4"><div class="u-dps">DPS/HPS</div></el-col>
                <el-col :span="2"><div class="u-more">击杀记录</div></el-col>
            </el-row>
            <el-row class="u-item" :gutter="20" v-for="(item, i) in list" :key="'dps' + i">
                <el-col :span="2"
                    ><div class="u-ranking">{{ i + 1 }}</div></el-col
                >
                <el-col :span="2"
                    ><div class="u-mount" :style="{ color: showMountColor(item.mount) }"><img :src="item.mount | showMountIcon" />{{ item.mount | showMountLabel }}</div></el-col
                >
                <el-col :span="3"
                    ><div class="u-server">{{ item.server }}</div></el-col
                >
                <el-col :span="3"
                    ><a class="u-team" :href="item.team_id | showTeamLink" target="_blank" v-if="item.team_id"
                        ><img :src="item | showTeamLogo" /><span>{{ item | showTeamName }}</span></a
                    ><span v-else>-</span></el-col
                >
                <el-col :span="4"
                    ><div class="u-role">
                        <a :href="item.uid | authorLink" target="_blank" v-if="item.uid"><img :src="item | showUserAvatar" />{{ item.role }}</a>
                        <span v-else>{{ item.role }}</span>
                    </div></el-col
                >
                <el-col :span="4"
                    ><div class="u-total">
                        <span class="u-damage"
                            ><span>{{ item.isTherapy ? "总治疗" : "总伤害" }}</span> <b>{{ item._total }}</b></span
                        >
                        <span class="u-time">
                            <span>战斗时间</span>
                            <b>{{ item.fight_time / 1000 }}</b
                            >秒
                        </span>
                    </div></el-col
                >
                <el-col :span="4"
                    ><div class="u-dps">{{ item._dhps }}</div></el-col
                >
                <el-col :span="2"
                    ><div class="u-more">查看</div></el-col
                >
            </el-row>
        </div>
    </div>
</template>

<script>
import xfmap from "@jx3box/jx3box-data/data/xf/xfid.json";
import { colors_by_mount_name } from "@jx3box/jx3box-data/data/xf/colors.json";
import { __imgPath } from "@jx3box/jx3box-common/data/jx3box.json";
import achieves from "@/assets/data/achieve.json";
import { first } from "lodash";
import { authorLink, getLink, getThumbnail, showAvatar } from "@jx3box/jx3box-common/js/utils";
import { mount_group } from "@jx3box/jx3box-data/data/xf/mount_group.json";
export default {
    name: "Dps",
    props: [],
    data: function() {
        return {
            xfmap,
            dps_title_img: __imgPath + "image/rank/common/dps.png",
            loading: false,

            aid: "",
            mount: "0",
            data: [
                {
                    server: "蝶恋花",
                    role: "浮烟@长安城",
                    fight_time: 123,
                    damage: 1,
                    therapy: 1,
                    body_type: "6",
                    uid: 8,
                    team_id: 2,
                    mount: "10081",
                    team_info: {
                        name: "诗画印象",
                        logo: "https://oss.jx3box.com/upload/avatar/2020/12/11/8908884.png",
                    },
                    user_info: {
                        display_name: "浮烟",
                        user_avatar: "https://oss.jx3box.com/2019/09/logo.png",
                    },
                    dps : 12345678,
                },
                {
                    server: "蝶恋花",
                    role: "浮烟@长安城",
                    fight_time: 123,
                    damage: 1,
                    therapy: 1,
                    body_type: "6",
                    uid: 8,
                    team_id: 2,
                    mount: "10081",
                    team_info: {
                        name: "诗画印象",
                        logo: "https://oss.jx3box.com/upload/avatar/2020/12/11/8908884.png",
                    },
                    user_info: {
                        display_name: "浮烟",
                        user_avatar: "https://oss.jx3box.com/2019/09/logo.png",
                    },
                    dps : 12345678,
                },
                {
                    server: "蝶恋花",
                    role: "浮烟@长安城",
                    fight_time: 123,
                    damage: 1,
                    therapy: 1,
                    body_type: "6",
                    uid: 8,
                    team_id: 2,
                    mount: "10080",
                    team_info: {
                        name: "诗画印象",
                        logo: "https://oss.jx3box.com/upload/avatar/2020/12/11/8908884.png",
                    },
                    user_info: {
                        display_name: "浮烟",
                        user_avatar: "https://oss.jx3box.com/2019/09/logo.png",
                    },
                    hps : 87654321,
                },
            ],
        };
    },
    computed: {
        id: function() {
            return this.$store.state.id;
        },
        boss_list: function() {
            return achieves[this.id] || [];
        },
        span: function() {
            return ~~(24 / Object.keys(this.boss_list).length);
        },
        params: function() {
            return {};
        },
        list: function() {
            return this.data.map((item, i) => {
                if (this.isTherapy(item.mount)) {
                    item._therapy = true;
                    item._total = item.therapy;
                    item._dhps = item.hps //Math.round(item.therapy / item.fight_time);
                } else {
                    item._therapy = false;
                    item._total = item.damage;
                    item._dhps = item.dps //Math.round(item.damage / item.fight_time);
                }
                return item;
            });
        },
    },
    methods: {
        // 路由
        go: function(query) {
            let _query = Object.assign({}, this.$route.query, query);
            return this.$router.push({ name: this.$route.name, query: _query });
        },
        changeBoss: function(val) {
            this.aid = val;
            this.go({ aid: val });
        },
        changeMount: function(val) {
            this.mount = val;
            this.go({ mount: val });
        },
        parseQuery: function() {
            for (let key in this.$route.query) {
                this[key] = this.$route.query[key];
            }
        },
        init: function() {
            this.parseQuery();
        },

        // 字段
        calcDps: function(item) {
            return item.damage;
        },
        showMountColor: function(val) {
            let xfname = xfmap[val] || "通用";
            return colors_by_mount_name[xfname] || "#fff";
        },
        isTherapy: function(mount) {
            return mount_group.治疗.includes(~~mount);
        },
    },
    filters: {
        showMountIcon: function(val) {
            return __imgPath + "image/xf/" + val + ".png";
        },
        showMountLabel: function(val) {
            return (val && xfmap[val]) || "-";
        },
        authorLink,
        showTeamLink: function(team_id) {
            return getLink("org", team_id);
        },
        showTeamLogo: function(item) {
            if (item?.team_info?.logo) {
                return getThumbnail(item?.team_info.logo, 88);
            }
            return require("../assets/img/misc/null.png");
        },
        showTeamName: function(item) {
            return item?.team_info?.name || "-";
        },
        showUserAvatar: function(item) {
            return showAvatar(item?.user_info?.user_avatar);
        },
    },
    created: function() {
        this.aid = first(Object.keys(this.boss_list));
        this.init();
    },
};
</script>

<style lang="less">
@import "../assets/css/race_vote.less";
@import "../assets/css/race_rank.less";
@import "../assets/css/race_dps.less";
</style>
