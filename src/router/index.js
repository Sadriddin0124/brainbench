import CodingView from '@/views/CodingView.vue'
import EnglishView from '@/views/EnglishView.vue'
import HomeView from '@/views/HomeView.vue'
import SectionsView from '@/views/SectionsView.vue'
import { createRouter, createWebHistory } from 'vue-router'
import JavascriptView from '@/views/Coding/JavascriptView.vue'
import IrregularView from '@/views/English/IrregularView.vue'
import PastTenseView from '@/views/English/PastTenseView.vue'
import PresentView from '@/views/English/PresentView.vue'
import FutureView from '@/views/English/FutureView.vue'
import ReactView from '@/views/Coding/ReactView.vue'
import NextView from '@/views/Coding/NextView.vue'
import VueView from '@/views/Coding/VueView.vue'

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
      path: "/react",
      name: "React",
      component: ReactView
    },
    {
      path: "/next",
      name: "Next",
      component: NextView
    },
    {
      path: "/vue",
      name: "Vue",
      component: VueView
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
    {
      path: "/past",
      name: "Past",
      component: PastTenseView
    },
    {
      path: "/present",
      name: "Present",
      component: PresentView
    },
    {
      path: "/future",
      name: "Future",
      component: FutureView
    },
  ]
})

export default router
