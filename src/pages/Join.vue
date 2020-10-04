<template>
    <div id="app" class="m-rank-container">
        <Header></Header>
        <div class="m-rank-join">
            <div class="m-rank-header"></div>
            <div class="m-rank-content">
                <div class="m-join m-join-team">
        <h1 class="m-join-title">报名入口</h1>
        <el-form class="m-join-form" ref="form" :model="form" label-width="80px">
            <el-form-item label="报名活动">
                <el-select v-model="form.event_id" placeholder="请选择活动">
                    <el-option
                        v-for="event in events"
                        :key="event.ID"
                        :label="event.name"
                        :value="event.ID"
                    >
                    </el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="选择团队">
                <el-select v-model="form.team_id" placeholder="请选择团队">
                    <el-option
                        v-for="team in teams"
                        :key="team.ID"
                        :label="team.name"
                        :value="team.ID"
                    >
                    </el-option>
                </el-select>
                <div class="u-tip" v-if="!teams.length">还没有团队？<a href="/team/#/org/setting" target="_blank">创建团队</a></div>
            </el-form-item>
            <el-form-item label="联系电话">
                <el-input v-model="form.phone" placeholder="请输入正确的紧急联系电话"></el-input>
            </el-form-item>
            <el-form-item label="邮寄地址">
                <el-input v-model="form.address" placeholder="请输入正确的奖品邮寄地址"></el-input>
            </el-form-item>
            <el-form-item label="联系QQ">
                <el-input v-model="form.qq" placeholder="请输入正确的QQ号码"></el-input>
            </el-form-item>
            <div class="u-warning"><i class="el-icon-info"></i> <a href="/tool/?pid=18044#/" target="_blank"><b>点击查看活动规则详情</b></a>，团长请加入<a href="https://jq.qq.com/?_wv=1027&k=q8D2PQAC" target="_blank">QQ群785597424</a>，以咨询或其它反馈。</div>
            <div class="u-btns">
                <el-button class="u-btn" type="primary" @click="submit">报名</el-button>
            </div>
        </el-form>
    </div>
            </div>
        </div>
        <Footer></Footer>
    </div>
</template>

<script>
export default {
    name: "App",
    props: [],
    data: function() {
        return {
            form: {
                event_id : '',
                team_id : '',
                phone : "",
                address:"",
                qq:""
            },
            events:[
                {
                    ID : 1,
                    name : "奉天证道",
                    status : 1,
                }
            ],
            teams : [
                // {
                //     ID : 1,
                //     name : "诗画印象"
                // }
            ]
        };
    },
    computed: {
    },
    methods: {
        submit : function (){
            
        }
    },
    beforeCreate: function() {
        // TODO:设置活动默认项：events[0]['ID']、teams[0]['ID']
    },
    components: {
    },
};
</script>

<style lang="less">
@import "../assets/css/join.less";
</style>
