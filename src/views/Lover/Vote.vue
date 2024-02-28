<template>
    <div class="m-lover-vote">
        <div class="u-page-title">
            <img class="u-img" :src="`${__imgRoot}vote-title.png?11`" />
        </div>
        <div class="m-line-box">
            <div class="m-box">
                <h2>投票规则</h2>
            </div>
        </div>
        <div class="m-vote-list">
            <div class="m-line-box" v-for="item in 8" :key="item">
                <div class="m-box">
                    <div class="u-hot">人气值</div>
                    <el-image class="u-img" src="">
                        <i slot="error"></i>
                    </el-image>
                    <div class="u-team">{{ `队伍名` }}</div>
                    <div class="u-name"><strong>角色名</strong><strong>角色名</strong></div>
                    <div class="u-slogan">队伍宣言</div>
                    <div class="u-button"></div>
                </div>
            </div>
        </div>
        <el-pagination
            class="m-pagination"
            background
            :total="total"
            hide-on-single-page
            layout="prev, pager, next"
            :current-page="index"
            :page-size="pageSize"
            @current-change="changePage"
        ></el-pagination>
    </div>
</template>

<script>
import { getJoinList } from "@/service/lover";
export default {
    name: "LoverVote",
    inject: ["__imgRoot"],
    data: function () {
        return {
            pageSize: 30,
            index: 1,
            list: [],
            total: 0,
        };
    },
    computed: {
        loverId() {
            return this.$store.state.loverId;
        },
        params() {
            return {
                pageSize: this.pageSize,
                index: this.index,
            };
        },
    },
    watch: {
        params: {
            deep: true,
            immediate: true,
            handler: function () {
                this.load();
            },
        },
    },
    methods: {
        load() {
            getJoinList(this.loverId).then((res) => {
                this.list = res.data.data.list || [];
                this.total = res.data.data.page.total;
            });
        },
        changePage(i) {
            this.index = i;
        },
    },
};
</script>
<style lang="less">
@import "~@/assets/css/lover/vote.less";
</style>
