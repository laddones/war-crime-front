import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import SearchPersons from "@/views/SearchPersonsView.vue";
import NewsView from "@/views/NewsView.vue";
import StatisticView from "@/views/StatisticView.vue";
import LogIn from "@/views/LogInView.vue";

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/persons',
    name: 'search',
    component: SearchPersons
  },
  {
    path: '/news',
    name: 'news',
    component: NewsView
  },
  {
    path: '/statistic',
    name: 'statistic',
    component: StatisticView
  },
  {
    path: '/login',
    name: 'login',
    component: LogIn
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
