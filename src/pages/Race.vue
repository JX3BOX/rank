<template>
    <div id="app" class="m-rank-container" :class="[id_cls,win_env]">
        <Header></Header>

        <div class="m-rank-race" v-if="id">
            <div class="m-rank-header">
                <race-header :data="data"></race-header>
            </div>
            <div class="m-rank-content">
                <router-view></router-view>
            </div>
            <div class="m-rank-union">
                <h5 class="u-title">媒体宣传</h5>
                <div v-html="note"></div>
            </div>
        </div>

        <div class="m-rank-misc">
            <!-- 往届赛事 -->
            <a href="/rank" class="u-history"><img :src="back_img_url"/></a>

            <!-- 网页二维码 -->
            <QRcode class="u-mobile-qrcode" v="static" :s="100"/>
        </div>

        <Footer></Footer>
    </div>
</template>

<script>
import race_header from "@/components/race_header.vue";
import { getEvent } from "@/service/event.js";
import { __imgPath } from "@jx3box/jx3box-common/js/jx3box.json";
export default {
    name: "App",
    props: [],
    data: function() {
        return {
            data: "",
            back_img_url: __imgPath + "image/rank/common/history.png",
            win_env: window.outerWidth < 780 ? 'isMobile' : 'isPC'
        };
    },
    computed: {
        id: function() {
            return 1 //this.$store.state.id;
        },
        note: function() {
            return this.$store.state.race.note;
        },
        id_cls : function (){
            return 'm-rank-event-' + this.id
        }
    },
    methods: {
        init: function(val) {
            getEvent(val || this.id).then((res) => {
                this.data = res.data.data;
                this.$store.state.race = res.data.data;
            });
        },
    },
    created: function() {},
    mounted: function() {
        // this.$store.state.id = this.$route.params.id;
        this.init();
    },
    watch: {
        // "$route.params.id": function(id) {
        //     this.$store.state.id = id;
        //     this.init(id);
        // },
    },
    components: {
        "race-header": race_header,
    },
};
</script>

<style lang="less">
@import "../assets/css/race.less";
</style>
