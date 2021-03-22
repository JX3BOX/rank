<template>
    <div id="app" class="m-rank-container">
        <Header></Header>
        <div class="m-rank-join m-rank-event">
            <div class="m-rank-header">
                <img class="u-logo" :src="LOGO" />
            </div>
            <div class="m-rank-content">
                <div class="m-join m-join-team">
                    <h1 class="m-join-title">活动设置</h1>
                    <el-form
                        class="m-join-form"
                        ref="form"
                        :model="form"
                        label-width="80px"
                    >
                        <el-form-item label="是否可见">
                            <el-radio-group v-model="form.visible">
                                <el-radio :label="1">可见</el-radio>
                                <el-radio :label="0">隐藏</el-radio>
                            </el-radio-group>
                        </el-form-item>
                        <el-form-item label="活动状态">
                            <el-radio-group v-model="form.status">
                                <el-radio :label="1">开启</el-radio>
                                <el-radio :label="0">关闭</el-radio>
                            </el-radio-group>
                        </el-form-item>
                        <el-form-item label="成就序列">
                            <el-input
                                v-model="form.achieve_ids"
                                placeholder="请输入内容"
                            ></el-input>
                            <div class="u-note">例如：1,2,3,...</div>
                        </el-form-item>
                        <el-form-item label="活动名称">
                            <el-input
                                v-model="form.name"
                                placeholder="请输入内容"
                            ></el-input>
                        </el-form-item>
                        <el-form-item label="开启模块">
                            <el-checkbox-group v-model="form.blocks">
                                <el-checkbox
                                    :label="key"
                                    v-for="(label, key) in blocks"
                                    :key="key"
                                    >{{ label }}</el-checkbox
                                >
                            </el-checkbox-group>
                        </el-form-item>
                        <el-form-item label="活动介绍">
                            <el-input
                                v-model="form.desc"
                                placeholder="请输入内容"
                                type="textarea"
                                rows="8"
                            ></el-input>
                        </el-form-item>
                        <el-form-item label="活动奖励">
                            <el-input
                                v-model="form.gifts"
                                placeholder="请输入内容"
                                type="textarea"
                                rows="8"
                            ></el-input>
                        </el-form-item>
                        <el-form-item label="其它说明">
                            <el-input
                                v-model="form.note"
                                placeholder="请输入内容"
                                type="textarea"
                                rows="8"
                            ></el-input>
                        </el-form-item>
                        <el-form-item label="赞助名单" class="u-sponsor-label">
                            <div
                                class="u-sponsor"
                                v-for="(item, i) in form.sponsors"
                                :key="i"
                            >
                                <el-row :gutter="20">
                                    <el-col :span="8">
                                        <div>
                                            <el-input v-model="item.logo">
                                                <span slot="prepend">图标</span>
                                            </el-input>
                                        </div>
                                    </el-col>
                                    <el-col :span="8">
                                        <div>
                                            <el-input v-model="item.link">
                                                <span slot="prepend">链接</span>
                                            </el-input>
                                        </div>
                                    </el-col>
                                    <el-col :span="6">
                                        <div>
                                            <el-button
                                                type="primary"
                                                plain
                                                size="mini"
                                                @click="add(i)"
                                                >+ 添加</el-button
                                            >
                                            <el-button
                                                type="danger"
                                                plain
                                                size="mini"
                                                @click="del(i)"
                                                >- 删除</el-button
                                            >
                                        </div>
                                    </el-col>
                                </el-row>
                            </div>
                        </el-form-item>
                        <div class="u-btns">
                            <el-button
                                class="u-btn"
                                type="primary"
                                @click="submit"
                                >提交</el-button
                            >
                        </div>
                    </el-form>
                </div>
            </div>
        </div>
        <Footer></Footer>
    </div>
</template>

<script>
import PICS from "@/assets/js/pics.js";
import blocks from "@/assets/data/blocks.json";
import { setEvent,getEvent } from "@/service/event.js";
export default {
    name: "App",
    props: [],
    data: function() {
        return {
            form: {
                visible : 0,
                status: 0,
                achieve_ids: "",
                name: "",
                sponsors: [
                    {
                        logo: "",
                        link: "",
                    },
                ],
                blocks: [],
                desc: "",
                gifts: "",
                note: "",
            },
            blocks,
            id : '',
            LOGO: PICS.LOGO,
        };
    },
    computed: {},
    methods: {
        submit: function() {
            setEvent(this.form).then((res) => {
                this.$message({
                    message: "设置成功",
                    type: "success",
                });
                // this.form = res.data.data
                // location.reload()
            });
        },
        add: function(i) {
            this.form.sponsors.push({
                logo: "",
                link: "",
            });
        },
        del: function(i) {
            this.form.sponsors.splice(i, 1);
        },
    },
    beforeCreate: function() {
        let params = new URLSearchParams(location.search);
        this.id = params.get('id')
        if(this.id){
            getEvent(this.id).then((res) => {
                this.form = res.data.data
            })
        }
    },
    components: {},
};
</script>

<style lang="less">
@import "../assets/css/join.less";
@import "../assets/css/event.less";
</style>
