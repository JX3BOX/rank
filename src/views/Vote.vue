<template>
    <div class="m-rank-vote">
        <div class="d-banner"></div>
        <el-table
            :data="tableData"
            class="d-table"
            :border="false"
            :highlight-current-row="false"
            :header-row-style="headerRowClass"
            :header-cell-style="headerCellClass"
            :row-style="rowClass"
            :cell-style="cellClass"
        >
            <el-table-column label="排名">
                <template slot-scope="scope">
                    <div class="t-rank">
                        <span class="t-rank-text">{{ scope.row.rank }}</span>
                    </div>
                </template>
            </el-table-column>
            <el-table-column label="" width="78">
                <template slot-scope="scope">
                    <el-image
                        :src="scope.row.pic"
                        fit="fill"
                        class="t-pic"
                    ></el-image>
                </template>
            </el-table-column>
            <el-table-column label="团名" width="320">
                <template slot-scope="scope">
                    <span class="t-team">{{ scope.row.name }}</span>
                </template>
            </el-table-column>
            <el-table-column label="服务器">
                <template slot-scope="scope">
                    <span class="t-server">{{ scope.row.server }}</span>
                </template>
            </el-table-column>
            <el-table-column label="团长">
                <template slot-scope="scope">
                    <span class="t-leader">{{ scope.row.leader }}</span>
                </template>
            </el-table-column>
            <el-table-column label="票数">
                <template slot-scope="scope">
                    <span class="t-count">{{ scope.row.count }}</span>
                </template>
            </el-table-column>
            <el-table-column label="">
                <template slot-scope="scope">
                    <div
                        class="t-btn"
                        @click="handleEdit(scope.$index, scope.row)"
                    ></div>
                </template>
            </el-table-column>
        </el-table>
        <!-- 有奖竞猜 -->
    </div>
</template>

<script>
export default {
    props: [],
    data: function () {
        return {
            tableData: [
                {
                    rank: 1,
                    pic: "http://placehold.it/68x68",
                    name: "这个是团名总共有十二个字",
                    server: "唯我独尊",
                    leader: "团长六字名字",
                    count: 38324,
                },
                {
                    rank: 12,
                    pic: "http://placehold.it/68x68",
                    name: "这是六字团名",
                    server: "唯我独尊",
                    leader: "团长六字名字",
                    count: 14122,
                },
            ],
        };
    },
    computed: {},
    methods: {
        handleEdit(index, row) {
            console.log(index, row);
        },
        headerRowClass({ row, rowIndex }) {
            return {
                background: "#3C4044",
                border: "1px solid #707070",
                "box-shadow": "0px 10px 20px rgba(0, 0, 0, 0.51)",
                opacity: 1,
                "border-radius": "10px",
            };
        },
        headerCellClass({ row, column, rowIndex, columnIndex }) {
            return {
                background: "transparent",
                "border-top": "1px solid #707070",
                "border-bottom": "1px solid #707070",
                "font-size": "21px",
                color: "white",
                height: "60px",
            };
        },
        rowClass({ row, rowIndex }) {
            return {
                background: "#3C4044",
                border: "1px solid #707070",
                "box-shadow": "0px 10px 20px rgba(0, 0, 0, 0.51)",
                opacity: 1,
                "border-radius": "10px",
            };
        },
        cellClass({ row, column, rowIndex, columnIndex }) {
            return {
                background: "transparent",
                "border-top": "1px solid #707070",
                "border-bottom": "1px solid #707070",
                "font-size": "21px",
                color: "white",
                height: "50px",
                padding: 0
            };
        },
    },
    filters: {},
    created: function () {},
    components: {},
};
</script>

<style lang="less">
@import "../assets/css/rank_vote.less";
</style>