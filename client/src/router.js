import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/rest",
      name: "rest",
      component: () => import("./views/Rest.vue")
    },
    {
      path: "/graphql",
      name: "graphql",
      component: () => import("./views/GraphQL.vue")
    },
    {
      path: "/",
      name: "home",
      component: () => import("./views/Home.vue")
    }
  ]
});
