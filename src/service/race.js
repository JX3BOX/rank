import { $next } from "./axios";

function getTop100(achieve_id) {
    return $next.get(`team/race/achieve/${achieve_id}/top100`);
}

function getLives(event_id,params) {
    return $next.get(`team/rank/events/${event_id}/live-tv-list`,{
        params : params
    });
}

export { getTop100, getLives };
