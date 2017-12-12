import Vue from 'vue';
import Vuex from 'vuex';

import * as actions from './actions';
import * as mutations from './mutations';
import * as getters from './getters';

Vue.use(Vuex);

const state = {
    correntPage:'app',
    ballColor:0
};

export default new Vuex.Store({
    state,
    mutations,
});
