<template>
    <div id="app" class="m-rank-container">
        <Header></Header>
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
