import { $team } from "./axios";

function getMyTeams() {
    return $team().get(`/api/team/my-team`);
}

export { getMyTeams };
