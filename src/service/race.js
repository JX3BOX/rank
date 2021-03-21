import { $next } from "./axios";

function getTop100(achieve_id, server = "") {
    if (!achieve_id) return;
    return $next().get(`/api/team/race/achieve/${achieve_id}/top100`, {
        params: {
            server: server,
        },
    });
}

function getTopTotal(achieve_arr) {
    return $next().get(`/api/team/race/achieve/finish/process`, {
        params: {
            ids: achieve_arr,
            // _no_cache
        },
    });
}

function getLives(event_id, params) {
    return $next().get(`/api/team/rank/events/${event_id}/live-tv-list`, {
        params: params,
    });
}

function getVideos(event_id, params) {
    return $next().get(`/api/team/video/event/${event_id}`, {
        params: params,
    });
}

function deleteVideo(id) {
    return $next().delete(`/api/team/video/${id}`);
}

function updateVideo(id, data) {
    return $next().put(`/api/team/video/${id}`, data);
}

function addVideo(data) {
    return $next().post(`/api/team/video`, data);
}

function doVote(event_id, team_id) {
    return $next().post(`/api/team/events/${event_id}/vote-team/${team_id}`);
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
