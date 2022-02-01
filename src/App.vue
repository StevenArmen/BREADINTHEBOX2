<template>
 

  <my-header />
  <div class = "container-fluid no-padding" style= " padding-top: 10px; padding-bottom: 5px" >
    <div  style= " padding-top: 90px; padding-bottom: 5px" >
       <router-view /> 
      </div>
  </div>
  
      <my-footer />

</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    "my-header": Header,
    "my-footer": Footer,
    
  },
  created() {
    this.$store.dispatch("getBreads");
    this.$store.dispatch("tryAutoLogin");
  },
};

</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>