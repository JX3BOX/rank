import { $next } from "./axios";

function getTop100(id){
    return $next.get(`team/race/achieve/${id}/top100`)
}

export { getTop100 };