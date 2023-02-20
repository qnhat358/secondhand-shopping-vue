export default [
  {
    path: "/",
    redirect: "/en-gb",
    meta: {
      layout: "PersonalPortalDefault",
    },
  },
  {
    path: "/en-gb",
    name: "home",
    meta: {
      layout: "DefaultLayout",
      title: "Shpock  | The Joy of Selling",
      requiresAuth: true,
    },
    component: () => import("../views/HomeView.vue"),
  },
  {
    path: "/en-gb/results",
    name: "result",
    meta: {
      layout: "DefaultLayout",
      title: "Shpock  | The Joy of Selling",
      requiresAuth: true,
    },
    component: () => import("../views/ResultView.vue"),
  },
];
