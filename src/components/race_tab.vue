<template>
    <div class="m-race-tab">
        <router-link class="u-item" :to="link(key)" v-for="(label, key) in views" :key="key">{{
            label
        }}</router-link>
    </div>
</template>

<script>
import views from '@/assets/data/blocks.json'
// TODO:开启部分调用远程数据
import enablemap from '@/assets/data/enablemap.js'
export default {
    props: [],
    data: function() {
        return {
            
        };
    },
    computed: {
        id: function() {
            return this.$store.state.id;
        },
        // 当前活动启用的模块
        views : function (){
            let blocks = enablemap[this.id]
            let tabs = {}
            blocks.forEach((item) => {
                tabs[item] = views[item]
            })
            return tabs
        }
    },
    methods: {
        link: function(val) {
            return "/" + this.id + "/" + val;
        },
    },
    filters: {},
};
</script>

<style lang="less">
@import "../assets/css/race_tab.less";
</style>
