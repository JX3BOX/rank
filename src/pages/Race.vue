<template>
    <div id="app" class="m-rank-container" :class="'m-rank-event-' + id">
        <Header></Header>

        <div class="m-rank-race" v-if="id">
            <div class="m-rank-header">
                <race-header :data="data"></race-header>
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
import { getEvent } from "@/service/event.js";
export default {
    name: "App",
    props: [],
    data: function() {
        return {
            data: "",
        };
    },
    computed: {
        id: function() {
            return this.$store.state.id;
        },
    },
    methods: {
        init: function(val) {
            getEvent(val || this.id).then((res) => {
                this.data = res.data.data;
                this.$store.state.race = res.data.data
            });
        },
    },
    created: function() {},
    mounted: function() {
        this.$store.state.id = this.$route.params.id;
    },
    watch: {
        "$route.params.id": function(id) {
            this.$store.state.id = id;
            this.init(id);
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
