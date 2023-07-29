<template>
    <div class="containt">
        <div class="tete">
            <p class="compte">{{ id }}</p>
            <i class="mdi mdi-pencil" @click="Affiche"></i>
        </div>
       <div class="nom">
             <img src="../assets/Avatar (2).png" alt="avatar"/>
             <p>{{ client }}</p>
       </div>
       <div class="info">
         <p>
            <i class="mdi mdi-bank"></i>
             Bank: {{ bank }}
         </p>
          <p>
            <i class="mdi mdi-cash-100"></i>
            montant: {{ montant }} Ar
         </p>
          <p>
            <i class="mdi mdi-calendar-blank"></i>
           Date: {{ daty }}
         </p>
          <p>
            <i class="mdi mdi-cash-multiple"></i>
            à Payer: {{ payer }} Ar
         </p>
       </div>
       <i class="mdi mdi-delete-forever" @click="Supp"></i>
    <PopupModif v-show="showPop" @fermeture="fermer"
    :clf="prt"
    :cle="compte" :CLT="nomCLT" :bnk="nomBank" :mont="pret"
    :dat="datePret" :paye="payement" />
    <PopupSupp  v-show="ShowSupp" :supp="compte" :cle="prt" @clos="close"/>
    </div>
</template>
<script>
import PopupModif from './PopupModif.vue'
import PopupSupp from './PopupSupp.vue'
export default {
    name:'InfoClient',
    props:{
        pre:Number,
        id:String,
        client: String,
        bank: String,
        montant:Number,
        daty:String,
        payer:Number,

    },
    data(){
       return{
        prt: null,
         showPop:false,
         ShowSupp: false,
         compte: null,
         nomCLT:'',
         nomBank:'',
         pret: null,
         datePret: '',
         payement: null,
       }
    },
    mounted()
    {       this.prt = this.pre
           this.compte = this.id,
            this.nomCLT = this.client,
            this.nomBank = this.bank,
            this.pret = this.montant,
            this.datePret = this.daty,
            this.payement = this.payer
    },
    methods:{
        Affiche()
        {
            this.showPop =  true
           
        },
        fermer(payload)
        {
            this.showPop = payload.Pop
        },
        Supp()
        {
            this.ShowSupp = true
        },
        close(payload)
        {
            this.ShowSupp = payload.Pop
        }

    },
    components:
    {
        PopupModif,
        PopupSupp
    }
}
</script>
<style lang="scss">
.containt
{
    display: flex;

    flex-direction: column;
    box-shadow: 0px 0px 20px #137C8B;
    padding: 10px 20px;
    position: relative;
    border-top-right-radius: 20px;
    border-bottom-left-radius: 20px;
}
.tete
{
    display: grid;
    grid-template-columns: repeat(2,1fr);
}
.compte
{
    position: absolute;
    top:0;
    left: 0;
    font-size: 18px;
    border-bottom-right-radius: 30%;
    margin-top: 0px;
    padding: 5px 2px;
    color:#FFFFFF;
    background: #27C7D4;
}
.mdi-pencil
{
    position: absolute;
    top: 0.5;
    right: 10px;
    color: #679436;
    font-size: 20px;
    cursor: pointer;
}
.nom
{
    text-align: center;
    margin-top: 30px;
    font-size: 30px;
    color: #27C7D4;
   
}
.info
{
    font-size: 20px;
    margin-left: -10px;
}
.info p
{
    color: #137C8B;
}
.info i
{
   
     color:#27C7D4;
}
.mdi-delete-forever
{
    position: absolute;
    top: 40px;
    right: 10px;
    color: #D42633;
    font-size: 20px; 
    cursor: pointer;
}
</style>