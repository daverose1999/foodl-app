import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/Home/HomeView";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/search",
    name: "SearchView",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Search/SearchView.vue"),
    children: [
      {
        path: "/search",
        name: "Search",
        component: () => import("../components/SearchBar/Search.vue"),
      },
      {
        path: "/search/:id",
        name: "CardItem",
        component: () => import("../components/CardItem/CardItem.vue"),
      },
    ],
  },
  // {
  //   path: "/search/:id",
  //   name: "carditem",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(
  //       /* webpackChunkName: "about" */ "../components/CardItem/CardItem.vue"
  //     ),
  // },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
