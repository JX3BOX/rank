<template>
    <div class="container">
        <div class="m-main-one" v-if="step == 1">
            <div class="m-main_title">创建团队</div>
            <el-form label-position="top" :model="formVals" ref="ruleForm" class="m-main_form">
                <div class="m-main_form-top">
                    <el-form-item label="团队图标">
                        <el-upload
                            class="avatar-uploader"
                            action="https://jsonplaceholder.typicode.com/posts/"
                            :show-file-list="false"
                            :on-success="handleAvatarSuccess"
                            :before-upload="beforeAvatarUpload"
                        >
                            <img v-if="formVals.img" :src="formVals.img" class="m-upload-value" />
                            <img class="m-upload-default-icon" v-else src="@/assets/img/seven/upload_icon.png" />
                        </el-upload>
                    </el-form-item>

                    <div class="m-main_form-top_right">
                        <el-form-item label="团队名称">
                            <el-input
                                style="width: 558px"
                                placeholder="请输入团队名称，不能为纯数字"
                                v-model="formVals.checkPass"
                            ></el-input>
                        </el-form-item>
                        <div class="m-main_form-top_right-bottom">
                            <el-form-item>
                                <el-select v-model="formVals.select" placeholder="服务器名">
                                    <el-option
                                        v-for="item in options"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value"
                                    >
                                    </el-option>
                                </el-select>
                            </el-form-item>
                            <el-form-item>
                                <el-input
                                    class="m-input"
                                    placeholder="请输入抖音直播间号"
                                    v-model="formVals.checkPass"
                                ></el-input>
                            </el-form-item>
                        </div>
                    </div>
                </div>

                <div class="m-main_form-footer">
                    <el-form-item label="团队简介">
                        <el-input
                            :autosize="false"
                            class="m-textarea"
                            type="textarea"
                            placeholder="请输入"
                            v-model="formVals.checkPass"
                        ></el-input>
                    </el-form-item>
                    <div class="m-footer_create-btn" @click="handleJoinTeam">创建<br />团队</div>
                </div>
            </el-form>
        </div>
        <div class="m-main-two" v-if="step == 2">
            <div>确认创建团队?</div>
            <div class="m-main-two_btn-box">
                <div @click="step = 3">是，我确定要创建该团队</div>
                <div @click="step = 1">否，我需要修改点信息</div>
            </div>
        </div>
        <div class="m-main-three" v-if="step == 3">
            <div class="m-main-three_title">创建成功</div>
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
                <div class="m-main-three_footer-tips">
                    <img src="@/assets/img/seven/ic_round-warning.png" />
                    你还没有把角色绑定到该团队，<span>点击此处将角色绑定到该团队</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "CreateTeam",
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
    padding-top: 42px;
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
                display: flex;
                align-items: center;
                justify-content: center;

                img {
                    width: 20px;
                    height: 20px;
                }
                span {
                    cursor: pointer;
                    text-decoration: underline;
                }
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

    .m-main_form-footer {
        display: flex;
        align-items: flex-end;
        gap: 10px;
        /deep/.el-form-item {
            margin-bottom: 0;
        }
        .m-footer_create-btn {
            cursor: pointer;
            box-sizing: border-box;
            width: 150px;
            height: 150px;
            font-weight: 700;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 32px;
            color: #ffffff;
            background: #2e2e2e;
            border: 1px solid #ffffff;
        }
        .m-textarea {
            /deep/ textarea {
                padding: 10px;
                width: 568px;
                height: 150px !important;
                background: #24292e;
                font-weight: 700;
                font-size: 16px;
                color: #ffffff;
                border: none;
                resize: none;
                border-radius: 0;
            }
        }
    }
    .m-main-one {
        display: flex;
        flex-direction: column;
        align-items: center;

        .m-main_form {
            .m-main_form-top_right {
                .m-main_form-top_right-bottom {
                    width: 558px;
                    display: flex;
                    gap: 10px;
                    // /deep/ .el-input {
                    // }
                    .m-input {
                        /deep/ input {
                            width: 350px;
                        }
                    }
                    /deep/ .el-select {
                        .el-input {
                            width: 198px;
                        }
                        width: 198px;
                        input {
                            width: 198px;
                            text-align: center;
                            padding: 0;
                        }
                    }

                    /deep/.el-input .el-select {
                        height: 62px;
                    }
                }
            }
            .m-main_form-top {
                display: flex;
                gap: 20px;
            }
            .avatar-uploader /deep/.el-upload {
                cursor: pointer;
                position: relative;
                overflow: hidden;
                width: 150px;
                height: 150px;
                background: #24292e;
                display: flex;
                align-items: center;
                justify-content: center;
            }

            .m-upload-default-icon {
                width: 40px;
                height: 40px;
            }
            .m-upload-value {
                width: 150px;
                height: 150px;
                display: block;
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
