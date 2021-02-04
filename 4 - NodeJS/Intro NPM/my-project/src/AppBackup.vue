<template>
  <div>
    <TitreBleu
      v-for="titre in titres"
      v-bind:key="titre.id"
      v-bind:affichageEtat="affiche"
      v-bind:titre="titre.titre"
    ></TitreBleu>

    <button v-on:click="toogle">Cacher</button>
  </div>
</template>

<script>
import TitreBleu from "./components/TitreBleu";

export default {
  name: "App",
  data() {
    return {
      affiche: true,
      titres: [
        { id: 0, titre: "Bonjour" },
        { id: 1, titre: "Bonsoir" },
      ],
    };
  },
  methods: {
    toogle() {
      this.affiche = this.affiche ? false : true;
    },
  },
  components: {
    TitreBleu,
  },
};
</script>

<style></style>
