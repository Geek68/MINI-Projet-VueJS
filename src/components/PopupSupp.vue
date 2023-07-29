<template>
    <div class="Suppression">
        <p>Voulez-vous supprumez<br> 
        ce client: </p>
        <div class="Supp-icon">
            <i class="mdi mdi-check-all" @click="Supp"> OUI</i>
            <i class="mdi mdi-close" @click="close">NON</i>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default 
{
    name:"PopupSupp",
    props:{
        supp:String,
        cle:Number,
    },
    data()
    {
        return{
            compte:null,
            id:null,
        }
    },
    mounted()
    {
       
    },
    methods:
    {
        Supp()
        {

           this.id = this.cle
            axios.post('http://localhost/BackVue/ModiSupp.php',{key:this.id})
            .then(res=>{
            alert(res.data)
            location.reload()
        })
            .catch(err=>console.log(err))
            
        },
        close()
        {
            this.$emit('clos',{Pop:false})
        }
    }
}
</script>
<style lang="scss">
.Suppression p
{
    text-align: center;
    color: #137C8B;
    font-size: 20px;
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
}
.Supp-icon
{
    text-align: center;
    display: flex;
    margin-left: 20px;
}
.Supp-icon i
{
    font-size: 19px;
    margin: 5px 10px;
    cursor: pointer;
}
.mdi-check-all
{
    color:#679436;
}
.mdi-close
{
    color:#D42633;
}
</style>