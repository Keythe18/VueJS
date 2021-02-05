<template>
  <div>
        <h1>Personne ID : {{ $route.params.idpersonne }}</h1> 
        <h2>{{personne.prenom}} {{personne.nom}}</h2>
    
  </div>
</template>

<script>
// @ is an alias to /src


export default {
  name: "Personne",
  components: {
  
  },
  data(){
      return {
          personne:null
      }
  },
  props:{
      personnes: Array
  },
  created(){


      this.personne = this.personnes.find(x => x.id === Number(this.$route.params.idpersonne))

    // var result = this.personnes.filter(obj => {
    //     return obj.id === Number(this.$route.params.idpersonne)
    // })

    // console.log(result)
  }
};
</script>
