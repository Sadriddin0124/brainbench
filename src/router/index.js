import CodingView from '@/views/CodingView.vue'
import EnglishView from '@/views/EnglishView.vue'
import HomeView from '@/views/HomeView.vue'
import SectionsView from '@/views/SectionsView.vue'
import { createRouter, createWebHistory } from 'vue-router'
import JavascriptView from '@/views/Coding/JavascriptView.vue'
import IrregularView from '@/views/English/IrregularView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/sections',
      name: 'Sections',
      component: SectionsView,
    },
    {
      path: '/programming',
      name: 'Programming',
      component: CodingView,
    },
    {
      path: "/javascript",
      name: "Javascript",
      component: JavascriptView
    },
    {
      path: "/english",
      name: "English",
      component: EnglishView
    },
    {
      path: "/irregular",
      name: "Irregular",
      component: IrregularView
    },
  ]
})

export default router
