<template>
    <div class="m-lover-battle">
        <div class="m-team">
            <el-image class="u-img" :src="url"></el-image>
            <span class="u-name">队伍名称队伍名称队伍名称队伍名称</span>
            <span class="u-status">胜</span>
        </div>
        <div class="m-team win">
            <el-image class="u-img" :src="url"></el-image>
            <span class="u-name">队伍名称队伍名称队伍名称队伍名称</span>
            <span class="u-status">胜</span>
        </div>
        <a href="http://" target="_blank" class="u-detail">详情</a>
    </div>
</template>

<script>
export default {
    name: "battle",
    data: function () {
        return {};
    },
    computed: {},
    methods: {},
};
</script>
<style lang="less">
.m-lover-battle {
    .flex;
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
}
</style>
