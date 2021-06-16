import { $team } from "./axios";
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

export {
    getTop100,
    getTopTotal,
};
