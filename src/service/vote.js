import { $team } from "./axios";

function getAllJoinedTeams(id) {
    return $team().post(`/api/team/rank/events/${id}/all-teams/v2`, {
        params: {
            status: 1,
        },
    });
}

export { getAllJoinedTeams };
