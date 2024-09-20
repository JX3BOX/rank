<template>
    <div class="p-surprise">
        <Header></Header>
        <router-view></router-view>
        <Footer></Footer>
    </div>
</template>

<script>
// import store from "@/store/lover";
export default {
    name: "Surprise",
    data: function () {
        return {};
    },

    computed: {},
    methods: {},
    mounted() {},
};
</script>

<style lang="less">
@import "../assets/css/surprise/index.less";
</style>
