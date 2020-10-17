<template>
    <div class="m-rank-video">
        <div class="video-wrapper d-live">
            <div class="d-pic pic-lives"></div>
            <div class="d-content">
                <div class="d-wrapper" v-for="count in 24" :key="count">
                    <el-image
                        class="i-pic"
                        fit="fill"
                        src="https://console.cnyixun.com/upload/post/2020/10/7/1493211.png"
                    ></el-image>
                    <div class="i-content">
                        <span class="i-content-title">这里是团名</span>
                        <span class="i-content-tag">正在直播</span>
                        <p class="i-content-server">服务器：风起稻香村</p>
                        <p class="i-content-progress">
                            攻略进度：
                            <el-rate
                                v-model="progressValue"
                                disabled
                                :max="6"
                                :icon-classes="[
                                    'el-icon-success',
                                    'el-icon-success',
                                    'el-icon-success',
                                ]"
                                disabled-void-icon-class="el-icon-remove"
                                :colors="['#66AFFF', '#66AFFF', '#66AFFF']"
                                disabled-void-color="#888888"
                            >
                            </el-rate>
                        </p>
                    </div>
                    <el-image
                        src="http://placehold.it/64x64"
                        fit="fill"
                        class="i-avatar"
                    ></el-image>
                </div>
            </div>
        </div>
        <div class="video-wrapper d-video">
            <div class="d-pic pic-videos"></div>
            <div class="d-content">
                <div class="d-wrapper"></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: [],
    data: function () {
        return {
            progressValue: 1,
        };
    },
    computed: {},
    methods: {},
    filters: {},
    created: function () {},
    components: {},
};
</script>

<style lang="less">
@import "../assets/css/race_video.less";
</style>