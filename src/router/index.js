import { createRouter, createWebHistory } from 'vue-router'
import SubsOpt from '../components/SubsOpt.vue'
import CardsExamples from '../components/CardsExamples.vue'
import NewSubs from "../components/NewSubs.vue";
import RenovSubs from "../components/RenovSubs.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:'/',
      name:'home',
      component:CardsExamples
    },
    {
      path: '/subs',
      name: 'subs',
      component:SubsOpt
    },
    {
      path:'/new-sub',
      name:'newSub',
      component:NewSubs
    },
    {
      path:'/renov-sub',
      name:'renovSub',
      component:RenovSubs
    }
  ]
})

export default router
