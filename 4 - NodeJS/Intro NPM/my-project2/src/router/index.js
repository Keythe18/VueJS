import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Infos from "../views/Infos.vue";
import Contact from "../views/Contact.vue";
import Personne from "../views/Personne.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/infos",
    name: "Infos",
    component: Infos,
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
  },
  {
    path: "/personne/:idpersonne",
    name: "Personne",
    component: Personne,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
