import { $team } from "./axios";

function joinEvent(data) {
    return $team().post(`/api/team/rank/join`, data);
}

function hasJoined(event_id, uid) {
    return $team().get(`/api/team/rank/my-records`, {
        params: {
            event_id: event_id,
            // uid : uid
        },
    });
}

export { joinEvent, hasJoined };
