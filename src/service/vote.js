import { $team } from "./axios";

function getAllJoinedTeams(id) {
    if (id == 1) {
        return $team()
            .get(`/api/team/rank/events/${id}/all-teams`, {
                params: {
                    return_all: 1,
                },
            })
            .then((res) => {
                return res.data.data.list || [];
            });
    } else {
        return $team()
            .get(`/api/team/rank/events/${id}/all-teams/v2`, {
                params: {
                    status: 1,
                },
            })
            .then((res) => {
                return res.data.data || [];
            });
    }
}

function doVote(event_id, team_id) {
    if (event_id == 1) {
        return $team().post(
            `/api/team/events/${event_id}/vote-team/${team_id}`
        );
    } else {
        return $team({ popType: "alert" }).post(`/api/team/rank/vote`, {
            params: {
                event_id: ~~event_id,
                team_id: ~~team_id,
            },
        });
    }
}

export { getAllJoinedTeams, doVote };
