import { $team } from "@jx3box/jx3box-common/js/https.js";

function getTop100(aid, event_id) {
    return $team().get(`/api/team/race/achieve/${aid}/top100`, {
        params: {
            event_id,
            superstar: 1,
        },
    });
}
// 根据多个id批量获取战斗数据
function getBattleOrJcl(params) {
    return $team().get(`/api/team/battle/batch`, {
        params,
    });
}
export { getTop100, getBattleOrJcl };
