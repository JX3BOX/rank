<template>
    <div id="app" class="m-rank-container">
        <Header></Header>

        <div id="m-rank-star"></div>

        <!-- 背景图:根据不同资料片可能设置不同背景 -->
        <div class="m-rank-race" v-if="id">
            <div class="m-rank-header">
                <race-header></race-header>
            </div>
            <div class="m-rank-content">
                <router-view></router-view>
            </div>
        </div>
        <Footer></Footer>
    </div>
</template>

<script>
import race_header from "@/components/race_header.vue";
export default {
    name: "App",
    props: [],
    data: function() {
        return {};
    },
    computed: {
        id: function() {
            return this.$store.state.id;
        },
    },
    methods: {},
    created : function (){
        particlesJS.load('m-rank-star', './js/particlesjs-config.json', function() {
        });  
    },
    mounted: function() {
        this.$store.state.id = this.$route.params.id;
    },
    watch: {
        "$route.params.id": function(newval) {
            this.$store.state.id = newval;
        },
    },
    components: {
        "race-header": race_header,
    },
};
</script>

<style lang="less">
@import "../assets/css/race.less";
</style>
