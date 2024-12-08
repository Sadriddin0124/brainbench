import CodingView from '@/views/CodingView.vue'
import EnglishView from '@/views/EnglishView.vue'
import HomeView from '@/views/HomeView.vue'
import SectionsView from '@/views/SectionsView.vue'
import { createRouter, createWebHistory } from 'vue-router'
import RussianView from '@/views/RussianView.vue'
import QuizView from '@/views/English/QuizView.vue'

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
      path: "/english",
      name: "English",
      component: EnglishView
    },
    {
      path: "/quiz",
      name: "Quiz",
      component: QuizView
    },
    {
      path: "/russian",
      name: "Russian",
      component: RussianView
    },
  ]
})

export default router
