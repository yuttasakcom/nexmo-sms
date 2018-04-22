import Vue from "vue";
import Vuex from "vuex";

import otps from "./otps";
import clients from "./clients";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    otps,
    clients
  }
});
