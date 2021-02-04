<template>
  <div>
    <h1 v-if="affichageEtat">{{ titre }}</h1>
  </div>
</template>

<script>
export default {
  name: "TitreBleu",
  props: {
    titre: String,
    affichageEtat: Boolean,
  },
};
</script>

<style scoped>
h1 {
  font-family: sans-serif;
  color: blue;
}
</style>
