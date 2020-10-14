<template>
    <div class="m-rank-stat">
        <img :src="null_img_url" class="m-rank-null" />
    </div>
</template>

<script>
import { __imgPath } from "@jx3box/jx3box-common/js/jx3box.json";
export default {
    props: [],
    data: function() {
        return {
            null_img_url: __imgPath + "image/rank/common/null.png",
        };
    },
    computed: {},
    methods: {},
    filters: {},
    created: function() {},
    components: {},
};
</script>

<style lang="less">
@import '../assets/css/race_stat.less';
</style>
