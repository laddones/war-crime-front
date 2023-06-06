<template>
    <section>
      <div class="container-fluid">
          <div class="row mt-3">
              <div class="col-lg-4 col-md-4 col-sm-1"></div>
              <div class="col-lg-4 col-md-4 col-sm-10">
                  <h3 class="text-center">{{ $t('registration.registration_title')}}</h3>
                  <form  @submit.prevent="handleSubmit" class="text-center">
                      <div class="mb-4">
                          <label for="login" class="form-label">{{ $t('registration.login')}}</label>
                          <input v-model="login"
                                 type="text"
                                 class="form-control text-center"
                                 id="login"
                                 :placeholder="$t('registration.login_placeholder')"
                                 required
                          >
                      </div>
                      <div class="mb-4">
                          <label for="password" class="form-label">{{ $t('registration.password')}}</label>
                          <input v-model="password"
                                 type="password"
                                 class="form-control text-center"
                                 id="password"
                                 :placeholder="$t('registration.password_placeholder')"
                                 minlength="8"
                                 required
                          >
                      </div>
                      <div class="mb-4">
                          <label for="confirm_password" class="form-label">{{ $t('registration.confirm_password')}}</label>
                          <input v-model="confirm_password"
                                 type="password"
                                 class="form-control text-center"
                                 id="confirm_password"
                                 :placeholder="$t('registration.confirm_password_placeholder')"
                                 minlength="8"
                                 required
                          >
                      </div>
                      <div class="mb-4">
                          <label for="email" class="form-label">{{ $t('registration.password')}}</label>
                          <input v-model="email"
                                 type="email"
                                 class="form-control text-center"
                                 id="email"
                                 :placeholder="$t('registration.email_placeholder')"
                                 required
                          >
                      </div>
                      <div class="row">
                          <div class="col-12">
                                <button type="submit" class="btn btn-md btn-primary w-100 mb-3" id="submit">{{ $t('registration.registration_button')}}</button>
                          </div>
                          <div class="col-12">
                                <router-link to="/login" class="btn btn-primary w-100 mb-3" role="button">{{ $t('login.login_title') }}</router-link>
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
import axios from "axios";
import {getTitleTranslation} from "@/i18n";

export default {
    name: "RegistrationView",
    data() {
      return {
          login: "",
          password: "",
          email: "",
          confirm_password: "",
      };
    },
    methods: {
      handleSubmit() {
          if (this.password !== this.confirm_password) {
            // Проверка совпадения паролей
            alert("Пароли не совпадают!");
            return;
          }

          if (this.password.length < 8) {
            // Проверка минимальной длины пароля
            alert("Минимальная длина пароля - 8 символов!");
            return;
          }
        // Выполните здесь отправку запроса по API, используя значения полей email и password
        // Можно использовать, например, axios или fetch для отправки запроса
        // Пример с использованием axios:
        axios.post("/api/v1/registration", {
          login: this.login,
          password: this.password,
          email: this.email,
        })
        .then(response => {
          // Обработайте ответ от сервера
        })
        .catch(error => {
          // Обработайте ошибку при отправке запроса
        });
      }
    },
    created() {
        document.title = getTitleTranslation('base.navbar.login');
    },
}
</script>

<style scoped>
  #submit{
      padding-left: 2rem;
      padding-right: 2rem;
  }
</style>