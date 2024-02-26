import { $team } from "@jx3box/jx3box-common/js/https.js";

export function getLoverEvent(id) {
    return $team().get(`/api/team/pvp-event/public/item/${id}`);
}
// 获取我的情缘
export function getMyLover() {
    return $team().get(`/api/team/my-lover/list`);
}
// 设置我的主情缘
export function setMyLover(id) {
    return $team().put(`/api/team/my-lover/item/${id}/star`);
}
