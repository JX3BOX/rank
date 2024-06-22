<template>
    <div class="m-superstar-info">
        <div class="m-superstar-kv-title"><img :src="imgurl + 'kv/kv-title.png'" /></div>
        <!-- 活动主体部分 -->
        <div class="m-superstar-main">
            <div class="u-menu">
                <div v-for="item in menu" :key="item.key" class="u-menu-item">
                    <img :src="imgurl + item.img" />
                </div>
            </div>
            <!-- 前三排名 -->
            <div class="u-sort-box">
                <div class="u-sort-3-item">
                    <div class="u-sort-2">
                        <img :src="imgurl + '2.png'" />
                    </div>
                    <!-- 团队信息 -->
                    <div class="u-team-info">
                        <div class="u-team-icon"></div>
                        <div class="u-team-name">团队名字</div>
                        <div class="u-team-serve">服务器 长安城</div>
                        <div class="u-team-time">战斗用时&nbsp;:&nbsp;<span>07分27秒</span></div>
                    </div>
                    <!-- 团长+团员部分 -->
                    <div class="u-team-list">
                        <div class="u-team-leader">
                            团长:&nbsp;
                            <!-- TODO心法图标,后续替换 -->
                            <img src="https://img.jx3box.com/image/xf/10081.png" width="30" />&nbsp;tuanzhangmingzi
                        </div>
                        <!-- 团员list -->
                        <div class="u-team-member">
                            <div class="u-team-member-item" v-for="i in 24" :key="i">
                                <img src="https://img.jx3box.com/image/xf/10081.png" width="20" />&nbsp;
                                <div>成员名字成员</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="u-sort-3-item">
                    <div class="u-sort-1">
                        <img :src="imgurl + '1.png'" />
                    </div>
                </div>
                <div class="u-sort-3-item">
                    <div class="u-sort-3">
                        <img :src="imgurl + '3.png'" />
                    </div>
                </div>
            </div>
            <!-- 后续排名部分展示 -->
            <div class="u-sort-other">
                <div class="u-sort-other-item">
                    <!-- 排序 -->
                    <div class="u-sort-number">4</div>
                    <!-- 团队 -->
                    <div class="u-team-list">xxx</div>
                </div>
            </div>
        </div>
        <!-- 活动规则部分 -->
    </div>
</template>

<script>
export default {
    name: "SuperstarInfo",
    inject: ["__imgRoot"],
    data: function () {
        return {
            imgurl: "https://img.jx3box.com/topic/menpaitiantuan/",
            menu: [
                { name: "活动介绍", img: "hdjs.jpg", key: "jdjs" },
                { name: "活动规则", img: "hdgz.jpg", key: "hdgz" },
                { name: "天团榜", img: "ttb.jpg", key: "ttb" },
                { name: "战斗分析", img: "zdfx.jpg", key: "zdfx" },
            ],
        };
    },
    computed: {},
    methods: {},
};
</script>
<style lang="less">
@import "~@/assets/css/superstar/index.less";
</style>
