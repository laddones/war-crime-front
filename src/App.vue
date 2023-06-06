<template>
  <nav class="navbar navbar-expand-lg navbar-light sticky-top shadow" id="main_navbar">
    <div class="container-fluid" style="margin-top: 15px;">
      <a class="navbar-brand" href="#" id="brand_label">
          <img src="@/assets/images/logo/Icon-removebg-preview.png" alt="Logo">
          <span>Потерь.НЕТ</span>
      </a>
      <div>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon" style="height: 40px; width: 40px; "></span> <!-- 3 start style="height: 40px; width: 40px; " -->
        </button>
      </div>
      <div class="header_test-fill-mode" style="">
          <span class="header_test-fill-mode-span">{{ $t('base.header_test') }}</span>
      </div>
      <div class="collapse navbar-collapse" id="navbarToggler">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0 text-center" id="navbar_text">
          <li class="nav-item">
            <router-link to="/" class="nav-link active" aria-current="page">{{ $t('base.navbar.home') }}</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/persons" class="nav-link active" aria-current="page">{{ $t('base.navbar.search_people') }}</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/news" class="nav-link active" aria-current="page">{{ $t('base.navbar.news') }}</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/statistic" class="nav-link active" aria-current="page">{{ $t('base.navbar.statistic') }}</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/login" class="nav-link active" aria-current="page">{{ $t('base.navbar.login') }}</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/registration" class="nav-link active" aria-current="page">{{ $t('base.navbar.registration') }}</router-link>
          </li>
            <div class="language-selector">
              <button v-for="language in supportedLanguages" :key="language" @click="changeLanguage(language)">
                {{ language }}
              </button>
            </div>
        </ul>
      </div>
    </div>
  </nav>
  <router-view/>
  <section>
        <footer id="footer" class="text-white text-center text-lg-start">
        <!-- Grid container -->
        <div class="container-fluid p-4">
          <!--Grid row-->
          <div class="row justify-content-center mb-3">
            {{ $t('base.header_test') }}
          </div>
          <div class="row justify-content-center">
            <!--Grid column-->
            <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
                <h2>
                    <img src="@/assets/images/logo/Icon-removebg-preview.png" class="d-inline-block">
                    <span style="color: white; font-family: 'Roboto Slab', serif;">Потерь.НЕТ</span>
                </h2>
            </div>
            <!--Grid column-->

            <!--Grid column-->
            <div class="col-lg-6 col-md-12 mb-4 mb-md-0 text-center">
              <h5 class="text-uppercase text-white">{{ $t('base.footer.about_us_title') }}</h5>
               <p>
                   {{ $t('base.footer.about_us_text') }}
               </p>
            </div>
            <!--Grid column-->

            <!--Grid column-->
            <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5 class="text-white text-center">{{ $t('base.footer.contacts') }}</h5>
                <div class="container">
                        <a href="https://t.me/poter_nety_bot" target="_blank" style="color: #ffffff; text-decoration: none; ">
                            <i class="fa-brands fa-telegram fa-xl" style="color: #ffffff;"></i> Telegram Bot (@poter_nety_bot)
                        </a>
                    <hr>
                        <a href="https://t.me/PoterNetChannel" target="_blank" style="color: #ffffff; text-decoration: none;">
                            <i class="fa-brands fa-telegram fa-xl" style="color: #ffffff;"></i> Telegram Channel
                        </a>
                    <hr>
                        <a href="https://twitter.com/PoterNet_site" target="_blank" style="color: #ffffff; text-decoration: none;">
                            <i class="fa-brands fa-twitter fa-xl" style="color: #ffffff;"></i> Twitter
                        </a>
                    <hr>

                    <p class="text-white font-weight-bold">
                        <i class="fa-regular fa-envelope fa-xl" style="color: #ffffff;"></i> Nodeadnoloss@gmail.com
                    </p>
                </div>
            </div>
            <!--Grid column-->
          </div>
          <!--Grid row-->
        </div>
        <!-- Grid container -->
        <!-- Copyright -->
        <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2);">
          Потерь.НЕТ © 2023
        </div>
        <!-- Copyright -->
      </footer>
  </section>
</template>

<style>


  .header_test-fill-mode {
      position: absolute;
      background-color: lightgray;
      padding: 0 5px;
      top: 5px;
      left: 50%;
      width: 320px;
      margin-left: -160px;
      text-align: center;
      z-index: 2;
  }
  .header_test-fill-mode-span {
      display: block;
      font-weight: 500;
      color: black;
      font-size: 15px;
      line-height: normal;
      padding: 2px 0;
  }

  #main_navbar {
    background-color: white;
  }

  #brand_label {
      @import url('https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@700&display=swap');
      font-family: 'Roboto Slab', serif;
      color: black;
      font-size: 2rem;
  }

  #navbar_text {
      @import url('https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@700&display=swap');
      font-family: 'Roboto Slab', serif;
      color: black;
      font-size: 1.2rem;
  }
  #navbar_text :hover{
      background-color: #0dcaf0;
      border-radius: 10px;
        -webkit-transition: all 0.1s ease;
        -moz-transition: all 0.1s ease;
        -o-transition: all 0.1s ease;
        transition: all 0.1s ease;
      font-size: 1.4rem;
  }
  #footer{
      background-color: #383285;
      flex-shrink: 0;
      width: 100%;
  }
</style>

<script>
export default {
  data() {
    return {
      supportedLanguages: ['en', 'ru', 'uk'], // список поддерживаемых языков
    };
  },
  methods: {
    changeLanguage(language) {
      this.$i18n.locale = language; // изменяем текущий язык
    },
  },
};
</script>