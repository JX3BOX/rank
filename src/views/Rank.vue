<template>
    <div class="m-rank-rank">
        <!-- 1.boss tab -->
        a.使用this.$store.state.race中的achieve_ids数据，获得当前活动的关联成就ID
        b.通过@/assets/data/achieve.json中自建的成就id与boss名关联展示该tab列表

        <!-- 2.指定成就id的排名列表 -->
        a.前3个索引需要加额外class处理样式
        b.团队链接 /team/org/view/$id
        c.个人链接 使用Utils.authorLink($uid)
        d.心法图标 __img + 'image/xf/' + $id + .png

    </div>
</template>

<script>
    export default {
        props:[],
        data : function(){
            return {
                
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
    // @import '../assets/css/fn.less';
</style>