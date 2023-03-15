<template>
    <el-dialog 
    top="50vh"
    :modal-append-to-body="false" :show-close="false" center :visible.sync="visible" :modal="false" mode>
        <slot></slot>
    </el-dialog>
</template>

<script>
export default {
    name: "global_modal",
    props: ["visible", ""],
    data: function () {
        return {};
    },
    computed: {},
    methods: {},
    mounted: function () {
        console.log(this);
    },
    components: {},
};
</script>
<style lang="less" scoped></style>
