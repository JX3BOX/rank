<template>
<!-- 投票竞猜页 -->
    <div
        class="m-rank-vote"
        v-loading="loading"
        element-loading-text="加载中..."
        element-loading-spinner="el-icon-loading"
        element-loading-background="rgba(0, 0, 0, 0.8)"
    >
        <div class="m-rank-vote-title">
            <img :src="vote_title_img" />
        </div>
        <div class="m-rank-vote-header">
            <div class="u-tip">
                <i class="el-icon-info"></i> 规则说明：10月29日开启通道，投票结榜后关闭通道，竞猜11月13日关闭通道，根据竞猜押冠数和投票数最终产生人气团队奖。<br> 
                【投票】每天可给3支不同团队各投1票，<b>投票参与用户产生500名现金红包奖</b>（最低金额8.88元，最高金额88.88元）。<br>
                【竞猜】登录推栏，进入<b>「社区→发现→活动」</b>参与竞猜，押你看好夺冠的队伍，最终在竞猜成功的用户里产生30名幸运用户。
            </div>
        </div>
        <table class="m-rank-vote-table">
            <thead>
                <tr>
                    <th width="120px">排名</th>
                    <th width="120px"></th>
                    <th width="120px">
                        团队
                        <el-popover placement="top" width="220" trigger="click">
                            <el-input
                                v-model="inputTeamname"
                                placeholder="输入团队名关键字"
                                @input="filterTeamname"
                                clearable
                            ></el-input>
                            <el-button slot="reference" type="text"
                                ><i class="el-icon-search u-search-team"></i
                            ></el-button>
                        </el-popover>
                    </th>
                    <th>
                        <el-select
                            class="u-server u-select"
                            v-model="server"
                            placeholder="选择服务器"
                            size="mini"
                            @change="filterServer"
                        >
                            <el-option key="all" label="全部服务器" value="">
                            </el-option>
                            <el-option
                                v-for="item in servers"
                                :key="item"
                                :label="item"
                                :value="item"
                            >
                            </el-option>
                        </el-select>
                    </th>
                    <th>人气</th>
                    <th>参与投票</th>
                </tr>
            </thead>
            <tbody :class="{isFiltered:!!server}">
                <tr v-for="(item, i) in filterData" :key="i" :class="{isMatched:!!item.matched}">
                    <td>
                        <i class="u-ranking">{{ i + 1 }}</i>
                    </td>
                    <td>
                        <a :href="item.team_id | teamLink" target="_blank">
                            <img
                                loading="lazy"
                                class="u-logo"
                                :src="item.logo | teamLogo"
                                :alt="item.name"
                            />
                        </a>
                    </td>
                    <td>
                        <a
                            class="u-name"
                            :href="item.team_id | teamLink"
                            target="_blank"
                        >
                            {{ item.name }}
                        </a>
                    </td>
                    <td>
                        <span class="u-server">{{ item.server }}</span>
                    </td>
                    <td>
                        <span class="u-count">{{ item.guess || 0 }}</span>
                    </td>
                    <!-- <td>
                        <span class="u-count">{{ item.votes || 0 }}</span>
                    </td> -->
                    <td class="u-vote-wapper">
                        <button
                            class="u-vote"
                            :class="{ disabled: item.clicked || !event_status }"
                            :disabled="item.clicked || !event_status"
                            @click="vote(item)"
                        ></button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import {
    __imgPath,
    default_avatar,
} from "@jx3box/jx3box-common/data/jx3box.json";
import { getAllTeams } from "@/service/team.js";
import { getThumbnail,getLink } from "@jx3box/jx3box-common/js/utils";
import { doVote } from "@/service/race.js";
import User from "@jx3box/jx3box-common/js/user.js";
import getWechatIframe from "@/assets/js/wxpop.js";
import servers from "@jx3box/jx3box-data/data/server/server_list.json";
export default {
    props: [],
    data: function() {
        return {
            vote_title_img: __imgPath + "image/rank/common/vote.png",
            data: [],
            filterData: [],
            isLogin: User.isLogin(),
            dialog_visible: false,
            loading: false,
            inputTeamname: "",
            servers,
            server:'',
        };
    },
    computed: {
        id: function() {
            return this.$store.state.id;
        },
        event_status : function (){
            return this.$store.state.race.status || false
        }
    },
    methods: {
        vote: function(item) {
            // 检查登录
            if (!this.isLogin) {
                User.toLogin();
                return;
            }

            // 检查微信
            // if (!User.hasBindwx()) {
            //     this.$alert(getWechatIframe(), "提示", {
            //         confirmButtonText: "确定",
            //         dangerouslyUseHTMLString: true,
            //     });
            //     return;
            // }

            doVote(this.id, item.team_id).then((res) => {
                this.$message({
                    message: "投票成功",
                    type: "success",
                    duration: 1000,
                });

                item.clicked = true;
                item.guess = ~~item.guess + 1;
                this.$forceUpdate();
            });
        },
        filterTeamname(val) {
            if (val === "") {
                this.filterData = this.data;
            }
            this.filterData = this.data.filter((item) => {
                return item.name.includes(val);
            });
        },
        filterServer(){
            if(this.server){
                this.data.forEach((team) => {
                    if(this.server == team.server){
                        team.matched = true
                    }else{
                        team.matched = false
                    }
                })
            }else{
                this.data.forEach((team) => {
                    team.matched = false
                })
            }
        }
    },
    filters: {
        teamLogo: function(val) {
            return val
                ? getThumbnail(val, 48, true)
                : getThumbnail(default_avatar, 48, true);
        },
        teamLink: function(val) {
            // return "/team/#/org/view/" + val;
            return getLink('org',val);
        },
    },
    created: function() {
        this.loading = true;
        getAllTeams(this.id, {
            return_all: 1,
        })
            .then((res) => {
                this.data = res.data.data.list;
                this.filterData = this.data;
            })
            .finally(() => {
                this.loading = false;
            });
    },
    mounted: function() {
        // let params = this.$route.query;
        // if (params.bind_wx) {
        //     User.refresh("bind_wx", params.bind_wx);
        // }
    },
    components: {},
};
</script>

<style lang="less">
@import "../assets/css/race_vote.less";
</style>
