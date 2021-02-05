<template>

  <div id="app">

    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/mapage">Ma page</router-link> |
      <router-link to="/equipe">Equipe</router-link>
    </div>

      <router-view />

    <footer id="footerSite">
      Mon footer
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link> |
        <router-link to="/mapage">Ma page</router-link>
    </footer>

  </div>
</template>


<script>
export default {
  name:'App',

}
</script>

<style>

#footerSite{
  height:400px;
  background:black;
  color:white;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
