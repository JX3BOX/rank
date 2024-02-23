<template>
    <div class="m-lover-join m-lover-page">
        <div class="u-page-title">
            <img class="u-img" :src="`${__imgRoot}join-title.png`" />
        </div>
        <div class="m-success">
            <img class="u-img" :src="`${__imgRoot}success.svg`" />
            <span>报名成功，你的报名信息如下</span>
        </div>
        <div class="m-lover-box">
            <div class="u-submit">
                <img class="u-img" :src="`${__imgRoot}join.png`" />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "LoverJoin",
    inject: ["__imgRoot"],
    data: function () {
        return {};
    },
    computed: {},
    methods: {},
};
</script>
<style lang="less">
@import "~@/assets/css/lover/join.less";
</style>
