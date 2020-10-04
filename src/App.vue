<template>
    <div id="app" class="m-rank-container">
        <Header></Header>
        <div class="m-rank-index">
            <div class="m-rank-header"></div>
            <div class="m-rank-content">
                <ul>
                    <li class="u-item">
                        <a href="/fb/?fb_zlp=%E4%B8%96%E5%A4%96%E8%93%AC%E8%8E%B1&fb_name=%E8%8C%83%E9%98%B3%E5%A4%9C%E5%8F%98#/rank" target="_blank">安小逢百强榜</a>
                    </li>
                    <li class="u-item">
                        <a href="/rank/#/1/">奉天证道</a>
                    </li>
                </ul>
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
@import "./assets/css/index.less";
</style>
