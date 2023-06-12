import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import SearchPersons from "@/views/SearchPersonsView.vue";
import NewsView from "@/views/NewsView.vue";
import StatisticView from "@/views/StatisticView.vue";
import LogInView from "@/views/LogInView.vue";
import RegistrationView from "@/views/RegistrationView.vue";
import i18n from '../i18n';
import { createI18n } from 'vue-i18n';
import PersonView from "@/views/PersonView.vue";
import store from '../store';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      titleKey: 'Потерь.НЕТ'
    }
  },
  {
    path: '/persons',
    name: 'search',
    component: SearchPersons,
    meta: {
      titleKey: 'base.navbar.search_people'
    }
  },
  {
    path: '/person/:id',
    name: 'person',
    component: PersonView,
    meta: {
        titleKey: 'base.navbar.person'
      }
  },
  {
    path: '/news',
    name: 'news',
    component: NewsView,
    meta: {
      titleKey: 'base.navbar.news'
    }
  },
  {
    path: '/statistic',
    name: 'statistic',
    component: StatisticView,
    meta: {
      titleKey: 'base.navbar.statistic',
    }
  },
  {
    path: '/login',
    name: 'login',
    component: LogInView,
    meta: {
      titleKey: 'base.navbar.login',
      requiresAuth: true,
      requiresAuthDisallow: true
    }
  },
  {
    path: '/registration',
    name: 'registration',
    component: RegistrationView,
    meta: {
      titleKey: 'base.navbar.registration'
    }
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});


const setupRouter = () => {

  router.beforeEach((to, from, next) => {

     const isLoggedIn = store.getters.isLoggedIn;
      console.log(isLoggedIn);
    // Проверка, требуется ли аутентификация для данного маршрута
    if (to.matched.some(record => record.meta.requiresAuth)) {
      // Проверяем, авторизован ли пользователь
      if (!isLoggedIn) {
        console.log('User not auth');
        if (to.matched.some(record => record.meta.requiresAuthDisallow)) {
          next();
        }
        else {
          next('/login');
        }
      } else {
        if (to.matched.some(record => record.meta.requiresAuthDisallow)) {
          // Если у маршрута указана meta.requiresAuthDisallow, запрещаем доступ авторизованным пользователям
          next('/'); // Можете перенаправить на другую страницу, если нужно
        } else {
          // Разрешаем доступ авторизованным пользователям
          next();
        }
      }
    } else {
      // Маршрут не требует аутентификации, продолжаем нормально
      next();
    }
  });

  router.afterEach((to) => {
    const pageTitleKey = to.meta.titleKey;
    if (pageTitleKey) {
      const pageTitle = getTitleTranslation(pageTitleKey);
      document.title = pageTitle;
    }
  });
};

setupRouter();

export default router;