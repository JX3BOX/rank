import { $next } from "./axios";

function getTop100(achieve_id, server = "") {
    return $next.get(`team/race/achieve/${achieve_id}/top100`, {
        params: {
            server: server,
        },
    });
}

function getTopTotal(achieve_arr) {
    return $next.get(`team/race/achieve/finish/process`, {
        params: {
            ids: achieve_arr,
            // _no_cache
        },
    });
}

function getLives(event_id, params) {
    return $next.get(`team/rank/events/${event_id}/live-tv-list`, {
        params: params,
    });
}

function getVideos(event_id, params) {
    return $next.get(`team/video/event/${event_id}`, {
        params: params,
    });
}

function deleteVideo(id) {
    return $next.delete(`team/video/${id}`);
}

function updateVideo(id, data) {
    return $next.put(`team/video/${id}`, data);
}

function addVideo(data) {
    return $next.post(`team/video`, data);
}

function doVote(event_id, team_id) {
    return $next.post(`team/events/${event_id}/vote-team/${team_id}`);
}

export {
    getTop100,
    getLives,
    getVideos,
    getTopTotal,
    doVote,
    deleteVideo,
    addVideo,
    updateVideo,
};
