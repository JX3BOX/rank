<template>
    <div class="m-race-tab">
        <router-link
            class="u-item"
            :to="link(key)"
            v-for="(label, key) in visible_blocks"
            :key="key"
            >{{ label }}</router-link
        >
    </div>
</template>

<script>
import blocks from "@/assets/data/blocks.json";
export default {
    props: ['data'],
    data: function() {
        return {
        };
    },
    computed: {
        id : function (){
            return this.$store.state.id  
        },
        visible_blocks: function() {
            let enabled_blocks = this.data && this.data.blocks || [];
            let tabs = {};
            enabled_blocks.forEach((item) => {
                tabs[item] = blocks[item];
            });
            return tabs;
        },
    },
    methods: {
        link: function(val) {
            // return "/" + this.id + "/" + val;
            return "/" + val;
        },
    },
    filters: {},
};
</script>

<style lang="less">
@import "../assets/css/race_tab.less";
</style>
