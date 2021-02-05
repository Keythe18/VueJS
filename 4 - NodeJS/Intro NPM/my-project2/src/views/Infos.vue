<template>
  <div class="infos">
    <h1>Infos</h1>
    <p>Infos</p>

    <div v-for="personne in personnes" :key="personne.id" class="personne">
      <router-link :to="'/personne/' + personne.id">
        <h3>{{ personne.nom }} {{ personne.prenom }}</h3>
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
      // personnes: [
      //   { id: 0, nom: "Jean", prenom: "Michel" },
      //   { id: 1, nom: "Pierre", prenom: "Paul" },
      //   { id: 2, nom: "Denis", prenom: "Jacques" },
      //   { id: 3, nom: "Marc", prenom: "Antoine" },
      //   { id: 4, nom: "Leo", prenom: "Etienne" },
      // ],
    };
  },
};
</script>

<style scoped>
.personne {
  padding: 6px 0;
  border: 1px solid grey;
  border-radius: 5px;
  margin: 3px;
  width: 300px;
  float: left;
}
</style>
