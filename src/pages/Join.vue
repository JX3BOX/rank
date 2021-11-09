<template>
    <div id="app" class="m-rank-container">
        <Header></Header>
        <div class="m-rank-primary">
            <div class="m-rank-join">
                <div class="m-rank-header">
                    <img class="u-logo" :src="LOGO" />
                </div>
                <div class="m-rank-content" v-if="isLogin">
                    <div class="m-join m-join-team" v-if="!status">
                        <h1 class="m-join-title">报名入口</h1>
                        <el-alert
                            class="u-warning"
                            type="warning"
                            show-icon
                        >
                        <span slot="title">
                            仅认证团队可报名，可在「<a href="https://www.jx3box.com/team/" target="_blank">团队应用</a>」-「<a href="https://www.jx3box.com/team/org/manage/"  target="_blank">团队管理</a>」中提交团队认证（已认证过的无需再次认证）。<br>
                            请务必正确填写所有资料，报名后不可取消，亦不可再更改资料，认证团长Q群<a href="https://jq.qq.com/?_wv=1027&k=rHiKKYEV">【1048059072】</a>（必加）。
                        </span>
                        </el-alert>
                        <el-form
                            class="m-join-form"
                            ref="form"
                            :model="form"
                            label-width="80px"
                        >
                            <el-form-item label="报名活动">
                                <el-select
                                    v-model="form.event_id"
                                    placeholder="请选择活动"
                                >
                                    <el-option
                                        v-for="event in events"
                                        :key="event.ID"
                                        :label="event.name"
                                        :value="event.ID"
                                    >
                                    </el-option>
                                </el-select>
                            </el-form-item>
                            <el-form-item label="选择团队">
                                <el-select
                                    v-model="form.team_id"
                                    placeholder="请选择团队"
                                    @change="updateTeam"
                                >
                                    <el-option
                                        v-for="team in teams"
                                        :key="team.ID"
                                        :label="team.name"
                                        :value="team.ID"
                                    ><span class="m-join-team-item"><b class="u-team-name">{{team.name}}</b><span class="u-team-server">{{team.server}}</span></span>
                                    </el-option>
                                </el-select>
                                <div
                                    class="u-tip"
                                    v-if="!teams || !teams.length"
                                >
                                    还没有团队？<a href="/team" target="_blank"
                                        >创建团队</a
                                    >
                                </div>
                            </el-form-item>
                            <el-form-item label="参赛宣言">
                                <el-input
                                    v-model="form.slogan"
                                    placeholder="为您的团队打CALL,将显示在游戏内"
                                    :maxlength="20"
                                    show-word-limit
                                ></el-input>
                            </el-form-item>
                            <div class="u-btns">
                                <el-button
                                    class="u-btn"
                                    type="primary"
                                    @click="submit"
                                    :disabled="!ready"
                                    >报名</el-button
                                >
                            </div>
                        </el-form>
                    </div>
                    <div class="m-join m-join-done" v-else>
                        <h1 class="u-title">已报名</h1>
                        <div>
                            <p>
                                活动：<strong>{{ result.event.name }}</strong>
                            </p>
                            <p>
                                团队：<strong>{{
                                    result.eventRecord.name
                                }}</strong>
                            </p>
                        </div>
                    </div>
                    <div class="u-footer">
                        <a href="/notice/32280" target="_blank"
                            ><i class="el-icon-info"></i>
                            <b>点击查看活动规则详情</b></a
                        >
                    </div>
                </div>
                <div class="m-rank-content m-rank-null" v-else>
                    <p>你尚未登录</p>
                    <el-button type="primary" @click="goLogin">登录</el-button>
                </div>
            </div>
        </div>
        <Footer></Footer>
    </div>
</template>

<script>
import _ from "lodash";
import PICS from "@/assets/js/pics.js";
import { getEvents } from "@/service/event.js";
import { joinEvent, hasJoined } from "@/service/join.js";
import { getMyTeams } from "@/service/team.js";
import User from "@jx3box/jx3box-common/js/user.js";
export default {
    name: "App",
    props: [],
    data: function() {
        return {
            LOGO: PICS.LOGO,
            form: {
                event_id: "",
                team_id: "",
                slogan: "",
            },
            events: [],
            teams: [],
            status: false,      //是否已经报名
            isLogin: User.isLogin(),
            result: {
                event: {
                    name: "活动名称",
                },
                eventRecord: {
                    name: "团队名称",
                },
            },
            processing:false,   //按钮提交锁定
        };
    },
    computed: {
        ready: function() {
            return this.form.event_id && this.form.team_id && this.form.slogan && !this.status && !this.processing;
        },
        event_id: function() {
            return this.form.event_id;
        },
    },
    methods: {
        submit: function() {
            this.$alert(
                "报名后资料将不可再更改，更多咨询请联系认证团长Q群【1048059072】",
                "消息",
                {
                    confirmButtonText: "确定",
                    callback: (action) => {
                        if (action == "confirm") {
                            this.processing = true
                            joinEvent(this.form).then((res) => {
                                this.$message({
                                    message: "报名成功,请等待审核",
                                    type: "success",
                                });
                                this.status = true;
                                this.$forceUpdate();
                            }).finally(() => {
                                this.processing = false
                            })
                        }
                    },
                }
            );
        },
        updateTeam: function() {
            this.teams.forEach((item) => {
                if (item.ID == this.form.team_id) {
                    this.result.eventRecord.name = item.name;
                }
            });
        },
        loadEvents: function() {
            // 获取开放的活动事件
            return getEvents({
                status: 1,
            }).then((res) => {
                this.events = res.data.data.list || [];
                this.form.event_id = this.event_id;
                this.$forceUpdate();
            });
        },
        loadTeams: function() {
            // 获取当前用户拥有的团队
            return getMyTeams().then((res) => {
                this.teams = res.data.data.list || [];
                this.form.team_id = this.team_id;
                this.$forceUpdate();
            });
        },
        checkJoin: function() {
            this.form.event_id &&
                hasJoined(this.form.event_id).then((res) => {
                    this.result = res.data.data;
                    if (res.data.data.hasJoined) {
                        this.status = true;
                        this.$forceUpdate();
                    }
                });
        },
        goLogin: function() {
            User.toLogin();
        },
        init: function() {
            this.loadEvents();
            this.loadTeams();
        },
    },
    watch: {
        event_id: function(val) {
            this.checkJoin();
        },
    },
    created: function() {
        this.isLogin && this.init();
    },
    components: {},
};
</script>

<style lang="less">
@import "../assets/css/join.less";
</style>
