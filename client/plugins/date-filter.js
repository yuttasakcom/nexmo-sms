import Vue from "vue";
import moment from "moment";

Vue.filter("date", date => {
  moment.locale();
  return moment(date).format("ll, h:mm:ss a");
});
