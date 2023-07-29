<template>
    <div class="form">
        <p>FORMULAIRE</p>
        <form class="Formulaire" @submit="Envoie">
            <p>Pour faire un Prêt, Veuillez à remplir le formulaire</p>
            <div class="in">
                <input type="text" name="nomCLT"  placeholder=" " v-model="compte">
                <label for="nomCLT">N° Compte</label>
                <i class="mdi mdi-account-circle"></i>
            </div>
              <div class="in">
                <input type="text" name="nomCLT"  placeholder=" " v-model="nomCLT">
                <label for="nomCLT">Nom_Client</label>
                <i class="mdi mdi-account-circle"></i>
            </div>
              <div class="in">
                <input type="text" name="nomBank"  placeholder=" " v-model="nomBank">
                <label for="nomBank">Nom_Bank</label>
                 <i class="mdi mdi-bank"></i>
            </div>
              <div class="in">
                <input type="number" name="montant"  placeholder=" " v-model="montant">
                <label for="montant">Montant_Prêt</label>
                <i class="mdi mdi-cash-multiple"></i>
            </div>
              <div class="in">
                <input type="number" name="taux"  placeholder=" " v-model="taux">
                <label for="taux">Taux_Prêt(%)</label>
                <i class="mdi mdi-cash-100"></i>
            </div>
              <div class="date">
                <input type="date" name="date" v-model="datePret" >
                <label for="date">Date_Prêt</label>
            </div>
            <input type="Submit" name="submit" value="Preter"  class="valider"/>
        </form>
    </div>
</template>
<script>
import axios from "axios"
export default {
    name:'formulaireCLT',
    data()
    {
       return{
        compte: '',
         nomCLT:'',
        nomBank:'',
        montant: null,
        taux: null,
        datePret:'',
       }
    },
    methods:{
        Envoie(e)
        {
            e.preventDefault()
           axios.post('http://localhost/BackVue/Ajout.php',
           {compte:this.compte,nomCLT: this.nomCLT,nomBank:this.nomBank,montant:this.montant,taux:this.taux,datePret:this.datePret})
           .then((res)=>{
            alert(res.data)
            location.reload()
        })
           .catch(err=>console.log(err))
          
        }
    }
}
</script>
<style lang="scss">
.form
{
background-image: url('../assets/Image.png');
background-size: contain;
background-repeat: no-repeat;

background-position:  40% 0%;
width: 100%;
height: 100vh;
}
.Formulaire
{
    position: absolute;
    width: 25rem;
    right: 200px;
    margin-top: -30px;
    background: rgb(255, 255, 255,0.9);
    box-shadow: 1px 1px 30px #137C8B;
    padding: 5px 30px;
    border-radius: 20px;
    
}
.Formulaire p
{
    text-align: center;
    font-size: 30px;
    font-family: 'Times New Roman', Times, serif;
    color: linear-gradient(top,left,#04BBFF,#137C8B)
}
.Formulaire i
{
    transform: translate(208pt,50px);
}
.in,.date
{
    display: flex;
    flex-direction: column-reverse;
    place-content: center;
    margin: 1.5em 40pt;

}
.in label
{
    font-size: 20px;
    transform:  translate(15px,25px);
     transform-origin: left bottom;
    transition: all 0.3s;
}
.in input{
    font-size: 18px;
    width: 18rem;
    border-radius: 5px;
    padding: 5px 10px;
    background: none;
    border: none; outline: none;
    border-bottom: 2px solid gray;
    color: #137C8B;
}
.in input::placeholder
{
  opacity: 0;
}
.in input:focus, .in input:not(:placeholder-shown)
{
    border-bottom: 2px solid #04BBFF;
}
.in input:focus~label, .in input:not(:placeholder-shown)~ label
{
    color:#04BBFF;
    transform: translate(10px, -15px) scale(0.9)
}
.in input:focus~i, .in input:not(:placeholder-shown)~ i
{
    color:#04BBFF;
}
.date input
{
    font-size: 18px;
    width: 18rem;
    border-radius: 5px;
    padding: 5px 10px;
    border: none; outline: none;
    border-bottom: 2px solid gray;
    background: none;
    color: #137C8B;
}
.valider
{
     margin: 20px 100pt;
    font-size: 18px;
    width: 10rem;
     background: #137C8B;
     color: white;
     border:2px solid white;
     padding: 5px 0;
}
.valider:active
{
    border:2px solid #137C8B ;
}
</style>