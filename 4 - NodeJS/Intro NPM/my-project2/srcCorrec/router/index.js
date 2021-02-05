import Vue from "vue";
import VueRouter from "vue-router";

import Home from "../views/Home.vue";
import MaPage from "../views/MaPage.vue"
import Equipe from "../views/Equipe.vue"
import Personne from "../views/Personne.vue"

Vue.use(VueRouter);

let personnes = [
  {id:0, nom:"Jean Paul", prenom:"Ate"},
  {id:1, nom:"Michel", prenom:"Oti"},
  {id:2, nom:"André", prenom:"Pomoro"},
  {id:3, nom:"Astrid", prenom:"Luris"},
  {id:4, nom:"Johanna", prenom:"Luris"},
]


const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/mapage",
    name: "Ma page",
    component: MaPage,
  },
  {
    path: "/equipe",
    name: "Equipe",
    component: Equipe,
    props:{
      personnes: personnes
    }
  },
  {
    path: "/personne/:idpersonne",
    name: "Personne",
    component: Personne,
    
    props:{
      personnes: personnes
    }
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];

const router = new VueRouter({
  routes
});


export default router;
