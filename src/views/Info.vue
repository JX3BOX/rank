<template>
  <div class="m-rank-info">
    <!-- 报名按钮 -->
    <div class="m-rank-btn" v-html="note"></div>

    <!-- 具体内容 -->
    <div class="m-rank-txt">
      <!--  v-html="desc" -->
      <h2>活动简介</h2>
      <div>
        本活动将于新团队副本·达摩洞开启后，统计由插件提交的「25人英雄难度」竞速排名，记录「全服最先通关的100支」队伍。
        <br />并在奉天证道资料片正式开启后，即开启「人气团队投票」通道。
        <br />每个首领百强诞生将通过魔盒官方微信公众号（2KOG）派发
        <b>红包雨</b>，并随机抽取幸运观众赠送由赞助商提供的幸运礼包。
        <br />同时关底BOSS通关队伍将根据排名全团成员会获得
        <b>大量实物奖品、证书、点月卡、通宝、激活码、推栏社区称号、魔盒社区勋章及成绩记录</b>等奖励。活动同时会在所有围观群众和参赛团队中随机抽取
        <b>幸运观众</b>及
        <b>幸运团队</b>奖，并由玩家投票产生
        <b>人气团队</b>奖。
        <br />
      </div>
      <h2>活动规则</h2>
      <div>
        (1)
        本次活动面向除工作室以外所有玩家，每个玩家和团队在1个BOSS中只记录一次成绩。
        <br />(2)
        所有参赛玩家需通过茗伊插件集绑定自己的所有角色至自己魔盒账号。
        <br />(3) 团长需在魔盒团队管理应用中创建团队，并在
        <a href="./join.html" target="_blank">活动报名页面</a>进行报名。
        <br />(4) 更多参赛须知请参阅
        <a href="/tool/?pid=18044#/" target="_blank">《剑三秘境百强榜活动细则》</a>。
      </div>
      <h2>奖励设置</h2>
      <div>
        <h3>派奖范围</h3>
        <li>红包雨：将在有
        <a href="/dashboard/#/connect" target="_blank">绑定微信</a>并关注了
        <a href="/tool/?pid=17851#/" target="_blank">魔盒微信公众号</a>且有
        <a href="./race.html#/1/vote">参与投票</a>的用户中产生。</li>
        <li>幸运观众：将在<a href="https://weibo.com/jx3box" target="_blank">魔盒官方微博</a>的粉丝中通过微博转抽诞生。</li>
        <li>幸运团队：所有报名且通关副本的团队中（包括不在百强排名内的）。</li>
        <li>人气团队：全部百强诞生时，根据人气投票榜排名前五。</li>
        活动期间在所有赞助商店铺消费备注<b>jx3box</b>即可获得额外礼品赠送。
        <br />
        <h3>1-5号BOSS百强诞生</h3>
        <div>
          <table>
              <thead>
              <tr>
                <th></th>
                <th>红包雨</th>
                <th>幸运观众</th>
                <th>幸运团队</th>
                <th>人气团队</th>
              </tr>
            </thead>
            <tbody>
                <tr>
                    <th>1号</th>
                    <td>初阵红包雨</td>
                    <td>剑三周边小礼包一份*3 <br><small>(价值78元,由醒魂香提供)</small></td>
                    <td rowspan=5>
                        剑三周边大礼包一份*5 <br><small>(价值148元,由醒魂香提供)</small>
                    </td>
                    <td rowspan=5>
                        剑网三阵营机箱定制贴纸*5 <br><small>(价值400元,由山居数码提供)</small>
                    </td>
                </tr>
                <tr>
                    <th>2号</th>
                    <td>第二波红包雨</td>
                    <td>剑三周边小礼包一份*3 <br><small>(价值78元,由醒魂香提供)</small></td>
                </tr>
                <tr>
                    <th>3号</th>
                    <td>第三波红包雨</td>
                    <td>剑三周边小礼包一份*3 <br><small>(价值78元,由醒魂香提供)</small></td>
                </tr>
                <tr>
                    <th>4号</th>
                    <td>第四波红包雨</td>
                    <td>剑三周边小礼包一份*3 <br><small>(价值78元,由醒魂香提供)</small></td>
                </tr>
                <tr>
                    <th>5号</th>
                    <td>大型红包雨</td>
                    <td>剑三周边小礼包一份*3 <br><small>(价值78元,由醒魂香提供)</small></td>
                </tr>
            </tbody>
          </table>
        </div>
        <h3>6号BOSS百强诞生</h3>
        <div>
          <table>
            <thead>
              <tr>
                <th></th>
                <th>实物</th>
                <th>点月卡/通宝</th>
                <th>激活码/挂件</th>
                <th>推栏社区</th>
                <th>魔盒社区</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>首甲</th>
                <td>门派定制水冷、电竞耳机、电竞鼠标<br><small>(价值1000元,由山居数码提供)</small></td>
                <td>全团每人奖励50元点月卡1份</td>
                <td>绝版挂件苏合明宵</td>
                <td>首通称号、荣誉表彰</td>
                <td>实物证书、百强勋章</td>
              </tr>
              <tr>
                <th>十甲</th>
                <td></td>
                <td>全团每人奖励50元点月卡1份</td>
                <td></td>
                <td>十甲称号、荣誉表彰</td>
                <td>实物证书、百强勋章</td>
              </tr>
              <tr>
                <th>五十</th>
                <td></td>
                <td>15元通宝<br><small>(推栏提供)</small></td>
                <td></td>
                <td>-</td>
                <td>百强勋章</td>
              </tr>
              <tr>
                <th>百强</th>
                <td></td>
                <td></td>
                <td></td>
                <td>-</td>
                <td>百强勋章</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="u-all">此外，每个BOSS的百强团队均会获得魔盒团队管理应用百强成绩记录项。</div>
      </div>
    </div>
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
