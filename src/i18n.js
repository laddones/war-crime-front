import { createI18n } from 'vue-i18n';

const i18n = createI18n({
  locale: 'ru', // язык по умолчанию
  messages: {

    // EN translator
    en: {
      base: {
        header_test: 'The site is in testing and filling mode',
        navbar: {
          home: 'Home',
          news: 'News',
          statistic: 'Statistic',
          search_people: 'Search',
          login: 'Log In',
         },
        footer: {
          about_us_title: 'INFORMATION ABOUT US',
          about_us_text: 'We are gathering facts about the losses of the russian army and other military formations, involved in the armed aggression of the russian federation against Ukraine.\n' +
              'Our goal is to collect the maximum number of them.',
          contacts: 'Contacts'
        }
      },
      home: {
        title: 'Потерь.НЕТ',
        counter: {
          text_1: 'We have already collected',
          text_2: 'facts about the losses of the russian army and other military formations involved in the armed aggression of the russian federation against Ukraine.',
          text_3: 'The information presented on the site is obtained from open sources.',
        },
        carousel: {
            text_1: 'New publications'
        },
        partners: {
          text_1: 'Our partners'
        },
        news: {
          text_1: 'Latest news'
        }
      },
      search: {
        form:{
          placeholder: 'Enter name and last name to search',
          title: 'Search',
        },
        titles:{
          title: 'New publications',
          title_filter: 'Filter',
        },
      },
      person: {
        birthday: 'Date of birth:',
        unit: 'Military base:',
      },
      news: {
        news_title: 'News',
        important_news: 'Important news',
        general_news: 'General news',
      },
      login: {
        login_title: 'Log in',
        login: 'Login:',
        password: 'Password:',
        login_placeholder: 'Enter your login',
        password_placeholder: 'Enter your password'
      },
      registration: {
        registration_title: '',
        login: '',
        login_placeholder: '',
        email: '',
        email_placeholder: '',
        password: '',
        confirm_password: '',
        password_placeholder: '',
        confirm_password_placeholder: '',

      },
    },


    // RU translator
    ru: {
      base: {
        header_test: 'Сайт в режиме тестировання и наполнения',
        navbar: {
          home: 'Главная',
          news: 'Новости',
          statistic: 'Статистика',
          search_people: 'Поиск',
          login: 'Вход',
        },
        footer: {
          about_us_title: 'ИНФОРМАЦИЯ О НАС',
          about_us_text: 'Мы собираем факты о потерях российской армии и других военных формирований, задействованных в вооруженной агрессии российской федерации против Украины.\n' +
              'Наша цель - собрать максимальное их количество.',
          contacts: 'Контакты'
        }
      },
      home: {
        title: 'Потерь.НЕТ',
        counter: {
          text_1: 'Нами уже собрано',
          text_2: 'фактов, о потерях российской армии и других военных формирований, задействованных в вооруженной агрессии российской федерации против Украины.',
          text_3: 'Информация, изложенная на сайте, получена из открытых источников.',
        },
        carousel: {
            text_1: 'Новые публикации                                     '
        },
        partners: {
          text_1: 'Наши Партнёры'
        },
        news: {
          text_1: 'Последние новости'
        },
      },
      search: {
        form:{
          placeholder: 'Введите Ф.И.О. для поиска',
          title: 'Поиск',
        },
        titles:{
          title: 'Новые публикации',
          title_filter: 'Фильтр',
        },
      },
      person: {
        birthday: 'Дата рождения:',
        unit: 'Воинская часть:',
      },
      news: {
        news_title: 'Новости',
        important_news: 'Важные события',
        general_news: 'Общие новости',
      },
      login: {
        login_title: 'Вход',
        login: 'Логин:',
        password: 'Пароль:',
        login_placeholder: 'Введите логин',
        password_placeholder: 'Введите пароль'
      },
      registration: {
        registration_title: '',
        login: '',
        login_placeholder: '',
        email: '',
        email_placeholder: '',
        password: '',
        confirm_password: '',
        password_placeholder: '',
        confirm_password_placeholder: '',
      },
    },


    // UK translator
    uk: {
      base: {
        header_test: 'Сайт в режимі тестування та наповнення',
        navbar: {
          home: 'Головна',
          news: 'Новини',
          statistic: 'Статистика',
          search_people: 'Пошук',
          login: 'Вхід',
       },
        footer: {
          about_us_title: 'Інформація про нас',
          about_us_text: 'Ми збираємо факти про втрати російської армії та інших військових формувань,\n' +
              '                   задіяних у збройній агресії російської федерації проти України.\n' +
              '                   Наша мета - зібрати максимальну їх кількість.',
          contacts: 'Контакти'
        }
      },
      home: {
        title: 'Потерь.НЕТ',
        counter: {
          text_1: 'Нами вже зібрано',
          text_2: 'фактів, про втрати російської армії та інших військових формувань, задіяних у збройній агресії російської федерації проти України.',
          text_3: 'Інформація, викладена на сайті, отримана з відкритих джерел.',
        },
        carousel: {
            text_1: 'Нові публікації'
        },
        partners: {
          text_1: 'Наші Партнери'
        },
        news: {
          text_1: 'Останні новини'
        },
      },
      search: {
        form:{
          placeholder: 'Введіть П.І.Б. для пошуку',
          title: 'Пошук',
        },
        titles:{
          title: 'Нові публікації',
          title_filter: 'Фільтр',
        },
      },
      person: {
        birthday: 'Дата народження:',
        unit: 'Військова частина:',
      },
      news: {
        news_title: 'Новини',
        important_news: 'Важливі події',
        general_news: 'Загальні новини',
      },
      login: {
        login_title: 'Вхід',
        login: 'Логін:',
        password: 'Пароль:',
        login_placeholder: 'Введіть логін',
        password_placeholder: 'Введіть пароль'
      },
      registration: {
        registration_title: '',
        login: '',
        login_placeholder: '',
        email: '',
        email_placeholder: '',
        password: '',
        confirm_password: '',
        password_placeholder: '',
        confirm_password_placeholder: '',
      },
    },
  },
});


export const getTitleTranslation = (key) => {
  console.log(i18n.global.t(key));
  return i18n.global.t(key);
};

export default i18n;