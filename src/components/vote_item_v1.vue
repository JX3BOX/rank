<template>
    <tbody v-if="list && list.length">
        <tr
            v-for="(item, i) in list"
            :key="i"
            v-show="!hasCondition || isMatched(item)"
        >
            <td>
                <i class="u-ranking">{{ i + 1 }}</i>
            </td>
            <td>
                <a :href="item.team_id | teamLink" target="_blank">
                    <img
                        loading="lazy"
                        class="u-logo"
                        :src="item.logo | teamLogo"
                        :alt="item.name"
                    />
                </a>
            </td>
            <td>
                <a
                    class="u-name"
                    :href="item.team_id | teamLink"
                    target="_blank"
                >
                    {{ item.name }}
                </a>
            </td>
            <td>
                <span class="u-server">{{ item.server }}</span>
            </td>
            <td>
                <span class="u-count">{{ item.guess }}</span>
            </td>
            <td class="u-vote-wapper">
                <button
                    class="u-vote"
                    :class="{ disabled: item.clicked || !event_status }"
                    :disabled="item.clicked || !event_status"
                    @click="vote(item)"
                ></button>
            </td>
        </tr>
    </tbody>
</template>

<script>
// import getWechatIframe from "@/assets/js/wxpop.js";
import {
    __imgPath,
    default_avatar,
} from "@jx3box/jx3box-common/data/jx3box.json";
import { getThumbnail, getLink } from "@jx3box/jx3box-common/js/utils";
import User from "@jx3box/jx3box-common/js/user.js";
import { doVote } from "@/service/vote.js";
export default {
    name: "voteItemV1",
    props: ["data", "team_name", "server"],
    data: function() {
        return {
            isLogin: User.isLogin(),

            // dialog_visible: false,
        };
    },
    computed: {
        list: function() {
            return this.data;
        },
        event_status: function() {
            return this.$store.state.race.status || false;
        },
        search_team: function() {
            return this.team_name;
        },
        search_server: function() {
            return this.server;
        },
        hasCondition: function() {
            return this.search_team || this.search_server;
        },
    },
    methods: {
        isMatched: function (item) {
            if (this.search_team && this.search_server) {
                return (
                    item.name.includes(this.search_team) &&
                    item.server == this.search_server
                );
            }
            let matchName =
                this.search_team && item.name.includes(this.search_team);
            let matchServer =
                this.search_server && item.server == this.search_server;
            return matchName || matchServer;
        },
        vote: function(item) {
            // 检查登录
            if (!this.isLogin) {
                User.toLogin();
                return;
            }

            // 检查微信
            // if (!User.hasBindwx()) {
            //     this.$alert(getWechatIframe(), "提示", {
            //         confirmButtonText: "确定",
            //         dangerouslyUseHTMLString: true,
            //     });
            //     return;
            // }

            doVote(this.id, item.team_id).then((res) => {
                this.$message({
                    message: "感谢您的参与，投票成功！",
                    type: "success",
                    duration: 1000,
                });

                item.clicked = true;
                item.guess = ~~item.guess + 1;
                this.$forceUpdate();
            });
        },
    },
    filters: {
        teamLogo: function(val) {
            return val
                ? getThumbnail(val, 96, true)
                : getThumbnail(default_avatar, 96, true);
        },
        teamLink: function(val) {
            return getLink("org", val);
        },
    },
    mounted: function() {},
    components: {},
};
</script>
