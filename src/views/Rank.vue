<template>
    <div class="m-rank-rank">
        <!-- 1.boss tab -->
        <!-- a.使用this.$store.state.race中的achieve_ids数据，获得当前活动的关联成就ID
        b.通过@/assets/data/achieve.json中自建的成就id与boss名关联展示该tab列表 -->

        <!-- 2.指定成就id的排名列表 -->
        <!-- a.前3个索引需要加额外class处理样式
        b.团队链接 /team/org/view/$id
        c.个人链接 使用Utils.authorLink($uid)
        d.心法图标 __img + 'image/xf/' + $id + .png -->

        <div class="m-rank-rank-header">
            <el-radio-group v-model="bossRadioValue">
                <el-radio-button
                    v-for="(boss, index) of bossList"
                    :key="boss"
                    :label="index"
                    >{{ boss }}</el-radio-button
                >
            </el-radio-group>
        </div>
        <!-- 2.指定成就id的排名列表 -->
        <!-- a.前3个索引需要加额外class处理样式 b.团队链接 /team/org/view/$id
        c.个人链接 使用Utils.authorLink($uid) d.心法图标 __img + 'image/xf/' +
        $id + .png -->
        <div class="m-rank-rank-content">
            <div class="content-upper-wrapper">
                <div class="upper-card-wrapper">
                    <div class="upper-card-medal"></div>
                    <div class="upper-card-info">
                        <div class="upper-card-info-main">
                            <el-image
                                src="https://iph.href.lu/138x138?text=团长头像"
                                fit="fill"
                            ></el-image>
                            <div class="team-name">
                                <span class="team-name-text">队伍名</span>
                                <div class="is-verified-icon"></div>
                                <el-link type="info">查看详情</el-link>
                            </div>
                            <div class="team-server">服务器：围魏救赵</div>
                            <el-divider></el-divider>
                            <div class="team-time">2020-05-27 00:01:15</div>
                        </div>
                        <div class="upper-card-info-extra">用时 : 12分59秒</div>
                    </div>
                    <div class="upper-card-detail">
                        <div class="detail-title">
                            <span>团队成员</span>
                        </div>
                        <div class="detail-subtitle">
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
                                一一一一一一
                            </div>
                        </div>
                    </div>
                </div>
                <div class="upper-card-wrapper">
                    <div class="upper-card-medal"></div>
                    <div class="upper-card-info">
                        <div class="upper-card-info-main">
                            <el-image
                                src="https://iph.href.lu/138x138?text=团长头像"
                                fit="fill"
                            ></el-image>
                            <div class="team-name">
                                <span class="team-name-text">队伍名</span>
                                <div class="is-verified-icon"></div>
                                <el-link type="info">查看详情</el-link>
                            </div>
                            <div class="team-server">服务器：围魏救赵</div>
                            <el-divider></el-divider>
                            <div class="team-time">2020-05-27 00:01:15</div>
                        </div>
                        <div class="upper-card-info-extra">用时 : 12分59秒</div>
                    </div>
                    <div class="upper-card-detail">
                        <div class="detail-title">
                            <span>团队成员</span>
                        </div>
                        <div class="detail-subtitle">
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
                                一一一一一一
                            </div>
                        </div>
                    </div>
                </div>
                <div class="upper-card-wrapper">
                    <div class="upper-card-medal"></div>
                    <div class="upper-card-info">
                        <div class="upper-card-info-main">
                            <el-image
                                src="https://iph.href.lu/138x138?text=团长头像"
                                fit="fill"
                            ></el-image>
                            <div class="team-name">
                                <span class="team-name-text">队伍名</span>
                                <div class="is-verified-icon"></div>
                                <el-link type="info">查看详情</el-link>
                            </div>
                            <div class="team-server">服务器：围魏救赵</div>
                            <el-divider></el-divider>
                            <div class="team-time">2020-05-27 00:01:15</div>
                        </div>
                        <div class="upper-card-info-extra">用时 : 12分59秒</div>
                    </div>
                    <div class="upper-card-detail">
                        <div class="detail-title">
                            <span>团队成员</span>
                        </div>
                        <div class="detail-subtitle">
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
                                一一一一一一
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="content-middle-wrapper">
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
            </div>
        </div>
    </div>
</template>

<script>
import { __imgPath } from "@jx3box/jx3box-common/js/jx3box.json";
import { __achieves } from "@/assets/data/achieve.json";
export default {
    components: {},
    props: [],
    data: function () {
        return {
            eventId: -1,
            bossList: [],
            bossRadioValue: 0,
            tmpXfIconPath: __imgPath + "image/xf/10081.png",
        };
    },
    computed: {},
    watch: {
        "$store.state.race": function () {
            if (this.$store.state.race) {
                this.eventId = this.$store.state.race.ID;
                let achieve_ids = this.$store.state.race.achieve_ids.split(",");
                let bossList = [];
                let bossDict = __achieves[this.eventId];
                console.log(achieve_ids);
                achieve_ids.forEach((element) => {
                    bossList.push(bossDict[element]);
                });
                this.bossList = bossList;
                console.log(bossList);
            }
        },
    },
    created: function () {
        console.log(this.$store.state["id"]);
    },
    mounted() {},
    methods: {},
    filters: {},
};
</script>

<style lang="less">
@import "../assets/css/race_rank.less";
</style>