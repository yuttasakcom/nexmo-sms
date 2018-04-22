import Otp from "@/pages/Otp";
import Client from "@/pages/Client";
import Logout from "@/pages/Logout";

const routes = [
  {
    path: "/",
    component: Otp
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
