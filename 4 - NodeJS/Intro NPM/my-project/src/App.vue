<template>
  <button v-on:click="hideBtn">Btn</button>
  <button v-on:click="resetBtn">Reset</button>
  <div>
    <Personnes
      v-for="personne in personnes"
      v-bind:key="personne.id"
      v-bind:prenom="personne.prenom"
      v-bind:nom="personne.nom"
      v-bind:age="personne.age"
      v-bind:majeur="personne.majeur"
    ></Personnes>
  </div>
</template>

<script>
import Personnes from "./components/Personnes";

export default {
  name: "App",

  data() {
    return {
      personnes: [
        { id: 0, prenom: "Tom", nom: "Hanks", age: 12, majeur: true },
        { id: 1, prenom: "Tom", nom: "Hanks", age: 15, majeur: true },
        { id: 2, prenom: "Tom", nom: "Hanks", age: 18, majeur: true },
        { id: 3, prenom: "Tom", nom: "Hanks", age: 20, majeur: true },
        { id: 4, prenom: "Tom", nom: "Hanks", age: 16, majeur: true },
        { id: 5, prenom: "Tom", nom: "Hanks", age: 13, majeur: true },
        { id: 6, prenom: "Tom", nom: "Hanks", age: 24, majeur: true },
        { id: 7, prenom: "Tom", nom: "Hanks", age: 39, majeur: true },
        { id: 8, prenom: "Tom", nom: "Hanks", age: 39, majeur: true },
        { id: 9, prenom: "Tom", nom: "Hanks", age: 39, majeur: true },
        { id: 10, prenom: "Tom", nom: "Hanks", age: 39, majeur: true },
        { id: 11, prenom: "Tom", nom: "Hanks", age: 39, majeur: true },
      ],
    };
  },

  components: {
    Personnes,
  },

  methods: {
    hideBtn() {
      this.personnes.forEach((personne) => {
        personne.majeur = personne.age < 18 ? false : true;
      });
    },
    resetBtn() {
      this.personnes.forEach((personne) => {
        personne.majeur = true;
      });
    },
  },
};
</script>

<style>
button {
  padding: 5px;
  font-size: 15px;
}
</style>
