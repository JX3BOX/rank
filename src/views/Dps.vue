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
                <li class="u-mount" :class="{ on: xfid == mount }" v-for="(label, xfid) in xfmap" :key="'xf-' + xfid" @click="changeMount(xfid)">
                    <img :src="xfid | showMountIcon" :title="label" />
                </li>
            </ul>
        </div>
        <!-- 数据列表 -->
        <div class="m-rank-dps-list" v-if="list && list.length">
            <el-row class="u-item u-head" :gutter="20">
                <el-col :span="1"><div class="u-ranking">排名</div></el-col>
                <el-col :span="2">
                    <div class="u-mount">
                        <span v-if="~~mount">心法</span>
                        <el-dropdown trigger="click" v-else>
                            <span class="el-dropdown-link"> {{ ~~filterMount ? xfmap[filterMount] : "全部心法" }}<i class="el-icon-arrow-down el-icon--right"></i> </span>
                            <el-dropdown-menu slot="dropdown" append-to-body class="u-server-pop">
                                <el-dropdown-item @click.native="filterMount = '0'" :class="{ active: filterMount === '0' }">全部心法</el-dropdown-item>
                                <el-dropdown-item v-for="(value, key) in filterXf" :key="key" @click.native="filterMount = key" :class="{ active: filterMount === key }">{{ value }}</el-dropdown-item>
                            </el-dropdown-menu>
                        </el-dropdown>
                    </div>
                </el-col>
                <el-col :span="2">
                    <div class="u-server">
                        <el-dropdown trigger="click">
                            <span class="el-dropdown-link"> {{ server }}<i class="el-icon-arrow-down el-icon--right"></i> </span>
                            <el-dropdown-menu slot="dropdown" append-to-body class="u-server-pop">
                                <el-dropdown-item @click.native="server = '全部服务器'" :class="{ active: server === '全部服务器' }">全部服务器</el-dropdown-item>
                                <el-dropdown-item v-for="_server in server_std" :key="_server" @click.native="server = _server" :class="{ active: server === _server }">{{ _server }}</el-dropdown-item>
                            </el-dropdown-menu>
                        </el-dropdown>
                    </div>
                </el-col>
                <el-col :span="3"><div class="u-team">来自团队</div></el-col>
                <el-col :span="4"><div class="u-role">角色名</div></el-col>
                <el-col :span="4"><div class="u-dps">DPS/HPS</div></el-col>
                <el-col :span="8"><div class="u-more">击杀详情</div></el-col>
            </el-row>
            <template v-for="(item, i) in list">
                <el-row class="u-item" :gutter="20" :key="'dps' + i" v-show="(server === '全部服务器' ? true : item.server == server) && (filterMount === '0' ? true : item.mount == filterMount)">
                    <el-col :span="1"
                        ><div class="u-ranking">{{ i + 1 }}</div></el-col
                    >
                    <el-col :span="2"
                        ><div class="u-mount" :style="{ color: showMountColor(item.mount) }"><img :src="item.mount | showMountIcon" />{{ item.mount | showMountLabel }}</div></el-col
                    >
                    <el-col :span="2"
                        ><div class="u-server">{{ item.server }}</div></el-col
                    >
                    <el-col :span="3">
                        <div class="u-team">
                            <a :href="item.team_id | showTeamLink" target="_blank" v-if="item.team_id"
                                ><img :src="item | showTeamLogo" /><span>{{ item | showTeamName }}</span></a
                            ><span v-else>-</span>
                        </div></el-col
                    >
                    <el-col :span="4"
                        ><div class="u-role">
                            <a :href="item.uid | authorLink" target="_blank" v-if="item.uid"><img :src="item | showUserAvatar" />{{ item.role }}</a>
                            <span v-else>{{ item.role }}</span>
                        </div></el-col
                    >
                    <el-col :span="4" :class="i > 10 ? `u-dps-10` : `u-dps-${i}`"
                        ><div class="u-dps u-bar" :style="{ background: showMountColor(item.mount), width: getBarWidth(item._dhps) }">
                            {{ showDHPS(item) }}
                        </div></el-col
                    >
                    <el-col :span="6"
                        ><div class="u-total">
                            <span class="u-damage"
                                ><span>{{ isTherapy(item.mount) ? "总治疗" : "总伤害" }}</span> <b>{{ item._total }}</b></span
                            >
                            <span class="u-time">
                                <span>战斗时间</span>
                                <b>{{ item.fight_time / 1000 }}</b
                                >秒
                            </span>
                        </div></el-col
                    >
                    <el-col :span="2" class="u-misc">
                        <el-popover with="1260" popper-class="u-dps-rank-pop">
                            <rank-item class="u-dps-rank-item" :show-index="false" :item="formatItem(item)" :i="4" :span="8"></rank-item>
                            <span class="u-more" slot="reference">查看</span>
                        </el-popover>
                        <span class="u-misc-div">|</span>
                        <span class="u-log">日志</span>
                    </el-col>
                </el-row>
            </template>
        </div>
    </div>
</template>

<script>
import xfmap from "@jx3box/jx3box-data/data/xf/xfid.json";
import { colors_by_mount_name } from "@jx3box/jx3box-data/data/xf/colors.json";
import { __imgPath } from "@jx3box/jx3box-common/data/jx3box.json";
import { authorLink, getLink, getThumbnail, showAvatar } from "@jx3box/jx3box-common/js/utils";
import { mount_group } from "@jx3box/jx3box-data/data/xf/mount_group.json";
import server_std from "@jx3box/jx3box-data/data/server/server_cn";

import achieves from "@/assets/data/achieve.json";

import { getMountDpsRace } from "@/service/race";

import { first, cloneDeep } from "lodash";

import rank_item from "@/components/rank_item.vue";

export default {
    name: "Dps",
    props: [],
    components: {
        "rank-item": rank_item,
    },
    data: function() {
        return {
            xfmap,
            dps_title_img: __imgPath + "image/rank/common/dps.png",
            loading: false,

            aid: "",
            mount: "0",
            data: [],
            server: "全部服务器",
            server_std,
            filterMount: "0",
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
            return {
                mount: this.mount,
                limit: 100,
                fight_time_min: 300000,
                order_by: "dps",
            };
        },
        list: function() {
            return this.data.map((item, i) => {
                if (this.isTherapy(item.mount)) {
                    item._therapy = true;
                    item._total = item.therapy || item.damage;
                    item._dhps = item.hps || 0; //Math.round(item.therapy / item.fight_time);
                } else {
                    item._therapy = false;
                    item._total = item.damage;
                    item._dhps = item.dps || 0; //Math.round(item.damage / item.fight_time);
                }
                return item;
            });
        },
        filterXf() {
            const _xfmap = cloneDeep(xfmap);
            delete _xfmap["0"];
            return _xfmap;
        },
        max_dps: function() {
            let dps_bucket = this.data.map((item, i) => {
                return item.dps || item.hps;
            });
            return Math.max(...dps_bucket);
        },
    },
    watch: {
        params: {
            deep: true,
            handler() {
                this.loadMountDps();
            },
        },
        aid() {
            this.loadMountDps();
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
            this.loadMountDps();
        },
        loadMountDps() {
            this.loading = true;
            getMountDpsRace(this.aid, this.params)
                .then((res) => {
                    this.data = res?.data?.data || [];
                })
                .finally(() => {
                    this.loading = false;
                });
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
        formatItem(data) {
            let leader_name = data.leader;
            let members = data.teammate.split(";");
            let arr = [];
            let leader = "";
            members.forEach((member, j) => {
                let result = member.split(",");
                if (result[0] != leader_name) {
                    arr.push(result);
                } else {
                    leader = result;
                }
            });
            data["members"] = arr;
            data["leaders"] = leader;
            data["team_logo"] = data?.team_info?.logo;
            data["team_name"] = data?.team_info?.name;

            return data;
        },
        getBarWidth(dps) {
            return (dps / this.max_dps).toFixed(4) * 100 + "%";
        },
        showDHPS(item){
            if(item.mount == 10448){
                return item.dps + ' / ' + item.hps
            }else{
                return item._dhps
            }
        }
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
