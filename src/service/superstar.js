import { $team } from "./axios";
import aidmap from "@/assets/data/superstar.json";

function getTop100(event_id) {
    let aid = aidmap[event_id];
    return $team().get(`/api/team/race/achieve/${aid}/top100`, {
        params: {
            event_id,
            superstar:1
        },
    });
}

export { getTop100 };
