import Vue from "vue";
import Vuex from "vuex";
import { getBreadcrumb } from "@jx3box/jx3box-common/js/api_misc";

Vue.use(Vuex);

let store = {
    state: {
        loverId: "",
    },
    getters: {},
    mutations: {
        SET_LOVER_ID: (state, ID) => {
            state.loverId = ID;
        },
    },
    actions: {
        loadLoverId({ commit }) {
            try {
                getBreadcrumb("event-lover-id").then((res) => {
                    commit("SET_LOVER_ID", res);
                });
            } catch (error) {
                console.log(error);
            }
        },
    },
    modules: {},
};

export default new Vuex.Store(store);
