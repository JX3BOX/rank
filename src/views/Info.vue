<template>
    <!-- 活动规则与奖励设置 -->
    <div class="m-rank-info">
        <TimeLine :html="times" v-if="times" />
        <div class="m-rank-btns">
            <a class="u-btn u-btn-join" href="../join/" target="_blank" rel="noopener"></a>
            <!-- <a class="u-btn u-btn-lucky" href="/fb" target="_blank" rel="noopener">副本开荒攻略</a> -->
        </div>
        <div class="m-rank-txt" v-html="desc"></div>
    </div>
</template>

<script>
import { __imgPath } from "@jx3box/jx3box-common/data/jx3box.json";
import { getBreadcrumb } from "@jx3box/jx3box-common/js/api_misc";
import TimeLine from "@/components/time_line.vue";
export default {
    components: {
        TimeLine,
    },
    data: function () {
        return {
            timelineArrow: __imgPath + "image/rank/common/timeline_arrow.svg",
            times: "",
        };
    },
    computed: {
        id: function () {
            return this.$store.state.id;
        },
        desc: function () {
            return this.$store.state.race.desc;
        },
    },
    created: function () {
        getBreadcrumb(`top_time_line_${this.id}`).then((data) => {
            this.times = data;
        });
    },
    methods: {
        timeShaftChange(type) {
            if (type == "next") {
                this.$refs.timeShaftSwiperRef.swiper.slideNext();
            } else if (type == "prev") {
                this.$refs.timeShaftSwiperRef.swiper.slidePrev();
            }
        },
    },
};
</script>

<style lang="less">
@import "../assets/css/race_info.less";
.m-rank-info .w-time-line-box h2{
    margin: 0;
}
</style>
