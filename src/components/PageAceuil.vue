<template>
    <div>
        <div class="slide">
                <img src="../assets/PR1.png" alt="pr1" class="PR1">
                <img src="../assets/PR2.png" alt="pr2" class="pr2">
                <img src="../assets/PR3.png" alt="pr3" class="pr3">
                <img src="../assets/PR4.png" alt="pr4" class="pr4">
                <img src="../assets/Image.png" alt="pr5" class="pr5">
        </div>
        <div class="Acceuil-Div">
            <div class="Div-contenu">
                <img src="../assets/PR1.png" alt="phto" class="photo"/>
                <p>
                 Montant à payer Minimal<br>
                 est:<br> <Article></Article>
                {{ min }} Ar
                </p>
            </div>
            <div class="Div-contenu">
                <p>
                    Montant à payer total<br>
                     est:<br>
                    {{ sum }} Ar
                </p>
                <img src="../assets/Image.png" alt="phto" class="photo"/>
            </div>
            <div class="Div-contenu">
                <img src="../assets/PR2.png" alt="phto" class="photo"/>
                 <p>
                     Montant à payer Maximal<br>
                      est:<br>
                    {{ max }} Ar
                </p>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    name:'PageAceuil',
    data()
    {
        return{
            img1: null,
            img2: null,
            img3: null,
            img4: null,
            img5: null,
            count:0,
            image:[],
            time: 2000,
            sum: null,
            min: null,
            max:null

        }
    },
    mounted()
    {
          axios.get('http://localhost/BackVue/ModiSupp.php')
        .then((res)=>{
            const mont = res.data
            this.montant = mont
            this.min = mont[0],
            this.max = mont[2],
            this.sum = mont[1]
        })
        this.img1= document.querySelector('.PR1'),
        this.img2= document.querySelector('.pr2'),
        this.img3= document.querySelector('.pr3'),
        this.img4= document.querySelector('.pr4'),
        this.img5= document.querySelector('.pr5'),
        this.image = [this.img1, this.img2, this.img3, this.img4, this.img5]
       this.SlideAuto()
    },
    methods:
    {
       
        Slide()
        {
            const nb = this.image.length
            this.image[this.count].classList.remove('PR1')
            
            if(this.count < nb-1)
            {
                this.count++
            }
            else
            {
                this.count = 0
            }
            this.image[this.count].classList.add('PR1')
           
        },
        SlideAuto()
        {
            this.Slide()
            setTimeout(() => {
            this.SlideAuto();
        }, this.time);
        }
    }
    
}
</script>

<style lang="scss">
.slide{
    width: 80rem;
    height: 20rem;
    margin-left: 20rem;
}  
.slide img
{
     width: 100%;
     height: 100%;
    display: none;
}

.slide .PR1
{
    display: block; 
    animation: fade 0.8s;
}
@keyframes fade {
    from
    {
        opacity: 0;
    }
    to 
    {
        opacity: 1;
    }
}
.Acceuil-Div
{
    display: grid;
    grid-template-columns: repeat(3,1fr);
    margin-left:  220pt;
    margin-top: 5pt;
    gap: 10rem;
}
.Div-contenu p
{
    font-size: 20pt;
    text-align: center;
    color: #27C7D4;
    line-height: 40pt;
    margin-left: 20px;

}
.photo
{
    width: 180pt;
    height: auto;
    border: 6px solid  #137C8B;
    padding: 10px;
    border-radius: 40rem;
    margin-left: 30pt;
}
</style>