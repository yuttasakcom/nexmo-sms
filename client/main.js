import Vue from "vue";
import VueRouter from "vue-router";

import routes from "./routes";
import store from "./stores";

import "@/plugins/core-components";

import "@/plugins/date-filter";
import "@/plugins/expiration-filter";

import App from "./App";

import "@/public/assets/styles/main.css";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes
});

new Vue({
  el: "#app",
  router,
  store,
  render: h => h(App)
});
