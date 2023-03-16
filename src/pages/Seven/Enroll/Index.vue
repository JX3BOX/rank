<template>
    <div class="container">
        <!-- top_banner -->
        <!-- <div class=" animate__backInDown" style="background-color: red; height: 100px">123</div> -->
        <div class="m-top">
            <div class="m-top_character"></div>
            <!-- <img class="m-top_character" src="@/assets/img/seven/duge_huage.png" /> -->
            <video loop autoplay muted class="m-top_back-video" src="@/assets/video/mda-ik1fjvkzb0pg1qdi.mp4"></video>
            <div class="m-top_banner-box">
                <img class="m-top_banner" src="@/assets/img/seven/top_banner.png" />

                <div class="m-top_banner-box_title-box">
                    <div class="m-top_banner-box_back-group">
                        <img
                            class="m-top_banner-box_title-box_icon-left"
                            src="@/assets/img/seven/title_logo_left.png"
                        />
                        <img
                            class="m-top_banner-box_title-box_icon-right"
                            src="@/assets/img/seven/title_logo_right.png"
                        />

                        <img
                            class="m-top_banner-box_title-box_icon-sword animate__animated animate__backInDown"
                            src="@/assets/img/seven/title_logo_sword.png"
                        />

                        <img
                            class="m-top_banner-box_title-box_rank-icon animate__animated animate__fadeIn animate__delay-1s"
                            src="@/assets/img/seven/7th.png"
                        />
                    </div>
                    <div class="m-top_banner-box_title-group animate__animated animate__fadeIn animate__delay-1s">
                        <img class="m-top_banner-box_title-box_title" src="@/assets/img/seven/top_title.png" />
                        <span>第七届 · 副本百强赛</span>
                    </div>
                    <img
                        class="m-top_banner-box_logo-group animate__animated animate__fadeIn animate__delay-1s"
                        src="@/assets/img/seven/top_logo.png"
                    />
                    <img
                        class="m-top_banner-box_title animate__animated animate__fadeIn animate__delay-1s"
                        src="@/assets/img/seven/title.png"
                    />
                    <div
                        class="m-top_banner-box_down-more animate__animated animate__fadeIn animate__delay-1s"
                        @click="handleAnchor('m-notice')"
                    >
                        <img src="@/assets/img/seven/down_arrow.png" />
                        <span>向下滑动展示查看内容</span>
                    </div>
                </div>
            </div>
        </div>
        <!-- m-notice -->
        <!-- v-animate="'animate__animated animate__backInDown'" -->
        <div class="m-notice" id="m-notice">
            <!-- <img class="m-notice_backdrop" src="@/assets/img/seven/BG.png" /> -->
            <div class="m-notice-box">
                <div class="m-notice-tabs">
                    <div :class="['m-notice-tabs_item', active == 1 && 'is_active']" @click="active = 1">赛事介绍</div>
                    <div :class="['m-notice-tabs_item', active == 2 && 'is_active']" @click="active = 2">赛事奖励</div>
                </div>

                <!-- 内容 -->
                <div class="m-notice-content">
                    <!-- 报名按钮 -->
                    <div @click="handleAnchor('m-one')" class="m-notice-content_enroll_btn">我已了解，前往报名</div>
                </div>
            </div>
        </div>

        <!-- 01 -->
        <div class="m-one" id="m-one">
            <img
                v-animate="'animate__animated  animate__slideInLeft'"
                class="m-one-tangmen"
                src="@/assets/img/seven/tangmen.png"
            />
            <img class="m-one_watermark" src="@/assets/img/seven/01_watermark.png" />
            <div class="m-one-title_box" v-animate="'animate__animated  animate__slideInRight'">
                <img class="m-one-title" src="@/assets/img/seven/01_title.png" alt="" />
                <div class="m-one-btn_box">
                    <global-btn @click="handleOptionsClick('team_join')"> 团队报名 </global-btn>
                    <global-btn @click="handleOptionsClick('bind_role')"> 绑定角色 </global-btn>
                </div>
                <div class="m-one_tips">*报名仅限团长操作，各位团长请先给团队进行报名</div>
                <div class="m-one_warning">
                    <img class="m-warning_icon" src="@/assets/img/seven/ic_round-warning.png" />
                    <span>如果你曾经报名过赛事，且没有角色变更，则<br />不需要重新绑定角色</span>
                </div>
            </div>
        </div>
        <div v-if="show_part" style="margin-left: -960px; width: 3840px">
            <!-- 背景图 -->
            <img class="m-backdrop" src="@/assets/img/seven/backdrop_one.png" />
            <!-- 02 -->
            <div class="m-two" id="m-two">
                <img
                    class="m-two-cangjian"
                    v-animate="'animate__animated  animate__slideInRight'"
                    src="@/assets/img/seven/cangjian.png"
                />
                <div
                    v-if="show_part == 'team_join'"
                    class="m-two-title_box"
                    v-animate="'animate__animated  animate__slideInLeft'"
                >
                    <img class="m-two-title" src="@/assets/img/seven/02_title.png" />
                    <div class="m-two-btn_box">
                        <global-btn @click="join_visible = true"> 报名参赛 </global-btn>
                        <global-btn @click="create_team_visible = true"> 创建团队 </global-btn>
                    </div>
                    <div class="m-two-btn_box_tips">*如果没有团队，则先创建团队后再报名</div>
                    <div class="m-two_options">
                        <span>报名成功，你还可以进行以下操作：</span>
                        <div class="m-two_options_btn-box">
                            <a>管理团队</a>
                            <a>绑定角色到团队</a>
                            <a @click="invite_visible = true">生成邀请链接</a>
                            <a>发布团队招募</a>
                        </div>
                    </div>
                </div>

                <div
                    v-if="show_part == 'bind_role'"
                    class="m-two-title_box"
                    v-animate="'animate__animated  animate__slideInLeft'"
                >
                    <img class="m-two-title" src="@/assets/img/seven/02_title_bind.png" />
                    <div class="m-two-btn_box">
                        <global-btn @click="bind_role_visible = true"> 绑定角色 </global-btn>
                        <global-btn @click="bind_team_visible = true"> 加入团队 </global-btn>
                    </div>
                    <div class="m-two-btn_box_tips">如果你曾经加入过参赛团队，且没有任何角色变动，则无需绑定团队</div>
                    <div class="m-two_options_bind">
                        <div class="m-two_options_bind-box">
                            <div class="m-two_options_bind-box_title">寻找正在招募的团队</div>
                            <div class="m-two_options_bind-box_tips">请先绑定角色后点击下方招募大厅按钮</div>
                            <a>查看招募大厅</a>
                        </div>
                        <div class="m-two_options_bind-box">
                            <div class="m-two_options_bind-box_title">需要查看团队信息</div>
                            <div class="m-two_options_bind-box_tips">点击下方按钮进入团队平台</div>
                            <a>前往团队平台</a>
                        </div>
                    </div>
                </div>
            </div>
            <!-- 背景图 -->
            <img class="m-backdrop" src="@/assets/img/seven/backdrop_two.png" />
            <!-- 03 -->

            <div class="m-three" id="m-three">
                <img
                    v-animate="'animate__animated  animate__slideInLeft'"
                    class="m-three-tiance"
                    src="@/assets/img/seven/tiance.png"
                />
                <img class="m-three_watermark" src="@/assets/img/seven/01_watermark.png" />
                <div class="m-three-title_box" v-animate="'animate__animated  animate__slideInRight'">
                    <img class="m-three-title" src="@/assets/img/seven/03_title.png" />

                    <div class="m-three-query">
                        <el-select v-model="value" placeholder="请选择">
                            <el-option
                                v-for="item in options"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value"
                            >
                            </el-option>
                        </el-select>
                        <global-btn style="height: 62px">发布招募</global-btn>
                    </div>
                    <div class="m-three-list">
                        <div class="m-three-list_box" v-for="(item, index) in list" :key="index">
                            <div class="m-three-list_box-cover"></div>
                            <div class="m-three-list_box-info">
                                <span>团队名字</span>
                                <span>服务器</span>
                                <div class="m-three-list_box-desc">
                                    招募信息招募信息招募信息招募信息招募信息招募信息招募信息招募信息招募信息招募信息招募信息招募信息招募信息招募信息招募信息
                                </div>
                            </div>
                        </div>
                    </div>

                    <el-pagination
                        background
                        :page-size="20"
                        :pager-count="11"
                        layout="prev, pager, next"
                        :total="1000"
                    >
                    </el-pagination>
                </div>
            </div>
        </div>
        <!-- 弹窗们 -->

        <!-- 绑定角色 -->
        <global-modal height="409px" :visible="bind_role_visible" @close="bind_role_visible = false">
            <BindRole />
        </global-modal>
        <!-- 绑定团队 -->
        <global-modal :visible="bind_team_visible" @close="bind_team_visible = false">
            <BindTeam />
        </global-modal>
        <!-- 创建团队 -->
        <global-modal :visible="create_team_visible" @close="create_team_visible = false">
            <CreateTeam />
        </global-modal>
        <!-- 邀请链接 -->
        <global-modal :visible="invite_visible" @close="invite_visible = false">
            <Invite />
        </global-modal>
        <!-- 报名参赛 -->
        <global-modal :visible="join_visible" @close="join_visible = false">
            <Join />
        </global-modal>
    </div>
</template>

<script>
import global_btn from "@/components/seven/global_btn.vue";
import global_modal from "@/components/seven/global_modal.vue";
import BindRole from "./BindRole.vue";
import BindTeam from "./BindTeam.vue";
import CreateTeam from "./CreateTeam.vue";
import Invite from "./Invite.vue";
import Join from "./Join.vue";
export default {
    components: {
        "global-btn": global_btn,
        "global-modal": global_modal,
        BindRole: BindRole,
        BindTeam: BindTeam,
        CreateTeam: CreateTeam,
        Invite: Invite,
        Join: Join,
    },
    props: [],
    data: () => ({
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
        bind_role_visible: false, //绑定角色
        bind_team_visible: false, //绑定团队
        create_team_visible: false, //创建团队
        invite_visible: false, //邀请链接
        join_visible: false, //报名参赛
        list: [], //列表数据
        active: 1, //tabs状态
        show_part: "", //02的展示内容
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
        handleOptionsClick(action) {
            console.log(action);
            switch (action) {
                case "team_join":
                    this.show_part = "team_join";
                    setTimeout(() => this.handleAnchor("m-two"), 100);
                    break;
                case "bind_role":
                    this.show_part = "bind_role";
                    setTimeout(() => this.handleAnchor("m-two"), 100);

                    break;

                default:
                    break;
            }
        },
        handleAnchor(dom) {
            console.log(dom);
            document.querySelector(`#${dom}`).scrollIntoView({
                behavior: "smooth",
                block: "center",
                inline: "nearest",
            });
        },
    },
    directives: {
        animate: {
            inserted: function (el, binding) {
                // console.log(distance)
                console.log(binding, 111);
                binding.addClass = () => {
                    const { top } = el.getBoundingClientRect();
                    const h = document.documentElement.clientHeight || document.body.clientHeight;
                    if (top < h) {
                        if (el.className.indexOf(binding.value) == -1) {
                            // 初次还未绑定过，则新增类名(注意：下面单引号中间是一个空格！！！)
                            el.className = binding.value + " " + el.className;
                        }
                        if (binding.addClass) {
                            window.removeEventListener("scroll", binding.addClass);
                        }
                    }
                };
                window.addEventListener("scroll", binding.addClass, true);
                binding.addClass();
            },
            unbind: function (el, binding) {
                if (binding.addClass) {
                    window.removeEventListener("scroll", binding.addClass);
                }
            },
        },
    },
    filters: {},
    mounted: function () {},
    created: function () {
        this.list = new Array(9).fill(1).map((_, i) => ({ id: i + new Date().valueOf() }));
    },
};
</script>

<style lang="less" scoped>
@import "../../../assets/css/seven/index.less";
.container {
    // width: 3840px;
    margin: 0 auto;
    overflow: hidden;
}

.m-backdrop {
    height: 300px;
}

.m-three {
    height: 1200px;
    background-repeat: no-repeat;
    background-image: url("../../../assets/img/seven/03.png");
    position: relative;
    margin-top: -72px; //背景图上方有个白边
    padding-top: 72px;
    // width: 3840px;
    overflow: hidden;

    .m-three-tiance {
        position: absolute;
        right: 0;
        bottom: 0;
        z-index: 1;
    }
    .m-three-title_box {
        position: absolute;
        left: 1180px;
        top: 204px;
        z-index: 9;
        /deep/.el-pagination,
        .is-background {
            padding: none;
            .active,
            .number:hover,
            .more:hover {
                box-sizing: border-box;
                border: 1px solid #ffffff;
                background: #2e2e2e !important;
                color: #fff !important;
            }

            .btn-prev,
            .number,
            .el-icon,
            .more,
            .btn-next {
                background: #2e2e2e;
                color: #ffffff;
                font-weight: 400;
                font-size: 14px;
                border-radius: 0;
            }
        }
        .m-three-list {
            margin-top: 30px;
            display: grid;
            gap: 20px;
            grid-template-columns: repeat(3, auto);
            margin-bottom: 22px;
            .m-three-list_box {
                box-sizing: border-box;
                width: 400px;
                height: 104px;
                background: #2e2e2e;
                border: 1px solid #ffffff;
                font-weight: 700;
                font-size: 16px;
                display: flex;
                padding: 16px 20px;
                color: #ffffff;
                .m-three-list_box-info {
                    margin-left: 10px;
                    span:first-child {
                        margin-right: 10px;
                    }
                    .m-three-list_box-desc {
                        margin-top: 4px;
                        width: 278px;
                        height: 43px;
                        font-weight: 400;
                        font-size: 14px;
                        overflow: hidden;
                        word-break: break-all;
                        text-overflow: ellipsis;
                        display: -webkit-box;
                        -webkit-box-orient: vertical;
                        -webkit-line-clamp: 2;
                    }
                }
                .m-three-list_box-cover {
                    width: 68px;
                    height: 68px;
                    background: #ffffff;
                }
            }
        }
        .m-three-query {
            display: flex;
            gap: 30px;
        }
        .m-three-title {
            margin-bottom: 30px;
        }
    }
}
.m-two {
    height: 900px;
    background: url("../../../assets/img/seven/02.png");
    margin-top: -4px;
    position: relative;
    .m-two-title_box {
        position: absolute;
        left: 2088px;
        top: 174px;
        z-index: 9;
        display: flex;
        flex-direction: column;

        .m-two_options_bind {
            display: flex;
            align-items: center;
            gap: 30px;
            .m-two_options_bind-box {
                .m-two_options_bind-box_tips {
                    margin: 10px 0;
                }
                .m-two_options_bind-box_title {
                    font-size: 32px;
                }
                a {
                    display: inline-block;
                    cursor: pointer;
                    padding: 9px 13px;
                    background: #2e2e2e;
                    border: 1px solid #ffffff;
                    font-family: "Microsoft YaHei";
                    font-style: normal;
                    font-weight: 700;
                    font-size: 14px;
                    color: #fff;
                }
            }
        }
        .m-two-title {
            margin-bottom: 30px;
        }
        .m-two-btn_box {
            display: flex;
            gap: 20px;
            align-items: center;
            justify-content: flex-end;
        }

        .m-two_options,
        .m-two_options_bind {
            margin-top: 30px;
            font-style: normal;
            font-weight: 700;
            font-size: 16px;
            color: #ffffff;
            .m-two_options_btn-box {
                margin-top: 10px;
                display: flex;
                align-items: center;
                gap: 10px;
                a {
                    display: inline-block;

                    cursor: pointer;
                    padding: 9px 13px;
                    background: #2e2e2e;
                    border: 1px solid #ffffff;
                    font-family: "Microsoft YaHei";
                    font-style: normal;
                    font-weight: 700;
                    font-size: 14px;
                    color: #fff;
                }
            }
        }
        .m-two-btn_box_tips {
            font-family: "Microsoft YaHei";
            margin-top: 10px;
            font-style: normal;
            text-align: right;
            font-weight: 700;
            font-size: 16px;
            color: #ffffff;
        }
    }

    .m-two-cangjian {
        position: absolute;
        left: 0;
        bottom: 0;
        z-index: 1;
    }
}
.m-one {
    width: 3840px;
    height: 900px;
    background-repeat: no-repeat;
    background-image: url("../../../assets/img/seven/01.png");
    position: relative;
    margin-left: -960px;
    // .m-one_watermark {
    // }
    .m-one-title_box {
        position: absolute;
        left: 1180px;
        top: 136px;
        z-index: 9;
        .m-one_warning {
            display: flex;
            // align-items: center;
            font-family: "Microsoft YaHei";
            font-weight: 700;
            font-size: 14px;
            line-height: 18px;
            color: #fff;
            .m-warning_icon {
                width: 15px;
                height: 15px;
            }
        }
        .m-one_tips {
            font-family: "Microsoft YaHei";
            font-style: normal;
            font-weight: 700;
            font-size: 16px;
            color: #ffffff;
            margin: 10px 0 30px 0;
        }
        .m-one-title {
            margin-bottom: 30px;
        }
        .m-one-btn_box {
            display: flex;
            align-items: center;
            gap: 20px;
            .m-one-btn_img {
                cursor: pointer;
                width: 165px;
                height: 82px;
            }
        }
    }

    .m-one-tangmen {
        position: absolute;
        right: 0;
        bottom: 0;
        z-index: 1;
    }
}
.m-notice {
    height: 1200px;
    // position: relative;
    display: flex;
    justify-content: center;
    padding-top: 112px;
    box-sizing: border-box;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-image: url("../../../assets/img/seven/BG.png");

    .m-notice_backdrop {
        height: 100%;
        position: absolute;
        left: 0;
        top: 0;
        z-index: -1;
    }
    .m-notice-box {
        background: url("../../../assets/img/seven/box.png");
        width: 1625px;
        height: 976px;
        display: flex;
        position: relative;
        z-index: 9; //低于1, 01的唐门会穿透
        justify-content: center;
        align-items: center;
        flex-direction: column;

        .m-notice-content {
            width: 1100px;
            height: 695px;
            background: #fff;
            margin-top: 32px;
            position: relative;
            .m-notice-content_enroll_btn {
                position: absolute;
                bottom: -45px;
                right: -220px;
                cursor: pointer;
                width: 377px;
                height: 90px;
                display: flex;
                align-items: center;
                justify-content: center;
                background: #ba2a2d;
                box-shadow: 0px 0px 10px #ba2a2d;
                font-family: "Microsoft YaHei";
                font-weight: 700;
                font-size: 32px;
                color: #ffffff;
            }
        }
        .m-notice-tabs {
            display: flex;
            align-items: center;
            font-family: "Microsoft YaHei";
            font-weight: 700;
            font-size: 32px;
            color: #010101;
            gap: 70px;
            .m-notice-tabs_item {
                cursor: pointer;
                display: flex;
                align-items: center;
                justify-content: center;
                width: 204px;
                height: 70px;
                background: #e6e6e6;
            }
            .is_active {
                background: #010101;
                color: #fff;
            }
        }
    }
}
.m-top {
    z-index: 2;
    position: relative;
    height: 1200px;
    display: flex;
    justify-content: center;
    .m-top_banner-box {
        width: 1000px;
        position: relative;

        .m-top_banner-box_title-box {
            padding-top: 41px;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;

            .m-top_banner-box_down-more {
                cursor: pointer;
                margin-top: 82px;
                position: relative;
                transform: translate(-60px);
                z-index: 10;
                display: flex;
                align-items: center;
                font-family: "Microsoft YaHei";
                font-style: normal;
                font-weight: 700;
                font-size: 32px;
                line-height: 42px;
                color: #ffffff;
                animation: flicker 1.5s ease-in-out 2s infinite;
            }
            .m-top_banner-box_down-more:hover {
                opacity: 1;
                animation: none;
            }
            @keyframes flicker {
                0% {
                    opacity: 1;
                }
                50% {
                    opacity: 0.5;
                }
                100% {
                    opacity: 1;
                }
            }
            .m-top_banner-box_title {
                margin-top: 39px;
                width: 694px;
                height: 345px;
                transform: rotate(2.59deg);
                position: relative;
                z-index: 10;
            }
            .m-top_banner-box_logo-group {
                margin-top: 24px;
            }
            .m-top_banner-box_title-group {
                margin-top: -274px;
                position: relative;
                font-family: "Microsoft YaHei";
                font-style: normal;
                font-weight: 700;
                font-size: 20px;
                color: #ffffff;
                span {
                    position: absolute;
                    bottom: 0;
                    left: 50%;
                    transform: translate(-50%);
                }
            }
            .m-top_banner-box_back-group {
                width: 471px;
                height: 471px;
                position: relative;
                display: flex;
                align-items: center;
                justify-content: center;
                .m-top_banner-box_title-box_rank-icon {
                    width: 123.75px;
                    position: absolute;
                    top: 60px;
                    left: 50%;
                    margin-left: -56px;
                    height: 130px;
                }
                .m-top_banner-box_title-box_icon-sword {
                    height: 459px;
                    width: 280px;
                    position: absolute;
                    top: 0;
                    left: 50%;
                    margin-left: -140px;
                }
                // .m-top_banner-box_title-box_icon {
                //     width: 471px;
                //     height: 471px;
                // }
                .m-top_banner-box_title-box_icon-left,
                .m-top_banner-box_title-box_icon-right {
                    height: 394px;
                    width: 158px;
                    opacity: 0;
                }
                .m-top_banner-box_title-box_icon-left {
                    animation: transLeft 1.5s ease 1s forwards;
                }
                .m-top_banner-box_title-box_icon-right {
                    animation: transRight 1.5s ease 1s forwards;
                }
                @keyframes transRight {
                    form {
                        opacity: 0;
                        transform: translateX(0px);
                    }
                    to {
                        transform: translateX(40px);
                        opacity: 1;
                    }
                }
                @keyframes transLeft {
                    form {
                        opacity: 0;
                        transform: translateX(0px);
                    }
                    to {
                        opacity: 1;
                        transform: translateX(-40px);
                    }
                }
            }
        }
        .m-top_banner {
            position: absolute;
            top: 0;
            left: 0;
            z-index: -1;
        }
    }

    .m-top_character {
        background: url("../../../assets/img/seven/duge_huage.png") no-repeat;
        background-position-x: -730px;
        position: absolute;
        left: 0;
        height: 100%;
        width: 100%;
        bottom: 0;
        z-index: 9;
    }

    .m-top_back-video {
        height: 100%;
        width: 100%;
        position: absolute;
        top: 0;
        left: 0;
        object-fit: cover;
        z-index: -1;
        filter: grayscale(0.8);
    }
    // .m-top_backdrop {
    //     height: 100%;
    // }
    // .m-top_ghost_btn {
    //     background-color: green;
    //     width: calc(320px + 45px);
    //     height: 42px;
    //     position: absolute;
    //     left: 50%;
    //     margin-left: -225px;
    //     bottom: 185px;
    //     z-index: 1;
    // }
}
</style>
