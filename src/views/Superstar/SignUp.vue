<!--
 * @Author: zhusha 
 * @Date: 2024-06-23 22:12:15
 * @LastEditors: zhusha
 * @LastEditTime: 2024-06-26 21:14:43
 * @Description: 报名
 * @FilePath: \JX3box\rank\src\views\Superstar\SignUp.vue
 * 
 * Copyright (c) 2024 by zhusha, email: no email, All Rights Reserved. 
-->
<template>
    <div class="m-sign-up">
        <!-- 顶部 -->
        <div class="u-top">
            <img :src="imgurl + 'top.jpg'" />
            <div class="u-title">
                <img :src="imgurl + 'baoming/bm.png'" width="86.5" />
            </div>
        </div>
        <!-- 中间部 -->
        <div class="u-center">
            <div class="u-events-time">
                <img :src="imgurl + 'baoming/hdsj.png'" height="24" />
            </div>
            <div class="u-text">报名日：2024年7月1日</div>
            <div class="u-text">参赛日：2024年7月13日</div>
            <div class="u-text">结榜日：2024年7月20日</div>
            <div class="u-team-demand">
                <img :src="imgurl + 'baoming/ttyq.png'" height="24" />
            </div>
            <div class="u-text">① 除防御与治疗心法，其余输出心法均为相同心法。</div>
            <div class="u-text">② 团队实际参与人数必须为25人。</div>
            <div class="u-text">注：特殊门派，如藏剑的双心法视为相同心法，符合要求，可以同时出现在团队中</div>
            <div class="u-text u-null">反之，纯阳等门派的双心法视为不同心法，不符合要求，不能同时出现在团队中。</div>
            <div class="u-events-flow">
                <img :src="imgurl + 'baoming/cslc.png'" height="24" />
            </div>
            <div class="u-text">
                ① 团长 前往<a href="/team" target="_blank">团队平台</a>创建并认证团队。（往期参赛 或 已创建并认证过团队 的团长则跳过此步）
            </div>
            <div class="u-text">
                ② 在游戏内，通过茗伊插件集的团队平台功能进行角色绑定，并且团队内 至少有一名角色未通关 过该难度的副本，该角色需要 开启插件的赛事上报 。
            </div>
            <div class="u-text">③ 团队进入副本，并完成以下三项：</div>
            <ul class="u-team-rule">
                <li>挑战1-5号首领</li>
                <li>录制整场战斗的视频（需包含1-5号首领）</li>
                <li>挑战结束后在魔盒社区发布一份帖子，包含：视频（链接）以及攻略心得。</li>
            </ul>
            <div class="u-text">④ 其余规则与<a href="/notice/32280" target="_blank">秘境百强榜活动细则</a>相同</div>
            <div class="u-text">⑤ 在明确以上内容后，请 团长 点击下方按钮，进入报名页。</div>
            <div class="u-text">注1：所有参赛团长务必加入魔盒认证团长群，以便于后续流程的沟通。</div>
            <div class="u-text">注2：若仅参赛（放弃奖励），则 ③ 只需要完成第1项“挑战1-5号首领” 即可。</div>
            <!-- 报名按钮 -->
            <div class="u-sign-up-btn">
                <a href="./superstar/#/join"> <img :src="imgurl + 'baoming/bm-1.png'" width="191" /></a>
            </div>
            <div class="u-events-rewards">
                <img :src="imgurl + 'huodonguize/jl.png'" height="24" />
            </div>
            <div class="u-text">① 团长获得50000盒币，该盒币的分配方式由团长自行决定。（盒币可1比1兑换为通宝）</div>
            <div class="u-text">② 全团每人的魔盒账号获得赛季门派定制的魔盒社区勋章一枚。（需要在茗伊插件的团队平台将角色绑定到对应团队）</div>
            <div class="u-text">③ 攻略心得帖子将会获得额外盒币打赏，优质作品将进行首页宣传</div>
        </div>
        <!-- 底部 -->
        <div class="u-bottom">
            <img :src="imgurl + 'bottom.jpg'" />
        </div>
    </div>
</template>

<script>
export default {
    components: {},
    data() {
        return {
            imgurl: "https://img.jx3box.com/topic/menpaitiantuan/",
        };
    },
    created() {},
    mounted() {},
    methods: {},
};
</script>

<style lang="less" scoped>
@import "~@/assets/css/superstar/signup.less";
</style>
