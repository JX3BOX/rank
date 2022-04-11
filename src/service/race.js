import { $team } from "@jx3box/jx3box-common/js/https.js";
function getTop100(params,event_id = 1) {
    return $team().get(`/api/team/race/achieve/${params.achieve_id}/top100`, {
        params: {
            server: params.server,
            event_id
        },
    });
}

function getTopTotal(achieve_arr) {
    return $team().get(`/api/team/race/achieve/finish/process`, {
        params: {
            ids: achieve_arr,
            // _no_cache
        },
    });
}

function getMountDpsRace(achieveId, query) {
    return $team().get(`/api/team/achieve/${achieveId}/mount/top`, {
        params: query
    })
}

export {
    getTop100,
    getTopTotal,
    getMountDpsRace
};
