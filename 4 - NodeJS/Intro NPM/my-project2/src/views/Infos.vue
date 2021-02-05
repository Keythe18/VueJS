<template>
  <div class="infos">
    <h1>Infos</h1>
    <p>Infos sur les employes</p>

    <div v-for="personne in personnes" :key="personne.id" class="personne">
        <router-link :to="'/personne/' + personne.id">
            <h3>{{personne.nom}} {{personne.prenom}}</h3>
        </router-link>
    </div>
    <div style="clear:both;"></div>
  </div>
</template>

<script>
export default {
  name: "Infos",

  data() {
    return {
      personnes: [
        { id: 0, nom: "Jean", prenom: "Michel" },
        { id: 1, nom: "Jean", prenom: "Michel" },
        { id: 2, nom: "Jean", prenom: "Michel" },
        { id: 3, nom: "Jean", prenom: "Michel" },
        { id: 4, nom: "Jean", prenom: "Michel" },
      ],
    };
  },
};
</script>

<style scoped>
    .personne{
        padding: 20px;
        border: 1px solid grey;
        width: 300px;
        float: left;
    }
</style>
