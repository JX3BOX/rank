import { $next } from "./axios";

function setEvent(data) {
    return $next.post("team/rank/events", data);
}

function getEvent(id) {
    return $next.get("team/rank/events/" + id);
}

export { setEvent, getEvent };
