<template>
    <!-- 排行榜成绩 -->
    <div
        class="m-rank-rank"
        v-loading="loading"
        element-loading-text="加载中..."
        element-loading-spinner="el-icon-loading"
        element-loading-background="rgba(0, 0, 0, 0.3)"
    >
        <el-row class="m-rank-boss m-rank-filter" :gutter="20" type="flex">
            <el-col :span="span" v-for="(label, aid) of bossList" :key="aid">
                <li class="u-boss" @click="changeBoss(aid)" :class="{ on: aid == achieve_id || label == bossName }">
                    <img class="u-boss-icon" :src="bossIcon(aid)" :onerror="defaultBossIcon" />
                    <span class="u-boss-name">{{ label }}</span>
                    <span class="u-boss-per" :class="getProcessCls(getTotal(aid))"
                        >({{ getTotal(aid) }}/100)</span
                    >
                </li>
            </el-col>
        </el-row>

        <div class="m-rank-server m-rank-filter">
            <ul>
                <el-checkbox border class="u-pre" size="mini" :value="isPre" @change="onPreChange"  v-if="preBossData && preBossData.length">预赛</el-checkbox>
                <li :class="{ on: !server }" @click="changeServer('')">全区全服</li>
                <li v-for="item in servers" :key="item" @click="changeServer(item)" :class="{ on: server == item }">
                    {{ item }}
                </li>
            </ul>
        </div>

        <div class="m-rank-top100">
            <!-- A.列表不为空 -->
            <div class="m-rank-top100-list" v-if="data && data.length" :class="{ 'not-last': !isLastBoss }">
                <rank-item v-for="(item, i) in data" :key="i" :i="i" :item="item" :isLastBoss="isLastBoss"></rank-item>
            </div>

            <!-- B.列表为空 -->
            <div class="m-rank-top100-null" v-else>
                <img :src="`${imgPath}image/rank/common/null.png`" class="m-rank-null" />
            </div>
        </div>
    </div>
</template>

<script>
import { __imgPath } from "@jx3box/jx3box-common/data/jx3box.json";
// import achieves from "@/assets/data/achieve.json";
import servers from "@jx3box/jx3box-data/data/server/server_cn.json";
import _ from "lodash";
import { getTop100, getTopTotal, getEventNewbie, getBossAid } from "@/service/race.js";
import PICS from "@/assets/js/pics.js";
import rank_item from "@/components/rank_item.vue";

export default {
    components: {
        "rank-item": rank_item,
    },
    props: [],
    data: function () {
        return {
            loading: false,
            servers: ["跨服", ...servers],

            achieve_id: "", //boss成就ID
            server: "", //服务器

            total: "",
            origin_data: [],
            imgPath: __imgPath,

            // 是否预赛
            isPre: false,
            preBossData: [],

            newbie: {
                keep_10: [],
                youngster_list: [],
            },
        };
    },
    computed: {
        id: function () {
            return this.$store.state.id;
        },
        race: function () {
            return this.$store.state.race;
        },
        achieves: function () {
            return this.$store.state.achieves || [];
        },
        bossList: function () {
            let dict = {};
            this.achieves.forEach((item) => {
                dict[item.achievement_id] = item.name;
            });
            return dict;
        },
        bossName: function () {
            const arr = this.achieves.concat(this.preBossData);
            const dict = arr.reduce((acc, cur) => {
                acc[cur.achievement_id] = cur.name;
                return acc;
            }, {});
            return dict[this.achieve_id];
        },
        aids: function () {
            const bossList = this.isPre ? this.preBossData?.reduce((acc, cur) => {
                acc[cur.achievement_id] = cur.name;
                return acc;
            }, {}) : this.bossList;
            return Object.keys(bossList).join(",");
        },
        span: function () {
            return ~~(24 / Object.keys(this.bossList).length);
        },
        data: function () {
            // let data = (this.server ? this.local_data : this.origin_data) || [];
            let data = this.origin_data || [];
            data = data.filter((item) => !item.superstar); // 去除天团榜
            data.forEach((team, i) => {
                let leader_name = team.leader;
                let members = team.teammate.split(";");
                let arr = [];
                let leader = "";
                members.forEach((member, j) => {
                    let result = member.split(",");
                    if (result[0] != leader_name) {
                        arr.push(result);
                    } else {
                        leader = result;
                    }
                });
                data[i]["members"] = arr;
                data[i]["leaders"] = leader;
            });
            return data;
        },
        params: function () {
            const server = this.server === "跨服" ? "" : this.server;
            return {
                server,
                achieve_id: ~~this.achieve_id,
            };
        },
        defaultBossIcon: function (e) {
            return `this.src='${this.bossIcon("0")}';this.onerror=null`;
        },
        // 是否为关底boss
        isLastBoss: function () {
            return this.achieve_id == this.achieves[this.achieves.length - 1]?.achievement_id;
        },
    },
    methods: {
        changeBoss: function (val) {
            this.server = "";
            const bossName = this.bossList[val];
            const id = this.isPre ? this.preBossData.find(item => item.name == bossName).achievement_id : val;
            this.achieve_id = id;
            this.$router.push({
                query: {
                    aid: id,
                },
            });
        },
        changeServer: function (val) {
            this.server = val;
        },
        loadData: function () {
            if (!this.achieve_id) {
                return;
            }
            this.loading = true;
            getTop100(this.params, this.id)
                .then(async (res) => {
                    this.origin_data = res.data.data || [];

                    if (this.isLastBoss) {
                        const newbieRes = await getEventNewbie(this.id);
                        const keep_10 = newbieRes.data.data.keep_10?.map((item) => item.ID) || [];
                        const youngster_list = newbieRes.data.data.youngster_list?.map((item) => item.ID) || [];

                        this.origin_data.forEach((item) => {
                            this.$set(item, "is_newbie", false);
                            this.$set(item, "is_youngster", false);
                            if (keep_10.includes(item.team_id)) {
                                item.is_newbie = true;
                            }
                            if (youngster_list.includes(item.team_id)) {
                                item.is_youngster = true;
                            }
                        });
                    }

                    if (this.server == "跨服") {
                        this.origin_data = this.origin_data.filter((item) => item.leader?.includes("·"));
                    } else {
                        this.origin_data = Object.freeze(this.origin_data);
                    }
                })
                .finally(() => {
                    this.loading = false;
                });
        },
        getProcessCls: function (count) {
            count = ~~count;
            if (count < 100) {
                return "isLess";
            } else {
                return "isDanger";
            }
            // 原判断
            // if (count < 30) {
            //     return "isLess";
            // } else if (count < 70) {
            //     return "isMore";
            // } else if (count < 100) {
            //     return "isDanger";
            // } else {
            //     return "isFull";
            // }
        },
        bossIcon: function (val) {
            return PICS.bossIcon(val);
        },
        loadPreBossAid() {
            getBossAid({ rank_id: this.id, is_rank_boss: 2, _no_page: 1 }).then((res) => {
                this.preBossData = res.data.data?.map(item => {
                    return {
                        achievement_id: item.aid,
                        event_id: item.rank_id,
                        name: item.name,
                    }
                })
            });
        },
        getTotal(aid) {
            const bossName = this.bossList[aid];
            const id = this.isPre ? this.preBossData.find(item => item.name == bossName).achievement_id : aid;
            return this.total[id] > 100 ? 100 : this.total[id];
        },
        onPreChange() {
            if (!this.preBossData?.length) return;
            this.isPre = !this.isPre;
        }
    },
    watch: {
        race: {
            deep: true,
            immediate: true,
            handler: function (val) {
                if (val && !val?.status) {
                    const aid = this.achieves[this.achieves.length - 1].achievement_id;
                    this.$router.push({ query: {
                        aid,
                    } })
                }
            },
        },
        // 修改赛事
        id: {
            handler: function (val) {
                val && this.loadData();
            },
        },
        // 修改服务器与boss
        params: {
            deep: true,
            handler: function (val) {
                this.loadData();
            },
        },
        "$route.query": {
            handler: function (val) {
                if (val.aid) {
                    this.achieve_id = val.aid;
                }
                if (val.server) {
                    this.server = val.server;
                }
            },
            immediate: true,
        },
        achieves: {
            immediate: true,
            handler: function () {
                if (!!~~this.$route.query.aid) {
                    this.achieve_id = this.$route.query.aid;
                } else {
                    this.achieve_id = _.first(Object.keys(this.bossList));
                }
            },
        },
        aids: {
            immediate: true,
            handler: function (val) {
                val &&
                    getTopTotal(val).then((res) => {
                        this.total = res.data.data;
                    });
            },
        },
        isPre(val) {
            if (val) {
                this.achieve_id = this.preBossData[0].achievement_id;
            } else {
                this.achieve_id = this.achieves[0].achievement_id;
            }
        },
    },
    mounted: function () {
        this.loadPreBossAid();
    },
};
</script>
<style lang="less">
@import "~@/assets/css/race_rank.less";
</style>
