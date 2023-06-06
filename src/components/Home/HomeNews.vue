<template>
  <section>
    <div class="container-fluid">
      <div class="row">
          <div class="container-fluid">
            <div class="text-center mb-4 pb-2">
              <div class="container-fluid">
                <div class="row">
                  <div class="col-xl-3 col-lg-4 col-md-3 col-sm-2"></div>
                  <div class="col shadow">
                    <h1 class="text-dark">{{ $t('home.news.text_1')}}</h1>
                  </div>
                  <div class="col-xl-3 col-lg-4 col-md-3 col-sm-2"></div>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-6 col-md-12 col-12">
                <NewsItems items_counter="4"/>
            </div>
            <div class="col-lg-6 col-md-12 news-image">
              <img :src="news.image" class="news-img mx-auto d-block" alt="">
            </div>
          </div>
      </div>
    </div>
  </section>
</template>

<script>
import NewsItems from "@/components/UI/NewsItemsRss.vue";
export default {
    name: "HomeNews",
    components: {NewsItems},
    data() {
        return {
            news: {
                image: 'https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Ym9va3xlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80'
            },
        }
    },
}
</script>

<style scoped>
    .news-img{
        width: 80%;
        height: 917px;
    }
    .news-image{
        margin-left: auto;
        margin-right: auto;
    }
</style>