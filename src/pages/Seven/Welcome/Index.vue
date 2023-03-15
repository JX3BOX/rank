<template>
    <div class="container">
        <div class="content">
            <img class="title" src="@/assets/img/seven/welcome_title.png" />
            <div class="gird_box">
                <div class="box_item" v-for="(item, index) in list" :key="index"></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: [],
    data: () => ({
        list: [], //宫格数据
    }),
    computed: {
        id: function () {
            return this.$store.state.id;
        },
        desc: function () {
            return this.$store.state.race.desc;
        },
    },
    methods: {},
    filters: {},
    mounted: function () {},
    created: function () {
        this.list = new Array(9).fill(1).map((_, i) => ({ id: i + new Date().valueOf() }));
    },
    components: {},
};
</script>

<style lang="less" scoped>
.container {
    height: 1440px;
    background: url("../../..//assets/img/seven/welcome_backdrop.png") no-repeat;
    display: flex;
    justify-content: center;
    .content {
        background: url("../../..//assets/img/seven/gird_backdrop.png") no-repeat;
        width: 1210px;
        height: 1440px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        .gird_box {
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            gap: 20px;

            .box_item {
                width: 298px;
                height: 198px;
                background: #ffffff;
            }
        }
    }
}
</style>
