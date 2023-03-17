<template>
    <div class="container">
        <video loop autoplay muted class="m-video" src="@/assets/video/mda-ik1fjvkzb0pg1qdi.mp4"></video>
        <img class="m-smog_img" src="@/assets/img/seven/smog.png" />
        <div class="content">
            <img class="title" src="@/assets/img/seven/welcome_title.png" />
            <div class="gird_box">
                <div class="box_item" v-for="(item, index) in list" :key="index"></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: [],
    data: () => ({
        list: [], //宫格数据
    }),
    computed: {
        id: function () {
            return this.$store.state.id;
        },
        desc: function () {
            return this.$store.state.race.desc;
        },
    },
    methods: {},
    filters: {},
    mounted: function () {},
    created: function () {
        this.list = new Array(9).fill(1).map((_, i) => ({ id: i + new Date().valueOf() }));
    },
    components: {},
};
</script>

<style lang="less" scoped>
.container {
    min-height: 1440px;
    display: flex;
    justify-content: center;
    overflow: hidden;
    position: relative;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    -khtml-user-select: none;
    user-select: none;
    img {
        -webkit-user-drag: none;
    }
    .m-smog_img {
        position: absolute;
        top: 0;
        left: 0;
        z-index: 8;
        // width: 100%;
        // height: 100%;
        transform: scale(7);
        transform-origin: center;

        // background-size: 800% 800%;
        // background: url("../../..//assets/img/seven/smog.png") no-repeat;
        // backdrop-filter: blur(0.6);
        animation: move_smog 180s linear infinite;
        // height: 100vh;
    }
    @keyframes move_smog {
        0% {
            transform: scale(7) translate(0%, 0%);
        }
        10% {
            transform: scale(7) translate(-25%, 25%);
        }
        25% {
            transform: scale(7) translate(-50%, 50%);
        }
        40% {
            transform: scale(7) translate(-30%, 30%);
        }
        50% {
            transform: scale(7) translate(-25%, 25%);
        }
        100% {
            transform: scale(7) translate(0%, 0%);
        }
    }
    .m-video {
        height: 100%;
        width: 100%;
        position: absolute;
        top: 0;
        left: 0;
        object-fit: cover;
        z-index: 1;
        filter: grayscale(1);
    }
    .content {
        background: url("../../..//assets/img/seven/gird_backdrop.png") no-repeat;
        width: 1210px;
        min-height: 1440px;
        display: flex;
        position: relative;
        z-index: 2;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        .gird_box {
            position: relative;
            z-index: 9;
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            gap: 20px;

            .box_item {
                width: 298px;
                height: 198px;
                background: #ffffff;
            }
        }
    }
}
</style>
