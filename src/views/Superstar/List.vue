<template>
    <div>
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
            <div class="u-sort-other-item" v-for="item in 10" :key="item">
                <!-- 排序 -->
                <div class="u-sort-number">{{ item + 1 }}</div>
                <!-- 团队 -->
                <div class="u-team-list">
                    <!-- 左右两块布局 -->
                    <div class="u-team-info">
                        <div class="u-team-icon"></div>
                        <div class="u-team-name">团队名字</div>
                        <div class="u-team-serve">服务器 长安城</div>
                    </div>

                    <!--团长+ 团员list -->
                    <div class="u-team-people">
                        <div class="u-team-leader">
                            团长:&nbsp;
                            <!-- TODO心法图标,后续替换 -->
                            <img src="https://img.jx3box.com/image/xf/10081.png" width="30" />&nbsp;tuanzhangmingzi
                        </div>
                        <div class="u-team-member">
                            <div class="u-team-member-item" v-for="i in 24" :key="i">
                                <img src="https://img.jx3box.com/image/xf/10081.png" width="20" />&nbsp;
                                <div>成员名字成员成员</div>
                            </div>
                        </div>
                    </div>
                    <!-- 通关时间,飘在右侧顶部 -->
                    <div class="u-team-time-box">
                        <div class="u-team-time">战斗用时&nbsp;:&nbsp;<span>07分27秒</span></div>
                        <div class="u-serve">服务器 2-2-2-2-2</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    components: {},
    data() {
        return { imgurl: "https://img.jx3box.com/topic/menpaitiantuan/" };
    },
    created() {},
    mounted() {},
    methods: {},
};
</script>

<style lang="less" scoped>
@import "~@/assets/css/superstar/list.less";
</style>
