<template>
    <!-- 活动规则与奖励设置 -->
    <div class="m-rank-info">
        <div class="m-rank-btns">
            <div class="m-time-shaft-box">
                <h2>活动时间线</h2>
                <div class="m-time-shaft-swiper-box">
                    <swiper-container
                        class="m-time-shaft-swiper"
                        slides-per-view="auto"
                        space-between="34"
                        ref="timeShaftSwiperRef"
                    >
                        <swiper-slide
                            class="m-shaft-item"
                            :class="{
                                'm-shaft-item__un_arrived': index % 2,
                            }"
                            v-for="(item, index) in Array(20)"
                            :key="index"
                        >
                            <p class="m-item__time">03-{{ index }}</p>
                            <div class="m-item__decorate"></div>
                            <div class="m-item__division"></div>
                            <div class="m-item__desc">
                                <span> 体服10人开放 </span>
                            </div>

                            <div class="m-item__now" v-if="index == 5">
                                <span>当前进度</span>
                            </div>
                        </swiper-slide>
                    </swiper-container>
                    <img
                        class="m-time-shaft-swiper__arrow"
                        @click="timeShaftChange('prev')"
                        :src="`${timelineArrow}`"
                    />
                    <img
                        @click="timeShaftChange('next')"
                        class="m-time-shaft-swiper__arrow m-time-shaft-swiper__arrow_right"
                        :src="`${timelineArrow}`"
                    />
                </div>
            </div>
            <a class="u-btn u-btn-join" href="../join/" target="_blank" rel="noopener"></a>
            <!-- <a class="u-btn u-btn-lucky" href="/fb" target="_blank" rel="noopener">副本开荒攻略</a> -->
        </div>
        <div class="m-rank-txt" v-html="desc"></div>
    </div>
</template>

<script>
import { register } from "swiper/swiper-element";
import { __imgPath } from "@jx3box/jx3box-common/data/jx3box.json";
export default {
    props: [],
    data: function () {
        return {
            timelineArrow: __imgPath + "image/rank/common/timeline_arrow.svg",
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
    mounted: function () {},
    created: function () {
        register();
        // this.$refs.timeShaftSwiperRef.swiper.slideTo(10); swiper 移动到指定位置
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
    filters: {},
    components: {},
};
</script>

<style lang="less">
@import "../assets/css/race_info.less";
</style>
