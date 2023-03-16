<template>
    <div class="container">
        <div class="m-main-one" v-if="step == 1">
            <div class="m-main_title">绑定团队</div>
            <el-form label-position="top" :model="formVals" ref="ruleForm" class="m-main_form">
                <el-form-item label="选择角色" prop="pass">
                    <div class="m-main_choose_role">
                        <el-select v-model="formVals.select" placeholder="请选择">
                            <el-option
                                v-for="item in options"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value"
                            >
                            </el-option>
                        </el-select>
                        <span class="m-service"> 长安城 </span>
                    </div>
                </el-form-item>
                <el-form-item label="输入团队名或团队ID">
                    <el-input v-model="formVals.checkPass"></el-input>
                </el-form-item>
            </el-form>
            <div class="m-footer">
                <div class="m-footer_result">
                    <span>团队名字</span>
                    <span>团队服务器</span>
                    <div class="m-footer_is-join">区服一致，可加入团队</div>
                </div>
                <div class="m-footer_join-btn" @click="handleJoinTeam">加入团队</div>
            </div>
        </div>
        <div class="m-main-two" v-if="step == 2">
            <div>确认加入该团队?</div>
            <div>此处是团队名字&nbsp;此处是团队服务器</div>
            <div class="m-main-two_btn-box">
                <div @click="step = 3">是，我确定加入该团队</div>
                <div @click="step = 1">否，我需要重新思考下</div>
            </div>
        </div>
        <div class="m-main-three" v-if="step == 3">
            <div>加入成功！</div>
        </div>
    </div>
</template>

<script>
export default {
    name: "BindTeam",
    props: [],
    data: () => ({
        step: 1,
        formVals: {},
        options: [
            {
                value: "选项1",
                label: "黄金糕",
            },
            {
                value: "选项2",
                label: "双皮奶",
            },
            {
                value: "选项3",
                label: "蚵仔煎",
            },
            {
                value: "选项4",
                label: "龙须面",
            },
            {
                value: "选项5",
                label: "北京烤鸭",
            },
        ],
        value: "",
        list: [], //宫格数据
    }),
    computed: {
        id: function () {
            return this.$store.state.id;
        },
        desc: function () {
            return this.$store.state.race.desc;
        },
    },
    methods: {
        handleJoinTeam() {
            this.step = 2;
        },
    },
    filters: {},
    mounted: function () {},
    created: function () {
        this.list = new Array(9).fill(1).map((_, i) => ({ id: i + new Date().valueOf() }));
    },
    components: {},
};
</script>

<style lang="less" scoped>
@import "../../../assets/css/seven/index.less";

.container {
    padding-top: 42px;
    color: #fff;
    font-family: "Microsoft YaHei";
    height: 100%;
    .m-main-three {
        height: 100%;
        margin-top: -42px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        font-weight: 700;
        font-size: 50px;
        color: #ffffff;
    }
    .m-main-two {
        padding-top: 100px;
        font-weight: 700;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 40px;
        font-size: 32px;
        color: #ffffff;
        .m-main-two_btn-box {
            display: flex;
            gap: 50px;
            align-items: center;
            div {
                cursor: pointer;
                display: flex;
                align-items: center;
                justify-content: center;
                width: 384px;
                height: 82px;
                font-weight: 700;
                font-size: 32px;
                background: #2e2e2e;
                border: 1px solid #ffffff;
            }
        }
    }
    .m-main-one {
        padding-left: 89px;
        .m-footer {
            margin-top: 30px;
            display: flex;
            align-items: center;
            margin-right: 134px;

            .m-footer_join-btn {
                width: 168px;
                height: 82px;

                background: #2e2e2e;
                border: 1px solid #ffffff;
                display: flex;
                align-items: center;
                justify-content: center;
                cursor: pointer;
                font-weight: 700;
                font-size: 32px;
            }
            .m-footer_result {
                flex: 1;
                font-weight: 700;
                font-size: 32px;
                color: #ffffff;
                span:first-child {
                    margin-right: 30px;
                }
                .m-footer_is-join {
                    font-size: 16px;
                    width: 180px;
                    height: 29px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background: #4cac56;
                    margin-top: 10px;
                }
            }
        }
        .m-main_form {
            .m-main_choose_role {
                position: relative;
                width: 867px;

                .m-service {
                    position: absolute;
                    right: 20px;
                    top: 22px;
                    font-weight: 700;
                    font-size: 32px;
                    color: #ffffff;
                }
            }
          
            /deep/ .el-select,
            /deep/ .el-input {
                width: 867px;
                height: 82px;
                input{
                    height: 82px;
                }
 
            }
            // /deep/ .el-input {
            //     width: 867px;
            //     height: 82px;
            // }
        }
    }
    .m-main_title {
        text-align: center;
        font-weight: 700;
        font-size: 32px;
        margin-bottom: 20px;
    }
}
</style>
