<template>
  <section>
    <div class="text-center mb-2 pb-2">
      <div class="container-fluid">
        <div class="row">
          <div class="col-xl-3 col-lg-4 col-md-3 col-sm-2"></div>
          <div class="col shadow" id="main_label_carousel">
            <h2 class="text-dark">
              {{ person.last_name || "" }} {{ person.first_name || "" }} {{ person.middle_name || "" }}
            </h2>
          </div>
          <div class="col-xl-3 col-lg-4 col-md-3 col-sm-2"></div>
        </div>
      </div>
    </div>

    <div class="container">
      <ul class="nav nav-tabs" id="myTab" role="tablist">
        <li class="nav-item">
          <a class="nav-link active" id="personal_label" data-bs-toggle="tab" href="#personal" role="tab" aria-controls="personal" aria-selected="true">Особисті дані</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" id="millitary_label" data-bs-toggle="tab" href="#millitary" role="tab" aria-controls="millitary" aria-selected="false">Служба</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" id="inf_label" data-bs-toggle="tab" href="#inf" role="tab" aria-controls="inf" aria-selected="false">Джерела</a>
        </li>
      </ul>

      <div class="tab-content mt-4" id="myTabContent">
        <!-- Особисті дані -->
        <div class="tab-pane fade show active" id="personal" role="tabpanel" aria-labelledby="personal_label">
          <div class="tab-pane-content">
            <div class="container-fluid">
              <div class="row">
                <div class="col-lg-4 col-sm-12 mb-2">
                  <img :src="person.images[0].image" class="rounded mx-auto d-block img-fluid" alt="...">
                </div>
                <div class="col-lg-8 col-sm-12">
                  <div class="card overflow-hidden mb-4">
                    <h5 class="card-header">Особисті дані</h5>
                    <div class="card-body ps" id="vertical-example-1">
                      <div class="card-body p-0">
                        <ul class="list-group list-group-flush">
                          <li class="list-group-item">
                            Прізвище: {{ person.last_name }}
                          </li>
                          <li class="list-group-item">
                            Ім'я: {{ person.first_name }}
                          </li>
                          <li class="list-group-item">
                            По батькові: {{ person.middle_name }}
                          </li>
                          <li class="list-group-item">
                            Дата народження: {{ person.birthday }}
                          </li>
                          <li class="list-group-item">
                            Громадянство: {{ person.citizenship }}
                          </li>
                          <li class="list-group-item">
                            Паспорт: {{ person.passport }}
                          </li>
                          <li class="list-group-item">
                            Ідентифікаційний номер: {{ person.tax_number }}
                          </li>
                        </ul>
                        <Button_report_bug/>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <hr class="my-5">
            <PersonCarousel/>
          </div>
        </div>

        <!-- Служба -->
        <div class="tab-pane fade" id="millitary" role="tabpanel" aria-labelledby="millitary_label">
          <div class="container-fluid">
            <div class="row">
              <div class="col-lg-4 col-sm-12 mb-2">
                <img :src="person.images[0].image" class="rounded mx-auto d-block img-fluid" alt="...">
              </div>
              <div class="col-lg-8 col-sm-12">
                <div class="card overflow-hidden mb-4">
                  <h5 class="card-header">Службові дані</h5>
                  <div class="card-body ps" id="vertical-example-1">
                    <div class="card-body p-0">
                      <ul class="list-group list-group-flush">
                        <li class="list-group-item">
                          Посада: {{ person.rank }}
                        </li>
                        <li class="list-group-item">
                          Місце призову: {{ person.call_place }}
                        </li>
                        <li class="list-group-item">
                          Місце служби: {{ person.service_place }}
                        </li>
                        <li class="list-group-item">
                          Період служби: {{ person.service_period }}
                        </li>
                        <li class="list-group-item">
                          Облік військовослужбовця: {{ person.military_accounting }}
                        </li>
                      </ul>
                      <Button_report_bug/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Джерела -->
        <div class="tab-pane fade" id="inf" role="tabpanel" aria-labelledby="inf_label">
          <div class="card overflow-hidden mb-4">
            <h5 class="card-header">{{ $t('Джерела') }}</h5>
            <div class="card-body ps" id="vertical-example">
              <div class="card-body p-0">
                <ul class="list-group list-group-flush">
                  <li class="list-group-item" v-for="inf in person.source_as_list" :key="inf">
                    <a :href="inf" target="_blank">{{ inf }}</a> <!-- Добавленная ссылка -->
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr class="my-5">
      <SourceCarousel/>
        </div>
      </div>

    </div>
  </section>
</template>

<script>
import SourceCarousel from '@/components/Person/SourceCarousel';
import PersonCarousel from '@/components/Person/PersonCarousel';
import Button_report_bug from '@/components/Person/Button_report_bug';

export default {
  components: {
    PersonCarousel,
    Button_report_bug,
    SourceCarousel,
  },
  data() {
    return {
      person: {
        last_name: 'Прізвище',
        first_name: 'Ім`я',
        middle_name: 'По батькові',
        birthday: '01.01.2000',
        citizenship: 'Україна',
        passport: 'AB123456',
        tax_number: '1234567890',
        service_period: '2020-2023',
        rank: 'Солдат',
        call_place: 'Місто',
        service_place: 'Місто',
        military_accounting: '123456',
        source_as_list: [
          'https://t.me/poisk_in_ua',
          'https://t.me/poisk_in_ua',
          'https://t.me/poisk_in_ua',
        ],
        images: [
          { image: 'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8fDA%3D&w=1000&q=80', show: true },
        ],
      },
    };
  },
};
</script>

<style scoped>
/* Здесь ваши стили CSS */
</style>