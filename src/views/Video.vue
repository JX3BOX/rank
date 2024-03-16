<template>
    <!-- 通关视频 -->
    <div class="m-rank-video" v-loading="loading" element-loading-text="加载中..." element-loading-spinner="el-icon-loading" element-loading-background="rgba(0, 0, 0, 0.3)">
        <div class="m-rank-video-title">
            <!-- <img :src="video_title_img" /> -->
            <!-- <el-button class="u-addv" v-if="isAdmin" type="primary" @click="add" icon="el-icon-circle-plus-outline">添加视频</el-button> -->
            <!-- <div class="u-extend">
                <el-select
                    class="u-server"
                    v-model="server"
                    placeholder="请选择服务器"
                    size="mini"
                >
                    <el-option key="all" label="全部" value=""></el-option>
                    <el-option
                        v-for="item in servers"
                        :key="item"
                        :label="item"
                        :value="item"
                    ></el-option>
                </el-select>
                <el-pagination
                    class="u-pages"
                    layout="prev, pager, next"
                    :hide-on-single-page="true"
                    :page-size="per"
                    :total="total"
                    :current-page.sync="page"
                >
                </el-pagination>
            </div> -->
            <!-- <el-button plain>朴素按钮</el-button> -->
        </div>
        <el-row class="m-rank-boss" :gutter="20" type="flex" justify="space-between">
            <el-col :span="3">
                <div class="u-boss u-boss-is_all" :class="{ on: current_boss == '' }" @click="changeBoss(0)">
                    <span class="u-boss-name">全部</span>
                </div>
            </el-col>
            <el-col :span="3" v-for="(label, achieve_id) of bossList" :key="label + achieve_id">
                <div class="u-boss" :class="{ on: achieve_id == current_boss }" @click="changeBoss(achieve_id)">
                    <img class="u-boss-icon" :src="bossIcon(achieve_id)" :onerror="defaultBossIcon" />
                    <span class="u-boss-name">{{ label }}</span>
                </div>
            </el-col>
        </el-row>
        <div class="m-rank-video-content">
            <template v-if="data && data.length">
                <el-row class="m-rank-video-list" :gutter="20">
                    <el-col :span="8" v-for="(item, i) in data" :key="i" v-show="!current_boss || item.aid == current_boss">
                        <div class="m-rank-video-item">
                            <a class="u-video" :href="item.url" target="_blank">
                                <img :src="item.aid | videoCover" class="u-live-cover" loading="lazy" />
                                <i class="u-player">
                                    <img svg-inline src="../assets/img/video/play.svg" />
                                </i>
                            </a>
                            <div class="u-info">
                                <a :href="item.team_id | teamLink" target="_blank"><img :src="item.logo | liveAvatar" class="u-team-logo" loading="lazy"/></a>
                                <div class="u-team">
                                    <span class="u-label">团队 : </span>
                                    <a class="u-team-name" :href="item.team_id | teamLink" target="_blank">{{ item.name }}</a>
                                </div>
                                <div class="u-room">
                                    <a class="u-room-name" :href="item.url" target="_blank">
                                        {{ item.title }}
                                    </a>
                                </div>
                                <!-- <div class="u-op" v-if="isEditor">
                                    <el-button class="u-edit" type="primary" plain @click="edit(item)" icon="el-icon-edit-outline" size="mini">编辑</el-button>
                                    <el-button class="u-delete" type="danger" plain @click="del(item.ID)" icon="el-icon-delete" size="mini">删除</el-button>
                                </div> -->
                            </div>
                        </div>
                    </el-col>
                </el-row>
                <el-pagination
                    class="m-rank-video-pages m-archive-pages"
                    background
                    layout="total, prev, pager, next,jumper"
                    :hide-on-single-page="true"
                    :page-size="per"
                    :total="total"
                    :current-page.sync="page"
                >
                </el-pagination>
            </template>
            <el-alert v-else class="m-archive-null" title="没有找到相关条目" type="info" center show-icon> </el-alert>
        </div>
        <el-dialog class="m-rank-video-dialog" title="添加/编辑视频" :visible.sync="dialogVisible" width="30%" :append-to-body="true">
            <div class="m-rank-video-form">
                <el-form ref="form" label-width="80px">
                    <el-form-item label="团队ID">
                        <el-input v-model.number="video.team_id" placeholder="请输入正确的团队数字编号"></el-input>
                    </el-form-item>
                    <el-form-item label="成就ID">
                        <el-select v-model.number="video.aid" placeholder="请选择">
                            <el-option v-for="(label, achieve_id) of bossList" :key="achieve_id" :label="label" :value="achieve_id"> </el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="视频链接">
                        <el-input v-model="video.url" placeholder="请输入视频网址"></el-input>
                    </el-form-item>
                    <el-form-item label="视频标题">
                        <el-input v-model="video.title" placeholder="请注明XX视角"></el-input>
                    </el-form-item>
                </el-form>
            </div>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="submit">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
// import achieves from "@/assets/data/achieve.json";
import { __imgPath } from "@jx3box/jx3box-common/data/jx3box.json";
import { getVideos, deleteVideo, addVideo, updateVideo } from "@/service/video.js";
import { default_avatar } from "@jx3box/jx3box-common/data/jx3box.json";
import { getThumbnail, getLink } from "@jx3box/jx3box-common/js/utils";
import User from "@jx3box/jx3box-common/js/user";
import PICS from "@/assets/js/pics.js";
import servers from "@jx3box/jx3box-data/data/server/server_list.json";
import _ from "lodash";
export default {
    props: [],
    data: function() {
        return {
            video_title_img: __imgPath + "image/rank/common/videos.png",
            data: [],
            per: 24,
            page: 1,
            total: 1,
            loading: false,
            servers,
            server: "",
            current_boss: "",
            isAdmin: User.isAdmin(),
            isEditor: User.isEditor(),
            dialogVisible: false,
            video: {
                ID: "",
                team_id: "",
                event_id: "",
                aid: "",
                title: "",
                url: "",
            },
        };
    },
    computed: {
        id: function() {
            return this.$store.state.id;
        },
        params: function() {
            return {
                pageSize: this.per,
                pageIndex: this.page,
                aid: this.current_boss,
            };
        },
        achieves : function (){
            return this.$store.state.achieves || []
        },
        bossList: function() {
            let dict = {}
            this.achieves.forEach((item) => {
                dict[item.achievement_id] = item.name
            })
            return dict
        },
        demo_video: function() {
            return {
                team_id: "",
                event_id: ~~this.id,
                aid: "",
                title: "",
                url: "",
            };
        },
        defaultBossIcon:function (e){
            return `this.src='${this.bossIcon('0')}';this.onerror=null`
        }
    },
    methods: {
        changeBoss: function(val) {
            this.current_boss = val;
            this.page = 1;
            this.loadData();
        },
        loadData: function() {
            this.loading = true;
            getVideos(this.id, this.params)
                .then((res) => {
                    this.data = res.data.data.list;
                    this.page = res.data.data.page.index;
                    this.total = res.data.data.page.total;
                })
                .finally(() => {
                    this.loading = false;
                });
        },
        del: function(id) {
            this.$alert("确认删除吗", "消息", {
                confirmButtonText: "确定",
                callback: (action) => {
                    if (action == "confirm") {
                        deleteVideo(id).then((res) => {
                            this.$message({
                                type: "success",
                                message: `删除成功`,
                            });

                            location.reload();
                        });
                    }
                },
            });
        },
        edit: function(item) {
            this.dialogVisible = true;
            this.video = item;
        },
        add: function() {
            this.dialogVisible = true;
            this.video = _.cloneDeep(this.demo_video);
        },
        submit: function() {
            if (this.video.ID) {
                updateVideo(this.video.ID, this.video).then((res) => {
                    this.$message({
                        type: "success",
                        message: `更新成功`,
                    });
                    this.dialogVisible = false;
                });
            } else {
                addVideo(this.video).then((res) => {
                    this.$message({
                        type: "success",
                        message: `发布成功`,
                    });
                    this.dialogVisible = false;
                });
            }
        },
        bossIcon: function(val) {
            return PICS.bossIcon(val);
        },
    },
    watch: {
        params: {
            deep: true,
            handler: function() {
                this.loadData();
            },
        },
    },
    filters: {
        teamLogo: function(val) {
            return val ? getThumbnail(val, 240, true) : default_avatar;
        },
        liveAvatar: function(val) {
            return val ? getThumbnail(val, 136, true) : default_avatar;
        },
        teamLink: function(val) {
            // return "/team/#/org/view/" + val;
            return getLink("org", val);
        },
        videoCover: function(aid) {
            return __imgPath + `image/rank/videos/${aid}.png`;
        },
    },
    created: function() {
        this.loadData();
    },
    components: {},
};
</script>

<style lang="less">
@import "../assets/css/race_video.less";
</style>
