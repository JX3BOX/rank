<template>
    <div class="container">
        <div class="m-main-one" v-if="step == 1">
            <div class="m-main_title">生成邀请链接</div>
            <el-form label-position="top" :model="formVals" ref="ruleForm" class="m-main_form">
                <el-form-item label="选择你的团队">
                    <el-select v-model="formVals.select" placeholder="服务器名">
                        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>
            </el-form>
            <div class="m-footer_create-btn" @click="handleJoinTeam">生成邀请链接</div>
        </div>

        <div class="m-main-three" v-if="step == 2">
            <div class="m-main-three_title">邀请链接已生成</div>
            <div class="m-main-three_info">
                <div class="m-main-three_info-cover"></div>
                <div class="m-main-three_info-team">
                    <div>团队名字</div>
                    <div>大区名字&nbsp;服务器名</div>
                </div>
            </div>
            <div class="m-main-three_footer">
                <div class="m-main-three_footer-tips">已将链接复制到剪贴板，分享链接邀请成员加入团队</div>
                <div class="m-main-three_footer-link"></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Invite",
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
        margin-top: 20px;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        font-weight: 700;
        color: #ffffff;
        font-size: 32px;
        .m-main-three_footer {
            font-size: 14px;
            margin-top: 40px;
            display: flex;
            flex-direction: column;
            gap: 10px;
            justify-content: center;
            .m-main-three_footer-link {
                width: 555px;
                height: 36px;
                display: flex;
                align-items: center;
                justify-content: center;
                background: #2e2e2e;
                border: 1px solid #ffffff;
            }
            .m-main-three_footer-tips {
                text-align: center;
            }
        }
        .m-main-three_info {
            display: flex;
            align-items: center;
            gap: 20px;
            .m-main-three_info-team {
                display: flex;
                flex-direction: column;
                gap: 20px;
            }
            .m-main-three_info-cover {
                width: 150px;
                height: 150px;
                background: #24292e;
            }
        }
        .m-main-three_title {
            margin-bottom: 40px;
        }
    }

    .m-main-one {
        display: flex;
        flex-direction: column;
        align-items: center;

        .m-main_form {
            margin-top: 93.5px;
            margin-bottom: 60px;
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
        margin-bottom: 20px;
    }
}
</style>
