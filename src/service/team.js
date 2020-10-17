import { $next } from "./axios";

function getMyTeams() {
    return $next.get("team/my-team");
}

function getAllTeams(event_id,params) {
    return $next.get(`team/rank/events/${event_id}/all-teams`,{
        params : params
    });
}

export { getMyTeams, getAllTeams };
