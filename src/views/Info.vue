<template>
    <!-- 活动规则与奖励设置 -->
    <div class="m-rank-info">
        <div class="m-rank-txt" v-html="desc"></div>
    </div>
</template>

<script>
export default {
    props: [],
    data: function() {
        return {};
    },
    computed: {
        id: function() {
            return this.$store.state.id;
        },
        desc: function() {
            return this.$store.state.race.desc;
        },
    },
    methods: {},
    filters: {},
    mounted: function() {},
    created: function() {},
    components: {},
};
</script>

<style lang="less">
@import "../assets/css/race_info.less";
</style>
