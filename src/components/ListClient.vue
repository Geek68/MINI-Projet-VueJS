<template>
    <div id="Table">
        <div class="title">
            <p>Liste des Clients</p>
            <div class="icon">
            <i class="mdi mdi-cash-multiple"></i>
            <i class="mdi mdi-cash-multiple"></i>
            <i class="mdi mdi-cash-multiple"></i>
            <i class="mdi mdi-cash-multiple"></i>
            <i class="mdi mdi-cash-multiple"></i>
        </div>
        </div>
        <div class="list">
            <InfoClient class="pers" v-for="index in data" :key="index.idpret"
            :pre="index.idpret" 
            :id="index.compte" :client="index.client" 
            :bank="index.bank" :montant="index.montant" 
            :daty="index.date" :payer="index.payer"/> 
                  
        </div>
    </div> 
</template>
<script>
import axios from 'axios';
import InfoClient from '../components/InfoClient.vue'
export default {
    name:'ListClient',
    components:{
        InfoClient
    },
    data()
    {
        return{
            data: null
        }
    },
    created()
    {
        axios.get('http://localhost/BackVue/Ajout.php')
        .then((res)=>{
        const data = res.data;
        this.data = data;
        })
    },
    methods:
    {
        Recuperation(e)
        {
            alert(e)
        }
    }
}
</script>
<style lang="scss">
.title
{
    text-align: center;
    font-size: 40pt;
    margin-left: 20rem;
    margin-top: -40px;
    color: #137C8B;
}
.icon
{
    font-size: 20pt;
     margin-top: -60px;
}
.list
{
    display: grid;
    grid-template-columns: repeat(4,1fr);
    max-width: 100%;
    margin-left: 20rem;
    margin-top: 20pt;
    
}
.pers
{
    margin: 20px 50px;
}
</style>