<template>
   <div>
    <div class="entete">
         <p>Modification </p>
         <button @click="Valeur">Donnee</button>
    </div>
        <form class="Popup" >
             <div class="inModif">
                <input type="text" name="nomCLT"  placeholder=" " v-model="compte">
                <label for="nomCLT">N° Compte</label>
                <i class="mdi mdi-account-circle"></i>
            </div>
             <div class="inModif">
                <input type="text" name="nomCLT"  placeholder=" " v-model="client">
                <label for="nomCLT">Nom_Client</label>
                <i class="mdi mdi-account-circle"></i>
            </div>
              <div class="inModif">
                <input type="text" name="nomBank"  placeholder=" " v-model="bank">
                <label for="nomBank">Nom_Bank</label>
                 <i class="mdi mdi-bank"></i>
            </div>
              <div class="inModif">
                <input type="number" name="montant"  placeholder=" " v-model="monta">
                <label for="montant">Montant_Prêt</label>
                <i class="mdi mdi-cash-multiple"></i>
            </div>
              <div class="inModif">
                <input type="number" name="taux"  placeholder=" " v-model="taux">
                <label for="taux">Taux_Prêt(%)</label>
                <i class="mdi mdi-cash-100"></i>
            </div>
              <div class="dateModif">
                <input type="date" name="date" v-model="daty" >
                <label for="date">Date_Prêt</label>
            </div>
            <input type="Submit" name="submit" value="Modif"  class="Modif" @click="Modif"/>
        </form>
   </div>
</template>

<script>
import axios from 'axios'



export default {
    name:"PopupModif",
    props:{
        clf: Number,
        cle:String,
        CLT:String,
        bnk:String,
        mont: Number,
        dat:String,
        paye:Number
    },
   data(){
    return{
        id:null,
        compte:null,
        client:null,
        bank:null,
        monta:null,
        daty:null,
        payement:null,
        taux:null,
    }
   },
  mounted()
   {
   },
    methods:{
        Valeur()
        {
            this.id = this.clf
            this.compte= this.cle,
            this.client= this.CLT,
            this.bank = this.bnk,
            this.monta= this.mont,
            this.daty = this.dat,
            this.payement = this.paye
            this.taux = (this.payement-this.monta)*100/this.monta
            
        
        },
        Modif(e)
        {
            e.preventDefault()
            axios.put('http://localhost/BackVue/ModiSupp.php',{
            id:this.id,
            compte:this.compte,
            clt:this.client,
            bank:this.bank,
            montant:this.monta,
            date:this.daty,
            taux:this.taux})
            .then(res=>{
            alert(res.data)
            location.reload()
        })
            .catch(err=>console.log(err))
           
        },
        
    }
}
</script>

<style lang="scss">
.entete
{
    display: grid;
    grid-template-columns: repeat(2,1fr);
    height: 30px;
    margin-top: -20px;
}
.entete p 
{
    text-align: center;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    color:#679436;
    font-size: 30px;
  
}
.entete button
{
    color:white;
    background: #137C8B;
    width: 50%;
    height: 60%;
    padding: 10px 0;
    font-size: 20px;
    margin-left: 60pt;
    border: 2px solid white;
}
.entete button:active
{
    border: 2px solid #137C8B;
}
.Popup i{
    transform: translate(208pt,50px);
}
.inModif,.dateModif
{
     display: flex;
    flex-direction: column-reverse;
    place-content: center;
    margin: 1.4em 40pt;
}
.inModif label
{
    font-size: 20px;
    transform:  translate(15px,25px);
    transform-origin: left bottom;
    transition: all 0.3s;
}
.inModif input
{
    font-size: 18px;
    width: 18rem;
    border-radius: 5px;
    padding: 5px 10px;
    background: none;
    border: none; outline: none;
    border-bottom: 2px solid gray;
    color: #137C8B; 
}
.inModif input::placeholder
{
  opacity: 0;
}
.inModif input:focus, .inModif input:not(:placeholder-shown)
{
    border-bottom: 2px solid #04BBFF;
}
.inModif input:focus~label, .inModif input:not(:placeholder-shown)~ label
{
    color:#04BBFF;
    transform: translate(10px, -15px) scale(0.9)
}
.inModif input:focus~i, .inModif input:not(:placeholder-shown)~ i
{
    color:#04BBFF;
}
.dateModif input
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
.Modif{
      margin: 20px 100pt;
    font-size: 18px;
    width: 10rem;
     background: #137C8B;
     color: white;
     border:2px solid white;
     padding: 5px 0;
}
.Modif:active
{
    border:2px solid #137C8B ;
}

</style>