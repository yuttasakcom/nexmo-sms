const state = {
  loadedClients: []
};

const mutations = {
  SET_CLIENTS(state, clients) {
    state.loadedClients = clients;
  },
  PUSH_CLIENT(state, client) {
    state.loadedClients.push(client);
  }
};

const actions = {
  SET_CLIENTS({ commit }, clients) {
    commit("SET_CLIENTS", clients);
  },

  PUSH_CLIENT({ commit }, client) {
    commit("PUSH_CLIENT", client);
  }
};

const getters = {
  loadedClients({ loadedClients }) {
    return loadedClients;
  },
  loadedClientsCount({ loadedClients }) {
    return loadedClients.length;
  }
};

export default {
  state,
  mutations,
  actions,
  getters
};
