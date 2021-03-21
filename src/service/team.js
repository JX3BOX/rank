import { $team } from "./axios";

function getMyTeams() {
    return $team().get(`/api/team/my-team`);
}

function getAllTeams(event_id, params) {
    return $team().get(`/api/team/rank/events/${event_id}/all-teams`, {
        params: params,
    });
}

export { getMyTeams, getAllTeams };
