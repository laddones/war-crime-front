import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import SearchPersonsView from "@/views/SearchPersonsView.vue";
import NewsView from "@/views/NewsView.vue";
import StatisticView from "@/views/StatisticView.vue";
import LogInView from "@/views/LogInView.vue";
import RegistrationView from "@/views/RegistrationView.vue";
import PersonView from "@/views/PersonView.vue";

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/persons',
    name: 'search',
    component: SearchPersonsView
  },
  {
    path: '/person/:id',
    name: 'person',
    component: PersonView
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
    component: LogInView
  },
  {
    path: '/registration',
    name: 'registration',
    component: RegistrationView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
