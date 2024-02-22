import { $team } from "@jx3box/jx3box-common/js/https.js";

export function getLover(id) {
    return $team().get(`/api/pvp-event/public/item/${id}`);
}
