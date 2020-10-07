<template>
    <div class="m-rank-info">
        <!-- 报名按钮 -->
        <div class="m-rank-btns">
            <a class="u-btn u-btn-join" href="./join.html" target="_blank">立即参与报名</a>
            <router-link class="u-btn u-btn-lucky" :to="lucky_url">参与奖池众筹</router-link>
        </div>
        <!-- 具体内容 -->
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
        note: function() {
            return this.$store.state.race.note;
        },
        lucky_url : function (){
            return '/' + this.id + '/lucky'
        }
    },
    methods: {},
    filters: {},
    mounted: function() {
    },
    created: function() {},
    components: {},
};
</script>

<style lang="less">
@import "../assets/css/info.less";
</style>
