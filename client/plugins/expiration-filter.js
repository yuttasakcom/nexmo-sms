import Vue from "vue";

Vue.filter("expiration", (status, expiration) => {
  if (status === "requested") {
    const dateNow = Date.now();
    const expDate = new Date(expiration).getTime();

    if (dateNow > expDate) {
      return "expired";
    }
    return status;
  } else {
    return status;
  }
});
