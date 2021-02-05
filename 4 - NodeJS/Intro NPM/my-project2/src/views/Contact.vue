<template>
  <div class="home">
    <h1>Contact</h1>
    <form>
      <label for="a">Nom :</label>
      <input type="text" name="lastname" />
      <label for="a">Prenom :</label>
      <input type="text" name="name" />
      <label for="a">Mail :</label>
      <input type="text" name="mail" />
      <label for="a">Message :</label>
      <textarea id="mess" type="text" name="message" />
    </form>
  </div>
</template>

<script>
export default {
  name: "Contact",
};
</script>

<style scoped>
  form{
    background-color: #181a1b;
    margin: 0 820px 0 820px;
    padding: 10px;
    padding-bottom: 30px;
  }
  label{
    text-align: left;
    display: block;
    margin: 0.5em 0 0.5em 0;
    padding-left: 43px;
  }

  textarea{
    width: 170px;
  }

  #mess{
    height: 100px;
  }
</style>
