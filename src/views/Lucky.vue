<template>
    <div class="m-rank-info m-rank-lucky">
        <!-- qrcode -->
        <div class="m-rank-pay">
            <div class="u-pay">
                <strong>小额匿名/实名赞助</strong>
                <span>（请备注赞助单位）</span>
                <img
                    src="https://oss.jx3box.com/upload/post/2020/10/9/6551431.png"
                />
            </div>
            <div class="u-txt">
                <h2>众筹介绍</h2>
                史上最离谱游戏赛事！——玩家众筹举办赛事！谁说PVE不算电竞？<br />
                这里是由剑三玩家发起的秘境百强榜PVE争夺赛，现面向所有PVE爱好党们征集本次活动的奖池奖品。<br />
                同时为提高PVE赛事的影响力及玩家关注度，奖品发放对象不仅只面向获得成绩的团队，赞助指向可由赞助人自行指定，本活动目前接受以下奖品形式捐赠：<br>
                <strong>现金红包</strong>：红包封面标注赞助人/组织<br>
                <strong>实物礼品</strong>：可自行指定派奖对象/范围<br>
                <strong>虚拟礼品</strong>：可提供激活码或礼券等<br>
                商家形式赞助店铺需在活动期内为提供jx3box备注的买家提供额外小礼物赠送。<br>
                赞助联系人：<a href="http://wpa.qq.com/msgrd?v=3&uin=17229398&site=qq&menu=yes" target="_blank">QQ：17229398</a>。<br />
                所有赞助记录及红包发放记录将全数在此页面列出。
            </div>
        </div>
        <!-- gifts -->
        <div class="m-rank-txt" v-html="data"></div>
    </div>
</template>

<script>
export default {
    props: [],
    data: function() {
        return {};
    },
    computed: {
        id: function() {
            return this.$store.state.id;
        },
        data: function() {
            return this.$store.state.race.gifts;
        },
    },
    methods: {},
    filters: {},
    created: function() {},
    components: {},
};
</script>

<style lang="less">
@import "../assets/css/info.less";
</style>
