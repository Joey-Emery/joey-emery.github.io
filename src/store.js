import Vue from 'vue';
import Vuex from 'vuex';

var StoreLoader = require('./storeloader').default,

_store = StoreLoader.import([
]),

state = _store.state,
getters = _store.getters,
mutations = _store.mutations,
actions = _store.actions;

export default new Vuex.Store({
    state,
    getters,
    mutations,
    actions,
});