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
        },
        isCustomColor: {
            type: Boolean,
            default: true,
        },
        seriesName:{
            type:String,
            default:'团队数量'
        }
    },
    watch: {
        data(newVal, oldVal) {
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
                backgroundColor: 'transparent',
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
                        name: this.seriesName,
                        type: "bar",
                        data: this.data,
                        itemStyle: {
                            color: this.isCustomColor
                                ? (param) => {
                                    switch (param.name) {
                                        case "天策":
                                            return "#EC4B2C";
                                            break;
                                        case "万花":
                                            return "#BA9BE4";
                                            break;
                                        case "纯阳":
                                            return "#37C0E2";
                                            break;
                                        case "七秀":
                                            return "#FF7DAD";
                                            break;
                                        case "少林":
                                            return "#E6BC31";
                                            break;
                                        case "藏剑":
                                            return "#FDDD70";
                                            break;
                                        case "丐帮":
                                            return "#D6A16F";
                                            break;
                                        case "明教":
                                            return "#f16040";
                                            break;
                                        case "五毒":
                                            return "#4B9BFB";
                                            break;
                                        case "唐门":
                                            return "#90CC50";
                                            break;
                                        case "苍云":
                                            return "#6568ad";
                                            break;
                                        case "长歌":
                                            return "#6DDFE2";
                                            break;
                                        case "霸刀":
                                            return "#8D90D8";
                                            break;
                                        case "蓬莱":
                                            return "#94C7DC";
                                            break;
                                        case "凌雪":
                                            return "#872F37";
                                            break;
                                        case "衍天":
                                            return "#b9c1ff";
                                            break;
                                        case "药宗":
                                            return "#16708a";
                                            break;
                                        case "冰心诀":
                                            return "#FF7DAD";
                                            break;
                                        case "云裳心经":
                                            return "#ffadcb";
                                            break;
                                        case "花间游":
                                            return "#BA9BE4";
                                            break;
                                        case "离经易道":
                                            return "#d8c4ff";
                                            break;
                                        case "毒经":
                                            return "#4B9BFB";
                                            break;
                                        case "补天诀":
                                            return "#7db8ff";
                                            break;
                                        case "莫问":
                                            return "#6DDFE2";
                                            break;
                                        case "相知":
                                            return "#78f0f3";
                                            break;
                                        case "傲血战意":
                                            return "#EC4B2C";
                                            break;
                                        case "铁牢律":
                                            return "#d43618";
                                            break;
                                        case "易筋经":
                                            return "#E6BC31";
                                            break;
                                        case "洗髓经":
                                            return "#b58f12";
                                            break;
                                        case "焚影圣诀":
                                            return "#f16040";
                                            break;
                                        case "明尊琉璃体":
                                            return "#c55036";
                                            break;
                                        case "分山劲":
                                            return "#6568ad";
                                            break;
                                        case "铁骨衣":
                                            return "#4f5186";
                                            break;
                                        case "紫霞功":
                                            return "#37C0E2";
                                            break;
                                        case "太虚剑意":
                                            return "#48d6f9";
                                            break;
                                        case "天罗诡道":
                                            return "#90CC50";
                                            break;
                                        case "惊羽诀":
                                            return "#a2e05f";
                                            break;
                                        case "问水诀":
                                            return "#FDDD70";
                                            break;
                                        case "山居剑意":
                                            return "#FDDD70";
                                            break;
                                        case "笑尘诀":
                                            return "#D6A16F";
                                            break;
                                        case "北傲诀":
                                            return "#8D90D8";
                                            break;
                                        case "凌海诀":
                                            return "#94C7DC";
                                            break;
                                        case "隐龙诀":
                                            return "#872F37";
                                            break;
                                        case "太玄经":
                                            return "#b9c1ff";
                                            break;
                                        case "无方":
                                            return "#16708a";
                                            break;
                                        case "灵素":
                                            return "#39bf9b";
                                            break;
                                        default:
                                            return undefined;
                                            break;
                                    }
                                }
                                : "",
                        }
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
