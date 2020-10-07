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

export { setEvent, getEvent, getEvents };
