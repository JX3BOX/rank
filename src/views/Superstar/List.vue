<template>
    <div>
        <!-- 前三排名 -->
        <div class="u-sort-box">
            <div class="u-sort-3-item" :class="'u-sort-item-' + (i + 1)" v-for="(item, i) in threeData || []" :key="i">
                <div :class="'u-sort-' + (i + 1)">
                    <img :src="imgurl + (i + 1) + '.png'" />
                </div>
                <!-- 团队信息 -->
                <div class="u-team-info">
                    <a :href="teamLink(item.team_id)" target="_blank">
                        <div class="u-team-icon">
                            <el-image v-if="item.team_logo" :src="teamLogo(item.team_logo)" fit="fill"></el-image>
                            <img loading="lazy" src="../../assets/img/misc/null.png" width="100%" v-else />
                        </div>
                        <div class="u-team-name">{{ item.team_name && item.team_name.slice(0, 6) }}</div>
                        <div class="u-team-serve">{{ item.server }} {{ showTime(item.created) }}</div>
                        <div class="u-team-time">
                            战斗用时&nbsp;:&nbsp;<span>{{ showTC(item.fight_time) }}</span>
                        </div>
                    </a>
                </div>
                <!-- 团长+团员部分 -->
                <div class="u-team-list">
                    <div class="u-team-leader">
                        团长:&nbsp;
                        <!-- TODO心法图标,后续替换 -->
                        <img loading="lazy" width="30" :src="showLeaderMount(item.leaders[1])" />&nbsp;{{
                            showLeaderName(item.leaders[0]) }}
                    </div>
                    <!-- 团员list -->
                    <div class="u-team-member">
                        <div class="u-team-member-item" v-for="(member, j) in item.members" :key="j">
                            <img loading="lazy" width="20" :src="showMemberMount(member)" />&nbsp;
                            <div>{{ showMemberName(member) }}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- 后续排名部分展示 -->
        <div class="u-sort-other">
            <div class="u-sort-other-item" v-for="(item, i) in data || []" :key="i">
                <!-- 排序 -->
                <div class="u-sort-number">{{ i + 4 }}</div>
                <!-- 团队 -->
                <div class="u-team-list">
                    <!-- 左右两块布局 -->
                    <a :href="teamLink(item.team_id)" target="_blank">
                        <div class="u-team-info">
                            <div class="u-team-icon">
                                <el-image v-if="item.team_logo" :src="teamLogo(item.team_logo)" fit="fill"></el-image>
                                <img loading="lazy" src="../../assets/img/misc/null.png" width="100%" v-else />
                            </div>
                            <div class="u-team-name">{{ item.team_name && item.team_name.slice(0, 6) }}</div>
                            <div class="u-team-serve">{{ item.server }}</div>
                        </div>
                    </a>

                    <!--团长+ 团员list -->
                    <div class="u-team-people">
                        <div class="u-team-leader">
                            团长:&nbsp;
                            <!-- TODO心法图标,后续替换 -->
                            <img loading="lazy" width="30" :src="showLeaderMount(item.leaders[1])" />&nbsp;{{
                                showLeaderName(item.leaders[0]) }}
                        </div>
                        <div class="u-team-member">
                            <div class="u-team-member-item" v-for="(member, j) in item.members" :key="j">
                                <img loading="lazy" width="20" :src="showMemberMount(member)" />&nbsp;
                                <div>{{ showMemberName(member) }}</div>
                            </div>
                        </div>
                    </div>
                    <!-- 通关时间,飘在右侧顶部 -->
                    <div class="u-team-time-box">
                        <div class="u-team-time">
                            战斗用时&nbsp;:&nbsp;<span>{{ showTC(item.fight_time) }}</span>
                        </div>
                        <div class="u-serve">{{ item.server }} {{ showTime(item.created) }}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { __imgPath } from "@jx3box/jx3box-common/data/jx3box.json";
import { cloneDeep } from "lodash";
import { getTop100 } from "@/service/superstar.js";
import { showTime } from "@jx3box/jx3box-common/js/moment";
import { getThumbnail, getLink } from "@jx3box/jx3box-common/js/utils";
export default {
    components: {},

    data() {
        return {
            imgurl: "https://img.jx3box.com/topic/menpaitiantuan/",
            loading: false,
            origin_data: [],
        };
    },
    computed: {
        id: function () {
            return this.$store.state.id;
        },
        threeData: function () {
            let d = cloneDeep(this.origin_data || []),
                data = [];
            if (d.length > 3) data = d.splice(0, 3);
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
        data: function () {
            let d = cloneDeep(this.origin_data || []),
                data = [];

            if (d.length > 3) data = d.splice(3, d.length);
            console.log(data);
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
        aid: function () {
            return this.$store.state.race.superstar;
        },
    },
    created() {
        this.loadData();
    },
    mounted() { },
    methods: {
        getRankImg: function (num) {
            return __imgPath + "image/rank/common/rank_" + num + ".png";
        },
        teamLogo: function (val) {
            if (!val) return "";
            return getThumbnail(val, 120, true);
        },
        loadData: function () {
            this.loading = true;
            getTop100(this.aid, this.id)
                .then((res) => {
                    console.log(res);
                    this.origin_data = res.data.data || [];
                })
                .finally(() => {
                    this.loading = false;
                });
        },
        teamLink: function (val) {
            return getLink("org", val);
        },
        showTime: function (val) {
            return showTime(new Date(val * 1000));
        },
        showTC: function (val) {
            let s = val / 1000;
            return ~~(s / 60) + "分" + ~~(s % 60) + "秒";
        },
        showMemberMount: function (member) {
            let mount = (member && member[1]) || 0;
            let mountIcon = __imgPath + "image/xf/" + mount + ".png";
            return mountIcon;
        },
        showMemberName: function (member) {
            return (member && member[0].slice(0, 12)) || "未知";
        },
        showLeaderMount: function (mount) {
            let mountIcon = __imgPath + "image/xf/" + mount + ".png";
            return mountIcon;
        },
        showLeaderName: function (name) {
            return (name && name.slice(0, 12)) || "未知";
        },
    },
};
</script>

<style lang="less" scoped>
@import "~@/assets/css/superstar/list.less";
</style>
