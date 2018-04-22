const state = {
  loadedOtps: [],
  otpCount: 0,
  otpCountRequested: 0,
  otpCountVerifyed: 0
};

const mutations = {
  SET_OTPS(state, otps) {
    state.loadedOtps = otps;
  },
  SET_OTP_COUNT(state, count) {
    state.otpCount = count;
  },
  SET_OTP_COUNT_REQUESTED(state, countRequested) {
    state.otpCountRequested = countRequested;
  },
  SET_OTP_COUNT_VERIFYED(state, countVerifyed) {
    state.otpCountVerifyed = countVerifyed;
  }
};

const actions = {
  SET_OTPS({ commit }, otps) {
    commit("SET_OTPS", otps);
  },
  SET_OTP_COUNT({ commit }, count) {
    commit("SET_OTP_COUNT", count);
  },
  SET_OTP_COUNT_REQUESTED({ commit }, countRequested) {
    commit("SET_OTP_COUNT_REQUESTED", countRequested);
  },
  SET_OTP_COUNT_VERIFYED({ commit }, countVerifyed) {
    commit("SET_OTP_COUNT_VERIFYED", countVerifyed);
  }
};

const getters = {
  loadedOtps({ loadedOtps }) {
    return loadedOtps;
  },
  otpCount({ otpCount }) {
    return otpCount;
  },
  otpCountRequested({ otpCountRequested }) {
    return otpCountRequested;
  },
  otpCountVerifyed({ otpCountVerifyed }) {
    return otpCountVerifyed;
  }
};

export default {
  state,
  mutations,
  actions,
  getters
};
