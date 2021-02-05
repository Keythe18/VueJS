<template>
  <div class="home">
    <img alt="" src="../assets/Background.jpg" />
    <article>
      <h1>CV - Resume</h1>

      <h2>Download</h2>

      <router-link to="/cv">French Version</router-link>
      <router-link to="/cv">English Version</router-link>

      <h2>Programming</h2>

      <img class="logos" src="../assets/clogo.png" alt="" />
      <img class="logos" src="../assets/HTML5_Logo.svg" alt="" />
      <img class="logos" src="../assets/CSS3_Logo.svg" alt="" />
      <img class="logos" src="../assets/JS_Logo.svg" alt="" />

      <h2>Librairies & Framework</h2>

      <img class="logos" src="../assets/logo.png" alt="" />

      <h2>Versionning</h2>

      <img class="logos" src="../assets/git.png" alt="" />
    </article>
  </div>
</template>

<script>
export default {
  name: "",
  components: {},
};
</script>

<style scoped>
a {
  font-size: 20px;
  text-decoration: none;
  color: #d8d4cf;
  padding: 5px 10px 5px 10px;
  margin: 30px;
  border-color: #dddad6;
  border: 1px solid grey;
  border-radius: 4px;
}

img {
  width: 100%;
}

.logos {
  width: 100px;
  height: 100px;
  padding: 0 10px 0 10px;
}

h1 {
  font-size: 35px;
}

h2 {
  color: #d8d4cf;
  text-align: left;
  font-size: 25px;
  padding-bottom: 0.5em;
  margin-bottom: 1em;
  border-bottom: 1px solid grey;
}

article {
  padding: 0 700px 0 700px;
}
</style>
