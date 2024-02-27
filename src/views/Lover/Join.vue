<template>
    <div class="m-lover-join m-lover-page">
        <div class="u-page-title">
            <img class="u-img" :src="`${__imgRoot}join-title.png`" />
        </div>

        <template v-if="success">
            <div class="m-success">
                <img class="u-img" :src="`${__imgRoot}success.svg`" />
                <span>报名成功，你的报名信息如下</span>
            </div>
        </template>
        <template v-if="isLogin">
            <!-- 情缘证 -->
            <certificate :data="certificate" />
            <!-- 情缘列表 -->
            <div class="m-lover-list">
                <div class="m-lover-box" v-for="item in list" :key="item.id">
                    <div class="u-user">
                        <div class="u-avatar" target="_blank">
                            <el-avatar
                                class="u-avatar-pic"
                                shape="circle"
                                :size="30"
                                :src="item.user_info_1.avatar"
                            ></el-avatar>
                        </div>
                        <span class="u-name">{{ item.user_info_1.display_name }}</span>
                    </div>
                    <div class="u-user">
                        <div class="u-avatar" target="_blank">
                            <el-avatar
                                class="u-avatar-pic"
                                shape="circle"
                                :size="30"
                                :src="item.user_info_2.avatar"
                            ></el-avatar>
                        </div>
                        <span class="u-name">{{ item.user_info_2.display_name }}</span>
                    </div>
                </div>
            </div>
            <!-- 报名 -->
            <div class="m-lover-box m-lover-enroll">
                <h3>情缘杯报名</h3>

                <el-form class="m-lover-form" ref="form" :model="form" :rules="rules" label-width="80px">
                    <el-form-item label="队伍名" prop="team_name">
                        <el-input v-model.number="form.team_name" />
                    </el-form-item>
                    <el-form-item label="参赛宣言" prop="slogan">
                        <el-input v-model="form.slogan" type="textarea" :rows="2" />
                    </el-form-item>
                    <el-form-item label="合照上传">
                        <uploadImage v-model="form.images[0]" :max-size="30"></uploadImage>
                    </el-form-item>
                </el-form>
                <div class="u-submit">
                    <img class="u-img" :src="`${__imgRoot}join.png`" />
                </div>
            </div>
        </template>

        <div class="m-lover-box no-login" v-else>
            <h3>请登录后进行报名</h3>
            <div class="u-button" @click="toLogin">点击登录</div>
        </div>
    </div>
</template>

<script>
import User from "@jx3box/jx3box-common/js/user.js";
import { getMyLover, joinLover } from "@/service/lover";
import { authorLink } from "@jx3box/jx3box-common/js/utils";
import uploadImage from "@jx3box/jx3box-comment-ui/src/components/upload.vue";
import certificate from "@/components/lover/certificate.vue";
export default {
    name: "LoverJoin",
    inject: ["__imgRoot"],
    components: { certificate, uploadImage },
    data: function () {
        return {
            success: false,
            lover: false,
            isLogin: User.isLogin(),
            list: [],

            form: {
                team_name: "",
                images: [],
                lover_jx3id: "",
                phone: "",
                qq: "",
                remark: "",
                server: "",
                slogan: "",
                team_name: "",
                user_jx3id: "",
            },
            rules: {
                team_name: [{ required: true, message: "请输入队伍名", trigger: "blur" }],
            },

            certificate: {},
        };
    },
    computed: {},
    watch: {
        isLogin: {
            immediate: true,
            handler: function (val) {
                if (val) this.loadMyLover();
            },
        },
    },
    methods: {
        authorLink,
        loadMyLover() {
            getMyLover(1).then((res) => {
                this.list = res.data.data.list;
            });
        },
        toLogin() {
            User.toLogin();
        },
        submit() {
            joinLover(this.form);
        },
    },
};
</script>
<style lang="less">
@import "~@/assets/css/lover/join.less";
</style>
