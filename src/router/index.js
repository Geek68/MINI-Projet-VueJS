import Vue from 'vue'
import VueRouter from 'vue-router'
import formulaireCLT from '../components/FormulaireCLT.vue'
import ListClient from '../components/ListClient.vue'
import PageAceuil from '../components/PageAceuil.vue'
Vue.use(VueRouter)

const routes = [
  {
    path:'/list',
     name: 'ListClient',
    component: ListClient
  },
  {
    path:'/form',
    name:'formulaireCLT',
    component: formulaireCLT,
  },
  {
    path:'/',
    name: 'PageAceuil',
    component: PageAceuil
  }
]

const router = new VueRouter({
  routes
})

export default router
