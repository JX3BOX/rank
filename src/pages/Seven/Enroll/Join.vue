<template>
    <div class="container">
        <div class="m-main-one" v-if="step == 1">
            <div class="m-main_title">报名参赛</div>
            <el-form label-position="top" :model="formVals" ref="ruleForm" class="m-main_form">
                <el-form-item label="选择你的团队">
                    <el-select v-model="formVals.select">
                        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>
            </el-form>
            <div class="m-footer_create-btn" @click="handleJoinTeam">报名参赛</div>
            <div class="m-footer_tips">
                <img src="@/assets/img/seven/ic_round-warning.png" />
                报名参赛则视为同意遵守 <span>XX条款</span><span>XX条款</span>
            </div>
        </div>
        <div class="m-main-two" v-if="step == 2">
            <div>确定报名参赛?</div>
            <div>团队名字 &nbsp; 团队服务器</div>
            <div class="m-main-two_btn-box">
                <div @click="step = 3">是，我确定要报名参赛</div>
                <div @click="step = 1">否，我需要重新考虑下</div>
            </div>
            <div class="m-footer_tips">
                <img src="@/assets/img/seven/ic_round-warning.png" />
                报名参赛则视为同意遵守 <span>XX条款</span><span>XX条款</span>
            </div>
        </div>
        <div class="m-main-three" v-if="step == 3">
            <div>报名成功！</div>
            <div class="m-footer_tips">
                <img src="@/assets/img/seven/ic_round-warning.png" />
                报名参赛则视为同意遵守 <span>XX条款</span><span>XX条款</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Join",
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
        handleAvatarSuccess(res, file) {
            this.formVals.img = URL.createObjectURL(file.raw);
        },
        beforeAvatarUpload(file) {
            // const isJPG = file.type === "image/jpeg";
            // const isLt2M = file.size / 1024 / 1024 < 2;

            // if (!isJPG) {
            //     this.$message.error("上传头像图片只能是 JPG 格式!");
            // }
            // if (!isLt2M) {
            //     this.$message.error("上传头像图片大小不能超过 2MB!");
            // }
            // return isJPG && isLt2M;
            return true;
        },

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
    padding-top: 60px;
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
        position: relative;
        color: #ffffff;
        .m-footer_tips {
            position: absolute;
            right: 17px;
            bottom: 30px;
            margin: 0;
        }
    }
    .m-main-two {
        padding-top: 70px;
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
    .m-footer_tips {
        display: flex;
        margin-top: 10px;
        font-weight: 700;
        font-size: 16px;
        align-items: center;
        span {
            margin: 0 8px;
            display: inline-block;
            padding: 1px 4px;
            background: #ffffff;
            border-radius: 2px;
            cursor: pointer;
            font-weight: 400;
            color: #424242;
            font-size: 12px;
        }
    }
    .m-main-one {
        display: flex;
        flex-direction: column;
        align-items: center;

        .m-main_form {
            margin-top: 93.5px;
            margin-bottom: 40px;
            /deep/ .el-select,
            /deep/.el-input {
                width: 558px;
                height: 82px;
                input {
                    border: none;
                    width: 558px;
                    height: 82px;
                }
            }
        }
        .m-footer_create-btn {
            width: 232px;
            height: 82px;
            background: #2e2e2e;
            border: 1px solid #ffffff;
            font-weight: 700;
            font-size: 32px;
            display: flex;
            align-items: center;
            justify-content: center;
        }
    }
    .m-main_title {
        text-align: center;
        font-weight: 700;
        font-size: 32px;
    }
}
</style>
