<template>
  <div id="app">
      <div class="Menu">
        <div class="Bank">
          <i class="mdi mdi-bank"></i>
          <p>Prêt Bancaire</p>
        </div>
        <nav class="nav">
          <button @click="Coleur1" class="btn1">
            <router-link to="/"  class="lien1">
              <i class="mdi mdi-bank"></i>
            ACCEUIL
          </router-link></button>
          <button @click="Coleur2"  class="btn2" >
            <router-link to="/form" class="lien2">
            <i class="mdi mdi-newspaper"></i>
            FORMULAIRE
          </router-link>
          </button>
          <button @click="Coleur3" class="btn3">
            <router-link to="/list" class="lien3" >
            <i class="mdi mdi-format-list-bulleted-type"></i>
            LISTE</router-link>
          </button>
        </nav>
        </div>
      <div class="contenu">
        <router-view></router-view>
      </div>
  </div>
</template>

<style lang="scss">
.contenu {
    display: flex;
    place-content: center;
  

}
.Menu
{
  max-width: 20rem;
  height: 100vh;
  display: grid;
  position: fixed;
  top:0;
  left: 0;
  color:#FFFFFF;
  background: #27C7D4;

}
.Bank
{
  text-align: center;
  font-size: 30px;
  margin-top: 40px;
}
.nav
{
 display: flex;
 flex-direction: column;
 margin-top: -60px;

}
.nav button
{
  margin: 40px 0;
  background: #27C7D4;
  min-width: 100%;
  border: none;
  border-top-left-radius: 50px;
  border-bottom-left-radius: 50px;
}
.nav a{
  text-decoration: none;
  font-size: 28px;
  font-family: 'Times New Roman', Times, serif;
  z-index: 5;
  color: #FFFFFF;
  max-width: 100%;
  position: relative;
  padding: 10px;
 
}

// .nav a::before
// {
//   z-index: -1;
//   Content:" ";
//   position: absolute;
//   top:0;
//   right: 0px;
//   background-color: #FDF0E7;
//   height: 100%;
//   width:2%;
//   transition: 0.5s;
// }
// .nav a:hover::before
// {
//   height: 100%;
//   width: 100%;

// }
</style>
<script>
 export default {
    data() {
        return {};
    },
    mounted() {
        this.bt1 = document.querySelector(".btn1");
        this.ln1 = document.querySelector(".lien1");
        this.bt2 = document.querySelector(".btn2");
        this.ln2 = document.querySelector(".lien2");
        this.bt3 = document.querySelector(".btn3");
        this.ln3 = document.querySelector(".lien3");
    },
    methods: {
        Coleur1() {
            this.ln1.style.color = "#27C7D4";
            this.bt1.style.background = "white";
            this.bt1.style.transition = "1s";
            this.ln2.style.color = "#FFFFFF";
            this.bt2.style.background = "#27C7D4";
            this.ln2.style.color = "#FFFFFF";
            this.bt3.style.background = "#27C7D4";
        },
        Coleur2() {
            this.ln2.style.color = "#27C7D4";
            this.bt2.style.background = "white";
            this.bt2.style.transition = "1s";
            this.ln3.style.color = "#FFFFFF";
            this.bt3.style.background = "#27C7D4";
            this.ln1.style.color = "#FFFFFF";
            this.bt1.style.background = "#27C7D4";
        },
        Coleur3() {
            this.ln3.style.color = "#27C7D4";
            this.bt3.style.background = "white";
            this.bt3.style.transition = "1s";
            this.ln2.style.color = "#FFFFFF";
            this.bt2.style.background = "#27C7D4";
            this.ln1.style.color = "#FFFFFF";
            this.bt1.style.background = "#27C7D4";
        }
    },
}
</script>
