import DetailUsedService from "@/pages/detail-used-service";
import AdminDashboard from "../pages/admin/dashboard";
import ContactPage from "../pages/contact";
import HomePage from "../pages/home";
import IntroducePage from "../pages/introduce";
import ServicePage from "../pages/service";
import Login from "../pages/admin/login/";

export const privateRoutes = [
  {
    path: "/admin/login",
    component: Login,
  },
  {
    path: "/admin/dashboard",
    component: AdminDashboard,
  },
];

export const publicRoutes = [
  {
    path: "/",
    component: HomePage,
  },
  {
    path: "/introduce",
    component: IntroducePage,
  },
  {
    path: "/service/:slug",
    component: ServicePage,
  },
  {
    path: "/contact",
    component: ContactPage,
  },
  {
    path: "/detail/:slug",
    component: DetailUsedService,
  }
];
