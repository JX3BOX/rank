<template>
    <!-- 统计分析 -->
    <div
        class="m-rank-stat"
        v-loading="loading"
        element-loading-text="加载中..."
        element-loading-spinner="el-icon-loading"
        element-loading-background="rgba(0, 0, 0, 0.8)"
    >
        <el-row
            class="m-rank-boss"
            :gutter="20"
            type="flex"
            justify="space-between"
        >
            <el-col
                :span="4"
                v-for="(label, achieve_id) of bossList"
                :key="achieve_id"
            >
                <div
                    class="u-boss"
                    :class="{ on: achieve_id == current_boss }"
                    @click="changeBoss(achieve_id)"
                >
                    <span class="u-boss-name">{{ label }}</span>
                </div>
            </el-col>
        </el-row>

        <img
            :src="null_img_url"
            class="m-rank-null"
            v-if="
                stats['bar_server_all'] == undefined ||
                    stats['bar_server_all'][current_boss] == undefined
            "
        />
        <template v-else>
            <bar-chart
                v-if="ana[11]"
                :data="ana[11]['data']"
                :title="ana[11]['title']"
                height="450px"
            >
                <!-- <div>testtest</div> -->
            </bar-chart>

            <bar-chart
                v-if="ana[1]"
                :data="ana[1]['data']"
                :title="ana[1]['title']"
            >
                <!-- <div>testtest</div> -->
            </bar-chart>

            <template v-for="item of 9">
                <pie-chart
                    :key="item"
                    v-if="ana[item + 1]"
                    :data="ana[item + 1]['data']"
                    :title="ana[item + 1]['title']"
                    :isCustomColor="
                        ana[item + 1]['isCustomColor'] === undefined
                            ? true
                            : ana[item + 1]['isCustomColor']
                    "
                    :isSmall="ana[item + 1]['position'] !== undefined"
                    :class="{
                        'chart-left': ana[item + 1]['position'] === 'left',
                        'chart-right': ana[item + 1]['position'] === 'right',
                    }"
                ></pie-chart>
            </template>
        </template>
    </div>
</template>

<script>
import achieves from "@/assets/data/achieve.json";
import { __imgPath } from "@jx3box/jx3box-common/data/jx3box.json";
import _ from "lodash";
import BarChart from "../components/barChart.vue";
import servers from "@jx3box/jx3box-data/data/server/server_list.json";
import PieChart from "../components/pieChart.vue";
import schools from "@jx3box/jx3box-data/data/xf/school.json";
import xfids from "@jx3box/jx3box-data/data/xf/xfid.json";
import { axios, realUrl } from "@/service/api.js";
import { __Root } from "@jx3box/jx3box-common/data/jx3box.json";

export default {
    props: [],
    components: {
        BarChart,
        PieChart,
    },
    data: function() {
        return {
            null_img_url: __imgPath + "image/rank/common/null.png",
            loading: false,
            current_boss: "",
            ana: {},
            stats: {},
        };
    },
    computed: {
        id: function() {
            return this.$store.state.id;
        },
        bossList: function() {
            let tmp = achieves[this.id];
            // if (tmp) {
            //     tmp[0] = "综合";
            // }
            return tmp || [];
        },
    },
    watch: {
        current_boss: function() {
            this.loadData();
        },
        "$route.query.aid": function(val) {
            this.current_boss = val;
            this.loadData();
        },
    },
    created() {
        this.current_boss = _.first(Object.keys(this.bossList));
    },
    mounted() {
        if (this.$route.query.aid) {
            this.current_boss = this.$route.query.aid;
        }
        this.loading = true;
        this.getStats().finally(() => {
            this.loading = false;
        });
    },
    methods: {
        changeBoss: function(val) {
            this.current_boss = val;
            this.server = "";

            if (this.stats["bar_server_all"][this.current_boss] == undefined) {
                return false;
            }

            let tmpAna = {};
            this.ana = tmpAna;
            for (let item = 1; item <= 11; ++item) {
                eval(`this.doAna${item}()`);
            }
            // this.doAna1();
            // this.doAna2();
            // this.doAna3();
            // this.doAna4();
        },
        loadData: function() {
            if (!this.id) return;

            // this.loading = true;
            // getTop100(this.current_boss)
            //     .then((res) => {
            //         this.origin_data = res.data.data;
            //     })
            //     .finally(() => {
            //         this.loading = false;
            //     });
        },
        getStats() {
            return axios(
                realUrl(__Root, `rank-analysis/stats/event${this.id}.json`),
                "GET",
                false
            )
                .then((res) => {
                    this.stats = res;
                })
                .catch((err) => {
                    this.$message.error("加载统计文件失败");
                })
                .then(() => {
                    this.changeBoss(this.current_boss);
                    this.loading = false;
                });
        },
        doAna1() {
            // 1-区服-bar: 各个boss每个区服各有多少各团队
            if (this.current_boss == "0") {
                this.ana[1] = undefined;
                return false;
            }
            let fullData = this.stats["bar_server_all"][this.current_boss];
            let data = fullData["data"];
            let exist_servers = fullData["servers"];
            let none_servers = servers
                .reverse()
                .filter((server) => {
                    return !exist_servers.includes(server);
                })
                .map((server) => {
                    return [0, server];
                });
            this.ana[1] = {
                data: none_servers.concat(data),
                title: "区服入榜团队数量",
            };
        },
        doAna2() {
            // 2-Boss职业比例-pie
            if (this.current_boss == "0") {
                this.ana[2] = undefined;
                return false;
            }
            let data = this.stats["pie_school_ratio"][this.current_boss];
            Object.keys(schools["school"])
                .filter((each) => {
                    return (
                        !data
                            .map((item) => {
                                return item["name"];
                            })
                            .includes(each) && each !== "江湖"
                    );
                })
                .forEach((item) => {
                    data.push({
                        name: item,
                        value: 0,
                    });
                });
            this.ana[2] = { data: data, title: "全门派出场率" };
        },
        doAna3() {
            // 3-Boss心法比例-pie
            if (this.current_boss == "0") {
                this.ana[3] = undefined;
                return false;
            }
            let data = this.stats["pie_xf_ratio"][this.current_boss];
            Object.values(xfids)
                .filter((each) => {
                    return (
                        !data
                            .map((item) => {
                                return item["name"];
                            })
                            .includes(each) && each !== "通用"
                    );
                })
                .forEach((item) => {
                    data.push({
                        name: item,
                        value: 0,
                    });
                });
            this.ana[3] = { data: data, title: "全心法出场率" };
        },
        doAna4() {
            // 4-Boss奶妈数量-pie
            if (this.current_boss == "0") {
                this.ana[4] = undefined;
                return false;
            }
            let data = this.stats["pie_hps_count"][this.current_boss];

            this.ana[4] = {
                data: data,
                title: "各团出场治疗心法数量",
                isCustomColor: false,
                position: "left",
            };
        },
        doAna5() {
            // 5-BossT数量-pie
            if (this.current_boss == "0") {
                this.ana[6] = undefined;
                return false;
            }
            let data = this.stats["pie_tank_count"][this.current_boss];

            this.ana[6] = {
                data: data,
                title: "各团出场防御心法数量",
                isCustomColor: false,
                position: "left",
            };
        },
        doAna6() {
            // 6-Boss外功内功比例-pie
            if (this.current_boss == "0") {
                this.ana[9] = undefined;
                return false;
            }
            let data = this.stats["pie_neiwaigong_ratio"][this.current_boss];

            this.ana[9] = {
                data: data,
                title: "内外功出场比例",
                isCustomColor: false,
            };
        },
        doAna7() {
            // 7-BossDPS各心法比例-pie
            if (this.current_boss == "0") {
                this.ana[8] = undefined;
                return false;
            }
            let data = this.stats["pie_dps_xf_ratio"][this.current_boss];

            this.ana[8] = {
                data: data,
                title: "各输出心法出场率",
            };
        },
        doAna8() {
            // 8-Boss奶妈各心法比例-pie
            if (this.current_boss == "0") {
                this.ana[5] = undefined;
                return false;
            }
            let data = this.stats["pie_hps_xf_ratio"][this.current_boss];

            this.ana[5] = {
                data: data,
                title: "各治疗心法出场率",
                position: "right",
            };
        },
        doAna9() {
            // 9-BossT各心法比例-pie
            if (this.current_boss == "0") {
                this.ana[7] = undefined;
                return false;
            }
            let data = this.stats["pie_tank_xf_ratio"][this.current_boss];

            this.ana[7] = {
                data: data,
                title: "各防御心法出场率",
                position: "right",
            };
        },
        doAna10() {
            // 10-团长职业类型分布-pie
            if (this.current_boss == "0") {
                this.ana[10] = undefined;
                return false;
            }
            let data = this.stats["pie_leader_type_ratio"][this.current_boss];

            this.ana[10] = {
                data: data,
                title: "团长职业类型分布",
                isCustomColor: false,
            };
        },
        doAna11() {
            // 11-前十区服分布
            if (this.current_boss == "0") {
                this.ana[11] = undefined;
                return false;
            }
            let fullData = this.stats["bar_server_top10"][this.current_boss];
            let data = fullData["data"];
            // let exist_servers = fullData["servers"];
            // let none_servers = servers
            //     .reverse()
            //     .filter((server) => {
            //         return !exist_servers.includes(server);
            //     })
            //     .map((server) => {
            //         return [0, server];
            //     });
            this.ana[11] = {
                // data: none_servers.concat(data),
                data: data,
                title: "前十名区服分布",
            };
        },
    },
    filters: {},
};
</script>

<style lang="less">
@import "../assets/css/race_stat.less";
</style>
