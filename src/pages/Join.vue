<template>
    <div id="app" class="m-rank-container">
        <Header></Header>
        <div class="m-rank-join">
            <div class="m-rank-header">
                <img class="u-logo" :src="LOGO" />
            </div>
            <div class="m-rank-content" v-if="isLogin">
                <div class="m-join m-join-team">
                    <h1 class="m-join-title">报名入口</h1>
                    <el-alert
                        class="u-warning"
                        title="请务必正确填写所有资料，报名后不可取消，亦不可再更改资料。团长Q群：785597424"
                        type="warning"
                        show-icon
                    >
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
                            >
                                <el-option
                                    v-for="team in teams"
                                    :key="team.ID"
                                    :label="team.name"
                                    :value="team.ID"
                                >
                                </el-option>
                            </el-select>
                            <div class="u-tip" v-if="!teams || !teams.length">
                                还没有团队？<a
                                    href="/team"
                                    target="_blank"
                                    >创建团队</a
                                >
                            </div>
                        </el-form-item>
                        <el-form-item label="参赛宣言">
                            <el-input
                                v-model="form.slogan"
                                placeholder="一经提交，不可修改"
                                :maxlength="20"
                                show-word-limit
                            ></el-input>
                        </el-form-item>
                        <div class="u-btns">
                            <el-button
                                class="u-btn"
                                type="primary"
                                @click="submit"
                                :disabled="!ready || !status"
                                >报名</el-button
                            >
                        </div>
                    </el-form>
                </div>
                <div class="m-join m-join-done" v-if="status">
                    <h1 class="u-title">已报名</h1>
                    <div>
                        <p>
                            活动：<strong>{{ result.event.name }}</strong>
                        </p>
                        <p>
                            团队：<strong>{{ result.eventRecord.name }}</strong>
                        </p>
                    </div>
                </div>
                <div class="u-footer">
                    <a href="/tool/18044" target="_blank"
                        ><i class="el-icon-info"></i>
                        <b>点击查看活动规则详情</b></a
                    >
                </div>
            </div>
            <div class="m-rank-content m-rank-null" v-else>
                请先<a href="/account/login/" target="_blank">登录</a>
            </div>
        </div>
        <Footer></Footer>
    </div>
</template>

<script>
import PICS from "@/assets/js/pics.js";
import { getEvents, joinEvent, hasJoined } from "@/service/event.js";
import { getMyTeams } from "@/service/team.js";
import _ from "lodash";
import User from '@jx3box/jx3box-common/js/user.js'

export default {
    name: "App",
    props: [],
    data: function() {
        return {
            LOGO: PICS.LOGO,
            form: {
                event_id: "",
                team_id: "",
                slogan : '',
            },
            events: [],
            teams: [],
            status: false,
            isLogin : User.isLogin(),
            result : {
                event : {
                    name : '活动名称'
                },
                eventRecord : {
                    name : '团队名称'
                }
            },
        };
    },
    computed: {
        ready : function (){
            return this.form.event_id && this.form.team_id
        },
    },
    methods: {
        submit: function() {
            this.$alert(
                "报名后资料将不可再更改，更多咨询请联系认证团长Q群1048059072",
                "消息",
                {
                    confirmButtonText: "确定",
                    callback: (action) => {
                        if (action == "confirm") {
                            joinEvent(this.form).then((res) => {
                                this.$message({
                                    message: "报名成功",
                                    type: "success",
                                });
                                this.status = true;
                                this.$forceUpdate()
                            });
                        }
                    },
                }
            );
        },
        init: function() {
            this.loadEvents()
            this.loadTeams()
        },
        loadEvents: function() {
            // 获取开放的活动事件
            return getEvents({
                status: 1,
            }).then((res) => {
                this.events = res.data.data.list || [];
                this.form.event_id = this.event_id;
                this.$forceUpdate()
            });
        },
        loadTeams: function() {
            // 获取当前用户拥有的团队
            return getMyTeams().then((res) => {
                this.teams = res.data.data.list || [];
                this.form.team_id = this.team_id;
                this.$forceUpdate()
            });
        },
        checkJoin: function() {
            if(this.ready){
                hasJoined(this.form.event_id).then((res) => {
                    this.result = res.data.data
                    if (res.data.data.hasJoined) {
                        this.status = true;
                        this.$forceUpdate()
                    }
                });
            }
        },
    },
    watch : {
        ready : function (){
            this.checkJoin()
        }
    },
    created: function() {
        this.init();
    },
    components: {},
};
</script>

<style lang="less">
@import "../assets/css/join.less";
</style>
