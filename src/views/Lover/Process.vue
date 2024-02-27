<template>
    <div class="m-lover-process">
        <div class="u-page-title">
            <img class="u-img" :src="`${__imgRoot}process-title.png`" />
        </div>
        <div class="m-process-main">
            <div class="m-step" v-for="item in 5" :key="item">
                <div class="m-group">
                    <LoverBattle />
                    <LoverBattle />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import LoverBattle from "@/components/lover/battle.vue";
export default {
    name: "LoverProcess",
    inject: ["__imgRoot"],
    components: { LoverBattle },
    data: function () {
        return {};
    },
    computed: {},
    methods: {},
};
</script>
<style lang="less">
@import "~@/assets/css/lover/process.less";
</style>
