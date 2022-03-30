<template>
    <!-- 活动规则与奖励设置 -->
    <div class="m-rank-info">
        <div class="m-rank-btns">
            <a class="u-btn u-btn-join" href="../join/" target="_blank" rel="noopener">立即参与报名</a>
        <!-- <a class="u-btn u-btn-lucky" href="/fb" target="_blank" rel="noopener">副本开荒攻略</a> -->
        </div>
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
