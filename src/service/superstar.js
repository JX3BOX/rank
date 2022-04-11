import { $team } from "@jx3box/jx3box-common/js/https.js";

function getTop100(aid,event_id) {
    return $team().get(`/api/team/race/achieve/${aid}/top100`, {
        params: {
            event_id,
            superstar:1
        },
    });
}

export { getTop100 };
