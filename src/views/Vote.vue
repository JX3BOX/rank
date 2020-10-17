<template>
    <div class="m-rank-vote">
        <div class="m-rank-vote-title">
            <img :src="vote_title_img" />
            <!-- TODO:有奖竞猜 -->
        </div>
        <div class="m-rank-vote-header">
            <div class="u-tip">
                <i class="el-icon-info"></i> 规则说明：需<a
                    href="/account/login/"
                    target="_blank"
                    >登录</a
                >并有<a href="/dashboard/#/connect" target="_blank">绑定微信</a
                >的用户方可投票，每天可给3支不同团队投1票。10月29日开启通道，结榜时关闭通道。
            </div>
        </div>
        <table class="m-rank-vote-table">
            <thead>
                <tr>
                    <th width="120px">排名</th>
                    <th width="120px"></th>
                    <th width="120px">团队</th>
                    <th>服务器</th>
                    <th>票数</th>
                    <th>参与投票</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, i) in data" :key="i">
                    <td>
                        <i class="u-ranking">{{ i }}</i>
                    </td>
                    <td>
                        <img
                            class="u-logo"
                            :src="item.team.logo | teamLogo"
                            :alt="item.team.name"
                        />
                    </td>
                    <td>
                        <a
                            class="u-name"
                            :href="item.team.ID | teamLink"
                            target="_blank"
                        >
                            {{ item.team.name }}
                        </a>
                    </td>
                    <td>
                        <span class="u-server">{{ item.team.server }}</span>
                    </td>
                    <td>
                        <span class="u-count">{{ item.record.votes }}</span>
                    </td>
                    <td class="u-vote-wapper">
                        <button
                            class="u-vote"
                            @click="vote(item.team.ID)"
                        ></button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import { __imgPath } from "@jx3box/jx3box-common/js/jx3box.json";
import { getAllTeams } from "@/service/team.js";
import { getThumbnail } from "@jx3box/jx3box-common/js/utils";
import { doVote } from "@/service/race.js";
import User from "@jx3box/jx3box-common/js/user.js";
export default {
    props: [],
    data: function() {
        return {
            vote_title_img: __imgPath + "image/rank/common/vote.png",
            data: [],
            isLogin: User.isLogin(),
        };
    },
    computed: {
        id: function() {
            return this.$store.state.id;
        },
    },
    methods: {
        vote: function(team_id) {
            if (!this.isLogin) {
                User.toLogin();
                return
            }
            // TODO:微信判断

            doVote(this.id, team_id).then((res) => {
                this.$message({
                    message: "投票成功",
                    type: "success",
                    duration : 1000
                });
            });
        },
    },
    filters: {
        teamLogo: function(val) {
            return val ? getThumbnail(val, 48, true) : default_avatar;
        },
        teamLink: function(val) {
            return "/team/#/org/view/" + val;
        },
    },
    created: function() {
        getAllTeams(this.id, {
            orderBy: "votes",
        }).then((res) => {
            this.data = res.data.data.list;
        });
    },
    components: {},
};
</script>

<style lang="less">
@import "../assets/css/race_vote.less";
</style>
