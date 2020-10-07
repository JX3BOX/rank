import { $next } from "./axios";

function setEvent(data) {
    return $next.post("team/rank/events", data);
}

function getEvent(id) {
    return $next.get("team/rank/events/" + id);
}

function getEvents(params) {
    return $next.get("team/rank/events", {
        params: params,
    });
}

function joinEvent(data) {
    return $next.post("team/rank/join", data);
}

export { setEvent, getEvent, getEvents, joinEvent };
