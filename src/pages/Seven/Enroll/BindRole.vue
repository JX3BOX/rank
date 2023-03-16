<template>
    <div class="container">
        <div class="m-title">绑定角色</div>
        <div class="m-main">
            <span class="m-main_sub-title">绑定令牌</span>
            <div class="m-main_code">CD63E8340D5F8CBC4CACA6B99C93A67C</div>
            <div class="m-main_tips">*令牌10分钟内有效，超时请<span>点击此处</span>刷新</div>
            <div class="m-main_desc">
                <div>使用方法:</div>
                <div>打开【茗伊插件集】-【团队】-【团队平台】</div>
                <div>在【角色认证】行，点击按钮【点击绑定】并【填入上方密钥】</div>
            </div>
          
        </div>
    </div>
</template>

<script>
export default {
    name: "BindRole",
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
    padding-top: 42px;
    color: #fff;
    font-family: "Microsoft YaHei";
   
    .m-main {
        padding-left: 89px;

        .m-main_desc {
            margin-top: 30px;
            font-size: 16px;
        }
        .m-main_tips > span {
            cursor: pointer;
            text-decoration: underline;
        }
        .m-main_code {
            margin: 10px 0;
            width: 910px;
            height: 82px;
            background: #24292e;
            font-weight: 700;
            font-size: 32px;
            display: flex;
            align-items: center;
            padding-left: 20px;
        }
        .m-main_sub-title {
            font-size: 16px;
            font-weight: 700;
        }
    }
    .m-title {
        text-align: center;
        font-weight: 700;
        font-size: 32px;
        margin-bottom: 20px;
    }
}
</style>
