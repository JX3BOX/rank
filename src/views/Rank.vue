<template>
    <div
        class="m-rank-rank"
        v-loading="loading"
        element-loading-text="加载中..."
        element-loading-spinner="el-icon-loading"
        element-loading-background="rgba(0, 0, 0, 0.8)"
    >
        <el-row class="m-rank-boss" :gutter="20">
            <el-col
                :span="4"
                v-for="(label, achieve_id) of bossList"
                :key="achieve_id"
            >
                <div
                    class="u-boss"
                    :class="{ on: achieve_id == current_boss }"
                    @click="changeBoss(achieve_id)"
                >
                    <span class="u-boss-name">{{ label }}</span>
                    <span class="u-boss-per"
                        >({{
                            total[achieve_id] > 100 ? 100 : total[achieve_id]
                        }}/100)</span
                    >
                </div>
            </el-col>
        </el-row>

        <div class="m-rank-server-filter">
            <!-- <el-select
                class="u-server"
                v-model="server"
                placeholder="请选择服务器"
                size="medium"
                @change="loadLocalData"
            >
                <el-option key="all" label="全区服百强" value=""></el-option>
                <el-option
                    v-for="item in servers"
                    :key="item"
                    :label="item"
                    :value="item"
                ></el-option>
            </el-select> -->
            <ul>
                <li @click="filterServer('')" :class="{ on: !server }">
                    全区全服
                </li>
                <li
                    v-for="item in servers"
                    :key="item"
                    @click="filterServer(item)"
                    :class="{ on: server == item }"
                >
                    {{ item }}
                </li>
            </ul>
        </div>

        <div class="m-rank-top100">
            <!-- A.列表不为空 -->
            <div class="m-rank-top100-list" v-if="data && data.length">
                <div
                    class="m-rank-top100-item"
                    v-for="(item, i) in data"
                    :key="i"
                    :class="'is-No' + (i + 1)"
                >
                    <!-- 排名 -->
                    <div class="u-ranking" :class="'is-Top' + (i + 1)">
                        <i class="u-pic"
                            ><img
                                loading="lazy"
                                :src="getRankImg(i + 1)"
                                v-if="i < 3"
                        /></i>
                        <span>{{ i + 1 }}</span>
                    </div>
                    <!-- 队徽 -->
                    <a
                        class="u-logo"
                        :href="item.team_id | teamLink"
                        target="_blank"
                    >
                        <el-image
                            v-if="item.team_logo"
                            :src="
                                i < 3
                                    ? teamLogo(item.team_logo, true)
                                    : teamLogo(item.team_logo, false)
                            "
                            fit="fill"
                        ></el-image>
                        <div class="el-image" v-else>
                            <img
                                loading="lazy"
                                src="../assets/img/misc/null.png"
                            />
                        </div>
                    </a>
                    <!-- 名称 -->
                    <div class="u-title">
                        <a
                            class="u-teamname"
                            :href="item.team_id | teamLink"
                            target="_blank"
                            ><i class="el-icon-link"></i
                            >{{
                                item.team_name && item.team_name.slice(0, 6)
                            }}</a
                        >
                        <span class="u-server">
                            {{ item.server }}
                        </span>
                        <span
                            class="u-verified el-icon-success"
                            v-if="item.verified"
                        ></span>
                        <span class="u-not-verified el-icon-warning" v-else>
                            公示期</span
                        >
                    </div>
                    <!-- 时间 -->
                    <div class="u-time">
                        <span class="u-time-finish">
                            {{ item.created | showTime }}
                        </span>
                        <span class="u-time-fight">
                            用时 : <b>{{ item.fight_time | showTC }}</b>
                        </span>
                    </div>
                    <!-- 队长 -->
                    <div class="u-leader" v-if="item.leaders">
                        <span class="u-leader-label">团长 : </span>
                        <img
                            loading="lazy"
                            class="u-mount"
                            :src="item.leaders[1] | showLeaderMount"
                        />
                        <span class="u-username">{{
                            item.leaders[0] | showLeaderName
                        }}</span>
                    </div>
                    <!-- 队员 -->
                    <el-row class="u-teammates" :gutter="10">
                        <el-col
                            class="u-member"
                            :span="i < 3 ? 8 : 4"
                            v-for="(member, j) in item.members"
                            :key="j"
                            ><div>
                                <img
                                    loading="lazy"
                                    class="u-mount"
                                    :src="member | showMemberMount"
                                />
                                <span class="u-username">{{
                                    member | showMemberName
                                }}</span>
                            </div></el-col
                        >
                    </el-row>
                </div>
            </div>

            <!-- B.列表为空 -->
            <div class="m-rank-top100-null" v-else>
                <i class="el-icon-warning-outline"></i> 暂时还没有任何记录
            </div>
        </div>
    </div>
</template>

<script>
import { __imgPath } from "@jx3box/jx3box-common/js/jx3box.json";
import achieves from "@/assets/data/achieve.json";
import servers from "@jx3box/jx3box-data/data/server/server_cn.json";
import _ from "lodash";
import { showAvatar, getThumbnail } from "@jx3box/jx3box-common/js/utils";
import { default_avatar } from "@jx3box/jx3box-common/js/jx3box.json";
import { showTime } from "@jx3box/jx3box-common/js/moment";
import { getTop100, getTopTotal } from "@/service/race.js";
export default {
    components: {},
    props: [],
    data: function() {
        return {
            current_boss: "",
            origin_data: [],
            total: "",
            loading: false,
            servers,
            server: "",
            local_data: [], //指定区服数据
        };
    },
    computed: {
        id: function() {
            return this.$store.state.id;
        },
        bossList: function() {
            return achieves[this.id] || [];
        },
        aids: function() {
            return Object.keys(this.bossList).join(",");
        },
        data: function() {
            let data = (this.server ? this.local_data : this.origin_data) || [];
            data &&
                data.forEach((team, i) => {
                    let leader_name = team.leader;
                    let members = team.teammate.split(";");
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
                    data[i]["members"] = arr;
                    data[i]["leaders"] = leader;
                });
            return data;
        },
    },
    methods: {
        changeBoss: function(val) {
            this.current_boss = val;
            this.server = "";
        },
        getRankImg: function(num) {
            return __imgPath + "image/rank/common/rank_" + num + ".png";
        },
        loadData: function() {
            if (!this.id) return;

            this.loading = true;
            getTop100(this.current_boss)
                .then((res) => {
                    this.origin_data = res.data.data;
                })
                .finally(() => {
                    this.loading = false;
                });
        },
        loadLocalData: function() {
            if (!this.server) return;

            this.loading = true;
            getTop100(this.current_boss, this.server)
                .then((res) => {
                    this.local_data = res.data.data;
                })
                .finally(() => {
                    this.loading = false;
                });
        },
        teamLogo: function(val, mode) {
            if (!val) return "";
            return mode
                ? getThumbnail(val, 120, true)
                : getThumbnail(val, 88, true);
        },
        filterServer: function(server) {
            this.server = server;
            if (server) {
                this.loadLocalData();
            } else {
                this.loadData();
            }
        },
    },
    filters: {
        teamLink: function(val) {
            return "/team/#/org/view/" + val;
        },
        showTime: function(val) {
            return showTime(new Date(val * 1000));
        },
        showTC: function(val) {
            let s = val / 1000;
            return ~~(s / 60) + "分" + ~~(s % 60) + "秒";
        },
        showMemberMount: function(member) {
            let mount = (member && member[1]) || 0;
            let mountIcon = __imgPath + "image/xf/" + mount + ".png";
            return mountIcon;
        },
        showMemberName: function(member) {
            return (member && member[0].slice(0, 12)) || "未知";
        },
        showLeaderMount: function(mount) {
            let mountIcon = __imgPath + "image/xf/" + mount + ".png";
            return mountIcon;
        },
        showLeaderName: function(name) {
            return (name && name.slice(0, 12)) || "未知";
        },
    },
    created: function() {
        this.current_boss = _.first(Object.keys(this.bossList));

        getTopTotal(this.aids).then((res) => {
            this.total = res.data.data;
        });
    },
    mounted() {
        if (this.$route.query.aid) {
            this.current_boss = this.$route.query.aid;
        }
        this.loadData();
    },
    watch: {
        current_boss: function() {
            this.loadData();
        },
        "$route.query.aid": function(val) {
            this.current_boss = val;
            this.loadData();
        },
    },
};
</script>
<style lang="less">
@import "../assets/css/race_rank.less";
</style>
