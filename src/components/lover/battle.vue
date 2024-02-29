<template>
    <div class="m-lover-battle">
        <div class="m-team">
            <el-image class="u-img" :src="url"></el-image>
            <span class="u-name"></span>
            <span class="u-status">胜</span>
        </div>
        <div class="m-team win">
            <el-image class="u-img" :src="url"></el-image>
            <span class="u-name"></span>
            <span class="u-status">胜</span>
        </div>
        <a href="http://" target="_blank" class="u-detail">详情</a>
    </div>
</template>

<script>
export default {
    name: "battle",
    props: {
        data: {
            type: Object,
            default: () => {},
        },
    },
    data: function () {
        return {
            url: "",
        };
    },
    computed: {},
    methods: {},
};
</script>
<style lang="less">
.m-lover-battle {
    .flex;
    position: relative;
    flex-direction: column;
    gap: 6px;
    .u-detail {
        .size(40px,20px);
        .fz(12px,20px);
        .bold;
        .x;
        align-self: flex-end;
        color: #f3c768;
        letter-spacing: 3px;
        background: #f3c76814;
        border: 1px solid #f3c768;
    }
    .m-team {
        @h: 40px;
        .flex;
        .size(220px,@h);
        .fz(14px,@h);
        .pl(10px);
        color: #fff;
        box-sizing: border-box;
        align-items: center;
        border-left: 4px solid #f3c768;
        background: linear-gradient(0, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.1) 100%);
        .u-img {
            .size(24px);
            flex-shrink: 0;
        }
        .u-name {
            .w(100%);
            .nobreak;
            margin: 0 10px 0 15px;
        }
        .u-status {
            .size(@h);
            .x;
            flex-shrink: 0;
            background-color: rgba(0, 0, 0, 0.1);
        }
        &.win {
            background: linear-gradient(270deg, #f3c768 12.05%, rgba(243, 199, 104, 0) 76.59%),
                linear-gradient(0deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1));
            .u-status {
                background-color: #f3c768;
            }
        }
    }
    &::before {
        content: "";
        .pa;
        .lt(0,40px);
        .size(100px,4px);
        .ml(-120px);
        background-color: #fff;
        transform: translateX(-1px);
    }
}
</style>
