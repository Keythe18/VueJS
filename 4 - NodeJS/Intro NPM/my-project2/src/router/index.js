import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Infos from "../views/Infos.vue";
import Contact from "../views/Contact.vue";
import Personne from "../views/Personne.vue";
import CV from "../views/CV.vue";
import Portfolio from "../views/Portfolio.vue";

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
    path: "/cv",
    name: "CV",
    component: CV,
  },
  {
    path: "/personne/:idpersonne",
    name: "Personne",
    component: Personne,
  },
  {
    path: "/portfolio",
    name: "Portfolio",
    component: Portfolio,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
