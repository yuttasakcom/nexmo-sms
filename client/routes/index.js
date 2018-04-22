import Sms from "@/pages/Sms";
import Client from "@/pages/Client";
import Logout from "@/pages/Logout";

const routes = [
  {
    path: "/",
    component: Sms
  },
  {
    path: "/client",
    component: Client
  },
  {
    path: "/logout",
    component: Logout
  }
];

export default routes;
