<!--
 * @Author: zhusha 
 * @Date: 2024-07-22 02:43:39
 * @LastEditors: zhusha
 * @LastEditTime: 2024-07-27 03:58:15
 * @Description: 死亡数据统计
 * 
 * Copyright (c) 2024 by zhusha, email: no email, All Rights Reserved. 
-->
<template>
    <div class="m-superstar-die">
        <div class="m-superstar-title">死亡数据统计</div>
        <div class="u-data-box">
            <div class="u-data-left">
                <div class="u-die-pie">
                    <v-chart :options="pieOption" ref="chart" />
                </div>
            </div>
            <div class="u-date-right">
                <div class="u-die-box">
                    <div class="u-die-item" v-for="(item, i) in data" :key="i">
                        <div class="u-die-log"><img :src="item.team_logo" /></div>
                        <div class="u-die-number">{{ item.death }}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        data: {
            type: Array,
            default: () => [],
        },
    },
    components: {},
    data() {
        return {
            pieOption: {},
        };
    },
    watch: {
        data: {
            immediate: true,
            handler: function (val) {
                val && this.setPie();
            },
        },
    },
    created() {},
    mounted() {},
    methods: {
        setPie() {
            let arr = [],
                legend = [];

            this.data.forEach((item) => {
                arr.push({
                    name: item.team,
                    value: item.death,
                });
                legend.push(item.team);
            });
            let options = {
                // tooltip: {
                //     show: true,
                //     trigger: "item",
                //     confine: true,
                //     formatter: "{a} <br/>{b} : {c} ({d}%)",
                // },
                tooltip: {
                    trigger: "item",
                    color: "#fff",
                    backgroundColor: "rgba(0,0,0,.5)", // 自定义背景颜色
                    fontSize: 14,
                    borderColor: "rgba(255, 255, 255, .16)", // 自定义边框颜色
                    textStyle: {
                        color: "#fff", // 自定义文字颜色
                        fontSize: 14, // 自定义文字大小
                    },
                    axisPointer: {
                        lineStyle: {
                            color: "rgba(28, 124, 196, .6)",
                        },
                    },
                    //             // 自定义内容
                    //             formatter: (params) => {
                    //                 return `
                    // 	<div>${params[0].name}</div>
                    // 	<div>${params[0].marker}重量：<span style="color: #09ffd2;font-weight: bold;">${params[0].data}</span> kg</div>
                    // `;
                    //             },
                },

                legend: {
                    type: "plain",
                    orient: "horizontal",

                    data: legend,
                    icon: "circle",
                },

                series: [
                    {
                        name: "死亡数",
                        type: "pie",
                        data: arr,
                        radius: "80%",
                        label: {
                            normal: {
                                show: false,
                            },
                        },
                        labelLine: {
                            normal: {
                                show: false,
                            },
                        },
                    },
                ],
            };
            this.$nextTick(() => {
                this.pieOption = options;
            });
        },
    },
};
</script>

<style></style>
