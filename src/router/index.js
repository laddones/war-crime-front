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
import data from '@/router/admin-router';
import Navbar from '@/components/UI/Navbar.vue';
import Footer from '@/components/UI/Footer.vue';



const routes_client = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      titleKey: 'Потерь.НЕТ',
      showNavbar: true
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
      titleKey: 'base.navbar.statistic'
    }
  },
  {
    path: '/login',
    name: 'login',
    component: LogInView,
    meta: {
      titleKey: 'base.navbar.login'
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
  {
    path: '/navbar',
    name: 'navbar',
    component: Navbar,
    meta: {
      titleKey: 'Navbar' // Заголовок футера, если нужно
    }
  },
  {
    path: '/footer',
    name: 'footer',
    component: Footer,
    meta: {
      titleKey: 'Footer' // Заголовок футера, если нужно
    }
  }
];


const routes = routes_client.concat(data);


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

router.afterEach((to) => {
  const pageTitleKey = to.meta.titleKey;
  if (pageTitleKey) {
    const pageTitle = getTitleTranslation(pageTitleKey);
    document.title = pageTitle;
  }
});

export default router;