<template>
  <section>
      <div class="container-fluid">
          <div class="text-center m-4 pb-2">
              <div class="container-fluid">
                  <div class="row">
                      <div class="col-xl-3 col-lg-4 col-md-3 col-sm-2"></div>
                      <div class="col shadow" id="main_label_carousel">
                          <h1 class="text-dark">
                              {{ person.last_name }} {{ person.first_name }} {{ person.middle_name }}
                          </h1>
                      </div>
                      <div class="col-xl-3 col-lg-4 col-md-3 col-sm-2"></div>
                  </div>
             </div>
          </div>
          <ul class="nav nav-tabs" id="myTab" role="tablist">
              <li class="nav-item" role="presentation">
                    <button class="nav-link active resp" id="home-tab" data-bs-toggle="tab" data-bs-target="#person" type="button" role="tab" aria-controls="person" aria-selected="true" style="font-size: 3vmin;">Загальна інформація</button>
              </li>
              <li class="nav-item" role="presentation">
                    <button class="nav-link resp" id="millitary-tab" data-bs-toggle="tab" data-bs-target="#millitary" type="button" role="tab" aria-controls="millitary" aria-selected="false" style="font-size: 3vmin;">Служба</button>
              </li>
              <li class="nav-item" role="presentation">
                    <button class="nav-link resp" id="contact-tab" data-bs-toggle="tab" data-bs-target="#inf" type="button" role="tab" aria-controls="inf" aria-selected="false" style="font-size: 3vmin;">Джерела</button>
              </li>
          </ul>
          <div class="tab-content" id="myTabContent">
<!--              {#  Загальна інформація  #}-->
              <div class="tab-pane fade show active" id="person" role="tabpanel" aria-labelledby="person_label">
                  <div class="container-fluid">
                      <div class="row">
                          <div class="col-lg-4 col-sm-12 mb-2">
                              <img :src="person.images[0].image"
                                   class="rounded mx-auto d-block img-fluid" alt="..." >
                          </div>
                          <div class="col-lg-8 col-sm-12">
                              <div class="card overflow-hidden mb-4">
                                  <h5 class="card-header">Інформація</h5>
                                  <div class="card-body ps" id="vertical-example-1">
                                      <div class="card-body p-0">
                                          <ul class="list-group list-group-flush">
                                              <li class="list-group-item">
                                                  Дата народження: {{person.birthday}}
                                              </li>
                                              <li class="list-group-item">
                                                  Дата народження: {{person.birthday_day}}
                                              </li>
                                              <li class="list-group-item">
                                                  Громадянство: {{person.citizenship}}
                                              </li>
                                              <li class="list-group-item">
                                                  Паспорт: {{person.passport}}
                                              </li>
                                              <li class="list-group-item">
                                                  Індитифікаційний код: {{person.individual_identification_number}}
                                              </li>
                                              <li class="list-group-item">
                                                  Місце народження: {{person.place_of_birthday}}
                                              </li>
                                              <li class="list-group-item">
                                                  Місце проживання: {{person.place_of_living}}
                                              </li>
                                              <li class="list-group-item">
                                                  Місце загибелі: {{person.place_where_accident}}
                                              </li>
                                              <li class="list-group-item">
                                                  Дата загибелі: {{person.data_when_accident}}
                                              </li>
                                              <li class="list-group-item">
                                                  Місце поховання: {{person.place_of_rip}}
                                              </li>
                                              <li class="list-group-item">
                                                  Дата поховання: {{person.place_of_rip_date}}
                                             </li>
                                              <li class="list-group-item">
                                                  Додаткова інформація: {{person.additional_info}}
                                             </li>
                                          </ul>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                    </div>
                  <hr class="my-5">
<!--                    {#  Carousel images  #}-->


    <PersonCarousel/>



<!--              {#  Загальна інформація  #}-->
            </div>
          </div>
      </div>

  </section>
</template>

<script>

import PersonCarousel from '@/components/Person/PersonCarousel';


export default {
  data(){
        return{
            person: {
                last_name: 'last_name',
                first_name: 'first_name',
                middle_name: 'middle_name',
                images: [
                    {image: 'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8fDA%3D&w=1000&q=80', show: true},
                ],
            },
        };
    },

  components: {
    PersonCarousel,
  },
  // ...
};
</script>

<style scoped>
  .white-popup {
    position: relative;
    background: #FFF;
    padding: 20px;
    width: auto;
    max-width: 70%;
    margin: 20px auto;
  }

  .white-popup img {
    display: block;
    max-width: 100%;
    height: auto;
    margin: 0 auto;
  }

  .carousel {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 300px;
}

.carousel__item {
  margin: 0 10px;
}

.owl-carousel-image {
  width: 200px;
  height: 200px;
  object-fit: cover;
  cursor: pointer;
}

.modal {
  display: none;
  position: fixed;
  z-index: 999;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.9);
}

.modal.is-active {
  display: block;
}

.modal-dialog {
  margin: 10% auto;
  max-width: 600px;
}

.modal-content {
  background-color: #fff;
  padding: 15px;
}

.modal-header {
  border-bottom: 1px solid #ddd;
  padding-bottom: 10px;
}

.close {
  float: right;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
}
</style>

