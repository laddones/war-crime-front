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
                        <input v-model="login"
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
                              <button type="submit" class="btn btn-md btn-primary mb-3" id="submit">{{ $t('login.login_title')}}</button>
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
    name: "LogInView",
    data() {
      return {
        login: "",
        password: ""
      };
    },
    methods: {
      handleSubmit() {
        // Выполните здесь отправку запроса по API, используя значения полей email и password
        // Можно использовать, например, axios или fetch для отправки запроса
        // Пример с использованием axios:
        axios.post("/api/v1/login", {
          login: this.login,
          password: this.password
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