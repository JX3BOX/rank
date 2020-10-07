<template>
  <div class="m-rank-info">
    <!-- 报名按钮 -->
    <div class="m-rank-btn" v-html="note"></div>

    <!-- 具体内容 -->
    <div class="m-rank-txt" v-html="desc"></div>
  </div>
</template>

<script>
export default {
  props: [],
  data: function () {
    return {
      note: "",
      desc: "",
    };
  },
  computed: {},
  methods: {},
  filters: {},
  created: function () {},
  components: {},
};
</script>

<style lang="less">
@import "../assets/css/info.less";
</style>
