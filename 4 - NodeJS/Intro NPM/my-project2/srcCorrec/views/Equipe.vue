<template>
  <div style="padding:40px;">
    <h1>Equipe</h1>
    <p>Mon paragraphe</p>

    <div v-for="personne in personnes" :key="personne.id" class="personne">
        <router-link :to="'/personne/' + personne.id"><h3>{{ personne.nom }} {{ personne.prenom }}</h3></router-link>
    </div>

    <div style="clear:both;"></div>
  </div>
</template>

<script>
export default {
  name: "Equipe",

  props:{
      personnes: Array
  }



};
</script>

<style scoped>
    .personne{
        padding:20px;
        border:1px solid orange;
        width:300px;
        float:left;
    }
</style>
