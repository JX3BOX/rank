<template>
    <div
        class="m-rank-stat"
        v-loading="loading"
        element-loading-text="加载中..."
        element-loading-spinner="el-icon-loading"
        element-loading-background="rgba(0, 0, 0, 0.8)"
    >
        <!-- <img :src="null_img_url" class="m-rank-null" /> -->
        <el-row
            class="m-rank-boss"
            :gutter="20"
            type="flex"
            justify="space-between"
        >
            <el-col
                :span="3"
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

        <bar-chart v-if="ana[1]" :data="ana[1]['data']">
            <!-- <div>testtest</div> -->
        </bar-chart>
        <template v-for="item of 10">
            <pie-chart
                :key="item"
                v-if="ana[item + 1]"
                :data="ana[item + 1]['data']"
                :title="ana[item + 1]['title']"
                :isCustomColor="ana[item+1]['isCustomColor'] === undefined ? true : ana[item+1]['isCustomColor']"
            ></pie-chart>
        </template>
    </div>
</template>

<script>
import achieves from "@/assets/data/achieve.json";
import { __imgPath } from "@jx3box/jx3box-common/js/jx3box.json";
import _ from "lodash";
import BarChart from "../components/barChart.vue";
import servers from "@jx3box/jx3box-data/data/server/server_list.json";
import stats from "@/assets/data/stats.json";
import PieChart from "../components/pieChart.vue";
import schools from "@jx3box/jx3box-data/data/xf/school.json";
import xfids from "@jx3box/jx3box-data/data/xf/xfid.json";
export default {
    props: [],
    components: {
        BarChart,
        PieChart,
    },
    data: function () {
        return {
            null_img_url: __imgPath + "image/rank/common/null.png",
            loading: false,
            current_boss: "",
            ana: {},
        };
    },
    computed: {
        id: function () {
            return this.$store.state.id;
        },
        bossList: function () {
            let tmp = achieves[this.id];
            if (tmp) {
                tmp[0] = "综合";
            }
            return tmp || [];
        },
    },
    watch: {
        current_boss: function () {
            this.loadData();
        },
        "$route.query.aid": function (val) {
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
    },
    methods: {
        changeBoss: function (val) {
            this.current_boss = val;
            this.server = "";
            for(let item = 1 ; item <= 10 ; ++item) {
                eval(`this.doAna${item}()`)
            }
            // this.doAna1();
            // this.doAna2();
            // this.doAna3();
            // this.doAna4();
        },
        loadData: function () {
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
        doAna1() {
            // 1-区服-bar: 各个boss每个区服各有多少各团队
            if (this.current_boss == "0") {
                this.ana[1] = undefined;
                return false;
            }
            let data = stats["1"][this.current_boss]["data"];
            let exist_servers = stats["1"][this.current_boss]["servers"];
            let none_servers = servers
                .reverse()
                .filter((server) => {
                    return !exist_servers.includes(server);
                })
                .map((server) => {
                    return [0, server];
                });
            this.ana[1] = { data: none_servers.concat(data) };
        },
        doAna2() {
            // 2-Boss职业比例-pie
            if (this.current_boss == "0") {
                this.ana[2] = undefined;
                return false;
            }
            let data = stats["2"][this.current_boss];
            // console.log(data)
            Object.keys(schools["school"]).filter((each) => {
                return !data.map((item) => {
                    return item["name"];
                }).includes(each) && each !== "江湖"
            }).forEach(item => {
                data.push({
                    name: item,
                    value: 0
                })
            })
            this.ana[2] = { data: data, title: "门派出场率" };
        },
        doAna3() {
            // 3-Boss心法比例-pie
            if (this.current_boss == "0") {
                this.ana[3] = undefined;
                return false;
            }
            let data = stats["3"][this.current_boss];
            console.log(data)
            Object.values(xfids).filter((each) => {
                return !data.map((item) => {
                    return item["name"];
                }).includes(each) && each !== "通用"
            }).forEach(item => {
                data.push({
                    name: item,
                    value: 0
                })
            })
            this.ana[3] = { data: data, title: "心法出场率" };
        },
        doAna4() {
            // 4-Boss奶妈数量-pie
            if (this.current_boss == "0") {
                this.ana[4] = undefined;
                return false;
            }
            let data = stats["4"][this.current_boss];
            
            this.ana[4] = { data: data, title: "使用奶妈数量", isCustomColor: false };
        },
        doAna5() {
            // 5-BossT数量-pie
            if (this.current_boss == "0") {
                this.ana[5] = undefined;
                return false;
            }
            let data = stats["5"][this.current_boss];
            
            this.ana[5] = { data: data, title: "使用Tank数量", isCustomColor: false };
        },
        doAna6() {
            // 6-Boss外功内功比例-pie
            if (this.current_boss == "0") {
                this.ana[6] = undefined;
                return false;
            }
            let data = stats["6"][this.current_boss];
            
            this.ana[6] = { data: data, title: "外功内功出场人数比例", isCustomColor: false };
        },
        doAna7() {
            // 7-BossDPS各心法比例-pie
            if (this.current_boss == "0") {
                this.ana[7] = undefined;
                return false;
            }
            let data = stats["7"][this.current_boss];
            
            this.ana[7] = { data: data, title: "DPS各心法出场人数比例"};
        },
        doAna8() {
            // 8-Boss奶妈各心法比例-pie
            if (this.current_boss == "0") {
                this.ana[8] = undefined;
                return false;
            }
            let data = stats["8"][this.current_boss];
            
            this.ana[8] = { data: data, title: "奶妈各心法出场人数比例", isCustomColor: false };
        },
        doAna9() {
            // 9-BossT各心法比例-pie
            if (this.current_boss == "0") {
                this.ana[9] = undefined;
                return false;
            }
            let data = stats["9"][this.current_boss];
            
            this.ana[9] = { data: data, title: "Tank各心法出场人数比例", isCustomColor: false };
        },
        doAna10() {
            // 10-团长职业类型分布-pie
            if (this.current_boss == "0") {
                this.ana[10] = undefined;
                return false;
            }
            let data = stats["10"][this.current_boss];
            
            this.ana[10] = { data: data, title: "团长职业类型分布", isCustomColor: false };
        },
    },
    filters: {},
};
</script>

<style lang="less">
@import "../assets/css/race_stat.less";
</style>
