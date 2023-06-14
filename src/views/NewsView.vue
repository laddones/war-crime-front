<template>
    <section>
      <div class="text-center mb-4 pb-2 mt-4">
          <div class="container-fluid">
              <div class="row">
                  <div class="col-xl-3 col-lg-4 col-md-3 col-sm-2"></div>
                  <div class="col shadow" id="main_label_carousel">
                      <h1 class="text-dark">
                          {{ $t('news.news_title') }}
                      </h1>
                  </div>
                  <div class="col-xl-3 col-lg-4 col-md-3 col-sm-2"></div>
              </div>
          </div>
      </div>
      <div class="container-fluid">
          <div class="row flex-column-reverse flex-lg-row">
              <div class="col-lg-6 col-md-12 col-sm-12">
                  <div class="row mb-4">
                      <div class="col-xl-3 col-lg-4 col-md-3 col-sm-2"></div>
                      <div class="col shadow">
                          <h1 class="text-dark text-center">
                              {{ $t('news.general_news') }}
                          </h1>
                      </div>
                      <div class="col-xl-3 col-lg-4 col-md-3 col-sm-2"></div>
                  </div>
                  <NewsItemsRss items_counter="50"/>
              </div>
              <div class="col-lg-6 col-md-12 col-sm-12">
                  <div class="row mb-4">
                        <div class="col-xl-3 col-lg-4 col-md-3 col-sm-2"></div>
                        <div class="col shadow" id="main_label_carousel">
                            <h1 class="text-dark text-center">
                                {{ $t('news.important_news') }}
                            </h1>
                        </div>
                        <div class="col-xl-3 col-lg-4 col-md-3 col-sm-2"></div>
                    </div>
                  <NewsItems :news="news"/>
              </div>
          </div>
      </div>
    </section>
</template>

<script>
import NewsItemsRss from "@/components/UI/NewsItemsRss.vue";
import NewsItems from "@/components/UI/NewsItems.vue";
import {getTitleTranslation} from "@/i18n";
import axios from "axios";

export default {
    name: "NewsView.vue",
    components: {NewsItems, NewsItemsRss},
    data(){
        return{
            news: [],
        }
    },
    created() {
      document.title = getTitleTranslation('base.navbar.news');
      this.getNewsItems();
    },
    methods:{
        getNewsItems(){
            axios.get("http://127.0.0.1:8000/api/v1/important_news/")
            .then(response => {
                this.news = response.data;
                console.log(this.news);
            })
            .catch(error => {
              console.log(error);
            });
        },
    }
}
</script>

<style scoped>

</style>