<template>
  <div>
    <Header />
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  created() {
    axios
      .get("/api/clients")
      .then(res => res.data)
      .then(clients => {
        this.$store.dispatch("SET_CLIENTS", clients);
      })
      .catch(err => console.log(err));

    axios
      .get("/api/otps")
      .then(res => res.data)
      .then(otps => {
        this.$store.dispatch("SET_OTPS", otps.data);
        this.$store.dispatch("SET_OTP_COUNT", otps.count);
        this.$store.dispatch("SET_OTP_COUNT_REQUESTED", otps.countRequested);
        this.$store.dispatch("SET_OTP_COUNT_VERIFYED", otps.countVerifyed);
      })
      .catch(err => console.log(err));
  }
};
</script>