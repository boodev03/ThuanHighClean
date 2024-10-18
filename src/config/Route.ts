import AdminDashboard from "../pages/admin/dashboard";
import ContactPage from "../pages/contact";
import HomePage from "../pages/home";
import IntroducePage from "../pages/introduce";
import ServicePage from "../pages/service";

export const privateRoutes = [
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
    path: "/service",
    component: ServicePage,
  },
  {
    path: "/contact",
    component: ContactPage,
  },
];
