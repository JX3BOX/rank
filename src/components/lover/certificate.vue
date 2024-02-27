<template>
    <div class="m-lover-box m-lover-certificate">
        <div class="no-certificate">ღ 暂无绑定的主情缘 ღ</div>
    </div>
</template>

<script>
export default {
    name: "certificate",
    props: {
        data: {
            type: Object,
            default: () => {},
        },
    },
    data: function () {
        return {};
    },
    computed: {},
    methods: {},
};
</script>
<style lang="less">
.m-lover-certificate {
    .flex;
    align-items: center;
    justify-content: center;
    min-height: 300px;
    .no-certificate {
        .bold;
        .fz(30px);
        letter-spacing: 5px;
        color: #ff7272;
    }
}
</style>
