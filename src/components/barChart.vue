<template>
    <div class="c-chart" :style="{'--height': height}">
        <v-chart :options="barOption" theme="jx3box-dark"/>
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: "barChart",
    components: {
        // HelloWorld
    },
    props: {
        data: {
            type: Array,
            required: true,
        },
        desc: {
            type: String,
            required: false,
        },
        title: {
            type: String,
            required: true,
        },
        height: {
            type: String,
            default: '800px'
        }
    },
    watch: {
        data(newVal, oldVal) {
            console.log(newVal);
            this.barOption.series[0].data = newVal;
        },
    },
    data() {
        let data = [];

        for (let i = 0; i <= 360; i++) {
            let t = (i / 180) * Math.PI;
            let r = Math.sin(2 * t) * Math.cos(2 * t);
            data.push([r, i]);
        }

        return {
            barOption: {
                title: {
                    show: true,
                    text: `${this.title}统计图`,
                },
                tooltip: {
                    trigger: "axis",
                    axisPointer: {
                        type: "shadow",
                    },
                },
                grid: {
                    left: "3%",
                    right: "4%",
                    bottom: "3%",
                    containLabel: true,
                },
                xAxis: {
                    type: "value",
                    boundaryGap: [0, 0.01],
                    position: "top",
                    minInterval: 1
                },
                yAxis: {
                    type: "category",
                },
                series: [
                    {
                        name: "团队数量",
                        type: "bar",
                        data: this.data,
                    },
                ],
            },
        };
    },
    computed: {
        isName() {
            return false;
        },
    },
    methods: {
        name() {},
    },
};
</script>

<style scoped lang="less">
.c-chart {
    .mt(50px);
}
.echarts {
    width: 100%;
    height: var(--height);
}
</style>