import Vue from "vue";
import Router from "vue-router";
import Home from ".views/Home.vue";
import Community from ".views/Community.vue";
import Store from ".views/Store.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: () =>
        import("./views/Home.vue")
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    },
    {
      path: "/community",
      name: "/community",
      // route level code-splitting
      // this generates a separate chunk (community.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "community" */ "./views/Community.vue")
    },
    {
      path: "/store",
      name: "/store",
      // route level code-splitting
      // this generates a separate chunk (store.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "store" */ "./views/Store.vue")
    },
    {
      path: "/gallery",
      name: "/gallery",
      // route level code-splitting
      // this generates a separate chunk (gallery.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "store" */ "./views/Gallery.vue")
    }
  ]
});
