import { $next } from "./axios";

function getMyTeams() {
    return $next.get("team/my-team");
}

export { getMyTeams };
