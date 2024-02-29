<template>
    <div class="m-lover-process">
        <div class="u-page-title">
            <img class="u-img" :src="`${__imgRoot}process-title.png`" />
        </div>
        <LoverSteps :steps="data" />
    </div>
</template>

<script>
import LoverSteps from "@/components/lover/steps.vue";
import { getLoverProgress } from "@/service/lover";
export default {
    name: "LoverProcess",
    inject: ["__imgRoot"],
    components: { LoverSteps },
    data: function () {
        return {
            steps: [],
            process: {},
        };
    },
    computed: {
        limit() {
            return this.$store.state.info.join_limit;
        },
        loverId() {
            return this.$store.state.loverId;
        },
        params() {
            return {
                event_id: this.loverId,
                round: -1,
                pair: -1,
            };
        },
        data() {
            // 将进程和分组合并
            const process = this.process;
            return this.steps.map((item, i) => {
                const key = item.key;
                const list = process[i] || [];
                return {
                    key,
                    list,
                };
            });
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
        load() {
            // 获取所有进程并分组
            getLoverProgress(this.params).then((res) => {
                this.process = res.data.data.reduce((result, item) => {
                    const key = item.round;
                    if (!result[key]) {
                        result[key] = [];
                    }
                    result[key].push(item);
                    return result;
                }, {});
            });
        },
    },
    mounted() {
        this.load();
    },
};
</script>
<style lang="less">
@import "~@/assets/css/lover/process.less";
</style>
