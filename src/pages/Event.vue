<template>
    <div id="app" class="m-rank-container">
        <Header></Header>
        <div class="m-ran-primary">
            <div class="m-rank-join m-rank-event">
                <div class="m-rank-header">
                    <img class="u-logo" :src="LOGO" />
                </div>
                <div class="m-rank-content">
                    <div class="m-join m-join-team">
                        <h1 class="m-join-title">活动设置</h1>
                        <el-form
                            class="m-join-form"
                            ref="form"
                            :model="form"
                            label-width="80px"
                        >
                            <el-form-item label="是否可见">
                                <el-radio-group v-model="form.visible">
                                    <el-radio :label="1">可见</el-radio>
                                    <el-radio :label="0">隐藏</el-radio>
                                </el-radio-group>
                            </el-form-item>
                            <el-form-item label="活动状态">
                                <el-radio-group v-model="form.status">
                                    <el-radio :label="1">开启</el-radio>
                                    <el-radio :label="0">关闭</el-radio>
                                </el-radio-group>
                            </el-form-item>
                            <el-form-item label="游戏可见">
                                <el-radio-group v-model="form.visible_game">
                                    <el-radio :label="1">开启</el-radio>
                                    <el-radio :label="0">关闭</el-radio>
                                </el-radio-group>
                            </el-form-item>
                            <el-form-item label="成就序列">
                                <el-input
                                    v-model="form.achieve_ids"
                                    placeholder="请输入内容"
                                ></el-input>
                                <div class="u-note">例如：1,2,3,...</div>
                            </el-form-item>
                            <el-form-item label="活动名称">
                                <el-input
                                    v-model="form.name"
                                    placeholder="请输入内容"
                                ></el-input>
                            </el-form-item>
                            <el-form-item label="开启模块">
                                <el-checkbox-group v-model="form.blocks">
                                    <el-checkbox
                                        :label="key"
                                        v-for="(label, key) in blocks"
                                        :key="key"
                                        >{{ label }}</el-checkbox
                                    >
                                </el-checkbox-group>
                            </el-form-item>
                            <el-form-item label="活动介绍">
                                <el-input
                                    v-model="form.desc"
                                    placeholder="请输入内容"
                                    type="textarea"
                                    rows="8"
                                ></el-input>
                            </el-form-item>
                            <el-form-item label="晚会回看">
                                <el-input
                                    v-model="form.gifts"
                                    placeholder="请输入内容"
                                    type="textarea"
                                    rows="8"
                                ></el-input>
                            </el-form-item>
                            <hr>
                            <el-form-item label="投票说明">
                                <el-input
                                    v-model="form.vote_note"
                                    placeholder="请输入内容"
                                    type="textarea"
                                    rows="8"
                                ></el-input>
                            </el-form-item>
                            <el-form-item label="投票开启">
                                <el-input
                                    v-model="form.vote_start"
                                    placeholder="请输入内容"
                                ></el-input>
                            </el-form-item>
                            <el-form-item label="投票结束">
                                <el-input
                                    v-model="form.vote_end"
                                    placeholder="请输入内容"
                                ></el-input>
                            </el-form-item>
                            <hr>
                            <el-form-item label="媒体宣传">
                                <el-input
                                    v-model="form.note"
                                    placeholder="请输入内容"
                                    type="textarea"
                                    rows="8"
                                ></el-input>
                            </el-form-item>
                            <el-form-item
                                label="赞助名单"
                                class="u-sponsor-label"
                            >
                                <div
                                    class="u-sponsor"
                                    v-for="(item, i) in form.sponsors"
                                    :key="i"
                                >
                                    <el-row :gutter="20">
                                        <el-col :span="8">
                                            <div>
                                                <el-input v-model="item.logo">
                                                    <span slot="prepend"
                                                        >图标</span
                                                    >
                                                </el-input>
                                            </div>
                                        </el-col>
                                        <el-col :span="8">
                                            <div>
                                                <el-input v-model="item.link">
                                                    <span slot="prepend"
                                                        >链接</span
                                                    >
                                                </el-input>
                                            </div>
                                        </el-col>
                                        <el-col :span="6">
                                            <div>
                                                <el-button
                                                    type="primary"
                                                    plain
                                                    size="mini"
                                                    @click="add(i)"
                                                    >+ 添加</el-button
                                                >
                                                <el-button
                                                    type="danger"
                                                    plain
                                                    size="mini"
                                                    @click="del(i)"
                                                    >- 删除</el-button
                                                >
                                            </div>
                                        </el-col>
                                    </el-row>
                                </div>
                            </el-form-item>
                            <div class="u-btns">
                                <el-button
                                    class="u-submit"
                                    type="primary"
                                    @click="submit"
                                    >{{
                                        id ? "更新活动" : "创建活动"
                                    }}</el-button
                                >
                                <el-button
                                    class="u-start"
                                    type="success"
                                    @click="active"
                                    >激活活动</el-button
                                >
                                <el-button
                                    class="u-stop"
                                    type="warning"
                                    @click="stop"
                                    >关闭活动</el-button
                                >
                            </div>
                        </el-form>
                    </div>
                </div>
            </div>
        </div>
        <Footer></Footer>
    </div>
</template>

<script>
import _ from "lodash";
import PICS from "@/assets/js/pics.js";
import blocks from "@/assets/data/blocks.json";
import {
    createEvent,
    updateEvent,
    activeEvent,
    stopEvent,
    getEvent,
} from "@/service/event.js";
const sponsor = {
    logo: "",
    link: "",
};
export default {
    name: "App",
    props: [],
    data: function() {
        return {
            form: {
                visible: 0,
                status: 0,
                visible_game:0,
                achieve_ids: "",
                name: "",
                sponsors: [
                    {
                        logo: "",
                        link: "",
                    },
                ],
                blocks: [],
                desc: "",
                gifts: "",
                note: "",
                vote_note : "", //投票说明
                vote_start: new Date().toISOString(), // !!! 2021.2.28 New  !!! 格式不能错误
                vote_end: new Date().toISOString(), // !!! 2021.2.28 New  !!! 格式不能错误
            },
            blocks,
            id: "",
            LOGO: PICS.LOGO,
        };
    },
    computed: {
        data: function() {
            let _data = this.form;
            _data.vote_start = new Date(_data.vote_start).toISOString();
            _data.vote_end = new Date(_data.vote_end).toISOString();
            return _data;
        },
    },
    methods: {
        submit: function() {
            if (this.id) {
                updateEvent(this.id, this.data).then((res) => {
                    this.$message({
                        message: "设置成功",
                        type: "success",
                    });
                });
            } else {
                createEvent(this.data).then((res) => {
                    this.$message({
                        message: "创建成功",
                        type: "success",
                    });
                    location.href += `?id=${res.data.data.ID}`;
                });
            }
        },
        add: function(i) {
            this.form.sponsors.push({
                logo: "",
                link: "",
            });
        },
        del: function(i) {
            this.form.sponsors.splice(i, 1);
        },
        fixArrSetting: function(prop) {
            if (!Array.isArray(this.form[prop]) || !this.form[prop].length) {
                this.form[prop] = [];
                if (prop == "sponsors") {
                    this.form[prop].push(_.cloneDeep(sponsor));
                }
            }
        },
        active: function() {
            activeEvent(this.id).then(() => {
                this.$message({
                    message: "活动开启",
                    type: "success",
                });
            });
        },
        stop: function() {
            stopEvent(this.id).then(() => {
                this.$message({
                    message: "活动关闭",
                    type: "success",
                });
            });
        },
    },
    created: function() {
        let params = new URLSearchParams(location.search);
        this.id = ~~params.get("id");
        if (this.id) {
            getEvent(this.id).then((res) => {
                this.form = res.data.data;

                this.fixArrSetting("sponsors");
                this.fixArrSetting("blocks");
            });
        }
    },
    components: {},
};
</script>

<style lang="less">
@import "../assets/css/join.less";
@import "../assets/css/event.less";
</style>
