<template>
    <div class="m-rank-rank">
        <ul class="m-rank-boss">
            <li
                class="u-boss"
                v-for="(label, achieve_id) of bossList"
                :key="achieve_id"
                :label="achieve_id"
                :class="{ on: achieve_id == current_boss }"
                @click="changeBoss(achieve_id)"
            >
                {{ label }}
            </li>
        </ul>

        <!-- TODO:成绩数不够时 -->
        <div class="m-rank-top100">
            <div class="content-upper-wrapper">
                <div
                    class="upper-card-wrapper"
                    v-for="(item, i) in data"
                    :key="i"
                    :class="{isRow : i >= 3}"
                >
                    <div class="upper-card-medal" v-if="i < 3"></div>
                    <div class="upper-card-info">
                        <div class="upper-card-info-main">
                            <el-image
                                class="u-logo"
                                v-if="item.team_logo"
                                :src="item.team_logo | teamLogo"
                                fit="fill"
                            ></el-image>
                            <img
                                class="u-logo"
                                src="../assets/img/misc/null.png"
                                v-else
                            />
                            <div class="team-name">
                                <span class="u-name team-name-text">{{
                                    item.team_name && item.team_name.slice(0, 6)
                                }}</span>
                                <span
                                    class="u-verified el-icon-success"
                                    v-if="item.verified"
                                ></span>
                                <span
                                    class="u-not-verified el-icon-warning"
                                    v-else
                                ></span>
                                <a
                                    class="u-link"
                                    :href="item.team_id | teamLink"
                                    >查看详情</a
                                >
                            </div>
                            <div class="team-server">
                                服务器 : {{ item.server }}
                            </div>
                            <el-divider></el-divider>
                            <div class="team-time">
                                {{ item.finish_time | showTime }}
                            </div>
                        </div>
                        <div class="upper-card-info-extra">
                            用时 : {{ item.fight_time | showTC }}
                        </div>
                    </div>
                    <div class="upper-card-detail">
                        <div class="detail-title">
                            <span>团队成员</span>
                        </div>
                        <!-- <div class="detail-subtitle">
                            团长：
                            <el-image
                                class="detail-subtitle-icon"
                                :src="tmpXfIconPath"
                                fill="fit"
                            ></el-image>
                            六个字团长名
                        </div> -->
                        <div class="detail-member-wrapper">
                            <div
                                class="detail-member-each"
                                v-for="(member, i) in item.members"
                                :key="i"
                            >
                                <el-image
                                    class="detail-member-icon"
                                    :src="member | showMemberMount"
                                    fill="fit"
                                ></el-image>
                                {{member | showMemberName}}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- <div class="content-middle-wrapper">
                <div class="middle-card-wrapper">
                    <div class="card-rank">1</div>
                    <el-image
                        src="https://iph.href.lu/138x138?text=团长头像"
                        fit="fill"
                        class="card-avatar"
                    ></el-image>
                    <div class="card-name">
                        <span class="team-name-text">队伍名</span>
                        <div class="is-verified-icon"></div>
                        <el-link type="info">查看详情</el-link>
                    </div>
                    <div class="card-member">
                        <div class="member-props">
                            <el-divider></el-divider>
                            <span class="props-title">团队成员</span>
                            <span class="props-server">服务器：围魏救赵</span>
                        </div>
                        <div class="member-detail">
                            <div class="member-leader">
                                团长：
                                <el-image
                                    class="detail-subtitle-icon"
                                    :src="tmpXfIconPath"
                                    fill="fit"
                                ></el-image>
                                六个字团长名
                            </div>
                            <div class="detail-member-wrapper">
                                <div
                                    class="detail-member-each"
                                    v-for="count in 24"
                                    :key="count"
                                >
                                    <el-image
                                        class="detail-member-icon"
                                        :src="tmpXfIconPath"
                                        fill="fit"
                                    ></el-image>
                                    一一一一一一@龙争虎斗
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card-time">
                        <div class="card-time-main">2020-05-27 13:21:49</div>
                        <div class="card-time-sub">用时：13分41秒</div>
                    </div>
                    <div class="card-logo"></div>
                </div>
            </div> -->
        </div>
    </div>
</template>

<script>
import { __imgPath } from "@jx3box/jx3box-common/js/jx3box.json";
import achieves from "@/assets/data/achieve.json";
import _ from "lodash";
import { showAvatar } from "@jx3box/jx3box-common/js/utils";
import { default_avatar } from "@jx3box/jx3box-common/js/jx3box.json";
import { showTime } from "@jx3box/jx3box-common/js/moment";
export default {
    components: {},
    props: [],
    data: function() {
        return {
            current_boss: "",
            test_data: [
                {
                    ID: 1479,
                    guid: "18014398509483875",
                    server: "山雨欲来",
                    role: "南宫伯",
                    leader: "南宫伯假如名字很长啊啊啊啊啊",
                    teammate:
                        "南宫伯,10014,18014398509483875;吴冷旭,10464,18014398509504572,南宫伯,10014,18014398509483875;吴冷旭,10464,18014398509504572,南宫伯,10014,18014398509483875;吴冷旭,10464,18014398509504572,南宫伯,10014,18014398509483875;吴冷旭,10464,18014398509504572,南宫伯,10014,18014398509483875;吴冷旭,10464,18014398509504572,南宫伯,10014,18014398509483875;吴冷旭,10464,18014398509504572,南宫伯,10014,18014398509483875;吴冷旭,10464,18014398509504572",
                    achieve_id: 293,
                    client_id: "40C17383C08EC0D0",
                    finish_time: 1602578255,
                    fight_time: 6044,
                    is_leader: true,
                    uid: 2,
                    team_id: 142,
                    remark: "",
                    created: 1602578256,
                    date_str: "2020-10-13 16:37:36",
                    re_uid: 0,
                    re_guid: 0,
                    re_clientid: 0,
                    re_ip: 0,
                    team_logo:
                        "https://console.cnyixun.com/upload/avatar/2020/10/13/9120143.jpg",
                    team_name: "南宫伯假如名字很长啊啊啊啊啊",
                    verified: 1,
                },
                {
                    ID: 1479,
                    guid: "18014398509483875",
                    server: "山雨欲来",
                    role: "南宫伯",
                    leader: "南宫伯",
                    teammate:
                        "南宫伯,10014,18014398509483875;吴冷旭,10464,18014398509504572",
                    achieve_id: 293,
                    client_id: "40C17383C08EC0D0",
                    finish_time: 1602578255,
                    fight_time: 6044,
                    is_leader: true,
                    uid: 2,
                    team_id: 142,
                    remark: "",
                    created: 1602578256,
                    date_str: "2020-10-13 16:37:36",
                    re_uid: 0,
                    re_guid: 0,
                    re_clientid: 0,
                    re_ip: 0,
                    team_logo: "",
                    team_name: "南宫伯",
                    verified: 0,
                },
                {
                    ID: 1479,
                    guid: "18014398509483875",
                    server: "山雨欲来",
                    role: "南宫伯",
                    leader: "南宫伯",
                    teammate:
                        "南宫伯,10014,18014398509483875;吴冷旭,10464,18014398509504572",
                    achieve_id: 293,
                    client_id: "40C17383C08EC0D0",
                    finish_time: 1602578255,
                    fight_time: 6044,
                    is_leader: true,
                    uid: 2,
                    team_id: 142,
                    remark: "",
                    created: 1602578256,
                    date_str: "2020-10-13 16:37:36",
                    re_uid: 0,
                    re_guid: 0,
                    re_clientid: 0,
                    re_ip: 0,
                    team_logo: "",
                    team_name: "南宫伯",
                    verified: 0,
                },
                {
                    ID: 1479,
                    guid: "18014398509483875",
                    server: "山雨欲来",
                    role: "南宫伯",
                    leader: "南宫伯",
                    teammate:
                        "南宫伯,10014,18014398509483875;吴冷旭,10464,18014398509504572",
                    achieve_id: 293,
                    client_id: "40C17383C08EC0D0",
                    finish_time: 1602578255,
                    fight_time: 6044,
                    is_leader: true,
                    uid: 2,
                    team_id: 142,
                    remark: "",
                    created: 1602578256,
                    date_str: "2020-10-13 16:37:36",
                    re_uid: 0,
                    re_guid: 0,
                    re_clientid: 0,
                    re_ip: 0,
                    team_logo: "",
                    team_name: "南宫伯",
                    verified: 0,
                },
            ],
            tmpXfIconPath: __imgPath + "image/xf/10081.png",
        };
    },
    computed: {
        id: function() {
            return this.$store.state.id;
        },
        bossList: function() {
            return achieves[this.id] || [];
        },
        data: function() {
            // return this.$store.state.race || [];
            let data = this.test_data || [];
            // console.log(data);
            data.forEach((team, i) => {
                let members = team.teammate.split(";");
                members.forEach((member, j) => {
                    members[j] = member.split(",");
                });
                data[i]["members"] = members;
            });
            return data;
        },
        top_3: function() {
            return this.data && this.data.slice(0, 3);
        },
        top_100: function() {
            return this.data && this.data.slice(3, 100);
        },
    },
    created: function() {
        this.current_boss = _.first(Object.keys(this.bossList));
    },
    methods: {
        changeBoss: function(val) {
            this.current_boss = val;
        },
    },
    filters: {
        teamLink: function(val) {
            return "/team/#/org/view/" + val;
        },
        teamLogo: function(val) {
            return val ? showAvatar(val, "l") : default_avatar;
        },
        showTime: function(val) {
            return showTime(new Date(val * 1000));
        },
        showTC: function(val) {
            let s = val / 1000;
            return ~~(s / 60) + "分" + ~~(s % 60) + "秒";
        },
        showMemberMount : function (member){
            let mount = member && member[1] || 0
            let mountIcon = __imgPath + 'image/xf/' + mount + '.png'
            return mountIcon
        },
        showMemberName : function (member){
            return member && member[0].slice(0,6) || '未知'
        }
    },
    mounted() {
        console.log(this.data);
    },
};
</script>
<style scoped lang="less">
@import "../assets/css/race_rank.less";
</style>
