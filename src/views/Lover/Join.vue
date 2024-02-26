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
            <div class="m-lover-box m-lover-certificate">情缘证</div>
            <!-- 情缘列表 -->
            <div class="m-lover-list">
                <div class="m-lover-box" v-for="item in list" :key="item.id">
                    <a :href="authorLink(item.user_info_1.id)" class="u-user-avatar">
                        <div class="u-avatar" target="_blank">
                            <el-avatar
                                class="u-avatar-pic"
                                shape="circle"
                                :size="30"
                                :src="item.user_info_1.avatar"
                            ></el-avatar>
                        </div>
                        <span class="u-name">{{ item.user_info_1.display_name }}</span>
                    </a>
                    <a :href="authorLink(item.user_info_2.id)" class="u-user-avatar">
                        <div class="u-avatar" target="_blank">
                            <el-avatar
                                class="u-avatar-pic"
                                shape="circle"
                                :size="30"
                                :src="item.user_info_2.avatar"
                            ></el-avatar>
                        </div>
                        <span class="u-name">{{ item.user_info_2.display_name }}</span>
                    </a>
                </div>
            </div>
            <!-- 报名 -->
            <div class="m-lover-box m-lover-enroll">
                <div class="m-lover-show"></div>
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
                <el-form
                    class="m-database-form"
                    ref="form"
                    :model="user"
                    :rules="userRules"
                    label-width="80px"
                    v-if="type === 'info'"
                >
                    <el-form-item label="名字" prop="display_name">
                        <el-input v-model="user.display_name" placeholder="名字" />
                    </el-form-item>
                    <el-form-item label="头像" prop="user_avatar">
                        <uploadBanner :content="user.user_avatar" @input="showBanner" />
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
export default {
    name: "LoverJoin",
    inject: ["__imgRoot"],
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
        };
    },
    components: { uploadImage },
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
                console.log(this.list);
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
