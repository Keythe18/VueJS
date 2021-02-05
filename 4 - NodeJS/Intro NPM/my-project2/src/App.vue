<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/cv">CV</router-link>
      <router-link to="/portfolio">Portfolio</router-link>
      <router-link to="/infos">Infos</router-link>
      <router-link to="/contact">Contact</router-link>
    </div>
    <router-view />

    <footer id="footerSite">
      <div id="foot">
        <a href="https://github.com/Keythe18">Github</a>
        <a href="https://github.com/Keythe18">Facebook</a>
        <a href="https://github.com/Keythe18">Gmail</a>
        <a href="https://github.com/Keythe18">Twitter</a>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
body {
  background-color: #131516;
  margin: 0px;
  padding: 0px;
}

#app {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #d8d4cf;
}

#nav {
  padding: 20px 20px 35px 20px;
  display: flex;
  justify-content: flex-end;
  font-size: 25px;
}

#nav a,
a:visited {
  text-decoration: none;
  color: #d8d4cf;
  padding: 0 15px 0 15px;
}

#nav a:hover {
}

#nav a.router-link-exact-active {
  color: #42b983;
}

#footerSite {
  height: 120px;
  background-color: black;
  text-align: center;
  margin-top: 30px;
}

#foot{
  float: left;
  padding: 45px 0 0 35px;
}

#foot a{
  font-size: 20px;
  padding: 10px;
  text-decoration: none;
}
</style>
