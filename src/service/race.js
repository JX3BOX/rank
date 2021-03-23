import { $team } from "./axios";

function getTop100(achieve_id, server = "") {
    if (!achieve_id) return;
    return $team().get(`/api/team/race/achieve/${achieve_id}/top100`, {
        params: {
            server: server,
        },
    });
}

function getTopTotal(achieve_arr) {
    return $team().get(`/api/team/race/achieve/finish/process`, {
        params: {
            ids: achieve_arr,
            // _no_cache
        },
    });
}

function getLives(event_id, params) {
    return $team().get(`/api/team/rank/events/${event_id}/live-tv-list`, {
        params: params,
    });
}

function getVideos(event_id, params) {
    return $team().get(`/api/team/video/event/${event_id}`, {
        params: params,
    });
}

function deleteVideo(id) {
    return $team().delete(`/api/team/video/${id}`);
}

function updateVideo(id, data) {
    return $team().put(`/api/team/video/${id}`, data);
}

function addVideo(data) {
    return $team().post(`/api/team/video`, data);
}

export {
    getTop100,
    getLives,
    getVideos,
    getTopTotal,
    deleteVideo,
    addVideo,
    updateVideo,
};
