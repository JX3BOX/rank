<template>
    <div class="m-lover-process">
        <div class="u-page-title">
            <img class="u-img" :src="`${__imgRoot}process-title.png`" />
        </div>
        <LoverSteps :steps="steps" />
    </div>
</template>

<script>
import LoverSteps from "@/components/lover/steps.vue";
export default {
    name: "LoverProcess",
    inject: ["__imgRoot"],
    components: { LoverSteps },
    data: function () {
        return {
            steps: [],
        };
    },
    computed: {
        limit() {
            return this.$store.state.info.join_limit;
        },
    },
    watch: {
        limit: {
            handler: function (number) {
                number && this.getStep(number);
            },
            immediate: true,
        },
    },
    methods: {
        getStep(number) {
            const steps = [{ key: 0, value: [] }];
            while (number !== 1) {
                number /= 2;
                steps.push({ key: number, value: [] });
            }
            steps.sort((a, b) => b.key - a.key);
            this.steps = steps;
        },
    },
};
</script>
<style lang="less">
@import "~@/assets/css/lover/process.less";
</style>
