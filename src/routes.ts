import { RouteRecordRaw } from "vue-router";
import Home from "./pages/Home.vue";
// import About from "./pages/About.vue";
import User from "./pages/User.vue";
import NotFound from "./pages/NotFound.vue";
import UserProfile from "./pages/UserProfile.vue";
import UserPost from "./pages/UserPost.vue";
import UserHome from "./pages/UserHome.vue";
import LongNameRoute from "./pages/LongNameRoute.vue";
import { LONG_ROUTE_NAME } from "./constants";

const AsyncAbout = () => import("./pages/About.vue");

export const routes: RouteRecordRaw[] = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/home",
    redirect: "/",
  },
  {
    path: "/about",
    // component: About,
    component: AsyncAbout,
    props(route) {
      return { abc: route.query.q };
    },
    meta: {
      who: "i am aifuxi",
    },
  },
  {
    path: "/me",
    redirect: "/about",
  },
  {
    path: "/users/:id",
    component: User,
    children: [
      {
        path: "",
        component: UserHome,
      },
      {
        path: "profile",
        component: UserProfile,
      },
      {
        path: "post",
        component: UserPost,
      },
    ],
  },
  {
    path: "/looooooooooooooooooooong",
    name: LONG_ROUTE_NAME,
    component: LongNameRoute,
  },
  { path: "/:pathMatch(.*)*", name: "NotFound", component: NotFound },
];
