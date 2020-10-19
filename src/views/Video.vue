<template>
    <div class="m-rank-video">
        <div class="m-rank-video-title">
            <img :src="video_title_img" />
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
        <div class="m-rank-video-content">
            <template v-if="data && data.length">
                <el-row class="m-rank-video-list" :gutter="20">
                    <el-col :span="8" v-for="(item, i) in data" :key="i">
                        <div class="m-rank-video-item">
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
                                    <i class="u-player" v-if="~~item.douyu.show_status == 1">
                                        <img svg-inline src="../assets/img/video/play.svg" />
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
                    class="m-archive-pages"
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
export default {
    props: [],
    data: function() {
        return {
            video_title_img: __imgPath + "image/rank/common/lives.png",
            data: [],
            per: 24,
            page: 1,
            total: 1,
            liveStatusMap,
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
            };
        },
    },
    methods: {
        getTVlink,
        loadData: function() {
            getLives(this.id, this.params).then((res) => {
                this.data = res.data.data.list;
                this.page = res.data.data.page.index;
                this.total = res.data.data.page.total;
            });
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
            return val ? getThumbnail(val, 120, true) : default_avatar;
        },
        liveAvatar: function(val) {
            return val ? getThumbnail(val, 68, true) : default_avatar;
        },
        teamLink: function(val) {
            return "/team/#/org/view/" + val;
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
