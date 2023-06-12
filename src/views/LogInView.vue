<template>
    <section>
      <div class="container-fluid">
          <div class="row mt-3">
              <div class="col-lg-4 col-md-4 col-sm-1"></div>
              <div class="col-lg-4 col-md-4 col-sm-10">
                  <h3 class="text-center">{{ $t('login.login_title')}}</h3>
                  <form  @submit.prevent="handleSubmit" class="text-center">
                      <div class="mb-4">
                        <label for="login" class="form-label">{{ $t('login.login')}}</label>
                        <input v-model="username"
                               type="text"
                               class="form-control text-center"
                               id="login"
                               :placeholder="$t('login.login_placeholder')"
                               required
                        >
                      </div>
                      <div class="mb-4">
                        <label for="password" class="form-label">{{ $t('login.password')}}</label>
                        <input v-model="password"
                               type="password"
                               class="form-control text-center"
                               id="password"
                               :placeholder="$t('login.password_placeholder')"
                               required
                        >
                      </div>
                      <div class="row">
                          <div class="col-12">
                              <button type="submit" class="btn btn-md btn-primary w-100 mb-3" id="submit">{{ $t('login.login_title')}}</button>
                          </div>
                          <div class="col-12">
                                <router-link to="/registration" class="btn btn-primary w-100 mb-3" role="button">{{ $t('registration.registration_button') }}</router-link>
                          </div>
                      </div>
                  </form>
              </div>
              <div class="col-lg-4 col-md-4 col-sm-1"></div>
          </div>
      </div>
    </section>
</template>

<script>
import { ref, computed  } from 'vue';
import { useStore   } from 'vuex';
import {getTitleTranslation} from "@/i18n";
import { useRouter } from 'vue-router';
export default {
    setup() {
      const store = useStore();
      const router = useRouter();
      const username = ref('');
      const password = ref('');

      const handleSubmit = () => {
        // Используйте Vuex для выполнения авторизации
        store.dispatch('login', {
          username: username.value,
          password: password.value,
        }).then(() => {
        // Перенаправление на домашнюю страницу после успешной авторизации
        router.push({name: 'home', });
        });
      };

      const handleLogout = () => {
        // Используйте Vuex для выполнения выхода из системы
        store.dispatch('logout');
      };

      return {
        username,
        password,
        handleSubmit,
        handleLogout,
        isLoggedIn: computed(() => store.state.isLoggedIn),
      };
    },
    created() {
        document.title = getTitleTranslation('base.navbar.statistic');
    },
};

</script>

<style scoped>
  #submit{
      padding-left: 2rem;
      padding-right: 2rem;
  }
</style>