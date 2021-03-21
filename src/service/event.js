import { $next } from "./axios";

function setEvent(data) {
    return $next().post(`/api/team/rank/events`, data);
}

function getEvent(id) {
    return $next().get(`/api/team/rank/events/` + id);
}

function getEvents(params) {
    return $next().get(`/api/team/rank/events`, {
        params: params,
    });
}

function joinEvent(data) {
    return $next().post(`/api/team/rank/join`, data);
}

function hasJoined(event_id,uid) {
    return $next().get(`/api/team/rank/my-records`, {
        params: {
            event_id: event_id,
            // uid : uid
        },
    });
}

export { setEvent, getEvent, getEvents, joinEvent, hasJoined };
