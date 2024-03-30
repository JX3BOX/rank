<template>
    <!-- 活动规则与奖励设置 -->
    <div class="m-rank-info">
        <div class="m-time-shaft-box" v-if="timeNode.length">
            <h2>活动时间线</h2>
            <div class="m-time-shaft-swiper-box">
                <swiper-container
                    class="m-time-shaft-swiper"
                    slides-per-view="auto"
                    :centered-slides="true"
                    space-between="34"
                    ref="timeShaftSwiperRef"
                >
                    <swiper-slide
                        v-for="(item, index) in timeNode"
                        class="m-shaft-item"
                        :class="{
                            'm-shaft-item__un_arrived': !item.reach,
                        }"
                        :key="index"
                    >
                        <p class="m-item__time">{{ item.showTime }}</p>
                        <div class="m-item__decorate"></div>
                        <div class="m-item__division"></div>
                        <div class="m-item__desc">
                            <span>{{ item.text }}</span>
                        </div>

                        <div class="m-item__now" v-if="item.isNow">
                            <span>当前进度</span>
                        </div>
                    </swiper-slide>
                </swiper-container>
                <img class="m-time-shaft-swiper__arrow" @click="timeShaftChange('prev')" :src="`${timelineArrow}`" />
                <img
                    @click="timeShaftChange('next')"
                    class="m-time-shaft-swiper__arrow m-time-shaft-swiper__arrow_right"
                    :src="`${timelineArrow}`"
                />
            </div>
        </div>
        <div class="m-rank-btns">
            <a class="u-btn u-btn-join" href="../join/" target="_blank" rel="noopener"></a>
            <!-- <a class="u-btn u-btn-lucky" href="/fb" target="_blank" rel="noopener">副本开荒攻略</a> -->
        </div>
        <div class="m-rank-txt" v-html="desc"></div>
    </div>
</template>

<script>
import { register } from "swiper/swiper-element";
import { __imgPath } from "@jx3box/jx3box-common/data/jx3box.json";
import { getBreadcrumb } from "@jx3box/jx3box-common/js/api_misc";
export default {
    props: [],
    data: function () {
        return {
            timelineArrow: __imgPath + "image/rank/common/timeline_arrow.svg",
            timeNode: [],
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
        getBreadcrumb("top_time_line").then((data) => {
            data = JSON.parse(data);
            if (`id-${this.$store.state.id}` in data) {
                let nArr = data[`id-${this.$store.state.id}`].node;
                const currentTime = new Date();
                nArr.forEach((item) => {
                    item.reach = new Date(item.time) <= currentTime;
                });

                var lastIndex = nArr
                    .slice()
                    .reverse()
                    .findIndex((item) => item.reach);

                if (lastIndex !== -1) {
                    nArr[nArr.length - 1 - lastIndex].isNow = true;
                }
                this.timeNode = nArr;
                register();
                setTimeout(() => {
                    this.$refs.timeShaftSwiperRef.swiper.slideTo(nArr.length - 1 - lastIndex);
                }, 100);
            }
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
    filters: {},
    components: {},
};
</script>

<style lang="less">
@import "../assets/css/race_info.less";
</style>
