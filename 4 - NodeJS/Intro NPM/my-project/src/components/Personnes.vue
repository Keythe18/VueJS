<template>
  <div v-if="majeur">
    <h1>{{ prenom }} {{ nom }}</h1>
    <p>{{ age }} Ans</p>
  </div>
</template>

<script>
export default {
  name: "Personnes",
  props: {
    id: Number,
    nom: String,
    prenom: String,
    age: Number,
    majeur: Boolean,
  },
};
</script>

<style scoped>
h1 {
  font-family: sans-serif;
  color: blue;
}
p {
  font-family: sans-serif;
  color: grey;
}
div {
  font-family: sans-serif;
  border: 2px solid gray;
  width: 35%;
  margin: 5px 5px;
  border-radius: 5px;
  float: left;
  text-align: center;
}
</style>
