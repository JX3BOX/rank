import { $next } from "./axios";

function getMyTeams() {
    return $next().get(`/api/team/my-team`);
}

function getAllTeams(event_id, params) {
    return $next().get(`/api/team/rank/events/${event_id}/all-teams`, {
        params: params,
    });
}

export { getMyTeams, getAllTeams };
