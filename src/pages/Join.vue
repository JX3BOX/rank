<template>
    <div id="app" class="m-rank-container">
        <Header></Header>
        <div class="m-rank-join">
            <div class="m-rank-header"></div>
            <div class="m-rank-content">
                <router-view></router-view>
            </div>
        </div>
        <Footer></Footer>
    </div>
</template>

<script>
export default {
    name: "App",
    props: [],
    data: function() {
        return {};
    },
    computed: {
    },
    methods: {},
    beforeCreate: function() {
    },
    components: {
    },
};
</script>

<style lang="less">
@import "../assets/css/join.less";
</style>
