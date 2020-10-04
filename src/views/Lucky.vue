<template>
    <div class="m-rank-lucky">
        <!-- gifts -->
        <div class="m-rank-txt" v-html="data"></div>
    </div>
</template>

<script>
    export default {
        props:[],
        data : function(){
            return {
                data : ''
            }
        },
        computed:{},
        methods:{},
        filters:{},
        created:function(){},
        components : {
        }
    }
</script>

<style lang="less">
    @import '../assets/css/info.less';
</style>