<template>
    <div
        class="m-rank-video"
        v-loading="loading"
        element-loading-text="加载中..."
        element-loading-spinner="el-icon-loading"
        element-loading-background="rgba(0, 0, 0, 0.8)"
    >
        <div class="m-rank-video-title">
            <img :src="video_title_img" />
            <div class="u-extend">
                <el-button
                    type="primary"
                    icon="el-icon-plus"
                    circle
                    @click="showEditVideo({ id: -1 })"
                ></el-button>
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
            </div>
        </div>
        <el-dialog :title="dialogVideoTitle" :visible.sync="dialogVideoVisible">
            <el-form :model="videoForm" label-width="80px">
                <el-form-item label="队伍id">
                    <el-input
                        v-model="videoForm.team_id"
                        autocomplete="off"
                    ></el-input>
                </el-form-item>
                <el-form-item label="Boss名称">
                    <el-select v-model="videoForm.aid" placeholder="请选择Boss">
                        <el-option
                            v-for="(id, name) of bossidDict"
                            :key="id"
                            :label="id"
                            :value="name"
                        ></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="视频标题">
                    <el-input
                        v-model="videoForm.title"
                        autocomplete="off"
                    ></el-input>
                </el-form-item>
                <el-form-item label="视频链接">
                    <el-input
                        v-model="videoForm.url"
                        autocomplete="off"
                    ></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogVideoVisible = false">取 消</el-button>
                <el-button type="primary" @click="submitVideo">确 定</el-button>
            </div>
        </el-dialog>
        <div class="m-rank-video-content">
            <template v-if="data && data.length">
                <el-row class="m-rank-video-list" :gutter="20">
                    <el-col :span="8" v-for="(item, i) in data" :key="i">
                        <div
                            class="m-rank-video-item"
                            @mouseenter="currentHover = i"
                            @mouseleave="currentHover = -1"
                        >
                            <el-button
                                type="primary"
                                icon="el-icon-edit"
                                circle
                                v-if="i === currentHover"
                                class="button-edit"
                                @click="showEditVideo(item)"
                            ></el-button>
                            <a
                                class="u-video"
                                :href="
                                    getTVlink(item.team.tv_type, item.team.tv)
                                "
                                target="_blank"
                            >
                                <template v-if="item.team.tv_type == 'douyu'">
                                    <img
                                        v-if="item.douyu.room_src"
                                        :src="item.douyu.room_src"
                                        class="u-live-cover"
                                        loading="lazy"
                                    />
                                    <img
                                        v-else
                                        :src="item.team.logo | teamLogo"
                                        class="u-live-null"
                                        loading="lazy"
                                    />
                                    <i
                                        class="u-status"
                                        :class="{
                                            on: ~~item.douyu.show_status == 1,
                                        }"
                                        ><i class="el-icon-video-camera"></i>
                                        {{
                                            liveStatusMap[
                                                ~~item.douyu.show_status
                                            ]
                                        }}</i
                                    >
                                    <i
                                        class="u-player"
                                        v-if="~~item.douyu.show_status == 1"
                                    >
                                        <img
                                            svg-inline
                                            src="../assets/img/video/play.svg"
                                        />
                                    </i>
                                </template>
                                <template v-else>
                                    <img
                                        :src="item.team.logo | teamLogo"
                                        class="u-live-null"
                                        loading="lazy"
                                    />
                                    <i class="u-status"
                                        ><i class="el-icon-warning-outline"></i>
                                        未知</i
                                    >
                                </template>
                            </a>
                            <div class="u-info">
                                <img
                                    :src="item.team.logo | liveAvatar"
                                    class="u-team-logo"
                                    loading="lazy"
                                />
                                <div class="u-team">
                                    <span class="u-label">团队 : </span>
                                    <a
                                        class="u-team-name"
                                        :href="item.team.ID | teamLink"
                                        target="_blank"
                                        >{{ item.team.name }}</a
                                    >
                                </div>
                                <div class="u-room">
                                    <span class="u-label">房间 : </span>
                                    <a
                                        class="u-room-name"
                                        :href="
                                            getTVlink(
                                                item.team.tv_type,
                                                item.team.tv
                                            )
                                        "
                                        target="_blank"
                                    >
                                        {{
                                            (item.team.tv_type == "douyu" &&
                                                item.douyu.room_name) ||
                                            item.team.name + "的直播间"
                                        }}
                                    </a>
                                </div>
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
            <el-alert
                v-else
                class="m-archive-null"
                title="没有找到相关条目"
                type="info"
                center
                show-icon
            >
            </el-alert>
        </div>
    </div>
</template>

<script>
import { __imgPath } from "@jx3box/jx3box-common/js/jx3box.json";
import { getLives } from "@/service/race.js";
import { getThumbnail } from "@jx3box/jx3box-common/js/utils";
import { default_avatar } from "@jx3box/jx3box-common/js/jx3box.json";
import getTVlink from "@/assets/js/tv.js";
const liveStatusMap = ["等待开播", "直播中", "直播结束"];
import servers from "@jx3box/jx3box-data/data/server/server_list.json";
import achieves from "@/assets/data/achieve.json";

export default {
    props: [],
    data: function () {
        return {
            video_title_img: __imgPath + "image/rank/common/videos.png",
            data: [],
            per: 24,
            page: 1,
            total: 1,
            liveStatusMap,
            loading: false,
            servers,
            server: "",
            live_url: "",
            dialogVideoVisible: false,
            videoForm: {
                team_id: "",
                aid: "",
                title: "",
                url: "",
            },
            currentHover: -1,
            dialogVideoTitle: "添加视频",
        };
    },
    computed: {
        id: function () {
            return this.$store.state.id;
        },
        bossidDict: function () {
            return achieves[this.$store.state.id];
        },
        params: function () {
            return {
                pageSize: this.per,
                pageIndex: this.page,
                server: this.server,
            };
        },
        list: function () {
            let list = [];
            this.data.forEach((item, i) => {
                if (
                    item.team.tv_type == "douyu" &&
                    item.douyu.show_status == 1
                ) {
                    list.push(item);
                }
                if (i == 0) {
                    item.isActive = true;
                }
            });
            return list;
        },
        default_live_url: function () {
            if (this.list && this.list.length) {
                return (
                    "https://open.douyu.com/tpl/h5/chain2/jdxoubyoux/" +
                    this.list[0]["team"]["tv"]
                );
            } else {
                return "";
            }
        },
    },
    methods: {
        getTVlink,
        loadData: function () {
            this.loading = true;
            getLives(this.id, this.params)
                .then((res) => {
                    this.data = res.data.data.list;
                    this.page = res.data.data.page.index;
                    this.total = res.data.data.page.total;
                })
                .finally(() => {
                    this.loading = false;
                });
        },
        play: function (item) {
            this.live_url =
                "https://open.douyu.com/tpl/h5/chain2/jdxoubyoux/" +
                item.team.tv;
            this.clean();
            item.isActive = true;
        },
        clean: function () {
            this.list.forEach((item) => {
                item.isActive = false;
            });
        },
        showEditVideo: function (video) {
            // 上传视频信息
            this.videoForm = {};
            this.dialogVideoVisible = true;
            console.log(video); // 因为现在没有接口数据，取到的video的id都是undefined
            if (video.id === -1) {
                this.dialogVideoTitle = "添加视频";
                // 创建视频
            } else {
                this.dialogVideoTitle = "编辑视频";
                this.videoForm = video;
                // 编辑视频
            }
        },
        submitVideo: function () {
            if (
                this.videoForm["team_id"] == undefined ||
                this.videoForm["aid"] == undefined ||
                this.videoForm.url == undefined ||
                this.videoForm.title == undefined
            ) {
                this.$message.error("没有填写完整");
            } else {
                // 提交
                this.dialogVideoVisible = false;
            }
            
        },
    },
    watch: {
        params: {
            deep: true,
            handler: function () {
                this.loadData();
            },
        },
    },
    filters: {
        teamLogo: function (val) {
            return val ? getThumbnail(val, 120, true) : default_avatar;
        },
        liveAvatar: function (val) {
            return val ? getThumbnail(val, 68, true) : default_avatar;
        },
        teamLink: function (val) {
            return "/team/#/org/view/" + val;
        },
    },
    created: function () {
        this.loadData();
    },
    components: {},
};
</script>

<style lang="less">
@import "../assets/css/race_video.less";
</style>
